import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const verifyToken = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token)
      return res.status(400).json({ error: "Invalid Authentication" });
    if (token.startsWith("Bearer")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const verifyTokenAndAdmin = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token)
      return res.status(400).json({ error: "Invalid Authentication" });
    if (token.startsWith("Bearer")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    let user = await User.findById(req.user.id);
    if (user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ error: "You are not allowed to do that!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
