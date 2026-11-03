import { Arrow, Typed } from './ui.jsx';
import { ROLES } from '../data.js';

export default function Hero() {
  return (
    <div className="hero">
      <div className="floor" />
      <div className="orb o1" /><div className="orb o2" /><div className="orb o3" />
      <div className="wrap">
        <span className="tag mono"><i />Available for new projects</span>
        <h1>Hi, I’m<br /><span className="gt">Saif Ullah.</span></h1>
        <div className="role">I build as a <Typed words={ROLES} /></div>
        <p className="d">WordPress &amp; front end developer turning designs and business goals into fast, responsive websites that feel sharp on every screen.</p>
        <div className="cta">
          <a className="btn p" href="#work">Explore my work <Arrow dir="dr" /></a>
          <a className="btn" href="#contact">Get in touch <Arrow /></a>
        </div>
      </div>
    </div>
  );
}
