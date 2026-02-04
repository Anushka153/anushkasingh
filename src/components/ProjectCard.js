import React from 'react';

function ProjectCard({ tag, title, meta, image, context, role, whatIDid, impact }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <span className="project-tag">{tag}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-meta">{meta}</p>
      </div>

      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '280px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '1.5rem'
          }}
        />
      )}

      <div className="project-section">
        <h4>Context</h4>
        <p>{context}</p>
      </div>

      <div className="project-section">
        <h4>My Role</h4>
        <p>{role}</p>
      </div>

      <div className="project-section">
        <h4>What I Did</h4>
        <ul>
          {whatIDid.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {impact && impact.length > 0 && (
        <div className="impact-box">
          <h4>Impact</h4>
          <div className="impact-grid">
            {impact.map((item, index) => (
              <div key={index} className="impact-item">
                <span className="impact-value">{item.value}</span>
                <span className="impact-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
