import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const coordinatesRef = useRef(null);
  const stampLayerRef = useRef(null);
  const stampIndexRef = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const coordinates = coordinatesRef.current;
    const stampLayer = stampLayerRef.current;
    const precisePointer = matchMedia('(pointer: fine)').matches;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!cursor || !coordinates || !stampLayer) return undefined;

    const removalTimers = new Set();

    const stampAtPointer = event => {
      const blockedSelector = [
        'a', 'button', 'input', 'textarea', 'label', 'form', 'img',
        'h1', 'h2', 'h3', 'p', 'li', 'span', 'strong', 'dt', 'dd',
        '.navbar', '.drawer', '.card', '.metadata', '.highlights',
        '.opportunity', '.portrait-wrap', '.section-head', '.hero-copy',
        '.contact-links', '.timeline', '.skills-ticker', '.recruiter-layer', 'footer'
      ].join(',');

      if (event.target instanceof Element && event.target.closest(blockedSelector)) return;

      const stampLabels = ['YK_2026', 'SECURE', 'APPROVED'];
      const compact = matchMedia('(max-width: 560px)').matches;
      const stampWidth = compact ? 112 : 132;
      const stampHeight = compact ? 44 : 50;
      const left = Math.min(Math.max(event.clientX - stampWidth / 2, 10), innerWidth - stampWidth - 10);
      const top = Math.min(Math.max(event.clientY - stampHeight / 2, 10), innerHeight - stampHeight - 10);

      const stamp = document.createElement('div');
      const stampText = document.createElement('span');
      stamp.className = 'interface-stamp stamp-active';
      stamp.setAttribute('aria-hidden', 'true');
      stamp.style.left = `${left}px`;
      stamp.style.top = `${top}px`;
      stampText.textContent = stampLabels[stampIndexRef.current];
      stampIndexRef.current = (stampIndexRef.current + 1) % stampLabels.length;
      stamp.append(stampText);
      stampLayer.append(stamp);

      const timer = setTimeout(() => {
        stamp.remove();
        removalTimers.delete(timer);
      }, 2600);
      removalTimers.add(timer);
    };

    addEventListener('pointerdown', stampAtPointer, { passive: true });

    if (!precisePointer || reducedMotion) {
      return () => {
        removeEventListener('pointerdown', stampAtPointer);
        removalTimers.forEach(clearTimeout);
        stampLayer.replaceChildren();
      };
    }

    document.documentElement.classList.add('custom-cursor-active');
    let frame;

    const move = event => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        coordinates.textContent = `[X: ${String(event.clientX).padStart(4, '0')} // Y: ${String(event.clientY).padStart(4, '0')}]`;
        cursor.classList.add('cursor-visible');
      });
    };
    const leave = () => cursor.classList.remove('cursor-visible');
    const enter = () => cursor.classList.add('cursor-visible');
    const press = () => cursor.classList.add('cursor-pressed');
    const release = () => cursor.classList.remove('cursor-pressed');

    addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    addEventListener('mousedown', press);
    addEventListener('mouseup', release);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove('custom-cursor-active');
      removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      removeEventListener('mousedown', press);
      removeEventListener('mouseup', release);
      removeEventListener('pointerdown', stampAtPointer);
      removalTimers.forEach(clearTimeout);
      stampLayer.replaceChildren();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="technical-cursor" aria-hidden="true">
        <span className="cursor-ring"><span className="cursor-dot" /></span>
        <span ref={coordinatesRef} className="cursor-coordinates">[X: 0000 // Y: 0000]</span>
      </div>
      <div ref={stampLayerRef} className="stamp-layer" aria-hidden="true" />
    </>
  );
}
