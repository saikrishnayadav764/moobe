const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  likedBreweries: [{
    type: String
  }],
  dislikedBreweries: [{
    type: String
  }],
  reviewedBreweries: [{
    type: String
  }],
});

module.exports = mongoose.model("User", userSchema);
