import mongoose from "mongoose";
const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    label: { type: String, enum: ["home", "office", "other"], default: "home" },
    fullName: String,
    mobile: String,
    address1: { type: String, required: true },
    address2: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, default: "India" },
    zipcode: { type: String, required: true },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: undefined },
    },
    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true },
);
addressSchema.index({ location: "2dsphere" });
export const Address =
  mongoose.models.Address || mongoose.model("Address", addressSchema);
