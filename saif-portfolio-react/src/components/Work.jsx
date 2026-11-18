import { Arrow, Label, Reveal } from './ui.jsx';
import { FEATURED_PROJECTS, ALL_PROJECTS } from '../data.js';

function ProjectCard({ p }) {
  return (
    <Reveal as="article" className={'card' + (p.big ? ' big' : '')}>
      <div className="in">
        <div className="scr" style={{ background: p.g }}>
          {p.f && <img className="fi" src={p.f} alt="" />}
          <span className="mono">{p.k}</span>
          <strong>{p.h}</strong>
          <i />
          <i />
        </div>
        <div className="pi">
          <div className="card-top-row">
            <span className="mono">{p.t}</span>
            <span className="cat-badge">{p.cat || p.category}</span>
          </div>

          <h3>{p.n}</h3>
          <p className="full-category-tag">
            <small>Category: </small>
            {p.category}
          </p>
          <p>{p.d}</p>
          <div className="chips">
            {p.c.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Work({ onNavigate }) {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="sh">
          <div>
            <Label>Selected work</Label>
            <h2>
              Projects that are <span className="gt">live.</span>
            </h2>
          </div>
          <p>
            Featured websites and digital solutions I’ve contributed to, starting with ZAPTA.
          </p>
        </Reveal>

        <div className="grid">
          {FEATURED_PROJECTS.map((p) => (
            <ProjectCard key={p.id || p.n} p={p} />
          ))}
        </div>

        {/* View All Projects Banner */}
        <Reveal className="work-more glass">
          <div className="work-more-info">
            <span className="mono" style={{ color: 'var(--c1)' }}>
              // EXPANDED PORTFOLIO DIRECTORY
            </span>
            <h3>Explore All 15+ Client Projects</h3>
            <p>
              Browse our complete catalog of {ALL_PROJECTS.length} deployed websites across
              AI &amp; SaaS, E-commerce, Healthcare, Real Estate, Finance, and Architecture with
              category filters.
            </p>
          </div>
          <button
            type="button"
            className="btn p work-more-btn"
            onClick={() => onNavigate('projects')}
          >
            View All Projects ({ALL_PROJECTS.length}) <Arrow />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
