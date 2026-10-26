import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  listReviews,
  createReview,
  moderateReview,
} from "../controllers/review.controllers.js";
const r = express.Router();
r.get("/product/:productId", listReviews);
r.post("/", verifyToken, authorize("user"), createReview);
r.patch("/:id", verifyToken, authorize("admin"), moderateReview);
export default r;
