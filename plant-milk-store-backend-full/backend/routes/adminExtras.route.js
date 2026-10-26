import express from "express";
import { verifyToken, authorize } from "../middleware/verifyToken.js";
import {
  adminOrders,
  adminProductCreate,
  adminProductUpdate,
  adminProductDelete,
  dashboard,
  auditLogs,
  createInvoice,
  invoicePdf,
  requestRefund,
  refundList,
} from "../controllers/adminExtras.controllers.js";
const r = express.Router();
r.use(verifyToken, authorize("admin"));
r.get("/dashboard", dashboard);
r.get("/orders", adminOrders);
r.post("/products", adminProductCreate);
r.put("/products/:id", adminProductUpdate);
r.delete("/products/:id", adminProductDelete);
r.get("/audit-logs", auditLogs);
r.post("/orders/:orderId/invoice", createInvoice);
r.get("/orders/:orderId/invoice.pdf", invoicePdf);
r.post("/orders/:orderId/refund", requestRefund);
r.get("/refunds", refundList);
export default r;
