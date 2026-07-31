import React, { useEffect, useState } from 'react';
import { Icon } from './Icons';

const roles = ['Generative AI Developer','Full-Stack Developer','RAG Application Builder','Data Science Undergraduate','AI & Data Analytics Enthusiast'];

export default function Hero({ personal, resumeAvailable }) {
  const [failed,setFailed]=useState(false);
  const [role,setRole]=useState(0);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setInterval(() => setRole(current => (current + 1) % roles.length), 3500);
    return () => clearInterval(timer);
  }, []);
  const popPortrait = event => {
    const portraitButton = event.currentTarget;
    portraitButton.classList.remove('portrait-pop');
    void portraitButton.offsetWidth;
    portraitButton.classList.add('portrait-pop');
    setTimeout(() => portraitButton.classList.remove('portrait-pop'), 620);
  };
  return <section id="home" className="hero">
    <div className="hero-copy"><p className="eyebrow">SYSTEM PROFILE / YK-2026</p><p className="hello">Hello, I’m</p><h1>{personal.name}</h1><h2>{personal.headline}</h2><p>{personal.summary.split('. ')[0]}.</p><p className="role-line" aria-live="polite"><span>Current perspective</span> <b key={roles[role]}>{roles[role]}</b></p>
      <div className="hero-actions"><a className="button primary" href="#projects">Explore Projects</a>{resumeAvailable?<a className="button secondary" href={personal.resume} download="Yash-Kumar-Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>:<span className="button secondary disabled" role="status" aria-disabled="true">Resume unavailable</span>}</div>
      <div className="social-buttons"><a href={personal.github} target="_blank" rel="noreferrer"><Icon name="github"/>GitHub</a><a href={personal.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin"/>LinkedIn</a><a href={`mailto:${personal.email}`}><Icon name="mail"/>Email</a></div>
      <aside className="opportunity"><span className="status-dot"/> <strong>AVAILABLE FOR</strong><p>Software Engineering · Generative AI · Full-Stack Development · Data & Analytics</p></aside>
    </div>
    <div className="portrait-wrap"><button className="portrait-button" type="button" onClick={popPortrait} aria-label="Animate portrait of Yash Kumar" title="Click to animate portrait">{failed?<span className="portrait fallback" role="img" aria-label="Yash Kumar initials fallback">YK</span>:<img className="portrait" src={personal.image} width="1156" height="1369" alt="Professional portrait of Yash Kumar" onError={()=>setFailed(true)}/>}</button><p>B.Tech CSE · Data Science · UPES · 2027</p></div>
  </section>;
}
