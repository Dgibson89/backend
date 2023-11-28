const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true
  },
  user: String,
  comment: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
