const express = require('express');
const booksController = require('../controllers/books/book.controller');
const { createBook } = require('../validations/book.validation');
const validate = require('../middlewares/validate');

const router = express.Router();

router.route('/')
  .get(booksController.getBooks)
  .post(validate(createBook), booksController.createBook);

module.exports = router;