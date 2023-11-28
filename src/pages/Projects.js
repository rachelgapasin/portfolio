import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Projects.css";
import "./Pages.css";

function Projects({ projects }) {
  return (
    <div className="Projects Pages">
      <Navbar />
      <header>
        <h1 className="text-center">My Projects</h1>
        <p className="text-center">
          Thank you for checking out my work! Everything is ordered from newest
          to oldest.
        </p>
      </header>
      <div className="container">
        <section>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="project col-xs-12 col-sm-6 col-md-4">
                <div className="card">
                  <img
                    src={project.imgSrc}
                    className="card-img-top"
                    alt={project.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="project-links">
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
