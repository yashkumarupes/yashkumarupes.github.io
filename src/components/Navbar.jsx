import React, { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons';

export default function Navbar({ data, active, theme, toggleTheme, resumeAvailable, onOpenRecruiter }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => { const onScroll=()=>setScrolled(scrollY>20); addEventListener('scroll',onScroll,{passive:true}); return()=>removeEventListener('scroll',onScroll); }, []);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const escape = e => { if (e.key === 'Escape') setOpen(false); };
    addEventListener('keydown', escape);
    if (open) document.querySelector('.drawer-close')?.focus();
    return () => { removeEventListener('keydown', escape); document.body.classList.remove('menu-open'); };
  }, [open]);
  const close = (restore=false) => { setOpen(false); if (restore) setTimeout(()=>menuButton.current?.focus(),0); };
  const Socials = () => <div className="socials"><a href={data.personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a><a href={data.personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a></div>;
  return <header className={`navbar ${scrolled?'scrolled':''}`}>
    <a className="monogram" href="#home" aria-label="Yash Kumar home">YK</a>
    <nav className="desktop-nav" aria-label="Primary">{data.nav.map(([id,label])=><a className={active===id?'active':''} href={`#${id}`} key={id}>{label}</a>)}</nav>
    <div className="nav-actions"><Socials/><button className="recruiter-trigger" type="button" onClick={onOpenRecruiter}>Recruiter View</button>{resumeAvailable?<a className="resume-small" href={data.personal.resume} download="Yash-Kumar-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>:<span className="resume-small disabled" aria-disabled="true">Resume unavailable</span>}<button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`} title={`Switch to ${theme==='dark'?'light':'dark'} mode`}><Icon name={theme==='dark'?'sun':'moon'}/></button><button ref={menuButton} className="icon-button hamburger" onClick={()=>setOpen(true)} aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation"><span/><span/><span/></button></div>
    {open&&<div className="drawer-layer" onMouseDown={e=>{if(e.target===e.currentTarget)close(true)}}><nav id="mobile-navigation" className="drawer" aria-label="Mobile navigation"><button className="drawer-close" onClick={()=>close(true)} aria-label="Close navigation">×</button>{data.nav.map(([id,label])=><a href={`#${id}`} key={id} onClick={()=>close()}>{label}</a>)}<button className="drawer-recruiter" type="button" onClick={()=>{close();onOpenRecruiter()}}>Recruiter View</button>{resumeAvailable?<a href={data.personal.resume} download="Yash-Kumar-Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>:<span className="drawer-disabled" role="status">Resume is currently unavailable</span>}<a href={data.personal.github} target="_blank" rel="noreferrer">GitHub</a><a href={data.personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${data.personal.email}`}>Email</a></nav></div>}
  </header>;
}
