const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

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

app.get("/", (req, res) => {
  res.status(200).send({
    status: true,
    message: "Welcome to growth school App",
  });
});

//port
const PORT = process.env.PORT || 8080;

/// listen

app.listen(PORT, () => {
  console.log(
    `Node server Running in ${process.env.DEV_MODE}Modeon  Port ${process.env.PORT}`
      .bgBlue.white
  );
});