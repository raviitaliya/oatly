import crypto from "crypto";
import Razorpay from "razorpay";
import { Cart } from "../models/cart.model.js";
import { Product } from "../models/addProduct.model.js";
import { ProductVariant } from "../models/productVariant.model.js";
import { Address } from "../models/address.model.js";
import { Coupon } from "../models/coupon.model.js";
import { CouponUsage } from "../models/couponUsage.model.js";
import { Order } from "../models/order.model.js";
import { Payment } from "../models/payment.model.js";
import { InventoryTransaction } from "../models/inventoryTransaction.model.js";
import { User } from "../models/user.model.js";
import { sendOrderConfirmationEmail } from "../email/email.js";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

async function priceCart(userId, couponCode = "") {
  const cart = await Cart.findOne({ userId }).lean();
  if (!cart?.items?.length) throw new Error("Cart is empty");
  const items = [];
  let subtotal = 0;
  for (const item of cart.items) {
    const doc = item.variantId
      ? await ProductVariant.findById(item.variantId).lean()
      : await Product.findById(item.productId).lean();
    if (!doc || doc.isActive === false)
      throw new Error("A product in your cart is unavailable");
    if (Number(item.quantity) > Number(doc.stock || 0))
      throw new Error(`Insufficient stock for ${doc.name || doc.productname}`);
    const price = Number(doc.price ?? doc.sellingPrice ?? 0);
    items.push({
      productId: item.productId,
      variantId: item.variantId,
      productName: doc.name || doc.productname,
      sku: doc.sku,
      quantity: item.quantity,
      price,
      mrp: Number(doc.mrp || price),
      productImage: doc.image || doc.images?.[0],
    });
    subtotal += price * Number(item.quantity);
  }
  let discount = 0;
  let coupon = null;
  if (couponCode) {
    coupon = await Coupon.findOne({
      code: String(couponCode).toUpperCase(),
      isActive: true,
    });
    const now = new Date();
    if (
      !coupon ||
      now < coupon.startsAt ||
      (coupon.endsAt && now > coupon.endsAt) ||
      (coupon.usageLimit != null && coupon.usedCount >= coupon.usageLimit)
    )
      throw new Error("Coupon is invalid or expired");
    if (subtotal < coupon.minOrderAmount)
      throw new Error(`Minimum order amount is ${coupon.minOrderAmount}`);
    const used = await CouponUsage.countDocuments({
      couponId: coupon._id,
      userId,
    });
    if (used >= coupon.perUserLimit)
      throw new Error("Coupon usage limit reached");
    discount =
      coupon.type === "percentage"
        ? (subtotal * coupon.value) / 100
        : coupon.value;
    if (coupon.maxDiscount != null)
      discount = Math.min(discount, coupon.maxDiscount);
    discount = Math.min(discount, subtotal);
  }
  return { items, subtotal, discount, coupon };
}

export const createCheckout = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    const {
      addressId,
      couponCode,
      deliveryCharge = 0,
      deliverySlot,
      notes,
    } = req.body;
    const address = addressId
      ? await Address.findOne({ _id: addressId, userId: req.userId })
      : null;
    const deliveryAddress = address
      ? address.toObject()
      : {
          address1: user.address1,
          address2: user.address2,
          city: user.city,
          state: user.state,
          country: user.country,
          zipcode: user.zipcode,
          fullName: user.name,
          mobile: user.mobile,
        };
    const priced = await priceCart(req.userId, couponCode);
    const taxAmount = Number(
      (
        ((priced.subtotal - priced.discount) *
          Number(process.env.DEFAULT_TAX_RATE || 0)) /
        100
      ).toFixed(2),
    );
    const total = Number(
      (
        priced.subtotal -
        priced.discount +
        taxAmount +
        Number(deliveryCharge || 0)
      ).toFixed(2),
    );
    const rOrder = await razorpay.orders.create({
      amount: Math.round(total * 100),
      currency: "INR",
      receipt: `checkout_${Date.now()}`,
      notes: { userId: String(req.userId) },
    });
    const order = await Order.create({
      userId: req.userId,
      items: priced.items,
      totalAmount: total,
      subtotal: priced.subtotal,
      discountAmount: priced.discount,
      taxAmount,
      deliveryCharge: Number(deliveryCharge || 0),
      couponCode: priced.coupon?.code,
      couponId: priced.coupon?._id,
      deliveryAddress,
      deliverySlot,
      paymentMethod: "razorpay",
      paymentStatus: "Created",
      razorpayOrderId: rOrder.id,
      status: "Pending Payment",
      notes,
    });
    res
      .status(201)
      .json({
        success: true,
        orderId: order._id,
        razorpayOrderId: rOrder.id,
        amount: total,
        currency: "INR",
        key: process.env.RAZORPAY_API_KEY || process.env.RAZORPAY_KEY_ID,
        order,
      });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};

export const verifyCheckout = async (req, res) => {
  try {
    const {
      orderId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;
    const order = await Order.findOne({
      _id: orderId,
      userId: req.userId,
      razorpayOrderId: razorpay_order_id,
    });
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    if (order.paymentStatus === "Paid")
      return res.json({
        success: true,
        message: "Payment already verified",
        order,
      });
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");
    if (expected !== razorpay_signature)
      return res
        .status(400)
        .json({ success: false, message: "Invalid payment signature" });
    const payment = await razorpay.payments.fetch(razorpay_payment_id);
    if (payment.status !== "captured")
      return res
        .status(400)
        .json({ success: false, message: "Payment not captured" });
    const fresh = await Order.findOneAndUpdate(
      { _id: order._id, paymentStatus: { $ne: "Paid" } },
      {
        paymentStatus: "Paid",
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: "Confirmed",
        $push: {
          statusHistory: {
            status: "Confirmed",
            changedBy: req.userId,
            changedAt: new Date(),
          },
        },
      },
      { new: true },
    );
    if (!fresh)
      return res.json({
        success: true,
        message: "Payment already processed",
        order,
      });
    for (const item of fresh.items) {
      const Model = item.variantId ? ProductVariant : Product;
      const id = item.variantId || item.productId;
      const available = await Model.findOne({ _id: id }).select("stock");
      if (!available || Number(available.stock) < Number(item.quantity))
        throw new Error(`Stock changed while paying for ${item.productName}`);
    }
    for (const item of fresh.items) {
      const Model = item.variantId ? ProductVariant : Product;
      const id = item.variantId || item.productId;
      const doc = await Model.findOneAndUpdate(
        { _id: id, stock: { $gte: item.quantity } },
        { $inc: { stock: -item.quantity } },
        { new: true },
      );
      if (!doc)
        throw new Error(`Stock changed while paying for ${item.productName}`);
      await InventoryTransaction.create({
        productId: item.productId,
        variantId: item.variantId,
        type: "sale",
        quantity: -item.quantity,
        previousStock: Number(doc.stock) + item.quantity,
        newStock: Number(doc.stock),
        referenceType: "Order",
        referenceId: fresh._id,
        note: "Checkout sale",
        performedBy: req.userId,
      });
    }
    await Payment.findOneAndUpdate(
      { razorpay_order_id: razorpay_order_id },
      {
        razorpay_order_id: razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        amount: fresh.totalAmount,
        status: "captured",
        orderId: fresh._id,
      },
      { upsert: true, new: true },
    );
    if (fresh.couponId) {
      await CouponUsage.create({
        couponId: fresh.couponId,
        userId: req.userId,
        orderId: fresh._id,
      });
      await Coupon.findByIdAndUpdate(fresh.couponId, {
        $inc: { usedCount: 1 },
      });
    }
    await Cart.findOneAndUpdate(
      { userId: req.userId },
      { $set: { items: [] } },
    );
    const user = await User.findById(req.userId).select("email name");
    if (user?.email)
      sendOrderConfirmationEmail(user.email, user.name, fresh).catch(() => {});
    res.json({
      success: true,
      message: "Payment verified and order confirmed",
      order: fresh,
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
