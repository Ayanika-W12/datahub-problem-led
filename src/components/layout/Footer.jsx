import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import VorroLogo from '../ui/VorroLogo';

const footerLinks = {
  Platform: [
    { label: 'Analytics & Conversational AI', to: '/platform/analytics-nlp' },
    { label: 'Reporting & Conversational AI', to: '/platform/reporting-nlp' },
    { label: 'Governance & Compliance', to: '/platform/governance-compliance' },
    { label: 'Governance & Versioning', to: '/platform/governance-versioning' },
    { label: 'Interfacing', to: '/platform/interfacing' },
    { label: 'AI Readiness', to: '/platform/ai-readiness' },
    { label: 'Workflow Orchestration', to: '/platform/workflow-orchestration' },
  ],
  Solutions: [
    { label: 'EMR Integrations', to: '/solutions/emr-integrations' },
    { label: 'HIE Integrations', to: '/solutions/hie-integrations' },
    { label: 'Payer Integrations', to: '/solutions/payer-integrations' },
    { label: 'Pharmacy Integrations', to: '/solutions/pharmacy-integrations' },
    { label: 'Data Quality', to: '/solutions/data-quality' },
    { label: 'Data Lake', to: '/solutions/data-lake' },
    { label: 'Vorro for Startups', to: '/vorro-for-startups' },
  ],
  Resources: [
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' },
    { label: 'Webinars', to: '/webinar' },
    { label: 'Build vs. Buy', to: '/build-vs-buy' },
    { label: 'Vorro vs. Redox', to: '/vorro-vs-redox' },
    { label: 'Vorro vs. Mulesoft', to: '/vorro-vs-mulesoft' },
    { label: 'Vorro vs. Rhapsody', to: '/vorro-vs-rhapsody' },
    { label: 'Vorro vs. Datavant', to: '/vorro-vs-datavant' },
    { label: 'Vorro vs. Mirth', to: '/vorro-vs-mirth' },
  ],
  Company: [
    { label: 'About Vorro', to: '/company' },
    { label: 'Careers', to: '/company/careers' },
    { label: 'Partners', to: '/partners' },
    { label: 'Press Releases', to: '/press-releases' },
    { label: 'Contact Us', to: '/contact-us' },
    { label: 'Privacy Policy', to: '/company/privacy-policy' },
  ],
};

const clients = [
  'Geisinger Health', 'Contexture', 'WISHIN', 'Therap',
  'SunRx / 340B Holdings', 'CareOne', 'Avesis / Guardian Life', 'DMEScripts',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo" style={{ lineHeight: 0 }}>
                <VorroLogo white={true} height={30} />
              </Link>
              <p className="footer-tagline">
                AI Native Data Orchestration.<br />
                Built for Healthcare.
              </p>
              <div className="footer-contact">
                <a href="mailto:sales@vorro.net" className="footer-contact-link">
                  <Mail size={14} />
                  sales@vorro.net
                </a>
              </div>
              <div className="footer-socials">
                <a href="https://www.linkedin.com/company/vorro" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://twitter.com/VorroUSA" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="X (Twitter)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
              <Link to="/contact-us" className="btn btn-primary btn-sm footer-cta-btn">
                Talk to an Expert <ArrowRight size={14} />
              </Link>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="footer-col">
                <div className="footer-col-heading">{group}</div>
                <ul className="footer-col-links">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="footer-link">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted By Strip */}
      <div className="footer-clients">
        <div className="container">
          <div className="footer-clients-label">Trusted by healthcare leaders</div>
          <div className="footer-clients-list">
            {clients.map((c) => (
              <span key={c} className="footer-client-name">{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Vorro, Inc. All rights reserved.</span>
          <div className="footer-bottom-links">
            <Link to="/company/privacy-policy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/company/privacy-policy">Terms of Service</Link>
            <span>·</span>
            <Link to="/contact-us">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
