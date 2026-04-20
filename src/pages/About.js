import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import ContactSection from '../components/ContactSection';

const skills = [
  'Product Strategy', 'Roadmapping', 'User Research', 'Data Analytics',
  'SQL', 'A/B Testing', 'Figma', 'Agile / Scrum', 'Python',
  'AI / LLMs', 'GTM Strategy', 'Stakeholder Management',
];

const stats = [
  { value: '5+', label: 'Years in Tech' },
  { value: '4', label: 'Industries' },
  { value: '10+', label: 'Products Shipped' },
];

function About() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    fadeRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <div className="page">
      <div className="container">

        {/* ── Hero ── */}
        <div className="about-hero fade-in" ref={addRef}>
          <div className="about-hero-label">About</div>
          <h1 className="about-hero-title">
            I turn messy problems<br />
            into <span className="about-hero-accent">products people love</span>.
          </h1>
          <p className="about-hero-sub">
            PM with an MBA and SDE background — I live in the space between
            technical feasibility, user empathy, and business reality.
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="about-stats fade-in" ref={addRef}>
          {stats.map((s) => (
            <div className="about-stat" key={s.label}>
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Bio + Side Cards ── */}
        <div className="about-grid">
          <div className="about-content fade-in" ref={addRef}>
            <p>
              I started out as a software engineer — writing code, debugging at
              2 AM, shipping features. That foundation gives me something most
              PMs don't have: I can sit in an architecture review and actually
              follow along.
            </p>
            <p>
              Over 5 years I've worked across{' '}
              <strong>healthcare, fintech, B2B SaaS, and mobility</strong>,
              often as the only person in the room who could translate between
              what engineers were building and what users actually needed. I
              love that role.
            </p>
            <p>
              Now I'm finishing my MBA at Wisconsin and leaning hard into AI —
              not as a buzzword, but as a genuine shift in how products get
              built and how users interact with software. I want to be on the
              teams building that future.
            </p>
            <p>
              I thrive in{' '}
              <strong>early-stage chaos</strong> — before the processes
              calcify, when a good question beats a good answer, and when the
              roadmap is a whiteboard smear.
            </p>
          </div>

          <div className="about-side">
            <div className="education-card fade-in" ref={addRef}>
              <h3>Education</h3>
              <div className="education-item">
                <h4>University of Wisconsin–Madison</h4>
                <div className="degree">MBA · Technology Strategy & Product Management (STEM)</div>
                <div className="year">2024 – 2026</div>
              </div>
              <div className="education-item">
                <h4>Dr. A.P.J. Abdul Kalam Technical University</h4>
                <div className="degree">B.Tech · Computer Science Engineering</div>
                <div className="year">2015 – 2019</div>
              </div>
            </div>

            <div className="interests-card fade-in" ref={addRef}>
              <h3>Outside Work</h3>
              <ul className="interests-list">
                <li>Exploring how AI reshapes learning & work</li>
                <li>Breaking complex systems into simple models</li>
                <li>Teaching, mentoring, structured feedback</li>
                <li>Photography</li>
                <li>Badminton and mountain trekking</li>
                <li>Hunting the best street food in every city</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Skills ── */}
        <div className="about-skills-section fade-in" ref={addRef}>
          <h3 className="about-skills-heading">Skills & Tools</h3>
          <div className="about-skills-chips">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <ContactSection />
      </div>
    </div>
  );
}

export default About;
