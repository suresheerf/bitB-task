const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const dbURI = process.env.DATABASE;

const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use(morgan('dev'));

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'));

app.use('/', userRouter);
app.listen(port, () => console.log(`app listening on port ${port}!`));
