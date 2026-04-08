import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

const buildCosts = [
  { item: 'Developer salaries (2–4 FTEs × $150K)', cost: '$300K–$600K/yr' },
  { item: 'Integration tooling & infrastructure', cost: '$50K–$150K/yr' },
  { item: 'Ongoing maintenance & bug fixes', cost: '$100K–$300K/yr' },
  { item: 'Compliance audit prep & documentation', cost: '$50K–$200K/yr' },
  { item: 'Time-to-market delay (6–18 months)', cost: 'Opportunity cost' },
];

const buyCosts = [
  { item: 'Vorro platform subscription', cost: 'Fixed annual fee' },
  { item: 'Implementation support (if needed)', cost: 'One-time, weeks' },
  { item: 'Ongoing maintenance & updates', cost: 'Included' },
  { item: 'Compliance automation', cost: 'Included' },
  { item: 'Time-to-market', cost: '2–6 weeks' },
];

const comparison = [
  { factor: 'Time to first integration', build: '3–6 months', buy: '2–4 weeks' },
  { factor: 'FHIR R4 compliance', build: 'Build from scratch', buy: 'Pre-certified' },
  { factor: 'HL7 v2 support', build: 'Custom parsers needed', buy: 'Native, 100+ message types' },
  { factor: 'HIPAA compliance', build: 'Your responsibility', buy: 'Platform-managed' },
  { factor: 'Vendor EHR connectors', build: 'Build each one', buy: '40+ pre-built' },
  { factor: 'Ongoing maintenance', build: '2–4 FTE engineers', buy: 'Managed by Vorro' },
  { factor: 'Audit trail & lineage', build: 'Custom logging', buy: 'Automated, exportable' },
];

export default function BuildVsBuy() {
  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Decision Guide</div>
          <h1 className="vertical-hero-headline">Build vs. Buy Healthcare Integration</h1>
          <p className="vertical-hero-sub">
            The honest, numbers-based guide to deciding whether to build your own healthcare integration infrastructure
            or buy a platform — and what the real costs of each path look like.
          </p>
        </div>
      </section>

      {/* The Hidden Cost of Building */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="eyebrow">The Real Math</div>
            <h2>The Hidden Cost of Building In-House</h2>
            <p>Most healthcare IT teams underestimate the total cost of ownership for custom-built integrations by 3–5x.</p>
          </div>
          <div className="grid-2" style={{ gap: '2rem', marginTop: '3rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
                If You Build
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {buildCosts.map(c => (
                  <div key={c.item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'var(--color-gray-50)', borderRadius: 'var(--radius-md)', gap: '1rem' }}>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)' }}>{c.item}</span>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-bold)', color: '#dc2626', whiteSpace: 'nowrap' }}>{c.cost}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fef2f2', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', color: '#dc2626' }}>$500K–$1.25M+/yr</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>Fully-loaded annual cost estimate</div>
              </div>
            </div>
            <div className="card" style={{ padding: '2rem', border: '2px solid var(--color-primary)' }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
                If You Buy (Vorro)
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {buyCosts.map(c => (
                  <div key={c.item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'var(--color-gray-50)', borderRadius: 'var(--radius-md)', gap: '1rem' }}>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)' }}>{c.item}</span>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-bold)', color: 'var(--color-green)', whiteSpace: 'nowrap' }}>{c.cost}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(2,177,100,0.1)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-green)' }}>300% Avg. ROI</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>Based on client TCO analysis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="eyebrow">Side-by-Side</div>
            <h2>Build vs. Buy: Factor by Factor</h2>
          </div>
          <div style={{ overflowX: 'auto', marginTop: '2.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <thead>
                <tr style={{ background: 'var(--color-navy)', color: '#fff' }}>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'left', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)' }}>Factor</th>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'left', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)' }}>Build In-House</th>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'left', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)', color: 'var(--color-cyan)' }}>Buy Vorro</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.factor} style={{ borderBottom: '1px solid var(--color-gray-100)', background: i % 2 === 0 ? '#fff' : 'var(--color-gray-50)' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)', color: 'var(--color-navy)' }}>{row.factor}</td>
                    <td style={{ padding: '1rem 1.25rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <X size={14} style={{ color: '#dc2626' }} /> {row.build}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.25rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)', fontWeight: 'var(--font-medium)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--color-green)' }} /> {row.buy}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Get a Custom TCO Analysis</h2>
              <p>We'll model the true build-vs-buy cost for your specific integration requirements.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Request TCO Analysis <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
