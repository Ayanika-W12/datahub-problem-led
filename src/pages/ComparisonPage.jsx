import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

const competitorData = {
  redox: {
    name: 'Redox',
    title: 'Vorro vs. Redox',
    headline: 'More Than an API Layer. A Complete Healthcare Data Platform.',
    sub: 'Redox provides API connectivity. Vorro provides API connectivity plus NLP analytics, compliance automation, version control, AI readiness, and workflow orchestration — all in one platform.',
    features: [
      { feature: 'HL7 / FHIR Connectivity', vorro: true, them: true },
      { feature: 'EDI X12 (Claims, Eligibility, Prior Auth)', vorro: true, them: false },
      { feature: 'Clinical Conversational AI & Concept Extraction', vorro: true, them: false },
      { feature: 'Natural Language Reporting', vorro: true, them: false },
      { feature: 'HIPAA Compliance Automation', vorro: true, them: 'Partial' },
      { feature: 'Data Lineage & Version Control', vorro: true, them: false },
      { feature: 'AI-Ready Data Lake (Bronze/Silver/Gold)', vorro: true, them: false },
      { feature: 'Workflow Orchestration (n8n + AI)', vorro: true, them: false },
      { feature: 'Dedicated Integration Engineers', vorro: true, them: false },
      { feature: 'Healthcare-Native (not adapted from generic iPaaS)', vorro: true, them: 'Partial' },
    ],
  },
  mulesoft: {
    name: 'Mulesoft',
    title: 'Vorro vs. Mulesoft',
    headline: 'Healthcare-Native. No Bloat. No Six-Figure Implementation.',
    sub: 'Mulesoft is a powerful general-purpose integration platform — but it wasn\'t built for healthcare. Vorro was.',
    features: [
      { feature: 'HL7 / FHIR Native Support', vorro: true, them: 'Connectors needed' },
      { feature: 'EDI X12 Healthcare Transactions', vorro: true, them: 'Add-on/custom' },
      { feature: 'HIPAA Compliance Automation', vorro: true, them: false },
      { feature: 'Clinical Conversational AI', vorro: true, them: false },
      { feature: 'Healthcare-Specific Data Lake', vorro: true, them: false },
      { feature: 'Time to First Integration', vorro: 'Days', them: 'Months' },
      { feature: 'Implementation Cost', vorro: 'Managed service included', them: '$200K+ typical SI cost' },
      { feature: 'Workflow Orchestration (AI-native)', vorro: true, them: false },
      { feature: 'Data Lineage & Versioning', vorro: true, them: 'Partial' },
    ],
  },
  rhapsody: {
    name: 'Rhapsody',
    title: 'Vorro vs. Rhapsody',
    headline: 'Modern, AI-Ready Integration vs. Legacy Middleware.',
    sub: 'Rhapsody is a legacy HL7 engine. Vorro is a modern, cloud-native platform that supports FHIR R4, AI workflows, and governance — without the complexity of legacy middleware.',
    features: [
      { feature: 'Cloud-Native Architecture', vorro: true, them: false },
      { feature: 'FHIR R4 Native Support', vorro: true, them: 'Limited' },
      { feature: 'AI-Powered Workflow Orchestration', vorro: true, them: false },
      { feature: 'No-Code / Low-Code Configuration', vorro: true, them: false },
      { feature: 'Clinical Conversational AI', vorro: true, them: false },
      { feature: 'Managed Service Option', vorro: true, them: false },
      { feature: 'Self-Healing Pipelines', vorro: true, them: false },
      { feature: 'HIPAA Compliance Automation', vorro: true, them: 'Manual' },
    ],
  },
  datavant: {
    name: 'Datavant',
    title: 'Vorro vs. Datavant',
    headline: 'Full Data Platform vs. Identity Matching Focus.',
    sub: 'Datavant specializes in patient identity matching and data linkage. Vorro covers the full data stack — integration, NLP, compliance, AI readiness, and workflow automation.',
    features: [
      { feature: 'Patient Identity Matching (MPI)', vorro: true, them: true },
      { feature: 'HL7 / FHIR Integration Layer', vorro: true, them: 'Partial' },
      { feature: 'Clinical Conversational AI & Structuring', vorro: true, them: false },
      { feature: 'Regulatory Compliance Automation', vorro: true, them: false },
      { feature: 'Workflow Orchestration', vorro: true, them: false },
      { feature: 'AI-Ready Data Lake', vorro: true, them: false },
      { feature: 'EDI X12 / Claims Processing', vorro: true, them: false },
      { feature: 'Data Lineage & Version Control', vorro: true, them: false },
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
          </div>
        </div>
      </section>

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
