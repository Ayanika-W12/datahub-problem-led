import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, ChevronRight, Zap, Shield,
  Database, Brain, GitBranch, Network, Workflow, BarChart3,
  TrendingUp, Award, Users, Globe, Quote
} from 'lucide-react';
import '../styles/home.css';
import { BookDemoModal } from '../components/ui/BookDemoModal';
import { FreeToolsBanner } from '../components/ui/FreeToolsBanner';

/* ---- Data ---- */
const stats = [
  { value: '15M+', label: 'Daily Transactions' },
  { value: '10,000+', label: 'Trading Partners' },
  { value: '70%', label: 'Less Cost vs. In-House Build' },
  { value: '100+', label: 'Customers' },
];

const problems = [
  {
    icon: <TrendingUp size={24} />,
    title: 'Accelerate Time-to-Market',
    desc: 'Launch new applications and products into major cloud marketplaces 4x faster with streamlined, no-code onboarding and pre-built connectors.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Reduce Operational Cost',
    desc: 'Eliminate up to 70% of manual data scripting, reduce integration overhead, and accelerate revenue cycles through cleaner, governed data.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Scale with Confidence',
    desc: 'Manage millions of records and transactions smoothly, guaranteeing performance and uptime as your organization expands across markets.',
  },
  {
    icon: <Brain size={24} />,
    title: 'Unlock AI Initiatives',
    desc: 'Enable predictive analytics, real-time decision engines, and AI-driven automation through unified, high-quality, ML-ready data pipelines.',
  },
];

/* ---- Problem Navigator Data ---- */
const industryProblems = [
  {
    tab: 'Healthcare',
    category: 'Healthcare Data Complexity',
    title: 'Fragmented EHR, payer, and lab data is crippling care coordination.',
    desc: 'Health systems, HIEs, and payers operate across dozens of incompatible systems — Epic, Cerner, HL7 v2, FHIR, EDI 837. Every gap creates compliance risk, delayed care, and wasted IT spend.',
    stats: [
      { val: '$18.3B', label: 'Potential annual savings if healthcare administrative transactions moved fully electronic', citation: 'CAQH. "2023 CAQH Index: A New Normal." caqh.org', url: 'https://www.caqh.org/hubfs/drupal/2024-01/CAQH_IndexReport_2023_FINAL.pdf' },
      { val: '56%', label: 'Of health systems still rely on manual or partially-manual processes for prior authorizations and eligibility checks', citation: 'KLAS Research. "Ambulatory and Enterprise EMR Interoperability 2023." klasresearch.com', url: 'https://klasresearch.com/report/ambulatory-and-enterprise-emr-interoperability-2023-are-deep-adopters-close-to-the-ideal/1896' },
    ],
    solutions: [
      'EHR & HIE bidirectional integration',
      'FHIR R4 and HL7 v2/v3 compliance automation',
      'Prior auth & claims workflow orchestration',
      'Real-time patient data governance & audit trails',
      'CMS mandate readiness (ONC, Cures Act, CMS-0057-F)',
    ],
    color: '#20D3EF',
  },
  {
    tab: 'Ecommerce',
    category: 'Ecommerce Operational Data',
    title: 'Siloed order, inventory, and customer data kills margin and speed.',
    desc: 'Retailers and ecommerce brands operate across ERPs, WMS, storefronts, and marketplaces — all generating data that never talks to each other, causing stockouts, wrong shipments, and lost revenue.',
    stats: [
      { val: '$1.77T', label: 'Projected retail revenue lost in 2023 to inventory distortion — overstock, stockouts, and shrink', citation: 'IHL Group. "Inventory Distortion 2023." Reported by Retail TouchPoints.', url: 'https://www.retailtouchpoints.com/features/industry-insights/ihl-study-inventory-distortion-will-cost-retailers-1-77-trillion-in-2023' },
      { val: '2,700+', label: 'Commerce leaders surveyed globally — 88% say customer expectations are harder to meet than ever before', citation: 'Salesforce. "State of Commerce, Third Edition." salesforce.com', url: 'https://www.salesforce.com/commerce/state-of-commerce' },
    ],
    solutions: [
      'Order management & inventory sync across all channels',
      'Marketplace & ERP data unification (Amazon, Shopify, SAP)',
      'Real-time fulfillment and returns data orchestration',
      'Customer 360 across CRM, DTC, and wholesale',
      'Automated EDI trading partner onboarding',
    ],
    color: '#AC4197',
  },
  {
    tab: 'Insurance',
    category: 'Insurance Data Fragmentation',
    title: 'Claims, eligibility, and policy data stuck in legacy silos costs millions.',
    desc: 'Insurers run on decades-old mainframes, outdated EDI formats, and manual reconciliation processes. Every integration gap delays claims settlement, increases leakage, and exposes regulatory risk.',
    stats: [
      { val: '74%', label: 'Of insurers say legacy system complexity is the #1 barrier to digital transformation and data modernization', citation: 'Deloitte. "2023 Insurance Industry Outlook." deloitte.com', url: 'https://www.deloitte.com/us/en/insights/industry/financial-services/financial-services-industry-outlooks/insurance-industry-outlook-2023.html' },
      { val: '$67B', label: 'Annual claims leakage cost to US-based insurance companies — approximately 6% of total claim payments', citation: 'Insurance Thought Leadership. "How to Stop Claims Leakage." insurancethoughtleadership.com', url: 'https://www.insurancethoughtleadership.com/claims/how-stop-claims-leakage' },
    ],
    solutions: [
      'Claims 837/835 and EOB automated processing',
      'Eligibility 270/271 real-time verification',
      'Policy and premium data unification across systems',
      'Regulatory compliance reporting (NAIC, state mandates)',
      'Fraud detection data pipelines and audit trails',
    ],
    color: '#4CAF50',
  },
  {
    tab: 'HR Tech',
    category: 'HR & Workforce Data Chaos',
    title: 'Disconnected HRIS, payroll, and benefits data creates compliance exposure.',
    desc: 'HR teams juggle Workday, ADP, SAP SuccessFactors, benefits portals, and compliance systems — none of which share data cleanly. The result: payroll errors, audit failures, and poor workforce visibility.',
    stats: [
      { val: '79%', label: 'Of HR leaders say their organization\'s people data is fragmented across too many disconnected systems', citation: 'SHRM. "2023–2024 State of the Workplace Report." shrm.org', url: 'https://www.shrm.org/in/topics-tools/research/2023-2024-shrm-state-workplace' },
      { val: '20%', label: 'Of US payrolls contain errors — each error costs an average of $291 to remedy directly and indirectly', citation: 'EY. "Cost and Risks Due to Payroll Errors 2022." ey.com', url: 'https://eyquest.com/files/Cost_and_Risks_Due_to_Payroll_Errors_2022_Final.pdf' },
    ],
    solutions: [
      'HRIS, payroll, and benefits bidirectional sync',
      'Workforce analytics and headcount reporting pipelines',
      'New hire onboarding data orchestration',
      'ACA, ERISA, and labor compliance automation',
      'Employee 360 across all HR systems',
    ],
    color: '#F59E0B',
  },
];

const capabilities = [
  {
    num: '01',
    icon: <BarChart3 size={28} />,
    label: 'AI-Driven Analytics & Insights',
    title: 'Extract Intelligence from Your Data',
    desc: 'Transform unstructured documents, records, and data streams into structured, standardized outputs. Auto-map to your target schemas and taxonomies with AI-powered entity extraction.',
    color: 'primary',
    to: '/platform/analytics-nlp',
    bullets: ['Entity extraction & enrichment', 'Structured data output', 'Real-time & batch processing'],
    stats: [{ value: '99.2%', label: 'Accuracy' }, { value: '<2 min', label: 'Processing' }, { value: '25M+', label: 'Records/day' }],
    perfBars: [{ label: 'NLP Processing', pct: 95 }, { label: 'Structured Output', pct: 87 }, { label: 'Throughput', pct: 92 }],
  },
  {
    num: '02',
    icon: <Workflow size={28} />,
    label: 'Conversational AI Reporting',
    title: 'Conversational Queries. Instant Reports.',
    desc: 'Ask your data questions in plain English using Conversational AI. Get operational, compliance, and executive dashboard reports — automatically, without SQL or coding.',
    color: 'cyan',
    to: '/platform/reporting-nlp',
    bullets: ['No SQL required', 'Custom report builder', 'Scheduled & on-demand'],
    stats: [{ value: '6 sec', label: 'Query time' }, { value: '40+', label: 'Report types' }, { value: '0', label: 'SQL required' }],
    perfBars: [{ label: 'Query Speed', pct: 98 }, { label: 'Report Coverage', pct: 91 }, { label: 'Accuracy', pct: 94 }],
  },
  {
    num: '03',
    icon: <Shield size={28} />,
    label: 'Governance & Compliance',
    title: 'Every Regulatory Mandate. Automated.',
    desc: 'Stay ahead of industry mandates and data regulations without a compliance army. Vorro automates policy enforcement, audit trails, and reporting end-to-end across your entire data estate.',
    color: 'navy',
    to: '/platform/governance-compliance',
    bullets: ['Policy enforcement automation', 'Audit-ready reporting', 'Data access controls'],
    stats: [{ value: '100%', label: 'Audit coverage' }, { value: '3+', label: 'Mandates auto' }, { value: '0', label: 'Manual steps' }],
    perfBars: [{ label: 'Compliance Coverage', pct: 100 }, { label: 'Audit Readiness', pct: 97 }, { label: 'Policy Automation', pct: 89 }],
  },
  {
    num: '04',
    icon: <GitBranch size={28} />,
    label: 'Version Lineage & Control',
    title: 'Git-Like Versioning for Enterprise Data',
    desc: 'The first enterprise-native data version control layer. Every pipeline, mapping, and transformation is versioned, attributed, and audit-ready — with one-click rollback.',
    color: 'green',
    to: '/platform/governance-versioning',
    bullets: ['Full data lineage', 'One-click rollback', 'One-click audit exports'],
    stats: [{ value: '100%', label: 'Data lineage' }, { value: '1-click', label: 'Rollback' }, { value: '\u221e', label: 'Version history' }],
    perfBars: [{ label: 'Lineage Tracking', pct: 100 }, { label: 'Rollback Speed', pct: 96 }, { label: 'Audit Export', pct: 93 }],
  },
  {
    num: '05',
    icon: <Network size={28} />,
    label: 'Interfacing',
    title: 'Every Data Standard. One Platform.',
    desc: 'REST, SOAP, GraphQL, EDI, HL7, FHIR, XML, JSON, flat files — if it moves enterprise data, Vorro speaks it natively with 500+ pre-built connectors.',
    color: 'orange',
    to: '/platform/interfacing',
    bullets: ['22+ enterprise deployments', 'Real-time & batch modes', 'No rip-and-replace required'],
    stats: [{ value: '7+', label: 'Protocols' }, { value: '500+', label: 'Connectors' }, { value: '22+', label: 'Deployments' }],
    perfBars: [{ label: 'Protocol Coverage', pct: 100 }, { label: 'Connector Uptime', pct: 99 }, { label: 'Onboard Speed', pct: 88 }],
  },
  {
    num: '06',
    icon: <Database size={28} />,
    label: 'AI Readiness',
    title: 'From Raw Data to ML-Ready Gold',
    desc: 'Bronze \u2192 Silver \u2192 Gold data lake architecture. Ingest, cleanse, normalize, and serve ML-ready data to Azure Databricks, AWS SageMaker, Google Vertex AI, Snowflake, and dbt.',
    color: 'primary',
    to: '/platform/ai-readiness',
    bullets: ['Master Entity Index', 'Feature store integration', 'Model drift monitoring'],
    stats: [{ value: '3-tier', label: 'Data lake' }, { value: '4+', label: 'ML platforms' }, { value: '70%', label: 'Less prep time' }],
    perfBars: [{ label: 'Data Quality', pct: 97 }, { label: 'ML Pipeline Speed', pct: 90 }, { label: 'Entity Accuracy', pct: 95 }],
  },
  {
    num: '07',
    icon: <Zap size={28} />,
    label: 'Workflow Orchestration',
    title: 'Enterprise Automation. No Code Required.',
    desc: 'AI-powered workflows for order management, eligibility verification, approval routing, exception handling, and more — compliant by design, deployed in days.',
    color: 'cyan',
    to: '/platform/workflow-orchestration',
    bullets: ['500+ pre-built connectors', 'Event-driven triggers', 'Human-in-the-loop approval gates'],
    stats: [{ value: '500+', label: 'Pre-built flows' }, { value: '80%', label: 'Auto-approval rate' }, { value: '<1 day', label: 'Deploy time' }],
    perfBars: [{ label: 'Automation Rate', pct: 92 }, { label: 'Approval Speed', pct: 88 }, { label: 'Uptime SLA', pct: 99 }],
  },
];

const clients = [
  { name: 'HSN', logo: '/logos/1038px-HSN_logo.svg.webp' },
  { name: 'QVC', logo: '/logos/QVC_logo_2019.svg.webp' },
  { name: 'American Lung Association', logo: '/logos/American_Lung_Association_logo_2020.svg.webp' },
  { name: 'Avesis', logo: '/logos/avesis_logo.webp' },
  { name: 'CareOne', logo: '/logos/CareOne.webp' },
  { name: 'Contexture', logo: '/logos/Contexture.webp' },
  { name: 'WISHIN', logo: '/logos/WISHIN.webp' },
  { name: 'Therap', logo: '/logos/therap.webp' },
  { name: 'SunRx', logo: '/logos/SunRx.webp' },
  { name: 'DMEScripts', logo: '/logos/image-50.webp' },
  { name: 'KeyHIE', logo: '/logos/KeyHIE.webp' },
  { name: 'Secure Exchange Solutions', logo: '/logos/Secure-Exchange-Solutions.png.png' },
];

const testimonials = [
  {
    quote: "We signed an enterprise-wide integration deal with BridgeGate because of the results we achieved with their product. We realised immediate gains in productivity along with vastly improved data & process management. In our business, data must flow across many platforms seamlessly, quickly and dependably.",
    author: "Vice President of IT",
    org: "Enterprise Technology Company",
    initials: "VP",
  },
  {
    quote: "We have peace of mind with BridgeGate's robust, scalable and easy to use integration platform. We deployed it within hours, rather than days or weeks, and following the migration of my financial processes my financials close time was reduced by 75%.",
    author: "Chief Information Officer",
    org: "Large Service Organization",
    initials: "CIO",
  },
  {
    quote: "BridgeGate has facilitated data ingestion and integration into a routine task. Through the reuse of established templates, onboarding new clients can be accomplished within an hour — basically at Zero Cost.",
    author: "IT Finance Manager",
    org: "Enterprise Data Company",
    initials: "IT",
  },
];

const differentiators = [
  {
    icon: <Globe size={22} />,
    title: 'Enterprise-Native from Day One',
    desc: "We didn't adapt a generic tool for enterprise data. Vorro was purpose-built for complex, multi-system data orchestration from the ground up.",
  },
  {
    icon: <Award size={22} />,
    title: 'Full-Stack Coverage',
    desc: 'From raw data interfacing to AI-ready pipelines to automated workflows — one platform, one vendor, zero gaps.',
  },
  {
    icon: <Users size={22} />,
    title: 'Proven at Enterprise Scale',
    desc: '22+ enterprise deployments across industries including healthcare, retail, insurance, logistics, and specialty networks.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'AI-First Architecture',
    desc: 'Purpose-built for the era of AI — with governed, clean data pipelines and intelligent orchestration across every data source.',
  },
];

/* ---- Intersection Observer Hook ---- */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ---- Counter ---- */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.5);
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    const duration = 1800;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = target.includes('.') ? count.toFixed(1) : Math.round(count);
  const prefix = target.match(/^[^0-9]*/)?.[0] || '';
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

/* ---- Section Fade ---- */
function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---- Industry Typewriter Hook ---- */
const INDUSTRIES = [
  'Healthcare', 'Retail & Ecommerce', 'Insurance', 'HR Technology',
  'Logistics', 'Financial Services', 'Life Sciences', 'Government',
];

function IndustryTypewriter() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const full = INDUSTRIES[idx];

  useEffect(() => {
    let timeout;
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % INDUSTRIES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, full]);

  return (
    <span className="industry-tw">
      {displayed}
      <span className="industry-tw-cursor" aria-hidden="true">|</span>
    </span>
  );
}

/* ---- Problem Navigator Component ---- */
function ProblemNavigator() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [displayIdx, setDisplayIdx] = useState(0);
  const problem = industryProblems[displayIdx];

  const switchTo = (idx) => {
    if (idx === activeIdx || fading) return;
    setFading(true);
    setTimeout(() => {
      setDisplayIdx(idx);
      setActiveIdx(idx);
      setFading(false);
    }, 240);
  };

  return (
    <div className="pn-root">

      {/* Left column — industry selector */}
      <div className="pn-selector" role="tablist">
        {industryProblems.map((p, i) => (
          <button
            key={p.tab}
            role="tab"
            aria-selected={i === activeIdx}
            className={`pn-industry-btn${i === activeIdx ? ' pn-industry-btn--active' : ''}`}
            style={{ '--ind-color': p.color }}
            onClick={() => switchTo(i)}
          >
            <span className="pn-industry-accent" />
            <span className="pn-industry-inner">
              <span className="pn-industry-name">{p.tab}</span>
              <span className="pn-industry-preview">{p.title}</span>
            </span>
            <ArrowRight size={14} className="pn-industry-arrow" />
          </button>
        ))}
      </div>

      {/* Center column — giant stat focal point */}
      <div className={`pn-focal${fading ? ' pn-focal--fade' : ''}`}>
        <div className="pn-focal-eyebrow" style={{ color: problem.color }}>
          {problem.category}
        </div>
        <div className="pn-focal-stat" style={{ color: problem.color }}>
          {problem.stats[0].val}
        </div>
        <div className="pn-focal-stat-label">{problem.stats[0].label}</div>
        {problem.stats[0].citation && (
          <div className="pn-focal-citation">
            {problem.stats[0].url ? (
              <a href={problem.stats[0].url} target="_blank" rel="noopener noreferrer" className="pn-focal-citation-link">
                {problem.stats[0].citation} ↗
              </a>
            ) : problem.stats[0].citation}
          </div>
        )}
        <div className="pn-focal-divider" style={{ background: problem.color }} />
        <p className="pn-focal-desc">{problem.desc}</p>
        {problem.stats[1] && (
          <div className="pn-focal-secondary-stat">
            <span style={{ color: problem.color }}>{problem.stats[1].val}</span>
            <span>{problem.stats[1].label}</span>
          </div>
        )}
        {problem.stats[1]?.citation && (
          <div className="pn-focal-citation">
            {problem.stats[1].url ? (
              <a href={problem.stats[1].url} target="_blank" rel="noopener noreferrer" className="pn-focal-citation-link">
                {problem.stats[1].citation} ↗
              </a>
            ) : problem.stats[1].citation}
          </div>
        )}
        <Link
          to={`/solutions/${problem.tab.toLowerCase().replace(/\s+/g, '-')}`}
          className="pn-focal-link"
          style={{ '--ind-color': problem.color }}
        >
          See how Vorro solves this for {problem.tab} <ArrowRight size={13} />
        </Link>
      </div>

      {/* Right column — numbered solution list */}
      <div className={`pn-solutions${fading ? ' pn-solutions--fade' : ''}`}>
        <div className="pn-solutions-heading">How Vorro fixes it</div>
        <ol className="pn-solutions-list">
          {problem.solutions.map((s, i) => (
            <li
              key={s}
              className="pn-solutions-item"
              style={{ animationDelay: `${i * 55}ms`, '--ind-color': problem.color }}
            >
              <span className="pn-solutions-num" style={{ color: problem.color }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}

/* ============================================
   HOME PAGE
   ============================================ */
export default function Home() {
  const [activeCapIdx, setActiveCapIdx] = useState(0);
  const activeCap = capabilities[activeCapIdx];
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <main className="home-page">
      {/* ==========================================
          PROBLEM HERO + PROBLEM NAVIGATOR
          One continuous dark zone. Hero states the
          problem bluntly. Navigator makes it personal.
         ========================================== */}
      <div className="dark-zone problem-hero-zone">
        <div className="dz-lines" aria-hidden="true" />
        <div className="dz-orb-purple" aria-hidden="true" />
        <div className="dz-orb-cyan2" aria-hidden="true" />

        {/* — PROBLEM STATEMENT HERO — centred */}
        <section className="problem-hero">
          <div className="container problem-hero-inner">
            <FadeIn>
              <div className="ph-kicker">
                <span className="ph-kicker-dot" />
                Enterprise Data Problem
              </div>
            </FadeIn>
            <FadeIn delay={60}>
              <h1 className="ph-headline">
                Your enterprise data is<br />
                <span className="ph-accent">broken, siloed, and bleeding money.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={120}>
              <p className="ph-sub">
                Disconnected systems. Manual reconciliation. Compliance gaps.
                The real cost isn&apos;t just wasted IT spend — it&apos;s every decision made on bad data.
              </p>
            </FadeIn>
            <FadeIn delay={180}>
              <div className="ph-scroll-cue">
                <span>Pick your industry below — see exactly what it&apos;s costing you</span>
                <div className="ph-scroll-arrow" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3v14M4 11l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* — PROBLEM NAVIGATOR — */}
        <section className="section prob-nav-section">
          <div className="container">
            <FadeIn delay={100}>
              <ProblemNavigator />
            </FadeIn>
            <FadeIn delay={200}>
              <Link to="/enterprise-data-fragmentation" className="stat-glass-banner">
                <span className="stat-glass-orb stat-glass-orb-1" aria-hidden="true" />
                <span className="stat-glass-orb stat-glass-orb-2" aria-hidden="true" />
                <span className="stat-glass-orb stat-glass-orb-3" aria-hidden="true" />
                <div className="stat-glass-number">83%</div>
                <div className="stat-glass-body">
                  <p className="stat-glass-text">
                    of organizations report that data silos significantly hinder their ability to deploy AI and analytics at scale
                  </p>
                  <div className="stat-glass-source">
                    Wavestone (formerly NewVantage Partners) &mdash; Data &amp; AI Leadership Executive Survey 2024
                    <a
                      href="https://www.wavestone.com/en/insight/data-ai-executive-leadership-survey-2024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stat-glass-cta"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read the research &rarr;
                    </a>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>{/* end .problem-hero-zone */}

      {/* ==========================================
          PROOF BAND — dark, full-bleed stats wall
         ========================================== */}
      <section className="proof-band">
        <div className="container">
          <FadeIn>
            <p className="proof-band-label">The fix exists. 22+ enterprises already solved it.</p>
          </FadeIn>
          <div className="proof-band-stats">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <div className="proof-stat">
                  <span className="proof-stat-val" style={{ color: i === 0 ? '#20D3EF' : i === 1 ? '#AC4197' : i === 2 ? '#02B164' : '#F17A42' }}>{s.value}</span>
                  <span className="proof-stat-lbl">{s.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="logos-section">
        <div className="container">
          <FadeIn>
            <div className="logos-label">Trusted by leading organizations across industries</div>
          </FadeIn>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="marquee-item">
                  <img src={c.logo} alt={c.name} className="logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS — removed in favour of proof-band above */}

      {/* DARK ZONE — shared background for platform + why-vorro */}
      <div className="dark-zone">
        {/* Decorative background graphics */}
        <div className="dz-lines" aria-hidden="true" />
        <div className="dz-orb-purple" aria-hidden="true" />
        <div className="dz-orb-cyan2" aria-hidden="true" />

      {/* PLATFORM OVERVIEW */}
      <section className="platform-section">
        <div className="platform-bg-grid" />
        <div className="container">

          {/* Industry-agnostic platform reveal — typewriter + hub diagram together */}
          <div className="plt-reveal-section">
            {/* Text layer — centred, above the hub */}
            <FadeIn>
              <div className="plt-reveal-text">
                <div className="eyebrow">The Fix</div>
                <h2 className="plt-reveal-headline">
                  One platform that solves it<br />
                  for <IndustryTypewriter />
                </h2>
                <p className="plt-reveal-sub">
                  Seven integrated capabilities. One unified data hub. No rip-and-replace required.
                </p>
              </div>
            </FadeIn>

            {/* Orbital hub — full-bleed behind the text */}
            <FadeIn delay={60}>
              <div className="capabilities-wrapper plt-hub-visual">
                <div className="capabilities-frame">
                  <div className="frame-grid-overlay" />
                  <div className="frame-particles" />
                  <div className="frame-orbital-ring" />
                  <div className="frame-content">
                    <div className="frame-hub-area">
                      <div className="frame-connections">
                        <svg viewBox="0 0 1200 675" preserveAspectRatio="none" aria-hidden="true">
                          <defs>
                            <linearGradient id="grad1" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="600" y2="120">
                              <stop offset="0%" stopColor="#20D3EF" stopOpacity="0" /><stop offset="50%" stopColor="#20D3EF" stopOpacity="1" /><stop offset="100%" stopColor="#20D3EF" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="grad2" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="928" y2="210">
                              <stop offset="0%" stopColor="#AC4197" stopOpacity="0" /><stop offset="50%" stopColor="#AC4197" stopOpacity="1" /><stop offset="100%" stopColor="#AC4197" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="grad3" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="1009" y2="413">
                              <stop offset="0%" stopColor="#02B164" stopOpacity="0" /><stop offset="50%" stopColor="#02B164" stopOpacity="1" /><stop offset="100%" stopColor="#02B164" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="grad4" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="782" y2="576">
                              <stop offset="0%" stopColor="#F17A42" stopOpacity="0" /><stop offset="50%" stopColor="#F17A42" stopOpacity="1" /><stop offset="100%" stopColor="#F17A42" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="grad5" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="418" y2="576">
                              <stop offset="0%" stopColor="#20D3EF" stopOpacity="0" /><stop offset="50%" stopColor="#20D3EF" stopOpacity="1" /><stop offset="100%" stopColor="#20D3EF" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="grad6" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="191" y2="413">
                              <stop offset="0%" stopColor="#AC4197" stopOpacity="0" /><stop offset="50%" stopColor="#AC4197" stopOpacity="1" /><stop offset="100%" stopColor="#AC4197" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="grad7" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="272" y2="210">
                              <stop offset="0%" stopColor="#02B164" stopOpacity="0" /><stop offset="50%" stopColor="#02B164" stopOpacity="1" /><stop offset="100%" stopColor="#02B164" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path className="conn-base" d="M600 358 L600 120" />
                          <path className="conn-glow" stroke="url(#grad1)" d="M600 358 L600 120" />
                          <path className="conn-base" d="M600 358 L928 210" />
                          <path className="conn-glow" stroke="url(#grad2)" d="M600 358 L928 210" style={{ animationDelay: '-1s' }} />
                          <path className="conn-base" d="M600 358 L1009 413" />
                          <path className="conn-glow" stroke="url(#grad3)" d="M600 358 L1009 413" style={{ animationDelay: '-2s' }} />
                          <path className="conn-base" d="M600 358 L782 576" />
                          <path className="conn-glow" stroke="url(#grad4)" d="M600 358 L782 576" style={{ animationDelay: '-3s' }} />
                          <path className="conn-base" d="M600 358 L418 576" />
                          <path className="conn-glow" stroke="url(#grad5)" d="M600 358 L418 576" style={{ animationDelay: '-4s' }} />
                          <path className="conn-base" d="M600 358 L191 413" />
                          <path className="conn-glow" stroke="url(#grad6)" d="M600 358 L191 413" style={{ animationDelay: '-5s' }} />
                          <path className="conn-base" d="M600 358 L272 210" />
                          <path className="conn-glow" stroke="url(#grad7)" d="M600 358 L272 210" style={{ animationDelay: '-6s' }} />
                        </svg>
                      </div>
                      <div className="frame-center-core">
                        <div className="core-inner">
                          <div className="core-kicker">Unified Architecture</div>
                          <div className="core-title">AI Enterprise Data Hub</div>
                        </div>
                      </div>
                      <div className="frame-pillars">
                        {capabilities.map((cap, i) => (
                          <Link
                            key={cap.num}
                            to={cap.to}
                            className={`frame-pillar p${i + 1}`}
                            style={{ '--accent': cap.color === 'cyan' ? '#20D3EF' : cap.color === 'primary' ? '#AC4197' : cap.color === 'green' ? '#02B164' : cap.color === 'orange' ? '#F17A42' : '#7b82e0' }}
                          >
                            <div className="cap-num">{cap.num}</div>
                            <div className="pillar-label">{cap.label}</div>
                            <div className="pillar-micro">{cap.bullets[0]}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Scroll nudge into the capability tabs */}
            <div className="plt-reveal-scroll-nudge">
              <span>Explore each capability</span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 3v14M4 11l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Icon selector row */}
          <FadeIn>
            <div className="plt-selector" id="capability-tabs">
              {capabilities.map((cap, i) => (
                <button
                  key={cap.num}
                  className={`plt-sel-btn${i === activeCapIdx ? ' plt-sel-active' : ''}`}
                  onClick={() => setActiveCapIdx(i)}
                  style={{ '--acc': accentColors[cap.color] || accentColors.primary }}
                  title={cap.label}
                >
                  <div className="plt-sel-icon">{cap.icon}</div>
                  <div className="plt-sel-num">{cap.num}</div>
                  <div className="plt-sel-lbl">{cap.label}</div>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Editorial showcase */}
          <div className="plt-showcase" key={activeCap.num}>
            <div className="plt-show-left">
              <div className="plt-show-meta">
                <span className="plt-show-num">{activeCap.num}</span>
                <span
                  className="plt-show-tag"
                  style={{ color: accentColors[activeCap.color], borderColor: `${accentColors[activeCap.color]}40`, background: `${accentColors[activeCap.color]}15` }}
                >
                  {activeCap.label}
                </span>
              </div>
              <h3 className="plt-show-title">{activeCap.title}</h3>
              <p className="plt-show-desc">{activeCap.desc}</p>

              <div className="plt-show-stats">
                {activeCap.stats.map(s => (
                  <div key={s.label} className="plt-stat">
                    <div className="plt-stat-val" style={{ color: accentColors[activeCap.color] }}>{s.value}</div>
                    <div className="plt-stat-lbl">{s.label}</div>
                  </div>
                ))}
              </div>

              <ul className="plt-bullets">
                {activeCap.bullets.map(b => (
                  <li key={b}><CheckCircle2 size={14} /> {b}</li>
                ))}
              </ul>

              <Link to={activeCap.to} className="btn btn-primary btn-md plt-cta">
                Explore {activeCap.label} <ArrowRight size={14} />
              </Link>
            </div>

            <div className="plt-show-right">
              <CapabilityVisual cap={activeCap} />
            </div>
          </div>

        </div>
      </section>

      {/* WHY VORRO */}
      <section className="section bg-navy why-section">
        <div className="container">
          <FadeIn>
            <div className="section-header centered dark">
              <div className="eyebrow">Why Teams Trust Vorro</div>
              <h2>Purpose-Built for the Problems<br />Others Patch Around.</h2>
              <p>
                Generic integration tools require months of custom engineering to handle enterprise-grade complexity.
                Vorro was purpose-built for exactly this — from{' '}
                <strong style={{ color: 'var(--color-cyan)', fontWeight: 'var(--font-bold)' }}>day one</strong>.
              </p>
            </div>
          </FadeIn>
          <div className="why-grid">
            {differentiators.map((d, i) => (
              <FadeIn key={d.title} delay={i * 80}>
                <div className="why-card">
                  <div className="why-card-icon">
                    {d.icon}
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="why-compare-links">
              <span>Compare Vorro vs.</span>
              {[
                { label: 'Redox', to: '/vorro-vs-redox' },
                { label: 'Mulesoft', to: '/vorro-vs-mulesoft' },
                { label: 'Rhapsody', to: '/vorro-vs-rhapsody' },
                { label: 'Datavant', to: '/vorro-vs-datavant' },
                { label: 'Mirth', to: '/vorro-vs-mirth' },
              ].map((l) => (
                <Link key={l.label} to={l.to} className="why-compare-link">
                  {l.label} <ChevronRight size={12} />
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS — inside dark-zone so background stays seamless */}
      <section className="section testimonials-section">
        <div className="container">
          <FadeIn>
            <div className="section-header centered dark">
              <div className="eyebrow">Proof It Works</div>
              <h2>Problems Solved. Results Measured.</h2>
              <p>Organizations across industries eliminated their biggest data problems with Vorro — here&apos;s what happened next.</p>
            </div>
          </FadeIn>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 100}>
                <blockquote className="cs-quote-block" style={{ '--accent': '#AC4197' }}>
                  <div className="cs-quote-decoration" style={{ background: 'linear-gradient(135deg, #AC4197 0%, #d376b8 100%)' }}>
                    <Quote size={24} />
                  </div>
                  <p className="cs-quote-text">{t.quote}</p>
                  <footer className="cs-quote-footer">
                    <div className="cs-quote-avatar" style={{ background: 'linear-gradient(135deg, #AC4197 0%, #d376b8 100%)' }}>
                      {t.initials}
                    </div>
                    <div>
                      <cite className="cs-quote-author">{t.author}</cite>
                      <span className="cs-quote-company">{t.org}</span>
                    </div>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="case-studies-cta">
              <Link to="/case-studies" className="btn btn-ghost-white btn-lg">
                View All Case Studies <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      </div>{/* end .dark-zone */}

      {/* ==========================================
          CLOSING DARK ZONE — Free Tools + Final CTA
          One continuous section, no white gaps
         ========================================== */}
      <div className="closing-dark-zone">
        <div className="dz-lines" aria-hidden="true" />
        <div className="dz-orb-purple" aria-hidden="true" />
        <div className="dz-orb-cyan2" aria-hidden="true" />

        {/* Free Tools strip */}
        <FreeToolsBanner />

        {/* Final CTA — full-bleed, no floating card */}
        <section className="final-cta-section">
          <div className="container final-cta-inner">
            <FadeIn>
              <div className="final-cta-eyebrow">
                <Zap size={12} />
                Stop Paying for Broken Data
              </div>
            </FadeIn>
            <FadeIn delay={60}>
              <h2 className="final-cta-headline">
                Your Data Problem Has a Fix.<br />
                Let&apos;s Map It Together.
              </h2>
            </FadeIn>
            <FadeIn delay={120}>
              <p className="final-cta-sub">
                Tell us your biggest data challenge. Our engineers will assess your environment
                and show you exactly how Vorro eliminates it — no generic demos, no guesswork.
              </p>
            </FadeIn>
            <FadeIn delay={180}>
              <div className="final-cta-actions">
                <button onClick={() => setDemoModalOpen(true)} className="btn btn-cyan btn-xl">
                  Show Me the Fix <ArrowRight size={18} />
                </button>
                <Link to="/enterprise-data-fragmentation" className="btn btn-ghost-white btn-xl">
                  See the Cost of Inaction
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="final-cta-trust">
                {['SOC 2 Type II', 'HIPAA Compliant', 'Enterprise-Grade Security', 'Fully Managed'].map((b) => (
                  <span key={b} className="final-cta-trust-badge">
                    <CheckCircle2 size={11} /> {b}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </div>

      {/* Book Demo Modal */}
      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </main>
  );
}

/* ---- Capability Visual Mockup ---- */
const accentColors = {
  primary: '#AC4197',
  cyan: '#20D3EF',
  navy: '#7b82e0',
  green: '#02B164',
  orange: '#F17A42',
};

/* ---- Unique per-capability product UI visuals ---- */

function CapViz01({ accent }) {
  return (
    <div style={{ padding: '0.25rem 0' }}>
      <div className="cviz-nlp-doc">
        <div className="cviz-section-lbl">Document Input</div>
        <p className="cviz-nlp-text">
          Customer with{' '}
          <mark style={{ background: `${accent}28`, color: accent, borderRadius: 3, padding: '1px 4px' }}>Premium Account (TIR-9812)</mark>
          {' '}and{' '}
          <mark style={{ background: '#20D3EF22', color: '#20D3EF', borderRadius: 3, padding: '1px 4px' }}>Active Claim (CLM-4471)</mark>
          . Status:{' '}
          <mark style={{ background: '#02B16422', color: '#02B164', borderRadius: 3, padding: '1px 4px' }}>Approved</mark>.
        </p>
      </div>
      <div className="cviz-arrow-label">&#8595; AI Extraction &#8594; Structured Output</div>
      <div className="cviz-entity-grid">
        {[
          { type: 'Entity', code: 'TIR-9812', label: 'Account Tier', color: accent },
          { type: 'Status', code: 'CLM-4471', label: 'Claim ID', color: '#20D3EF' },
          { type: 'Decision', code: 'APPRVD', label: 'Approved', color: '#02B164' },
        ].map(e => (
          <div key={e.code} className="cviz-entity-chip" style={{ borderColor: `${e.color}40` }}>
            <span className="cviz-chip-type" style={{ color: e.color }}>{e.type}</span>
            <span className="cviz-chip-code">{e.code}</span>
            <span className="cviz-chip-label">{e.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CapViz02({ accent }) {
  return (
    <div style={{ padding: '0.25rem 0' }}>
      <div className="cviz-chat-bubble">
        <span>&#128172;</span>
        <span>&ldquo;Show order fulfillment rate by region, Q4 2024&rdquo;</span>
      </div>
      <div className="cviz-table-wrap">
        <table className="cviz-table">
          <thead><tr><th>Region</th><th>Fulfillment</th><th>vs Q3</th></tr></thead>
          <tbody>
            <tr><td>Northeast</td><td style={{ color: accent, fontWeight: 700 }}>94.2%</td><td style={{ color: '#02B164' }}>&#8679; +3.1%</td></tr>
            <tr><td>Midwest</td><td style={{ color: accent, fontWeight: 700 }}>91.6%</td><td style={{ color: '#02B164' }}>&#8679; +1.8%</td></tr>
            <tr><td>West</td><td style={{ color: accent, fontWeight: 700 }}>88.3%</td><td style={{ color: 'rgba(255,255,255,0.35)' }}>&rarr; 0.2%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CapViz03({ accent }) {
  const items = [
    { label: 'Data Privacy & Security Policy', ok: true },
    { label: 'GDPR / CCPA Compliance', ok: true },
    { label: 'SOC 2 Type II Controls', ok: true },
    { label: 'ISO 27001 Framework', ok: false },
  ];
  return (
    <div className="cviz-compliance">
      {items.map(item => (
        <div key={item.label} className="cviz-comp-item">
          <span className="cviz-comp-check" style={{ color: item.ok ? '#02B164' : accent }}>
            {item.ok ? '✓' : '●'}
          </span>
          <span className="cviz-comp-label">{item.label}</span>
          <span className="cviz-comp-badge" style={{
            background: item.ok ? 'rgba(2,177,100,0.12)' : `${accent}18`,
            color: item.ok ? '#02B164' : accent,
            borderColor: item.ok ? 'rgba(2,177,100,0.3)' : `${accent}40`,
          }}>
            {item.ok ? 'Compliant' : 'Active'}
          </span>
        </div>
      ))}
    </div>
  );
}

function CapViz04({ accent }) {
  const commits = [
    { hash: 'a1b2c', msg: 'Order schema mapping v1.0', time: '3 days ago', tag: 'v1.0' },
    { hash: 'd4e5f', msg: 'Product taxonomy normalization', time: '2 days ago' },
    { hash: 'g7h8i', msg: 'Hotfix: date format edge case', time: '1 day ago' },
    { hash: 'j0k1l', msg: 'API v3 upgrade + rollback', time: 'Today', tag: 'v2.0', active: true },
  ];
  return (
    <div className="cviz-timeline">
      {commits.map(c => (
        <div key={c.hash} className={`cviz-commit${c.active ? ' cviz-commit-active' : ''}`}>
          <div className="cviz-commit-dot" style={{
            background: c.active ? accent : 'rgba(255,255,255,0.18)',
            boxShadow: c.active ? `0 0 10px ${accent}` : 'none',
          }} />
          <div className="cviz-commit-body">
            <div className="cviz-commit-msg">{c.msg}</div>
            <div className="cviz-commit-meta">
              <code className="cviz-commit-hash">{c.hash}</code>
              <span className="cviz-commit-time">{c.time}</span>
            </div>
          </div>
          {c.tag && <span className="cviz-commit-tag" style={{ color: accent, borderColor: `${accent}50` }}>{c.tag}</span>}
        </div>
      ))}
    </div>
  );
}

function CapViz05({ accent }) {
  const ins  = ['REST / JSON', 'EDI X12', 'SOAP / XML'];
  const outs = ['GraphQL', 'CSV / Flat', 'Parquet'];
  return (
    <div className="cviz-hub">
      <div className="cviz-hub-col">
        {ins.map(p => (
          <div key={p} className="cviz-hub-chip">
            <span className="cviz-hub-dot" style={{ background: accent }} />
            <span>{p}</span>
            <span className="cviz-hub-arr">&rarr;</span>
          </div>
        ))}
      </div>
      <div className="cviz-hub-core" style={{ borderColor: accent, boxShadow: `0 0 20px ${accent}30` }}>
        <div className="cviz-hub-core-sub">BridgeGate</div>
        <div className="cviz-hub-core-main">EiPaaS</div>
      </div>
      <div className="cviz-hub-col">
        {outs.map(p => (
          <div key={p} className="cviz-hub-chip">
            <span className="cviz-hub-arr">&rarr;</span>
            <span>{p}</span>
            <span className="cviz-hub-dot" style={{ background: '#02B164' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CapViz06({ accent }) {
  const tiers = [
    { name: 'Bronze', desc: 'Raw Ingest — 44M+ files', color: '#CD853F' },
    { name: 'Silver', desc: 'Cleansed & Normalized', color: '#A8A9AD' },
    { name: 'Gold',   desc: 'ML-Ready — 25M rec/day',  color: '#FFD700' },
  ];
  return (
    <div className="cviz-medallion">
      {tiers.map((tier, i) => (
        <div key={tier.name}>
          <div className="cviz-tier" style={{ borderColor: `${tier.color}40` }}>
            <span className="cviz-tier-badge" style={{ background: `${tier.color}18`, color: tier.color, borderColor: `${tier.color}40` }}>
              {tier.name}
            </span>
            <span className="cviz-tier-desc">{tier.desc}</span>
          </div>
          {i < 2 && <div className="cviz-tier-arrow">&darr;</div>}
        </div>
      ))}
      <div className="cviz-medallion-out">&rarr; Databricks &middot; SageMaker &middot; Snowflake &middot; dbt</div>
    </div>
  );
}

function CapViz07({ accent }) {
  const steps = [
    { label: 'Request Submitted', detail: 'via REST API trigger', status: 'done' },
    { label: 'AI Validation Review', detail: '0.4s decision time', status: 'done' },
    { label: 'Eligibility Check', detail: 'In Progress&hellip;', status: 'active' },
    { label: 'Auto-Approval Decision', detail: 'Awaiting result', status: 'pending' },
  ];
  return (
    <div style={{ padding: '0.25rem 0' }}>
      <div className="cviz-wf-title">Approval Workflow Pipeline — Live</div>
      <div className="cviz-steps">
        {steps.map(step => (
          <div key={step.label} className={`cviz-step cviz-step-${step.status}`}>
            <div className="cviz-step-dot" style={step.status === 'active'
              ? { background: `${accent}22`, borderColor: accent, color: accent, boxShadow: `0 0 8px ${accent}50` }
              : {}}>
              {step.status === 'done' ? '✓' : step.status === 'active' ? '▶' : '○'}
            </div>
            <div className="cviz-step-body">
              <div className="cviz-step-label">{step.label}</div>
              <div className="cviz-step-detail" dangerouslySetInnerHTML={{ __html: step.detail }} />
            </div>
          </div>
        ))}
      </div>
      <div className="cviz-wf-kpis">
        <span><b style={{ color: accent }}>80%</b> auto-approved</span>
        <span><b style={{ color: '#02B164' }}>2.4s</b> avg decision</span>
        <span><b style={{ color: '#FFD700' }}>500+</b> flows</span>
      </div>
    </div>
  );
}

function CapabilityVisual({ cap }) {
  const accent = accentColors[cap.color] || accentColors.primary;
  const renders = {
    '01': <CapViz01 accent={accent} />,
    '02': <CapViz02 accent={accent} />,
    '03': <CapViz03 accent={accent} />,
    '04': <CapViz04 accent={accent} />,
    '05': <CapViz05 accent={accent} />,
    '06': <CapViz06 accent={accent} />,
    '07': <CapViz07 accent={accent} />,
  };
  return (
    <div className="capviz">
      <div className="capviz-main">
        <div className="capviz-header">
          <div className="capviz-icon" style={{ background: `${accent}22`, color: accent }}>
            {cap.icon}
          </div>
          <div className="capviz-header-text">
            <div className="capviz-num">{cap.num}</div>
            <div className="capviz-label">{cap.label}</div>
          </div>
          <div className="capviz-live">
            <span className="capviz-live-dot" />
            Live Platform
          </div>
        </div>
        {renders[cap.num] || renders['01']}
      </div>
    </div>
  );
}
