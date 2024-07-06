const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    _id: {type: Number, required: true},
  name: { type: String, required: true },
  publisher: { type: String, required: true },
  description: { type: String },
  authorId: { type: Number, ref: 'Author', required: true }
});

module.exports = mongoose.model('Book', bookSchema);
