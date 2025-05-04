import { Router } from "express";
const router = Router()
import isLoggedIn from "../middleware/isLoggedIn.js"
import upload from "../config/multerConfig.js";
import { createProduct, readProduct, updateProduct,deleteProduct, filterProduct, getSingleProduct } from "../controllers/productController.js";

router.post("/create",isLoggedIn,upload.single("image"),createProduct)

router.get("/read",readProduct)

router.get("/:id/getProduct",getSingleProduct)

router.put("/:id/update",isLoggedIn,upload.single("image"),updateProduct)

router.delete("/:id/delete",isLoggedIn,deleteProduct)

router.get("/search",filterProduct)

export default router