import { Cart } from "../models/cart.model.js";
import { Product } from "../models/addProduct.model.js";
import { ProductVariant } from "../models/productVariant.model.js";

const getStock = async (item) =>
  item.variantId
    ? ProductVariant.findById(item.variantId)
    : Product.findById(item.productId);
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.userId })
      .populate("items.productId")
      .populate("items.variantId");
    res.json({
      success: true,
      cart: cart || { userId: req.userId, items: [] },
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const addToCart = async (req, res) => {
  try {
    const { productId, variantId, quantity = 1 } = req.body;
    if (!productId || quantity < 1)
      return res
        .status(400)
        .json({
          success: false,
          message: "productId and valid quantity are required",
        });
    const stockDoc = await getStock({ productId, variantId });
    if (!stockDoc || stockDoc.isActive === false)
      return res
        .status(404)
        .json({ success: false, message: "Product/variant not found" });
    const stock = Number(stockDoc.stock || 0);
    let cart = await Cart.findOne({ userId: req.userId });
    if (!cart) cart = await Cart.create({ userId: req.userId, items: [] });
    const existing = cart.items.find(
      (i) =>
        String(i.productId) === String(productId) &&
        String(i.variantId || "") === String(variantId || ""),
    );
    const next = (existing?.quantity || 0) + Number(quantity);
    if (next > stock)
      return res
        .status(400)
        .json({ success: false, message: `Only ${stock} items available` });
    if (existing) existing.quantity = next;
    else cart.items.push({ productId, variantId, quantity });
    await cart.save();
    await cart.populate("items.productId items.variantId");
    res.json({ success: true, cart });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const updateCartItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.userId });
    if (!cart)
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    const item = cart.items.id(req.params.itemId);
    if (!item)
      return res
        .status(404)
        .json({ success: false, message: "Cart item not found" });
    const stockDoc = await getStock(item);
    if (Number(req.body.quantity) < 1) {
      item.deleteOne();
    } else {
      if (req.body.quantity > Number(stockDoc?.stock || 0))
        return res
          .status(400)
          .json({ success: false, message: "Insufficient stock" });
      item.quantity = req.body.quantity;
    }
    await cart.save();
    res.json({ success: true, cart });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const removeCartItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.userId });
    if (!cart)
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    cart.items.pull({ _id: req.params.itemId });
    await cart.save();
    res.json({ success: true, cart });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const clearCart = async (req, res) => {
  try {
    await Cart.findOneAndUpdate(
      { userId: req.userId },
      { $set: { items: [] } },
    );
    res.json({ success: true, message: "Cart cleared" });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const cartSummary = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.userId });
    let subtotal = 0;
    const items = [];
    for (const i of cart?.items || []) {
      const p = await getStock(i);
      if (!p) continue;
      const price = Number(p.sellingPrice ?? p.price ?? 0);
      subtotal += price * i.quantity;
      items.push({
        productId: i.productId,
        variantId: i.variantId,
        quantity: i.quantity,
        price,
        total: price * i.quantity,
        stock: p.stock,
      });
    }
    res.json({ success: true, subtotal, items });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
