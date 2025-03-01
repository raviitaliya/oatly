// controllers/order.controller.js
import crypto from "crypto";
import { User } from "../models/user.model.js";
import { Order } from "../models/order.model.js";
import { DeliveryBoy } from "../models/deliveryProfile.model.js";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

// Create a New Order with Razorpay Payment ✔
export const createOrder = async (req, res) => {
  const { items, totalAmount, deliveryAddress, location } = req.body;
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
      notes: {
        userId: userId.toString(),
        items: JSON.stringify(items),
      },
    });

    const pendingOrder = {
      userId,
      items,
      totalAmount,
      deliveryAddress: deliveryAddress || {
        address1: user.address1,
        address2: user.address2 || "",
        city: user.city,
        state: user.state,
        country: user.country,
        zipcode: user.zipcode,
      },
      razorpayOrderId: razorpayOrder.id,
      status: "Pending Payment",
      location, // Include the full location object from frontend
    };

    res.status(200).json({
      success: true,
      message: "Order created, proceed to payment",
      order: {
        orderId: razorpayOrder.id,
        amount: totalAmount,
        currency: "INR",
        key: process.env.RAZORPAY_KEY_ID,
        user: {
          name: user.name,
          email: user.email,
          mobile: user.mobile,
        },
      },
      pendingOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Verify Payment and Confirm Order ✔
export const verifyPayment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    items,
    productImage,
    totalAmount,
    deliveryAddress,
    location, // Ensure location is destructured from req.body
  } = req.body;
  const userId = req.userId;

  try {
    console.log(
      "RAZORPAY_KEY_SECRET in verifyPayment:",
      process.env.RAZORPAY_API_SECRET
    );
    console.log("Location from req.body:", location); // Debug location
    if (!process.env.RAZORPAY_API_SECRET) {
      throw new Error("RAZORPAY_KEY_SECRET is not defined");
    }

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

    const user = await User.findById(userId);
    const order = new Order({
      userId,
      items,
      productImage,
      totalAmount,
      deliveryAddress: deliveryAddress || {
        address1: user.address1,
        address2: user.address2 || "",
        city: user.city,
        state: user.state,
        country: user.country,
        zipcode: user.zipcode,
      },
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      status: "Pending",
      location: location || {
        
        type: "Point",
        coordinates: [72.8311, 21.1702], 
      },
    });

    await order.save();

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
    console.error("Error verifying payment:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Assign Order to Delivery Boy (Admin or Automated)
export const assignOrder = async (req, res) => {
  const { orderId, deliveryBoyId } = req.body;
  console.log("Assign Order:", orderId, deliveryBoyId);

  try {
    const order = await Order.findById(orderId);
    if (!order || order.status !== "Pending") {
      return res.status(400).json({
        success: false,
        message: "Order not found or already assigned",
      });
    }

    const deliveryBoy = await DeliveryBoy.findById(deliveryBoyId);
    if (
      !deliveryBoy ||
      !deliveryBoy.isAvailable ||
      deliveryBoy.status !== "active"
    ) {
      return res.status(400).json({
        success: false,
        message: "Delivery boy not found or unavailable",
      });
    }

    order.deliveryBoyId = deliveryBoyId;
    order.status = "Assigned";
    order.assignedAt = new Date();
    await order.save();

    res.status(200).json({
      success: true,
      message: "Order assigned successfully",
      order: {
        orderId: order._id,
        deliveryBoyId: order.deliveryBoyId,
        status: order.status,
        assignedAt: order.assignedAt,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Order Details (User or Admin)
export const getOrderDetails = async (req, res) => {
  const { orderId } = req.params;
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    const order = await Order.findById(orderId)
      .populate("userId", "name mobile")
      .populate("deliveryBoyId", "fullName mobile");

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    if (user.role === "user" && order.userId._id.toString() !== userId) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized access" });
    }

    res.status(200).json({
      success: true,
      message: "Order details retrieved successfully",
      order: {
        orderId: order._id,
        items: order.items,
        totalAmount: order.totalAmount,
        deliveryAddress: order.deliveryAddress,
        status: order.status,
        user: order.userId,
        deliveryBoy: order.deliveryBoyId || null,
        razorpayOrderId: order.razorpayOrderId,
        razorpayPaymentId: order.razorpayPaymentId,
        createdAt: order.createdAt,
        assignedAt: order.assignedAt,
        deliveredAt: order.deliveredAt,
        location: order.location,
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
    const user = await User.findById(userId);
    if (!user || user.role !== "user") {
      return res
        .status(403)
        .json({ success: false, message: "Only users can view their orders" });
    }

    const orders = await Order.find({ userId }).populate(
      "deliveryBoyId",
      "fullName mobile"
    );

    res.status(200).json({
      success: true,
      message: "Orders retrieved successfully",
      orders: orders.map((order) => ({
        orderId: order._id,
        items: order.items,
        productImage: order.productImage,
        totalAmount: order.totalAmount,
        status: order.status,
        deliveryBoy: order.deliveryBoyId || null,
        razorpayOrderId: order.razorpayOrderId,
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
      return res.status(400).json({
        success: false,
        message: "Cannot cancel order after assignment",
      });
    }

    order.status = "Cancelled";
    await order.save();

    // Optionally refund via Razorpay if payment was made (manual refund for now)
    res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      order: {
        orderId: order._id,
        status: order.status,
      },
    });
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
      return res.status(404).json({
        success: false,
        message: "No available delivery boys",
      });
    }

    const nearestDeliveryBoy = deliveryBoys[0]; // Replace with geo-query logic
    order.deliveryBoyId = nearestDeliveryBoy._id;
    order.status = "Assigned";
    order.assignedAt = new Date();
    await order.save();

    res.status(200).json({
      success: true,
      message: "Order auto-assigned successfully",
      order: {
        orderId: order._id,
        deliveryBoyId: order.deliveryBoyId,
        status: order.status,
        assignedAt: order.assignedAt,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
