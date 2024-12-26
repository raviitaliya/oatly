import express from 'express';
import { LoginAdmin,AddProudct,getAllProducts,OatDrink } from '../controllers/admin.controllers.js';
import { upload } from "../middleware/multer.js"


const router = express.Router();

router.post("/login", LoginAdmin);

router.route("/addProduct").post(
    upload.fields([
        {
            name: "image",
            maxcount:1,
        }
    ]), 
    AddProudct
)

router.get("/getAllProduct", getAllProducts);
router.get("/oatdrink", OatDrink);



export default router;
