import React from "react";
import { Link } from "react-router-dom";

import "./FeaturedProjects.css";

function FeaturedProjects() {
  return (
    <section className="FeaturedProjects secondary" id="featured-projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src="./assets/images/projects/gwc-bahay.png"
                className="card-img-top"
                alt="Bahay Website"
              />
              <div className="card-body">
                <h5 className="card-title">Bahay Website</h5>
                <p className="card-text">
                  A website that provides resources regarding homelessness in
                  New Jersey.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/rachelgapasin/gwc-give-back-project"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    Code
                  </a>
                  <a
                    href="https://bahay.netlify.app"
                    className="btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src="./assets/images/projects/wordist-dictionary.png"
                className="card-img-top"
                alt="Wordist Dictionary"
              />
              <div className="card-body">
                <h5 className="card-title">Wordist Dictionary</h5>
                <p className="card-text">
                  A dictionary app built in React by integrating a dictionary
                  API and an images API.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/rachelgapasin/dictionary"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    Code
                  </a>
                  <a
                    href="https://wordist.netlify.app"
                    className="btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src="./assets/images/projects/react-weather-app.png"
                className="card-img-top"
                alt="React Weather App"
              />
              <div className="card-body">
                <h5 className="card-title">React Weather App</h5>
                <p className="card-text">
                  A weather app built in React by integrating a weather API and
                  using Bootstrap.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/rachelgapasin/react-weather-app"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    Code
                  </a>
                  <a
                    href="https://weather-or-not.netlify.app"
                    className="btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col text-center">
            <Link to="/projects" className="btn-primary mt-3 mt-sm-0 mt-md-4">
              See All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
