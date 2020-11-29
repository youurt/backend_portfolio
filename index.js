const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const blogpostRoute = require('./routes/blogposts');

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/blogposts', blogpostRoute);

// connect to mongodb atlas
mongoose
  .connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Connected to mongodb atlas');
  })
  .catch((error) => {
    console.log(error.message);
  });

// start server
app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
