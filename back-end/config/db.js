// const mongoose = require("mongoose");
// const colors = require("colors");
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log(
//       `Connected to Mongodb Database ${mongoose.connection.host}`.bgCyan.white
//     );
//   } catch (err) {
//     console.log(`Mongodb Database Error ${err}`.bgRed.white);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to MongoDB Database ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (err) {
    console.error(`MongoDB Database Error: ${err}`.bgRed.white);
  }
};

module.exports = connectDB;
