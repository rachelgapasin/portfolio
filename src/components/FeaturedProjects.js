import React from "react";
import { Link } from "react-router-dom";

import "./FeaturedProjects.css";

const projects = [
  {
    name: "Facts Logger",
    description: "A web app built using React and Supabase database.",
    imgSrc: "../assets/images/projects/facts-logger.png",
    sourceCode: "https://github.com/rachelgapasin/facts-logger",
    demo: "https://todayilearned-rg.netlify.app",
  },
  {
    name: "Bahay Website",
    description:
      "A website that provides resources regarding homelessness in New Jersey.",
    imgSrc: "../assets/images/projects/gwc-bahay.png",
    sourceCode: "https://github.com/rachelgapasin/gwc-bahay",
    demo: "https://bahay.netlify.app",
  },
  {
    name: "React Weather App",
    description:
      "A weather app built in React by integrating OpenWeatherMap API and using Tailwind CSS.",
    imgSrc: "../assets/images/projects/weather-app-react.png",
    sourceCode: "https://github.com/rachelgapasin/weather-app-react",
    demo: "https://weather-or-not.netlify.app",
  },
];

function FeaturedProjects() {
  return (
    <section className="FeaturedProjects secondary" id="featured-projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project col-xs-12 col-sm-6 col-md-4 d-flex align-items-stretch"
            >
              <div className="card">
                <img
                  src={project.imgSrc}
                  className="card-img-top"
                  alt={project.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
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
          ))}
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
