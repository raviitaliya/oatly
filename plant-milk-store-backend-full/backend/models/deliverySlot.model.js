import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    capacity: { type: Number, required: true },
    booked: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);
schema.index({ date: 1, isActive: 1 });
export const DeliverySlot =
  mongoose.models.DeliverySlot || mongoose.model("DeliverySlot", schema);
