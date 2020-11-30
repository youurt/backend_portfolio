const express = require('express');
const router = express.Router();
const { BlogPost, validateBlogPost } = require('../models/blogposts');
const { nanoid } = require('nanoid');

// POST: CREATE A NEW BLOGPOST
router.post('/', async (req, res) => {
  const error = await validateBlogPost(req.body);
  if (error.message) res.status(400).send(error.message);
  blogpost = new BlogPost({
    title: req.body.title,
    tags: req.body.tags,
    postCategory: req.body.postCategory,
    postContent: req.body.postContent,
    slugId: nanoid(5),
  });
  blogpost
    .save()
    .then((blogpost) => {
      res.send(blogpost);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// GET: ALL BLOGPOSTS
router.get('/', (req, res) => {
  BlogPost.find()
    .then((blogpost) => res.send(blogpost))
    .catch((error) => {
      res.status(500).send('Something went wrong!');
    });
});

// GET THE BLOGPOST BY ID
router.get('/:blogPostId', async (req, res) => {
  try {
    const blogpost = await BlogPost.findById(req.params.blogPostId);
    if (!blogpost) res.status(404).send('Blogpost not found');
    res.send(blogpost);
  } catch (error) {
    res.status(500).send('Something went wrong!');
  }
});

// UPDATE BLOGPOST BY ID
router.put('/:blogPostId', async (req, res) => {
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      req.params.blogPostId,
      {
        title: req.body.title,
        date: req.body.date,
        tags: req.body.tags,
        postCategory: req.body.postCategory,
        postContent: req.body.postContent,
      },
      { new: true }
    );
    if (!updatedBlogPost) res.status(404).send('Blogpost not found!');
    res.send(updatedBlogPost);
  } catch (error) {
    res.status(500).send('Something went wrong!');
  }
});

// DELETE BLOGPOST BY ID
router.delete('/:blogPostId', async (req, res) => {
  try {
    const deletedBlogPost = await BlogPost.findByIdAndRemove(
      req.params.blogPostId
    );
    if (!deletedBlogPost) res.status(404).send('book with id not found');
    res.send(deletedBlogPost);
  } catch (error) {
    res.status(500).send('Something went wrong!');
  }
});

module.exports = router;
