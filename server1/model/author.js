const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    _id: {type: Number, required: true},
  name: { type: String, required: true },
  age: { type: Number, required: true },
  totalBooks: { type: Number, default: 0 },
  description: { type: String }
});

module.exports = mongoose.model('Author', authorSchema);
