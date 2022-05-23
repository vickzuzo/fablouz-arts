const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  const user = req.user;
  if (user.type !== "admin") {
    return res.send({ message: "You are not an authorized admin." });
  }
  next();
};
