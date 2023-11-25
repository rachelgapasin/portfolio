import React, { useEffect } from "react";

import useLocalStorage from "./UseLocalStorage";

import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const defaultLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "portfolio.theme",
    defaultLight ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  return (
    <div className="ThemeSwitcher">
      <div>
        <button
          className="btn-theme"
          aria-label={`Change theme to ${
            theme === "light" ? "dark" : "light"
          } mode`}
          // role="switch"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? (
            <i className="fa-regular fa-sun"></i>
          ) : (
            <i className="fa-regular fa-moon"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
