// src/pages/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">It starts with a conversation.</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <label htmlFor="name" className="contact-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="contact-input"
        />

        <label htmlFor="email" className="contact-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          className="contact-input"
        />

        <label htmlFor="message" className="contact-label">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          className="contact-textarea"
        />

        <button type="submit" className="submit-button">
          SUBMIT ENQUIRY
        </button>
      </form>
    </div>
  );
};

export default Contact;
