import { Product } from "../models/addProduct.model.js";
import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import { Review } from "../models/review.model.js";
import { AuditLog } from "../models/auditLog.model.js";
import { Invoice } from "../models/invoice.model.js";
import { Refund } from "../models/refund.model.js";
import PDFDocument from "pdfkit";
import crypto from "crypto";

export const adminOrders = async (req, res) => {
  try {
    const { status, from, to, page = 1, limit = 50 } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (from || to)
      filter.createdAt = {
        ...(from ? { $gte: new Date(from) } : {}),
        ...(to ? { $lte: new Date(to) } : {}),
      };
    const skip = (Number(page) - 1) * Number(limit);
    const [orders, total] = await Promise.all([
      Order.find(filter)
        .populate("userId", "name email mobile")
        .populate("deliveryBoyId")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Math.min(200, Number(limit))),
      Order.countDocuments(filter),
    ]);
    res.json({
      success: true,
      orders,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const adminProductCreate = async (req, res) => {
  try {
    const body = { ...req.body };
    body.productname = body.productname || body.name;
    body.name = body.name || body.productname;
    body.desription =
      body.desription || body.description || body.shortDescription || "";
    body.description = body.description || body.desription;
    body.image = body.image || body.gallery?.[0] || "";
    body.gallery = body.gallery?.length
      ? body.gallery
      : [body.image].filter(Boolean);
    body.heading1 = body.heading1 || "Details";
    body.desription1 = body.desription1 || body.description || "";
    body.heading2 = body.heading2 || "Ingredients";
    body.desription2 = body.desription2 || "";
    body.qustion1 = body.qustion1 || "Storage";
    body.answer1 = body.answer1 || body.storageInstructions || "";
    body.price = String(body.price ?? body.sellingPrice ?? 0);
    body.sellingPrice = Number(body.sellingPrice ?? body.price);
    body.mrp = Number(body.mrp ?? body.sellingPrice);
    body.slug =
      body.slug ||
      String(body.name)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-");
    const product = await Product.create(body);
    await AuditLog.create({
      userId: req.userId,
      action: "product.create",
      resourceType: "Product",
      resourceId: product._id,
    });
    res.status(201).json({ success: true, product });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const adminProductUpdate = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    await AuditLog.create({
      userId: req.userId,
      action: "product.update",
      resourceType: "Product",
      resourceId: product._id,
      details: req.body,
    });
    res.json({ success: true, product });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const adminProductDelete = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true },
    );
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    await AuditLog.create({
      userId: req.userId,
      action: "product.archive",
      resourceType: "Product",
      resourceId: product._id,
    });
    res.json({ success: true, product });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const dashboard = async (req, res) => {
  try {
    const [users, products, orders, revenue, lowStock, recent] =
      await Promise.all([
        User.countDocuments({ role: "user" }),
        Product.countDocuments({ isActive: true }),
        Order.countDocuments(),
        Order.aggregate([
          { $match: { paymentStatus: "Paid" } },
          { $group: { _id: null, total: { $sum: "$totalAmount" } } },
        ]),
        Product.countDocuments({
          isActive: true,
          $expr: { $lte: ["$stock", "$lowStockThreshold"] },
        }),
        Order.find()
          .sort({ createdAt: -1 })
          .limit(10)
          .populate("userId", "name email"),
      ]);
    res.json({
      success: true,
      stats: {
        users,
        products,
        orders,
        revenue: revenue[0]?.total || 0,
        lowStock,
        recentOrders: recent,
      },
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const auditLogs = async (req, res) => {
  try {
    res.json({
      success: true,
      logs: await AuditLog.find()
        .populate("userId", "name email")
        .sort({ createdAt: -1 })
        .limit(500),
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const createInvoice = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate(
      "userId",
      "name email",
    );
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    let invoice = await Invoice.findOne({ orderId: order._id });
    if (!invoice) {
      invoice = await Invoice.create({
        orderId: order._id,
        invoiceNumber: `INV-${new Date().getFullYear()}-${crypto.randomBytes(4).toString("hex").toUpperCase()}`,
        subtotal: order.subtotal || order.totalAmount,
        tax: order.taxAmount || 0,
        discount: order.discountAmount || 0,
        deliveryCharge: order.deliveryCharge || 0,
        grandTotal: order.totalAmount,
      });
    }
    res.json({ success: true, invoice });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const invoicePdf = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate(
      "userId",
      "name email",
    );
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    let invoice = await Invoice.findOne({ orderId: order._id });
    if (!invoice)
      invoice = await Invoice.create({
        orderId: order._id,
        invoiceNumber: `INV-${Date.now()}`,
        subtotal: order.subtotal || order.totalAmount,
        tax: order.taxAmount || 0,
        discount: order.discountAmount || 0,
        deliveryCharge: order.deliveryCharge || 0,
        grandTotal: order.totalAmount,
      });
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename="${invoice.invoiceNumber}.pdf"`,
    );
    const doc = new PDFDocument({ margin: 50 });
    doc.pipe(res);
    doc.fontSize(20).text("Plant Milk Store", { align: "center" });
    doc.moveDown();
    doc.fontSize(12).text(`Invoice: ${invoice.invoiceNumber}`);
    doc.text(`Order: ${order._id}`);
    doc.text(`Date: ${order.createdAt.toLocaleString()}`);
    doc.text(
      `Customer: ${order.userId?.name || "Customer"} (${order.userId?.email || ""})`,
    );
    doc.moveDown();
    order.items.forEach((item, i) =>
      doc.text(
        `${i + 1}. ${item.productName} x ${item.quantity}  INR ${item.price * item.quantity}`,
      ),
    );
    doc.moveDown();
    doc.text(`Subtotal: INR ${invoice.subtotal}`);
    doc.text(`Tax: INR ${invoice.tax}`);
    doc.text(`Discount: INR ${invoice.discount}`);
    doc.text(`Delivery: INR ${invoice.deliveryCharge}`);
    doc.fontSize(14).text(`Total: INR ${invoice.grandTotal}`);
    doc.end();
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const requestRefund = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    const amount = Number(req.body.amount || order.totalAmount);
    const refund = await Refund.create({
      orderId: order._id,
      paymentId: order.razorpayPaymentId,
      amount,
      reason: req.body.reason,
      requestedBy: req.userId,
    });
    res.status(201).json({ success: true, refund });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const refundList = async (req, res) => {
  try {
    res.json({
      success: true,
      refunds: await Refund.find()
        .populate("orderId")
        .populate("requestedBy", "name email")
        .sort({ createdAt: -1 }),
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
