const httpStatus = require("http-status");
const BookModel = require("../../models/book.model");
const mongoose = require("mongoose");

const getBooks = async (req, res) => {
  const books = await BookModel.find({});
  res.json(books);
} 

const getBookById = async (id) => {
  return await BookModel.findById(new mongoose.Types.ObjectId(id));
}

const getSingleBook = async (req, res) => {
  const { bookId } = req.params;
  const book = await getBookById(bookId);
  if (!book) return res.status(httpStatus.NOT_FOUND).json({ message: 'Book not found' });
  res.status(httpStatus.OK).json(book);
}

const createBook = async (req, res) => {
  const data = req.body;
  const book = await BookModel.create(data);
  res.status(httpStatus.CREATED).json(book);
}

const updateBook = async (req, res) => {
  const { bookId } = req.params; 
  const book = await getBookById(bookId);
  if (!book) return res.status(httpStatus.NOT_FOUND).json({ message: 'Book not found' });
  Object.assign(book, req.body);
  await book.save();
  res.status(httpStatus.OK).json(book);
}

module.exports = {
  getBooks,
  getSingleBook,
  createBook,
  updateBook,
}