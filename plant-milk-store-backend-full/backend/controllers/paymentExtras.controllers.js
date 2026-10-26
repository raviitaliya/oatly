import crypto from "crypto";
import Razorpay from "razorpay";
import { Payment } from "../models/payment.model.js";
import { Order } from "../models/order.model.js";
import { Refund } from "../models/refund.model.js";
const getRazorpay = () =>
  new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });
export const webhook = async (req, res) => {
  try {
    const signature = req.headers["x-razorpay-signature"];
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (secret) {
      const expected = crypto
        .createHmac("sha256", secret)
        .update(req.rawBody || JSON.stringify(req.body))
        .digest("hex");
      if (expected !== signature)
        return res
          .status(401)
          .json({ success: false, message: "Invalid webhook signature" });
    }
    const event = req.body.event;
    const p = req.body.payload?.payment?.entity;
    const orderEntity = req.body.payload?.order?.entity;
    if (p) {
      await Payment.findOneAndUpdate(
        { razorpay_payment_id: p.id },
        {
          status: p.status,
          amount: p.amount / 100,
          method: p.method,
          rawResponse: p,
        },
        { upsert: true },
      );
      if (p.order_id)
        await Order.findOneAndUpdate(
          { razorpayOrderId: p.order_id },
          {
            paymentStatus: p.status === "captured" ? "Paid" : "Failed",
            razorpayPaymentId: p.id,
          },
        );
    }
    if (event === "payment.captured" && orderEntity)
      await Order.findOneAndUpdate(
        { razorpayOrderId: orderEntity.id },
        { paymentStatus: "Paid" },
      );
    res.json({ success: true, received: true });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const getPayment = async (req, res) => {
  try {
    const payment = await Payment.findOne({
      $or: [
        { razorpay_payment_id: req.params.id },
        { razorpay_order_id: req.params.id },
      ],
    });
    if (!payment)
      return res
        .status(404)
        .json({ success: false, message: "Payment not found" });
    res.json({ success: true, payment });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const processRefund = async (req, res) => {
  try {
    const refund = await Refund.findById(req.params.id).populate("orderId");
    if (!refund)
      return res
        .status(404)
        .json({ success: false, message: "Refund not found" });
    if (!refund.paymentId)
      return res
        .status(400)
        .json({ success: false, message: "No payment attached" });
    const r = await getRazorpay().payments.refund(refund.paymentId, {
      amount: Math.round(refund.amount * 100),
    });
    refund.razorpayRefundId = r.id;
    refund.status = "processed";
    refund.processedAt = new Date();
    await refund.save();
    await Order.findByIdAndUpdate(refund.orderId._id, {
      paymentStatus: "Refunded",
      status: "Refunded",
    });
    res.json({ success: true, refund });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
