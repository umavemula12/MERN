const express = require('express');
const Author = require('../model/author');
const router = express.Router();

// POST /authors
router.post('/', async (req, res) => {
  const author = new Author(req.body);
  try {
    const newAuthor = await author.save();
    res.status(201).json(newAuthor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /authors
router.get('/', async (req, res) => {
    try {
        // Fetch all authors' names from the database
        const authors = await Author.find({}, 'name'); // Select only the name field
        // Map the result to an array of names
        const authorNames = authors.map(author => author.name);
        res.status(200).json(authorNames);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
