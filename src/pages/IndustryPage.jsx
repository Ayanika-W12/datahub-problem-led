import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const industries = {
  healthcare: {
    badge: 'Healthcare',
    headline: 'The Data Infrastructure Behind Modern Healthcare',
    sub: 'Vorro powers health systems, HIEs, payers, providers, and specialty networks — connecting clinical, financial, and operational data across every system in your environment.',
    color: 'var(--color-primary)',
    segments: [
      {
        title: 'Health Systems & Hospitals',
        desc: 'Unify data across facilities, departments, and care settings. Connect Epic, Cerner, and every downstream system into a single governed data layer — with full audit trail and real-time alerting.',
        bullets: ['Multi-facility HL7 and FHIR routing', 'Bed management and ADT event streaming', 'Revenue cycle and CDI integration', 'Population health data pipelines'],
        link: '/solutions/emr-integrations',
      },
      {
        title: 'Health Information Exchanges',
        desc: 'Vorro powers statewide HIEs including Contexture and WISHIN. Our platform handles the high-volume, multi-participant data flows that define HIE operations at scale.',
        bullets: ['Carequality and CommonWell gateway support', 'TEFCA-ready QHIN infrastructure', 'Per-participant consent enforcement', 'Public health reporting (ELR, syndromic)'],
        link: '/solutions/hie-integrations',
      },
      {
        title: 'Payers & Health Plans',
        desc: 'Automate prior auth, eligibility, claims, and payer-to-payer data exchange — fully compliant with CMS-0057-F and the 2026 Prior Auth Final Rule deadlines.',
        bullets: ['FHIR R4 Patient, Provider & Payer-to-Payer APIs', 'EDI X12 claims, 270/271 eligibility', 'Denial management with root cause AI', 'Stars and HEDIS reporting pipelines'],
        link: '/solutions/payer-integrations',
      },
      {
        title: 'Specialty & Pharmacy Networks',
        desc: 'Connect pharmacy, DME, and specialty care workflows with ePrescribing networks, PBMs, and 340B platforms — using NCPDP SCRIPT and proprietary connectors.',
        bullets: ['Surescripts ePrescribing integration', '340B split billing and compliance', 'PBM claims reconciliation', 'Specialty prior auth automation'],
        link: '/solutions/pharmacy-integrations',
      },
    ],
    stats: [
      { val: '25M+', label: 'Managed Lives Powered' },
      { val: '22+', label: 'Enterprise Deployments' },
      { val: '100%', label: 'HIPAA-Compliant by Design' },
      { val: '6 wks', label: 'Avg. Time to First Integration' },
    ],
  },
  ecommerce: {
    badge: 'eCommerce & Retail',
    headline: 'Unified Data Across Every Channel, Platform, and Warehouse',
    sub: "Vorro's enterprise integration platform connects your eCommerce platforms, ERP systems, order management, inventory, and customer data — eliminating silos and enabling real-time operational intelligence.",
    color: 'var(--color-cyan)',
    segments: [
      {
        title: 'Platform & Storefront Unification',
        desc: 'Merging two retail businesses or expanding to new sales channels? Vorro unifies product catalogs, order flows, and customer records across Shopify, Salesforce Commerce, Magento, WooCommerce, and proprietary platforms.',
        bullets: ['Product catalog normalization and sync', 'Order management system integration', 'Multi-storefront inventory unification', 'Customer identity matching and deduplication'],
        link: '/solutions/data-quality',
      },
      {
        title: 'ERP & Fulfillment Integration',
        desc: 'Connect your eCommerce front-end to SAP, NetSuite, Oracle, or Microsoft Dynamics — with real-time inventory, order, and fulfillment data flowing bidirectionally without manual reconciliation.',
        bullets: ['ERP bidirectional data sync', 'Warehouse management system (WMS) connectors', 'Return and refund workflow automation', '3PL and fulfillment network integration'],
        link: '/solutions/pipeline-auto-healing',
      },
      {
        title: 'Customer Data Unification',
        desc: 'Build a single customer view from purchase history, support tickets, loyalty data, and behavioral signals — across every channel and platform in your stack.',
        bullets: ['Customer identity resolution', 'Cross-channel purchase history unification', 'Loyalty and subscription data pipelines', 'CDP and data warehouse connectors'],
        link: '/solutions/data-management',
      },
    ],
    stats: [
      { val: '2', label: 'Retail giants unified (case study)' },
      { val: '99.9%', label: 'Pipeline uptime SLA' },
      { val: '2–4 wks', label: 'Time to first integration' },
      { val: '300%', label: 'Avg. client ROI' },
    ],
  },
  insurance: {
    badge: 'Insurance',
    headline: 'Claims, Eligibility, Policy, and Member Data — Automated',
    sub: "Vorro's integration platform handles the complex, high-volume data flows that define insurance operations — from real-time eligibility verification to policy lifecycle management to claims processing.",
    color: 'var(--color-navy)',
    segments: [
      {
        title: 'Claims Processing & Automation',
        desc: 'Automate claims intake, adjudication, and payment workflows using EDI X12 837/835 and modern API-based integration — reducing manual processing time and error rates.',
        bullets: ['EDI X12 837P/I/D claims processing', 'ERA/EFT 835 payment automation', 'Claims scrubbing and validation rules', 'Denial root cause classification and routing'],
        link: '/solutions/payer-integrations',
      },
      {
        title: 'Eligibility & Benefits Verification',
        desc: 'Real-time eligibility checks against 250+ payers and health plans — using EDI 270/271 and FHIR R4 APIs — reducing manual verification calls by up to 80%.',
        bullets: ['Real-time 270/271 eligibility transactions', 'FHIR Patient Access API integration', 'Benefits and coverage detail extraction', 'Member portal data synchronization'],
        link: '/solutions/payer-integrations',
      },
      {
        title: 'Policy & Member Lifecycle Management',
        desc: 'Connect your policy administration systems, CRM, and member portals into a unified data layer — with event-driven automation for enrollments, renewals, and changes.',
        bullets: ['Policy administration system connectors', 'Member enrollment and disenrollment events', 'Life event trigger automation', 'Agent and broker portal data sync'],
        link: '/solutions/data-management',
      },
      {
        title: 'Regulatory Reporting & Compliance',
        desc: 'Automate state and federal reporting requirements — from CMS encounter data submissions to state DOI filings — with full audit trail and error resolution workflows.',
        bullets: ['CMS encounter data submission pipelines', 'EDGE server data integration', 'Risk adjustment data management', 'State regulatory reporting automation'],
        link: '/solutions/data-quality',
      },
    ],
    stats: [
      { val: '250+', label: 'Payer connections' },
      { val: '80%', label: 'Reduction in manual eligibility calls' },
      { val: '99.9%', label: 'Uptime SLA' },
      { val: '4 wks', label: 'Avg. time to go live' },
    ],
  },
};

export default function IndustryPage({ industry }) {
  const data = industries[industry];
  if (!data) return null;

  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>{data.badge}</div>
          <h1 className="vertical-hero-headline">{data.headline}</h1>
          <p className="vertical-hero-sub">{data.sub}</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact-us" className="btn btn-cyan btn-lg">
              Get a Demo <ArrowRight size={16} />
            </Link>
            <Link to="/case-studies" className="btn btn-ghost-white btn-lg">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm" style={{ background: 'var(--color-gray-50)', borderBottom: '1px solid var(--color-gray-100)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {data.stats.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', lineHeight: 1.1, marginBottom: '0.35rem' }}>{s.val}</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      {data.segments.map((seg, i) => (
        <section key={i} className={`section ${i % 2 === 1 ? 'bg-light' : ''}`}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div className={i % 2 === 1 ? 'order-2' : ''}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {seg.title}
                </h2>
                <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{seg.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {seg.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={seg.link} className="btn btn-primary btn-md">
                  Learn More <ArrowRight size={15} />
                </Link>
              </div>
              <div className={i % 2 === 1 ? 'order-1' : ''} style={{
                background: 'linear-gradient(135deg, var(--color-navy) 0%, #1a1c45 100%)',
                borderRadius: 'var(--radius-2xl)',
                padding: '2.5rem',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1rem',
              }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {data.badge} · Vorro Platform
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: '#fff', lineHeight: 1.3 }}>{seg.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {seg.bullets.map((b, j) => (
                    <div key={j} style={{
                      background: 'rgba(255,255,255,0.07)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.6rem 0.875rem',
                      fontSize: 'var(--text-sm)',
                      color: 'rgba(255,255,255,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--color-cyan)', borderRadius: '50%', flexShrink: 0 }} />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to See It for Your Industry?</h2>
              <p>Talk to a Vorro integration expert about your specific environment and requirements.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Schedule a Demo <ArrowRight size={18} />
                </Link>
                <Link to="/case-studies" className="btn btn-ghost-white btn-xl">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
