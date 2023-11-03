import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import "./Projects.css";
import "./Pages.css";

function Projects() {
  const projects = [
    {
      name: "Bahay Website",
      description:
        "A website that provides resources regarding homelessness in New Jersey.",
      imgSrc: "../images/projects/gwc-bahay.png",
      sourceCode: "https://github.com/rachelgapasin/gwc-give-back-project",
      demo: "https://bahay.netlify.app",
    },
    {
      name: "Wordist Dictionary",
      description:
        "A dictionary app built in React by integrating a dictionary API and an images API.",
      imgSrc: "../images/projects/wordist-dictionary.png",
      sourceCode: "https://github.com/rachelgapasin/dictionary",
      demo: "https://wordist.netlify.app",
    },
    {
      name: "React Weather App",
      description:
        "A weather app built in React by integrating a weather API and using Bootstrap.",
      imgSrc: "../images/projects/react-weather-app.png",
      sourceCode: "https://github.com/rachelgapasin/react-weather-app",
      demo: "https://weather-or-not.netlify.app",
    },
    {
      name: "Monsta X Webpage",
      description:
        "A responsive webpage about my favorite K-pop group, built with HTML and vanilla CSS.",
      imgSrc: "../images/projects/monsta-x.png",
      sourceCode: "https://github.com/rachelgapasin/kpop-monsta-x",
      demo: "https://monstax.netlify.app",
    },
    {
      name: "World Clock App",
      description:
        "A world clock app built using HTML, CSS (Bootstrap), and Javascript (Moment.js).",
      imgSrc: "../images/projects/world-clock.png",
      sourceCode: "https://github.com/rachelgapasin/world-clock",
      demo: "https://rg-world-clock.netlify.app",
    },
    {
      name: "Vanilla Weather App",
      description:
        "A weather app built by integrating a weather API and using HTML, CSS, and Javascript.",
      imgSrc: "../images/projects/weather-app.png",
      sourceCode: "https://github.com/rachelgapasin/weather-app",
      demo: "https://rg-weather.netlify.app",
    },
  ];

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
