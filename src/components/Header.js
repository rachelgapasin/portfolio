import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="Header" id="header">
      <div className="row">
        <div className="col">
          <p className="location d-lg-none mb-2">
              📍 Jersey City, NJ, USA
          </p>
          <h1>
            I'm Rachel Gapasin, <br />a{" "}
            <span className="special-text">web developer</span>.
          </h1>
          <p>
            I love to code and create things. I'm currently seeking Software Developer, Web Developer, UX/UI Design roles. Let's build something great together!
          </p>
          <a
            href="./#contact"
            className="btn-primary me-1 me-sm-3"
            title="Contact Rachel Gapasin"
          >
            Contact Me
          </a>
          <a
            href="./#featured-projects"
            className="btn-secondary"
            title="Browse Projects"
          >
            Browse Projects
          </a>
        </div>
        <div className="col-5 d-none d-lg-block">
          <img
            src="./assets/images/profile-pic.jpeg"
            alt="Rachel Gapasin"
            className="img-fluid"
          />
          <p className="location text-center mt-2">
            📍 Jersey City, NJ, USA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
