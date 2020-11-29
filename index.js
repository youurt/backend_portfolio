const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

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
    console.log(`something wrong happened: ${error}`);
  });

// start server
app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
