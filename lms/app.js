const express = require('express');
const app = express();

const routes = require('./routes');
const httpStatus = require('http-status');

app.use(express.json());

app.use('/api', routes);

// localhost:5000/api/books GET
// localhost:5000/api/books POST
// localhost:5000/api/users
// localhost:5000/api/boworrs

app.use((err, req, res, next) => {
  console.log(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    message: "Something went wrong"
  })
})

module.exports = app;