import express from "express"
import {addProduct,getProduct,singProduct,deleteProduct} from "../controllers/productController"
import upload from "../middleware/multer";
const prodRoute=express.Router();
prodRoute.get("/",getProduct);
prodRoute.get("/:id",singProduct);
prodRoute.post("/",upload.fields([{name:img1,maxCount:1},{name:img2,maxCount:1},{name:img3,maxCount:1},{name:img4,maxCount:1}]),addProduct);
prodRoute.delete("/",deleteProduct);
export default prodRoute;