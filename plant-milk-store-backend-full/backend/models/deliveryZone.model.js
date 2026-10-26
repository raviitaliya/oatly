import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    pincodes: [String],
    center: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: [Number],
    },
    radiusKm: Number,
    deliveryCharge: { type: Number, default: 0 },
    minOrderAmount: { type: Number, default: 0 },
    freeDeliveryAbove: Number,
    estimatedMinutes: Number,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);
schema.index({ center: "2dsphere" });
export const DeliveryZone =
  mongoose.models.DeliveryZone || mongoose.model("DeliveryZone", schema);
