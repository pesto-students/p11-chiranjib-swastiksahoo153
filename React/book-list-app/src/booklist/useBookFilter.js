// useBookFilter.js
import { useState, useMemo } from "react";

// Custom hook for filtering a list of books based on a search term
function useBookFilter(books) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [books, searchTerm]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return {
    searchTerm,
    filteredBooks,
    handleSearchChange,
  };
}

export default useBookFilter;
