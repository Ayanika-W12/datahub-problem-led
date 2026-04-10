import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BookDemoModal } from '../components/ui/BookDemoModal';
import FadeIn from '../components/ui/FadeIn';

const caseStudies = [
  {
    slug: 'avesis',
    title: 'Streamlining High-Volume EDI and Real-Time Eligibility Checks for Avesis',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '75%',
    statLabel: 'reduction in integration maintenance cost',
    summary: 'Implemented automated EDI pipeline and millisecond-speed eligibility verification through a high-performance API for a leading benefits administrator.',
  },
  {
    slug: 'dme-provider',
    title: 'Streamlining E-Prescriptions for a Leading DME Provider',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '5M+',
    statLabel: 'monthly transactions processed',
    summary: 'Ingested and translated HL7, FHIR bundles, PDFs, and JSONs from multiple EMRs into a proprietary format — fully managed so the client could focus on their core business.',
  },
  {
    slug: 'pharmacy-management',
    title: 'How a Pharmacy Management Provider Found Data Harmony with BridgeGate',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '3M+',
    statLabel: 'patient records processed per day',
    summary: 'Connected hundreds of hospitals and clinics via mixed HL7 & SFTP to validate 340B eligibility in near-real-time, giving patients immediate access to discounted medications.',
  },
  {
    slug: 'american-lung-association',
    title: 'How the American Lung Association Streamlined Data Integration',
    industry: 'Non-Profit',
    tag: 'Non-Profit',
    statValue: '99.9%',
    statLabel: 'uptime, 100+ clinics served',
    summary: 'Replaced manual fax-and-paper tobacco cessation referrals with automated digital exchange between hospitals, clinics, and EMRs — fully managed by Vorro.',
  },
  {
    slug: 'emr-provider',
    title: 'Achieving Seamless Healthcare Data Exchange for a Leading EMR Provider',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '3M+',
    statLabel: 'monthly transactions',
    summary: 'Translated complex HL7 ADT and CCD formats into a single standard across hospitals, clinics, and HIEs — freeing the client to focus on mental health and disability solutions.',
  },
  {
    slug: 'healthcare-analytics',
    title: 'Scaling Healthcare Analytics: Processing 45TB of Patient Data in 44 Hours',
    industry: 'Analytics',
    tag: 'Analytics',
    statValue: '45TB',
    statLabel: 'processed in 44 hours',
    summary: 'Delivered a high-performance integration layer that ingested 44M+ patient files from 20+ health plans and 100+ hospitals where competing EiPaaS platforms couldn\'t scale.',
  },
  {
    slug: 'retail-conglomerate',
    title: 'How a Tier-1 Retail Conglomerate Standardized Technology for Two Global Brands',
    industry: 'eCommerce',
    tag: 'eCommerce',
    statValue: '65%',
    statLabel: 'faster time-to-market',
    summary: 'Migrated QVC and HSN from 10 disparate legacy servers to consistent BridgeGate instances, achieving 100% platform standardization.',
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
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  const filtered = activeTag === 'All' ? caseStudies : caseStudies.filter(c => c.tag === activeTag);

  return (
    <main>
      <section className="vertical-hero" style={{ minHeight: 'auto', padding: '5rem 0 2.5rem' }}>
        <div className="container">
          <FadeIn>
            <span className="hero-eyebrow">Case Studies</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Real Outcomes from Real Clients
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '600px' }}>
              Healthcare organizations, health plans, and enterprises trust Vorro to power their most critical data infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-light" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Filter tabs */}
          <div className="case-filters">
            {tags.map(t => (
              <button
                key={t}
                className={`case-filter-btn ${activeTag === t ? 'active' : ''}`}
                onClick={() => setActiveTag(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="case-grid">
            {filtered.map((cs, i) => {
              const palette = industryColors[cs.industry] || industryColors['Analytics'];
              return (
                <FadeIn key={cs.slug} delay={i * 50}>
                  <Link to={`/case-studies/${cs.slug}`} className="case-card">
                    <span className="case-card-tag" style={{ background: palette.bg, color: palette.color }}>
                      {cs.industry}
                    </span>
                    
                    <div className="case-card-stat">
                      <span className="case-card-stat-value">{cs.statValue}</span>
                      <span className="case-card-stat-label">{cs.statLabel}</span>
                    </div>

                    <h3 className="case-card-title">{cs.title}</h3>
                    <p className="case-card-summary">{cs.summary}</p>

                    <span className="case-card-link">
                      Read Case Study <ArrowRight size={14} />
                    </span>
                  </Link>
                </FadeIn>
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
                <button onClick={() => setDemoModalOpen(true)} className="btn btn-cyan btn-xl">
                  Talk to an Expert <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </main>
  );
}
