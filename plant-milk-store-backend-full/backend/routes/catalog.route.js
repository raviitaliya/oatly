import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  listProducts,
  getProduct,
  createCategory,
  listCategories,
  updateCategory,
  deleteCategory,
  createVariant,
  listVariants,
  updateVariant,
  deleteVariant,
} from "../controllers/catalog.controllers.js";
const router = express.Router();
router.get("/products", listProducts);
router.get("/products/:id", getProduct);
router.get("/categories", listCategories);
router.post("/categories", verifyToken, authorize("admin"), createCategory);
router.put("/categories/:id", verifyToken, authorize("admin"), updateCategory);
router.delete(
  "/categories/:id",
  verifyToken,
  authorize("admin"),
  deleteCategory,
);
router.post("/variants", verifyToken, authorize("admin"), createVariant);
router.get("/products/:productId/variants", listVariants);
router.put("/variants/:id", verifyToken, authorize("admin"), updateVariant);
router.delete("/variants/:id", verifyToken, authorize("admin"), deleteVariant);
export default router;
