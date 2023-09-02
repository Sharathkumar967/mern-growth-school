const usersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  console.log("registerController function is calling");
  try {
    // Parse the incoming JSON data
    const requestData = req.body;

    // Validate the JSON data (you can add more specific validation as needed)
    if (
      !requestData ||
      typeof requestData !== "object" ||
      !requestData.password
    ) {
      return res.status(400).send({
        success: false,
        message: "Invalid JSON data or missing password",
      });
    }

    const exisitingUser = await usersModel.findOne({
      email: requestData.email,
    });

    // validation
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(requestData.password, salt);

    // Check if the hashedPassword is generated successfully
    if (!hashedPassword) {
      return res.status(500).send({
        success: false,
        message: "Error hashing the password",
      });
    }

    requestData.password = hashedPassword;

    // Create a new user instance and save it
    const user = new usersModel(requestData);
    await user.save();

    return res.status(200).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const requestData = req.body;

    console.log("requestData", requestData);
    const user = await usersModel.findOne({
      email: requestData.email,
    });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not Found",
      });
    }

    //compare password
    const comparePassword = await bcrypt.compare(
      requestData.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in login Api",
      err,
    });
  }
};

module.exports = { registerController, loginController };
