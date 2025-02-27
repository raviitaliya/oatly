// routes/order.routes.js
import express from "express";
import { authorize, verifyToken } from "../middleware/verifyToken.js";
import {
  autoAssignOrder,
  cancelOrder,
  createOrder,
  getOrderDetails,
  getUserOrders,
  verifyPayment,
} from "../controllers/order.controllers.js";
import { getAssignedOrders } from "../controllers/delivery.controllers.js";

const router = express.Router();

// User routes
router.post("/create", verifyToken, authorize("user"), createOrder);
router.post("/verify-payment", verifyToken, authorize("user"), verifyPayment);
router.get("/my-orders", verifyToken, authorize("user"), getUserOrders);
router.post("/cancel", verifyToken, authorize("user"), cancelOrder);
router.get(
  "/:orderId",
  verifyToken,
  authorize("user", "admin"),
  getOrderDetails
);

// Admin routes
router.post("/assign", verifyToken, authorize("admin"), getAssignedOrders);
router.post("/auto-assign", verifyToken, authorize("admin"), autoAssignOrder);

export default router;
