const express = require('express');
const booksController = require('../controllers/books/book.controller');
const { createBook, updateBook } = require('../validations/book.validation');
const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth.middleware');

const router = express.Router();

router.route('/') // /api/books/
  .get(auth('getBook'), booksController.getBooks)
  .post(auth('mutateBook'), async (req, res, next) => {}, validate(createBook), booksController.createBook);

router.route('/:bookId') // /api/books/:bookId
  .get(booksController.getSingleBook)
  .patch(validate(updateBook), booksController.updateBook);

module.exports = router;