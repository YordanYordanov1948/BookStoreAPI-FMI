import React, { useState, useEffect } from 'react';
import AddBookModal from './AddBookModal';
import EditBookModal from './EditBookModal';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  // Function to fetch books from the API
  const fetchBooks = () => {
    const apiUrl = 'http://localhost:3001/books';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setBooks(data))
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  };

  const deleteBook = (bookId) => {
    fetch(`http://localhost:3001/books/${bookId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Call fetchBooks to update the list of books in the UI
      fetchBooks();
    })
    .catch(error => {
      console.error('Error deleting book:', error);
      // Optionally, inform the user that the deletion failed
    });
  };
  

  useEffect(() => {
    fetchBooks();
  }, []); 

  return (
        <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Books</h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add New Book
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {books.map(book => (
            <div key={book._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-xl mb-2">{book.title}</h3>
              <p className="text-gray-600">Author: {book.author}</p>
              <button
                onClick={() => setEditingBook(book)}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              >
                Edit
              </button>
              <button
                onClick={() => deleteBook(book._id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <AddBookModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onBookAdded={fetchBooks}
        />
        <EditBookModal
          isOpen={!!editingBook}
          onClose={() => setEditingBook(null)}
          bookToEdit={editingBook}
          onBookUpdated={fetchBooks}
        />
      </div>
  );
};

export default BooksList;
