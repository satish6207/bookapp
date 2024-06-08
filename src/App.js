import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
        <BrowserRouter>
      <nav>
          <Link to="/">Search Books</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
    <Routes className="app">
      
          <Route path="/" element={<BookSearchPage onAddToBookshelf={addToBookshelf} />} />
          <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
      
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
