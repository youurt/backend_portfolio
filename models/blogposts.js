const mongoose = require('mongoose');
const yup = require('yup');

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

const validateBlogPost = (blogpost) => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    date: yup.string().required(),
    tags: yup.array().required(),
    postCategory: yup.string().required(),
    postContent: yup.string().required(),
  });

  return schema
    .validate(blogpost)
    .then((blogpost) => blogpost)
    .catch((error) => {
      return {
        message: error.message,
      };
    });
};

exports.BlogPost = new mongoose.model('BlogPost', BlogPostSchema);
exports.validateBlogPost = validateBlogPost;
