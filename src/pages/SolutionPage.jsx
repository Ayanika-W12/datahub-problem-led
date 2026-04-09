import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3, Network, Database, GitBranch, Workflow } from 'lucide-react';

const solutions = {
  'emr-integrations': {
    title: 'EMR / EHR Integrations',
    headline: 'Connect Every EHR.\nNo Rip-and-Replace.',
    sub: 'Vorro connects your EMRs (Epic, Cerner, Athena, and beyond) to the rest of your ecosystem cleanly, securely, and without expensive custom work — using prebuilt, standards-compliant connectors that go live in days, not months.',
    color: 'primary',
    stats: [
      { val: '40+', label: 'EHR systems supported' },
      { val: '2–6 wks', label: 'Avg. time to go live' },
      { val: '100%', label: 'Bidirectional data flow' },
      { val: '0', label: 'Rip-and-replace required' },
    ],
    features: [
      { icon: '⬡', title: 'Epic & Cerner Native', desc: 'SMART on FHIR, MyChart APIs, ContinuousConnect, and bulk data export — certified and tested.' },
      { icon: '↔', title: 'Bidirectional Flows', desc: 'Read and write back to any EHR. ADT, ORM, ORU, DFT — all message types, all directions.' },
      { icon: '◆', title: 'Real-Time & Batch', desc: 'Stream live ADT events or run nightly batch extracts. Both modes, same platform.' },
      { icon: '◈', title: 'HL7 v2 → FHIR R4', desc: 'Automated transformation templates for every common HL7 v2 message type to FHIR R4 resources.' },
      { icon: '◉', title: 'Proprietary APIs', desc: 'Athenahealth REST, Meditech Magic, eClinicalWorks — we\'ve built the connectors so you don\'t have to.' },
      { icon: '✦', title: 'Error Routing', desc: 'Every failed message is caught, logged, alerted, and routed to a resolution queue — never silently dropped.' },
    ],
    howItWorks: [
      { num: '01', title: 'Discover', desc: 'Map your current EHR environment, message volumes, and integration requirements.' },
      { num: '02', title: 'Configure', desc: 'Select pre-built connectors and configure transformations using our visual mapping interface — no code.' },
      { num: '03', title: 'Test', desc: 'Run against real message samples in a sandboxed environment with full validation reporting.' },
      { num: '04', title: 'Go Live', desc: 'Deploy to production with real-time monitoring, alerting, and SLA tracking from day one.' },
    ],
    vendors: ['Epic', 'Oracle Cerner', 'Athenahealth', 'Meditech Expanse', 'eClinicalWorks', 'NextGen', 'Allscripts', 'CPSI', 'Greenway', 'DrChrono'],
    flowSources: ['Epic', 'Oracle Cerner', 'Athenahealth', 'Meditech'],
    flowTargets: ['Data Lake', 'Analytics', 'Care Management', 'Revenue Cycle'],
  },
  'hie-integrations': {
    title: 'HIE Integrations',
    headline: 'Network-Wide\nInteroperability.',
    sub: "Vorro's HIE integration solution ensures your connections to Health Information Exchanges work as intended: clean data in, clean data out — with real-time validation, auto-healing logic, and flexible format support for CCDs, FHIR, EDI, and custom HIE formats.",
    color: 'cyan',
    stats: [
      { val: '2+', label: 'Statewide HIEs powered' },
      { val: '1,000+', label: 'Connected providers' },
      { val: 'Real-time', label: 'Data exchange speed' },
      { val: 'TEFCA', label: 'Ready' },
    ],
    features: [
      { icon: '◈', title: 'Carequality & CommonWell', desc: 'Certified gateway participation for both major national networks — in both directions.' },
      { icon: '⬡', title: 'TEFCA / QHIN Ready', desc: 'Infrastructure built for the Trusted Exchange Framework — ready for QHIN onboarding.' },
      { icon: '↔', title: 'Direct Trust Messaging', desc: 'Secure clinical messaging via Direct Trust for referrals, transitions of care, and results delivery.' },
      { icon: '◉', title: 'Consent Management', desc: 'Per-patient opt-in/opt-out enforcement across all participant organizations.' },
      { icon: '✦', title: 'Public Health Reporting', desc: 'ELR, immunization registry, and syndromic surveillance submissions — automated.' },
      { icon: '◆', title: 'Participant Governance', desc: 'Data sharing policies, RBAC, and audit logs for every query, push, and pull event.' },
    ],
    howItWorks: [
      { num: '01', title: 'Onboard Participants', desc: 'Streamlined participant onboarding with pre-built connection templates.' },
      { num: '02', title: 'Route Messages', desc: 'Smart message routing based on participant, message type, and consent status.' },
      { num: '03', title: 'Normalize Data', desc: 'FHIR R4 normalization and terminology mapping across all incoming data streams.' },
      { num: '04', title: 'Monitor & Report', desc: 'Real-time network health dashboards and regulatory reporting exports.' },
    ],
    vendors: ['Carequality', 'CommonWell', 'TEFCA', 'Direct Trust', 'IHE XDS', 'QHIN', 'Mirth Connect', 'Rhapsody'],
    flowSources: ['Hospitals', 'Clinics', 'Payers', 'Public Health'],
    flowTargets: ['Carequality', 'CommonWell', 'TEFCA / QHIN', 'Direct Trust'],
  },
  'payer-integrations': {
    title: 'Payer Integrations',
    headline: 'Prior Auth. Eligibility.\nClaims. Automated.',
    sub: "Vorro's FHIR-native payer integration platform automates prior authorization, eligibility verification, claims, and payer-provider data exchange — reducing admin burden by up to 70%.",
    color: 'navy',
    stats: [
      { val: '70%', label: 'Reduction in admin burden' },
      { val: '250+', label: 'Payer connections' },
      { val: '72 hrs', label: 'Urgent PA decision timeline enforced' },
      { val: '4', label: 'CMS FHIR APIs delivered' },
    ],
    features: [
      { icon: '◆', title: 'Prior Auth FHIR IG', desc: 'Full implementation of the HL7 PAS FHIR IG — machine-to-machine PA submission and decision.' },
      { icon: '◈', title: 'Patient Access API', desc: 'CMS-0057-F compliant Patient Access API with USCDI v3 data model.' },
      { icon: '↔', title: 'Provider Access API', desc: 'Real-time payer-to-provider data feed for in-network providers.' },
      { icon: '⬡', title: 'Payer-to-Payer API', desc: 'Member data portability across coverage transitions — CMS mandate compliant.' },
      { icon: '◉', title: 'EDI X12 Full Stack', desc: '837, 835, 270/271, 278 — all transaction sets, automated, with ERA/EFT posting.' },
      { icon: '✦', title: 'Denial Intelligence', desc: 'AI-powered denial root cause classification with SNOMED CT and proprietary denial reason codes.' },
    ],
    howItWorks: [
      { num: '01', title: 'Connect', desc: 'API-based connection to payer portals, clearinghouses, and FHIR endpoints.' },
      { num: '02', title: 'Automate', desc: 'Configure PA rules, eligibility triggers, and claims routing with no-code workflows.' },
      { num: '03', title: 'Adjudicate', desc: 'Real-time decision support with timeline enforcement and escalation routing.' },
      { num: '04', title: 'Reconcile', desc: 'Automated ERA/EFT posting and denial management with root cause tracking.' },
    ],
    vendors: ['Availity', 'Change Healthcare', 'Waystar', 'Trizetto', 'Emdeon', 'NaviMedix', 'Cotiviti'],
    flowSources: ['Health Plans', 'Clearinghouses', 'CMS APIs', 'FHIR Endpoints'],
    flowTargets: ['Prior Auth', 'Eligibility', 'Claims 837', 'Denial Mgmt'],
  },
  'pharmacy-integrations': {
    title: 'Pharmacy Integrations',
    headline: 'ePrescribing, 340B,\nand PBM — Unified.',
    sub: "Vorro's pharmacy integrations make sure your prescription, dispense, and billing data flows cleanly and securely between pharmacies, payers, and providers — powering safety, accuracy, and efficiency with support for RxNorm, NDC, and custom formats.",
    color: 'green',
    stats: [
      { val: '340B', label: 'Compliance automated' },
      { val: 'NCPDP', label: 'SCRIPT certified' },
      { val: 'Real-time', label: 'Drug interaction checking' },
      { val: '60+', label: 'PBM connections' },
    ],
    features: [
      { icon: '◆', title: 'Surescripts ePrescribing', desc: 'Certified Surescripts network participant — RxChange, RxFill, and medication history.' },
      { icon: '◈', title: 'NCPDP SCRIPT', desc: 'Versions 10.6 and 2017071 supported — new prescriptions, renewals, cancellations, and fills.' },
      { icon: '↔', title: '340B Compliance', desc: 'Automated split billing, contract pharmacy reconciliation, and HRSA audit trail.' },
      { icon: '⬡', title: 'PBM Integration', desc: 'Claims data from 60+ PBMs normalized and enriched with formulary and clinical data.' },
      { icon: '◉', title: 'Specialty Pharmacy', desc: 'Prior auth automation for specialty medications with clinical criteria extraction.' },
      { icon: '✦', title: 'Medication Reconciliation', desc: 'Cross-setting medication list reconciliation using FHIR MedicationRequest resources.' },
    ],
    howItWorks: [
      { num: '01', title: 'Connect Networks', desc: 'Connect to Surescripts, NCPDP, and PBM clearinghouses via certified APIs.' },
      { num: '02', title: 'Normalize Data', desc: 'Standardize drug codes (NDC, RxNorm) and dosage data across all sources.' },
      { num: '03', title: 'Enforce Rules', desc: 'Apply formulary, 340B eligibility, and clinical decision rules in real time.' },
      { num: '04', title: 'Audit & Report', desc: 'HRSA-ready audit trail and 340B savings reporting — always audit-ready.' },
    ],
    vendors: ['Surescripts', 'CoverMyMeds', 'RxHub', 'ESI', 'CVS Caremark', 'OptumRx', 'Magellan Rx'],
    flowSources: ['Surescripts', 'NCPDP Network', 'PBM Feeds', '340B Platform'],
    flowTargets: ['ePrescribing', 'Claims', '340B Compliance', 'Reporting'],
  },
  'data-quality': {
    title: 'Data Quality',
    headline: 'Clean Data.\nBetter Outcomes.',
    sub: "Bad data leads to bad outcomes — and healthcare can't afford that. Vorro's Data Quality solution uses AI and intelligent automation to detect, flag, and fix data issues before they impact care, compliance, or operations. Auto-remediation fixes common errors in real time, and embedded compliance builds audit logs automatically.",
    color: 'orange',
    stats: [
      { val: '$1,950', label: 'Cost per duplicate record (avg)' },
      { val: '99.2%', label: 'Patient match accuracy' },
      { val: 'Real-time', label: 'Quality monitoring' },
      { val: 'US Core', label: 'FHIR profile validation' },
    ],
    features: [
      { icon: '◉', title: 'Master Patient Index', desc: 'Probabilistic + deterministic matching with configurable confidence thresholds and survivorship rules.' },
      { icon: '⬡', title: 'FHIR Profile Validation', desc: 'Continuous validation against US Core, Da Vinci, and custom FHIR profiles with detailed error reporting.' },
      { icon: '↔', title: 'Anomaly Detection', desc: 'Statistical process control on value distributions — catch data quality issues before they reach downstream systems.' },
      { icon: '◆', title: 'Completeness Monitoring', desc: 'USCDI element completeness scoring per source system — with trending dashboards for data stewards.' },
      { icon: '◈', title: 'Auto-Quarantine', desc: 'Invalid records are automatically quarantined, routed to review queues, and tracked through resolution.' },
      { icon: '✦', title: 'Quality Scorecards', desc: 'Per-source, per-entity quality scores with SLA alerting and executive reporting exports.' },
    ],
    howItWorks: [
      { num: '01', title: 'Profile', desc: 'Baseline your current data quality across completeness, conformance, consistency, and timeliness.' },
      { num: '02', title: 'Deduplicate', desc: 'Run MPI to identify, link, and merge duplicates across all source systems.' },
      { num: '03', title: 'Monitor', desc: 'Continuous quality monitoring with real-time alerts when thresholds are breached.' },
      { num: '04', title: 'Improve', desc: 'Steward review workflows, root cause analysis, and feedback loops to upstream systems.' },
    ],
    vendors: ['Epic', 'Cerner', 'IBM InfoSphere', 'Informatica MDM', 'Verato', 'Reltio'],
    flowSources: ['EHR Data', 'Lab Results', 'Claims', 'ADT Events'],
    flowTargets: ['MPI Match', 'FHIR Validate', 'Deduplicate', 'Analytics'],
  },
  'data-lake': {
    title: 'Healthcare Data Lake',
    headline: 'Bronze. Silver. Gold.\nML-Ready.',
    sub: "Healthcare generates vast volumes of structured and unstructured data — managing it shouldn't slow you down. Vorro creates a single, secure data lake to store, protect, and activate your data at scale with flexible ingestion of HL7, FHIR, EDI, JSON, XML, PDFs and more, with end-to-end encryption and AI-ready tagging built in.",
    color: 'primary',
    stats: [
      { val: '45TB', label: 'Processed in 44 hrs (case study)' },
      { val: 'OMOP', label: 'CDM + USCDI v3 schemas' },
      { val: 'ACID', label: 'Delta Lake transactions' },
      { val: '5+', label: 'Cloud targets supported' },
    ],
    features: [
      { icon: '⬡', title: 'Bronze Layer', desc: 'Raw ingest preserving original HL7, FHIR, EDI, and CSV data exactly as received — schema evolution tracked.' },
      { icon: '↔', title: 'Silver Layer', desc: 'FHIR R4 normalization, deduplication, validation, and terminology enrichment — trusted, unified data.' },
      { icon: '◉', title: 'Gold Layer', desc: 'OMOP CDM, USCDI v3, and custom analytics schemas — ready for dashboards and ML feature stores.' },
      { icon: '◆', title: 'Cloud Native', desc: 'Azure Databricks, AWS SageMaker, Snowflake, Google Vertex AI, and dbt — direct connectors out of the box.' },
      { icon: '◈', title: 'Feature Store', desc: 'Point-in-time correct feature sets for ML model training — with lineage and drift monitoring.' },
      { icon: '✦', title: 'Synthetic Data', desc: 'HIPAA-compliant synthetic patient data generation for model training and QA environments.' },
    ],
    howItWorks: [
      { num: '01', title: 'Ingest', desc: 'Stream or batch ingest from EHRs, devices, claims, labs, and any external source.' },
      { num: '02', title: 'Normalize', desc: 'Apply FHIR R4 normalization, terminology mapping, and deduplication in the Silver layer.' },
      { num: '03', title: 'Curate', desc: 'Build Gold layer schemas for analytics, HEDIS reporting, population health, and ML.' },
      { num: '04', title: 'Serve', desc: 'Publish to your analytics and ML platforms — with governed access and data contracts.' },
    ],
    vendors: ['Azure Databricks', 'AWS SageMaker', 'Snowflake', 'Google Vertex AI', 'dbt', 'Apache Spark'],
    flowSources: ['HL7 v2 Feed', 'FHIR R4', 'EDI Claims', 'Lab APIs'],
    flowTargets: ['Bronze Layer', 'Silver Layer', 'Gold Layer', 'ML Features'],
  },
  'pipeline-auto-healing': {
    title: 'Pipeline Auto-Healing',
    headline: 'Pipelines That Fix\nThemselves.',
    sub: "Every healthcare organization has faced data flow failures. Vorro's auto-healing pipelines detect, diagnose, and resolve data flow issues in real time — before they affect your operations. End-to-end monitoring, smart error handling, and proactive alerts keep your teams focused on value, not firefighting.",
    color: 'cyan',
    stats: [
      { val: '40%', label: 'Of IT time spent fixing pipelines (industry avg)' },
      { val: '<2 min', label: 'Mean time to auto-detect' },
      { val: '80%', label: 'Of failures auto-resolved' },
      { val: '99.9%', label: 'Pipeline uptime SLA' },
    ],
    features: [
      { icon: '↺', title: 'Auto-Retry Logic', desc: 'Exponential backoff retry with configurable thresholds — handles transient failures invisibly.' },
      { icon: '⬡', title: 'Root Cause Classification', desc: 'AI-powered failure classification across 50+ failure patterns — schema drift, auth expiry, payload errors, and more.' },
      { icon: '◈', title: 'Dead Letter Queue', desc: 'Failed messages are captured, logged, and routed to resolution queues — never silently dropped.' },
      { icon: '↔', title: 'Schema Drift Detection', desc: 'Detect when upstream systems change their data structure and auto-update transformation adapters.' },
      { icon: '◉', title: 'SLA Monitoring', desc: 'Real-time SLA dashboards with breach alerting via email, Slack, PagerDuty, and webhook.' },
      { icon: '✦', title: 'Impact Analysis', desc: 'Before auto-recovery, assess downstream impact to prevent cascading failures.' },
    ],
    howItWorks: [
      { num: '01', title: 'Detect', desc: 'Real-time anomaly detection across message rates, latency, and error rates.' },
      { num: '02', title: 'Diagnose', desc: 'AI-powered root cause classification from 50+ known failure patterns.' },
      { num: '03', title: 'Recover', desc: 'Automated recovery for 80%+ of failure types — with human escalation for the rest.' },
      { num: '04', title: 'Learn', desc: 'Failure patterns feed back into the detection model — getting smarter over time.' },
    ],
    vendors: ['PagerDuty', 'Slack', 'Datadog', 'New Relic', 'Grafana', 'OpsGenie'],
    flowSources: ['EHR Pipeline', 'Payer Feed', 'Lab Stream', 'Claims Batch'],
    flowTargets: ['Detect', 'Diagnose', 'Auto-Heal', 'Alert Team'],
  },
  'data-management': {
    title: 'Data Management',
    headline: 'Governed. Secure.\nTrustworthy.',
    sub: "Fragmented healthcare data slows innovation and care. Vorro's Data Management solution replaces patchwork workflows with a governed, AI-ready foundation — handling HL7, FHIR, EDI, X12, APIs, and custom formats in one governed structure. No-code tools let you apply rules, transformations, and governance policies without developer involvement.",
    color: 'navy',
    stats: [
      { val: '100%', label: 'HIPAA-compliant by design' },
      { val: 'Full', label: 'Data lineage tracking' },
      { val: 'ABAC', label: 'Attribute-based access control' },
      { val: '1-click', label: 'Audit export' },
    ],
    features: [
      { icon: '◉', title: 'Data Catalog', desc: 'Automated FHIR resource tagging and business glossary — every asset catalogued, searchable, and owned.' },
      { icon: '⬡', title: 'Full Lineage', desc: 'Track every data element from source system through every transformation to its final consumption point.' },
      { icon: '↔', title: 'PHI Classification', desc: 'Automated PHI detection and classification across all data assets — with policy-based handling rules.' },
      { icon: '◆', title: 'Consent Management', desc: 'Patient opt-in/opt-out enforcement with real-time propagation across all downstream systems.' },
      { icon: '◈', title: 'RBAC & ABAC', desc: 'Role-based and attribute-based access control — fine-grained permissions down to the field level.' },
      { icon: '✦', title: 'Retention Policies', desc: 'Configurable data retention and deletion schedules with automated enforcement and audit trail.' },
    ],
    howItWorks: [
      { num: '01', title: 'Classify', desc: 'Auto-classify all data assets by type, sensitivity, and regulatory applicability.' },
      { num: '02', title: 'Govern', desc: 'Apply access policies, consent rules, and retention schedules at the data layer.' },
      { num: '03', title: 'Track', desc: 'Full lineage from ingestion through transformation to consumption — always current.' },
      { num: '04', title: 'Audit', desc: 'One-click audit export packages for HIPAA, SOC 2, and HITRUST assessments.' },
    ],
    vendors: ['Microsoft Purview', 'Collibra', 'Alation', 'Apache Atlas', 'OneTrust'],
    flowSources: ['Clinical Data', 'Claims Data', 'Lab Data', 'Device Data'],
    flowTargets: ['Classified', 'Governed', 'Full Lineage', 'Audit-Ready'],
  },
};

const colorMap = {
  primary: { accent: 'var(--color-primary)', light: 'rgba(172,65,151,0.08)', mid: 'rgba(172,65,151,0.15)' },
  cyan: { accent: 'var(--color-cyan)', light: 'rgba(32,211,239,0.08)', mid: 'rgba(32,211,239,0.15)' },
  navy: { accent: 'var(--color-navy)', light: 'rgba(32,34,79,0.06)', mid: 'rgba(32,34,79,0.12)' },
  green: { accent: 'var(--color-green)', light: 'rgba(2,177,100,0.08)', mid: 'rgba(2,177,100,0.15)' },
  orange: { accent: 'var(--color-orange)', light: 'rgba(241,122,66,0.08)', mid: 'rgba(241,122,66,0.15)' },
};

export default function SolutionPage({ slug }) {
  const data = solutions[slug];
  const colors = colorMap[data?.color] || colorMap.primary;

  if (!data) {
    return (
      <main>
        <section className="section" style={{ textAlign: 'center', paddingTop: '8rem' }}>
          <h1>Page Coming Soon</h1>
          <Link to="/solutions" className="btn btn-primary btn-lg" style={{ marginTop: '2rem' }}>
            Explore All Solutions
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* HERO */}
      <section className="vertical-hero">
        <div className="container" style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Left: text */}
            <div>
              <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>{data.title}</div>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 'var(--font-bold)',
                color: '#fff',
                lineHeight: 1.1,
                whiteSpace: 'pre-line',
                marginBottom: '1.25rem',
              }}>
                {data.headline}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-lg)', lineHeight: 1.65, marginBottom: '2rem' }}>
                {data.sub}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact-us" className="btn btn-cyan btn-lg">
                  Get a Demo <ArrowRight size={16} />
                </Link>
                <Link to="/case-studies" className="btn btn-ghost-white btn-lg">
                  View Case Studies
                </Link>
              </div>
            </div>
            {/* Right: integration flow diagram */}
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-2xl)',
              padding: '1.75rem',
            }}>
              <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 8px #22c55e' }} />
                Live Integration Flow
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '0.75rem', alignItems: 'center' }}>
                {/* Sources */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {data.flowSources.map((s, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.45rem 0.75rem',
                      fontSize: '0.72rem',
                      color: 'rgba(255,255,255,0.75)',
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                    }}>
                      <span style={{ width: '5px', height: '5px', background: colors.accent, borderRadius: '50%', flexShrink: 0 }} />
                      {s}
                    </div>
                  ))}
                </div>
                {/* Center hub */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '1px', height: '52px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25))' }} />
                  <div style={{
                    background: colors.accent,
                    borderRadius: 'var(--radius-lg)',
                    padding: '0.5rem 0.875rem',
                    fontSize: '0.68rem',
                    fontWeight: 'var(--font-bold)',
                    color: '#fff',
                    whiteSpace: 'nowrap',
                    boxShadow: `0 0 18px ${colors.accent}50`,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>
                    Vorro
                  </div>
                  <div style={{ width: '1px', height: '52px', background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.25))' }} />
                </div>
                {/* Targets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {data.flowTargets.map((t, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.45rem 0.75rem',
                      fontSize: '0.72rem',
                      color: 'rgba(255,255,255,0.75)',
                      display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem',
                    }}>
                      {t}
                      <span style={{ width: '5px', height: '5px', background: '#22c55e', borderRadius: '50%', flexShrink: 0 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--color-gray-100)' }}>
        <div className="container" style={{ padding: '2.5rem var(--space-6)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', border: '1px solid var(--color-gray-100)' }}>
            {data.stats.map((s, i) => (
              <div key={i} style={{
                padding: '1.75rem',
                textAlign: 'center',
                borderRight: i < 3 ? '1px solid var(--color-gray-100)' : 'none',
                background: i % 2 === 0 ? '#fff' : 'var(--color-gray-50)',
              }}>
                <div style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 'var(--font-bold)', color: colors.accent, lineHeight: 1, marginBottom: '0.4rem' }}>
                  {s.val}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="eyebrow">Capabilities</div>
            <h2>Everything You Need. Nothing You Don't.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {data.features.map((f, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid var(--color-gray-100)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                transition: 'box-shadow 0.2s, border-color 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = colors.accent; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--color-gray-100)'; }}
              >
                <div style={{
                  width: '44px', height: '44px',
                  background: colors.light,
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem',
                  marginBottom: '1rem',
                  color: colors.accent,
                  border: `1px solid ${colors.mid}`,
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — horizontal numbered steps */}
      <section style={{ background: 'var(--color-navy)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header centered dark">
            <div className="eyebrow">How It Works</div>
            <h2 style={{ color: '#fff' }}>From Day Zero to Production</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', marginTop: '3rem', position: 'relative' }}>
            {/* Connector line */}
            <div style={{
              position: 'absolute',
              top: '28px',
              left: 'calc(12.5% + 20px)',
              right: 'calc(12.5% + 20px)',
              height: '2px',
              background: 'rgba(32,211,239,0.2)',
              zIndex: 0,
            }} />
            {data.howItWorks.map((step, i) => (
              <div key={i} style={{ padding: '0 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '56px', height: '56px',
                  background: i === 0 ? 'var(--color-cyan)' : 'rgba(255,255,255,0.08)',
                  border: `2px solid ${i === 0 ? 'var(--color-cyan)' : 'rgba(255,255,255,0.15)'}`,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-bold)',
                  color: i === 0 ? 'var(--color-navy)' : 'rgba(255,255,255,0.6)',
                }}>
                  {step.num}
                </div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-bold)', color: '#fff', marginBottom: '0.4rem' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTED SYSTEMS */}
      <section className="section bg-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Integrations</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '1rem', lineHeight: 1.2 }}>
                Works With Your Existing Stack
              </h2>
              <p style={{ color: 'var(--color-gray-500)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                Vorro connects to the systems you already use — with pre-built, production-tested connectors.
                No rip-and-replace. No months of custom development.
              </p>
              <Link to="/contact-us" className="btn btn-primary btn-lg">
                See All Connectors <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {data.vendors.map((v, i) => (
                <div key={v} style={{
                  padding: '0.6rem 1.1rem',
                  background: '#fff',
                  border: '1px solid var(--color-gray-200)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-medium)',
                  color: 'var(--color-navy)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  {v}
                </div>
              ))}
              <div style={{
                padding: '0.6rem 1.1rem',
                background: colors.light,
                border: `1px solid ${colors.mid}`,
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-medium)',
                color: colors.accent,
              }}>
                + many more
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to See It Live?</h2>
              <p>Talk to a Vorro integration expert about {data.title.toLowerCase()} for your organization.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Schedule a Demo <ArrowRight size={18} />
                </Link>
                <Link to="/build-vs-buy" className="btn btn-ghost-white btn-xl">
                  Build vs. Buy Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
