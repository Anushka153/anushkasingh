/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="hero">
          <div className="status-badge">
            <span className="status-dot"></span>
            Open to Product Manager roles • 2026
          </div>
          <h1>
            Building thoughtful products at the intersection of{' '}
            <span className="highlight">AI, data, and human behavior</span>
          </h1>
          <p className="subhead">
            MBA candidate at Wisconsin School of Business with 5+ years in software and product. 
            I turn complex problems into clear, usable solutions.
          </p>
          <p className="personality">
            // I like messy problems, clean systems, and products that actually help people.
          </p>

          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <a href="mailto:anushka.singh@wisc.edu" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>

          <div className="snapshot">
            <div className="snapshot-item">
              MBA, Wisconsin School of Business (Class of 2026)
            </div>
            <div className="snapshot-item">
              Former Software Engineer → Product Manager
            </div>
            <div className="snapshot-item">
              AI, Data Platforms, Consumer & Health Tech
            </div>
            <div className="snapshot-item">
              Teaching Assistant | Startup Builder | Operator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
