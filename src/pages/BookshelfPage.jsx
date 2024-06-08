import React from 'react';

const BookshelfPage = ({ bookshelf }) => {
  return (
    <div className="bookshelf-page">
      <h2>My Bookshelf</h2>
      <div className="bookshelf">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
