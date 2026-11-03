import { useEffect, useRef, useState } from 'react';

export const Arrow = ({ dir = '' }) => (
  <svg className={'ar ' + dir} viewBox="0 0 24 24" aria-hidden="true"><use href="#arr" /></svg>
);

export const Label = ({ children }) => (
  <p className="mono" style={{ color: 'var(--c1)', margin: '0 0 14px' }}>{children}</p>
);

function useSeen() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, seen] = useSeen();
  return (
    <Tag ref={ref} className={'rv' + (seen ? ' on' : '') + (className ? ' ' + className : '')} {...rest}>
      {children}
    </Tag>
  );
}

export function Count({ n }) {
  const [ref, seen] = useSeen();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    let id;
    const tick = (now) => {
      const p = Math.min((now - start) / 1200, 1);
      setV(n * p);
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [seen, n]);
  return <b ref={ref}>{(n % 1 ? v.toFixed(1) : Math.round(v)) + (v >= n ? '+' : '')}</b>;
}

export function Typed({ words }) {
  const [text, setText] = useState('');
  useEffect(() => {
    let wi = 0, ci = 0, del = false, timer;
    const tick = () => {
      const w = words[wi];
      ci += del ? -1 : 1;
      setText(w.slice(0, ci));
      let delay = del ? 35 : 75;
      if (!del && ci === w.length) { del = true; delay = 1400; }
      else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; delay = 350; }
      timer = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);
  return <b>{text}</b>;
}
