import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, Lightbulb, Star, HeartHandshake } from 'lucide-react';
import '../styles/about.css';

const values = [
  { icon: <HeartHandshake size={22} />, title: 'Customer-Centric Approach', desc: 'Our top priority is our customers — their goals, their businesses, and their long-term success.' },
  { icon: <Users size={22} />, title: 'Unified Teamwork', desc: 'We operate as one team, fostering collaboration and a shared sense of purpose. It\'s always we, never them.' },
  { icon: <Lightbulb size={22} />, title: 'Innovation-Driven', desc: 'We harness the power of technology to drive progress and stay ahead.' },
  { icon: <Star size={22} />, title: 'Commitment to Excellence', desc: 'We consistently deliver high-quality results with precision and care.' },
];

const leadership = [
  {
    name: 'Ambarish Gupta',
    title: 'Chairman',
    photo: 'https://vorro.net/wp-content/uploads/2025/07/Ambarish-Gupta.webp',
    bio: 'A global technology visionary, Ambarish sets Vorro\'s strategic direction, leveraging over two decades of experience in scaling global SaaS companies and deep expertise in strategy and engineering. As the founder of Basis Vectors and Knowlarity, he brings an unparalleled track record in driving disruptive, AI-led growth. MBA from Carnegie Mellon and B.Tech from IIT Kanpur.',
  },
  {
    name: 'Andrew Baker',
    title: 'Chief Executive Officer',
    photo: 'https://vorro.net/wp-content/uploads/2025/11/Andrew.jpeg',
    bio: 'Andrew is the driving force behind Vorro\'s mission to lead the AI transformation market in healthcare. With over 30 years of executive leadership in IT and data management across healthcare, insurance, and fintech, he guides operational excellence and market execution. He has served in executive roles at both high-growth startups and Fortune 500 companies and he holds an MBA degree from New Hampshire College.',
  },
  {
    name: 'Scott Sirdevan',
    title: 'Co-founder & CTO',
    photo: 'https://vorro.net/wp-content/uploads/2025/07/Scott-Sirdevan.webp',
    bio: 'Scott is the Chief Inventor of the BridgeGate Integration engine that powers the VIIA platform. He is responsible for architecting Vorro\'s technology to be enterprise-grade, secure, and future-proof. His deep background includes architecting large-scale integration solutions as a former enterprise integration lead at AT&T Bell Labs and Bank of America, and prior work as a software developer for the CDC. M.S. from Kansas State University.',
  },
  {
    name: 'Terry Sirdevan',
    title: 'VP - Product Development',
    photo: 'https://vorro.net/wp-content/uploads/2025/07/Terry-Sirdevan.webp',
    bio: 'Terry is the lead product strategist, responsible for transforming complex healthcare challenges into the seamless, no-code features of the VIIA platform. He drives the product roadmap from concept to deployment, ensuring BridgeGate remains the most agile integration solution on the market. Terry was a former analyst at Fidelity Information Services.',
  },
  {
    name: 'Manish Agarwal',
    title: 'VP - Head of Revenue',
    photo: 'https://vorro.net/wp-content/uploads/2025/11/Manish.png',
    bio: 'Manish is responsible for driving Vorro\'s global growth strategy and expanding market penetration for the VIIA platform. He leads the alignment of sales, marketing, and partnership initiatives, focusing on delivering measurable ROI and long-term value to healthcare enterprises seeking to modernize their data infrastructure.',
  },
  {
    name: 'Shashank Tewari',
    title: 'Chief Operating Officer',
    photo: 'https://vorro.net/wp-content/uploads/2025/07/Shashank-Tewari.webp',
    bio: 'Shashank focuses on operational excellence, ensuring a scalable and efficient delivery model for all customers. He brings over 14 years of experience in scaling high-growth SaaS and automation platforms, with a strong domain fluency in the needs of modern healthcare organizations. He leads cross-functional execution across product, technology, and operations. He is an electronics engineer and BITS Pilani alumnus.',
  },
];

const clients = [
  'Geisinger Health', 'Contexture (HIE)', 'WISHIN (HIE)', 'Therap',
  'SunRx / 340B Holdings', 'CareOne', 'MedGenerations', 'Avesis / Guardian Life',
  'DMEScripts', 'Ognomy', 'SendCare', 'Secure Exchange Solutions',
];

const stats = [
  { value: '25M+', label: 'Managed Lives Powered Annually' },
  { value: '22+', label: 'Enterprise Healthcare Clients' },
  { value: '300%', label: 'Average Client ROI' },
  { value: '100%', label: 'HIPAA-Compliant by Design' },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="vertical-hero about-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>
            About Vorro
          </div>
          <h1 className="vertical-hero-headline">
            Healthcare Data Experts.<br />
            Built for the Complexity of Care.
          </h1>
          <p className="vertical-hero-sub">
            Vorro was founded with one mission: make healthcare data work the way care teams,
            compliance officers, and data engineers need it to — reliably, securely, and at scale.
          </p>
          <div className="vertical-hero-actions">
            <Link to="/contact-us" className="btn btn-cyan btn-md">
              Talk to Our Team <ArrowRight size={16} />
            </Link>
            <Link to="/case-studies" className="btn btn-ghost-white btn-md">
              Our Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm about-stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-number gradient-text">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Goal + Philosophy */}
      <section className="section bg-light">
        <div className="container">
          <div className="about-mission-grid">
            <div>
              <div className="section-header">
                <div className="eyebrow">Our Goal</div>
                <h2>Streamline Healthcare Data and Workflows With AI</h2>
                <p>
                  We help organizations unify data, connect systems, and automate
                  decision-making without custom code or complex rebuilds.
                </p>
                <p style={{ marginTop: '1.5rem', fontWeight: 'var(--font-semibold)', color: 'var(--color-navy)' }}>
                  Technology Should Work the Way You Do
                </p>
                <p style={{ marginTop: '0.5rem' }}>
                  We believe modern healthcare shouldn't be held back by outdated processes
                  or integration pain. Vorro's AI-powered platform connects every system in
                  your data estate — EHRs, payers, labs, pharmacy, HIEs, and more — and
                  governs, enriches, and automates the flow of data across all of them.
                </p>
              </div>
            </div>
            <div className="about-mission-bullets">
              {[
                'Healthcare-native from day one — built for HL7, FHIR, and EDI',
                '22+ enterprise deployments across health systems, HIEs, PBMs, and specialty networks',
                'Enabling data transactions for over 25 million managed lives every year',
                'Fully managed, cloud-based, or self-hosted deployment options',
                'Dedicated integration engineers and project managers on every engagement',
                'No rip-and-replace — connects to your existing systems and data flows',
              ].map((item) => (
                <div key={item} className="about-bullet">
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <div className="section-header centered" style={{ marginBottom: '3rem' }}>
            <div className="eyebrow">The People Behind Vorro</div>
            <h2>Leadership Team</h2>
            <p>Decades of combined expertise across healthcare, technology, and enterprise software — now powered by AI.</p>
          </div>
          <div className="grid-3">
            {leadership.map((member) => {
              return (
                <div
                  key={member.name}
                  className="team-card"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-card-photo"
                  />
                  <div>
                    <div className="team-card-name">
                      {member.name}
                    </div>
                    <div className="team-card-title">
                      {member.title}
                    </div>
                  </div>
                  <p className="team-card-bio">
                    {member.bio}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="eyebrow">Our Values</div>
            <h2>What We Believe</h2>
            <p>The principles that guide how we build, how we serve, and how we grow.</p>
          </div>
          <div className="grid-4" style={{ marginTop: '3rem' }}>
            {values.map((v) => (
              <div key={v.title} className="card-feature">
                <div className="icon-box icon-box-primary icon-box-lg" style={{ marginBottom: '1rem' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.65 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section bg-navy">
        <div className="container">
          <div className="section-header centered dark" style={{ marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ color: 'var(--color-cyan)' }}>Trusted By</div>
            <h2>Powering Healthcare Leaders Nationwide</h2>
            <p>From regional health systems to national HIEs, PBMs, and specialty networks.</p>
          </div>
          <div className="about-clients-grid">
            {clients.map((c) => (
              <div key={c} className="about-client-card">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-outer">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Ready to Transform Your Data Infrastructure?</h2>
              <p>
                Schedule a conversation with our team and learn how Vorro can eliminate data
                fragmentation across your entire healthcare organization.
              </p>
              <div className="cta-banner-actions">
                <Link to="/contact-us" className="btn btn-cyan btn-xl">
                  Contact Our Team <ArrowRight size={18} />
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
