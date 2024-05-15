require('dotenv').config();
const express = require('express');
const passport = require('passport');
const app = express();

const routes = require('./routes');
const httpStatus = require('http-status');
const { jwtStrategy } = require('./config/passport');

app.use(express.json());
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use('/api', routes);

// localhost:5000/api/books GET
// localhost:5000/api/books POST
// localhost:5000/api/users
// localhost:5000/api/boworrs

app.use((err, req, res, next) => {
  res.status(err.status||httpStatus.BAD_REQUEST).json({
    message: err.message
  })
})

module.exports = app;