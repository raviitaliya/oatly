// models/order.model.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productImage: { type: String, required: true },
        productName: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    deliveryAddress: {
      address1: { type: String, required: true },
      address2: { type: String },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      zipcode: { type: String, required: true },
    },
    status: {
      type: String,
      enum: [
        "Pending Payment",
        "Pending",
        "Assigned",
        "Out for Delivery",
        "Delivered",
        "Cancelled",
      ],
      default: "Pending Payment",
    },
    deliveryBoyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryBoy",
      default: null,
    },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
    assignedAt: { type: Date },
    deliveredAt: { type: Date },
    location: {
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },
  },
  { timestamps: true }
);

orderSchema.index({ location: "2dsphere" });

export const Order = mongoose.model("Order", orderSchema);
