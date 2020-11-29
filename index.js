const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const blogpostRoute = require('./routes/blogposts');
const winston = require('winston');

const PORT = process.env.PORT || 3000;

// logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize({ all: true })),
    })
  );
}

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
    logger.log('info', 'Connected to mongodb atlas');
  })
  .catch((error) => {
    logger.log('error', error.message);
  });

// start server
app.listen(PORT, () => {
  logger.log('info', `Server started at PORT: ${PORT}`);
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
