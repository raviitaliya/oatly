<<<<<<< HEAD
import express from "express";
import {
  LoginAdmin,
  AddProudct,
  getAllProducts,
  OatDrink,
} from "../controllers/admin.controllers.js";
import { upload } from "../middleware/multer.js";
=======
import express from 'express';
import { LoginAdmin,AddProudct,getAllProducts,OatDrink,ChilledOatDrinks } from '../controllers/admin.controllers.js';
import { upload } from "../middleware/multer.js"

>>>>>>> 5504c5e9016b05b359cddd5f0a42d032bc1e2af9

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
<<<<<<< HEAD
router.get("/oatDrink", OatDrink);
=======
router.get("/oatdrink", OatDrink);
router.get("/chilledoatdrinks" , ChilledOatDrinks);

>>>>>>> 5504c5e9016b05b359cddd5f0a42d032bc1e2af9

export default router;
