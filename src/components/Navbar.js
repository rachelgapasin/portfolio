import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ThemeSwitcher from "./ThemeSwitcher";

import "./Navbar.css";

function Navbar() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <nav className="Navbar navbar navbar-expand-sm bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          RG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <HashLink smooth to="/#" className="nav-link">
              Home
            </HashLink>
            <HashLink smooth to="/#about" className="nav-link">
              About
            </HashLink>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Projects
              </a>
              <ul className="dropdown-menu">
                <li>
                  <HashLink
                    smooth
                    to="/#featured-projects"
                    className="dropdown-item"
                  >
                    Featured Projects
                  </HashLink>
                </li>
                <li>
                  <Link to="/projects" className="dropdown-item">
                    All Projects
                  </Link>
                </li>
              </ul>
            </li>
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
            <HashLink smooth to="/#contact" className="nav-link">
              Contact
            </HashLink>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
