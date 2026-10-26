import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  validateCoupon,
  createCoupon,
  listCoupons,
  updateCoupon,
  deleteCoupon,
} from "../controllers/coupon.controllers.js";
const r = express.Router();
r.post("/validate", verifyToken, authorize("user"), validateCoupon);
r.get("/", verifyToken, authorize("admin"), listCoupons);
r.post("/", verifyToken, authorize("admin"), createCoupon);
r.put("/:id", verifyToken, authorize("admin"), updateCoupon);
r.delete("/:id", verifyToken, authorize("admin"), deleteCoupon);
export default r;
