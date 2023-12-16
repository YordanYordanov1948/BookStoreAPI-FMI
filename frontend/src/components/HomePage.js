// src/components/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto mt-4 p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to the Bookstore
        </h1>
        <p className="text-lg text-gray-600">
          Explore a wide range of books and authors.
        </p>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-xl mb-2">Featured Book</h2>
            <p>Discover our featured books and authors of the month.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-xl mb-2">New Arrivals</h2>
            <p>Check out the latest additions to our collection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
