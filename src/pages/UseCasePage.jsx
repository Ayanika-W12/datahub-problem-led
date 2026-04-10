// Use-case detail pages — 340B Compliance & Behavioral Health Integration
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const useCases = {
  '340b': {
    badge: 'Use Case #01',
    headline: 'Smooth Sailing to 340B Compliance Without the Roadblocks',
    sub: 'Automate eligibility checks, prevent duplicate discounts, and stay audit-ready with Vorro\'s intelligent integration platform.',
    whatTitle: 'What is the 340B Drug Pricing Program?',
    whatBody: 'The 340B Drug Pricing Program, created by Congress, requires drug manufacturers to provide outpatient drugs to eligible healthcare organizations at reduced prices. The intent is to stretch limited resources so providers can serve more patients and expand access to care. But success in 340B depends on precision. Organizations must accurately track patient eligibility, prevent duplicate discounts, and maintain audit-ready records — all while data flows across EMRs, pharmacies, and payers that don\'t naturally connect.',
    howVorroHelps: [
      'Integrates data pipelines across pharmacies, EMRs, and payers',
      'Monitors feeds in real time to detect missing or late data',
      'Auto-resolves common errors like failed HL7 or API transactions',
      'Delivers audit-ready logs with complete traceability',
    ],
    connections: [
      'Pharmacy and 340B program integration',
      'Revenue cycle management',
      'EMR and EHR interoperability',
      'Population health dashboards',
      'Payer and claims data exchange',
      'Remote patient monitoring',
      'Labs and imaging centers',
      'Healthcare analytics platforms',
      'Behavioral health systems',
      'Value-based care enablement',
    ],
  },
  'behavioral-health': {
    badge: 'Use Case #02',
    headline: 'Breaking Barriers in Behavioral Health Integration',
    sub: 'Unify patient data, streamline workflows, and improve outcomes with Vorro\'s intelligent integration platform.',
    whatTitle: 'What is Behavioral Health Integration?',
    whatBody: 'Behavioral Health Integration (BHI) is the practice of coordinating mental health, substance use, and primary care services so patients receive whole-person care. Providers must connect EHRs, care management platforms, labs, payers, and community systems — all while maintaining strict data privacy and compliance standards for sensitive health information.',
    challengesTitle: 'The Challenges',
    challenges: [
      'Behavioral health systems often use different, siloed data formats',
      'Patient data is incomplete or delayed across providers',
      'Compliance risks increase when sensitive health information is handled manually',
      'Care teams waste time reconciling records',
    ],
    howVorroHelps: [
      'Integrates data pipelines between behavioral health EHRs, primary care systems, and payers',
      'Monitors feeds in real time to catch missing or delayed data before it affects care',
      'Auto-resolves failed HL7 or API feeds without manual intervention',
      'Normalizes sensitive patient data to create a single, accurate patient record',
    ],
    resultsTitle: 'Real Results',
    results: [
      'Creating unified patient records across behavioral, physical, and community health systems',
      'Reducing manual reconciliation through self-healing data pipelines',
      'Improving compliance with audit-ready logs',
      'Enabling better patient outcomes through timely, complete data',
    ],
    connections: [
      'Behavioral health EHR integration',
      'Healthcare Information Exchanges',
      'Primary care + behavioral health coordination',
      'Remote patient monitoring',
      'Payer and claims data exchange',
      'Telehealth platforms',
      'Labs and imaging centers',
      'Value-based care enablement',
      'Community health programs',
      'Population health dashboards',
    ],
  },
};

export default function UseCasePage({ slug }) {
  const data = useCases[slug];
  if (!data) return null;

  const is340b = slug === '340b';

  return (
    <main>
      {/* ── HERO ── */}
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>{data.badge}</div>
          <h1 className="vertical-hero-headline">{data.headline}</h1>
          <p className="vertical-hero-sub">{data.sub}</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact-us" className="btn btn-cyan btn-lg">
              Talk to an Expert <ArrowRight size={16} />
            </Link>
            <Link to="/solutions" className="btn btn-ghost-white btn-lg">
              All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT IS X? ── */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Background</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '1.25rem', lineHeight: 1.3 }}>
            {data.whatTitle}
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-gray-600)', lineHeight: 1.85 }}>
            {data.whatBody}
          </p>

          {/* Behavioral Health: show challenges block inline */}
          {!is340b && data.challenges && (
            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                {data.challengesTitle}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {data.challenges.map((c) => (
                  <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: 'var(--text-base)', color: 'var(--color-gray-700)' }}>
                    <span style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: 'var(--color-primary)', flexShrink: 0, marginTop: '0.45rem',
                    }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ── HOW VORRO HELPS ── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <div className="eyebrow">How Vorro Helps</div>
            <h2>Intelligent Integration, Built for This</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.howVorroHelps.map((item) => (
              <div key={item} className="card" style={{
                padding: '1.25rem 1.75rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                borderLeft: '3px solid var(--color-primary)',
              }}>
                <CheckCircle2 size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '1px' }} />
                <span style={{ fontSize: 'var(--text-base)', color: 'var(--color-gray-700)', lineHeight: 1.65 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Behavioral Health: results section */}
          {!is340b && data.results && (
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
                {data.resultsTitle}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {data.results.map((r) => (
                  <div key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: 'var(--text-base)', color: 'var(--color-gray-700)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-green)', flexShrink: 0, marginTop: '2px' }} />
                    {r}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── REAL-WORLD CONNECTIONS ── */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <div className="eyebrow">Integration Ecosystem</div>
            <h2>Real-World Connections</h2>
            <p>Vorro connects across the full ecosystem of healthcare data — so every relevant system is in the loop.</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '0.75rem',
          }}>
            {data.connections.map((conn) => (
              <div key={conn} style={{
                padding: '0.75rem 1.25rem',
                background: '#fff',
                border: '1px solid var(--color-gray-200)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-medium)',
                color: 'var(--color-navy)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: 'var(--color-primary)', flexShrink: 0,
                }} />
                {conn}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to solve this for your organization?</h2>
              <p>Talk to a Vorro integration expert about your specific environment and requirements.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Talk to an Expert <ArrowRight size={18} />
                </Link>
                <Link to="/solutions" className="btn btn-ghost-white btn-xl">
                  See All Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
