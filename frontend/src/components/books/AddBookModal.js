import React, { useState } from 'react';

const AddBookModal = ({ isOpen, onClose, onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = () => {
    const bookData = { title, author };

    fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(newBook => {
      onClose();
      onBookAdded(newBook); 
    })
    .catch(error => {
      console.error('Error adding book:', error);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="container mx-auto md:px-4 pt-20">
        <div className="bg-white rounded shadow-lg md:max-w-lg mx-auto">
          <div className="border-b p-4">
            <h2 className="text-2xl font-semibold">Add a New Book</h2>
          </div>
          <div className="p-8">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter book title"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="author" className="block text-gray-700">Author</label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter author's name"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
              >
                Add Book
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookModal;
