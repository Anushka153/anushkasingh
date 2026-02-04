import React from 'react';

function ExperienceItem({ role, company, period, description, highlights }) {
  return (
    <div className="experience-item">
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
