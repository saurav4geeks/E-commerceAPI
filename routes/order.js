import express from "express";
import { verifyToken, verifyTokenAndAdmin } from "../middlewares/auth.js";
import {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrders,
  getIncome,
  getOrders,
  getAllIncome,
} from "../controllers/order.js";
const router = express.Router();
//Routes
router.post("/", verifyToken, createOrder);
router.get("/find/:userId", verifyToken, getUserOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/", verifyTokenAndAdmin, getAllOrders);
router.get("/income", verifyTokenAndAdmin, getIncome);
router.get("/orders", verifyTokenAndAdmin, getOrders);
router.get("/income/all", verifyTokenAndAdmin, getAllIncome);

export default router;
