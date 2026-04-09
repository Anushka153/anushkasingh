import React from 'react';
import '../styles/About.css';
import ContactSection from '../components/ContactSection';

function About() {
  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-intro">
            I'm a product manager who believes that the best products are built
            at the intersection of user empathy, business strategy, and
            technical feasibility.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <p>
              Currently pursuing my MBA with a focus on product management and
              technology strategy, I bring a unique blend of{' '}
              <strong>analytical rigor and creative problem-solving</strong>.
            </p>
            <p>
              My approach is rooted in data, but driven by a genuine desire to
              build products that people love. From conducting user research to
              defining product roadmaps, from working with engineering teams to
              presenting to stakeholders, I thrive in the dynamic,
              cross-functional environment that product management demands.
            </p>
            <p>
              I've worked across healthcare, fintech, B2B SaaS, and mobility
              platforms, often as the bridge between technical and non-technical
              teams. I love the early-stage chaos where nothing is figured out
              yet.
            </p>
          </div>

          <div>
            <div className="education-card">
              <h3>Education</h3>
              <div className="education-item">
                <h4>University of Wisconsin–Madison</h4>
                <div className="degree">
                  MBA, Technology Strategy & Product Management (STEM)
                </div>
                <div className="year">2024 - 2026</div>
              </div>
              <div className="education-item">
                <h4>Dr. A.P.J. Abdul Kalam Technical University</h4>
                <div className="degree">
                  B.Tech, Computer Science Engineering
                </div>
                <div className="year">2015 - 2019</div>
              </div>
            </div>

            <div className="interests-card">
              <h3>When I'm Not Building Products</h3>
              <ul className="interests-list">
                <li>Exploring how AI changes work and learning</li>
                <li>Breaking down complex systems into simple models</li>
                <li>Teaching, mentoring, and structured feedback</li>
                <li>Photography (founded undergrad photography club)</li>
                <li>Playing badminton and trekking</li>
                <li>Finding the best street food in every city</li>
              </ul>
            </div>
          </div>
        </div>

        <ContactSection />
      </div>
    </div>
  );
}

export default About;
