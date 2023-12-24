import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="contact-box">
        <h3>Like what you see?</h3>
        <p>Feel free to contact me!</p>
        <div className="social-links d-flex justify-content-center mt-4">
          <a href="mailto:rachelgapasinn@gmail.com" title="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rachelgapasin/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/rachelgapasin"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://instagram.com/rachelgapasinn"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-3">
        <a
          href="https://github.com/rachelgapasin/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Rachel Gapasin 👩🏽‍💻
      </div>
    </footer>
  );
}

export default Footer;
