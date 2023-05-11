import express from "express";

const router = express.Router();
//Routes
router.get("/test", (req, res) => {
  res.send("User Route Working");
});
export default router;
