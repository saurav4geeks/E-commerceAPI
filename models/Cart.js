import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: true, //automatically creates createdAt and updatedAt fields
  }
);

const User = mongoose.model("Cart", CartSchema);
export default User;
