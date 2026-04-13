import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

function ExperienceItem({ role, company, period, description, highlights }) {
  const ref = useScrollFade();

  return (
    <div ref={ref} className="experience-item fade-in">
      <div className="experience-header">
        <h3 className="experience-role">{role}</h3>
        <div className="experience-company">{company}</div>
        <div className="experience-period">{period}</div>
      </div>
      <p className="experience-description">{description}</p>
      <ul className="experience-highlights">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceItem;
