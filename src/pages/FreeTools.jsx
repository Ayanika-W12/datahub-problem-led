import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Wrench } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import BookDemoModal from '../components/ui/BookDemoModal';

const tools = [
  {
    title: 'FHIR Validation',
    description:
      'Check FHIR resources for structure, compliance, and data quality before they hit production.',
    href: 'https://vorro.net/FHIR-Validation/',
    cta: 'Try it free →',
  },
  {
    title: 'BridgeGate for N8N',
    description:
      'Bring native EMR connectivity to n8n workflows — no custom code, no middleware.',
    href: 'https://vorro.net/BridgeGate-N8N-Node/',
    cta: 'Get started →',
  },
];

export default function FreeTools() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: 'var(--color-navy)',
          padding: '5rem 0 4rem',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <FadeIn>
            <div className="eyebrow" style={{ color: 'var(--color-cyan)', marginBottom: '1rem' }}>
              Free Tools
            </div>
            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'var(--font-bold)',
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Free Healthcare Data Tools
            </h1>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
              }}
            >
              No sign-up. No cost. Start using them right now.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {tools.map((tool, i) => (
              <FadeIn key={tool.title} delay={i * 100}>
                <div
                  style={{
                    background: '#fff',
                    border: '1px solid var(--color-gray-100)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: 'var(--radius-lg)',
                      background: 'rgba(32,211,239,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Wrench size={20} style={{ color: 'var(--color-cyan)' }} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h2
                      style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 'var(--font-bold)',
                        color: 'var(--color-navy)',
                        marginBottom: '0.6rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {tool.title}
                    </h2>
                    <p
                      style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-gray-600)',
                        lineHeight: 1.65,
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {tool.description}
                    </p>
                  </div>

                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontWeight: 'var(--font-semibold)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-primary)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-sans)',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    {tool.cta}
                    <ArrowUpRight size={15} />
                  </a>
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
              <h2>Need a Custom Integration?</h2>
              <p>Our team builds and manages healthcare data integrations end-to-end — fully managed, low cost, ready in weeks.</p>
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
