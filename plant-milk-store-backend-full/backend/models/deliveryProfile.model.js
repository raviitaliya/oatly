import mongoose from "mongoose";

const deliveryBoySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    vehicleDetails: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    location: {
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },
    totalDeliveries: {
      type: Number,
      default: 0,
    },
    earnings: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "suspended"],
      default: "active",
    },
  },
  { timestamps: true }
);

deliveryBoySchema.index({ location: "2dsphere" });

export const DeliveryBoy = mongoose.model("DeliveryBoy", deliveryBoySchema);
