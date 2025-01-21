import { instance } from "../config/razorpay.config.js";
import crypto from "crypto";
import { Payment } from "../models/payment.model.js";

export const createOrder = async (req, res) => {
  const { amount } = req.body;

  console.log(amount);

  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
  };
  try {
    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Somthing went Wrong",
    });
  }
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  // console.log(razorpay_signature);
  // console.log(razorpay_order_id);
  // console.log(razorpay_payment_id);

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  // console.log(expectedSignature);

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    const payment = await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    await payment.save();

    res.status(200).json({
      success: true,
      payment,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
