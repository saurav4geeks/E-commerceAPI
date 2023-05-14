//imports
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js";
import stripeRoutes from "./routes/stripe.js";
//Configs
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
//DB Config
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));

//Routes
app.get("/api/test", (req, res) => {
  res.send("Hello World");
});
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/checkout", stripeRoutes);
