import React, { useState, useContext } from "react";
import BookDetail from "./BookDetail";
import WithLogging from "./WithLogging";
import BookForm from "./BookForm";
import BookDataLoader from "./BookDataLoader";
import useBookFilter from "./useBookFilter";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import useBookSorter from "./useBookSorter";
import "./styles.css";

function BookList() {
  const [books, setBooks] = useState([]);
  const [sortingCriteria, setSortingCriteria] = useState("title");

  const { theme } = useContext(ThemeContext);

  // Use the custom hook to filter the list of books
  const { searchTerm, filteredBooks, handleSearchChange } =
    useBookFilter(books);

  // Use the custom hook to sort the list of filtered books
  const sortedBooks = useBookSorter(filteredBooks, sortingCriteria);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className={`book-list-container ${theme}`}>
      <ThemeSwitcher />
      <h2 className="header">List of Books</h2>
      {/* Add this select element for sorting */}
      <div className="sorting-controls">
        <label>
          Sort by:
          <select
            value={sortingCriteria}
            onChange={(e) => setSortingCriteria(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="year">Year</option>
          </select>
        </label>
      </div>

      <div className="book-search">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
      <div className="book-list-container">
        {sortedBooks.length === 0 ? (
          <p>No matching books found.</p>
        ) : (
          <ul>
            {sortedBooks.map((book, index) => (
              <li key={index} className="book-card">
                <BookDetail book={book} />
                <button onClick={() => deleteBook(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="book-form">
        <BookForm addBook={addBook} />
      </div>
      <BookDataLoader setBooks={setBooks} />
    </div>
  );
}

export default WithLogging(BookList);
