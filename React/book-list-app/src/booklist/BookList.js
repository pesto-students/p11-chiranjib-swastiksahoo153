import React from "react";
import BookDetail from "./BookDetail";
import WithLogging from "./WithLogging";
import BookForm from "./BookForm";

import "./styles.css";

class BookList extends React.PureComponent {
  constructor(props) {
    super(props);

    // Define the initial state
    this.state = {
      books: [],
    };
  }

  addBook = (newBook) => {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  };

  deleteBook = (index) => {
    const updatedBooks = [...this.state.books];
    updatedBooks.splice(index, 1);
    this.setState({ books: updatedBooks });
  };

  render() {
    return (
      <div>
        <h2 className="header">List of Books</h2>
        <div className="book-list-container">
          {this.state.books.length === 0 ? (
            <p>The book list is currently empty.</p>
          ) : (
            <ul>
              {this.state.books.map((book, index) => (
                <li key={index} className="book-card">
                  <BookDetail book={book} />
                  <button onClick={() => this.deleteBook(index)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="book-form">
          <BookForm addBook={this.addBook} />
        </div>
      </div>
    );
  }
}

export default WithLogging(BookList);
