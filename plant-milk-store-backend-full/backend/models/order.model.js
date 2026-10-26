import mongoose from "mongoose";

const statusHistorySchema = new mongoose.Schema({
  status: { type: String, required: true },
  note: String,
  changedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  changedAt: { type: Date, default: Date.now },
}, { _id: false });

const itemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  variantId: { type: mongoose.Schema.Types.ObjectId, ref: "ProductVariant" },
  productName: { type: String, required: true },
  sku: String,
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 },
  mrp: Number,
  tax: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  productImage: String,
}, { _id: false });

const addressSchema = new mongoose.Schema({
  address1: { type: String, required: true }, address2: String, city: { type: String, required: true },
  state: { type: String, required: true }, country: { type: String, required: true }, zipcode: { type: String, required: true },
  fullName: String, mobile: String, addressId: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
}, { _id: false });

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  items: { type: [itemSchema], required: true },
  totalAmount: { type: Number, required: true, min: 0 },
  subtotal: { type: Number, default: 0 },
  taxAmount: { type: Number, default: 0 },
  discountAmount: { type: Number, default: 0 },
  deliveryCharge: { type: Number, default: 0 },
  couponCode: String,
  couponId: { type: mongoose.Schema.Types.ObjectId, ref: "Coupon" },
  deliveryAddress: { type: addressSchema, required: true },
  deliverySlot: { date: Date, startTime: String, endTime: String },
  paymentMethod: { type: String, default: "razorpay" },
  paymentStatus: { type: String, enum: ["Pending", "Created", "Paid", "Failed", "Refunded", "Partially Refunded"], default: "Pending" },
  razorpayOrderId: { type: String, required: false, index: true },
  razorpayPaymentId: { type: String, index: true },
  razorpaySignature: String,
  status: { type: String, default: "Pending", enum: ["Pending Payment", "Pending", "Confirmed", "Processing", "Packed", "Assigned", "Out for Delivery", "Delivered", "Cancelled", "Failed", "Refunded", "Returned"] },
  statusHistory: { type: [statusHistorySchema], default: [] },
  deliveryBoyId: { type: mongoose.Schema.Types.ObjectId, ref: "DeliveryBoy" },
  location: { type: { type: String, enum: ["Point"], default: "Point" }, coordinates: { type: [Number], default: undefined } },
  assignedAt: Date, deliveredAt: Date, cancelledAt: Date, cancelReason: String,
  trackingNumber: String, notes: String, invoiceNumber: String,
  idempotencyKey: { type: String, index: true, sparse: true },
}, { timestamps: true });

orderSchema.index({ location: "2dsphere" });
orderSchema.index({ userId: 1, createdAt: -1 });
orderSchema.index({ status: 1, createdAt: -1 });
orderSchema.index({ razorpayOrderId: 1 });

orderSchema.pre("save", function(next) {
  if (this.isNew && (!this.statusHistory || this.statusHistory.length === 0)) {
    this.statusHistory = [{ status: this.status, changedAt: new Date() }];
  }
  next();
});

export const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
