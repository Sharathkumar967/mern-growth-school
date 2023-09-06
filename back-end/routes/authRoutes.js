const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// routes

// register Api
router.post("/register", registerController);

// login Api
router.post("/login", loginController);

// / login Api
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;

///////////////////////////////////////////////////////////////////////////////////////////

// const express = require("express");

// const authMiddleware = require("../middlewares/authMiddleware");
// const {
//   registerController,
//   sendPhoneController,
//   loginController,
//   currentUserController,
// } = require("../controllers/authController");

// const router = express.Router();
// // Register a new user
// router.post("/register", registerController);

// // Send OTP via SMS
// router.post("/send-otp", sendPhoneController);

// // Login a user
// router.post("/login", loginController);

// // cureent user
// router.get("/current-user", authMiddleware, currentUserController);

// module.exports = router;
