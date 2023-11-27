import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="Header" id="header">
      <div className="row">
        <div className="col">
          <h1>
            I'm Rachel Gapasin, <br />a{" "}
            <span className="special-text">front-end developer</span>.
          </h1>
          <p className="mt-3">
            I love to code and create things. I'm enthusiastically exploring
            opportunities for internships or full-time positions that align with
            my skills and aspirations. Let's build something great together!
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
        </div>
      </div>
    </div>
  );
}

export default Header;
