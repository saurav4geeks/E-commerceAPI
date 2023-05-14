import express from "express";
import { verifyToken, verifyTokenAndAdmin } from "../middlewares/auth.js";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} from "../controllers/product.js";
const router = express.Router();
//Routes
router.post("/", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/find/:id", verifyToken, getProduct);
router.get("/", verifyToken, getAllProducts);

export default router;
