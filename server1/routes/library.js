const express = require('express');
const Book = require('../model/book');
const Author = require('../model/author');
const router = express.Router();

// GET /library/:id
router.get('/library/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('authorId');
    if (book) {
      res.json({
        bookDetails: book,
        //authorDetails: book.authorId
      });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
