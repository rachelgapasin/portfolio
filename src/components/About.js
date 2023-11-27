import React from "react";

import "./About.css";

function About() {
  return (
    <section className="About" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <img
                src="./assets/images/school.svg"
                alt="New Jersey City University"
                className="img-fluid mb-1 p-5"
              />
              <div className="card-body">
                <h5 className="card-title">Education 👩🏽‍🎓</h5>
                <p className="card-text">
                  I am currently in my senior year at New Jersey City
                  University, where I am pursuing a bachelor's degree in
                  Computer Science.
                </p>
                <p className="card-text">
                  My time at university has provided me with a strong foundation
                  in computer science principles, programming languages, and
                  problem-solving skills.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <img
                src="./assets/images/coding.svg"
                alt="Coding"
                className="img-fluid mb-1 p-2"
              />
              <div className="card-body">
                <h5 className="card-title">Passions 👩🏽‍💻</h5>
                <p className="card-text">
                  I have a strong passion for technology. There is something
                  really amazing about conceiving an idea and then being the one
                  to actually make it happen.
                </p>
                <p className="card-text">
                  It has been amazing learning what it's like to create art
                  through code, and I can't wait to work on more projects!
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card">
              <img
                src="./assets/images/hobby-art.svg"
                alt="Hobbies"
                className="img-fluid mb-1 p-3"
              />
              <div className="card-body">
                <h5 className="card-title">Hobbies 🧚🏽‍♀️</h5>
                <p className="card-text">
                  🎨 Other than coding, I really enjoy journaling and
                  occasionally painting.
                </p>
                <p className="card-text">
                  🎶 I'm a huge fan of K-pop, and I love going to concerts with
                  friends.
                </p>
                <p className="card-text">
                  ⛸️ Lastly, it's always fun for me to try new hobbies like
                  juggling and ice skating!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
