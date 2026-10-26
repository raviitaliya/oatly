import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    action: { type: String, required: true },
    resourceType: String,
    resourceId: mongoose.Schema.Types.ObjectId,
    details: { type: mongoose.Schema.Types.Mixed, default: {} },
    ip: String,
    userAgent: String,
  },
  { timestamps: true },
);
export const AuditLog =
  mongoose.models.AuditLog || mongoose.model("AuditLog", schema);
