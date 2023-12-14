const Author = require('../models/author');

// Create an Author
exports.createAuthor = async (req, res) => {
    try {
        const newAuthor = new Author(req.body);
        await newAuthor.save();
        res.status(201).send(newAuthor);
    } catch (err) {
        res.status(500).send({ message: "Error creating author" });
    }
};

// Read all Authors
exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.send(authors);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving authors" });
    }
};

exports.getAuthorById = async (req, res) => {
  try {
      const author = await Author.findById(req.params.id);
      if (author) {
          res.send(author);
      } else {
          res.status(404).send({ message: "Author not found" });
      }
  } catch (err) {
      res.status(500).send({ message: "Error retrieving author" });
  }
};

// Update an Author
exports.updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) {
            return res.status(404).send({ message: "Author not found" });
        }
        res.send(author);
    } catch (err) {
        res.status(500).send({ message: "Error updating author" });
    }
};

// Delete an Author
exports.deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndRemove(req.params.id);
        if (!author) {
            return res.status(404).send({ message: "Author not found" });
        }
        res.send({ message: "Author deleted successfully" });
    } catch (err) {
        res.status(500).send({ message: "Error deleting author" });
    }
};
