const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogposts');

// POST: CREATE A NEW BLOGPOST
router.post('/', (req, res) => {
  blogpost = new BlogPost({
    title: req.body.title,
    date: req.body.date,
    tags: req.body.tags,
    postCategory: req.body.postCategory,
    postContent: req.body.postContent,
  });
  blogpost
    .save()
    .then((blogpost) => {
      res.send(blogpost);
    })
    .catch((error) => {
      res.status(500).send('blogpost was not stored in db');
    });
});

module.exports = router;
