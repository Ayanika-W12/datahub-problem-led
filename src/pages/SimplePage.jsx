// Generic stub page for pages under construction
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const pageData = {
  careers: {
    badge: 'Careers',
    headline: 'Join the Team Building the Future of Healthcare Data',
    sub: "We're a small team solving one of healthcare's biggest problems. If you're passionate about data, interoperability, and real-world clinical impact — we'd love to talk.",
    body: "Vorro is growing. We're looking for engineers, data architects, implementation specialists, and go-to-market professionals who want to work at the intersection of healthcare and technology.",
    email: 'sales@vorro.net',
    emailLabel: 'Send your resume to sales@vorro.net',
  },
  partners: {
    badge: 'Partners',
    headline: 'Technology & Channel Partners',
    sub: 'Vorro partners with EHR vendors, system integrators, health IT consultancies, and technology platforms to deliver complete interoperability solutions for their clients.',
    body: "Partner with Vorro to expand your healthcare data integration capabilities. We offer reseller, referral, and technology integration partnerships with co-selling support, technical enablement, and joint marketing.",
    email: 'sales@vorro.net',
    emailLabel: 'Partner inquiries: sales@vorro.net',
  },
  press: {
    badge: 'Press',
    headline: 'Vorro in the News',
    sub: 'Press releases, media coverage, and announcements from Vorro.',
    body: "For press inquiries, interview requests, or media resources, please contact our communications team. We're happy to provide background on healthcare interoperability, FHIR compliance, and the data integration landscape.",
    email: 'sales@vorro.net',
    emailLabel: 'Press inquiries: sales@vorro.net',
  },
  privacy: {
    badge: 'Legal',
    headline: 'Privacy Policy',
    sub: 'How Vorro collects, uses, and protects your information.',
    body: "Vorro, Inc. is committed to protecting the privacy of our clients, users, and website visitors. This policy describes our data practices in accordance with HIPAA, GDPR, and applicable US privacy law. For questions about your data or to exercise your privacy rights, contact us directly.",
    email: 'sales@vorro.net',
    emailLabel: 'Privacy questions: sales@vorro.net',
  },
  'ai-platform': {
    badge: 'Platform',
    headline: 'AI Health Data Hub',
    sub: 'The most complete healthcare data platform ever built — combining integration, governance, AI readiness, and workflow automation in a single, enterprise-grade solution.',
    body: "Vorro's AI Health Data Hub brings together seven platform capabilities — from HL7/FHIR interfacing to Conversational AI analytics to n8n workflow orchestration — into a unified, governed data infrastructure purpose-built for healthcare organizations.",
    email: null,
    emailLabel: null,
  },
};

export default function SimplePage({ page }) {
  const data = pageData[page] || pageData.careers;

  return (
    <main>
      <section className="vertical-hero" style={{ minHeight: '400px' }}>
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>{data.badge}</div>
          <h1 className="vertical-hero-headline">{data.headline}</h1>
          <p className="vertical-hero-sub">{data.sub}</p>
          {page === 'ai-platform' && (
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link to="/contact-us" className="btn btn-cyan btn-lg">Get a Demo <ArrowRight size={16} /></Link>
              <Link to="/platform/analytics-nlp" className="btn btn-ghost-white btn-lg">Explore Capabilities</Link>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="card" style={{ padding: '2.5rem' }}>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: data.email ? '2rem' : 0 }}>
              {data.body}
            </p>
            {data.email && (
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href={`mailto:${data.email}`} className="btn btn-primary btn-md">
                  <Mail size={16} /> {data.emailLabel}
                </a>
                <Link to="/contact-us" className="btn btn-secondary btn-md">
                  Contact Form <ArrowRight size={16} />
                </Link>
              </div>
            )}
            {page === 'ai-platform' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                {[
                  { label: 'Analytics & Conversational AI', to: '/platform/analytics-nlp' },
                  { label: 'Reporting & Conversational AI', to: '/platform/reporting-nlp' },
                  { label: 'Governance & Compliance', to: '/platform/governance-compliance' },
                  { label: 'Governance & Versioning', to: '/platform/governance-versioning' },
                  { label: 'Interfacing', to: '/platform/interfacing' },
                  { label: 'AI Readiness', to: '/platform/ai-readiness' },
                  { label: 'Workflow Orchestration', to: '/platform/workflow-orchestration' },
                ].map(c => (
                  <Link key={c.to} to={c.to} className="card" style={{ padding: '1rem', textDecoration: 'none', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    {c.label} <ArrowRight size={13} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
