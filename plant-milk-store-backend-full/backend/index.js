import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import paymentRoutes from "./routes/payment.route.js";
import deliveryBoyRoutes from "./routes/deliveryBoy.route.js";
import orderRoutes from "./routes/order.route.js";
import catalogRoutes from "./routes/catalog.route.js";
import cartRoutes from "./routes/cart.route.js";
import wishlistRoutes from "./routes/wishlist.route.js";
import addressRoutes from "./routes/address.route.js";
import couponRoutes from "./routes/coupon.route.js";
import reviewRoutes from "./routes/review.route.js";
import inventoryRoutes from "./routes/inventory.route.js";
import notificationRoutes from "./routes/notification.route.js";
import subscriptionRoutes from "./routes/subscription.route.js";
import deliveryExtrasRoutes from "./routes/deliveryExtras.route.js";
import adminExtrasRoutes from "./routes/adminExtras.route.js";
import paymentExtrasRoutes from "./routes/paymentExtras.route.js";
import checkoutRoutes from "./routes/checkout.route.js";
import {
  securityHeaders,
  rateLimit,
  cleanupRateLimit,
} from "./middleware/security.js";

dotenv.config({ path: "./.env" });
const app = express();
const server = http.createServer(app);
const allowedOrigins = (
  process.env.CLIENT_URLS ||
  process.env.CLIENT_URL ||
  "http://localhost:5173,http://localhost:5174"
)
  .split(",")
  .map((v) => v.trim())
  .filter(Boolean);
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  },
});
const PORT = process.env.PORT || 8000;

app.set("trust proxy", 1);
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error("CORS origin not allowed"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  }),
);
app.use(securityHeaders);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: Number(process.env.RATE_LIMIT_MAX || 500),
  }),
);
app.use(
  express.json({
    limit: "2mb",
    verify: (req, _res, buf) => {
      req.rawBody = Buffer.from(buf);
    },
  }),
);
app.use(express.urlencoded({ extended: true, limit: "2mb" }));
app.use(cookieParser());
app.use((req, res, next) => {
  req.io = io;
  next();
});
app.get("/", (_req, res) =>
  res.json({ success: true, name: "Plant Milk Store API", version: "3.0.0" }),
);
app.get("/health", (_req, res) =>
  res.json({ success: true, status: "ok", time: new Date().toISOString() }),
);

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/delivery_boy", deliveryBoyRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/catalog", catalogRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/delivery", deliveryExtrasRoutes);
app.use("/api/admin/v2", adminExtrasRoutes);
app.use("/api/payment/v2", paymentExtrasRoutes);
app.use("/api/checkout", checkoutRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) return next(err);
  res
    .status(err.status || 500)
    .json({
      success: false,
      message:
        process.env.NODE_ENV === "production"
          ? "Internal server error"
          : err.message,
    });
});
app.use((_req, res) =>
  res.status(404).json({ success: false, message: "Route not found" }),
);

io.on("connection", (socket) => {
  socket.on("trackOrder", (orderId) => {
    if (orderId) socket.join(String(orderId));
  });
  socket.on("disconnect", () => {});
});
setInterval(cleanupRateLimit, 10 * 60 * 1000).unref();
export { io, app, server };
const startServer = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};
startServer();
