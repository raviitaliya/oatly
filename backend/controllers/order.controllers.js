import crypto from "crypto";
import { User } from "../models/user.model.js";
import { Order } from "../models/order.model.js";
import { DeliveryBoy } from "../models/deliveryProfile.model.js";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

export const createOrder = async (req, res) => {
  const { items, totalAmount, location } = req.body;
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    if (!user || user.role !== "user") {
      return res
        .status(403)
        .json({ success: false, message: "Only users can place orders" });
    }

    const amountInPaise = Math.round(totalAmount * 100);
    const razorpayOrder = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: `order_${Date.now()}`,
      notes: { userId: userId.toString(), items: JSON.stringify(items) },
    });

    const pendingOrder = {
      userId,
      items,
      totalAmount,
      deliveryAddress: {
        address1: user.address1,
        address2: user.address2 || "",
        city: user.city,
        state: user.state,
        country: user.country,
        zipcode: user.zipcode,
      },
      razorpayOrderId: razorpayOrder.id,
      status: "Pending Payment",
      location: location || { type: "Point", coordinates: [72.8311, 21.1702] },
    };

    res.status(200).json({
      success: true,
      message: "Order created, proceed to payment",
      order: {
        orderId: razorpayOrder.id,
        amount: totalAmount,
        currency: "INR",
        key: process.env.RAZORPAY_KEY_ID,
        user: { name: user.name, email: user.email, mobile: user.mobile },
      },
      pendingOrder,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const verifyPayment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    items,
    totalAmount,
    deliveryAddress,
    location,
  } = req.body;
  const userId = req.userId;

  console.log("Received in verifyPayment:", req.body);

  try {
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid payment signature" });
    }

    const payment = await razorpay.payments.fetch(razorpay_payment_id);
    if (payment.status !== "captured") {
      return res
        .status(400)
        .json({ success: false, message: "Payment not captured" });
    }

    const orderData = {
      userId,
      items: items.map((item) => ({
        productName: item.productName,
        quantity: Number(item.quantity),
        price: Number(item.price),
        productImage: item.productImage,
      })),
      totalAmount: Number(totalAmount),
      deliveryAddress,
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      status: "Pending",
      location: location || { type: "Point", coordinates: [72.8311, 21.1702] },
    };

    // console.log("Order Data to Save:", orderData);

    const order = new Order(orderData);
    await order.save();

    // console.log("Saved Order:", order);

    res.status(201).json({
      success: true,
      message: "Payment verified and order confirmed",
      order: {
        orderId: order._id,
        items: order.items,
        totalAmount: order.totalAmount,
        deliveryAddress: order.deliveryAddress,
        status: order.status,
        createdAt: order.createdAt,
      },
    });
  } catch (error) {
    console.error("Error in verifyPayment:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Assign Order to Delivery Boy (Admin or Automated)
export const assignOrder = async (req, res) => {
  const { orderId } = req.params;
  const { deliveryBoyId } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ success: false, message: "Order not found" });

    const deliveryBoy = await DeliveryBoy.findById(deliveryBoyId);
    if (!deliveryBoy) return res.status(404).json({ success: false, message: "Delivery boy not found" });

    order.deliveryBoyId = deliveryBoyId;
    order.status = "Out for Delivery";
    await order.save();

    res.status(200).json({ success: true, message: "Delivery boy assigned", order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Order Details (User or Admin)
export const getOrderDetails = async (req, res) => {
  const { orderId } = req.params;
  const userId = req.userId;

  try {
    const order = await Order.findById(orderId)
      .populate("userId", "name mobile")
      .populate("deliveryBoyId", "fullName mobile");
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    if (req.userRole === "user" && order.userId._id.toString() !== userId) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized access" });
    }

    res.status(200).json({
      success: true,
      order: {
        orderId: order._id,
        items: order.items,
        totalAmount: order.totalAmount,
        deliveryAddress: order.deliveryAddress,
        status: order.status,
        user: order.userId,
        deliveryBoy: order.deliveryBoyId || null,
        location: order.location,
        createdAt: order.createdAt,
        assignedAt: order.assignedAt,
        deliveredAt: order.deliveredAt,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get User Orders ✔
export const getUserOrders = async (req, res) => {
  const userId = req.userId;

  try {
    const orders = await Order.find({ userId }).populate(
      "deliveryBoyId",
      "fullName mobile"
    );
    res.status(200).json({
      success: true,
      orders: orders.map((order) => ({
        orderId: order._id,
        items: order.items.map((item) => ({
          productName: item.productName,
          quantity: item.quantity,
          price: item.price,
          productImage: item.productImage,
        })),
        totalAmount: order.totalAmount,
        deliveryAddress: order.deliveryAddress,
        status: order.status,
        deliveryBoy: order.deliveryBoyId || null,
        createdAt: order.createdAt,
        deliveredAt: order.deliveredAt,
      })),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Cancel Order (Before Assignment) ✔
export const cancelOrder = async (req, res) => {
  const { orderId } = req.body;
  const userId = req.userId;

  try {
    const order = await Order.findOne({ _id: orderId, userId });
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    if (order.status !== "Pending") {
      return res
        .status(400)
        .json({ success: false, message: "Cannot cancel after assignment" });
    }

    order.status = "Cancelled";
    await order.save();

    res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      order: { orderId: order._id, status: order.status },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Submit Feedback
export const submitFeedback = async (req, res) => {
  const { orderId, rating, comment } = req.body;
  const userId = req.userId;

  try {
    const order = await Order.findOne({ _id: orderId, userId });
    if (!order || order.status !== "Delivered") {
      return res
        .status(400)
        .json({ success: false, message: "Order not delivered yet" });
    }

    const feedback = new Feedback({ orderId, userId, rating, comment });
    await feedback.save();

    res
      .status(201)
      .json({ success: true, message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Auto-Assign Order
export const autoAssignOrder = async (req, res) => {
  const { orderId } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order || order.status !== "Pending") {
      return res.status(400).json({
        success: false,
        message: "Order not found or already assigned",
      });
    }

    const deliveryBoys = await DeliveryBoy.find({
      isAvailable: true,
      status: "active",
    });
    if (deliveryBoys.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No available delivery boys" });
    }

    // Simple nearest logic (replace with geo-query if needed)
    const nearestDeliveryBoy = deliveryBoys[0];
    order.deliveryBoyId = nearestDeliveryBoy._id;
    order.status = "Assigned";
    order.assignedAt = new Date();
    nearestDeliveryBoy.isAvailable = false;
    await order.save();
    await nearestDeliveryBoy.save();

    res.status(200).json({
      success: true,
      message: "Order auto-assigned successfully",
      order: {
        orderId: order._id,
        deliveryBoyId: order.deliveryBoyId,
        status: order.status,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email")
      .populate("deliveryBoyId", "fullName mobile");
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const validStatuses = [
      "Pending Payment",
      "Active",
      "Out for Delivery",
      "Delivered",
    ];
    if (!validStatuses.includes(status)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid status" });
    }

    const order = await Order.findById(orderId);
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });

    order.status = status;
    await order.save();

    res
      .status(200)
      .json({ success: true, message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
