import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({
  path: "./env",
});

import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("server is running now in PORT:", PORT);
});