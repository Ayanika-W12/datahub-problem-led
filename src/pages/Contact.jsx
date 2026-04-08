import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Phone, MapPin } from 'lucide-react';
import '../styles/contact.css';

const reasons = [
  'Schedule a Platform Demo',
  'Discuss a Specific Integration Challenge',
  'Request Pricing Information',
  'Explore Partnership Opportunities',
  'Technical Pre-Sales Questions',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', org: '', role: '', reason: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission would go to backend/CRM
    setSubmitted(true);
  };

  return (
    <main>
      <section className="vertical-hero contact-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>
            Contact Us
          </div>
          <h1 className="vertical-hero-headline">
            Let's Build the Future of<br />Healthcare Data Together
          </h1>
          <p className="vertical-hero-sub">
            Talk to a healthcare data integration expert. We'll help you understand
            exactly how Vorro fits your environment — no generic demos, no pressure.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2>Thank you — we'll be in touch shortly.</h2>
                  <p>
                    A member of our team will reach out within one business day.
                    For urgent requests, email us directly at{' '}
                    <a href="mailto:stewari@vorro.net">stewari@vorro.net</a>.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-header">
                    <h2>Schedule a Conversation</h2>
                    <p>We respond to all inquiries within one business day.</p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Work Email *</label>
                      <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="jane@healthsystem.org"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Organization *</label>
                      <input
                        className="input"
                        type="text"
                        name="org"
                        placeholder="Regional Medical Center"
                        value={form.org}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Your Role</label>
                      <input
                        className="input"
                        type="text"
                        name="role"
                        placeholder="CTO, VP of Data, Director of IT..."
                        value={form.role}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>How can we help?</label>
                    <select
                      className="input"
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                    >
                      <option value="">Select a reason...</option>
                      {reasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Tell us about your integration challenge</label>
                    <textarea
                      className="input contact-textarea"
                      name="message"
                      placeholder="What systems are you trying to connect? What's your biggest data challenge today?"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message <ArrowRight size={18} />
                  </button>

                  <p className="form-privacy">
                    By submitting this form, you agree to Vorro's privacy policy.
                    We never share your data with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Side Info */}
            <div className="contact-info">
              <div className="contact-info-card">
                <h3>Direct Contact</h3>
                <div className="contact-info-item">
                  <Mail size={18} />
                  <a href="mailto:stewari@vorro.net">stewari@vorro.net</a>
                </div>
                <div className="contact-info-item">
                  <MapPin size={18} />
                  <span>United States</span>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>What to Expect</h3>
                <div className="contact-expect-list">
                  {[
                    'Response within one business day',
                    'A tailored demo based on your specific environment',
                    'No sales pressure — just a conversation',
                    'Technical depth from day one',
                    'Real implementation timelines and pricing transparency',
                  ].map((item) => (
                    <div key={item} className="contact-expect-item">
                      <CheckCircle2 size={14} style={{ color: 'var(--color-green)', flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-info-card contact-info-dark">
                <h3>Already a Customer?</h3>
                <p>
                  Reach out to your dedicated integration engineer or project manager directly,
                  or contact our support team at{' '}
                  <a href="mailto:stewari@vorro.net">stewari@vorro.net</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
