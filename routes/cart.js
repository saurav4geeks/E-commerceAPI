import express from "express";
import { verifyToken, verifyTokenAndAdmin } from "../middlewares/auth.js";
import {
  addToCart,
  getCart,
  deleteCart,
  updateCart,
  getAllCarts,
} from "../controllers/cart.js";
const router = express.Router();
//Routes
router.post("/", verifyToken, addToCart);
router.get("/find/:userId", verifyToken, getCart);
router.get("/", verifyTokenAndAdmin, getAllCarts);
router.delete("/:id", verifyToken, deleteCart);
router.put("/:id", verifyToken, updateCart);

export default router;
