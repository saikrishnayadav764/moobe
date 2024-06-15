const mongoose = require("mongoose");

const breweriesEntrySchema = new mongoose.Schema({
  breweryId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  description: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  reviewerProfilePic: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
    get: function (date) {
      return `${new Intl.DateTimeFormat("en", { month: "long" }).format(
        date
      )} ${date.getFullYear()}`;
    },
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("BreweriesEntry", breweriesEntrySchema);
