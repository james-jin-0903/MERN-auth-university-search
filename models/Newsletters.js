const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NewslettersSchema = new Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  letters: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("Newsletters", NewslettersSchema);
