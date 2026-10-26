import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    razorpay_order_id: { type: String, required: true, index: true },
    razorpay_payment_id: { type: String, required: true, index: true },
    razorpay_signature: { type: String },
    amount: Number,
    currency: { type: String, default: "INR" },
    method: String,
    status: {
      type: String,
      enum: ["created", "authorized", "captured", "failed", "refunded"],
      default: "captured",
    },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    rawResponse: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true },
);
export const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
