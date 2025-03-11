import { Product } from "../models/addProduct.model.js";
import { Feedback } from "../models/feedback.model.js";
import { Order } from "../models/order.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import PDFDocument from "pdfkit";

export const LoginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const username = "Oatly123";
    const password = "Oatly123";

    if (username === username && password === password) {
      return res.status(200).json(200, "User Logged in Successfully");
    } else {
      return res.status(200).json(200, "User Logged in Failed");
    }
  } catch (error) {}
};

export const AddProudct = async (req, res) => {
  const {
    productname,
    desription,
    category,
    heading1,
    desription1,
    heading2,
    desription2,
    qustion1,
    answer1,
    price,
  } = req.body;

  try {
    if (
      [
        productname,
        desription,
        category,
        heading1,
        desription1,
        heading2,
        desription2,
        qustion1,
        answer1,
        price,
      ].some((field) => !field?.trim())
    ) {
      return res
        .status(400)
        .json({ status: 400, message: "All fields are required" });
    }

    const imageLocalPath = req.files?.image[0]?.path;

    if (!imageLocalPath) {
      return res
        .status(400)
        .json({ status: 400, message: "Avatar file is required" });
    }

    const image = await uploadOnCloudinary(imageLocalPath);

    if (!image) {
      return res
        .status(500)
        .json({ status: 500, message: "Failed to upload image" });
    }

    const product = await Product.create({
      productname,
      desription,
      category,
      image: image.url,
      heading1,
      desription1,
      heading2,
      desription2,
      qustion1,
      answer1,
      price,
    });

    return res.status(201).json({
      status: 201,
      product,
      message: "Product created successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Product not added",
      error: error.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No products found",
      });
    }

    return res.status(200).json({
      status: 200,
      products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching products",
      error: error.message,
    });
  }
};

export const OatDrink = async (req, res) => {
  try {
    const products = await Product.find({ category: "Oat Drink" });

    // console.log(products);

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Oat Drinks found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const ChilledOatDrinks = async (req, res) => {
  try {
    const products = await Product.find({ category: "Chilled Oat Drinks" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Chilled Oat Drinks found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const Cooking = async (req, res) => {
  try {
    const products = await Product.find({ category: "Cooking" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Cooking found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const Spread = async (req, res) => {
  try {
    const products = await Product.find({ category: "Spread" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Cooking found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const Oatgurt = async (req, res) => {
  try {
    const products = await Product.find({ category: "Oatgurt" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Cooking found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const IceCream = async (req, res) => {
  try {
    const products = await Product.find({ category: "Ice Cream" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Cooking found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const SoftServe = async (req, res) => {
  try {
    const products = await Product.find({ category: "Soft Serve" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Cooking found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      status: 200,
      product,
      message: "Product fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching product",
      error: error.message,
    });
  }
};

export const randomProducts = async (req, res) => {
  try {
    const randomProducts = await Product.aggregate([{ $sample: { size: 4 } }]);

    if (!randomProducts || randomProducts.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "Products not found",
      });
    }

    return res.status(200).json({
      status: 200,
      randomProducts,
      message: "Products fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching random products:", error);

    return res.status(500).json({
      status: 500,
      message: "An error occurred while fetching products",
      error: error.message,
    });
  }
};

export const getAnalytics = async (req, res) => {
  try {
    const totalSales = await Order.aggregate([
      { $match: { status: "Delivered" } },
      { $group: { _id: null, total: { $sum: "$totalAmount" } } },
    ]);

    const popularProducts = await Order.aggregate([
      { $unwind: "$items" },
      { $group: { _id: "$items.name", totalQty: { $sum: "$items.qty" } } },
      { $sort: { totalQty: -1 } },
      { $limit: 5 },
    ]);

    res.status(200).json({
      success: true,
      analytics: { totalSales: totalSales[0]?.total || 0, popularProducts },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const manageInventory = async (req, res) => {
  const { name, stock, price, image } = req.body;

  try {
    let product = await Product.findOne({ name });
    if (product) {
      product.stock = stock !== undefined ? stock : product.stock;
      product.price = price || product.price;
      product.image = image || product.image;
    } else {
      product = new Product({ name, stock, price, image });
    }
    await product.save();

    if (product.stock < 10) {
      // TODO: Send email alert (use Nodemailer)
      console.log(`Low stock alert: ${product.name} - ${product.stock} left`);
    }

    res
      .status(200)
      .json({ success: true, message: "Inventory updated", product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().populate("orderId userId");
    res.status(200).json({ success: true, feedback });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const generateReport = async (req, res) => {
  try {
    const orders = await Order.find({ status: "Delivered" }).populate(
      "userId deliveryBoyId"
    );
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=sales_report.pdf"
    );

    doc.pipe(res);
    doc.fontSize(20).text("Sales Report", { align: "center" });
    orders.forEach((order) => {
      doc.text(
        `Order #${order._id}: $${order.totalAmount} - ${order.userId.name}`
      );
    });
    doc.end();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
