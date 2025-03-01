// routes/deliveryBoy.routes.js
import express from "express";

import { authorize, verifyToken } from "../middleware/verifyToken.js";
import {
  acceptOrder,
  acceptsOrder,
  createDeliveryBoyProfile,
  getAssignedOrders,
  getDeliveryBoyProfile,
  getEarnings,
  startDummyTracking,
  toggleAvailability,
  updateDeliveryBoyProfile,
  updateOrderStatus,
} from "../controllers/delivery.controllers.js";

const router = express.Router();

router.get(
  "/profile",
  verifyToken,
  authorize("delivery_boy"),
  getDeliveryBoyProfile
);
router.post(
  "/create/:userId",
  verifyToken,
  authorize("delivery_boy"),
  createDeliveryBoyProfile
);
router.put(
  "/profile",
  verifyToken,
  authorize("delivery_boy"),
  updateDeliveryBoyProfile
);
router.get(
  "/orders",
  verifyToken,
  authorize("delivery_boy"),
  getAssignedOrders
);
router.post(
  "/accept-order",
  verifyToken,
  authorize("delivery_boy"),
  acceptsOrder
);
router.post(
  "/update-status",
  verifyToken,
  authorize("delivery_boy"),
  updateOrderStatus
);
router.get("/earnings", verifyToken, authorize("delivery_boy"), getEarnings);
router.post(
  "/toggle-availability",
  verifyToken,
  authorize("delivery_boy"),
  toggleAvailability
);

router.post(
  "/accepts-order",
  verifyToken,
  authorize("delivery_boy"),
  acceptOrder
);

router.post(
  "/start-dummy-tracking",
  verifyToken,
  authorize("delivery_boy"),
  startDummyTracking
);

export default router;
