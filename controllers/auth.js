import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

//Register User
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Login User
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    //validate
    if (!username || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    //get user
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    delete user.password;
    res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
