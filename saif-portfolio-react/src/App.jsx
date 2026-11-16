import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Toolkit from './components/Toolkit.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme');
    } catch {
      return null;
    }
  });

  const getPageFromLocation = () => {
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    if (hash === '#projects' || path.endsWith('/projects')) {
      return 'projects';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromLocation);

  const navigate = useCallback((page) => {
    setCurrentPage(page);
    if (page === 'projects') {
      window.location.hash = '#projects';
    } else {
      if (window.location.hash === '#projects') {
        history.replaceState(null, '', window.location.pathname);
      }
    }
  }, []);

  useEffect(() => {
    const handleHash = () => {
      setCurrentPage(getPageFromLocation());
    };
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  // Cursor glow + per-card border glow
  useEffect(() => {
    const onMove = (e) => {
      const spot = document.getElementById('spot');
      if (spot) {
        spot.style.left = e.clientX + 'px';
        spot.style.top = e.clientY + 'px';
      }
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
    const current =
      theme ||
      (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Header
        currentPage={currentPage}
        onNavigate={navigate}
        onToggleTheme={toggleTheme}
      />
      <main id="top">
        {currentPage === 'projects' ? (
          <Projects onNavigate={navigate} />
        ) : (
          <>
            <Hero />
            <Work onNavigate={navigate} />
            <About />
            <Toolkit />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
