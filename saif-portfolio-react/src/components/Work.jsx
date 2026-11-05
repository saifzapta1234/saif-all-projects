import { Arrow, Label, Reveal } from './ui.jsx';
import { PROJECTS } from '../data.js';

// Temporarily hidden from the website while this section is being worked on.
// The full component is preserved here and can be re-enabled later.
/*
function ProjectCard({ p }) {
  return (
    <Reveal as="article" className={'card' + (p.big ? ' big' : '')}>
      <div className="in">
        <div className="scr" style={{ background: p.g }}>
          {p.f && <img className="fi" src={p.f} alt="" />}
          <span className="mono">{p.k}</span>
          <strong>{p.h}</strong>
          <i /><i />
        </div>
        <div className="pi">
          <span className="mono">{p.t}</span>
          <h3>{p.n}</h3>
          <p>{p.d}</p>
          <div className="chips">{p.c.map((x) => <span key={x}>{x}</span>)}</div>
          {p.u
            ? <a className="lnk" href={p.u} target="_blank" rel="noopener noreferrer">Visit site <Arrow /></a>
            : <span className="na">LINK AVAILABLE ON REQUEST</span>}
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="sh">
          <div>
            <Label>Selected work</Label>
            <h2>Projects that are <span className="gt">live.</span></h2>
          </div>
          <p>Websites and digital experiences I’ve contributed to, starting with ZAPTA.</p>
        </Reveal>
        <div className="grid">{PROJECTS.map((p) => <ProjectCard key={p.n} p={p} />)}</div>
      </div>
    </section>
  );
}
*/

export default function Work() {
  return null;
}
