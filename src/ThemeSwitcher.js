import React, { useEffect, useState } from "react";

// import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

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
