import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    desription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    heading1: {
      type: String,
      required: true,
    },
    desription1: {
      type: String,
      required: true,
    },
    heading2: {
      type: String,
      required: true,
    },
    desription2: {
      type: String,
      required: true,
    },
    qustion1: {
      type: String,
      required: true,
    },
    answer1: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", productSchema);
