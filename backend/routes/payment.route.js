import express from "express";
import {
  createOrder,
  paymentVerification,
} from "../controllers/payment.controllers.js";

const router = express.Router();

router.post("/create-order", createOrder);

router.post("/payment-verification", paymentVerification);

router.get("/getkey", (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_API_KEY,
  });
});

export default router;
