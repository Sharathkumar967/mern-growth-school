const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");

const router = express.Router();

// routes

// register Api
router.post("/register", registerController);

// login Api
router.post("/login", loginController);

module.exports = router;
