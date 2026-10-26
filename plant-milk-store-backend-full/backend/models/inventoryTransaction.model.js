import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },
    variantId: { type: mongoose.Schema.Types.ObjectId, ref: "ProductVariant" },
    type: {
      type: String,
      enum: [
        "purchase",
        "sale",
        "return",
        "adjustment",
        "damage",
        "restock",
        "reservation",
        "release",
      ],
      required: true,
    },
    quantity: { type: Number, required: true },
    previousStock: Number,
    newStock: Number,
    referenceType: String,
    referenceId: mongoose.Schema.Types.ObjectId,
    note: String,
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);
export const InventoryTransaction =
  mongoose.models.InventoryTransaction ||
  mongoose.model("InventoryTransaction", schema);
