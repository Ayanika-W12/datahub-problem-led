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
    desc: 'Launch new applications and products into major cloud marketplaces 4X faster with streamlined, no-code onboarding.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Improve Financial Outcomes',
    desc: 'Reduce critical operational costs by eliminating up to 70% of manual data scripting, and speed up revenue cycles through cleaner data.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Scale with Confidence',
    desc: 'Manage millions of records and transactions smoothly, guaranteeing performance and uptime as your organization expands globally.',
  },
  {
    icon: <Brain size={24} />,
    title: 'Support Innovation',
    desc: 'Enable advanced initiatives like real-world evidence research, predictive analytics, and faster R&D through unified, high-quality data.',
  },
];

const capabilities = [
  {
    num: '01',
    icon: <BarChart3 size={28} />,
    label: 'AI-Driven Analytics & Insights',
    title: 'Extract Intelligence from Clinical Data',
    desc: 'Transform unstructured clinical notes, discharge summaries, and prior auth letters into structured FHIR R4 data. Auto-map to ICD-10, CPT, SNOMED CT, LOINC, and RxNorm.',
    color: 'primary',
    to: '/platform/analytics-nlp',
    bullets: ['De-identification & PHI redaction', 'Entity extraction', 'FHIR R4 structured output'],
    stats: [{ value: '99.2%', label: 'Accuracy' }, { value: '<2 min', label: 'Processing' }, { value: '25M+', label: 'Records/day' }],
    perfBars: [{ label: 'NLP Processing', pct: 95 }, { label: 'FHIR R4 Output', pct: 87 }, { label: 'Throughput', pct: 92 }],
  },
  {
    num: '02',
    icon: <Workflow size={28} />,
    label: 'Conversational AI Reporting',
    title: 'Conversational Queries. Instant Reports.',
    desc: 'Ask your data questions in plain English using Conversational AI. Get HEDIS, eCQM, QRDA, claims adjudication, and executive dashboard reports — automatically, without SQL.',
    color: 'cyan',
    to: '/platform/reporting-nlp',
    bullets: ['No SQL required', 'HEDIS, Stars, CAHPS reports', 'eCQM / QRDA I & III'],
    stats: [{ value: '6 sec', label: 'Query time' }, { value: '40+', label: 'Report types' }, { value: '0', label: 'SQL required' }],
    perfBars: [{ label: 'Query Speed', pct: 98 }, { label: 'Report Coverage', pct: 91 }, { label: 'Accuracy', pct: 94 }],
  },
  {
    num: '03',
    icon: <Shield size={28} />,
    label: 'Governance & Compliance',
    title: 'Every Federal Mandate. Automated.',
    desc: 'Stay ahead of HIPAA, 21st Century Cures Act, CMS Interoperability Rule, and TEFCA without a compliance army. Vorro automates it end-to-end.',
    color: 'navy',
    to: '/platform/governance-compliance',
    bullets: ['HIPAA Privacy & Security Rules', 'ONC Cures Act Final Rule', 'CMS Prior Auth Rule (CMS-0057-F)'],
    stats: [{ value: '100%', label: 'Audit coverage' }, { value: '3', label: 'Mandates auto' }, { value: '0', label: 'Manual steps' }],
    perfBars: [{ label: 'HIPAA Compliance', pct: 100 }, { label: 'Audit Readiness', pct: 97 }, { label: 'Policy Automation', pct: 89 }],
  },
  {
    num: '04',
    icon: <GitBranch size={28} />,
    label: 'Version Lineage & Control',
    title: 'Git-Like Versioning for Healthcare Data',
    desc: 'The first healthcare-native data version control layer. Every pipeline, mapping, and transformation is versioned, attributed, and audit-ready.',
    color: 'green',
    to: '/platform/governance-versioning',
    bullets: ['Full data lineage', 'One-click rollback', 'One-click audit exports'],
    stats: [{ value: '100%', label: 'Data lineage' }, { value: '1-click', label: 'Rollback' }, { value: '∞', label: 'Version history' }],
    perfBars: [{ label: 'Lineage Tracking', pct: 100 }, { label: 'Rollback Speed', pct: 96 }, { label: 'Audit Export', pct: 93 }],
  },
  {
    num: '05',
    icon: <Network size={28} />,
    label: 'Interfacing',
    title: 'Every Healthcare Standard. One Platform.',
    desc: 'HL7 v2, FHIR R4, EDI X12, NCPDP, C-CDA, DICOM metadata, Direct Trust — if it moves healthcare data, we speak it natively.',
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
    desc: 'Bronze → Silver → Gold data lake architecture. Ingest, cleanse, normalize, and serve ML-ready data to Azure Databricks, AWS SageMaker, Google Vertex AI, Snowflake, and dbt.',
    color: 'primary',
    to: '/platform/ai-readiness',
    bullets: ['Master Patient Index (MPI)', 'Feature store integration', 'Model drift monitoring'],
    stats: [{ value: '3-tier', label: 'Data lake' }, { value: '4+', label: 'ML platforms' }, { value: '70%', label: 'Less prep time' }],
    perfBars: [{ label: 'Data Quality', pct: 97 }, { label: 'ML Pipeline Speed', pct: 90 }, { label: 'MPI Accuracy', pct: 95 }],
  },
  {
    num: '07',
    icon: <Zap size={28} />,
    label: 'Workflow Orchestration',
    title: 'Healthcare Automation. No Code Required.',
    desc: 'AI-powered workflows for prior auth, eligibility verification, denial management, care gap outreach, and more — HIPAA-compliant by design.',
    color: 'cyan',
    to: '/platform/workflow-orchestration',
    bullets: ['500+ pre-built connectors', 'FHIR R4 event triggers', 'Human-in-the-loop approval gates'],
    stats: [{ value: '500+', label: 'Pre-built flows' }, { value: '80%', label: 'Auth auto-approve' }, { value: '<1 day', label: 'Deploy time' }],
    perfBars: [{ label: 'Automation Rate', pct: 92 }, { label: 'Prior Auth Speed', pct: 88 }, { label: 'Uptime SLA', pct: 99 }],
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
    org: "Senior Healthcare Company",
    initials: "VP",
  },
  {
    quote: "We have peace of mind with BridgeGate's robust, scalable and easy to use integration platform. We deployed it within hours, rather than days or weeks, and following the migration of my financial processes my financials close time was reduced by 75%.",
    author: "Chief Information Officer",
    org: "Senior Healthcare Company",
    initials: "CIO",
  },
  {
    quote: "BridgeGate has facilitated HL7 Data ingestion and integration into a routine task. Through the reuse of established templates, onboarding new clients can be accomplished within an hour — basically at Zero Cost.",
    author: "IT Finance Manager",
    org: "Pharmacy Benefit Manager Company",
    initials: "IT",
  },
];

const differentiators = [
  {
    icon: <Globe size={22} />,
    title: 'Healthcare-Native from Day One',
    desc: "We didn't adapt a generic iPaaS for healthcare. We built for HL7, FHIR, and EDI from the ground up.",
  },
  {
    icon: <Award size={22} />,
    title: 'Full-Stack Coverage',
    desc: 'From raw data interfacing to AI-ready pipelines to automated workflows — one platform, one vendor.',
  },
  {
    icon: <Users size={22} />,
    title: 'Proven at Enterprise Scale',
    desc: '22+ enterprise deployments across health systems, HIEs, PBMs, home health, and specialty networks.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'AI-First Architecture',
    desc: 'Purpose-built for the era of AI — with governed, clean data pipelines and intelligent orchestration.',
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

/* ============================================
   HOME PAGE
   ============================================ */
export default function Home() {
  const [activeCapIdx, setActiveCapIdx] = useState(0);
  const activeCap = capabilities[activeCapIdx];
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="container hero-split">
          {/* Left — text */}
          <FadeIn className="hero-split-text">
            <div className="hero-badge">
              <span className="badge badge-white">
                <Zap size={10} />
                AI Health Data Hub
              </span>
            </div>
            <h1 className="hero-headline">
              The AI Native Data<br />
              <span className="hero-headline-accent">Orchestration Platform,</span><br />
              Built for Healthcare.
            </h1>
            <p className="hero-sub">
              Stop chasing data. Vorro connects, monitors, and automates your healthcare data
              workflows — fully managed, low cost, ready in weeks.
            </p>
            <div className="hero-actions hero-actions-inline">
              <button onClick={() => setDemoModalOpen(true)} className="btn btn-cyan btn-md">
                Talk to an Expert <ArrowRight size={16} />
              </button>
              <Link to="/case-studies" className="btn btn-ghost-white btn-md">
                View Case Studies
              </Link>
            </div>
            <div className="hero-proof">
              <div className="hero-proof-item">
                <CheckCircle2 size={14} />
                <span>Fully Managed by Vorro</span>
              </div>
              <div className="hero-proof-item">
                <CheckCircle2 size={14} />
                <span>Proven Low Cost</span>
              </div>
              <div className="hero-proof-item">
                <CheckCircle2 size={14} />
                <span>HIPAA-compliant by design</span>
              </div>
            </div>
          </FadeIn>

          {/* Right — Platform Capabilities Frame (exact design from provided HTML) */}
          <div className="capabilities-wrapper">
            <div className="capabilities-frame">
              <div className="frame-grid-overlay" />
              <div className="frame-particles" />
              <div className="frame-orbital-ring" />

              <div className="frame-content">
                {/* Hub area with center core and pillars */}
                <div className="frame-hub-area">
                  {/* Connection lines SVG */}
                  <div className="frame-connections">
                    <svg viewBox="0 0 1200 675" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id="grad1" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="600" y2="120">
                          <stop offset="0%" stopColor="#20D3EF" stopOpacity="0" />
                          <stop offset="50%" stopColor="#20D3EF" stopOpacity="1" />
                          <stop offset="100%" stopColor="#20D3EF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="grad2" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="928" y2="210">
                          <stop offset="0%" stopColor="#AC4197" stopOpacity="0" />
                          <stop offset="50%" stopColor="#AC4197" stopOpacity="1" />
                          <stop offset="100%" stopColor="#AC4197" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="grad3" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="1009" y2="413">
                          <stop offset="0%" stopColor="#02B164" stopOpacity="0" />
                          <stop offset="50%" stopColor="#02B164" stopOpacity="1" />
                          <stop offset="100%" stopColor="#02B164" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="grad4" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="782" y2="576">
                          <stop offset="0%" stopColor="#F17A42" stopOpacity="0" />
                          <stop offset="50%" stopColor="#F17A42" stopOpacity="1" />
                          <stop offset="100%" stopColor="#F17A42" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="grad5" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="418" y2="576">
                          <stop offset="0%" stopColor="#20D3EF" stopOpacity="0" />
                          <stop offset="50%" stopColor="#20D3EF" stopOpacity="1" />
                          <stop offset="100%" stopColor="#20D3EF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="grad6" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="191" y2="413">
                          <stop offset="0%" stopColor="#AC4197" stopOpacity="0" />
                          <stop offset="50%" stopColor="#AC4197" stopOpacity="1" />
                          <stop offset="100%" stopColor="#AC4197" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="grad7" gradientUnits="userSpaceOnUse" x1="600" y1="358" x2="272" y2="210">
                          <stop offset="0%" stopColor="#02B164" stopOpacity="0" />
                          <stop offset="50%" stopColor="#02B164" stopOpacity="1" />
                          <stop offset="100%" stopColor="#02B164" stopOpacity="0" />
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

                  {/* Center Core */}
                  <div className="frame-center-core">
                    <div className="core-inner">
                      <div className="core-kicker">Unified Architecture</div>
                      <div className="core-title">AI Healthcare Data Hub</div>
                    </div>
                  </div>

                  {/* 7 Pillars */}
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
        </div>
      </section>

      {/* FREE TOOLS BANNER - right after hero */}
      <FreeToolsBanner />

      {/* STATS */}
      <section className="section-sm stats-section">
        <div className="container">
          <FadeIn>
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={s.label} className="stat-item" style={{ '--delay': `${i * 100}ms` }}>
                  <div className="stat-number gradient-text">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="logos-section">
        <div className="container">
          <FadeIn>
            <div className="logos-label">Trusted by leading healthcare organizations</div>
          </FadeIn>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="marquee-item">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="logo-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="section bg-light problem-section">
        <div className="container">
          <FadeIn>
            <div className="section-header centered">
              <div className="eyebrow">The Challenge</div>
              <h2>Healthcare Data Is <em>Still</em> Broken</h2>
              <p>
                89% of health systems cite data fragmentation as their #1 operational challenge.
                The result: AI stalls, compliance fails, and care suffers.
              </p>
            </div>
          </FadeIn>
          <div className="problem-grid">
            {problems.map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <div className="problem-card">
                  <div className="icon-box icon-box-primary icon-box-lg">
                    {p.icon}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="problem-stat-banner">
              <div className="problem-stat-number">89%</div>
              <div className="problem-stat-text">
                of health systems cite data fragmentation as their #1 operational challenge
                <div className="problem-stat-source">Source: HIMSS Analytics 2024</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="platform-section">
        <div className="platform-bg-grid" />
        <div className="container">

          {/* Header */}
          <FadeIn>
            <div className="plt-header">
              <div className="eyebrow">The Platform</div>
              <h2>Seven Capabilities.<br />One Integrated Platform.</h2>
            </div>
          </FadeIn>

          {/* Icon selector row */}
          <FadeIn>
            <div className="plt-selector">
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
              <div className="eyebrow">Why Vorro</div>
              <h2>Built for Healthcare.<br />Not Adapted For It.</h2>
              <p>
                We didn't bolt healthcare onto a generic integration platform.
                Vorro was purpose-built for HL7, FHIR, and EDI — from day one.
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

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <FadeIn>
            <div className="section-header centered">
              <div className="eyebrow">Client Outcomes</div>
              <h2>Results That Speak for Themselves</h2>
              <p>Healthcare organizations across the country trust Vorro to power their data infrastructure.</p>
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
              <Link to="/case-studies" className="btn btn-secondary btn-lg">
                View All Case Studies <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section cta-outer">
        <div className="container">
          <FadeIn>
            <div className="cta-banner">
              <div className="cta-banner-content">
                <div className="badge badge-white" style={{ marginBottom: '1.5rem' }}>
                  <Zap size={10} /> Ready to Transform Your Data?
                </div>
                <h2>Let's Build the Future of<br />Healthcare Data Together</h2>
                <p>
                  Talk to an expert and see how Vorro unifies your data estate,
                  automates compliance, and accelerates AI adoption.
                </p>
                <div className="cta-banner-actions">
                  <button onClick={() => setDemoModalOpen(true)} className="btn btn-cyan btn-xl">
                    Talk to an Expert <ArrowRight size={18} />
                  </button>
                  <Link to="/solutions" className="btn btn-ghost-white btn-xl">
                    Explore Solutions
                  </Link>
                </div>
                <div className="cta-trust-badges">
                  {['HIPAA Compliant', 'SOC 2 Type II', 'HITRUST Ready', 'ONC Certified'].map((b) => (
                    <span key={b} className="cta-trust-badge">
                      <CheckCircle2 size={12} /> {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

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
        <div className="cviz-section-lbl">Clinical Note Input</div>
        <p className="cviz-nlp-text">
          Patient with{' '}
          <mark style={{ background: `${accent}28`, color: accent, borderRadius: 3, padding: '1px 4px' }}>Type 2 Diabetes (E11.9)</mark>
          {' '}and{' '}
          <mark style={{ background: '#20D3EF22', color: '#20D3EF', borderRadius: 3, padding: '1px 4px' }}>Hypertension (I10)</mark>
          . Prescribed{' '}
          <mark style={{ background: '#02B16422', color: '#02B164', borderRadius: 3, padding: '1px 4px' }}>Metformin 500mg</mark>.
        </p>
      </div>
      <div className="cviz-arrow-label">⬇ NLP Extraction → FHIR R4 Output</div>
      <div className="cviz-entity-grid">
        {[
          { type: 'ICD-10', code: 'E11.9', label: 'Type 2 DM', color: accent },
          { type: 'ICD-10', code: 'I10', label: 'Hypertension', color: '#20D3EF' },
          { type: 'RxNorm', code: '861007', label: 'Metformin', color: '#02B164' },
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
        <span>💬</span>
        <span>"Show HEDIS gap closure by region, Q4 2024"</span>
      </div>
      <div className="cviz-table-wrap">
        <table className="cviz-table">
          <thead><tr><th>Region</th><th>Gap Closure</th><th>vs Q3</th></tr></thead>
          <tbody>
            <tr><td>Northeast</td><td style={{ color: accent, fontWeight: 700 }}>84.2%</td><td style={{ color: '#02B164' }}>↑ +3.1%</td></tr>
            <tr><td>Midwest</td><td style={{ color: accent, fontWeight: 700 }}>79.6%</td><td style={{ color: '#02B164' }}>↑ +1.8%</td></tr>
            <tr><td>South</td><td style={{ color: accent, fontWeight: 700 }}>71.3%</td><td style={{ color: 'rgba(255,255,255,0.35)' }}>→ 0.2%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CapViz03({ accent }) {
  const items = [
    { label: 'HIPAA Privacy & Security', ok: true },
    { label: '21st Century Cures Act', ok: true },
    { label: 'CMS-0057-F Prior Auth Rule', ok: true },
    { label: 'TEFCA / QHIN Framework', ok: false },
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
    { hash: 'a1b2c', msg: 'ADT→FHIR mapping v1.0', time: '3 days ago', tag: 'v1.0' },
    { hash: 'd4e5f', msg: 'CPT-4 normalization layer', time: '2 days ago' },
    { hash: 'g7h8i', msg: 'Hotfix: date format edge case', time: '1 day ago' },
    { hash: 'j0k1l', msg: 'FHIR R4 upgrade + rollback', time: 'Today', tag: 'v2.0', active: true },
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
  const ins  = ['HL7 v2', 'FHIR R4', 'EDI X12'];
  const outs = ['NCPDP', 'C-CDA', 'DICOM'];
  return (
    <div className="cviz-hub">
      <div className="cviz-hub-col">
        {ins.map(p => (
          <div key={p} className="cviz-hub-chip">
            <span className="cviz-hub-dot" style={{ background: accent }} />
            <span>{p}</span>
            <span className="cviz-hub-arr">→</span>
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
            <span className="cviz-hub-arr">→</span>
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
          {i < 2 && <div className="cviz-tier-arrow">↓</div>}
        </div>
      ))}
      <div className="cviz-medallion-out">→ Databricks · SageMaker · Snowflake · dbt</div>
    </div>
  );
}

function CapViz07({ accent }) {
  const steps = [
    { label: 'Request Submitted', detail: 'via FHIR R4 CRD', status: 'done' },
    { label: 'AI Clinical Review', detail: '0.4s decision time', status: 'done' },
    { label: 'Eligibility Verification', detail: 'In Progress…', status: 'active' },
    { label: 'Auto-Approval Decision', detail: 'Awaiting result', status: 'pending' },
  ];
  return (
    <div style={{ padding: '0.25rem 0' }}>
      <div className="cviz-wf-title">Prior Auth Pipeline — Live</div>
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
              <div className="cviz-step-detail">{step.detail}</div>
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
