import React from "react";
import { ReactTyped } from "react-typed";

import "./Header.css";

function Header() {
  return (
    <div className="Header" id="header">
      <div className="row">
        <div className="col">
          <p className="location d-lg-none mb-2">📍 Jersey City, NJ, USA</p>
          <h1>
            I'm Rachel Gapasin, <br />a{" "}
            <span className="special-text">
              <ReactTyped
                strings={[
                  "web developer.",
                  "front-end developer.",
                  "software developer.",
                  "web developer.",
                ]}
                startDelay={1000}
                typeSpeed={50}
                backSpeed={40}
              />
            </span>
          </h1>
          <p className="mt-3">
            I love to code and create things. I'm currently seeking Software
            Development, Web Development, Front-end Development, and UX/UI
            Design positions. Let's build something great together!
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
          <p className="location text-center mt-2">📍 Jersey City, NJ, USA</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
