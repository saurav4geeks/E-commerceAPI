import express from "express";
import { verifyToken } from "../middlewares/auth.js";
import { updateUser, deleteUser, getUser } from "../controllers/user.js";
const router = express.Router();
//Routes
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/find/:id", getUser);
export default router;
