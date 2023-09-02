const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const { registerController } = require("./controllers/authController");

// dot config
dotenv.config();

//mongodb connection
connectDB();

const app = express();

//middlwares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// routes

app.use("/api/v1/auth", require("./routes/authRoutes"));

//port
const PORT = process.env.PORT || 8080;

/// listen

app.listen(PORT, () => {
  console.log(
    `Node server Running in ${process.env.DEV_MODE}Modeon  Port ${process.env.PORT}`
      .bgBlue.white
  );
});
