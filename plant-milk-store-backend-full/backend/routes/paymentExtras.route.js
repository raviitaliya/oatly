import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  webhook,
  getPayment,
  processRefund,
} from "../controllers/paymentExtras.controllers.js";
const r = express.Router();
r.post("/webhook", webhook);
r.get("/:id", verifyToken, authorize("user", "admin"), getPayment);
r.post("/refund/:id/process", verifyToken, authorize("admin"), processRefund);
export default r;
