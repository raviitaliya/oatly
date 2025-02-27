import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import kafka from "kafka-node";

dotenv.config({
  path: "./env",
});

import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import paymentRoutes from "./routes/payment.route.js";
import deliveryBoyRoutes from "./routes/deliveryBoy.route.js";
import orderRoutes from "./routes/order.route.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"], credentials: true },
});
const PORT = process.env.PORT || 8000;

// Enable CORS for Express routes
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    credentials: true, // Allow cookies or credentials to be sent
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/delivery_boy", deliveryBoyRoutes);
app.use("/api/orders", orderRoutes);

// Kafka Setup
const kafkaClient = new kafka.KafkaClient({ kafkaHost: "localhost:9092" }); // Adjust host if needed
const producer = new kafka.Producer(kafkaClient);
const consumer = new kafka.Consumer(
  kafkaClient,
  [{ topic: "location-updates", partition: 0 }],
  { autoCommit: true }
);

// Function to create Kafka topic if it doesn't exist
const createKafkaTopic = () => {
  return new Promise((resolve, reject) => {
    const topics = [
      {
        topic: "location-updates",
        partitions: 1, // Adjust as needed
        replicationFactor: 1, // Adjust based on your Kafka setup
      },
    ];

    kafkaClient.createTopics(topics, (err, result) => {
      if (err) {
        if (err.message.includes("TopicExistsError")) {
          console.log("Topic 'location-updates' already exists");
          resolve();
        } else {
          console.error("Error creating Kafka topic:", err);
          reject(err);
        }
      } else {
        console.log("Kafka topic 'location-updates' created successfully");
        resolve();
      }
    });
  });
};

// Kafka Producer Setup
producer.on("ready", async () => {
  console.log("Kafka Producer ready");
  try {
    await createKafkaTopic(); // Ensure topic exists before proceeding
  } catch (err) {
    console.error("Failed to create Kafka topic:", err);
  }
});

producer.on("error", (err) => console.error("Kafka Producer error:", err));

// Kafka Consumer Setup
consumer.on("message", (message) => {
  const { orderId, coordinates } = JSON.parse(message.value);
  io.to(orderId).emit("locationUpdate", { orderId, coordinates }); // Broadcast to room
});

consumer.on("error", (err) => console.error("Kafka Consumer error:", err));

// Socket.io Setup
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("trackOrder", (orderId) => {
    socket.join(orderId); // Join room for specific order
    console.log(`Client ${socket.id} tracking order ${orderId}`);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Start Server
const startServer = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

export { producer };