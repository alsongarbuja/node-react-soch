const httpStatus = require("http-status");
const BookModel = require("../../models/book.model");

const getBooks = async (req, res) => {
  const books = await BookModel.find({});
  res.json(books);
} 

const createBook = async (req, res) => {
  const data = req.body;
  const book = await BookModel.create(data);
  res.status(httpStatus.CREATED).json(book);
}

module.exports = {
  getBooks,
  createBook,
}