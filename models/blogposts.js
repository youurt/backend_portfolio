const mongoose = require('mongoose');

// BLOGPOST SCHEMA
const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  postCategory: {
    type: String,
    required: true,
  },
  postContent: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model('BlogPost', BlogPostSchema);
