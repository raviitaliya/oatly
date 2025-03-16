// utils/jwt.js
import Jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyToken = (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - no token provided",
    });
  }

  try {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    req.user = { id: decoded.userId, role: decoded.role };
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - invalid token",
    });
  }
};

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden - insufficient permissions",
      });
    }
    next();
  };
};

export const blockUserMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id); 
    if (user && user.isBlocked) {
      return res.status(403).json({ success: false, message: "Your account is blocked" });
    }
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
