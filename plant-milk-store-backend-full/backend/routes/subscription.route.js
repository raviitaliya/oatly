import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  listSubscriptions,
  createSubscription,
  updateSubscription,
  cancelSubscription,
} from "../controllers/subscription.controllers.js";
const r = express.Router();
r.use(verifyToken, authorize("user"));
r.get("/", listSubscriptions);
r.post("/", createSubscription);
r.patch("/:id", updateSubscription);
r.delete("/:id", cancelSubscription);
export default r;
