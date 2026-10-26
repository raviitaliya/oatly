import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  getWishlist,
  addWishlist,
  removeWishlist,
} from "../controllers/wishlist.controllers.js";
const r = express.Router();
r.use(verifyToken, authorize("user"));
r.get("/", getWishlist);
r.post("/", addWishlist);
r.delete("/:productId", removeWishlist);
export default r;
