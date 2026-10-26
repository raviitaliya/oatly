import mongoose from "mongoose";
const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, uppercase: true, trim: true },
  description: String,
  type: { type: String, enum: ["percentage", "fixed"], required: true },
  value: { type: Number, required: true, min: 0 },
  maxDiscount: Number, minOrderAmount: { type: Number, default: 0 },
  startsAt: { type: Date, default: Date.now }, endsAt: Date,
  usageLimit: Number, usedCount: { type: Number, default: 0 }, perUserLimit: { type: Number, default: 1 },
  firstOrderOnly: { type: Boolean, default: false },
  productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  isActive: { type: Boolean, default: true },
}, { timestamps: true });
export const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);
