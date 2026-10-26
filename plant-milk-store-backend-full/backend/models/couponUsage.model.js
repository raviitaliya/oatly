import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    couponId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coupon",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  },
  { timestamps: true },
);
schema.index({ couponId: 1, userId: 1 });
export const CouponUsage =
  mongoose.models.CouponUsage || mongoose.model("CouponUsage", schema);
