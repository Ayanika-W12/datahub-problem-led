import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BookDemoModal } from '../components/ui/BookDemoModal';

const caseStudies = [
  {
    slug: 'avesis',
    title: 'Streamlining High-Volume EDI and Real-Time Eligibility Checks for Avesis',
    industry: 'Healthcare',
    statValue: '75%',
    statLabel: 'reduction in integration maintenance cost',
    summary: 'Implemented automated EDI pipeline and millisecond-speed eligibility verification through a high-performance API for a leading benefits administrator.',
  },
  {
    slug: 'dme-provider',
    title: 'Streamlining E-Prescriptions for a Leading DME Provider',
    industry: 'Healthcare',
    statValue: '5M+',
    statLabel: 'monthly transactions processed',
    summary: 'Ingested and translated HL7, FHIR bundles, PDFs, and JSONs from multiple EMRs into a proprietary format.',
  },
  {
    slug: 'pharmacy-management',
    title: 'How a Pharmacy Management Provider Found Data Harmony with BridgeGate',
    industry: 'Healthcare',
    statValue: '3M+',
    statLabel: 'patient records processed per day',
    summary: 'Connected hundreds of hospitals and clinics via mixed HL7 & SFTP to validate 340B eligibility in near-real-time.',
  },
  {
    slug: 'american-lung-association',
    title: 'How the American Lung Association Streamlined Data Integration',
    industry: 'Non-Profit',
    statValue: '99.9%',
    statLabel: 'uptime, 100+ clinics served',
    summary: 'Replaced manual fax-and-paper tobacco cessation referrals with automated digital exchange between hospitals, clinics, and EMRs.',
  },
  {
    slug: 'emr-provider',
    title: 'Achieving Seamless Healthcare Data Exchange for a Leading EMR Provider',
    industry: 'Healthcare',
    statValue: '3M+',
    statLabel: 'monthly transactions',
    summary: 'Translated complex HL7 ADT and CCD formats into a single standard across hospitals, clinics, and HIEs.',
  },
  {
    slug: 'healthcare-analytics',
    title: 'Scaling Healthcare Analytics: Processing 45TB of Patient Data in 44 Hours',
    industry: 'Analytics',
    statValue: '45TB',
    statLabel: 'processed in 44 hours',
    summary: 'Delivered a high-performance integration layer that ingested 44M+ patient files from 20+ health plans and 100+ hospitals.',
  },
  {
    slug: 'retail-conglomerate',
    title: 'How a Tier-1 Retail Conglomerate Standardized Technology for Two Global Brands',
    industry: 'eCommerce',
    statValue: '65%',
    statLabel: 'faster time-to-market',
    summary: 'Migrated QVC and HSN from 10 disparate legacy servers to consistent BridgeGate instances.',
  },
  {
    slug: 'health-system-ltpac',
    title: 'Enabling Care Coordination Between Health Systems and LTPAC Providers',
    industry: 'Healthcare',
    statValue: '250+',
    statLabel: 'health systems connected',
    summary: 'Deployed BridgeGate EiPaaS to enable seamless clinical data sharing between acute care, nursing homes, and home health agencies.',
  },
];

const industries = ['All', 'Healthcare', 'eCommerce', 'Non-Profit', 'Analytics'];

export default function CaseStudies() {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const filtered = activeIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.industry === activeIndustry);

  return (
    <main>
      {/* Hero - same pattern as Blog */}
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Case Studies</div>
          <h1 className="vertical-hero-headline">Real Outcomes from Real Clients</h1>
          <p className="vertical-hero-sub">
            Healthcare organizations, health plans, and enterprises trust Vorro to power their most critical data infrastructure.
          </p>
        </div>
      </section>

      {/* Content - same pattern as Blog */}
      <section className="section bg-light">
        <div className="container">
          {/* Industry Filter - same as Blog category filter */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {industries.map((ind) => (
              <button
                key={ind}
                className={`vertical-tab ${activeIndustry === ind ? 'active' : ''}`}
                onClick={() => setActiveIndustry(ind)}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Cards Grid - same as Blog */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-gray-400)' }}>
              No case studies in this category yet.
            </div>
          ) : (
            <div className="grid-3" style={{ gap: '1.5rem' }}>
              {filtered.map((cs) => (
                <div key={cs.slug} className="card-feature" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="tag tag-primary">{cs.industry}</span>
                  </div>
                  
                  {/* Stat highlight */}
                  <div style={{ marginBottom: '0.25rem' }}>
                    <span style={{ 
                      fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', 
                      fontWeight: 'var(--font-bold)', 
                      color: 'var(--color-primary)', 
                      lineHeight: 1 
                    }}>
                      {cs.statValue}
                    </span>
                    <span style={{ 
                      display: 'block', 
                      fontSize: 'var(--text-xs)', 
                      color: 'var(--color-gray-400)', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.03em',
                      marginTop: '0.25rem'
                    }}>
                      {cs.statLabel}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', lineHeight: 1.35 }}>
                    {cs.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.6, flex: 1 }}>
                    {cs.summary}
                  </p>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)', textDecoration: 'none' }}
                  >
                    Read Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Count */}
          <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-400)' }}>
            Showing {filtered.length} of {caseStudies.length} case studies
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ 
            background: 'var(--color-navy)', 
            padding: '3rem', 
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 'var(--font-bold)', color: 'white', marginBottom: '0.75rem' }}>
              Ready to Become Our Next Success Story?
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
              Talk to an expert and see how Vorro can transform your data operations.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Delivery Model</span>
                <span style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', color: 'var(--color-cyan)' }}>Fully Managed</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Commercial Value</span>
                <span style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', color: 'var(--color-green)' }}>Low Cost</span>
              </div>
            </div>
            <button 
              onClick={() => setDemoModalOpen(true)} 
              className="btn btn-cyan btn-xl"
            >
              Talk to an Expert <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </main>
  );
}
