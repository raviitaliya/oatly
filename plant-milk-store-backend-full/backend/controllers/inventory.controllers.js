import { Product } from "../models/addProduct.model.js";
import { ProductVariant } from "../models/productVariant.model.js";
import { InventoryTransaction } from "../models/inventoryTransaction.model.js";
export const adjustInventory = async (req, res) => {
  try {
    const {
      productId,
      variantId,
      quantity,
      type = "adjustment",
      note,
    } = req.body;
    const Model = variantId ? ProductVariant : Product;
    const doc = await Model.findById(variantId || productId);
    if (!doc)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    const previous = Number(doc.stock || 0);
    const next =
      type === "sale" || type === "damage" || type === "reservation"
        ? previous - Math.abs(Number(quantity))
        : previous + Math.abs(Number(quantity));
    if (next < 0)
      return res
        .status(400)
        .json({ success: false, message: "Insufficient stock" });
    doc.stock = next;
    await doc.save();
    const tx = await InventoryTransaction.create({
      productId,
      variantId,
      type,
      quantity:
        type === "sale" || type === "damage" || type === "reservation"
          ? -Math.abs(Number(quantity))
          : Math.abs(Number(quantity)),
      previousStock: previous,
      newStock: next,
      note,
      performedBy: req.userId,
    });
    res.json({ success: true, stock: next, transaction: tx });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const inventoryTransactions = async (req, res) => {
  try {
    const filter = req.query.productId
      ? { productId: req.query.productId }
      : {};
    res.json({
      success: true,
      transactions: await InventoryTransaction.find(filter)
        .populate("productId", "name productname")
        .populate("performedBy", "name email")
        .sort({ createdAt: -1 })
        .limit(500),
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const lowStock = async (req, res) => {
  try {
    const products = await Product.find({
      $expr: { $lte: ["$stock", "$lowStockThreshold"] },
      isActive: true,
    });
    const variants = await ProductVariant.find({
      $expr: { $lte: ["$stock", "$lowStockThreshold"] },
      isActive: true,
    }).populate("productId", "name productname");
    res.json({ success: true, products, variants });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
