import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from './Projects';
import '../styles/ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="page">
        <div className="container">
          <p>Project not found.</p>
          <Link to="/projects">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pd-hero">
        <div className="pd-hero-inner">
          <nav className="pd-breadcrumb">
            <Link to="/projects">Projects</Link>
            <span>/</span>
            <span>{project.title}</span>
          </nav>

          <div className="pd-hero-tag">{project.tag}</div>
          <h1 className="pd-hero-title">{project.title}</h1>

          <div className="pd-hero-meta">
            <div className="pd-meta-item">
              <span className="pd-meta-label">Company</span>
              <span className="pd-meta-value">{project.company}</span>
            </div>
            <div className="pd-meta-divider" />
            <div className="pd-meta-item">
              <span className="pd-meta-label">Role</span>
              <span className="pd-meta-value">{project.role}</span>
            </div>
            <div className="pd-meta-divider" />
            <div className="pd-meta-item">
              <span className="pd-meta-label">Timeline</span>
              <span className="pd-meta-value">{project.duration}</span>
            </div>
          </div>
        </div>

        <div className="pd-hero-visual">
          <div className="pd-hero-grid">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="pd-grid-cube" />
            ))}
          </div>
          <div className="pd-hero-number">{project.number}</div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="pd-body">

        {/* The Challenge */}
        <section className="pd-section">
          <div className="pd-section-label">The Challenge</div>
          <div className="pd-section-content">
            <p className="pd-body-text">{project.challenge}</p>
          </div>
        </section>

        <div className="pd-divider" />

        {/* The Process */}
        <section className="pd-section">
          <div className="pd-section-label">The Process</div>
          <div className="pd-section-content">
            <ul className="pd-process-list">
              {project.process.map((step, i) => (
                <li key={i} className="pd-process-item">
                  <span className="pd-process-num">0{i + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="pd-divider" />

        {/* The Solution */}
        <section className="pd-section">
          <div className="pd-section-label">The Solution</div>
          <div className="pd-section-content">
            <p className="pd-body-text">{project.solution}</p>
          </div>
        </section>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <>
            <div className="pd-divider" />
            <section className="pd-section pd-screenshots">
              <div className="pd-section-label">What Was Built</div>
              <div className="pd-section-content">
                <div className="pd-screenshots-grid">
                  {project.screenshots.map((shot, i) => (
                    <div
                      key={i}
                      className={`pd-screenshot-item${shot.wide ? ' pd-screenshot-wide' : ''}`}
                    >
                      <img src={shot.src} alt={shot.caption} />
                      {shot.caption && (
                        <div className="pd-screenshot-caption">{shot.caption}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* The Impact */}
        {project.impact && project.impact.length > 0 && (
          <>
            <div className="pd-divider" />
            <section className="pd-impact-section">
              <div className="pd-impact-header">The Impact.</div>
              <div className="pd-impact-grid">
                {project.impact.map((item, i) => (
                  <div key={i} className="pd-impact-stat">
                    <span className="pd-impact-value">{item.value}</span>
                    <span className="pd-impact-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      {/* ── Next Project ─────────────────────────────────────── */}
      <div className="pd-next">
        <div className="pd-next-label">Next Project</div>
        <Link to={`/projects/${nextProject.slug}`} className="pd-next-link">
          <span className="pd-next-title">{nextProject.title}</span>
          <span className="pd-next-arrow">→</span>
        </Link>
      </div>

    </div>
  );
}

export default ProjectDetail;
