import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import '../styles/vertical.css';

/* ---- Vertical Data ---- */
export const verticals = {
  'analytics-nlp': {
    num: '01',
    title: 'Analytics & Conversational AI',
    headline: 'Extract Structured Intelligence from Unstructured Clinical Data',
    sub: 'Transform clinical notes, discharge summaries, radiology reports, and prior auth letters into governed, FHIR-native structured data — at scale.',
    color: 'primary',
    tags: ['Clinical AI', 'FHIR R4', 'HIPAA', 'ICD-10', 'SNOMED CT'],
    sections: [
      {
        heading: 'The AI Pipeline',
        type: 'steps',
        steps: [
          {
            num: '1',
            title: 'Document Ingestion',
            desc: 'Clinical notes, discharge summaries, radiology reports, pathology, and prior auth letters are ingested from any EHR, portal, or document store.',
          },
          {
            num: '2',
            title: 'De-Identification',
            desc: 'HIPAA Safe Harbor and Expert Determination compliance — auto-redact all 18 PHI identifiers before any processing occurs.',
          },
          {
            num: '3',
            title: 'NER & Concept Extraction',
            desc: 'Named Entity Recognition extracts diagnoses, medications, procedures, vitals, lab values, and symptoms from free text.',
          },
          {
            num: '4',
            title: 'Terminology Mapping',
            desc: 'Automatically map extracted concepts to ICD-10, CPT, SNOMED CT, LOINC, RxNorm, and NDC without manual coding.',
          },
          {
            num: '5',
            title: 'FHIR Structuring',
            desc: 'Output as FHIR R4 Observations, Conditions, MedicationRequests, and DiagnosticReports — ready for downstream analytics.',
          },
        ],
      },
      {
        heading: 'Use Cases',
        type: 'cards',
        cards: [
          { title: 'Prior Auth Acceleration', desc: 'Analyze prior auth documents automatically and surface the clinical evidence needed to accelerate approval decisions.' },
          { title: 'Clinical Note Coding', desc: 'Auto-suggest ICD-10 and CPT codes from clinical documentation — reduce coder workload by up to 60%.' },
          { title: 'Adverse Event Detection', desc: 'Detect risk signals and adverse events from unstructured notes before they surface in claims or incident reports.' },
          { title: 'Population Health Gaps', desc: 'Identify care gaps, chronic condition cohorts, and outreach candidates from clinical text at population scale.' },
          { title: 'Quality Measure Extraction', desc: 'Extract HEDIS and Stars measure data from clinical notes — without manual chart review.' },
          { title: 'Referral Summarization', desc: 'Automatically summarize referral letters and route them to the appropriate specialist workflow.' },
        ],
      },
    ],
    footer_cta: 'See Conversational AI in Action',
  },

  'reporting-nlp': {
    num: '02',
    title: 'Reporting & Conversational AI',
    headline: 'Natural Language Queries. Automated Healthcare Reports. No SQL Required.',
    sub: 'Ask your data questions in plain English. Get clinical, compliance, operational, and executive reports — instantly, without a data team or SQL expertise.',
    color: 'cyan',
    tags: ['Natural Language Query', 'HEDIS', 'eCQM', 'QRDA', 'No-Code'],
    sections: [
      {
        heading: 'Natural Language Query Examples',
        type: 'query-examples',
        queries: [
          '"Show me all diabetic patients with HbA1c > 9 in Q3"',
          '"Which payers have the highest prior auth denial rate this quarter?"',
          '"Flag all claims with missing NPI codes this month"',
          '"Compare readmission rates by DRG across all facilities"',
          '"Generate HEDIS MY2024 report for commercial members"',
        ],
      },
      {
        heading: 'Auto-Generated Report Types',
        type: 'cards',
        cards: [
          { title: 'Regulatory Reports', desc: 'eCQM / QRDA I & III, CMS quality reporting — generated automatically on schedule.' },
          { title: 'Compliance Reports', desc: 'HIPAA audit logs, access reports, breach risk assessments — always audit-ready.' },
          { title: 'Quality Reports', desc: 'HEDIS, Stars, and CAHPS measure reports with drill-down to patient-level detail.' },
          { title: 'Operational Reports', desc: 'Claims adjudication summaries, denial analysis by payer, and turnaround time metrics.' },
          { title: 'Financial Reports', desc: 'Remittance reconciliation, revenue leakage detection, and EOB analysis.' },
          { title: 'Executive Dashboards', desc: 'KPI dashboards and population health summaries for leadership — no data team required.' },
        ],
      },
    ],
    footer_cta: 'See Reporting in Action',
  },

  'governance-compliance': {
    num: '03',
    title: 'Governance & Compliance',
    headline: 'Every Federal Healthcare Mandate. Automated.',
    sub: "Stay ahead of HIPAA, 21st Century Cures Act, CMS Interoperability Rules, and TEFCA without building a compliance army. Vorro automates it end-to-end.",
    color: 'navy',
    tags: ['HIPAA', 'ONC Cures Act', 'TEFCA', 'SOC 2', 'HITRUST'],
    sections: [
      {
        heading: 'Federal Laws & FHIR Mandates Covered',
        type: 'compliance-list',
        items: [
          { label: 'HIPAA (1996 / Omnibus 2013)', desc: 'Privacy Rule, Security Rule, Breach Notification — PHI protection and access controls fully automated.' },
          { label: 'HITECH Act (2009)', desc: 'Strengthened HIPAA enforcement; mandatory breach notification and increased penalties managed automatically.' },
          { label: '21st Century Cures Act (2016)', desc: 'Prohibits information blocking; mandates open APIs and patient data access — monitored continuously.' },
          { label: 'ONC Cures Act Final Rule (2020)', desc: 'FHIR R4 APIs, information blocking prohibition, and health IT certification compliance built-in.' },
          { label: 'CMS Interoperability Rule (2020)', desc: 'Patient Access API and Provider Directory API (FHIR R4) for payers — fully implemented.' },
          { label: 'CMS Prior Auth Rule (CMS-0057-F, 2024)', desc: 'PA API (FHIR R4) required; 7-day standard / 72-hour urgent decision timelines enforced automatically.' },
          { label: 'TEFCA / QHIN Framework', desc: 'Trusted Exchange Framework and nationwide health information network participation supported.' },
          { label: '42 CFR Part 2', desc: 'Substance use disorder record confidentiality — extra-sensitive PHI handling with full audit trail.' },
        ],
      },
      {
        heading: 'Certifications & Platform Capabilities',
        type: 'cards',
        cards: [
          { title: 'SOC 2 Type II', desc: 'Continuous controls monitoring across security, availability, and confidentiality trust service criteria.' },
          { title: 'HITRUST CSF', desc: 'Healthcare-specific risk management and compliance certification framework — supported and audit-ready.' },
          { title: 'ONC Health IT Certification', desc: '2015 Edition Cures Update — certified health IT module support built into the platform.' },
          { title: 'Information Blocking Detection', desc: 'Automated detection and logging of potential information blocking incidents with regulatory reporting.' },
        ],
      },
    ],
    footer_cta: 'Automate Your Compliance Program',
  },

  'governance-versioning': {
    num: '04',
    title: 'Governance & Version Control',
    headline: 'Git-Like Version Control for Healthcare Data Pipelines.',
    sub: 'The first healthcare-native data version control layer — with full regulatory auditability. Every pipeline, mapping, and transformation is versioned, attributed, and rollback-ready.',
    color: 'green',
    tags: ['Data Lineage', 'Pipeline Versioning', 'Audit Trail', 'HIPAA Audit', 'Change Management'],
    sections: [
      {
        heading: 'Core Capabilities',
        type: 'cards',
        cards: [
          { title: 'Full Data Lineage', desc: 'Trace every data element from source system through every transformation to its final consumer. Who touched it, what changed, and when.' },
          { title: 'Pipeline Versioning', desc: 'Every HL7/FHIR mapping, transformation rule, and routing logic is versioned. Roll back any pipeline to any prior state with one action.' },
          { title: 'Change Attribution', desc: 'All modifications attributed to a user, service account, or automated process — with timestamp, change reason, and downstream impact.' },
          { title: 'Data Contracts', desc: 'Define and enforce schema contracts between producers and consumers. Breaking changes are flagged before they reach production.' },
          { title: 'Impact Analysis', desc: 'Before any change, automatically surface all downstream systems and reports that will be affected — no more surprise breakages.' },
          { title: 'Audit-Ready Exports', desc: 'One-click export of full change history, access logs, and lineage maps for HIPAA audits, SOC 2 reviews, and regulatory inquiries.' },
        ],
      },
    ],
    footer_cta: 'See Version Control in Action',
  },

  'interfacing': {
    num: '05',
    title: 'Interfacing',
    headline: 'Every Healthcare Data Standard. One Integration Layer.',
    sub: 'HL7 v2, FHIR R4, EDI X12, NCPDP, C-CDA, DICOM, Direct Trust — if it moves healthcare data, Vorro speaks it natively. 22+ enterprise deployments. No rip-and-replace required.',
    color: 'orange',
    tags: ['HL7', 'FHIR R4', 'EDI X12', 'NCPDP', 'DICOM'],
    sections: [
      {
        heading: 'Supported Standards',
        type: 'standards-grid',
        standards: [
          {
            category: 'HL7 v2 Messages',
            items: ['ADT — Admit/Discharge/Transfer', 'ORU — Observation Results', 'ORM/OMG — Orders', 'SIU — Scheduling', 'MDM — Medical Documents', 'MFN — Master Files', 'DFT — Financial Transactions'],
          },
          {
            category: 'FHIR R4 / APIs',
            items: ['Patient, Encounter, Condition', 'Observation, DiagnosticReport', 'MedicationRequest, Immunization', 'Claim, ExplanationOfBenefit', 'PriorAuthorization (Da Vinci)', 'SMART on FHIR / OAuth 2.0', 'CoverageEligibilityRequest'],
          },
          {
            category: 'EDI X12 Transactions',
            items: ['270/271 — Eligibility', '276/277 — Claim Status', '278 — Prior Authorization', '835 — Remittance Advice', '837P/I/D — Claims', '834 — Enrollment', '820 — Premium Payment'],
          },
          {
            category: 'Other Standards',
            items: ['NCPDP SCRIPT — ePrescribing', 'NCPDP D.0 — Pharmacy Claims', 'C-CDA / CCDA 2.1', 'Direct Trust Messaging', 'DICOM (imaging metadata)', 'CSV / Flat File / Proprietary', 'SFTP, AS2, REST, SOAP, MQ'],
          },
        ],
      },
    ],
    footer_cta: 'See All Supported Standards',
  },

  'ai-readiness': {
    num: '06',
    title: 'AI Readiness',
    headline: 'From Raw, Siloed Data to a Governed, ML-Ready Foundation.',
    sub: 'Your AI initiatives are only as good as your data. Vorro\'s Bronze → Silver → Gold data lake architecture ensures your AI gets clean, normalized, governed data — not garbage.',
    color: 'primary',
    tags: ['Data Lake', 'ML-Ready', 'Azure Databricks', 'SageMaker', 'Snowflake'],
    sections: [
      {
        heading: 'Bronze → Silver → Gold Architecture',
        type: 'tier-cards',
        steps: [
          {
            num: 'Bronze',
            title: 'Raw Ingest',
            desc: 'HL7, FHIR, and EDI ingestion from EHRs, payers, labs, and clearinghouses. Unmodified source data preserved for reprocessing. Supports Azure Data Lake, AWS S3, GCP Storage, and on-prem.',
          },
          {
            num: 'Silver',
            title: 'Cleansed & Normalized',
            desc: 'Patient deduplication via Master Patient Index (MPI). ICD-10, SNOMED CT, LOINC, RxNorm, and NDC terminology normalization. FHIR R4 standardization with PII/PHI governance tagging.',
          },
          {
            num: 'Gold',
            title: 'Analytics & AI Ready',
            desc: 'Feature store integration for ML model training. FHIR to tabular format for Azure ML, SageMaker, and Databricks. Pre-built datasets for claims, clinical, pharmacy, and ADT.',
          },
          {
            num: 'Activation',
            title: 'Deploy & Monitor',
            desc: 'Real-time scoring pipelines for clinical risk models. Data quality SLAs with automated alerting. Model drift monitoring and lineage-linked retraining triggers.',
          },
        ],
      },
      {
        heading: 'Compatible Platforms',
        type: 'platform-logos',
        platforms: ['Azure Databricks', 'AWS SageMaker', 'Google Vertex AI', 'Snowflake', 'dbt', 'Apache Spark'],
      },
    ],
    footer_cta: 'Build Your AI-Ready Data Lake',
  },

  'workflow-orchestration': {
    num: '07',
    title: 'Workflow Orchestration',
    headline: 'Healthcare-Native Workflow Automation. AI-Powered.',
    sub: 'No-code, FHIR-native, audit-ready workflow automation for revenue cycle, clinical operations, and patient engagement — deployed in days, not months.',
    color: 'cyan',
    tags: ['Automation', 'AI-Powered', 'Prior Auth', 'FHIR Triggers', 'No-Code'],
    sections: [
      {
        heading: 'Pre-Built Healthcare Workflow Library',
        type: 'workflow-categories',
        categories: [
          {
            name: 'Revenue Cycle',
            workflows: [
              'Prior Authorization (end-to-end PA FHIR API)',
              'Eligibility & Benefits Verification (270/271)',
              'Claims Routing & Adjudication Support',
              'Denial Management & Appeals Automation',
            ],
          },
          {
            name: 'Clinical Operations',
            workflows: [
              'Lab Result Routing & Critical Value Notification',
              'Referral Management & Tracking',
              'Medication Reconciliation (discharge)',
              'Care Gap Identification & Outreach',
            ],
          },
          {
            name: 'Patient Engagement',
            workflows: [
              'Discharge Follow-up & Care Transitions',
              'Appointment Reminders & No-Show Recovery',
              'Post-visit Survey Distribution',
              'Chronic Disease Management Touchpoints',
            ],
          },
        ],
      },
      {
        heading: 'Platform Capabilities',
        type: 'cards',
        cards: [
          { title: 'Visual Workflow Engine', desc: '500+ pre-built connectors with drag-and-drop visual workflow builder. No engineering required.' },
          { title: 'AI Decision Nodes', desc: 'Intelligent triage, summarization, classification, and routing powered by AI at key decision points.' },
          { title: 'FHIR Triggers', desc: 'Native FHIR R4 event subscriptions and webhook triggers — workflows start automatically when data changes.' },
          { title: 'Human-in-the-Loop', desc: 'Approval gates for clinical or compliance review steps — keep humans in control of critical decisions.' },
          { title: 'Audit Logging', desc: 'Every workflow execution logged with full step-level trace for HIPAA compliance and operational visibility.' },
          { title: 'Error Handling', desc: 'Auto-retry, dead-letter queuing, and alerting for failures — no silent data loss.' },
        ],
      },
    ],
    footer_cta: 'See Workflow Orchestration in Action',
  },
};

/* ---- Page Component ---- */
export default function PlatformVertical({ slug }) {
  const data = verticals[slug];

  if (!data) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h1>Capability not found</h1>
        <Link to="/">Go home</Link>
      </div>
    );
  }

  const colorMap = {
    primary: { accent: '#AC4197', bg: 'rgba(172,65,151,0.12)' },
    cyan: { accent: '#20D3EF', bg: 'rgba(32,211,239,0.12)' },
    navy: { accent: '#20224F', bg: 'rgba(32,34,79,0.12)' },
    green: { accent: '#02B164', bg: 'rgba(2,177,100,0.12)' },
    orange: { accent: '#F17A42', bg: 'rgba(241,122,66,0.12)' },
  };
  const colors = colorMap[data.color] || colorMap.primary;

  return (
    <main>
      {/* Hero */}
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="vertical-hero-num" style={{ color: colors.accent }}>{data.num}</div>
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>
            {data.title}
          </div>
          <h1 className="vertical-hero-headline">{data.headline}</h1>
          <p className="vertical-hero-sub">{data.sub}</p>
          <div className="vertical-hero-tags">
            {data.tags.map((t) => (
              <span key={t} className="badge badge-white">{t}</span>
            ))}
          </div>
          <div className="vertical-hero-actions">
            <Link to="/contact-us" className="btn btn-cyan btn-lg">
              {data.footer_cta} <ArrowRight size={16} />
            </Link>
            <Link to="/platform" className="btn btn-ghost-white btn-lg">
              All Capabilities <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      {data.sections.map((section, si) => (
        <section
          key={si}
          className={`section vertical-content-section ${si % 2 === 1 ? 'bg-light' : ''}`}
        >
          <div className="container">
            <div className="section-header centered">
              <h2>{section.heading}</h2>
            </div>

            {section.type === 'steps' && (
              <div className="vertical-steps">
                {section.steps.map((step, i) => (
                  <div key={i} className="vertical-step">
                    <div className="vertical-step-num" style={{ background: colors.accent }}>
                      {step.num}
                    </div>
                    <div className="vertical-step-body">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                    {i < section.steps.length - 1 && <div className="vertical-step-connector" />}
                  </div>
                ))}
              </div>
            )}

            {section.type === 'cards' && (
              <div className="grid-3" style={{ marginTop: '2.5rem' }}>
                {section.cards.map((card) => (
                  <div key={card.title} className="card-feature">
                    <div
                      className="icon-box"
                      style={{
                        background: colors.bg,
                        color: colors.accent,
                        marginBottom: '1rem',
                      }}
                    >
                      <CheckCircle2 size={22} />
                    </div>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-bold)', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65 }}>
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.type === 'query-examples' && (
              <div className="query-examples">
                {section.queries.map((q, i) => (
                  <div key={i} className="query-example">
                    <div className="query-prompt">
                      <span className="query-icon">›</span>
                      <span>{q}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.type === 'compliance-list' && (
              <div className="compliance-list">
                {section.items.map((item) => (
                  <div key={item.label} className="compliance-item">
                    <CheckCircle2 size={18} style={{ color: colors.accent, flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>{item.label}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.type === 'standards-grid' && (
              <div className="standards-grid">
                {section.standards.map((std) => (
                  <div key={std.category} className="standards-col">
                    <div className="standards-col-heading" style={{ color: colors.accent }}>{std.category}</div>
                    <ul className="standards-list">
                      {std.items.map((item) => (
                        <li key={item}>
                          <ChevronRight size={12} style={{ color: colors.accent, flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.type === 'tier-cards' && (() => {
              const tierStyles = {
                Bronze: { border: '#b06a3a', badgeBg: '#7a3d1e', badgeColor: '#f5a97a', tcBg: 'rgba(160,90,40,0.07)' },
                Silver: { border: '#7a8898', badgeBg: '#4a5568', badgeColor: '#cbd5e1', tcBg: 'rgba(120,135,155,0.07)' },
                Gold:   { border: '#c8a820', badgeBg: '#7a6010', badgeColor: '#fcd34d', tcBg: 'rgba(200,168,30,0.07)' },
                Activation: { border: '#AC4197', badgeBg: '#6d2660', badgeColor: '#d87ec8', tcBg: 'rgba(172,65,151,0.07)' },
              };
              return (
                <div className="tier-cards-grid">
                  {section.steps.map((step, i) => {
                    const ts = tierStyles[step.num] || tierStyles.Activation;
                    return (
                      <div key={i} className="tier-card" style={{ '--tc-bg': ts.tcBg, '--tc-border': ts.border }}>
                        <div className="tier-card-badge" style={{ background: ts.badgeBg, color: ts.badgeColor }}>
                          {step.num}
                        </div>
                        <h3 className="tier-card-title">{step.title}</h3>
                        <p className="tier-card-desc">{step.desc}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {section.type === 'platform-logos' && (
              <div className="platform-logos-grid">
                {section.platforms.map((p) => (
                  <div key={p} className="platform-logo-item">{p}</div>
                ))}
              </div>
            )}

            {section.type === 'workflow-categories' && (
              <div className="workflow-categories">
                {section.categories.map((cat) => (
                  <div key={cat.name} className="workflow-cat">
                    <div className="workflow-cat-name" style={{ color: colors.accent }}>{cat.name}</div>
                    <ul className="workflow-cat-list">
                      {cat.workflows.map((w) => (
                        <li key={w}>
                          <CheckCircle2 size={14} style={{ color: colors.accent, flexShrink: 0 }} />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>{data.footer_cta}</h2>
              <p>
                Schedule a demo and see how Vorro's {data.title} capability transforms
                your healthcare data operations.
              </p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Get a Demo <ArrowRight size={18} />
                </Link>
                <Link to="/solutions" className="btn btn-ghost-white btn-xl">
                  View All Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
