import { Product } from "../models/addProduct.model.js";
import { Feedback } from "../models/feedback.model.js";
import { Order } from "../models/order.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import PDFDocument from "pdfkit";
import { DeliveryBoy } from "../models/deliveryProfile.model.js";
import { User } from "../models/user.model.js";

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
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while logging in",
      error: error.message,
    });
  }
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

export const getDashboardStats = async (req, res) => {
  try {
    // Get date ranges
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    // Get overview statistics
    const [
      totalRevenue,
      monthlyRevenue,
      activeDeliveryBoys,
      totalUsers,
      newUsers,
      activeOrders,
      productStats
    ] = await Promise.all([
      // Total revenue
      Order.aggregate([
        { $match: { status: "Delivered" } },
        { $group: { _id: null, total: { $sum: "$totalAmount" } } }
      ]),

      // Monthly revenue trend
      Order.aggregate([
        {
          $match: {
            status: "Delivered",
            createdAt: { $gte: lastMonth }
          }
        },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            revenue: { $sum: "$totalAmount" }
          }
        },
        { $sort: { "_id": 1 } }
      ]),

      // Active delivery boys
      DeliveryBoy.countDocuments({ 
        isAvailable: true,
        status: "active"
      }),

      // Total users
      User.countDocuments({ role: "user" }),

      // New users this month
      User.countDocuments({
        role: "user",
        createdAt: { $gte: lastMonth }
      }),

      // Active orders
      Order.countDocuments({
        status: { $in: ["Pending", "Assigned", "Out for Delivery"] }
      }),

      // Product category statistics
      Product.aggregate([
        {
          $group: {
            _id: "$category",
            count: { $sum: 1 },
            avgPrice: { $avg: { $toDouble: "$price" } }
          }
        }
      ])
    ]);

    // Get delivery analytics
    const deliveryAnalytics = await Order.aggregate([
      {
        $match: {
          status: "Delivered",
          deliveredAt: { $gte: lastWeek }
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$deliveredAt" } },
          deliveries: { $sum: 1 },
          totalEarnings: { $sum: "$totalAmount" }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    // Get top performing delivery partners
    const topDeliveryPartners = await DeliveryBoy.aggregate([
      {
        $match: { status: "active" }
      },
      {
        $sort: { totalDeliveries: -1, earnings: -1 }
      },
      {
        $limit: 5
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userDetails"
        }
      },
      {
        $unwind: "$userDetails"
      }
    ]);

    // Get recent orders with populated data
    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('userId', 'name email')
      .populate('deliveryBoyId', 'fullName');

    // Get category-wise sales
    const categorySales = await Order.aggregate([
      { $unwind: "$items" },
      {
        $group: {
          _id: "$items.productName",
          totalQuantity: { $sum: "$items.quantity" },
          totalRevenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
        }
      },
      { $sort: { totalRevenue: -1 } },
      { $limit: 5 }
    ]);

    // Calculate revenue growth
    const previousMonthRevenue = await Order.aggregate([
      {
        $match: {
          status: "Delivered",
          createdAt: {
            $gte: new Date(today.getFullYear(), today.getMonth() - 2, today.getDate()),
            $lt: lastMonth
          }
        }
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$totalAmount" }
        }
      }
    ]);

    const currentMonthRevenue = monthlyRevenue.reduce((acc, curr) => acc + curr.revenue, 0);
    const previousMonthTotal = previousMonthRevenue[0]?.total || 0;
    const revenueGrowth = previousMonthTotal === 0 ? 100 : 
      ((currentMonthRevenue - previousMonthTotal) / previousMonthTotal) * 100;

    return res.status(200).json({
      success: true,
      data: {
        overview: {
          totalRevenue: totalRevenue[0]?.total || 0,
          activeDeliveryPartners: activeDeliveryBoys,
          activeOrders,
          totalUsers,
          newUsers,
          revenueGrowth: parseFloat(revenueGrowth.toFixed(2))
        },
        charts: {
          monthlyRevenue,
          deliveryAnalytics,
          categorySales,
          productStats
        },
        recentActivity: {
          orders: recentOrders,
          topDeliveryPartners
        }
      }
    });

  } catch (error) {
    console.error("Dashboard Stats Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching dashboard statistics",
      error: error.message
    });
  }
};

// Add real-time analytics endpoint
export const getRealtimeStats = async (req, res) => {
  try {
    const currentHour = new Date();
    currentHour.setMinutes(0, 0, 0);

    const [orderStats, deliveryStats] = await Promise.all([
      // Order statistics for current hour
      Order.aggregate([
        {
          $match: {
            createdAt: { $gte: currentHour }
          }
        },
        {
          $group: {
            _id: null,
            newOrders: { 
              $sum: { $cond: [{ $eq: ["$status", "Pending"] }, 1, 0] }
            },
            processingOrders: { 
              $sum: { $cond: [{ $eq: ["$status", "Assigned"] }, 1, 0] }
            },
            deliveredOrders: { 
              $sum: { $cond: [{ $eq: ["$status", "Delivered"] }, 1, 0] }
            },
            totalRevenue: { 
              $sum: { $cond: [{ $eq: ["$status", "Delivered"] }, "$totalAmount", 0] }
            }
          }
        }
      ]),

      // Active delivery partners
      DeliveryBoy.countDocuments({
        isAvailable: true,
        status: "active"
      })
    ]);

    return res.status(200).json({
      success: true,
      data: {
        orders: orderStats[0] || {
          newOrders: 0,
          processingOrders: 0,
          deliveredOrders: 0,
          totalRevenue: 0
        },
        activeDeliveryPartners: deliveryStats
      }
    });

  } catch (error) {
    console.error("Realtime Stats Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching realtime statistics",
      error: error.message
    });
  }
};

// Add inventory analytics endpoint
export const getInventoryAnalytics = async (req, res) => {
  try {
    const [lowStock, categoryDistribution, productPerformance] = await Promise.all([
      // Low stock products
      Product.find({ stock: { $lt: 10 }})
        .select('productname stock category price'),

      // Category-wise product distribution
      Product.aggregate([
        {
          $group: {
            _id: "$category",
            count: { $sum: 1 },
            totalValue: { $sum: { $multiply: [{ $toDouble: "$price" }, "$stock"] } }
          }
        }
      ]),

      // Product performance (based on orders)
      Order.aggregate([
        { $unwind: "$items" },
        {
          $group: {
            _id: "$items.productName",
            totalOrdered: { $sum: "$items.quantity" },
            revenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
          }
        },
        { $sort: { totalOrdered: -1 } },
        { $limit: 10 }
      ])
    ]);

    return res.status(200).json({
      success: true,
      data: {
        lowStock,
        categoryDistribution,
        productPerformance
      }
    });

  } catch (error) {
    console.error("Inventory Analytics Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching inventory analytics",
      error: error.message
    });
  }
};
