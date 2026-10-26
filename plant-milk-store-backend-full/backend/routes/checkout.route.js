import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  createCheckout,
  verifyCheckout,
} from "../controllers/checkout.controllers.js";
const r = express.Router();
r.use(verifyToken, authorize("user"));
r.post("/create", createCheckout);
r.post("/verify", verifyCheckout);
export default r;
