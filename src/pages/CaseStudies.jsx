import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  { title: 'Geisinger Health', type: 'Health System', outcome: 'Unified data flows across 10+ facilities', desc: 'Deployed FHIR-native integration layer connecting Epic to downstream analytics and payer systems — eliminating months of manual reconciliation.' },
  { title: 'Contexture (HIE)', type: 'Health Information Exchange', outcome: 'Real-time data exchange for 1,000+ providers', desc: 'Built a scalable HL7/FHIR routing engine supporting a statewide HIE network with real-time ADT, lab, and clinical document exchange.' },
  { title: 'WISHIN (HIE)', type: 'Health Information Exchange', outcome: 'Statewide interoperability at scale', desc: 'Deployed Vorro BridgeGate as the central integration hub for Wisconsin\'s statewide HIE, supporting 600+ healthcare organizations.' },
  { title: 'SunRx / 340B Holdings', type: 'Pharmacy Benefit Manager', outcome: '340B compliance automation', desc: 'Automated complex 340B eligibility workflows using NCPDP and FHIR integrations, reducing manual review time by 70%.' },
  { title: 'DMEScripts', type: 'DME Digital Health', outcome: 'Instant ePrescribing connectivity', desc: 'Connected DME suppliers to prescriber workflows using NCPDP SCRIPT — enabling real-time, error-free ePrescribing at launch.' },
  { title: 'Avesis / Guardian Life', type: 'Payer', outcome: 'Claims and eligibility automation', desc: 'Implemented EDI X12 270/271 eligibility verification and 837/835 claims routing — cutting manual claim processing by 60%.' },
];

export default function CaseStudies() {
  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Case Studies</div>
          <h1 className="vertical-hero-headline">Real Outcomes from Real Clients</h1>
          <p className="vertical-hero-sub">
            Healthcare organizations across the country trust Vorro to power their most critical
            data infrastructure. Here's what they've achieved.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {caseStudies.map((cs) => (
              <div key={cs.title} className="card-feature" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    {cs.type}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)' }}>
                    {cs.title}
                  </h3>
                </div>
                <div style={{ padding: '0.875rem 1rem', background: 'rgba(172,65,151,0.07)', borderRadius: 'var(--radius-lg)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)' }}>
                  {cs.outcome}
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65, flex: 1 }}>
                  {cs.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to Become Our Next Success Story?</h2>
              <p>Schedule a demo and see how Vorro can transform your healthcare data operations.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Get a Demo <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
