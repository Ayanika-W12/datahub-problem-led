import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const solutions = [
  { title: 'EMR Integrations', sub: 'Epic, Cerner, Athena, and beyond', to: '/solutions/emr-integrations', tags: ['HL7', 'FHIR', 'Epic', 'Cerner'], desc: 'Connect any EMR to your data ecosystem cleanly, securely, and without expensive custom work. Vorro handles every interface format — HL7 v2, FHIR R4, and proprietary APIs.' },
  { title: 'HIE Integrations', sub: 'Health information exchange connectivity', to: '/solutions/hie-integrations', tags: ['HIE', 'HL7', 'FHIR', 'CommonWell'], desc: 'Vorro connects health systems, ambulatory networks, and post-acute providers to any HIE — with real-time data normalization and governance built in.' },
  { title: 'Payer Integrations', sub: 'Prior auth, eligibility, claims', to: '/solutions/payer-integrations', tags: ['EDI X12', 'Prior Auth', 'FHIR', '270/271'], desc: 'Automate eligibility verification, prior authorization, and claims status workflows between providers and payers using FHIR APIs and EDI X12 transactions.' },
  { title: 'Pharmacy Integrations', sub: 'ePrescribing and pharmacy data', to: '/solutions/pharmacy-integrations', tags: ['NCPDP', 'ePrescribing', '340B', 'PBM'], desc: 'Connect to any pharmacy system, PBM, or 340B administrator using NCPDP SCRIPT, D.0, and proprietary formats — with full audit trail.' },
  { title: 'Data Quality', sub: 'Clean, governed, accurate data', to: '/solutions/data-quality', tags: ['MPI', 'Deduplication', 'Normalization', 'SLAs'], desc: 'Automated data quality management including patient deduplication (MPI), terminology normalization, and data quality SLAs with alerting.' },
  { title: 'Data Lake', sub: 'Bronze-Silver-Gold architecture', to: '/solutions/data-lake', tags: ['Azure', 'AWS', 'Snowflake', 'dbt'], desc: 'Purpose-built healthcare data lake architecture that takes you from raw HL7/FHIR ingest through cleansing, normalization, and ML-ready gold layer.' },
  { title: 'Pipeline Auto-Healing', sub: 'Self-healing data pipelines', to: '/solutions/pipeline-auto-healing', tags: ['Monitoring', 'Auto-Retry', 'Alerting', 'SLA'], desc: 'Data pipelines that detect failures, retry automatically, and alert your team before a data issue becomes a patient safety or compliance incident.' },
  { title: 'Data Management', sub: 'Secure, unified data governance', to: '/solutions/data-management', tags: ['Governance', 'HIPAA', 'PHI', 'Lineage'], desc: 'Comprehensive data governance including lineage, access controls, PHI masking, and audit trails — covering every data element across your estate.' },
];

export default function Solutions() {
  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Solutions</div>
          <h1 className="vertical-hero-headline">
            Healthcare Data Integration Solutions<br />Built for the Real World
          </h1>
          <p className="vertical-hero-sub">
            From EMR connectivity to AI-ready data lakes — Vorro covers the full spectrum of
            healthcare data integration challenges with production-proven solutions.
          </p>
          <div className="vertical-hero-actions">
            <Link to="/contact-us" className="btn btn-cyan btn-lg">
              Get a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {solutions.map((sol) => (
              <Link key={sol.title} to={sol.to} style={{ textDecoration: 'none' }} className="card-feature">
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                  {sol.title}
                </h3>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 'var(--font-semibold)', marginBottom: '0.875rem' }}>
                  {sol.sub}
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {sol.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {sol.tags.map((t) => (
                    <span key={t} className="tag tag-primary">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Not Sure Where to Start?</h2>
              <p>Our integration engineers will map your current environment and recommend the fastest path to value.</p>
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
