import { Arrow } from './ui.jsx';

export default function Header({ onToggleTheme }) {
  return (
    <header>
      <div className="wrap">
        <a className="brand" href="#top"><b>SU</b>Saif Ullah</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#toolkit">Toolkit</a>
          <button id="theme" aria-label="Toggle light and dark theme" onClick={onToggleTheme}>◐</button>
          <a className="btn p" href="#contact">Let’s talk <Arrow /></a>
        </nav>
      </div>
    </header>
  );
}
