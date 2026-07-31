import React from 'react';

export function SectionHeader({ number, label, title }) { return <div className="section-head"><p className="eyebrow">{label}</p><h2><span>{number}</span>{title}</h2></div>; }
export function Chips({ items }) { return <div className="chips">{items.map(x=><span key={x}>{x}</span>)}</div>; }
