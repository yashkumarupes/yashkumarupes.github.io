import { useEffect, useState } from 'react';

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.filter(e => e.isIntersecting).forEach(e => setActive(e.target.id));
    }, { rootMargin: '-20% 0px -65%', threshold: 0 });
    ids.forEach(id => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}
