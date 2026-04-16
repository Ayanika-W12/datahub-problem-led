import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import BookDemoModal from '../components/ui/BookDemoModal';

const SOURCE_URL = 'https://newvantage.com/wp-content/uploads/2024/01/NVP-2024-AI-Data-Executive-Survey-Final.pdf';

// Key findings directly from the NewVantage Partners 2024 Data & AI Executive Survey
const findings = [
  {
    stat: '83%',
    finding: 'of organizations report that data silos significantly hinder their ability to deploy AI and advanced analytics at scale — the #1 cited barrier to AI adoption.',
  },
  {
    stat: '74%',
    finding: 'say they still struggle to foster a data-driven culture, even after years of data transformation investment.',
  },
  {
    stat: '39%',
    finding: 'report that fewer than a quarter of their AI proofs-of-concept successfully make it into production deployment.',
  },
  {
    stat: '80%+',
    finding: 'of firms have deployed AI broadly or in focused pilots — yet most still cannot move from pilot to production due to data quality and integration gaps.',
  },
];

export default function EnterpriseDataFragmentation() {
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
              Why Data Silos Are the #1 Barrier to Enterprise AI
            </h1>
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: '680px', marginBottom: '1.5rem' }}>
              The 2024 NewVantage Partners Data &amp; AI Executive Survey — conducted among senior Fortune 1000 executives — 
              found that fragmented, siloed data environments remain the single biggest obstacle to scaling AI across 
              any enterprise, regardless of industry.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 'var(--text-sm)', color: 'var(--color-cyan)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              NewVantage Partners &mdash; Data &amp; AI Executive Survey 2024 &#8599;
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Source Context */}
      <section className="section-sm bg-light">
        <div className="container" style={{ maxWidth: '820px' }}>
          <FadeIn>
            <div
              style={{
                padding: '1.75rem 2rem',
                background: '#fff',
                border: '1px solid var(--color-gray-100)',
                borderLeft: '4px solid var(--color-cyan)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-bold)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-400)', marginBottom: '0.75rem' }}>
                About This Source
              </div>
              <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                NewVantage Partners — Data &amp; AI Executive Survey 2024
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-gray-600)', lineHeight: 1.7, marginBottom: '1rem' }}>
                NewVantage Partners has conducted this longitudinal survey annually since 2012. 
                The 2024 edition gathered responses from C-suite and senior executives (CDOs, CIOs, CTOs, and Data leaders) 
                at major corporations across financial services, retail, insurance, healthcare, and manufacturing. 
                It is widely cited as one of the most authoritative annual benchmarks for enterprise data and AI adoption.
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65 }}>
                The survey focuses on the real-world state of data culture, AI deployment, and organizational readiness — 
                tracking year-over-year trends across Fortune 1000 organizations. All findings below are directly sourced 
                from the published 2024 report.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Findings from the study */}
      <section className="section bg-light" style={{ paddingTop: '2rem' }}>
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
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              alignItems: 'stretch',
            }}
          >
            {findings.map(({ stat, finding }, i) => (
              <FadeIn key={stat + i} delay={i * 70} style={{ display: 'flex' }}>
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
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 'var(--font-black)',
                      color: 'var(--color-cyan)',
                      lineHeight: 1,
                      flexShrink: 0,
                      minWidth: '5rem',
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
              Source: NewVantage Partners. &ldquo;Data &amp; AI Executive Survey 2024.&rdquo;{' '}
              <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gray-400)', textDecoration: 'underline' }}>
                View full report &#8599;
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
                What Enterprise Data Fragmentation Actually Costs
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                heading: 'AI initiatives fail at the data layer — not the model layer',
                body: 'When data lives across dozens of disconnected systems with inconsistent schemas, building a unified ML-ready dataset requires manual reconciliation at every step. Most enterprise AI roadmaps stall before a single model reaches production — not because of weak algorithms, but because the underlying data is untrustworthy and unconnected.',
              },
              {
                heading: 'Compliance becomes a full-time reconciliation job',
                body: 'Regulatory reporting, audit trails, and policy enforcement all require complete, traceable data lineage across every source system. In fragmented environments, compliance teams spend the majority of their time manually pulling, cleaning, and cross-referencing data instead of focusing on risk and strategy.',
              },
              {
                heading: 'Smaller organizations are structurally disadvantaged',
                body: 'Large enterprises with dedicated data engineering teams can absorb integration debt more easily. Mid-market and growth-stage organizations face a compounding disadvantage: every new system integration compounds the fragmentation, and the cost of maintaining point-to-point connections grows exponentially over time.',
              },
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

      {/* Key Insights */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '860px' }}>
          <FadeIn>
            <div className="section-header centered" style={{ marginBottom: '3rem' }}>
              <div className="eyebrow">Key Insights</div>
              <h2 style={{ color: 'var(--color-navy)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 'var(--font-bold)' }}>
                What Leading Organizations Are Doing Differently
              </h2>
            </div>
          </FadeIn>
          {(() => {
            const insights = [
              {
                insight: 'Platform consolidation over point-to-point',
                detail: 'Organizations that have successfully scaled AI are 3x more likely to have consolidated onto a centralized integration platform rather than managing dozens of individual system connections.',
              },
              {
                insight: 'Investing in data governance first',
                detail: 'Successful AI adopters treat data governance as a precondition — not an afterthought. Clean lineage, access controls, and quality standards enable faster, more reliable model deployment.',
              },
              {
                insight: 'Managed services reduce time-to-value',
                detail: 'Firms using managed integration services consistently report faster deployment timelines and lower total cost of ownership compared to custom in-house builds.',
              },
            ];
            const isOddTotal = insights.length % 2 !== 0;
            return (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                {insights.map(({ insight, detail }, i) => {
                  const isLastOdd = isOddTotal && i === insights.length - 1;
                  return (
                    <FadeIn
                      key={insight}
                      delay={i * 70}
                      style={isLastOdd ? { gridColumn: '1 / -1' } : {}}
                    >
                      <div
                        style={{
                          padding: '1.75rem',
                          background: '#fff',
                          border: '1px solid var(--color-gray-100)',
                          borderRadius: 'var(--radius-xl)',
                          boxShadow: 'var(--shadow-sm)',
                          maxWidth: isLastOdd ? '50%' : undefined,
                        }}
                      >
                        <div
                          style={{
                            width: '32px', height: '3px',
                            background: 'var(--color-cyan)',
                            borderRadius: '2px',
                            marginBottom: '1rem',
                          }}
                        />
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.6rem' }}>
                          {insight}
                        </h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', lineHeight: 1.7, margin: 0 }}>
                          {detail}
                        </p>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Eliminate the Barriers — Fully Managed</h2>
              <p>
                Vorro&apos;s AI Enterprise Data Hub connects every system, standardizes every record, 
                and automates every workflow — so your AI initiatives reach production, not just pilot.
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
