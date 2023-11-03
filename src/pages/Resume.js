import React from "react";
import Navbar from "../Navbar";
import Certifications from "./Certifications";
import Footer from "../Footer";

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
          <p className="text-center">
            Pick a resume format to download 🤗 Don't worry, the content is the
            same, so just choose whichever you think is easier to read!
          </p>
          <div className="row mb-3">
            <div className="col-md">
              <img
                src="/images/resume.png"
                alt="Rachel Gapasin Plain Resume"
                className="img-fluid"
              />
              <div className="text-center">
                <a
                  href="/images/resume.pdf"
                  target="_blank"
                  className="btn btn-secondary w-100"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="col-md mt-5 mt-md-0">
              <img
                src="/images/resume-formatted.png"
                alt="Rachel Gapasin Formatted Resume"
                className="img-fluid"
              />
              <div className="text-center">
                <a
                  href="/images/resume-formatted.pdf"
                  target="_blank"
                  className="btn btn-secondary w-100"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="row" id="certificate-container">
            <h2 className="mt-5 text-center">Certifications</h2>
            <Certifications />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
