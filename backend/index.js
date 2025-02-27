import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({
  path: "./env",
});

import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import paymentRoutes from "./routes/payment.route.js";
import deliveryBoyRoutes from "./routes/deliveryBoy.route.js";
import orderRoutes from "./routes/order.route.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/delivery_boy", deliveryBoyRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("server is running now in PORT:", PORT);
});
