import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // Legacy fields kept for the existing frontend/API.
    productname: { type: String, required: true, trim: true },
    desription: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true, trim: true },
    heading1: { type: String, required: true },
    desription1: { type: String, required: true },
    heading2: { type: String, required: true },
    desription2: { type: String, required: true },
    qustion1: { type: String, required: true },
    answer1: { type: String, required: true },
    price: { type: String, required: true },

    // Expanded real-store catalog fields.
    name: { type: String, trim: true, index: true },
    slug: { type: String, unique: true, sparse: true, index: true },
    sku: {
      type: String,
      unique: true,
      sparse: true,
      uppercase: true,
      trim: true,
    },
    brand: { type: String, default: "Plant Milk Store", trim: true },
    subcategory: { type: String, trim: true },
    shortDescription: String,
    description: String,
    gallery: [{ type: String }],
    mrp: { type: Number, min: 0 },
    sellingPrice: { type: Number, min: 0 },
    taxRate: { type: Number, min: 0, default: 0 },
    stock: { type: Number, min: 0, default: 0 },
    lowStockThreshold: { type: Number, min: 0, default: 10 },
    unit: { type: String, default: "piece" },
    netQuantity: String,
    weight: Number,
    barcode: { type: String, sparse: true, index: true },
    ingredients: [String],
    allergens: [String],
    nutrition: { type: mongoose.Schema.Types.Mixed, default: {} },
    shelfLife: String,
    storageInstructions: String,
    manufacturingInfo: String,
    expiryInfo: String,
    isVegan: { type: Boolean, default: true },
    isOrganic: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    isBestseller: { type: Boolean, default: false },
    isNew: { type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
    ratingAverage: { type: Number, min: 0, max: 5, default: 0 },
    reviewCount: { type: Number, min: 0, default: 0 },
    variantIds: [
      { type: mongoose.Schema.Types.ObjectId, ref: "ProductVariant" },
    ],
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
  },
  { timestamps: true, strict: true, suppressReservedKeysWarning: true },
);

productSchema.index({
  name: "text",
  productname: "text",
  description: "text",
  desription: "text",
  category: "text",
});
productSchema.index({ category: 1, isActive: 1, createdAt: -1 });
productSchema.index({ stock: 1, isActive: 1 });

productSchema.pre("validate", function (next) {
  if (!this.name && this.productname) this.name = this.productname;
  if (!this.description && this.desription) this.description = this.desription;
  if (this.sellingPrice == null && this.price != null && this.price !== "")
    this.sellingPrice = Number(this.price);
  if (this.mrp == null && this.sellingPrice != null)
    this.mrp = this.sellingPrice;
  if (!this.image && this.gallery?.length) this.image = this.gallery[0];
  if (!this.gallery?.length && this.image) this.gallery = [this.image];
  next();
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
