import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  adjustInventory,
  inventoryTransactions,
  lowStock,
} from "../controllers/inventory.controllers.js";
const r = express.Router();
r.use(verifyToken, authorize("admin"));
r.post("/adjust", adjustInventory);
r.get("/transactions", inventoryTransactions);
r.get("/low-stock", lowStock);
export default r;
