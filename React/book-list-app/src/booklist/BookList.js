import React from "react";
import BookDetail from "./BookDetail";

import WithLogging from "./WithLogging";

class BookList extends React.PureComponent {
  constructor(props) {
    super(props);

    // Define the initial state
    this.state = {
      books: [
        { title: "Book 1", author: "Author 1", year: 2020 },
        { title: "Book 2", author: "Author 2", year: 2018 },
        { title: "Book 3", author: "Author 3", year: 2022 },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>List of Books</h2>
        <ul>
          {this.state.books.map((book, index) => (
            <li key={index}>
              <BookDetail book={book} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WithLogging(BookList);
