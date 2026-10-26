import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      unique: true,
    },
    invoiceNumber: { type: String, required: true, unique: true },
    issuedAt: { type: Date, default: Date.now },
    pdfUrl: String,
    subtotal: Number,
    tax: Number,
    discount: Number,
    deliveryCharge: Number,
    grandTotal: Number,
  },
  { timestamps: true },
);
export const Invoice =
  mongoose.models.Invoice || mongoose.model("Invoice", schema);
