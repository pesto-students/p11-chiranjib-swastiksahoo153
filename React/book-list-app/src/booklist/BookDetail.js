import React from "react";

function BookDetail(props) {
  const { book } = props;
  return (
    <>
      <strong>Title:</strong> {book.title}, <strong>Author:</strong>{" "}
      {book.author}, <strong>Year:</strong> {book.year}
    </>
  );
}

export default BookDetail;
