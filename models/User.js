import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false, //default value
    },
  },
  {
    timestamps: true, //automatically creates createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
