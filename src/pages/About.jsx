import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, Shield, Award, Zap } from 'lucide-react';
import '../styles/about.css';

const values = [
  { icon: <Globe size={22} />, title: 'Healthcare-Native', desc: 'We built Vorro for healthcare from the ground up — not adapted from a generic iPaaS. HL7, FHIR, and EDI are our native language.' },
  { icon: <Shield size={22} />, title: 'Compliance-First', desc: 'HIPAA compliance isn\'t a checklist for us — it\'s baked into every pipeline, every data element, and every workflow we build.' },
  { icon: <Zap size={22} />, title: 'AI-Forward', desc: 'We believe the future of healthcare runs on governed, AI-ready data. We\'re building the foundation for that future today.' },
  { icon: <Award size={22} />, title: 'Partner, Not Vendor', desc: 'We embed with your team. Our success is measured by your outcomes — not by contract renewal rates.' },
];

const clients = [
  'Geisinger Health', 'Contexture (HIE)', 'WISHIN (HIE)', 'Therap',
  'SunRx / 340B Holdings', 'CareOne', 'MedGenerations', 'Avesis / Guardian Life',
  'DMEScripts', 'Ognomy', 'SendCare', 'Secure Exchange Solutions',
];

const stats = [
  { value: '25M+', label: 'Managed Lives Powered Annually' },
  { value: '22+', label: 'Enterprise Healthcare Clients' },
  { value: '300%', label: 'Average Client ROI' },
  { value: '100%', label: 'HIPAA-Compliant by Design' },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="vertical-hero about-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>
            About Vorro
          </div>
          <h1 className="vertical-hero-headline">
            Healthcare Data Experts.<br />
            Built for the Complexity of Care.
          </h1>
          <p className="vertical-hero-sub">
            Vorro was founded with one mission: make healthcare data work the way care teams,
            compliance officers, and data engineers need it to — reliably, securely, and at scale.
          </p>
          <div className="vertical-hero-actions">
            <Link to="/contact-us" className="btn btn-cyan btn-lg">
              Talk to Our Team <ArrowRight size={16} />
            </Link>
            <Link to="/case-studies" className="btn btn-ghost-white btn-lg">
              Our Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm about-stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-number gradient-text">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-light">
        <div className="container">
          <div className="about-mission-grid">
            <div>
              <div className="section-header">
                <div className="eyebrow">Our Mission</div>
                <h2>We Started with a Simple Belief</h2>
                <p>
                  Healthcare data fragmentation is not an unsolvable problem — it's an
                  engineering and design problem. We built Vorro to solve it, permanently.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Our platform, BridgeGate EiPaaS powered by VIIA Integration™, connects
                  every system in a healthcare organization's data estate — EHRs, payers,
                  labs, pharmacy, HIEs, and more — and governs, enriches, and automates
                  the flow of data across all of them.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  The result: healthcare organizations that run on clean, governed, AI-ready
                  data — and teams that spend their time on care, not on data cleanup.
                </p>
              </div>
            </div>
            <div className="about-mission-bullets">
              {[
                'Healthcare-native from day one — built for HL7, FHIR, and EDI',
                '22+ enterprise deployments across health systems, HIEs, PBMs, and specialty networks',
                'Enabling data transactions for over 25 million managed lives every year',
                'Fully managed, cloud-based, or self-hosted deployment options',
                'Dedicated integration engineers and project managers on every engagement',
                'No rip-and-replace — connects to your existing systems and data flows',
              ].map((item) => (
                <div key={item} className="about-bullet">
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="eyebrow">Our Values</div>
            <h2>What We Believe</h2>
            <p>The principles that guide how we build, how we serve, and how we grow.</p>
          </div>
          <div className="grid-4" style={{ marginTop: '3rem' }}>
            {values.map((v) => (
              <div key={v.title} className="card-feature">
                <div className="icon-box icon-box-primary icon-box-lg" style={{ marginBottom: '1rem' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section bg-navy">
        <div className="container">
          <div className="section-header centered dark" style={{ marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ color: 'var(--color-cyan)' }}>Trusted By</div>
            <h2>Powering Healthcare Leaders Nationwide</h2>
            <p>From regional health systems to national HIEs, PBMs, and specialty networks.</p>
          </div>
          <div className="about-clients-grid">
            {clients.map((c) => (
              <div key={c} className="about-client-card">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to Transform Your Data Infrastructure?</h2>
              <p>
                Schedule a conversation with our team and learn how Vorro can eliminate data
                fragmentation across your entire healthcare organization.
              </p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Contact Our Team <ArrowRight size={18} />
                </Link>
                <Link to="/case-studies" className="btn btn-ghost-white btn-xl">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
