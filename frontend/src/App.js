// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BooksList from './components/books/BooksList';
import BookDetails from './components/books/BookDetails';
import NavigationBar from './components/NavigationBar';
import AuthorList from './components/authors/AuthorList';
import AuthorDetails from './components/authors/AuthorDetails';

function App() {
  return (
    <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/authors" element={<AuthorList />} />
      <Route path="/author/:id" element={<AuthorDetails />} />
    </Routes>
  </Router>
  );
}

export default App;
