const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  instagram: { type: String },
  facebook: { type: String },
  email: { type: String },
  whatsapp: { type: String },
  carousels: [],
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
