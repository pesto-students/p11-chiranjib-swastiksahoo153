import { useMemo } from "react";

function useBookSorter(books, sortingCriteria) {
  const sortedBooks = useMemo(() => {
    // Sort the books based on the provided sorting criteria
    if (sortingCriteria === "title") {
      return [...books].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortingCriteria === "author") {
      return [...books].sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortingCriteria === "year") {
      return [...books].sort((a, b) => a.year - b.year);
    } else {
      return books;
    }
  }, [books, sortingCriteria]);

  return sortedBooks;
}

export default useBookSorter;
