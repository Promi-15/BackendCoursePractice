import express from "express"
import { createProduct, deleteAProduct, getAProduct, getProduct, updateAProduct } from "../controllers/productController.js";

const router = express.Router();



////create product
router.post("/", createProduct);
//get product
router.get("/",getProduct);

//get a product
router.get("/:productId",getAProduct );

//delete
router.delete("/:productId",deleteAProduct);

//update
router.put("/:productId",updateAProduct);


export default router;