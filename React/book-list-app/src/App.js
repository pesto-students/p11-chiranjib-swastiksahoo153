import { useState } from "react";
import "./App.css";
import BookList from "./booklist/BookList";
import ThemeContext from "./booklist/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BookList />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
