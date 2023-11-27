import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <section className="Contact" id="contact">
      <h2>Contact Me</h2>
      <div className="text-center fs-3">Let's get in touch!</div>
      <form
        action="https://formsubmit.co/rachelgapasinn@gmail.com"
        method="POST"
      >
        <div className="label-input">
          <label for="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            className="text-box"
            id="name"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div className="label-input">
          <label for="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            className="text-box"
            id="email"
            placeholder="janedoe@example.com"
            required
          />
        </div>
        <div className="label-input">
          <label for="message">Message</label>
          <br />
          <textarea
            name="message"
            className="text-box"
            id="message"
            placeholder="Hi there! I would love to discuss a potential collaboration. Looking forward to hearing from you!"
            rows="4"
            required
          ></textarea>
        </div>
        <input type="submit" className="btn-primary" />
      </form>
    </section>
  );
}

export default Contact;
