import React from 'react';

function ContactSection() {
  return (
    <div className="contact-section">
      <h3>Let's Connect</h3>
      <p>
        I'm actively seeking full-time product management opportunities. Always
        happy to chat about product, startups, or AI.
      </p>
      <div className="contact-links">
        <a href="mailto:anushka.singh@wisc.edu" className="contact-link">
          Email
        </a>
        <a
          href="https://linkedin.com/in/anushkasingh15"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Anushka153"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          GitHub
        </a>
        <a href="tel:6082390509" className="contact-link">
          Phone
        </a>
        {/* <a href="" className="contact-link">
              Resume
            </a> */}
      </div>
    </div>
  );
}

export default ContactSection;
