import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        variantId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ProductVariant",
        },
        quantity: { type: Number, min: 1, required: true },
      },
    ],
    frequencyDays: { type: Number, enum: [7, 15, 30], default: 30 },
    nextRunAt: { type: Date, required: true },
    addressId: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    status: {
      type: String,
      enum: ["active", "paused", "cancelled"],
      default: "active",
    },
    paymentMethod: { type: String, default: "razorpay" },
  },
  { timestamps: true },
);
schema.index({ status: 1, nextRunAt: 1 });
export const Subscription =
  mongoose.models.Subscription || mongoose.model("Subscription", schema);
