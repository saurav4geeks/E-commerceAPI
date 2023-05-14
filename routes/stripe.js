import express from "express";
import { createPaymentIntent } from "../controllers/stripe.js";
const router = express.Router();
//Routes
router.post("/payment", createPaymentIntent);

export default router;
