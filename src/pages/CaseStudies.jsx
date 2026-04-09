import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Real case studies from vorro.net/case-study/
const caseStudies = [
  {
    title: '45TB of Patient Data in 44 Hours',
    type: 'Healthcare Analytics',
    industry: 'Health System',
    outcome: '45TB processed in under 44 hours',
    desc: 'A major healthcare client needed to scale analytics across an enormous patient dataset under a hard deadline. Vorro\'s BridgeGate platform processed 45TB of patient data in 44 hours — without data loss or downtime.',
    url: 'https://vorro.net/case-study/scaling-healthcare-analytics-how-bridgegate-processed-45tb-of-patient-data-in-44-hours/',
    tag: 'Healthcare',
  },
  {
    title: 'Leading EMR Provider Achieves Interoperability Goals',
    type: 'EHR / EMR Integration',
    industry: 'Health IT Vendor',
    outcome: 'Full interoperability delivered on schedule',
    desc: 'A leading EMR solutions provider partnered with Vorro to achieve their interoperability roadmap — connecting disparate systems through BridgeGate\'s enterprise integration layer and meeting all compliance timelines.',
    url: 'https://vorro.net/case-study/how-a-leading-emr-solutions-provider-achieved-their-interoperability-goals-with-vorros-bridgegate-integration-platform/',
    tag: 'Healthcare',
  },
  {
    title: 'Pharmacy Management Provider Finds Data Harmony',
    type: 'Pharmacy Data Integration',
    industry: 'Pharmacy Benefit Manager',
    outcome: 'Unified pharmacy data across all systems',
    desc: 'A pharmacy management provider was struggling with fragmented data across dispensing, claims, and clinical systems. Vorro\'s BridgeGate platform unified all data flows — eliminating manual reconciliation and reducing errors.',
    url: 'https://vorro.net/case-study/how-a-pharmacy-management-provider-found-data-harmony-with-vorros-bridgegate-integration-platform/',
    tag: 'Healthcare',
  },
  {
    title: 'DME Provider Streamlines ePrescribing',
    type: 'ePrescribing Integration',
    industry: 'Durable Medical Equipment',
    outcome: 'Real-time ePrescribing at launch',
    desc: 'A leading DME provider needed to connect to ePrescribing networks at launch. Vorro deployed NCPDP SCRIPT integration through BridgeGate — enabling real-time, error-free electronic prescriptions from day one.',
    url: 'https://vorro.net/case-study/how-a-leading-durable-medical-equipment-provider-streamlined-e-prescriptions-with-vorros-bridgegate-integration-platform/',
    tag: 'Healthcare',
  },
  {
    title: 'American Lung Association Streamlines Data Integration',
    type: 'Non-Profit Health Data',
    industry: 'Non-Profit / Public Health',
    outcome: 'Cost-efficient, scalable data connections',
    desc: 'The American Lung Association needed cost-efficient data integration to connect research, clinical, and advocacy data. Vorro\'s BridgeGate solution delivered scalable integrations that reduced IT overhead and improved data accuracy.',
    url: 'https://vorro.net/case-study/implementing-data-integration-cost-efficient-connections-for-the-american-lung-association-with-vorros-bridgegate-solution/',
    tag: 'Non-Profit',
  },
  {
    title: 'Leading eCommerce Company Unifies Two Retail Giants',
    type: 'Retail Data Integration',
    industry: 'eCommerce',
    outcome: 'Two retail giants unified on one data platform',
    desc: 'A major eCommerce company needed to merge data infrastructure after acquiring a second retail giant. Vorro\'s integration platform unified product, order, and customer data across both organizations — accelerating the merger timeline.',
    url: 'https://vorro.net/case-study/how-a-leading-ecommerce-company-unified-two-retail-giants/',
    tag: 'eCommerce',
  },
  {
    title: 'Seamless Healthcare Data Exchange for EMR Provider',
    type: 'Healthcare Data Exchange',
    industry: 'Health IT Vendor',
    outcome: 'Seamless multi-system data exchange',
    desc: 'A leading EMR provider needed to enable seamless data exchange across a complex multi-system environment. Vorro\'s BridgeGate platform delivered real-time, standards-based data exchange — supporting growth and new client onboarding.',
    url: 'https://vorro.net/case-study/achieving-seamless-healthcare-data-exchange-for-a-leading-emr-provider-google-ads/',
    tag: 'Healthcare',
  },
  {
    title: 'High-Volume EDI and Real-Time Eligibility Checks',
    type: 'EDI & Eligibility',
    industry: 'Payer / Health Plan',
    outcome: 'High-volume EDI processed in real time',
    desc: 'A payer organization handling massive EDI volumes needed real-time eligibility verification at scale. Vorro streamlined high-volume EDI X12 transactions and real-time 270/271 eligibility checks — cutting processing time dramatically.',
    url: 'https://vorro.net/case-study/streamlining-highvolume-edi-and-real-time-eligibility-checks/',
    tag: 'Healthcare',
  },
];

const tags = ['All', 'Healthcare', 'eCommerce', 'Non-Profit'];

import { useState } from 'react';

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
          {/* Filter */}
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
            {filtered.map((cs) => (
              <div key={cs.title} className="card-feature" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="tag tag-primary">{cs.industry}</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)' }}>{cs.type}</span>
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', lineHeight: 1.3 }}>
                  {cs.title}
                </h3>
                <div style={{ padding: '0.75rem 1rem', background: 'rgba(172,65,151,0.07)', borderRadius: 'var(--radius-lg)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)' }}>
                  {cs.outcome}
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65, flex: 1 }}>
                  {cs.desc}
                </p>
                <a
                  href={cs.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)', textDecoration: 'none' }}
                >
                  Read full case study <ExternalLink size={13} />
                </a>
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
              <p>Schedule a demo and see how Vorro can transform your data operations.</p>
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
