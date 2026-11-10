import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import About from './components/About.jsx';
import Toolkit from './components/Toolkit.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme'); } catch { return null; }
  });

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch { /* ignore */ }
  }, [theme]);

  // Cursor glow + per-card border glow
  useEffect(() => {
    const onMove = (e) => {
      const spot = document.getElementById('spot');
      if (spot) { spot.style.left = e.clientX + 'px'; spot.style.top = e.clientY + 'px'; }
      const card = e.target.closest && e.target.closest('.card');
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', e.clientX - r.left + 'px');
        card.style.setProperty('--my', e.clientY - r.top + 'px');
      }
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  const toggleTheme = () => {
    const current = theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Header onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero />
        <Work />
        <About />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
