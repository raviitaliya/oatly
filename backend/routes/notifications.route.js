import express from "express";
import { saveToken, sendNotification } from "../controllers/notifications.controllers.js";

const router = express.Router();

// Route to save FCM Token
router.post("/save-token", saveToken);

// Route to send Notification
router.post("/send-notification", sendNotification);

export default router;
