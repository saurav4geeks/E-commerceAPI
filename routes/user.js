import express from "express";
import { verifyToken } from "../middlewares/auth.js";
import { updateUser } from "../controllers/user.js";
const router = express.Router();
//Routes
router.put("/:id", verifyToken, updateUser);
export default router;
