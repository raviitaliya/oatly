import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  listAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/address.controllers.js";
const r = express.Router();
r.use(verifyToken, authorize("user"));
r.get("/", listAddresses);
r.post("/", createAddress);
r.put("/:id", updateAddress);
r.delete("/:id", deleteAddress);
export default r;
