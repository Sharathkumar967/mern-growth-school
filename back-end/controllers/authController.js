const usersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    // Parse the incoming JSON data
    const requestData = req.body;

    // Validate the JSON data
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
      userName: requestData.userName,
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


const currentUserController = async (req, res) => {
  try {
    const user = await usersModel.findOne({ _id: req.body.user });

    return res.status(200).send({
      success: true,
      message: "User Fetched Successfully ",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "unable to get current user",
      err,
    });
  }
};

module.exports = { registerController, loginController, currentUserController };

//////////////////////////////////////////////////////////////////////////////////////////

// // controllers/authController.js
// const usersModel = require("../models/usersModel");
// const otpGenerator = require("otp-generator");
// const jwt = require("jsonwebtoken");

// const registerController = async (req, res) => {
//   try {
//     const requestData = req.body;

//     if (!requestData || typeof requestData !== "object" || !requestData.phone) {
//       return res.status(400).send({
//         success: false,
//         message: "Invalid JSON data or missing phone number",
//       });
//     }

//     // Check if the email is null or undefined and handle it accordingly
//     if (!requestData.email) {
//       // Handle the case of a null email here, e.g., generate a unique email
//       requestData.email = generateUniqueEmail();
//     }

//     const existingUser = await usersModel.findOne({
//       phone: requestData.phone,
//     });

//     // Validation
//     if (existingUser) {
//       return res.status(200).send({
//         success: false,
//         message: "Phone number is already registered",
//       });
//     }

//     // Generate OTP
//     const otp = otpGenerator.generate(6, {
//       digits: true,
//       upperCase: false,
//       specialChars: false,
//       alphabets: false,
//     });

//     // Create a new user instance and save it
//     const user = new usersModel({
//       phone: requestData.phone,
//       email: requestData.email,
//       otp: otp, // Store OTP in the user object
//     });
//     await user.save();

//     return res.status(200).send({
//       success: true,
//       message: "User Registered Successfully",
//       user,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({
//       success: false,
//       message: "Error in Registration API",
//     });
//   }
// };

// // Define a simple OTP generation function
// function generateOTP(length) {
//   const charset = "0123456789";
//   let otp = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     otp += charset[randomIndex];
//   }
//   return otp;
// }

// const sendPhoneController = async (req, res) => {
//   try {
//     const phoneNumber = req.body.phone;
//     console.log("phoneNumber", phoneNumber);

//     // Your Twilio Account SID and Auth Token
//     const accountSid = "AC34ee300c39e680217a1901ea7bff8d94";
//     const authToken = "430444766d334e9de400dd53a710696b";

//     // Create a Twilio client
//     const client = require("twilio")(accountSid, authToken);

//     // Generate an OTP using the generateOTP function
//     const otp = generateOTP(6); // Specify the OTP length (e.g., 6 digits)

//     // Ensure that the phone number is correctly formatted with the country code
//     const formattedPhoneNumber = `+91${phoneNumber.replace(/\D/g, "")}`;

//     // Send OTP via SMS using Twilio
//     await client.messages.create({
//       to: phoneNumber, // Correctly formatted phone number
//       from: "9063928320", // Your Twilio phone number
//       body: `Your OTP is: ${otp}`,
//     });

//     return res.status(200).send({
//       success: true,
//       message: "OTP Sent Successfully",
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send({
//       success: false,
//       message: "Error sending OTP",
//     });
//   }
// };

// const loginController = async (req, res) => {
//   try {
//     const requestData = req.body;
//     const user = await usersModel.findOne({ phone: requestData.phone });

//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "User not Found",
//       });
//     }

//     // Verify OTP
//     if (requestData.otp !== user.otp) {
//       return res.status(500).send({
//         success: false,
//         message: "Invalid OTP",
//       });
//     }

//     // At this point, the OTP is valid; you can proceed with logging in the user
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     return res.status(200).send({
//       success: true,
//       message: "Login Successfully",
//       token,
//       user,
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send({
//       success: false,
//       message: "Error in login API",
//     });
//   }
// };

// const currentUserController = async (req, res) => {
//   try {
//     const user = await usersModel.findOne({ _id: req.body.user });

//     return res.status(200).send({
//       success: true,
//       message: "User Fetched Successfully ",
//       user,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send({
//       success: false,
//       message: "unable to get current user",
//       err,
//     });
//   }
// };

// module.exports = {
//   registerController,
//   sendPhoneController,
//   loginController,
//   currentUserController,
// };
