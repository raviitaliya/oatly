import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [{
      productName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      productImage: { type: String },
    }],
    totalAmount: { type: Number, required: true },
    deliveryAddress: {
      address1: { type: String, required: true },
      address2: { type: String },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      zipcode: { type: String, required: true },
    },
    razorpayOrderId: { type: String, required: true },
    razorpayPaymentId: { type: String },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Assigned", "Out for Delivery", "Delivered", "Cancelled"],
    },
    deliveryBoyId: { type: mongoose.Schema.Types.ObjectId, ref: "DeliveryBoy" },
    location: {
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },
    assignedAt: { type: Date },
    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

orderSchema.index({ location: "2dsphere" });

// Check for middleware that might alter items
orderSchema.pre("save", function(next) {
  console.log("Pre-save middleware - Items before save:", this.items);
  next();
});

export const Order = mongoose.model("Order", orderSchema);