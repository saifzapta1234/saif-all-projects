import { useState } from 'react';
import { Arrow, Label, Reveal } from './ui.jsx';
import ContactForm from './ContactForm.jsx';

export default function ContactPage({ onNavigate }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('su853844@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="contact-page">
      <div className="wrap">
        {/* Navigation Breadcrumb */}
        <div className="page-nav-top">
          <button
            type="button"
            className="back-btn"
            onClick={() => onNavigate('home')}
          >
            ← Back to Home
          </button>
        </div>

        {/* Hero Section */}
        <Reveal className="contact-page-hero">
          <Label>// GET IN TOUCH</Label>
          <h1>
            Contact <span className="gt">Us.</span>
          </h1>
          <p className="contact-page-intro">
            Have a project in mind, need WordPress or React development expertise,
            or looking for a dedicated technical partner? Let’s connect and make it happen.
          </p>
        </Reveal>

        {/* Two-Column Grid: Details on Left, Form on Right */}
        <div className="contact-grid">
          {/* Left: Contact Info & Value Props */}
          <Reveal className="contact-info-col">
            <div className="glass contact-card">
              <span className="mono" style={{ color: 'var(--c1)' }}>
                Direct Channels
              </span>
              <h3>Let’s talk directly</h3>
              <p>
                Whether you have a question, an RFP, or a ready Figma design to turn into
                code, feel free to reach out.
              </p>

              <div className="contact-items">
                {/* Email Item */}
                <div className="contact-item">
                  <div className="ci-icon">✉</div>
                  <div className="ci-content">
                    <small>Official Email</small>
                    <a href="mailto:su853844@gmail.com" className="ci-link">
                      su853844@gmail.com
                    </a>
                  </div>
                  <button
                    type="button"
                    className="copy-pill"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                  >
                    {copied ? 'Copied! ✓' : 'Copy'}
                  </button>
                </div>

                {/* Location */}
                <div className="contact-item">
                  <div className="ci-icon">📍</div>
                  <div className="ci-content">
                    <small>Location &amp; Work Hours</small>
                    <span>Lahore, Pakistan · Remote Worldwide (EST / GMT friendly)</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="contact-item">
                  <div className="ci-icon">⚡</div>
                  <div className="ci-content">
                    <small>Current Availability</small>
                    <span className="status-live">
                      <i /> Open for new projects &amp; collaborations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Work With Me */}
            <div className="glass perks-card">
              <h4>What you can expect:</h4>
              <ul className="perks-list">
                <li>
                  <b>Fast Turnaround:</b> Clear project milestones and on-time delivery.
                </li>
                <li>
                  <b>Modern &amp; Responsive:</b> Handcrafted code optimized for mobile, tablet, and desktop.
                </li>
                <li>
                  <b>Clean Architecture:</b> Elementor, WordPress hooks, React best practices, and clean CSS.
                </li>
                <li>
                  <b>Post-Launch Support:</b> Bug fixes, maintenance, and training handoff.
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Right: The Functional Validated Form */}
          <Reveal className="contact-form-col">
            <ContactForm
              title="Project Inquiry Form"
              subtitle="Please provide some details about your requirements to get an accurate quote and timeline."
            />
          </Reveal>
        </div>

        {/* Quick FAQ Strip */}
        <Reveal className="contact-faq glass">
          <div className="faq-head">
            <span className="mono" style={{ color: 'var(--c1)' }}>
              // FREQUENTLY ASKED
            </span>
            <h3>Common Questions</h3>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <strong>How soon can you start?</strong>
              <p>
                Usually within 24 to 48 hours of project alignment, scope approval,
                and asset handoff.
              </p>
            </div>
            <div className="faq-item">
              <strong>Can you turn Figma designs into WordPress or React?</strong>
              <p>
                Yes, pixel-perfect conversion from Figma, Adobe XD, or PSD into responsive
                WordPress themes or React code is my core specialty.
              </p>
            </div>
            <div className="faq-item">
              <strong>Do you support ongoing maintenance?</strong>
              <p>
                Yes, I provide ongoing maintenance, plugin updates, security audits, and
                content management.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
