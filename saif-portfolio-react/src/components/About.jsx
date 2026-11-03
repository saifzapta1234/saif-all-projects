import { Count, Label, Reveal } from './ui.jsx';
import { JOBS } from '../data.js';

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <Reveal>
          <Label>About</Label>
          <h2>I build websites that look sharp and <span className="gt">run fast.</span></h2>
          <div className="stats">
            <div className="stat"><Count n={2.5} /><span>Years + experience</span></div>
            <div className="stat"><Count n={50} /><span>Projects delivered</span></div>
            <div className="stat"><b>∞</b><span>Things to learn</span></div>
          </div>
        </Reveal>
        <Reveal className="glass">
          <p className="lead">Clean code, thoughtful design and solid performance, all in one build.</p>
          <p>I’m Saif, a WordPress and front end developer from Lahore with 2.5+ years of hands-on experience. I build and maintain responsive websites with WordPress, Elementor, Divi, WPBakery and modern JavaScript, including React.</p>
          <p>I care about the details people notice and the ones they don’t: fast load times, strong SEO, secure setups and layouts that hold up on every screen. I’m also growing into AI-powered development to build smarter and faster.</p>
          <div className="tl" style={{ marginTop: 28 }}>
            {JOBS.map((j) => (
              <div className="job" key={j.d}>
                <span className="mono">{j.d}</span>
                <h4>{j.r}</h4>
                <small>{j.c}</small>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
