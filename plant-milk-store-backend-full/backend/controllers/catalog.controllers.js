import { Product } from "../models/addProduct.model.js";
import { Category } from "../models/category.model.js";
import { ProductVariant } from "../models/productVariant.model.js";

const slugify = (v) =>
  String(v || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const listProducts = async (req, res) => {
  try {
    const {
      q,
      category,
      categoryId,
      minPrice,
      maxPrice,
      sort = "newest",
      page = 1,
      limit = 20,
      featured,
      bestseller,
      vegan,
      organic,
      active = "true",
    } = req.query;
    const filter = {};
    if (active !== "all") filter.isActive = active !== "false";
    if (q) filter.$text = { $search: q };
    if (category)
      filter.category = new RegExp(
        `^${String(category).replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}$`,
        "i",
      );
    if (categoryId) filter.categoryId = categoryId;
    if (minPrice || maxPrice)
      filter.sellingPrice = {
        ...(minPrice ? { $gte: Number(minPrice) } : {}),
        ...(maxPrice ? { $lte: Number(maxPrice) } : {}),
      };
    if (featured !== undefined) filter.isFeatured = featured === "true";
    if (bestseller !== undefined) filter.isBestseller = bestseller === "true";
    if (vegan !== undefined) filter.isVegan = vegan === "true";
    if (organic !== undefined) filter.isOrganic = organic === "true";
    const pageNum = Math.max(1, Number(page));
    const pageSize = Math.min(100, Math.max(1, Number(limit)));
    const skip = (pageNum - 1) * pageSize;
    const sortMap = {
      newest: { createdAt: -1 },
      oldest: { createdAt: 1 },
      price_low: { sellingPrice: 1 },
      price_high: { sellingPrice: -1 },
      rating: { ratingAverage: -1 },
      popular: { reviewCount: -1 },
    };
    const [products, total] = await Promise.all([
      Product.find(filter)
        .sort(sortMap[sort] || sortMap.newest)
        .skip(skip)
        .limit(pageSize),
      Product.countDocuments(filter),
    ]);
    res.json({
      success: true,
      products,
      pagination: {
        page: pageNum,
        limit: pageSize,
        total,
        pages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("categoryId")
      .populate("variantIds");
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    res.json({ success: true, product });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, description, image, parentId, sortOrder } = req.body;
    const category = await Category.create({
      name,
      slug: slugify(name),
      description,
      image,
      parentId,
      sortOrder,
    });
    res.status(201).json({ success: true, category });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const listCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true }).sort({
      sortOrder: 1,
      name: 1,
    });
    res.json({ success: true, categories });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const updateCategory = async (req, res) => {
  try {
    const data = { ...req.body };
    if (data.name) data.slug = slugify(data.name);
    const category = await Category.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });
    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    res.json({ success: true, category });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true },
    );
    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    res.json({ success: true, message: "Category disabled", category });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const createVariant = async (req, res) => {
  try {
    const variant = await ProductVariant.create({
      ...req.body,
      productId: req.body.productId,
    });
    await Product.findByIdAndUpdate(variant.productId, {
      $addToSet: { variantIds: variant._id },
    });
    res.status(201).json({ success: true, variant });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const listVariants = async (req, res) => {
  try {
    const variants = await ProductVariant.find({
      productId: req.params.productId,
      isActive: true,
    });
    res.json({ success: true, variants });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const updateVariant = async (req, res) => {
  try {
    const variant = await ProductVariant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!variant)
      return res
        .status(404)
        .json({ success: false, message: "Variant not found" });
    res.json({ success: true, variant });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const deleteVariant = async (req, res) => {
  try {
    const variant = await ProductVariant.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true },
    );
    if (!variant)
      return res
        .status(404)
        .json({ success: false, message: "Variant not found" });
    res.json({ success: true, variant });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
