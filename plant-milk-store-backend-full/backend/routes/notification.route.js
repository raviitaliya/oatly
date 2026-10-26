import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  listNotifications,
  markNotificationRead,
  registerDeviceToken,
} from "../controllers/notification.controllers.js";
const r = express.Router();
r.use(verifyToken, authorize("user", "delivery_boy", "admin"));
r.get("/", listNotifications);
r.patch("/:id/read", markNotificationRead);
r.post("/device-token", registerDeviceToken);
export default r;
