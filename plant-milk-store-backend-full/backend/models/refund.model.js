import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    paymentId: String,
    amount: { type: Number, required: true },
    reason: String,
    status: {
      type: String,
      enum: ["requested", "processed", "failed", "rejected"],
      default: "requested",
    },
    razorpayRefundId: String,
    processedAt: Date,
    requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);
export const Refund =
  mongoose.models.Refund || mongoose.model("Refund", schema);
