import { Review } from "../models/review.model.js";
import { Product } from "../models/addProduct.model.js";
import { Order } from "../models/order.model.js";
export const listReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      productId: req.params.productId,
      isPublished: true,
      isApproved: true,
    })
      .populate("userId", "name")
      .sort({ createdAt: -1 });
    res.json({ success: true, reviews });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const createReview = async (req, res) => {
  try {
    const {
      productId,
      orderId,
      rating,
      title,
      comment,
      images = [],
    } = req.body;
    const order = await Order.findOne({
      _id: orderId,
      userId: req.userId,
      status: "Delivered",
      "items.productId": productId,
    });
    if (!order)
      return res
        .status(400)
        .json({
          success: false,
          message: "You can review a delivered product only",
        });
    const exists = await Review.exists({
      productId,
      userId: req.userId,
      orderId,
    });
    if (exists)
      return res
        .status(400)
        .json({ success: false, message: "Review already submitted" });
    const review = await Review.create({
      productId,
      orderId,
      userId: req.userId,
      rating,
      title,
      comment,
      images,
      isApproved: true,
    });
    const stats = await Review.aggregate([
      { $match: { productId, isApproved: true, isPublished: true } },
      { $group: { _id: null, avg: { $avg: "$rating" }, count: { $sum: 1 } } },
    ]);
    await Product.findByIdAndUpdate(productId, {
      ratingAverage: stats[0]?.avg || 0,
      reviewCount: stats[0]?.count || 0,
    });
    res.status(201).json({ success: true, review });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const moderateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!review)
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    res.json({ success: true, review });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
