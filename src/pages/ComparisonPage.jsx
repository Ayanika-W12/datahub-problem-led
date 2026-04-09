import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

const competitorData = {
  redox: {
    name: 'Redox',
    title: 'Vorro vs. Redox',
    headline: 'A Flexible Alternative Without the Lock-In',
    sub: "While Redox offers healthcare connectivity through APIs, it often relies on fixed data models, proprietary frameworks, and developer-heavy setup. Vorro's BridgeGate Platform gives you full control, zero-code onboarding, and the freedom to adapt your data workflows without writing custom integrations.",
    stat: { value: '45TB', label: 'processed in 44 hours — 1M complex CCDs/hr' },
    features: [
      { feature: 'Healthcare-Specific Platform', vorro: true, them: 'Via Redox Models' },
      { feature: 'Interface / Builder', vorro: 'No-code visual builder', them: 'Cloud dashboard + APIs' },
      { feature: 'HL7 v2 Support', vorro: true, them: true },
      { feature: 'FHIR Support', vorro: 'Native, no-code', them: 'Not native' },
      { feature: 'X12 / EDI Support', vorro: true, them: 'Converts to JSON only' },
      { feature: 'Message Transformation', vorro: 'Flexible, visual, no-code', them: 'Monitoring + retry' },
      { feature: 'HIPAA Compliance', vorro: 'Built-in', them: 'Partial' },
      { feature: 'Deployment Options', vorro: 'On-prem, hybrid, cloud', them: 'Cloud-based SaaS only' },
      { feature: 'Fully Managed Option', vorro: true, them: false },
      { feature: 'Pricing', vorro: 'Affordable, transparent', them: 'Usage-based, can escalate' },
    ],
  },
  mulesoft: {
    name: 'Mulesoft',
    title: 'Vorro vs. Mulesoft',
    headline: 'A Simpler, Smarter Alternative for Healthcare Integration',
    sub: "MuleSoft demands heavy infrastructure, steep learning curves, and developer-heavy tools like DataWeave. That complexity slows you down and drives up costs. Vorro is built for healthcare teams that need fast, secure integration — without the need for custom code or dedicated devs.",
    stat: { value: '5M+', label: 'monthly transactions, 70% cost savings vs in-house' },
    features: [
      { feature: 'Healthcare-Specific Platform', vorro: true, them: 'Generic, requires modeling' },
      { feature: 'Interface / Builder', vorro: 'Fully visual, no-code', them: 'Visual + code (DataWeave)' },
      { feature: 'HL7 v2 Support', vorro: 'Fully native', them: 'Requires connectors' },
      { feature: 'FHIR Support', vorro: 'Native, no-code', them: 'Requires custom implementation' },
      { feature: 'X12 / EDI Support', vorro: true, them: 'Native with Healthcare Toolkit' },
      { feature: 'HIPAA Compliance', vorro: 'Built-in, fully managed', them: 'Requires architecture setup' },
      { feature: 'Scalability', vorro: 'Highly scalable, cloud-native', them: 'Multi-cloud, high infra cost' },
      { feature: 'Deployment Options', vorro: 'On-prem, hybrid, cloud', them: 'Cloud, hybrid, on-prem' },
      { feature: 'Fully Managed Option', vorro: true, them: false },
      { feature: 'Pricing', vorro: 'Affordable, transparent', them: 'High cost — per core/API' },
    ],
  },
  rhapsody: {
    name: 'Rhapsody',
    title: 'Vorro vs. Rhapsody',
    headline: 'A Modern Integration Alternative Without the Overhead',
    sub: 'Rhapsody requires developer-driven scripting, long deployment cycles, and costly maintenance. Vorro offers a fully managed, no-code integration platform built for healthcare — simplifying complex mapping, reducing implementation time, and eliminating ongoing upkeep.',
    stat: { value: '99.9%', label: 'uptime, 100+ clinics connected — fully managed by Vorro' },
    features: [
      { feature: 'Healthcare-Specific Platform', vorro: true, them: true },
      { feature: 'Interface / Builder', vorro: 'No-code / low-code visual', them: 'GUI + scripting' },
      { feature: 'Primary Audience', vorro: 'Hospitals & HIEs, no dev teams', them: 'Enterprise IT / developers' },
      { feature: 'FHIR Support', vorro: 'Native, no-code', them: 'Script-based, limited' },
      { feature: 'X12 / EDI Support', vorro: true, them: 'Partial, plug-in based' },
      { feature: 'Message Transformation', vorro: 'Visual mapping, no-code', them: 'Scripting + filters' },
      { feature: 'Monitoring & Alerts', vorro: 'Real-time BAM dashboards', them: 'Logs, alerts, email triggers' },
      { feature: 'HIPAA Compliance', vorro: 'Built-in, fully managed', them: 'HIPAA-ready, manual config' },
      { feature: 'Fully Managed Option', vorro: true, them: false },
      { feature: 'Pricing', vorro: 'Affordable, competitive', them: 'Not competitive' },
    ],
  },
  datavant: {
    name: 'Datavant',
    title: 'Vorro vs. Datavant',
    headline: 'A Fully Managed Integration Alternative',
    sub: "Datavant focuses on data connectivity — tokenization, record retrieval, and standardized EHR extraction. Vorro is an integration platform designed for the day-to-day operational movement of healthcare data across HL7 v2, FHIR, X12/EDI, and APIs — without requiring code or a developer-heavy middleware stack.",
    stat: { value: '5M+', label: 'monthly transactions, 70% cost savings vs in-house' },
    features: [
      { feature: 'Primary Use Case', vorro: 'Full EiPaaS platform', them: 'Data connectivity & tokenization' },
      { feature: 'Healthcare-Specific', vorro: true, them: true },
      { feature: 'HL7 v2 Support', vorro: 'Native, no-code', them: 'Limited' },
      { feature: 'FHIR Support', vorro: 'Native, bi-directional', them: 'EHR extraction focused' },
      { feature: 'X12 / EDI Support', vorro: true, them: false },
      { feature: 'Message Transformation', vorro: 'Fully visual, no-code', them: false },
      { feature: 'Monitoring & Alerts', vorro: 'Real-time dashboards & alerts', them: 'Basic' },
      { feature: 'Deployment Options', vorro: 'Cloud, hybrid, on-prem', them: 'Cloud-based' },
      { feature: 'Fully Managed Option', vorro: true, them: false },
      { feature: 'Pricing', vorro: 'Predictable, transparent', them: 'Opaque, usage-based' },
    ],
  },
  mirth: {
    name: 'Mirth Connect',
    title: 'Vorro vs. Mirth',
    headline: 'A Modern Alternative to Open-Source Complexity',
    sub: "While Mirth Connect is a widely-used open-source HL7 engine, it requires significant technical effort to implement, secure, and maintain. Vorro offers a modern, fully managed platform designed for speed, flexibility, and scalability — with zero-code onboarding and no Java required.",
    stat: { value: '3M+', label: 'daily transactions — 500+ hospitals & clinics, zero added devs' },
    features: [
      { feature: 'Healthcare-Specific Platform', vorro: true, them: true },
      { feature: 'Interface / Builder', vorro: 'Fully visual, no-code', them: 'GUI + JavaScript/XSLT scripting' },
      { feature: 'Primary Audience', vorro: 'Hospitals & HIEs, no dev teams', them: 'Startups / small IT teams' },
      { feature: 'HL7 v2 Support', vorro: 'Fully supported', them: 'Strong (manual config)' },
      { feature: 'FHIR Support', vorro: 'Native, no-code', them: 'Script-based' },
      { feature: 'X12 / EDI Support', vorro: 'Native, no-code', them: 'Manual setup / custom code' },
      { feature: 'HIPAA Compliance', vorro: 'Built-in, fully managed', them: 'User-configured, HIPAA-capable' },
      { feature: 'Scalability', vorro: 'Highly scalable, cloud-native', them: 'Medium — on-prem by default' },
      { feature: 'Fully Managed Option', vorro: true, them: 'Paid support only' },
      { feature: 'Open Source', vorro: false, them: 'Core only (paid for enterprise)' },
    ],
  },
};

export default function ComparisonPage({ competitor }) {
  const data = competitorData[competitor] || competitorData.redox;

  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>
            {data.title}
          </div>
          <h1 className="vertical-hero-headline">{data.headline}</h1>
          <p className="vertical-hero-sub">{data.sub}</p>
          <div className="vertical-hero-actions">
            <Link to="/contact-us" className="btn btn-cyan btn-lg">
              See Vorro in Action <ArrowRight size={16} />
            </Link>
            <Link to="/case-studies" className="btn btn-ghost-white btn-lg">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Proof stat */}
      {data.stat && (
        <div style={{ background: 'var(--color-navy)', padding: '1.5rem 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 'var(--font-bold)', color: 'var(--color-cyan)' }}>
              {data.stat.value}
            </span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.7)', maxWidth: '320px' }}>
              {data.stat.label}
            </span>
            <Link to="/case-studies" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-cyan)', fontWeight: 'var(--font-semibold)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              Read case study <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      )}

      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header centered" style={{ marginBottom: '3rem' }}>
            <div className="eyebrow">Feature Comparison</div>
            <h2>Vorro vs. {data.name}</h2>
          </div>

          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th style={{ textAlign: 'center' }}>Vorro</th>
                <th style={{ textAlign: 'center' }}>{data.name}</th>
              </tr>
            </thead>
            <tbody>
              {data.features.map((row) => (
                <tr key={row.feature}>
                  <td style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-navy)' }}>
                    {row.feature}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {row.vorro === true ? (
                      <span className="compare-check">✓</span>
                    ) : typeof row.vorro === 'string' ? (
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>{row.vorro}</span>
                    ) : (
                      <span className="compare-cross">✕</span>
                    )}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {row.them === true ? (
                      <span className="compare-check">✓</span>
                    ) : typeof row.them === 'string' ? (
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>{row.them}</span>
                    ) : (
                      <span className="compare-cross">✕</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(172,65,151,0.06)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(172,65,151,0.15)' }}>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', lineHeight: 1.65, textAlign: 'center' }}>
              * This comparison is based on publicly available information and Vorro's assessment.
              Competitor capabilities may vary by plan, region, or configuration.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>See Why Healthcare Leaders Choose Vorro</h2>
              <p>Get a custom demo tailored to your specific integration environment and challenges.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Schedule a Demo <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
