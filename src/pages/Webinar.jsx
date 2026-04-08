import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Video } from 'lucide-react';

const upcoming = [
  {
    title: 'FHIR R4 in Practice: A CIO\'s Guide to CMS-0057-F Compliance',
    date: 'April 22, 2026',
    time: '1:00 PM ET',
    duration: '60 min',
    desc: 'Join Vorro\'s integration architects for a live walkthrough of the four FHIR APIs required under CMS-0057-F and a live demo of compliant implementations.',
  },
  {
    title: 'From Data Lake to AI: Building ML-Ready Healthcare Pipelines',
    date: 'May 6, 2026',
    time: '2:00 PM ET',
    duration: '45 min',
    desc: 'How Vorro\'s Bronze-Silver-Gold architecture delivers ML-ready datasets to Azure Databricks and Snowflake — with a live pipeline demo.',
  },
  {
    title: 'Prior Authorization Automation: End-to-End FHIR Demo',
    date: 'May 20, 2026',
    time: '1:00 PM ET',
    duration: '60 min',
    desc: 'A complete live demonstration of automated prior authorization — from PA request through decision notification — using Vorro\'s FHIR R4 workflow engine.',
  },
];

const onDemand = [
  {
    title: 'Healthcare Integration 101: HL7, FHIR, and EDI Explained',
    duration: '42 min',
    category: 'Interfacing',
  },
  {
    title: 'TEFCA and QHINs: What Health Systems Need to Know in 2026',
    duration: '38 min',
    category: 'Compliance',
  },
  {
    title: 'Building a Patient 360 from Clinical, Claims, and SDOH Data',
    duration: '55 min',
    category: 'Analytics & NLP',
  },
  {
    title: 'No-Code Integration: Replacing Mirth Connect Without the Pain',
    duration: '47 min',
    category: 'Interfacing',
  },
  {
    title: 'AI Readiness Assessment: Is Your Data Ready for Machine Learning?',
    duration: '52 min',
    category: 'AI Readiness',
  },
  {
    title: 'Claim Denial Root Cause Analysis: An Integration-First Approach',
    duration: '44 min',
    category: 'Revenue Cycle',
  },
];

export default function Webinar() {
  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Webinars</div>
          <h1 className="vertical-hero-headline">Learn From the Experts</h1>
          <p className="vertical-hero-sub">
            Live and on-demand webinars on healthcare data integration, FHIR compliance,
            AI readiness, and workflow automation — from the engineers who build this every day.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Live Sessions</div>
            <h2>Upcoming Webinars</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            {upcoming.map(w => (
              <div key={w.title} className="card-feature" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', padding: '1.75rem' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{w.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.6, marginBottom: '0.75rem' }}>{w.desc}</p>
                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>
                      <Calendar size={13} /> {w.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>
                      <Clock size={13} /> {w.time} · {w.duration}
                    </span>
                  </div>
                </div>
                <div>
                  <Link to="/contact-us" className="btn btn-primary btn-md" style={{ whiteSpace: 'nowrap' }}>
                    Register Free <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">On-Demand</div>
            <h2>Watch Anytime</h2>
          </div>
          <div className="grid-3" style={{ gap: '1.5rem', marginTop: '2rem' }}>
            {onDemand.map(w => (
              <div key={w.title} className="card-feature" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="tag tag-primary">{w.category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)' }}>
                    <Clock size={12} /> {w.duration}
                  </span>
                </div>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', lineHeight: 1.4 }}>{w.title}</h3>
                <Link to="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 'var(--font-semibold)', textDecoration: 'none', marginTop: 'auto' }}>
                  <Video size={13} /> Watch Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
