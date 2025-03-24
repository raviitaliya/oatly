import { upload } from "../middleware/multer.js";
import express from "express";
import {
  LoginAdmin,
  AddProudct,
  getAllProducts,
  OatDrink,
  ChilledOatDrinks,
  Cooking,
  getOneProduct,
  Spread,
  Oatgurt,
  IceCream,
  SoftServe,
  randomProducts,
  getAnalytics,
  manageInventory,
  getFeedback,
  generateReport,
} from "../controllers/admin.controllers.js";
import { authorize, verifyToken } from "../middleware/verifyToken.js";

import {
  getDashboardStats,
  getRealtimeStats,
  getInventoryAnalytics
} from '../controllers/admin.controllers.js';

const router = express.Router();

router.post("/login", LoginAdmin);

router.route("/addProduct").post(
  upload.fields([
    {
      name: "image",
      maxcount: 1,
    },
  ]),
  AddProudct
);

router.get("/getAllProduct", getAllProducts);

router.get("/oatDrink", OatDrink);
router.get("/oatdrink", OatDrink);
router.get("/chilledoatdrinks", ChilledOatDrinks);
router.get("/cooking", Cooking);
router.get("/spread", Spread);
router.get("/oatgurt", Oatgurt);
router.get("/ice-cream", IceCream);
router.get("/soft-serve", SoftServe);
router.get("/random-products", randomProducts);

router.get("/analytics", verifyToken, authorize("admin"), getAnalytics);
router.post("/inventory", verifyToken, authorize("admin"), manageInventory);
router.get("/feedback", verifyToken, authorize("admin"), getFeedback);
router.get("/report", verifyToken, authorize("admin"), generateReport);

router.get("/:id", getOneProduct);


router.get('/dashboard/stats', getDashboardStats);
router.get('/dashboard/realtime', getRealtimeStats);
router.get('/dashboard/inventory', getInventoryAnalytics);

export default router;
