import { Coupon } from "../models/coupon.model.js";
import { CouponUsage } from "../models/couponUsage.model.js";
import { Order } from "../models/order.model.js";
export const validateCoupon = async (req, res) => {
  try {
    const code = String(req.body.code || "").toUpperCase();
    const subtotal = Number(req.body.subtotal || 0);
    const coupon = await Coupon.findOne({ code, isActive: true });
    const now = new Date();
    if (
      !coupon ||
      now < coupon.startsAt ||
      (coupon.endsAt && now > coupon.endsAt) ||
      (coupon.usageLimit != null && coupon.usedCount >= coupon.usageLimit)
    )
      return res
        .status(400)
        .json({ success: false, message: "Coupon is invalid or expired" });
    if (subtotal < coupon.minOrderAmount)
      return res
        .status(400)
        .json({
          success: false,
          message: `Minimum order amount is ${coupon.minOrderAmount}`,
        });
    const used = await CouponUsage.countDocuments({
      couponId: coupon._id,
      userId: req.userId,
    });
    if (used >= coupon.perUserLimit)
      return res
        .status(400)
        .json({ success: false, message: "Coupon usage limit reached" });
    if (
      coupon.firstOrderOnly &&
      (await Order.exists({ userId: req.userId, paymentStatus: "Paid" }))
    )
      return res
        .status(400)
        .json({ success: false, message: "Coupon is for first order only" });
    let discount =
      coupon.type === "percentage"
        ? (subtotal * coupon.value) / 100
        : coupon.value;
    if (coupon.maxDiscount != null)
      discount = Math.min(discount, coupon.maxDiscount);
    discount = Math.min(discount, subtotal);
    res.json({
      success: true,
      coupon: {
        id: coupon._id,
        code: coupon.code,
        type: coupon.type,
        value: coupon.value,
      },
      discount,
      finalAmount: subtotal - discount,
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const createCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.create({
      ...req.body,
      code: String(req.body.code).toUpperCase(),
    });
    res.status(201).json({ success: true, coupon });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const listCoupons = async (req, res) => {
  try {
    res.json({
      success: true,
      coupons: await Coupon.find().sort({ createdAt: -1 }),
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!coupon)
      return res
        .status(404)
        .json({ success: false, message: "Coupon not found" });
    res.json({ success: true, coupon });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true },
    );
    res.json({ success: true, coupon });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
