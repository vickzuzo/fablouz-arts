require("dotenv").config({ path: "./.env" });
const express = require("express");
const errorHandler = require("./middlewares/error.js");
const connectDB = require("./config/db");
const cors = require("cors");
// Connect to database

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth.route"));
// app.use("/api/private", require("./routes/private"));

// Error errorHandler (SHOULD BE THE LAST PIECE OF MIDDLEWARE)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running on PORT: ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
