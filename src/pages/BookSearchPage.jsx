import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import '../App.css';

const BookSearchPage = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (e) => {
    const q = e.target.value;
    setQuery(q);

    if (q.length < 3) {
      setBooks([]);
      return;
    }

    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
      setBooks(response.data.docs);
    } catch (error) {
      console.error('Error fetching data from API', error);
    }
  };

  return (
    <div className="book-search-page w-75">
      <input type="text" value={query} onChange={searchBooks} placeholder="Search for books..." />
      <div className="search-results">
        <div>
          {books.map((book) => (
            <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSearchPage;
