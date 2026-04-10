import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3 } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    desc: 'For early-stage healthtech companies with 1–2 integration needs.',
    features: ['Up to 3 active integrations', 'HL7 v2 and FHIR R4 support', 'Shared integration infrastructure', 'Standard SLA', 'Community support'],
    cta: 'Start for Free',
  },
  {
    name: 'Growth',
    desc: 'For Series A/B companies scaling their integration footprint.',
    features: ['Up to 15 active integrations', 'All Vorro protocol standards', 'Dedicated integration environment', 'Analytics & reporting access', '99.9% uptime SLA', 'Slack-based support channel'],
    cta: 'Talk to an Expert',
    featured: true,
  },
  {
    name: 'Scale',
    desc: 'For companies approaching enterprise contracts and audits.',
    features: ['Unlimited integrations', 'Full Vorro platform access', 'White-label option available', 'Governance & compliance suite', 'Dedicated customer success manager', '99.99% uptime SLA'],
    cta: 'Talk to Sales',
  },
];

const benefits = [
  { icon: <Zap size={22} />, title: 'Go Live in Days', desc: "Don't burn 6 months building integration infrastructure from scratch. Vorro gives you production-ready HL7, FHIR, and EDI connections in days." },
  { icon: <Shield size={22} />, title: 'HIPAA-Compliant by Default', desc: "BAA included. PHI handled correctly. Audit logs out of the box. Stop worrying about compliance and start building your product." },
  { icon: <BarChart3 size={22} />, title: 'Grow Without Re-architecting', desc: "The same platform that powers 25M+ managed lives scales with you — from your first pilot to enterprise contracts without re-platforming." },
];

export default function VorroForStartups() {
  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Vorro for Startups</div>
          <h1 className="vertical-hero-headline">Launch Fast.<br />Scale Without Limits.</h1>
          <p className="vertical-hero-sub">
            Healthcare startups don't have 18 months to build integration infrastructure. Vorro gives you
            enterprise-grade HL7, FHIR, and EDI connectivity — in days, not quarters.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact-us" className="btn btn-cyan btn-lg">Apply for Startup Access <ArrowRight size={16} /></Link>
            <Link to="/case-studies" className="btn btn-ghost-white btn-lg">See Startup Stories</Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ gap: '2rem' }}>
            {benefits.map(b => (
              <div key={b.title} className="card-feature" style={{ padding: '2rem', gap: '1rem', display: 'flex', flexDirection: 'column' }}>
                <div className="icon-box icon-box-primary icon-box-lg">{b.icon}</div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)' }}>{b.title}</h3>
                <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="eyebrow">Plans</div>
            <h2>Startup-Friendly Pricing</h2>
            <p>Grow with Vorro from pilot to enterprise — without changing platforms.</p>
          </div>
          <div className="grid-3" style={{ gap: '1.5rem', marginTop: '2.5rem' }}>
            {tiers.map(t => (
              <div key={t.name} className="card" style={{
                padding: '2rem',
                border: t.featured ? '2px solid var(--color-primary)' : '1px solid var(--color-gray-200)',
                position: 'relative',
              }}>
                {t.featured && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#fff', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-bold)', padding: '0.25rem 0.875rem', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>{t.name}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', marginBottom: '1.5rem' }}>{t.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {t.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact-us" className={`btn btn-md ${t.featured ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', justifyContent: 'center' }}>
                  {t.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to Ship Your First Integration?</h2>
              <p>Apply for Vorro's startup program and get your first integration live within a week.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">Apply Now <ArrowRight size={18} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
