import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Achieving Seamless Healthcare Data Exchange for a Leading EMR Provider',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '3M+',
    statLabel: 'monthly transactions, integrated with 100+ pharmacies',
    summary:
      'Translated complex HL7 ADT and CCD formats into a single standard across hospitals, clinics, and HIEs — freeing the client to focus on mental health and disability solutions.',
    pdf: 'Achieving-Seamless-Healthcare-Data-Exchange-for-a-Leading-EMR-Provider_compressed-1.pdf',
  },
  {
    title: 'How a Pharmacy Management Provider Found Data Harmony with Vorro\'s BridgeGate',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '3M+',
    statLabel: 'patient records processed per day, 500+ facilities integrated',
    summary:
      'Connected hundreds of hospitals and clinics via mixed HL7 & SFTP to validate 340B eligibility in near-real-time, giving patients immediate access to discounted medications.',
    pdf: 'How-a-Pharmacy-Management-Provider-Found-Data-Harmony.pdf',
  },
  {
    title: 'How a Tier-1 Retail Conglomerate Standardized Technology for Two Global Shopping Brands',
    industry: 'eCommerce',
    tag: 'eCommerce',
    statValue: '65%',
    statLabel: 'faster time-to-market for new vendor integrations',
    summary:
      'Migrated QVC and HSN from 10 disparate legacy servers to consistent BridgeGate instances, achieving 100% platform standardization and a 40% reduction in operational overhead.',
    pdf: 'How-a-Tier-1-Retail-Conglomerate-Standardized-Technology-for-Two-Global-Shopping-Brands-for-World-Class-Scale.pdf',
  },
  {
    title: 'How the American Lung Association Streamlined Data Integration with BridgeGate',
    industry: 'Non-Profit',
    tag: 'Non-Profit',
    statValue: '99.9%',
    statLabel: 'uptime, 100+ clinics served for Illinois Quitline referrals',
    summary:
      'Replaced manual fax-and-paper tobacco cessation referrals with automated digital exchange between hospitals, clinics, and EMRs — fully managed by Vorro.',
    pdf: 'How-the-American-Lung-Association-Streamlined-Data-Integration-with-BridgeGate.pdf',
  },
  {
    title: 'Scaling Healthcare Analytics: How BridgeGate Processed 45TB of Patient Data in 44 Hours',
    industry: 'Analytics',
    tag: 'Analytics',
    statValue: '45TB',
    statLabel: 'processed in 44 hours — 1M complex CCDs per hour',
    summary:
      'Delivered a high-performance integration layer that ingested 44M+ patient files from 20+ health plans and 100+ hospitals where competing EiPaaS platforms couldn\'t scale.',
    pdf: 'Scaling-Healthcare-Analytics-45TB-in-44-Hours.pdf',
  },
  {
    title: 'Streamlining E-Prescriptions for a Leading DME Provider with Vorro\'s BridgeGate',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '5M+',
    statLabel: 'monthly transactions, 70% cost savings vs in-house development',
    summary:
      'Ingested and translated HL7, FHIR bundles, PDFs, and JSONs from multiple EMRs into a proprietary format — fully managed so the client could focus entirely on their core business.',
    pdf: 'Streamlining-E-Prescriptions-for-a-Leading-DME-Provider-with-Vorros-BridgeGate_compressed.pdf',
  },
];

const tags = ['All', 'Healthcare', 'eCommerce', 'Non-Profit', 'Analytics'];

const industryColors = {
  Healthcare: { bg: 'rgba(14,165,233,0.1)', color: '#0ea5e9' },
  eCommerce:  { bg: 'rgba(245,158,11,0.1)',  color: '#d97706' },
  'Non-Profit': { bg: 'rgba(34,197,94,0.1)', color: '#16a34a' },
  Analytics:  { bg: 'rgba(172,65,151,0.12)', color: 'var(--color-primary)' },
};

export default function CaseStudies() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? caseStudies : caseStudies.filter(c => c.tag === activeTag);

  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Case Studies</div>
          <h1 className="vertical-hero-headline">Real Outcomes from Real Clients</h1>
          <p className="vertical-hero-sub">
            Healthcare organizations, health plans, eCommerce companies, and non-profits trust Vorro
            to power their most critical data infrastructure. Here's what they've achieved.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {tags.map(t => (
              <button
                key={t}
                className={`vertical-tab ${activeTag === t ? 'active' : ''}`}
                onClick={() => setActiveTag(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {filtered.map((cs) => {
              const palette = industryColors[cs.industry] || industryColors['Analytics'];
              return (
                <div
                  key={cs.title}
                  className="card-feature"
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  {/* Industry pill */}
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-semibold)',
                      background: palette.bg,
                      color: palette.color,
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cs.industry}
                  </span>

                  {/* Key stat */}
                  <div style={{ lineHeight: 1 }}>
                    <div
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                        fontWeight: 'var(--font-bold)',
                        color: 'var(--color-primary)',
                        lineHeight: 1,
                      }}
                    >
                      {cs.statValue}
                    </div>
                    <div
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-gray-400)',
                        marginTop: '0.3rem',
                        lineHeight: 1.4,
                      }}
                    >
                      {cs.statLabel}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-bold)',
                      color: 'var(--color-navy)',
                      lineHeight: 1.35,
                    }}
                  >
                    {cs.title}
                  </h3>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-gray-500)',
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {cs.summary}
                  </p>

                  {/* CTA */}
                  <a
                    href={`/case-studies/${cs.pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    Read Case Study <ArrowRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to Become Our Next Success Story?</h2>
              <p>Schedule a demo and see how Vorro can transform your data operations.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Talk to an Expert <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
