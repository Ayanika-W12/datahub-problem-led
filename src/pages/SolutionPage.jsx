import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const solutions = {
  'emr-integrations': {
    title: 'EMR Integrations',
    headline: 'Connect Every EHR. No Rip-and-Replace.',
    sub: 'Vorro bridges Epic, Cerner, Athena, Meditech, and 40+ other EHR systems with your data ecosystem — using native FHIR R4, HL7 v2, and API-based integrations that go live in weeks.',
    eyebrow: 'Solutions',
    color: 'primary',
    tags: ['Epic MyChart', 'Oracle Cerner', 'Athenahealth', 'Meditech Expanse', 'eClinicalWorks', 'HL7 v2 / FHIR R4'],
    sections: [
      {
        heading: 'Every Major EHR. One Integration Layer.',
        body: "Healthcare organizations use an average of 4+ different EHR systems across departments and facilities. Vorro's pre-built EHR connectors eliminate the months of custom development that typically follow each acquisition or partnership.",
        bullets: [
          'Epic FHIR R4 API + HL7 ADT, ORM, ORU feeds',
          'Oracle Cerner ContinuousConnect + bulk FHIR export',
          'Athenahealth REST APIs + HL7 v2.x interfaces',
          'Meditech Expanse FHIR + Magic HL7 adapters',
          'eClinicalWorks FHIR + HL7 bridge',
          '40+ additional EHR connectors out of the box',
        ],
      },
      {
        heading: 'Go-Live in Weeks, Not Quarters',
        body: "Traditional EHR integration projects take 6–18 months. Vorro's no-code interface engine and pre-mapped transformation templates reduce that to 2–6 weeks for most deployments.",
        bullets: [
          'Pre-built HL7 v2 to FHIR R4 transformation templates',
          'Visual mapping interface — no code required',
          'Automated message validation and error routing',
          'Real-time and batch mode support',
          'Bi-directional data flow across all EHR types',
        ],
      },
      {
        heading: 'Built for Enterprise Compliance',
        body: 'Every EHR integration runs through Vorro\'s HIPAA-compliant data layer with full audit logging, PHI de-identification options, and role-based access controls.',
        bullets: [
          'End-to-end encryption in transit and at rest',
          'HIPAA BAA included with every deployment',
          'Full HL7 audit trail and message replay',
          'ONC 21st Century Cures Act-compliant FHIR APIs',
          'RBAC with clinician, admin, and analytics roles',
        ],
      },
    ],
    cta: { label: 'See EMR Integration in Action', to: '/contact-us' },
  },
  'hie-integrations': {
    title: 'HIE Integrations',
    headline: 'Network-Wide Interoperability. Real-Time.',
    sub: 'Vorro powers the data infrastructure of regional and statewide Health Information Exchanges — connecting hospitals, clinics, payers, and public health agencies with real-time HL7, FHIR, and Direct Trust messaging.',
    eyebrow: 'Solutions',
    color: 'cyan',
    tags: ['Carequality', 'CommonWell', 'TEFCA / QHIN', 'Direct Trust', 'HL7 v2', 'FHIR R4'],
    sections: [
      {
        heading: 'Trusted by HIEs Across the Country',
        body: "Vorro powers Contexture, WISHIN, and other leading Health Information Exchanges. Our platform is purpose-built for the high-volume, multi-participant data flows that define HIE operations.",
        bullets: [
          'Multi-directional HL7 ADT, CCD, CDA message routing',
          'FHIR R4 subscription and bulk data export',
          'Carequality and CommonWell gateway support',
          'TEFCA-ready QHIN onboarding infrastructure',
          'Direct Trust secure messaging integration',
          'Public health reporting (ELR, immunization, syndromic surveillance)',
        ],
      },
      {
        heading: 'Governance Built for Multi-Stakeholder Networks',
        body: "HIEs manage data access for dozens to hundreds of participants with different consent models, data sharing agreements, and regulatory requirements. Vorro's governance layer makes this manageable.",
        bullets: [
          'Per-participant data sharing policy enforcement',
          'Patient consent management and opt-out tracking',
          'Attribute-based access control (ABAC)',
          'Audit logs for every query, push, and pull event',
          'Regulatory reporting dashboards for state agencies',
        ],
      },
    ],
    cta: { label: 'Talk to an HIE Integration Expert', to: '/contact-us' },
  },
  'payer-integrations': {
    title: 'Payer Integrations',
    headline: 'Prior Auth. Eligibility. Claims. Automated.',
    sub: "Vorro's FHIR-native payer integration platform automates prior authorization, eligibility verification, claims processing, and payer-provider data exchange — reducing administrative burden by up to 70%.",
    eyebrow: 'Solutions',
    color: 'navy',
    tags: ['Prior Authorization', 'Eligibility Verification', 'Claims / EDI X12', 'CMS-0057-F', 'FHIR R4 APIs', 'PA FHIR IG'],
    sections: [
      {
        heading: 'The Full CMS Prior Auth Rule Stack',
        body: 'CMS-0057-F mandates FHIR R4 APIs for prior authorization, patient access, provider access, and payer-to-payer exchange. Vorro delivers all four — tested, certified, and deployable in weeks.',
        bullets: [
          'Patient Access API with USCDI v3 data model',
          'Provider Access API for real-time payer-provider exchange',
          'Payer-to-Payer API for member transition continuity',
          'Prior Authorization FHIR IG (PAS) implementation',
          'Decision timeline enforcement (72-hour urgent / 7-day standard)',
          'Automated denial reason codes with SNOMED CT mapping',
        ],
      },
      {
        heading: 'EDI X12 and Legacy Payer System Support',
        body: 'Not every payer is ready for FHIR. Vorro bridges EDI 270/271 eligibility, 278 prior auth, 837/835 claims — with automated translation to FHIR R4 for downstream analytics.',
        bullets: [
          'EDI X12 837P/I/D, 835, 270/271, 278 processing',
          'Real-time eligibility verification with 250+ payers',
          'Automated claims scrubbing and validation',
          'ERA/EFT posting automation',
          'Denial management with root cause classification',
        ],
      },
    ],
    cta: { label: 'Automate Your Payer Workflows', to: '/contact-us' },
  },
  'pharmacy-integrations': {
    title: 'Pharmacy Integrations',
    headline: 'ePrescribing, 340B, and PBM — Unified.',
    sub: "Vorro connects pharmacy data across ePrescribing networks, PBMs, specialty pharmacy, and 340B platforms — giving health systems and payers a complete, real-time view of medication management.",
    eyebrow: 'Solutions',
    color: 'green',
    tags: ['Surescripts', 'NCPDP SCRIPT', '340B', 'PBM Integration', 'Specialty Pharmacy', 'Medication Reconciliation'],
    sections: [
      {
        heading: 'End-to-End Pharmacy Data Integration',
        body: "Pharmacy data is fragmented across ePrescribing networks, PBMs, specialty pharmacy systems, and EHRs. Vorro unifies these streams into a single, actionable medication record.",
        bullets: [
          'Surescripts ePrescribing and RxChange integration',
          'NCPDP SCRIPT 10.6 and 2017071 support',
          'PBM claims data normalization and enrichment',
          'Specialty pharmacy prior auth automation',
          'Medication reconciliation across care settings',
          'Real-time drug interaction and formulary checking',
        ],
      },
      {
        heading: '340B Program Compliance Automation',
        body: "340B compliance requires tracking every covered entity purchase and split billing record. Vorro's 340B integration layer automates the data capture and audit trail that compliance demands.",
        bullets: [
          'Covered entity eligibility verification',
          'Contract pharmacy data reconciliation',
          'Split billing audit trail and documentation',
          'HRSA reporting and audit support',
          'Real-time 340B savings tracking dashboards',
        ],
      },
    ],
    cta: { label: 'Connect Your Pharmacy Data', to: '/contact-us' },
  },
  'data-quality': {
    title: 'Data Quality',
    headline: 'Clean Data. Better Care. Lower Risk.',
    sub: "Dirty data costs health systems an average of $1,950 per duplicate patient record per year — and the clinical risks are even higher. Vorro's data quality engine continuously monitors, cleanses, and deduplicates your healthcare data.",
    eyebrow: 'Solutions',
    color: 'orange',
    tags: ['Master Patient Index', 'Deduplication', 'Data Validation', 'FHIR Profiling', 'Anomaly Detection', 'Data Lineage'],
    sections: [
      {
        heading: 'Master Patient Index & Record Deduplication',
        body: "Duplicate patient records are the most dangerous form of healthcare data quality failure. Vorro's probabilistic and deterministic MPI engine identifies, links, and merges duplicates with configurable confidence thresholds.",
        bullets: [
          'Probabilistic and deterministic patient matching',
          'Configurable match confidence thresholds',
          'Automated merge with human review queue for edge cases',
          'EMPI integration with Epic, Cerner, and standalone systems',
          'Post-merge survivorship rule engine',
          'Real-time MPI updates on new ADT events',
        ],
      },
      {
        heading: 'Continuous Data Validation & Monitoring',
        body: "Data quality isn't a one-time project. Vorro continuously monitors your data pipelines for completeness, conformance, consistency, and timeliness — alerting before quality issues reach downstream systems.",
        bullets: [
          'FHIR R4 profile validation against US Core, Da Vinci IGs',
          'Completeness checks for required USCDI elements',
          'Statistical anomaly detection on value distributions',
          'Real-time quality score dashboards by source system',
          'Automated quarantine and routing of invalid records',
          'Data steward review workflows with one-click resolution',
        ],
      },
    ],
    cta: { label: 'Assess Your Data Quality', to: '/contact-us' },
  },
  'data-lake': {
    title: 'Healthcare Data Lake',
    headline: 'Bronze. Silver. Gold. ML-Ready.',
    sub: "Vorro's managed healthcare data lake ingests from every source system, applies clinical-grade normalization, and delivers ML-ready feature stores to Azure Databricks, AWS SageMaker, Snowflake, and dbt.",
    eyebrow: 'Solutions',
    color: 'primary',
    tags: ['Bronze / Silver / Gold', 'Azure Databricks', 'AWS SageMaker', 'Snowflake', 'dbt', 'OMOP CDM'],
    sections: [
      {
        heading: 'Three-Tier Data Lake Architecture',
        body: "Vorro implements the Medallion architecture purpose-built for healthcare: Bronze ingests raw data exactly as received; Silver applies FHIR normalization and validation; Gold delivers analytics-ready, deduplicated datasets.",
        bullets: [
          'Bronze layer: raw HL7, FHIR, EDI, CSV ingest with schema preservation',
          'Silver layer: FHIR R4 normalization, validation, and deduplication',
          'Gold layer: OMOP CDM, USCDI v3, and custom analytics schemas',
          'Delta Lake format for ACID transactions and time-travel queries',
          'Automated schema evolution and version tracking',
          'Real-time streaming and batch ingest support',
        ],
      },
      {
        heading: 'ML/AI Integration Out of the Box',
        body: "Every data pipeline Vorro builds is designed to serve downstream AI and ML workflows — with feature stores, model lineage tracking, and drift monitoring built in.",
        bullets: [
          'Managed feature store with point-in-time correctness',
          'Direct connectors to Azure ML, SageMaker, Vertex AI',
          'Snowflake and Databricks data sharing',
          'dbt transformation layer for analytics engineering',
          'Model performance and data drift monitoring',
          'HIPAA-compliant synthetic data generation for model training',
        ],
      },
    ],
    cta: { label: 'Design Your Data Lake', to: '/contact-us' },
  },
  'pipeline-auto-healing': {
    title: 'Pipeline Auto-Healing',
    headline: 'Self-Healing Data Pipelines. Zero Manual Fixes.',
    sub: "Healthcare data pipelines break constantly — message format changes, system downtime, unexpected payloads. Vorro's auto-healing engine detects failures, diagnoses root causes, and resolves them automatically.",
    eyebrow: 'Solutions',
    color: 'cyan',
    tags: ['Automated Recovery', 'Dead Letter Queues', 'Schema Drift Detection', 'Alert Routing', 'SLA Monitoring'],
    sections: [
      {
        heading: 'Detect, Diagnose, Recover — Automatically',
        body: "Most integration teams spend 40%+ of their time manually fixing broken data pipelines. Vorro's auto-healing engine handles the majority of common failure modes without human intervention.",
        bullets: [
          'Real-time pipeline health monitoring with SLA tracking',
          'Automated retry with exponential backoff',
          'Dead letter queue management with root cause classification',
          'Schema drift detection and automatic adapter updates',
          'Downstream impact analysis before auto-recovery',
          'Human escalation queue for complex failures',
        ],
      },
    ],
    cta: { label: 'See Auto-Healing in Action', to: '/contact-us' },
  },
  'data-management': {
    title: 'Data Management',
    headline: 'Governed. Secure. Unified.',
    sub: "Vorro's healthcare data management layer provides the governance, security, and lifecycle management infrastructure that enterprise health systems need to operate at scale.",
    eyebrow: 'Solutions',
    color: 'navy',
    tags: ['Data Catalog', 'RBAC', 'Data Lineage', 'Retention Policies', 'Consent Management', 'PHI Controls'],
    sections: [
      {
        heading: 'Enterprise Data Governance for Healthcare',
        body: "Managing healthcare data at scale requires more than storage — it requires governance frameworks that enforce policy, track lineage, and ensure every data asset is trusted.",
        bullets: [
          'Automated data catalog with FHIR resource tagging',
          'Data lineage tracking from source to consumption',
          'Role-based and attribute-based access control',
          'PHI classification and automated handling policies',
          'Consent management with opt-in/opt-out enforcement',
          'Configurable data retention and deletion schedules',
        ],
      },
    ],
    cta: { label: 'Govern Your Healthcare Data', to: '/contact-us' },
  },
};

export default function SolutionPage({ slug }) {
  const data = solutions[slug];

  if (!data) {
    return (
      <main>
        <section className="section" style={{ textAlign: 'center', paddingTop: '8rem' }}>
          <h1>Page Coming Soon</h1>
          <p style={{ marginTop: '1rem', color: 'var(--color-gray-500)' }}>This solution page is being prepared.</p>
          <Link to="/solutions" className="btn btn-primary btn-lg" style={{ marginTop: '2rem' }}>Explore All Solutions</Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>{data.eyebrow}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {data.tags.map(t => (
              <span key={t} className="tag tag-white-outline">{t}</span>
            ))}
          </div>
          <h1 className="vertical-hero-headline">{data.headline}</h1>
          <p className="vertical-hero-sub">{data.sub}</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to={data.cta.to} className="btn btn-cyan btn-lg">
              {data.cta.label} <ArrowRight size={16} />
            </Link>
            <Link to="/platform/interfacing" className="btn btn-ghost-white btn-lg">
              View Platform Overview
            </Link>
          </div>
        </div>
      </section>

      {data.sections.map((sec, i) => (
        <section key={i} className={`section ${i % 2 === 1 ? 'bg-light' : ''}`}>
          <div className="container">
            <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {sec.heading}
                </h2>
                <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{sec.body}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {sec.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-700)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, var(--color-navy) 0%, #1a1c45 100%)',
                borderRadius: 'var(--radius-2xl)',
                padding: '2.5rem',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {data.title} · Vorro Platform
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)' }}>{sec.heading}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {sec.bullets.slice(0, 4).map((b, j) => (
                    <div key={j} style={{
                      background: 'rgba(255,255,255,0.07)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.6rem 0.875rem',
                      fontSize: 'var(--text-sm)',
                      color: 'rgba(255,255,255,0.85)',
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

      {/* CTA */}
      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to Get Started?</h2>
              <p>Talk to a Vorro integration expert about {data.title.toLowerCase()} for your organization.</p>
              <div className="cta-banner-actions">
                <Link to={data.cta.to} className="btn btn-cyan btn-xl">
                  {data.cta.label} <ArrowRight size={18} />
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
