// src/components/AuthorDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AuthorDetails = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    // Fetch author details using the id and setAuthor
  }, [id]);

  if (!author) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold">{author.name}</h2>
    </div>
  );
};

export default AuthorDetails;
