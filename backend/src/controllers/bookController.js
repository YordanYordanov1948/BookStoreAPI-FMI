const Book = require('../models/book');

exports.createBook = async (req, res) => {
  try {
      const newBook = new Book(req.body);
      await newBook.save();
      res.status(201).send(newBook);
  } catch (err) {
      res.status(500).send({ message: "Error creating book" });
  }
};


exports.getAllBooks = async (req, res) => {
  try {
      const books = await Book.find();
      res.send(books);
  } catch (err) {
      res.status(500).send({ message: "Error retrieving books" });
  }
};



exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.send(book);
    } else {
      res.status(404).send({ message: "Book not found" });
    }
  } catch (err) {
    res.status(500).send({ message: "Error retrieving book" });
  }
};

exports.updateBook = async (req, res) => {
  try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!book) {
          return res.status(404).send({ message: "Book not found" });
      }
      res.send(book);
  } catch (err) {
      res.status(500).send({ message: "Error updating book" });
  }
};


exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.send({ message: "Book deleted successfully" });
  } catch (err) {
    console.error(err); // Log the specific error
    res.status(500).send({ message: "Error deleting book" });
  }
};
