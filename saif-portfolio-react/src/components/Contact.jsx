import { Arrow, Reveal } from './ui.jsx';
import ContactForm from './ContactForm.jsx';

export default function Contact({ onNavigate }) {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal as="div" className="contact-section-header">
          <p className="mono" style={{ color: 'var(--c1)' }}>Your turn</p>
          <h2>
            Have a project <span className="gt">in mind?</span>
          </h2>
          <p className="lead-sub">
            I’m always interested in thoughtful projects, new challenges, and chances to
            build clean, fast digital experiences.
          </p>
        </Reveal>

        <div className="home-contact-wrapper">
          <Reveal className="home-contact-form-container">
            <ContactForm
              title="Let’s Start a Conversation"
              subtitle="Send a quick note with your project ideas or questions."
              compact={false}
            />
          </Reveal>

          <Reveal className="home-direct-channels glass">
            <div>
              <span className="mono" style={{ color: 'var(--c1)' }}>Prefer direct email?</span>
              <h4>Reach out directly</h4>
              <p>You can also email me directly or visit the full Contact page.</p>
              <a
                className="btn p direct-mail-btn"
                href="mailto:su853844@gmail.com"
              >
                su853844@gmail.com <Arrow />
              </a>
            </div>

            {onNavigate && (
              <div className="contact-page-link-box">
                <span>Looking for detailed inquiry options?</span>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Visit Full Contact Us Page <Arrow />
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
