const mongoose = require('mongoose');

schema = new mongoose.Schema({
  movieId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
var Review = new mongoose.model('review', schema);
module.exports = Review
