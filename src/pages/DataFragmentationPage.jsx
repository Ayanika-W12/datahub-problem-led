import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import BookDemoModal from '../components/ui/BookDemoModal';

const SOURCE_URL = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11648725/';

// Key findings directly from the JAMIA 2024 study
const findings = [
  {
    stat: '96%',
    finding: 'of hospitals encountered at least one major or minor barrier to health information exchange.',
  },
  {
    stat: '84%',
    finding: 'reported greater challenges exchanging data across different EHR vendor platforms — the #1 overall barrier.',
  },
  {
    stat: '62%',
    finding: 'experienced at least one major barrier to obtaining or using interoperable information.',
  },
  {
    stat: '2×',
    finding: 'more major barriers reported by small independent hospitals versus large system-affiliated institutions.',
  },
];

export default function DataFragmentationPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <main style={{ fontFamily: 'var(--font-sans)' }}>

      {/* Hero */}
      <section style={{ background: 'var(--color-navy)', padding: '5.5rem 0 4.5rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <FadeIn>
            <div className="eyebrow" style={{ color: 'var(--color-cyan)', marginBottom: '1.1rem' }}>
              Research &amp; Insights
            </div>
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 'var(--font-bold)',
                color: '#fff',
                lineHeight: 1.22,
                marginBottom: '1.25rem',
              }}
            >
              Barriers to Obtaining and Using Interoperable Information
            </h1>
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: '680px', marginBottom: '1.5rem' }}>
              A 2024 study of non-federal acute care hospitals in the US found that fragmented, multi-vendor EHR environments remain the single biggest obstacle to health data interoperability — and the problem is disproportionately worse for smaller institutions.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 'var(--text-sm)', color: 'var(--color-cyan)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Everson &amp; Richwine — JAMIA 2024, PMC open access ↗
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Key Findings from the study */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '900px' }}>
          <FadeIn>
            <div className="section-header centered" style={{ marginBottom: '3rem' }}>
              <div className="eyebrow">Key Findings</div>
              <h2 style={{ color: 'var(--color-navy)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 'var(--font-bold)' }}>
                What the Data Actually Shows
              </h2>
            </div>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {findings.map(({ stat, finding }, i) => (
              <FadeIn key={stat + i} delay={i * 70}>
                <div
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start',
                    padding: '1.75rem',
                    background: '#fff',
                    border: '1px solid var(--color-gray-100)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 'var(--font-black)',
                      color: 'var(--color-cyan)',
                      lineHeight: 1,
                      flexShrink: 0,
                      minWidth: '4rem',
                    }}
                  >
                    {stat}
                  </div>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-gray-700)', lineHeight: 1.65, margin: 0, paddingTop: '0.2rem' }}>
                    {finding}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p
              style={{
                marginTop: '2rem',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-gray-400)',
                textAlign: 'center',
              }}
            >
              Source: Everson J, Richwine C. "Barriers to obtaining and using interoperable information among non-federal acute care hospitals."{' '}
              <em>J Am Med Inform Assoc.</em> 2024. DOI: 10.1093/jamia/ocae263.{' '}
              <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gray-400)', textDecoration: 'underline' }}>
                View full study ↗
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What This Means */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <FadeIn>
            <div className="section-header centered" style={{ marginBottom: '3rem' }}>
              <div className="eyebrow">Why It Matters</div>
              <h2 style={{ color: 'var(--color-navy)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 'var(--font-bold)' }}>
                What Multi-Vendor Fragmentation Actually Costs
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { heading: 'AI and analytics initiatives stall', body: "When patient data lives across Epic, Cerner, Athena, and a dozen other vendors' systems, building a unified ML-ready dataset requires manual reconciliation at every step. Most health systems' AI roadmaps fail at the data layer before a single model ships." },
              { heading: 'Compliance becomes a manual burden', body: 'HIPAA audit trails, 21st Century Cures Act compliance, and FHIR mandate reporting all require complete, traceable data lineage across sources. Fragmented environments turn compliance into a full-time reconciliation job.' },
              { heading: 'Small and independent hospitals are hit hardest', body: 'The study found small independent hospitals face more than twice as many major barriers as large system-affiliated institutions — a structural disadvantage that compounds over time as integration debt accumulates.' },
            ].map(({ heading, body }, i) => (
              <FadeIn key={heading} delay={i * 70}>
                <div
                  style={{
                    padding: '1.75rem 2rem',
                    background: '#fff',
                    border: '1px solid var(--color-gray-100)',
                    borderLeft: '4px solid var(--color-primary)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.6rem' }}>
                    {heading}
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-gray-600)', lineHeight: 1.7, margin: 0 }}>
                    {body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Eliminate the Barriers — Fully Managed</h2>
              <p>
                Vorro's AI Healthcare Data Hub connects every EHR vendor, standardizes every record, and automates every workflow — so you're not one of the 96%.
              </p>
              <div className="cta-banner-actions">
                <button className="btn btn-cyan btn-xl" onClick={() => setDemoOpen(true)}>
                  Talk to an Expert <ArrowRight size={18} />
                </button>
                <Link to="/case-studies" className="btn btn-ghost-white btn-xl">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </main>
  );
}
