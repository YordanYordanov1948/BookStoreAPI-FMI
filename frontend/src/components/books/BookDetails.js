// src/components/BookDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch book details using the id and setBook
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p>Author: {book.author}</p>
    </div>
  );
};

export default BookDetails;
