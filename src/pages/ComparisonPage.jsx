import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

const competitorData = {
  redox: {
    name: 'Redox',
    title: 'Vorro vs. Redox',
    headline: 'A Flexible Alternative Without the Lock-In',
    highlights: [
      { title: 'No-Code Integration Engine', desc: 'Create and manage complex interfaces with drag-and-drop simplicity. No scripting or custom development needed.' },
      { title: 'Faster Time to Deployment', desc: 'Launch in weeks, not months. Pre-built templates and real-time tools accelerate every step.' },
      { title: 'Any-to-Any Data Mapping', desc: 'Go beyond fixed JSON outputs. BridgeGate supports HL7, FHIR, X12, XML, flat files, and custom schemas.' },
      { title: 'Fully Managed Option', desc: 'Offload infrastructure and support while keeping full control and visibility of every connection.' },
    ],
    faqs: [
      { q: 'How does Vorro differ from API-focused platforms like Redox?', a: 'Redox offers developer APIs and uses a proprietary JSON data model. Vorro provides a no-code platform with full-format flexibility, including HL7, FHIR, and custom formats — plus a fully managed service option.' },
      { q: 'Can we use Vorro alongside or instead of Redox?', a: 'Absolutely. Many clients use Vorro to replace legacy integrations or scale beyond the limits of fixed-framework platforms. Vorro is fully vendor-neutral.' },
      { q: 'Do we need internal developers to use Vorro?', a: 'No. Most clients roll out integrations using internal business analysts, operations teams, or IT leads without needing dedicated developers.' },
      { q: 'Is Vorro HIPAA compliant?', a: 'Yes. Vorro is HIPAA-compliant with secure data transmission, full audit trails, user permissions, and real-time monitoring across all environments.' },
    ],
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
    highlights: [
      { title: '100% No-Code Solution', desc: 'No Java. No DataWeave. Build and deploy integrations with an intuitive drag-and-drop interface.' },
      { title: 'Transparent and Predictable Pricing', desc: 'Avoid vCores, usage-based billing, and volume fees. Vorro scales without surprise costs.' },
      { title: 'Built for Healthcare', desc: 'HL7, FHIR, CCD, and other standards supported natively. No add-ons or custom dev work needed.' },
      { title: 'Lighter, Faster Infrastructure', desc: 'Vorro runs lean and deploys quickly, scaling with your data needs — not your CPU budget.' },
    ],
    faqs: [
      { q: 'Does Vorro support event-driven and batch workflows?', a: 'Yes. Vorro supports both event-driven and batch-based workflows with full external system, API, and file transfer support — all built through a no-code interface.' },
      { q: 'What is the implementation time compared to MuleSoft?', a: 'Most teams go live within weeks using our pre-built templates — vs. months for a typical MuleSoft deployment.' },
      { q: 'Does Vorro support on-premise deployment?', a: 'Yes. Vorro supports cloud, hybrid, and on-premise deployment models — you choose the fit.' },
      { q: 'Is Vorro HIPAA-compliant?', a: 'Yes. Vorro is fully HIPAA-compliant with secure data transmission, audit trails, user permissions, and real-time monitoring across all environments.' },
    ],
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
    highlights: [
      { title: 'No-Code Integration Engine', desc: 'Build, test, and deploy complex integrations without writing a single line of code.' },
      { title: 'Rapid Go-Live', desc: 'Go from planning to production in weeks, thanks to pre-built templates and mapping accelerators.' },
      { title: 'Managed or DIY', desc: 'Choose how hands-on you want to be. Vorro supports both internal teams and full-service delivery.' },
      { title: 'Cost Predictability', desc: "Unlike legacy engines, Vorro's pricing model scales with you. No hidden fees for interfaces or licenses." },
    ],
    faqs: [
      { q: 'Do I need Java or developer experience to use Vorro?', a: 'No. Our drag-and-drop tools let analysts and ops teams manage interfaces without developer support.' },
      { q: 'Can Vorro replace an existing Rhapsody deployment?', a: 'Absolutely. We frequently migrate legacy engines to Vorro to reduce overhead and speed up workflows.' },
      { q: "What's included in the managed service model?", a: 'Ongoing monitoring, interface updates, vendor coordination, and optimization. Our team handles the work while you keep full visibility and control.' },
      { q: 'Is Vorro only for healthcare?', a: 'Vorro is purpose-built for healthcare but flexible enough to integrate with any third-party ERP, EMR, CRM, or vendor system.' },
    ],
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
    highlights: [
      { title: '100% No-Code Solution', desc: 'Build and deploy interfaces with an intuitive, visual canvas. No Java. No custom scripts.' },
      { title: 'Transparent and Predictable Pricing', desc: 'No vCores, opaque usage fees, or surprise charges. Scale confidently with Vorro.' },
      { title: 'Built for Healthcare', desc: 'HL7 v2, FHIR, CCD/C-CDA, X12/EDI, flat files, and custom models supported natively.' },
      { title: 'Fully Managed Option', desc: 'Let our team handle implementation, monitoring, maintenance, and enhancements so yours can focus on care.' },
    ],
    faqs: [
      { q: "What's the difference between Vorro and Datavant?", a: 'Datavant specializes in data connectivity and privacy-preserving linkage for analytics. Vorro is a full EiPaaS managing both real-time and batch workflows for operational data exchange across HL7, FHIR, and X12/EDI.' },
      { q: 'Can Vorro connect directly to EMRs and send data back in real time?', a: 'Yes. Vorro enables bi-directional communication with EMRs, payers, pharmacies, and digital health apps. Datavant focuses primarily on outbound extracts.' },
      { q: 'Does Vorro support tokenized datasets from Datavant?', a: "Absolutely. Vorro can ingest Datavant's tokenized or standardized datasets, transform them, and route them to any downstream system using HL7, FHIR, X12, or APIs." },
      { q: 'Is Vorro a true integration engine?', a: 'Yes. Vorro is a full-fledged EiPaaS (Enterprise Integration Platform as a Service) that manages both real-time and batch workflows without coding. Datavant specializes in data extraction and tokenization.' },
    ],
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
    highlights: [
      { title: 'No Coding Required', desc: 'Configure HL7, FHIR, and other integrations without Java, custom scripts, or developer effort.' },
      { title: 'Lower Total Cost of Ownership', desc: 'Predictable, scalable pricing with no surprise charges for support, features, or fixes.' },
      { title: 'Built for Healthcare', desc: 'Supports HL7, FHIR, CCD, X12, and custom healthcare models out of the box. No extra layers needed.' },
      { title: 'Fully Managed Option', desc: 'Let our team handle monitoring, maintenance, and enhancements so yours can stay focused on care.' },
    ],
    faqs: [
      { q: 'Do I need to write Java or scripts to use Vorro?', a: 'No. Vorro is a 100% no-code platform. Configure logic, mappings, and formats through a drag-and-drop interface.' },
      { q: 'What if we already use Mirth? Can Vorro work alongside it?', a: 'Yes. We often help clients transition gradually or complement their existing tools at their own pace.' },
      { q: 'Does Vorro support all the standards Mirth does?', a: 'Yes, and more. We support HL7 v2/v3, FHIR, X12, CCD, flat files, XML, JSON, and custom schemas out of the box — no plugins required.' },
      { q: 'Is there a learning curve for Vorro?', a: 'Minimal. Most teams go live within weeks using our pre-built templates, without adding a single developer.' },
    ],
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

      {/* Why Vorro Stands Out */}
      {data.highlights && (
        <section className="section bg-light">
          <div className="container" style={{ maxWidth: '960px' }}>
            <div className="section-header centered" style={{ marginBottom: '2.5rem' }}>
              <div className="eyebrow">Why Switch</div>
              <h2>Why Vorro Stands Out</h2>
            </div>
            <div className="grid-2" style={{ gap: '1.25rem' }}>
              {data.highlights.map((h) => (
                <div key={h.title} className="card" style={{ padding: '1.75rem', borderTop: '3px solid var(--color-primary)' }}>
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>{h.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65 }}>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
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

      {/* FAQ */}
      {data.faqs && (
        <section className="section bg-light">
          <div className="container" style={{ maxWidth: '760px' }}>
            <div className="section-header centered" style={{ marginBottom: '2.5rem' }}>
              <div className="eyebrow">FAQ</div>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.faqs.map((faq, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem 2rem' }}>
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>{faq.q}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>See Why Healthcare Leaders Choose Vorro</h2>
              <p>Get a custom demo tailored to your specific integration environment and challenges.</p>
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
