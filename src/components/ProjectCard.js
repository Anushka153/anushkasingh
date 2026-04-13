import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

function ProjectCard({ number, tag, problem, meta, insight, keyMoves, impact }) {
  const ref = useScrollFade();

  return (
    <div ref={ref} className="project-card fade-in">
      <div className="project-card-top">
        <span className="project-number">{number}</span>
        <span className="project-tag">{tag}</span>
      </div>

      <h3 className="project-problem">{problem}</h3>
      <p className="project-meta">{meta}</p>

      <div className="project-divider" />

      <blockquote className="project-insight">{insight}</blockquote>

      <div className="project-moves">
        <h4>Key decisions</h4>
        <ul>
          {keyMoves.map((move, i) => (
            <li key={i}>{move}</li>
          ))}
        </ul>
      </div>

      {impact && impact.length > 0 && (
        <div className="project-impact">
          {impact.map((item, i) => (
            <div key={i} className="impact-stat">
              <span className="impact-value">{item.value}</span>
              <span className="impact-label">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
