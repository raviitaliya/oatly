import express from "express";
import {
  signup,
  verifyEmail,
  login,
  logout,
  forgotPassword,
  resetPassword,
  checkAuth,
  upadatePassword,
  fetchAllUser,
  deleteUser,
  blockToggleUser,
} from "../controllers/auth.controllers.js";
import {
  verifyToken,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.get("/users", fetchAllUser); //admin

router.delete("/users/:userId", deleteUser);

router.patch("/users/:userId/block", blockToggleUser); //admin

router.post("/signup", signup);

router.post("/login", login);

router.post("/verify-email", verifyEmail);

router.post("/logout", logout);

router.post("/forgot-password", forgotPassword);

router.post("/set-newPassword/:token", resetPassword);

router.post("/update-password/", upadatePassword);

export default router;
