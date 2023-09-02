const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: [true, "userName is required"],
    },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },

    confirmPassword: {
      type: String,
      required: [true, "confirm password is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
