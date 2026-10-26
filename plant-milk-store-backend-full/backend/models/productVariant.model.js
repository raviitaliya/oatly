import mongoose from "mongoose";
const variantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true, uppercase: true },
    barcode: { type: String, sparse: true, index: true },
    size: String,
    unit: String,
    price: { type: Number, required: true, min: 0 },
    mrp: { type: Number, min: 0 },
    stock: { type: Number, min: 0, default: 0 },
    lowStockThreshold: { type: Number, min: 0, default: 10 },
    weight: Number,
    images: [String],
    isDefault: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);
variantSchema.index({ productId: 1, isActive: 1 });
export const ProductVariant =
  mongoose.models.ProductVariant ||
  mongoose.model("ProductVariant", variantSchema);
