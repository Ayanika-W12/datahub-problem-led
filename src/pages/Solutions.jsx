import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const byIntegrationType = [
  {
    title: 'System Integrations',
    sub: 'Connect any enterprise system — bidirectionally',
    to: '/solutions/system-integrations',
    vendors: ['Salesforce', 'SAP', 'Oracle ERP', 'Workday', 'HubSpot', '200+ more'],
    desc: 'Production-proven connectors to every major enterprise system. Real-time and batch. No rip-and-replace required.',
  },
  {
    title: 'Network Integrations',
    sub: 'Multi-party data exchange at scale',
    to: '/solutions/network-integrations',
    vendors: ['AS2 Gateways', 'EDI Clearinghouses', 'MuleSoft', 'Azure Service Bus', 'AWS EventBridge'],
    desc: 'Power network-wide data exchange across partners, regulators, and industry networks — at any scale.',
  },
  {
    title: 'Partner Integrations',
    sub: 'B2B data flows, claims & reconciliation',
    to: '/solutions/partner-integrations',
    vendors: ['SAP Ariba', 'Coupa', 'SPS Commerce', 'TrueCommerce', 'OpenText', 'IBM Sterling'],
    desc: 'Automate the full B2B data loop — EDI, invoices, orders, and reconciliation — reducing manual effort by up to 70%.',
  },
  {
    title: 'Specialized Integrations',
    sub: 'Domain-specific data connectors',
    to: '/solutions/specialized-integrations',
    vendors: ['Bloomberg', 'Plaid', 'MQTT Brokers', 'OPC-UA', 'Industry Registries', 'Vendor APIs'],
    desc: 'Connectors for the domain-specific protocols, formats, and compliance requirements that generic tools miss.',
  },
];

const byCapability = [
  {
    title: 'Data Quality',
    sub: 'Clean, accurate, trustworthy data',
    to: '/solutions/data-quality',
    icon: '⬡',
    desc: 'Record deduplication, schema validation, referential integrity checks, and continuous anomaly detection — so your data can actually be trusted.',
  },
  {
    title: 'Data Lake',
    sub: 'Bronze → Silver → Gold, ML-ready',
    to: '/solutions/data-lake',
    icon: '◈',
    desc: 'Enterprise Medallion architecture delivering analytics-ready datasets to Databricks, Snowflake, dbt, and SageMaker — across any industry.',
  },
  {
    title: 'Pipeline Auto-Healing',
    sub: 'Self-recovering data pipelines',
    to: '/solutions/pipeline-auto-healing',
    icon: '↺',
    desc: 'Pipelines that detect failures, diagnose root causes, and recover automatically — without waking up your on-call engineer at 2am.',
  },
  {
    title: 'Data Management',
    sub: 'Governed, secured, and auditable',
    to: '/solutions/data-management',
    icon: '◉',
    desc: 'Full data lineage tracking, access controls, consent management, and RBAC — across every data asset in your estate.',
  },
];

export default function Solutions() {
  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Solutions</div>
          <h1 className="vertical-hero-headline">
            Every Integration Challenge.<br />One Platform.
          </h1>
          <p className="vertical-hero-sub">
            From connecting a single system to building a governed AI-ready data lake —
            Vorro delivers production-proven solutions across the full enterprise data stack.
          </p>
          <div className="vertical-hero-actions">
            <Link to="/contact-us" className="btn btn-cyan btn-md">
              Talk to an Expert <ArrowRight size={16} />
            </Link>
            <Link to="/build-vs-buy" className="btn btn-ghost-white btn-md">
              Build vs. Buy Guide
            </Link>
          </div>
        </div>
      </section>

      {/* By Integration Type */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">By Integration Type</div>
            <h2>Connect Any System. In Any Direction.</h2>
            <p>Pre-built connectors and protocol support for every major data standard and vendor ecosystem — EDI, REST, GraphQL, SOAP, and beyond.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
            {byIntegrationType.map((sol) => (
              <Link key={sol.title} to={sol.to} style={{ textDecoration: 'none', display: 'block' }} className="card-feature">
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                  {sol.title}
                </h3>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 'var(--font-semibold)', marginBottom: '0.875rem' }}>
                  {sol.sub}
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {sol.desc}
                </p>
                <div style={{ borderTop: '1px solid var(--color-gray-100)', paddingTop: '1rem' }}>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)', fontWeight: 'var(--font-semibold)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem' }}>
                    Supported systems
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {sol.vendors.map((v) => (
                      <span key={v} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)', background: 'var(--color-gray-100)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By Capability */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">By Capability</div>
            <h2>The Infrastructure Behind Every Integration</h2>
            <p>Platform capabilities that make your integrations clean, governed, self-healing, and AI-ready.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
            {byCapability.map((cap) => (
              <Link key={cap.title} to={cap.to} style={{ textDecoration: 'none', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }} className="card-feature">
                <div style={{
                  width: '48px', height: '48px', flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-navy))',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', color: '#fff',
                }}>
                  {cap.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.2rem' }}>
                    {cap.title}
                  </h3>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 'var(--font-semibold)', marginBottom: '0.5rem' }}>
                    {cap.sub}
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65 }}>
                    {cap.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By Industry strip */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="eyebrow">By Industry</div>
            <h2>Solutions Shaped for Your Market</h2>
            <p>The same platform, configured for the specific workflows, compliance requirements, and data standards of your industry.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              { label: 'Healthcare', desc: 'Health systems, HIEs, payers, providers, and specialty networks', to: '/solutions/healthcare', color: 'var(--color-cyan)' },
              { label: 'eCommerce & Retail', desc: 'Unified product, order, and customer data across platforms', to: '/solutions/ecommerce', color: 'var(--color-primary)' },
              { label: 'Insurance', desc: 'Claims, eligibility, policy, and member data automation', to: '/solutions/insurance', color: '#4CAF50' },
              { label: 'HR Tech', desc: 'HRIS, payroll, benefits, and workforce compliance data flows', to: '/solutions/hr-tech', color: '#F59E0B' },
            ].map((ind) => (
              <Link key={ind.label} to={ind.to} style={{ textDecoration: 'none' }} className="card-feature">
                <div style={{ width: '36px', height: '4px', background: ind.color, borderRadius: '2px', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>{ind.label}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65, marginBottom: '1rem' }}>{ind.desc}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: ind.color }}>
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>
                <Zap size={10} /> Not sure where to start?
              </div>
              <h2>Let's Map Your Integration Environment</h2>
              <p>Our engineers will assess your current systems and recommend the fastest path to value — no generic demos.</p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Talk to an Expert <ArrowRight size={18} />
                </Link>
                <Link to="/case-studies" className="btn btn-ghost-white btn-xl">
                  See Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
