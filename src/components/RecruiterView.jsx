import React, { useEffect, useRef } from 'react';

export default function RecruiterView({ data, open, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousFocus = document.activeElement;
    document.body.classList.add('recruiter-view-open');
    closeRef.current?.focus();

    const handleKeyDown = event => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = [...dialogRef.current.querySelectorAll('a[href],button:not([disabled])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('recruiter-view-open');
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const coreSkills = [
    ...data.skills['Programming Languages'],
    ...data.skills['Backend & Frameworks'],
    'Generative AI', 'RAG Pipelines', 'Snowflake', 'Docker', 'Power BI'
  ];

  return (
    <div className="recruiter-layer" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
      <article ref={dialogRef} className="recruiter-view" role="dialog" aria-modal="true" aria-labelledby="recruiter-title">
        <header className="recruiter-header">
          <div><span className="record">RECRUITER BRIEF / 60-SECOND VIEW</span><h2 id="recruiter-title">{data.personal.name}</h2><p>{data.personal.title} · B.Tech (Hons.) CSE, Data Science · UPES · 2027</p></div>
          <button ref={closeRef} className="recruiter-close" onClick={onClose} aria-label="Close recruiter view">×</button>
        </header>

        <div className="recruiter-actions">
          <a className="button primary" href={data.personal.resume} download="Yash-Kumar-Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
          <a className="button secondary" href={`mailto:${data.personal.email}`}>{data.personal.email}</a>
        </div>

        <section className="recruiter-summary">
          <span className="record">PROFILE SUMMARY</span>
          <p>{data.personal.summary}</p>
          <div className="recruiter-facts"><span>2 Software Internships</span><span>3 Featured Projects</span><span>Open to Opportunities</span></div>
        </section>

        <section>
          <span className="record">CORE CAPABILITIES</span>
          <div className="chips">{coreSkills.map(skill => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section>
          <span className="record">EXPERIENCE SNAPSHOT</span>
          <div className="recruiter-list">{data.experience.map(item => <div key={item.role}><h3>{item.role}</h3><p>{item.company} · {item.duration}</p><p>{item.bullets[0]}</p></div>)}</div>
        </section>

        <section>
          <span className="record">SELECTED PROJECTS</span>
          <div className="recruiter-list recruiter-projects">{data.projects.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.category}</p><p>{item.description}</p></div>)}</div>
        </section>

        <section className="recruiter-two-column">
          <div><span className="record">EDUCATION</span><h3>{data.education[0].degree}</h3><p>{data.education[0].institution}</p><p>{data.education[0].meta} · {data.education[0].score}</p></div>
          <div><span className="record">CERTIFICATIONS</span>{data.certifications.map(item => <p key={item.title}><strong>{item.title}</strong><br />{item.issuer}</p>)}</div>
        </section>

        <footer className="recruiter-contact">
          <span>{data.personal.email}</span><span>{data.personal.phone}</span>
          <a href={data.personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={data.personal.github} target="_blank" rel="noreferrer">GitHub</a>
        </footer>
      </article>
    </div>
  );
}
