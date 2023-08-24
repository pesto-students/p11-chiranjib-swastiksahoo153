import React, { useState } from "react";

function BookDetail(props) {
  const { book } = props;
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <h3>
        {book.title} by {book.author} ({book.year})
      </h3>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div>
          <p>Description: {book.description}</p>
          <p>Genre: {book.genre}</p>
          {/* Add additional details as needed */}
        </div>
      )}
    </div>
  );
}

export default BookDetail;
