import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
    resolved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);