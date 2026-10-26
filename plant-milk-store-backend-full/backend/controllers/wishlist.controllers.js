import { Wishlist } from "../models/wishlist.model.js";
export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ userId: req.userId }).populate(
      "productIds",
    );
    res.json({
      success: true,
      wishlist: wishlist || { userId: req.userId, productIds: [] },
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const addWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { userId: req.userId },
      { $addToSet: { productIds: req.body.productId } },
      { new: true, upsert: true },
    ).populate("productIds");
    res.json({ success: true, wishlist });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const removeWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { userId: req.userId },
      { $pull: { productIds: req.params.productId } },
      { new: true },
    );
    res.json({ success: true, wishlist });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
