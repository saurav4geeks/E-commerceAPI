import express from "express";
import { verifyToken, verifyTokenAndAdmin } from "../middlewares/auth.js";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
} from "../controllers/user.js";
const router = express.Router();
//Routes
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/find/:id", verifyToken, getUser);
//Admin routes
router.get("/", verifyTokenAndAdmin, getAllUsers);
router.get("/stats", verifyTokenAndAdmin, getUserStats);
export default router;
