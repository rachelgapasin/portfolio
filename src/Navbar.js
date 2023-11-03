import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar navbar navbar-expand-sm bg-body-tertiary fixed-top">
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
            <a className="nav-link" href="/#header">
              Home
            </a>
            <a className="nav-link" href="./#about">
              About
            </a>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
            <a className="nav-link" href="./#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
