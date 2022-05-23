const mongoose = require("mongoose");
const moment = require("moment");

const GallerySchema = new mongoose.Schema({
  title: { type: String, required: [true, "Please provide a title."] },
  description: { type: String },
  likes: [],
  timestamp: {
    type: String,
    default: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
});

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;
