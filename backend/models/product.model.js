import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String },
});

export const Product = mongoose.model("Product", productSchema);
