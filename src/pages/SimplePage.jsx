// SimplePage — real content for Careers, Partners, Press, Privacy, AI Platform
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, CheckCircle2, ExternalLink } from 'lucide-react';

/* ─── CAREERS ─── */
function CareersPage() {
  const values = [
    'Customer-Driven',
    'Team-Oriented',
    'Innovative by Nature',
    'Accountable at Every Level',
  ];

  return (
    <main>
      <section className="vertical-hero" style={{ minHeight: '420px' }}>
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Careers</div>
          <h1 className="vertical-hero-headline">Let's get to work, together</h1>
          <p className="vertical-hero-sub">
            We do not currently have any open positions, but please check back later or contact us.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a href="mailto:careers@vorrohealth.com" className="btn btn-cyan btn-lg">
              <Mail size={16} /> careers@vorrohealth.com
            </a>
            <Link to="/contact-us" className="btn btn-ghost-white btn-lg">
              Contact Form <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <div className="eyebrow">Our Values</div>
            <h2>What We Stand For</h2>
            <p>At Vorro, we build culture the same way we build integrations — intentionally, with accountability at every step.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {values.map((v) => (
              <div key={v} className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span style={{ fontWeight: 'var(--font-semibold)', color: 'var(--color-navy)', fontSize: 'var(--text-sm)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Don't see a role? Reach out anyway.</h2>
              <p>We're always interested in meeting talented people. Send us a note and we'll keep you in mind.</p>
              <div className="cta-banner-actions">
                <a href="mailto:careers@vorrohealth.com" className="btn btn-cyan btn-xl">
                  <Mail size={18} /> Email Us
                </a>
                <Link to="/contact-us" className="btn btn-ghost-white btn-xl">
                  Contact Form <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── PARTNERS ─── */
function PartnersPage() {
  const partnerTypes = [
    {
      tag: '01',
      title: 'Technology Partners',
      desc: 'Companies who want to embed our AI solutions or bundle them with their platform.',
      icon: '⬡',
    },
    {
      tag: '02',
      title: 'Service Partners',
      desc: "Consulting firms and system integrators who implement Vorro's AI Healthcare Solutions for their clients.",
      icon: '◈',
    },
  ];

  const benefits = [
    'Add AI to Your Portfolio',
    'Deliver Results Faster',
    'Grow Revenue with Confidence',
    'Stand Out in the Market',
  ];

  return (
    <main>
      <section className="vertical-hero" style={{ minHeight: '440px' }}>
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Partners</div>
          <h1 className="vertical-hero-headline">Partner With Purpose. Solve With Intelligence.</h1>
          <p className="vertical-hero-sub">
            Partner with Vorro to deliver proven AI Healthcare Solutions, designed to fit your clients' systems and elevate every part of their data operations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact-us" className="btn btn-cyan btn-lg">
              Become a Partner <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <div className="eyebrow">Partner Programs</div>
            <h2>Two Ways to Partner</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {partnerTypes.map((pt) => (
              <div key={pt.tag} className="card" style={{
                padding: '2rem',
                borderTop: '3px solid var(--color-primary)',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '2.5rem', height: '2.5rem',
                  background: '#f5f3ff', border: '1px solid #ddd6fe',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-sm)', fontWeight: 'var(--font-bold)',
                  color: 'var(--color-primary)', marginBottom: '1.25rem',
                }}>
                  {pt.tag}
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                  {pt.title}
                </h3>
                <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.7, fontSize: 'var(--text-sm)' }}>
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <div className="eyebrow">Why Partner With Vorro</div>
            <h2>Partner Benefits</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {benefits.map((b) => (
              <div key={b} className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span style={{ fontWeight: 'var(--font-semibold)', color: 'var(--color-navy)', fontSize: 'var(--text-sm)' }}>{b}</span>
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
              <h2>Become a Vorro partner today</h2>
              <p>Tell us about your organization and how you'd like to work together.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Get in Touch <ArrowRight size={18} />
                </Link>
                <a href="mailto:sales@vorro.net" className="btn btn-ghost-white btn-xl">
                  <Mail size={18} /> sales@vorro.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── PRESS ─── */
const pressReleases = [
  { date: 'Jan 8, 2025', title: 'The Most Dangerous Data Blind Spots in Healthcare and How to Successfully Fix Them' },
  { date: 'Dec 17, 2024', title: 'Perspectives: Embracing the Power of EiPaaS in 2024 and Beyond' },
  { date: 'Dec 17, 2024', title: 'Vorro and XeneX, Inc. Announce Healthcare Industry Enterprise Integration and CyberSecurity as a Service Partnership' },
  { date: 'Nov 28, 2024', title: 'Demystifying Semantic Interoperability in Healthcare' },
  { date: 'Nov 26, 2024', title: "Vorro's CEO: The Sociable's Top 10 Executives Set to Transform Healthtech in 2025" },
  { date: 'Nov 22, 2024', title: 'Bridging the Interoperability Gap in Healthcare' },
  { date: 'Nov 6, 2024', title: 'Breaking Barriers: Integrating Allscripts Solutions with External Platforms' },
  { date: 'Oct 25, 2024', title: 'Integration Insights: Overcoming Data Silos in MatrixCare Systems' },
  { date: 'Aug 30, 2024', title: 'Leveraging EiPaaS For A Streamlined Digital Future' },
  { date: 'Jul 25, 2024', title: 'How EiPaaS Is Revolutionizing Healthcare Operations with Scalability and Agility' },
  { date: 'May 30, 2024', title: 'BridgeGate takes center stage at ICT & World Health Conference 2024' },
];

function PressPage() {
  return (
    <main>
      <section className="vertical-hero" style={{ minHeight: '380px' }}>
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Press</div>
          <h1 className="vertical-hero-headline">Press Releases</h1>
          <p className="vertical-hero-sub">
            Follow us in the press releases and learn where the market is leaning towards.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {pressReleases.map((pr, i) => (
              <div key={i} className="card" style={{
                padding: '1.5rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flex: 1 }}>
                  <div style={{
                    flexShrink: 0,
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'var(--color-primary)',
                    background: '#f5f3ff',
                    border: '1px solid #ddd6fe',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.35rem 0.75rem',
                    whiteSpace: 'nowrap',
                  }}>
                    {pr.date}
                  </div>
                  <span style={{ fontWeight: 'var(--font-semibold)', color: 'var(--color-navy)', fontSize: 'var(--text-base)', lineHeight: 1.5 }}>
                    {pr.title}
                  </span>
                </div>
                <ExternalLink size={16} style={{ color: 'var(--color-gray-400)', flexShrink: 0 }} />
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-gray-500)', marginBottom: '1rem' }}>For press inquiries or media resources, reach out to our team.</p>
            <a href="mailto:sales@vorro.net" className="btn btn-primary btn-md">
              <Mail size={16} /> Press inquiries: sales@vorro.net
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── PRIVACY ─── */
function PrivacyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      body: 'We collect information you provide directly (such as your name, email address, and company when you fill out a contact form or request a demo), information collected automatically through our website (such as IP address, browser type, and pages visited), and information from third-party services we integrate with in the course of providing our platform.',
    },
    {
      title: '2. How We Use Your Information',
      body: 'We use the information we collect to respond to your inquiries, provide and improve our services, send communications you have requested, comply with legal obligations, and protect the security and integrity of our platform.',
    },
    {
      title: '3. HIPAA Compliance',
      body: 'Vorro, Inc. operates as a Business Associate under HIPAA when processing Protected Health Information (PHI) on behalf of Covered Entities. We maintain a HIPAA-compliant infrastructure, execute Business Associate Agreements (BAAs) with clients, and implement administrative, physical, and technical safeguards as required by the Security Rule.',
    },
    {
      title: '4. Data Sharing',
      body: 'We do not sell your personal information. We may share data with trusted service providers who assist in operating our platform, subject to strict confidentiality agreements. We may also disclose information when required by law or to protect our legal rights.',
    },
    {
      title: '5. Data Retention',
      body: 'We retain personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, and resolve disputes. PHI is handled per contractual and regulatory requirements with each client.',
    },
    {
      title: '6. Your Rights',
      body: 'Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information; withdraw consent; or lodge a complaint with a supervisory authority. To exercise your rights, contact us at the address below.',
    },
    {
      title: '7. Cookies',
      body: 'We use cookies and similar technologies to improve your experience on our website, analyze usage, and support our marketing efforts. You can control cookie preferences through your browser settings.',
    },
    {
      title: '8. Contact Us',
      body: 'If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at sales@vorro.net or by mail at Vorro, Inc., United States.',
    },
  ];

  return (
    <main>
      <section className="vertical-hero" style={{ minHeight: '340px' }}>
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Legal</div>
          <h1 className="vertical-hero-headline">Privacy Policy</h1>
          <p className="vertical-hero-sub">
            How Vorro collects, uses, and protects your information — in accordance with HIPAA, GDPR, and applicable US privacy law.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{
            background: '#fff',
            border: '1px solid var(--color-gray-200)',
            borderRadius: 'var(--radius-2xl)',
            padding: '0.5rem',
            overflow: 'hidden',
          }}>
            {sections.map((s, i) => (
              <div key={s.title} style={{
                padding: '2rem 2.5rem',
                borderBottom: i < sections.length - 1 ? '1px solid var(--color-gray-100)' : 'none',
              }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.8, fontSize: 'var(--text-sm)' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '2rem', color: 'var(--color-gray-400)', fontSize: 'var(--text-xs)', textAlign: 'center' }}>
            Last updated: January 2025 &nbsp;·&nbsp; Vorro, Inc.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ─── AI PLATFORM ─── */
function AIPlatformPage() {
  const pillars = [
    {
      tag: '01',
      title: 'VIIA Visualisation',
      desc: 'Role-based dashboards and real-time insights that surface the right data for the right stakeholder — clinical, operational, or executive.',
      bullets: ['Role-based access and views', 'Real-time operational dashboards', 'Executive and clinical KPIs', 'Custom report builder'],
    },
    {
      tag: '02',
      title: 'VIIA Integration — powered by BridgeGate',
      desc: 'Connect to 1,000+ healthcare systems using HL7, FHIR, EDI, and proprietary APIs — all managed from a single integration hub.',
      bullets: ['1,000+ pre-built healthcare connectors', 'HL7 v2, FHIR R4, EDI X12 support', 'Bi-directional data flows', 'Self-healing pipeline management'],
    },
    {
      tag: '03',
      title: 'VIIA Intelligence',
      desc: 'AI-powered anomaly detection and smart data mapping that catches errors before they become problems.',
      bullets: ['Anomaly detection across all feeds', 'Smart field mapping with ML assist', 'Predictive pipeline health alerts', 'Root cause classification engine'],
    },
    {
      tag: '04',
      title: 'VIIA Automation',
      desc: 'No-code workflow automation for high-volume healthcare processes — so your team focuses on decisions, not data entry.',
      bullets: ['Claims automation (837/835)', 'Referral and prior auth workflows', 'No-code automation builder', 'Event-triggered workflow execution'],
    },
  ];

  const capabilities = [
    { label: 'Analytics & Conversational AI', to: '/platform/analytics-nlp' },
    { label: 'Reporting & Conversational AI', to: '/platform/reporting-nlp' },
    { label: 'Governance & Compliance', to: '/platform/governance-compliance' },
    { label: 'Governance & Versioning', to: '/platform/governance-versioning' },
    { label: 'Interfacing', to: '/platform/interfacing' },
    { label: 'AI Readiness', to: '/platform/ai-readiness' },
    { label: 'Workflow Orchestration', to: '/platform/workflow-orchestration' },
  ];

  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Platform</div>
          <h1 className="vertical-hero-headline">Healthcare Doesn't Just Need Integration. It Needs Intelligence.</h1>
          <p className="vertical-hero-sub">
            Vorro's AI-powered platform connects your systems, monitors your data, and automates your workflows — so your teams can focus on what matters, not chasing data.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact-us" className="btn btn-cyan btn-lg">Get a Demo <ArrowRight size={16} /></Link>
            <Link to="/platform/analytics-nlp" className="btn btn-ghost-white btn-lg">Explore Capabilities</Link>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">The Four Pillars</div>
            <h2>Built for the Full Data Lifecycle</h2>
            <p>From ingestion to insight — Vorro covers every stage of your healthcare data operation.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
          }}>
            {pillars.map((p) => (
              <div key={p.tag} className="card" style={{
                padding: '2rem',
                borderTop: '3px solid var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '2.25rem', height: '2.25rem',
                  background: '#f5f3ff', border: '1px solid #ddd6fe',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-xs)', fontWeight: 'var(--font-bold)',
                  color: 'var(--color-primary)', marginBottom: '1.25rem', flexShrink: 0,
                }}>
                  {p.tag}
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.625rem', lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--color-gray-500)', lineHeight: 1.7, fontSize: 'var(--text-sm)', marginBottom: '1.25rem' }}>
                  {p.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <div className="eyebrow">Platform Capabilities</div>
            <h2>Everything Under One Roof</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {capabilities.map((c) => (
              <Link key={c.to} to={c.to} className="card" style={{
                padding: '1rem 1.25rem',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-semibold)',
                color: 'var(--color-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
              }}>
                {c.label}
                <ArrowRight size={13} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>See the Platform in Action</h2>
              <p>Book a personalized demo and see how Vorro connects, monitors, and automates your healthcare data.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Request a Demo <ArrowRight size={18} />
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

/* ─── ROUTER ─── */
export default function SimplePage({ page }) {
  if (page === 'careers') return <CareersPage />;
  if (page === 'partners') return <PartnersPage />;
  if (page === 'press') return <PressPage />;
  if (page === 'privacy') return <PrivacyPage />;
  if (page === 'ai-platform') return <AIPlatformPage />;
  return <CareersPage />;
}
