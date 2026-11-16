import { useState, useMemo } from 'react';
import { Arrow, Label, Reveal } from './ui.jsx';
import { ALL_PROJECTS, CATEGORIES } from '../data.js';

export default function Projects({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate project count per category
  const categoryCounts = useMemo(() => {
    const counts = { All: ALL_PROJECTS.length };
    CATEGORIES.slice(1).forEach((cat) => {
      counts[cat] = ALL_PROJECTS.filter((p) => p.cat === cat).length;
    });
    return counts;
  }, []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.cat === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.n.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.d.toLowerCase().includes(q) ||
        p.c.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="projects-page">
      <div className="wrap">
        {/* Navigation Breadcrumb / Back */}
        <div className="page-nav-top">
          <button
            type="button"
            className="back-btn"
            onClick={() => onNavigate('home')}
          >
            ← Back to Home
          </button>
        </div>

        {/* Page Hero */}
        <Reveal className="projects-hero">
          <Label>// PORTFOLIO DIRECTORY</Label>
          <h1>
            All <span className="gt">Projects.</span>
          </h1>
          <p className="projects-intro">
            A comprehensive showcase of 15+ live client websites, web platforms,
            and digital experiences I’ve built, deployed, and contributed to.
          </p>

          <div className="directory-stats">
            <span className="stat-pill">
              <b>{ALL_PROJECTS.length}</b> Live Websites
            </span>
            <span className="stat-pill">
              <b>{CATEGORIES.length - 1}</b> Industry Sectors
            </span>
            <span className="stat-pill">
              <b>100%</b> Production Deployed
            </span>
          </div>
        </Reveal>

        {/* Filters and Search Bar */}
        <div className="filter-controls">
          <div className="category-tabs">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={'cat-tab' + (isActive ? ' active' : '')}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className="cat-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="search-wrap">
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, industry, or tech (e.g. AI, WordPress, E-commerce)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Summary */}
        <div className="filter-summary">
          <span>
            Showing <b>{filteredProjects.length}</b> of {ALL_PROJECTS.length} projects
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
            {searchQuery ? ` matching "${searchQuery}"` : ''}
          </span>
          {(activeCategory !== 'All' || searchQuery) && (
            <button
              type="button"
              className="reset-btn"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="empty-state glass">
            <h3>No projects found</h3>
            <p>Try selecting a different category or clearing your search keywords.</p>
            <button
              type="button"
              className="btn p"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
            >
              Show all projects
            </button>
          </div>
        ) : (
          <div className="grid">
            {filteredProjects.map((p) => (
              <Reveal as="article" key={p.id} className="card">
                <div className="in">
                  <div className="scr" style={{ background: p.g }}>
                    <span className="mono">{p.k}</span>
                    <strong>{p.h}</strong>
                    <i />
                    <i />
                  </div>
                  <div className="pi">
                    <div className="card-top-row">
                      <span className="mono">{p.t}</span>
                      <span className="cat-badge">{p.cat}</span>
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

                    <div className="card-actions">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-link primary"
                        >
                          Visit Live Site <Arrow />
                        </a>
                      )}
                      {p.figma && (
                        <a
                          href={p.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-link secondary"
                        >
                          Figma Design <Arrow />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <Reveal className="projects-bottom-cta glass">
          <div>
            <h3>Need a custom website or digital product?</h3>
            <p>
              I turn complex business requirements and modern designs into fast,
              clean, and responsive web experiences.
            </p>
          </div>
          <div className="cta-buttons">
            <button
              type="button"
              className="btn p"
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Let’s talk <Arrow />
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Back to Home
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
