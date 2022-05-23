const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
  });
  console.log("connected to Database!!!");
};

module.exports = connectDB;
