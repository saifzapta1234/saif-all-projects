import { Arrow } from './ui.jsx';

export default function Footer() {
  return (
    <footer>
      <div className="wrap mono">
        <span>© {new Date().getFullYear()} Saif Ullah</span>
        <a href="#top">Back to top <Arrow dir="up" /></a>
      </div>
    </footer>
  );
}
