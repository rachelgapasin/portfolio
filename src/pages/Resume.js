import React from "react";
import Navbar from "../components/Navbar";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

import "./Resume.css";
import "./Pages.css";

function Resume() {
  return (
    <div className="Resume Pages">
      <Navbar />
      <header>
        <h1 className="text-center">My Resume</h1>
      </header>
      <div className="container">
        <section>
          <div className="resume">
            <img
              src="../assets/images/resume.png"
              alt="Rachel Gapasin Plain Resume"
              className="img-fluid"
            />
            <div className="text-center">
              <a
                href="../assets/images/resume.pdf"
                target="_blank"
                className="btn btn-secondary w-100"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="row">
            <h2 className="mt-5 text-center">Certificates</h2>
            <Certifications />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
