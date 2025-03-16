// routes/order.routes.js
import express from "express";
import { authorize, verifyToken } from "../middleware/verifyToken.js";
import {
  assignOrder,
  autoAssignOrder,
  cancelOrder,
  createOrder,
  getAllOrders,
  getOrderDetails,
  getUserOrders,
  submitFeedback,
  updateOrderStatus,
  verifyPayment,
} from "../controllers/order.controllers.js";

const router = express.Router();

// User routes
router.post("/create", verifyToken, authorize("user"), createOrder);
router.post("/verify-payment", verifyToken, authorize("user"), verifyPayment);
router.get("/my-orders", verifyToken, authorize("user"), getUserOrders);
router.post("/cancel", verifyToken, authorize("user"), cancelOrder);
router.post("/feedback", verifyToken, authorize("user"), submitFeedback);
router.get(
  "/:orderId",
  verifyToken,
  authorize("user", "admin"),
  getOrderDetails
);

// Admin routes
router.post("/:orderId/assign-delivery-boy", assignOrder);
router.post("/auto-assign", verifyToken, authorize("admin"), autoAssignOrder);
router.get("/", getAllOrders);
router.patch("/:orderId/status", updateOrderStatus);

export default router;
