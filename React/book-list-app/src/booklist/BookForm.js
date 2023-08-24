// src/BookForm.js
import React, { Component } from "react";
import "./styles.css";

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      year: "",
      description: "",
      genre: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      title: this.state.title,
      author: this.state.author,
      year: parseInt(this.state.year),
      description: this.state.description,
      genre: this.state.genre,
    };

    this.props.addBook(newBook);

    this.setState({
      title: "",
      author: "",
      year: "",
      description: "",
      genre: "",
    });
  };

  render() {
    return (
      <div>
        <h2 className="header">Add a New Book</h2>
        <form onSubmit={this.handleSubmit} className="book-form">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleInputChange}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Year:
            <input
              type="number"
              name="year"
              value={this.state.year}
              onChange={this.handleInputChange}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Genre:
            <input
              type="text"
              name="genre"
              value={this.state.genre}
              onChange={this.handleInputChange}
              className="input-field"
            />
          </label>
          <br />
          <button className="button" type="submit">
            Add Book
          </button>
        </form>
      </div>
    );
  }
}

export default BookForm;
