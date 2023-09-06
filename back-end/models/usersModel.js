const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "userName is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     phone: {
//       type: String,
//       required: [true, "Phone number is required"],
//       unique: true,
//     },
//     userName: {
//       type: String,
//       required: false, // Make it optional
//     },
//     email: {
//       type: String,
//       required: false, // Make it optional
//     },
//     otp: String, // Store the OTP here
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("users", userSchema);
