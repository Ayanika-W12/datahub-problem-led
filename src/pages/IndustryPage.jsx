import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const industries = {
  healthcare: {
    badge: 'Healthcare',
    headline: 'The Data Infrastructure Behind Modern Healthcare',
    sub: 'Vorro powers health systems, HIEs, payers, providers, and specialty networks — connecting clinical, financial, and operational data across every system in your environment.',
    color: 'var(--color-primary)',
    colorHex: '#7c3aed',
    colorLight: '#f5f3ff',
    colorMid: '#ddd6fe',
    segments: [
      {
        tag: '01',
        title: 'Health Systems & Hospitals',
        desc: 'Unify data across facilities, departments, and care settings. Connect Epic, Cerner, and every downstream system into a single governed data layer — with full audit trail and real-time alerting.',
        bullets: ['Multi-facility HL7 and FHIR routing', 'Bed management and ADT event streaming', 'Revenue cycle and CDI integration', 'Population health data pipelines'],
        link: '/solutions/emr-integrations',
      },
      {
        tag: '02',
        title: 'Health Information Exchanges',
        desc: 'Vorro powers statewide HIEs including Contexture and WISHIN. Our platform handles the high-volume, multi-participant data flows that define HIE operations at scale.',
        bullets: ['Carequality and CommonWell gateway support', 'TEFCA-ready QHIN infrastructure', 'Per-participant consent enforcement', 'Public health reporting (ELR, syndromic)'],
        link: '/solutions/hie-integrations',
      },
      {
        tag: '03',
        title: 'Payers & Health Plans',
        desc: 'Automate prior auth, eligibility, claims, and payer-to-payer data exchange — fully compliant with CMS-0057-F and the 2026 Prior Auth Final Rule deadlines.',
        bullets: ['FHIR R4 Patient, Provider & Payer-to-Payer APIs', 'EDI X12 claims, 270/271 eligibility', 'Denial management with root cause AI', 'Stars and HEDIS reporting pipelines'],
        link: '/solutions/payer-integrations',
      },
      {
        tag: '04',
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
    platform: [
      { label: 'HL7 & FHIR', to: '/platform/interfacing' },
      { label: 'Governance & Compliance', to: '/platform/governance-compliance' },
      { label: 'AI Readiness', to: '/platform/ai-readiness' },
      { label: 'AI-Driven Analytics & Insights', to: '/platform/analytics-nlp' },
    ],
  },
  ecommerce: {
    badge: 'eCommerce & Retail',
    headline: 'Unified Data Across Every Channel, Platform, and Warehouse',
    sub: "Vorro's enterprise integration platform connects your eCommerce platforms, ERP systems, order management, inventory, and customer data — eliminating silos and enabling real-time operational intelligence.",
    color: 'var(--color-cyan)',
    colorHex: '#06b6d4',
    colorLight: '#ecfeff',
    colorMid: '#a5f3fc',
    segments: [
      {
        tag: '01',
        title: 'Platform & Storefront Unification',
        desc: 'Merging two retail businesses or expanding to new sales channels? Vorro unifies product catalogs, order flows, and customer records across Shopify, Salesforce Commerce, Magento, WooCommerce, and proprietary platforms.',
        bullets: ['Product catalog normalization and sync', 'Order management system integration', 'Multi-storefront inventory unification', 'Customer identity matching and deduplication'],
        link: '/solutions/data-quality',
      },
      {
        tag: '02',
        title: 'ERP & Fulfillment Integration',
        desc: 'Connect your eCommerce front-end to SAP, NetSuite, Oracle, or Microsoft Dynamics — with real-time inventory, order, and fulfillment data flowing bidirectionally without manual reconciliation.',
        bullets: ['ERP bidirectional data sync', 'Warehouse management system (WMS) connectors', 'Return and refund workflow automation', '3PL and fulfillment network integration'],
        link: '/solutions/pipeline-auto-healing',
      },
      {
        tag: '03',
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
    platform: [
      { label: 'Pipeline Auto-Healing', to: '/solutions/pipeline-auto-healing' },
      { label: 'Data Quality', to: '/solutions/data-quality' },
      { label: 'Data Lake', to: '/solutions/data-lake' },
      { label: 'Workflow Orchestration', to: '/platform/workflow-orchestration' },
    ],
  },
  'hr-tech': {
    badge: 'HR Tech',
    headline: 'HRIS, Payroll, and Benefits Data — Connected and Compliant',
    sub: "Vorro's integration platform eliminates the data chaos between your HR systems — from HRIS and payroll to benefits portals and compliance reporting — so your workforce data is always accurate, governed, and audit-ready.",
    color: '#F59E0B',
    colorHex: '#F59E0B',
    colorLight: '#fffbeb',
    colorMid: '#fde68a',
    segments: [
      {
        tag: '01',
        title: 'HRIS & Payroll Integration',
        desc: 'Connect Workday, ADP, SAP SuccessFactors, Ceridian Dayforce, and UKG into a unified workforce data layer — eliminating payroll errors, eliminating manual reconciliation, and ensuring every system reflects the same source of truth.',
        bullets: ['Bidirectional HRIS and payroll sync', 'New hire and termination event automation', 'Compensation and benefit deduction accuracy', 'Multi-EIN and multi-entity payroll data unification'],
        link: '/solutions/data-management',
        citation: 'American Payroll Association. "Payroll Benchmarking Survey 2023."',
      },
      {
        tag: '02',
        title: 'Benefits Administration & Carrier Feeds',
        desc: 'Automate enrollment data flows between your HRIS and every benefits carrier — health, dental, vision, 401k, FSA, HSA, and voluntary products — using EDI 834 and modern API connectors.',
        bullets: ['EDI 834 carrier feed automation', 'Open enrollment event orchestration', 'Life event trigger processing (marriage, birth, address)', 'Benefits reconciliation and variance detection'],
        link: '/solutions/pipeline-auto-healing',
        citation: 'SHRM. "Employee Benefits Survey 2023."',
      },
      {
        tag: '03',
        title: 'Workforce Analytics & Reporting',
        desc: 'Build a unified workforce data lake combining headcount, turnover, compensation, performance, and L&D data — enabling real-time analytics and board-level reporting without manual data pulls.',
        bullets: ['Headcount and attrition dashboards', 'Compensation equity and pay gap analysis pipelines', 'Manager and team performance data unification', 'L&D completion and certification tracking'],
        link: '/solutions/data-lake',
        citation: 'Gartner. "Market Guide for Workforce Analytics 2023."',
      },
      {
        tag: '04',
        title: 'Compliance & Labor Reporting Automation',
        desc: 'Automate ACA 1094/1095 reporting, EEO-1 filing, ERISA compliance, and state labor law reporting — with full audit trails, error flagging, and deadline alerting built into every pipeline.',
        bullets: ['ACA 1094/1095-C filing data pipelines', 'EEO-1 and VETS-4212 report generation', 'ERISA and DOL reporting automation', 'State leave and FMLA compliance data flows'],
        link: '/solutions/data-quality',
        citation: 'U.S. Department of Labor. "ERISA Enforcement Report 2023."',
      },
    ],
    stats: [
      { val: '62%', label: 'of HR leaders cite data integration as their top challenge', citation: 'Source: SHRM. "State of HR Technology 2023."' },
      { val: '$1.5M', label: 'average annual cost of payroll errors per enterprise', citation: 'Source: American Payroll Association. "Payroll Benchmarking Survey 2023."' },
      { val: '4 wks', label: 'avg. time to first live integration with Vorro' },
      { val: '300%', label: 'average client ROI' },
    ],
    platform: [
      { label: 'Workflow Orchestration', to: '/platform/workflow-orchestration' },
      { label: 'Governance & Compliance', to: '/platform/governance-compliance' },
      { label: 'Data Lake', to: '/solutions/data-lake' },
      { label: 'Pipeline Auto-Healing', to: '/solutions/pipeline-auto-healing' },
    ],
  },
  insurance: {
    badge: 'Insurance',
    headline: 'Claims, Eligibility, Policy, and Member Data — Automated',
    sub: "Vorro's integration platform handles the complex, high-volume data flows that define insurance operations — from real-time eligibility verification to policy lifecycle management to claims processing.",
    color: 'var(--color-navy)',
    colorHex: '#0f1035',
    colorLight: '#f0f1ff',
    colorMid: '#c7d2fe',
    segments: [
      {
        tag: '01',
        title: 'Claims Processing & Automation',
        desc: 'Automate claims intake, adjudication, and payment workflows using EDI X12 837/835 and modern API-based integration — reducing manual processing time and error rates.',
        bullets: ['EDI X12 837P/I/D claims processing', 'ERA/EFT 835 payment automation', 'Claims scrubbing and validation rules', 'Denial root cause classification and routing'],
        link: '/solutions/payer-integrations',
      },
      {
        tag: '02',
        title: 'Eligibility & Benefits Verification',
        desc: 'Real-time eligibility checks against 250+ payers and health plans — using EDI 270/271 and FHIR R4 APIs — reducing manual verification calls by up to 80%.',
        bullets: ['Real-time 270/271 eligibility transactions', 'FHIR Patient Access API integration', 'Benefits and coverage detail extraction', 'Member portal data synchronization'],
        link: '/solutions/payer-integrations',
      },
      {
        tag: '03',
        title: 'Policy & Member Lifecycle Management',
        desc: 'Connect your policy administration systems, CRM, and member portals into a unified data layer — with event-driven automation for enrollments, renewals, and changes.',
        bullets: ['Policy administration system connectors', 'Member enrollment and disenrollment events', 'Life event trigger automation', 'Agent and broker portal data sync'],
        link: '/solutions/data-management',
      },
      {
        tag: '04',
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
    platform: [
      { label: 'EDI & FHIR Interfacing', to: '/platform/interfacing' },
      { label: 'Governance & Compliance', to: '/platform/governance-compliance' },
      { label: 'Pipeline Auto-Healing', to: '/solutions/pipeline-auto-healing' },
      { label: 'Data Management', to: '/solutions/data-management' },
    ],
  },
};

export default function IndustryPage({ industry }) {
  const data = industries[industry];
  if (!data) return null;

  const hasFourSegments = data.segments.length === 4;

  return (
    <main>
      {/* HERO */}
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>{data.badge}</div>
          <h1 className="vertical-hero-headline">{data.headline}</h1>
          <p className="vertical-hero-sub">{data.sub}</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/contact-us" className="btn btn-cyan btn-md">
              Talk to an Expert <ArrowRight size={16} />
            </Link>
            <Link to="/case-studies" className="btn btn-ghost-white btn-md">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section style={{ borderBottom: '1px solid var(--color-gray-100)' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${data.stats.length}, 1fr)` }}>
            {data.stats.map((s, i) => (
              <div key={s.label} style={{
                padding: '2.5rem 2rem',
                textAlign: 'center',
                borderRight: i < data.stats.length - 1 ? '1px solid var(--color-gray-100)' : 'none',
                background: i % 2 === 1 ? 'var(--color-gray-50)' : '#fff',
              }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'var(--font-bold)', color: data.color, lineHeight: 1, marginBottom: '0.4rem' }}>
                  {s.val}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">What We Power</div>
            <h2>Built for Every Part of Your Organization</h2>
            <p>One platform. Multiple entry points. Purpose-built for each team's specific integration needs.</p>
          </div>

          {/* Featured first segment */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: hasFourSegments ? '1.4fr 1fr' : '1fr 1fr',
            gap: '1.5rem',
            marginTop: '3rem',
          }}>
            {/* Large featured card */}
            <div style={{
              background: '#fff',
              border: '1px solid var(--color-gray-100)',
              borderRadius: 'var(--radius-2xl)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
              borderTop: `3px solid ${data.color}`,
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                background: data.colorLight,
                border: `1px solid ${data.colorMid}`,
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-bold)',
                color: data.color,
                marginBottom: '1.25rem',
                flexShrink: 0,
              }}>
                {data.segments[0].tag}
              </div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.875rem', lineHeight: 1.3 }}>
                {data.segments[0].title}
              </h3>
              <p style={{ color: 'var(--color-gray-500)', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: 'var(--text-sm)' }}>
                {data.segments[0].desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem', flex: 1 }}>
                {data.segments[0].bullets.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)' }}>
                    <CheckCircle2 size={15} style={{ color: data.color, flexShrink: 0, marginTop: '2px' }} />
                    {b}
                  </li>
                ))}
              </ul>
              <Link to={data.segments[0].link} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-semibold)',
                color: data.color,
                textDecoration: 'none',
              }}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right column: remaining segments stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {data.segments.slice(1, hasFourSegments ? 2 : 3).map((seg) => (
                <div key={seg.tag} style={{
                  background: '#fff',
                  border: '1px solid var(--color-gray-100)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                  borderTop: `3px solid ${data.color}`,
                  flex: 1,
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2rem',
                    height: '2rem',
                    background: data.colorLight,
                    border: `1px solid ${data.colorMid}`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-bold)',
                    color: data.color,
                    marginBottom: '1rem',
                  }}>
                    {seg.tag}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {seg.title}
                  </h3>
                  <p style={{ color: 'var(--color-gray-500)', lineHeight: 1.65, marginBottom: '1rem', fontSize: 'var(--text-sm)' }}>
                    {seg.desc}
                  </p>
                  <Link to={seg.link} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-semibold)',
                    color: data.color,
                    textDecoration: 'none',
                  }}>
                    Learn More <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row for 4-segment industries */}
          {hasFourSegments && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
              {data.segments.slice(2).map((seg) => (
                <div key={seg.tag} style={{
                  background: '#fff',
                  border: '1px solid var(--color-gray-100)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                  borderTop: `3px solid ${data.color}`,
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2rem',
                    height: '2rem',
                    background: data.colorLight,
                    border: `1px solid ${data.colorMid}`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-bold)',
                    color: data.color,
                    marginBottom: '1rem',
                  }}>
                    {seg.tag}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {seg.title}
                  </h3>
                  <p style={{ color: 'var(--color-gray-500)', lineHeight: 1.65, marginBottom: '1rem', fontSize: 'var(--text-sm)' }}>
                    {seg.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {seg.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)' }}>
                        <CheckCircle2 size={14} style={{ color: data.color, flexShrink: 0, marginTop: '2px' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to={seg.link} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-semibold)',
                    color: data.color,
                    textDecoration: 'none',
                  }}>
                    Learn More <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PLATFORM STRIP */}
      <section className="section-sm" style={{ background: 'var(--color-navy)', borderTop: 'none' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                Powered by Vorro
              </div>
              <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: '#fff' }}>
                The platform underneath every integration
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {data.platform.map(p => (
                <Link key={p.label} to={p.to} style={{
                  padding: '0.5rem 1.1rem',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'background 0.2s',
                }}>
                  <Zap size={12} style={{ opacity: 0.6 }} />
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to See It for Your Industry?</h2>
              <p>Talk to a Vorro integration expert about your specific environment and requirements.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Talk to an Expert <ArrowRight size={18} />
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
