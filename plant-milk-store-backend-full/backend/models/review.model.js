import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    rating: { type: Number, required: true, min: 1, max: 5 },
    title: String,
    comment: String,
    images: [String],
    isApproved: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true },
);
schema.index({ productId: 1, isApproved: 1, createdAt: -1 });
export const Review =
  mongoose.models.Review || mongoose.model("Review", schema);
