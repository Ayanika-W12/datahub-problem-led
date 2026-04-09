import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, ChevronRight, Zap, Shield,
  Database, Brain, GitBranch, Network, Workflow, BarChart3,
  TrendingUp, Award, Users, Globe
} from 'lucide-react';
import '../styles/home.css';

/* ---- Data ---- */
const stats = [
  { value: '25M+', label: 'Managed Lives Powered' },
  { value: '22+', label: 'Enterprise Deployments' },
  { value: '100%', label: 'HIPAA-Compliant by Design' },
  { value: '300%', label: 'Avg. Client ROI' },
];

const problems = [
  {
    icon: <Network size={24} />,
    title: 'Fragmented Systems',
    desc: 'Siloed EHRs, payers, and labs cannot communicate effectively — costing time, money, and patient outcomes.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Manual Compliance',
    desc: 'HIPAA and audit processes are manual, slow, and error-prone — creating risk and burning out your team.',
  },
  {
    icon: <Brain size={24} />,
    title: 'AI Projects Stall',
    desc: 'Machine learning initiatives fail on dirty, ungoverned data — your AI is only as good as your data foundation.',
  },
  {
    icon: <GitBranch size={24} />,
    title: 'Zero Visibility',
    desc: 'No audit trail for what changed in your data, when, or why — compliance and trust suffer.',
  },
];

const capabilities = [
  {
    num: '01',
    icon: <BarChart3 size={28} />,
    label: 'Analytics & Conversational AI',
    title: 'Extract Intelligence from Clinical Data',
    desc: 'Transform unstructured clinical notes, discharge summaries, and prior auth letters into structured FHIR R4 data. Auto-map to ICD-10, CPT, SNOMED CT, LOINC, and RxNorm.',
    color: 'primary',
    to: '/platform/analytics-nlp',
    bullets: ['De-identification & PHI redaction', 'NER & concept extraction', 'FHIR R4 structured output'],
  },
  {
    num: '02',
    icon: <Workflow size={28} />,
    label: 'Reporting & Conversational AI',
    title: 'Natural Language Queries. Instant Reports.',
    desc: 'Ask your data questions in plain English. Get HEDIS, eCQM, QRDA, claims adjudication, and executive dashboard reports — automatically, without SQL.',
    color: 'cyan',
    to: '/platform/reporting-nlp',
    bullets: ['No SQL required', 'HEDIS, Stars, CAHPS reports', 'eCQM / QRDA I & III'],
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
  },
  {
    num: '04',
    icon: <GitBranch size={28} />,
    label: 'Governance & Version Control',
    title: 'Git-Like Versioning for Healthcare Data',
    desc: 'The first healthcare-native data version control layer. Every pipeline, mapping, and transformation is versioned, attributed, and audit-ready.',
    color: 'green',
    to: '/platform/governance-versioning',
    bullets: ['Full data lineage', 'One-click rollback', 'One-click audit exports'],
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
  },
  {
    num: '07',
    icon: <Zap size={28} />,
    label: 'Workflow Orchestration',
    title: 'Healthcare Automation. No Code Required.',
    desc: 'n8n + Claude AI-powered workflows for prior auth, eligibility verification, denial management, care gap outreach, and more — HIPAA-compliant by design.',
    color: 'cyan',
    to: '/platform/workflow-orchestration',
    bullets: ['500+ pre-built connectors', 'FHIR R4 event triggers', 'Human-in-the-loop approval gates'],
  },
];

const clients = [
  'Geisinger Health', 'Contexture (HIE)', 'WISHIN (HIE)', 'Therap',
  'SunRx / 340B Holdings', 'CareOne', 'MedGenerations', 'Avesis / Guardian Life',
  'DMEScripts', 'Ognomy', 'SendCare', 'Secure Exchange Solutions',
];

const testimonials = [
  {
    quote: "Vorro eliminated months of custom integration work. We were live with real-time HL7 data flows in weeks, not quarters.",
    author: "Chief Technology Officer",
    org: "Regional Health Information Exchange",
    initials: "CTO",
  },
  {
    quote: "The governance and compliance automation alone paid for the platform. Our HIPAA audit prep went from 3 weeks to 2 days.",
    author: "VP of Compliance",
    org: "Multi-Facility Health System",
    initials: "VPC",
  },
  {
    quote: "We evaluated Redox, Mulesoft, and three others. Vorro was the only one that truly understood healthcare data from the ground up.",
    author: "Director of Data Engineering",
    org: "National Pharmacy Benefit Manager",
    initials: "DE",
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
    desc: 'Purpose-built for the era of AI — with governed, clean data pipelines and Claude AI-powered orchestration.',
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
  const [activeCapability, setActiveCapability] = useState(0);

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
        <div className="container hero-inner">
          <FadeIn>
            <div className="hero-badge">
              <span className="badge badge-white">
                <Zap size={10} />
                AI Health Data Hub
              </span>
            </div>
            <h1 className="hero-headline">
              Seven Capabilities.<br />
              <span className="hero-headline-accent">One Platform.</span><br />
              Infinite Interoperability.
            </h1>
            <p className="hero-sub">
              Vorro unifies healthcare data integration, AI readiness, governance, and workflow
              automation into a single platform — eliminating the data chaos that stalls care,
              compliance, and AI initiatives.
            </p>
            <div className="hero-actions">
              <Link to="/contact-us" className="btn btn-cyan btn-xl">
                Get a Platform Demo <ArrowRight size={18} />
              </Link>
              <Link to="/case-studies" className="btn btn-ghost-white btn-xl">
                View Case Studies
              </Link>
            </div>
            <div className="hero-proof">
              <div className="hero-proof-item">
                <CheckCircle2 size={14} />
                <span>22+ enterprise deployments</span>
              </div>
              <div className="hero-proof-item">
                <CheckCircle2 size={14} />
                <span>HIPAA-compliant by design</span>
              </div>
              <div className="hero-proof-item">
                <CheckCircle2 size={14} />
                <span>No rip-and-replace required</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Floating Capability Pills */}
        <div className="hero-capability-strip">
          <div className="container">
            <div className="capability-pills">
              {capabilities.map((cap, i) => (
                <div key={cap.num} className="capability-pill">
                  <span className="capability-pill-num">{cap.num}</span>
                  <span className="capability-pill-label">{cap.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                <div key={i} className="marquee-item">{c}</div>
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

      {/* PLATFORM CAPABILITIES */}
      <section className="section platform-section">
        <div className="container">
          <FadeIn>
            <div className="section-header centered">
              <div className="eyebrow">The Platform</div>
              <h2>Seven Capabilities. One Integrated Platform.</h2>
              <p>
                Each capability is powerful on its own. Together, they form the most complete
                healthcare data platform ever built for enterprise interoperability.
              </p>
            </div>
          </FadeIn>

          {/* Capability Tabs */}
          <FadeIn>
            <div className="capability-tabs-row">
              {capabilities.map((cap, i) => (
                <button
                  key={cap.num}
                  className={`cap-tab ${activeCapability === i ? 'active' : ''}`}
                  onClick={() => setActiveCapability(i)}
                >
                  <span className="cap-tab-num">{cap.num}</span>
                  <span>{cap.label}</span>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Active Capability Detail */}
          <div className="cap-detail-area">
            {capabilities.map((cap, i) => (
              <div
                key={cap.num}
                className={`cap-detail ${activeCapability === i ? 'active' : ''}`}
              >
                <div className="cap-detail-content">
                  <div className={`cap-detail-icon cap-icon-${cap.color}`}>
                    {cap.icon}
                  </div>
                  <div className="cap-detail-num">{cap.num}</div>
                  <div className="cap-detail-label">{cap.label}</div>
                  <h3 className="cap-detail-title">{cap.title}</h3>
                  <p className="cap-detail-desc">{cap.desc}</p>
                  <ul className="cap-detail-bullets">
                    {cap.bullets.map((b) => (
                      <li key={b}>
                        <CheckCircle2 size={16} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to={cap.to} className="btn btn-primary btn-md">
                    Explore {cap.label} <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="cap-detail-visual">
                  <CapabilityVisual num={cap.num} color={cap.color} icon={cap.icon} label={cap.label} />
                </div>
              </div>
            ))}
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
                <div className="testimonial-card">
                  <blockquote className="testimonial-quote">{t.quote}</blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div>
                      <div className="testimonial-name">{t.author}</div>
                      <div className="testimonial-title">{t.org}</div>
                    </div>
                  </div>
                </div>
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
                  Schedule a platform demo and see how Vorro unifies your data estate,
                  automates compliance, and accelerates AI adoption.
                </p>
                <div className="cta-banner-actions">
                  <Link to="/contact-us" className="btn btn-cyan btn-xl">
                    Schedule a Demo <ArrowRight size={18} />
                  </Link>
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
    </main>
  );
}

/* ---- Capability Visual Mockup ---- */
function CapabilityVisual({ num, color, icon, label }) {
  const colorMap = {
    primary: ['var(--color-primary)', 'rgba(172,65,151,0.15)'],
    cyan: ['var(--color-cyan)', 'rgba(32,211,239,0.15)'],
    navy: ['var(--color-navy)', 'rgba(32,34,79,0.15)'],
    green: ['var(--color-green)', 'rgba(2,177,100,0.15)'],
    orange: ['var(--color-orange)', 'rgba(241,122,66,0.15)'],
  };
  const [accent, bg] = colorMap[color] || colorMap.primary;

  return (
    <div className="cap-visual" style={{ '--accent': accent, '--bg': bg }}>
      <div className="cap-visual-card">
        <div className="cap-visual-header">
          <div className="cap-visual-icon">{icon}</div>
          <div>
            <div className="cap-visual-num">{num}</div>
            <div className="cap-visual-label">{label}</div>
          </div>
        </div>
        <div className="cap-visual-lines">
          {[85, 65, 90, 50, 75].map((w, i) => (
            <div key={i} className="cap-visual-line">
              <div className="cap-visual-line-fill" style={{ width: `${w}%`, animationDelay: `${i * 0.1}s` }} />
            </div>
          ))}
        </div>
        <div className="cap-visual-tags">
          {['HL7', 'FHIR R4', 'HIPAA', 'AI-Ready'].map((t) => (
            <span key={t} className="cap-visual-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
