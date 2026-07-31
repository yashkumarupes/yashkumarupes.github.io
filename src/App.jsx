import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { portfolio as d } from './data/portfolioData';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import RecruiterView from './components/RecruiterView';
import { Chips, SectionHeader } from './components/Section';
import { Icon } from './components/Icons';

const highlights=['2 Software Internships','3 Featured Projects','AI, Data & Full-Stack Experience','Oracle Generative AI Certified','Microsoft Azure Database Certification','Leadership & Sports Experience'];

function About(){
  const focus=['Generative AI','Agentic AI','Retrieval-Augmented Generation','LLM Applications','Full-Stack Engineering','Data Analytics','Reliable Backend Systems'];
  const meta=[['Degree','B.Tech CSE'],['Specialization','Data Science'],['University','UPES'],['Graduation','2027'],['Primary Interests','AI & Software Engineering'],['Availability','Open to Opportunities']];
  return <section id="about"><SectionHeader number="01" label="SUBJECT DOSSIER" title="About Me"/><div className="about-grid"><div className="prose"><p>I am a Computer Science and Engineering undergraduate at UPES, Dehradun, specializing in Data Science. I enjoy developing reliable AI-powered applications, full-stack platforms and data-driven systems that solve practical problems.</p><p>My experience includes building an industrial IoT analytics chatbot, a full-stack SEO analysis platform, a privacy-focused password assessment suite and a real-time facial emotion detection system.</p><p>I focus on clean architecture, structured responses, privacy, usability and dependable application behaviour.</p><h3>Current Focus</h3><Chips items={focus}/></div><dl className="metadata">{meta.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div></section>;
}
function SkillsTicker(){
  const SkillSequence=()=>d.tickerSkills.map(skill=><span className="ticker-item" key={skill}><b aria-hidden="true">▶</b>{skill}</span>);
  return <div className="skills-ticker" aria-label={`Key skills: ${d.tickerSkills.join(', ')}`} tabIndex="0"><div className="ticker-track"><div className="ticker-group"><SkillSequence/></div><div className="ticker-group" aria-hidden="true"><SkillSequence/></div></div></div>;
}
function Skills(){return <section id="skills"><SectionHeader number="02" label="TECHNICAL CAPABILITIES" title="Technical Skills"/><div className="skills-grid">{Object.entries(d.skills).map(([name,items],i)=><article className="card skill-card" key={name}><span className="record">{String(i+1).padStart(2,'0')}</span><h3>{name}</h3><Chips items={items}/></article>)}</div></section>}
function Experience(){return <section id="experience"><SectionHeader number="03" label="EXPERIENCE LOG" title="Work Experience"/><div className="timeline">{d.experience.map((x,i)=><article className="card timeline-item" key={x.role}><div className="timeline-marker">{i+1}</div><div className="record-row"><span className="record">EXPERIENCE {String(i+1).padStart(2,'0')}</span><span className="status">● COMPLETED</span></div><h3>{x.role}</h3><p className="company">{x.company} <span>{x.duration}</span></p><ul>{x.bullets.map(b=><li key={b}>{b}</li>)}</ul><Chips items={x.tags}/></article>)}</div></section>}
function Projects(){
  const [open,setOpen]=useState(null);
  return <section id="projects"><SectionHeader number="04" label="PROJECT RECORDS" title="Featured Projects"/><div className="project-grid">{d.projects.map((p,i)=>{const expanded=open===i;return <article className={`card project-card ${expanded?'expanded':''}`} key={p.title}><div className="record-row"><span className="record">RECORD {String(i+1).padStart(2,'0')}</span><span className="category">{p.category}</span></div><h3>{p.title}</h3><p>{p.description}</p><Chips items={p.tags}/><button className="details-button" onClick={()=>setOpen(expanded?null:i)} aria-expanded={expanded} aria-controls={`project-${i}`}>{expanded?'Hide Details':'View Details'} <span>{expanded?'−':'+'}</span></button><div id={`project-${i}`} className="accordion" hidden={!expanded}><ul>{p.details.map(x=><li key={x}>{x}</li>)}</ul>{p.github&&<a href={p.github}>GitHub</a>}{p.demo&&<a href={p.demo}>Live Demo</a>}</div></article>})}</div></section>;
}
function Education(){return <section id="education"><SectionHeader number="05" label="ACADEMIC RECORD" title="Education"/><div className="record-grid">{d.education.map((x,i)=><article className="card" key={x.institution}><span className="record">EDUCATION {String(i+1).padStart(2,'0')}</span><h3>{x.institution}</h3><p className="degree">{x.degree}</p><p>{x.meta}</p><strong className="score">{x.score}</strong></article>)}</div></section>}
function Certifications(){return <section id="certifications"><SectionHeader number="06" label="CREDENTIALS" title="Certifications"/><div className="record-grid two">{d.certifications.map((x,i)=><article className="card credential" key={x.title}><span className="credential-icon" aria-hidden="true">◇</span><div><span className="record">CERTIFICATION {String(i+1).padStart(2,'0')}</span><h3>{x.title}</h3><p>{x.issuer}</p></div></article>)}</div></section>}
function Achievements(){return <section id="achievements"><SectionHeader number="07" label="LEADERSHIP RECORD" title="Leadership & Achievements"/><div className="record-grid">{d.achievements.map((x,i)=><article className="card" key={x.title}><span className="record">RECORD {String(i+1).padStart(2,'0')}</span><h3>{x.title}</h3><p>{x.description}</p></article>)}</div></section>}
function Contact(){
  return <section id="contact"><SectionHeader number="08" label="COMMUNICATION CHANNEL" title="Contact"/><div className="contact-grid contact-actions-only"><div><h3 className="contact-title">Let’s Build Something Meaningful</h3><p>I am open to software engineering, AI, Generative AI, data analytics and full-stack development opportunities.</p><div className="contact-links"><a href={`mailto:${d.personal.email}`}>{d.personal.email}</a><a href={d.personal.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a><a href={d.personal.github} target="_blank" rel="noreferrer">View GitHub</a><a href={`tel:${d.personal.phone.replace(/-/g,'')}`}>{d.personal.phone}</a></div></div></div></section>;
}
function App(){
  const {theme,toggle}=useTheme(); const ids=useMemo(()=>d.nav.map(x=>x[0]),[]); const active=useActiveSection(ids); const [top,setTop]=useState(false); const [resumeAvailable,setResumeAvailable]=useState(true); const [recruiterOpen,setRecruiterOpen]=useState(false);
  const openRecruiter=useCallback(()=>setRecruiterOpen(true),[]);
  const closeRecruiter=useCallback(()=>setRecruiterOpen(false),[]);
  useEffect(()=>{const onScroll=()=>setTop(scrollY>600);addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll)},[]);
  useEffect(()=>{const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('revealed')}),{threshold:.08});document.querySelectorAll('main > section').forEach(s=>observer.observe(s));return()=>observer.disconnect()},[]);
  useEffect(()=>{fetch(d.personal.resume,{method:'HEAD'}).then(response=>setResumeAvailable(response.ok)).catch(()=>setResumeAvailable(false))},[]);
  return <><CustomCursor/><a className="skip-link" href="#main">Skip to content</a><Navbar data={d} active={active} theme={theme} toggleTheme={toggle} resumeAvailable={resumeAvailable} onOpenRecruiter={openRecruiter}/><main id="main"><Hero personal={d.personal} resumeAvailable={resumeAvailable}/><div className="highlights" aria-label="Professional highlights">{highlights.map(x=><div key={x}>{x}</div>)}</div><About/><SkillsTicker/><Skills/><Experience/><Projects/><Education/><Certifications/><Achievements/><Contact/></main><footer><div><span className="eyebrow">PORTFOLIO SYSTEM / ONLINE</span><p>Designed and developed by Yash Kumar. © {new Date().getFullYear()}</p></div><div className="footer-links"><a href={d.personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a><a href={d.personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a><a href={`mailto:${d.personal.email}`} aria-label="Email"><Icon name="mail"/></a></div></footer><button className={`back-top ${top?'visible':''}`} onClick={()=>scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button><RecruiterView data={d} open={recruiterOpen} onClose={closeRecruiter}/></>;
}
export default App;
