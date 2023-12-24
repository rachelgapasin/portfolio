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
          <div id="carouselExampleCaptions" class="carousel slide m-auto">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={projects.at(0).imgSrc}
                  class="d-block w-100"
                  alt={projects.at(0).name}
                />
                <div class="carousel-caption">
                  <h5>{projects.at(0).name}</h5>
                  <p>{projects.at(0).description}</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={projects.at(1).imgSrc}
                  class="d-block w-100"
                  alt={projects.at(1).name}
                />
                <div class="carousel-caption">
                  <h5>{projects.at(1).name}</h5>
                  <p>{projects.at(1).description}</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={projects.at(2).imgSrc}
                  class="d-block w-100"
                  alt={projects.at(2).name}
                />
                <div class="carousel-caption">
                  <h5>{projects.at(2).name}</h5>
                  <p>{projects.at(2).description}</p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="text-center">
            <Link to="/projects" className="btn-primary mt-3">
              See All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
