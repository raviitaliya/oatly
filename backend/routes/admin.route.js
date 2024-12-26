import { upload } from "../middleware/multer.js";
import express from 'express';
import { LoginAdmin,AddProudct,getAllProducts,OatDrink,ChilledOatDrinks, Cooking } from '../controllers/admin.controllers.js';


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
router.get("/chilledoatdrinks" , ChilledOatDrinks);
router.get("/cooking" , Cooking);


export default router;
