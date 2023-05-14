import Cart from "../models/cart.js";

//add to cart
export const addToCart = async (req, res) => {
  const cart = new Cart(req.body);
  try {
    const savedCart = await cart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//get cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//get all carts
export const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//delete cart
export const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Cart has been deleted..." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//update cart
export const updateCart = async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
