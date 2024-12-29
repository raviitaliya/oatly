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
} from "../controllers/admin.controllers.js";

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

router.get("/:id", getOneProduct);

export default router;
