import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
  cartSummary,
} from "../controllers/cart.controllers.js";
const r = express.Router();
r.use(verifyToken, authorize("user"));
r.get("/", getCart);
r.get("/summary", cartSummary);
r.post("/items", addToCart);
r.patch("/items/:itemId", updateCartItem);
r.delete("/items/:itemId", removeCartItem);
r.delete("/", clearCart);
export default r;
