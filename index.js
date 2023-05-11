//imports
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
//Configs
dotenv.config();
const app = express();
app.use(express.json());
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
