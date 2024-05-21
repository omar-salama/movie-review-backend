const express = require('express');
const router = express.Router();
const Review = require('../models/reviews');

router.post('/:movieId/reviews', async (req, res) => {
  try {
    const { movieId } = req.params;
    const { name, review } = req.body;
    const newReview = await Review.create({ movieId, name, review });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:movieId/reviews', async (req, res) => {
  try {
    const { movieId } = req.params;
    const reviews = await Review.find({ movieId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
