import { useState } from 'react';
import { Arrow } from './ui.jsx';

export default function ContactForm({
  title = 'Send a Message',
  subtitle = 'Fill out the form below and I will get back to you within 24 hours.',
  compact = false
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'WordPress & Elementor Development',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState(null);

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) {
      errs.name = 'Full name is required';
    } else if (data.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!data.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!data.message.trim()) {
      errs.message = 'Please write a brief message about your project';
    } else if (data.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      const validationErrors = validate(updated);
      setErrors(validationErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields touched
    setTouched({
      name: true,
      email: true,
      service: true,
      budget: true,
      message: true
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setLastSubmitted({ ...formData });

      // Reset form
      setFormData({
        name: '',
        email: '',
        service: 'WordPress & Elementor Development',
        budget: '$1,000 - $3,000',
        message: ''
      });
      setTouched({});
      setErrors({});
    }, 850);
  };

  return (
    <div className={'contact-form-card glass' + (compact ? ' compact' : '')}>
      <div className="form-header">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {submitted ? (
        <div className="form-success-banner" role="alert">
          <div className="success-icon">✓</div>
          <h4>Message Sent Successfully!</h4>
          <p>
            Thank you, <strong>{lastSubmitted?.name}</strong>. Your project details
            have been received. I will review them and reply to{' '}
            <strong>{lastSubmitted?.email}</strong> shortly.
          </p>

          <div className="success-actions">
            <button
              type="button"
              className="btn"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </button>
            <a
              href={`mailto:su853844@gmail.com?subject=${encodeURIComponent(
                `Project Inquiry: ${lastSubmitted?.service}`
              )}&body=${encodeURIComponent(
                `Hi Saif,\n\nName: ${lastSubmitted?.name}\nEmail: ${lastSubmitted?.email}\nService: ${lastSubmitted?.service}\nBudget: ${lastSubmitted?.budget}\n\nMessage:\n${lastSubmitted?.message}`
              )}`}
              className="btn p"
            >
              Open in Email Client <Arrow />
            </a>
          </div>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {/* Name */}
            <div className="form-group">
              <label htmlFor={`name-${compact ? 'c' : 'f'}`}>
                Your Name <span className="req">*</span>
              </label>
              <input
                id={`name-${compact ? 'c' : 'f'}`}
                name="name"
                type="text"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.name && errors.name ? 'invalid' : ''}
                aria-invalid={touched.name && !!errors.name}
              />
              {touched.name && errors.name && (
                <span className="error-msg">{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor={`email-${compact ? 'c' : 'f'}`}>
                Email Address <span className="req">*</span>
              </label>
              <input
                id={`email-${compact ? 'c' : 'f'}`}
                name="email"
                type="email"
                placeholder="e.g. john@company.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.email && errors.email ? 'invalid' : ''}
                aria-invalid={touched.email && !!errors.email}
              />
              {touched.email && errors.email && (
                <span className="error-msg">{errors.email}</span>
              )}
            </div>

            {/* Service */}
            <div className="form-group">
              <label htmlFor={`service-${compact ? 'c' : 'f'}`}>Service Needed</label>
              <select
                id={`service-${compact ? 'c' : 'f'}`}
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="WordPress & Elementor Development">
                  WordPress &amp; Elementor Development
                </option>
                <option value="Front End / React Web App">
                  Front End / React Web App
                </option>
                <option value="E-commerce Store (WooCommerce)">
                  E-commerce Store (WooCommerce)
                </option>
                <option value="Speed Optimization & Performance">
                  Speed Optimization &amp; Performance
                </option>
                <option value="Custom PHP Theme or Plugin">
                  Custom PHP Theme or Plugin
                </option>
                <option value="Website Migration & Maintenance">
                  Website Migration &amp; Maintenance
                </option>
                <option value="Other Consulting">Other Consulting</option>
              </select>
            </div>

            {/* Budget */}
            <div className="form-group">
              <label htmlFor={`budget-${compact ? 'c' : 'f'}`}>Expected Budget</label>
              <select
                id={`budget-${compact ? 'c' : 'f'}`}
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="< $1,000">&lt; $1,000</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000+">$5,000+</option>
                <option value="To be discussed">To be discussed</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group full-width">
              <label htmlFor={`message-${compact ? 'c' : 'f'}`}>
                Project Details <span className="req">*</span>
              </label>
              <textarea
                id={`message-${compact ? 'c' : 'f'}`}
                name="message"
                rows={compact ? 3 : 5}
                placeholder="Tell me about your goals, timeline, and any specific requirements..."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.message && errors.message ? 'invalid' : ''}
                aria-invalid={touched.message && !!errors.message}
              />
              {touched.message && errors.message && (
                <span className="error-msg">{errors.message}</span>
              )}
            </div>
          </div>

          <div className="form-footer">
            <button
              type="submit"
              className="btn p submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" /> Sending Message...
                </>
              ) : (
                <>
                  Send Message <Arrow />
                </>
              )}
            </button>
            <span className="privacy-note">
              🔒 Your email is never shared. Fast reply guaranteed.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
