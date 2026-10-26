import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  listZones,
  createZone,
  updateZone,
  listSlots,
  createSlot,
} from "../controllers/deliveryExtras.controllers.js";
const r = express.Router();
r.get("/zones", listZones);
r.get("/slots", listSlots);
r.post("/zones", verifyToken, authorize("admin"), createZone);
r.put("/zones/:id", verifyToken, authorize("admin"), updateZone);
r.post("/slots", verifyToken, authorize("admin"), createSlot);
export default r;
