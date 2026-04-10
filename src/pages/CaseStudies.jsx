import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp, Filter, Sparkles } from 'lucide-react';
import { BookDemoModal } from '../components/ui/BookDemoModal';

const caseStudies = [
  {
    slug: 'avesis',
    title: 'Streamlining High-Volume EDI and Real-Time Eligibility Checks for Avesis',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '75%',
    statLabel: 'reduction in integration maintenance cost',
    summary: 'Implemented automated EDI pipeline and millisecond-speed eligibility verification through a high-performance API for a leading benefits administrator.',
    accent: '#0ea5e9',
  },
  {
    slug: 'dme-provider',
    title: 'Streamlining E-Prescriptions for a Leading DME Provider',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '5M+',
    statLabel: 'monthly transactions processed',
    summary: 'Ingested and translated HL7, FHIR bundles, PDFs, and JSONs from multiple EMRs into a proprietary format.',
    accent: '#0ea5e9',
  },
  {
    slug: 'pharmacy-management',
    title: 'How a Pharmacy Management Provider Found Data Harmony with BridgeGate',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '3M+',
    statLabel: 'patient records processed per day',
    summary: 'Connected hundreds of hospitals and clinics via mixed HL7 & SFTP to validate 340B eligibility in near-real-time.',
    accent: '#0ea5e9',
  },
  {
    slug: 'american-lung-association',
    title: 'How the American Lung Association Streamlined Data Integration',
    industry: 'Non-Profit',
    tag: 'Non-Profit',
    statValue: '99.9%',
    statLabel: 'uptime, 100+ clinics served',
    summary: 'Replaced manual fax-and-paper tobacco cessation referrals with automated digital exchange between hospitals, clinics, and EMRs.',
    accent: '#16a34a',
  },
  {
    slug: 'emr-provider',
    title: 'Achieving Seamless Healthcare Data Exchange for a Leading EMR Provider',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '3M+',
    statLabel: 'monthly transactions',
    summary: 'Translated complex HL7 ADT and CCD formats into a single standard across hospitals, clinics, and HIEs.',
    accent: '#0ea5e9',
  },
  {
    slug: 'healthcare-analytics',
    title: 'Scaling Healthcare Analytics: Processing 45TB of Patient Data in 44 Hours',
    industry: 'Analytics',
    tag: 'Analytics',
    statValue: '45TB',
    statLabel: 'processed in 44 hours',
    summary: 'Delivered a high-performance integration layer that ingested 44M+ patient files from 20+ health plans and 100+ hospitals.',
    accent: 'var(--color-primary)',
  },
  {
    slug: 'retail-conglomerate',
    title: 'How a Tier-1 Retail Conglomerate Standardized Technology for Two Global Brands',
    industry: 'eCommerce',
    tag: 'eCommerce',
    statValue: '65%',
    statLabel: 'faster time-to-market',
    summary: 'Migrated QVC and HSN from 10 disparate legacy servers to consistent BridgeGate instances.',
    accent: '#d97706',
  },
  {
    slug: 'health-system-ltpac',
    title: 'Enabling Care Coordination Between Health Systems and LTPAC Providers',
    industry: 'Healthcare',
    tag: 'Healthcare',
    statValue: '250+',
    statLabel: 'health systems connected',
    summary: 'Deployed BridgeGate EiPaaS to enable seamless clinical data sharing between acute care, nursing homes, and home health agencies.',
    accent: '#0ea5e9',
  },
];

const tags = ['All', 'Healthcare', 'eCommerce', 'Non-Profit', 'Analytics'];

const industryConfig = {
  Healthcare: { bg: 'rgba(14,165,233,0.08)', color: '#0ea5e9', icon: '🏥' },
  eCommerce:  { bg: 'rgba(245,158,11,0.08)', color: '#d97706', icon: '🛒' },
  'Non-Profit': { bg: 'rgba(34,197,94,0.08)', color: '#16a34a', icon: '💚' },
  Analytics:  { bg: 'rgba(172,65,151,0.08)', color: 'var(--color-primary)', icon: '📊' },
};

function AnimatedStat({ value, delay = 0 }) {
  const [displayed, setDisplayed] = useState(value);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          // Extract number from value
          const numMatch = value.match(/[\d.]+/);
          if (!numMatch) {
            setDisplayed(value);
            return;
          }
          
          const targetNum = parseFloat(numMatch[0]);
          const prefix = value.slice(0, value.indexOf(numMatch[0]));
          const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);
          
          let start = 0;
          const duration = 1200;
          const startTime = performance.now() + delay;
          
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            if (elapsed < 0) {
              requestAnimationFrame(animate);
              return;
            }
            
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = targetNum * eased;
            
            const formatted = targetNum >= 1 
              ? (targetNum % 1 === 0 ? Math.round(current) : current.toFixed(1))
              : current.toFixed(1);
            
            setDisplayed(`${prefix}${formatted}${suffix}`);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayed(value);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay]);

  return <span ref={ref}>{displayed}</span>;
}

export default function CaseStudies() {
  const [activeTag, setActiveTag] = useState('All');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  
  const filtered = activeTag === 'All' ? caseStudies : caseStudies.filter(c => c.tag === activeTag);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  return (
    <main className="csl-page">
      {/* Hero Section */}
      <section className="csl-hero">
        <div className="csl-hero-bg">
          <div className="csl-hero-gradient" />
          <div className="csl-hero-grid" />
          <div className="csl-hero-glow" />
        </div>
        
        <div className="container">
          <div className={`csl-hero-inner ${heroVisible ? 'visible' : ''}`}>
            <span className="csl-eyebrow">
              <Sparkles size={14} />
              Case Studies
            </span>
            <h1 className="csl-title">Real Outcomes from Real Clients</h1>
            <p className="csl-subtitle">
              Healthcare organizations, health plans, and enterprises trust Vorro to power their most critical data infrastructure.
            </p>
            
            {/* Stats row */}
            <div className="csl-stats-row">
              <div className="csl-stat-pill">
                <TrendingUp size={18} />
                <strong>8</strong>
                <span>Success Stories</span>
              </div>
              <div className="csl-stat-pill">
                <Building2 size={18} />
                <strong>100+</strong>
                <span>Enterprise Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="csl-content">
        <div className="container">
          {/* Filter Bar */}
          <div className="csl-filter-bar">
            <div className="csl-filter-label">
              <Filter size={16} />
              <span>Filter by industry:</span>
            </div>
            <div className="csl-filters">
              {tags.map(t => (
                <button
                  key={t}
                  className={`csl-filter ${activeTag === t ? 'active' : ''}`}
                  onClick={() => setActiveTag(t)}
                >
                  {t !== 'All' && industryConfig[t] && (
                    <span className="csl-filter-icon">{industryConfig[t].icon}</span>
                  )}
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="csl-grid">
            {filtered.map((cs, i) => {
              const config = industryConfig[cs.industry] || industryConfig['Analytics'];
              return (
                <Link 
                  to={`/case-studies/${cs.slug}`} 
                  className="csl-card"
                  key={cs.slug}
                  style={{ 
                    '--card-accent': cs.accent,
                    animationDelay: `${i * 0.05}s`
                  }}
                >
                  {/* Accent gradient */}
                  <div className="csl-card-accent" style={{ background: `linear-gradient(135deg, ${cs.accent}15 0%, transparent 60%)` }} />
                  
                  {/* Header */}
                  <div className="csl-card-header">
                    <span className="csl-card-tag" style={{ background: config.bg, color: config.color }}>
                      <span>{config.icon}</span>
                      {cs.industry}
                    </span>
                  </div>

                  {/* Stat */}
                  <div className="csl-card-stat">
                    <span className="csl-card-stat-value" style={{ color: cs.accent }}>
                      <AnimatedStat value={cs.statValue} delay={i * 100} />
                    </span>
                    <span className="csl-card-stat-label">{cs.statLabel}</span>
                  </div>

                  {/* Content */}
                  <h3 className="csl-card-title">{cs.title}</h3>
                  <p className="csl-card-summary">{cs.summary}</p>

                  {/* Footer */}
                  <div className="csl-card-footer">
                    <span className="csl-card-link" style={{ color: cs.accent }}>
                      Read Case Study
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="csl-cta">
        <div className="container">
          <div className="csl-cta-card">
            <div className="csl-cta-content">
              <h2>Ready to Become Our Next Success Story?</h2>
              <p>Schedule a demo and see how Vorro can transform your data operations.</p>
              <button onClick={() => setDemoModalOpen(true)} className="csl-cta-btn">
                Talk to an Expert
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="csl-cta-visual">
              <div className="csl-cta-orb csl-cta-orb-1" />
              <div className="csl-cta-orb csl-cta-orb-2" />
            </div>
          </div>
        </div>
      </section>

      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </main>
  );
}
