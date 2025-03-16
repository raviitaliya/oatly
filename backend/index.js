// server.js
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

dotenv.config({ path: "./env" });

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
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

app.use((req, res, next) => {
  req.io = io;
  next();
});


io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  socket.on("trackOrder", (orderId) => {
    console.log("Tracking Order:", orderId);
    socket.join(orderId); 
  });
  socket.on("disconnect", () => console.log("Client disconnected:", socket.id));
});

export { io }; 

const startServer = async () => {
  try {
    await connectDB();
    server.listen(PORT, () =>
      console.log(`Server is running on port: ${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
