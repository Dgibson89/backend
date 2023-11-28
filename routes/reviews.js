const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// POST a review
router.post('/', async (req, res) => {
  const review = new Review({
    game: req.body.game,
    user: req.body.user, 
    comment: req.body.comment,
  });

  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get reviews for a specific game
router.get('/:gameId', async (req, res) => {
  try {
    const reviews = await Review.find({ game: req.params.gameId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
