import { Arrow } from './ui.jsx';

export default function Header({ currentPage = 'home', onNavigate, onToggleTheme }) {
  const handleNavClick = (e, targetPage, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetPage);
    }
    if (targetPage === 'home') {
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="wrap">
        <a
          className="brand"
          href="#top"
          onClick={(e) => handleNavClick(e, 'home', null)}
        >
          <b>SU</b>Saif Ullah
        </a>
        <nav>
          <a
            href="#projects"
            className={currentPage === 'projects' ? 'active-nav' : ''}
            onClick={(e) => handleNavClick(e, 'projects', null)}
          >
            Projects
          </a>
          <a
            href="#work"
            className={currentPage === 'home' ? '' : ''}
            onClick={(e) => handleNavClick(e, 'home', 'work')}
          >
            Work
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'home', 'about')}
          >
            About
          </a>
          <a
            href="#toolkit"
            onClick={(e) => handleNavClick(e, 'home', 'toolkit')}
          >
            Toolkit
          </a>
          <button
            id="theme"
            aria-label="Toggle light and dark theme"
            onClick={onToggleTheme}
          >
            ◐
          </button>
          <a
            className="btn p"
            href="#contact"
            onClick={(e) => handleNavClick(e, 'home', 'contact')}
          >
            Let’s talk <Arrow />
          </a>
        </nav>
      </div>
    </header>
  );
}
