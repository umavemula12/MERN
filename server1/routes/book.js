const express = require('express');
const Book = require('../model/book');
const Author = require('../model/author');
const router = express.Router();

// POST /books
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  try {
    const newBook = await book.save();
    const author = await Author.findById(book.authorId);
    if (author) {
      author.totalBooks += 1;
      await author.save();
    }
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().populate('authorId');
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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
