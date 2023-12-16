import React, { useState, useEffect } from 'react';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3001/authors';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setAuthors(data))
      .catch(error => {
        console.error('Error fetching authors:', error);
      });
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold">Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {authors.map(author => (
          <div key={author.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">{author.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorList;
