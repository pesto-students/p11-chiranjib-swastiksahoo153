// ThemeSwitcher.js
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
    document.body.classList.toggle("dark");
  };

  return (
    <div className="theme-switcher">
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleThemeToggle}
        />
        Dark Theme
      </label>
    </div>
  );
}

export default ThemeSwitcher;
