import User from "../models/user.js";
//functions to update user
export const updateUser = async (req, res) => {
  console.log("API Hit");
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  return res.status(403).json({ error: "You can update only your account!" });
};

//delete user
export const deleteUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "User has been deleted..." });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  return res.status(403).json({ error: "You can delete only your account!" });
};
//get a user
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
