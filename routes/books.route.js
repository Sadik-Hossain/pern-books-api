const { Router } = require("express");
const {
  getAllBooks,
  addBook,
  getABook,
  updateBook,
  deleteBook,
} = require("../ctrl/books.ctrl");

const bookRoute = Router();

// GET /books -> return all books
bookRoute.route("/books").get(getAllBooks);

// GET /book/:id -> return a book
bookRoute.route("/book/:id").get(getABook);

// POST /books -> add a book
bookRoute.route("/books").post(addBook);

// PUT /book/:id -> update existing book/add a new book
bookRoute.route("/book/:id").put(updateBook);

// delete /book/:id -> delete book
bookRoute.route("/book/:id").delete(deleteBook);

module.exports = bookRoute;
