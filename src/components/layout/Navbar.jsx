import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import VorroLogo from '../ui/VorroLogo';
import BookDemoModal from '../ui/BookDemoModal';

const navLinks = [
  {
    label: 'How It Works',
    dropdown: [
      {
        heading: 'Platform Capabilities',
        items: [
          { label: 'AI-Driven Analytics & Insights', to: '/platform/analytics-nlp', desc: 'Extract intelligence from any data source' },
          { label: 'Reporting & Conversational AI', to: '/platform/reporting-nlp', desc: 'Natural language queries, instant reports' },
          { label: 'Governance & Compliance', to: '/platform/governance-compliance', desc: 'Automated policy enforcement & auditing' },
          { label: 'Version Lineage & Control', to: '/platform/governance-versioning', desc: 'Full data lineage & pipeline versioning' },
          { label: 'Interfacing', to: '/platform/interfacing', desc: 'REST, EDI, FHIR, SOAP — every standard' },
          { label: 'AI Readiness', to: '/platform/ai-readiness', desc: 'Data lake & ML-ready pipelines' },
          { label: 'Workflow Orchestration', to: '/platform/workflow-orchestration', desc: 'AI-powered process automation' },
        ],
      },
      {
        heading: 'By Industry',
        items: [
          { label: 'Healthcare', to: '/solutions/healthcare', desc: 'Health systems, HIEs, payers & providers' },
          { label: 'eCommerce & Retail', to: '/solutions/ecommerce', desc: 'Unified product & order data integration' },
          { label: 'Insurance', to: '/solutions/insurance', desc: 'Claims, eligibility & policy data flows' },
          { label: 'HR Tech', to: '/solutions/hr-tech', desc: 'HRIS, payroll, benefits & compliance data' },
        ],
      },
    ],
  },
  {
    label: 'Problems We Solve',
    dropdown: [
      {
        heading: 'By Problem',
        items: [
          { label: 'Data Fragmentation', to: '/enterprise-data-fragmentation', desc: 'Eliminate silos across every system' },
          { label: 'Compliance Risk', to: '/platform/governance-compliance', desc: 'Automate mandate & regulatory workflows' },
          { label: 'Legacy System Debt', to: '/solutions/system-integrations', desc: 'Modernize without rip-and-replace' },
          { label: 'AI Readiness Gaps', to: '/platform/ai-readiness', desc: 'Prepare your data for ML/AI initiatives' },
        ],
      },
      {
        heading: 'By Integration Type',
        items: [
          { label: 'System Integrations', to: '/solutions/system-integrations', desc: 'Connect any enterprise system, bidirectionally' },
          { label: 'Network Integrations', to: '/solutions/network-integrations', desc: 'Multi-party data exchange at scale' },
          { label: 'Partner Integrations', to: '/solutions/partner-integrations', desc: 'B2B data flows, claims & reconciliation' },
          { label: 'Specialized Integrations', to: '/solutions/specialized-integrations', desc: 'Domain-specific data connectors' },
        ],
      },
      {
        heading: 'By Capability',
        items: [
          { label: 'Data Quality', to: '/solutions/data-quality', desc: 'Clean, governed, accurate data' },
          { label: 'Data Lake', to: '/solutions/data-lake', desc: 'Bronze-Silver-Gold architecture' },
          { label: 'Pipeline Auto-Healing', to: '/solutions/pipeline-auto-healing', desc: 'Self-healing data pipelines' },
          { label: 'Data Management', to: '/solutions/data-management', desc: 'Secure, unified data governance' },
        ],
      },
    ],
  },
  {
    label: 'Use Cases',
    dropdown: [
      {
        heading: 'By Role',
        items: [
          { label: 'For Enterprises', to: '/solutions', desc: 'End-to-end data orchestration at scale' },
          { label: 'For Operations Teams', to: '/solutions/payer-integrations', desc: 'Automate complex operational workflows' },
          { label: 'For Data Teams', to: '/solutions/hie-integrations', desc: 'Governed, AI-ready data infrastructure' },
          { label: 'For Startups', to: '/vorro-for-startups', desc: 'Launch fast with managed integration' },
        ],
      },
      {
        heading: 'By Pain Point',
        items: [
          { label: 'Regulatory Compliance', to: '/solutions/pharmacy-integrations', desc: 'Automate mandate & compliance workflows' },
          { label: 'Data Fragmentation', to: '/enterprise-data-fragmentation', desc: 'Eliminate silos across every system' },
          { label: 'Build vs Buy', to: '/build-vs-buy', desc: 'Make the right integration decision' },
          { label: 'AI Readiness', to: '/platform/ai-readiness', desc: 'Prepare data for ML/AI initiatives' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    dropdown: [
      {
        heading: 'Resources',
        items: [
          { label: 'Case Studies', to: '/case-studies', desc: 'Client outcomes & results' },
          { label: 'Blog', to: '/blog', desc: 'Data & AI industry insights' },
          { label: 'Webinars', to: '/webinar', desc: 'Live & on-demand sessions' },
          { label: 'Contact Us', to: '/contact-us', desc: 'Talk to an expert' },
        ],
      },
    ],
  },
  {
    label: 'Free Tools',
    to: '/free-tools',
  },
  {
    label: 'Company',
    dropdown: [
      {
        heading: 'Vorro',
        items: [
          { label: 'About Us', to: '/company', desc: 'Our mission and team' },
          { label: 'Careers', to: '/company/careers', desc: 'Join the team' },
          { label: 'Partners', to: '/partners', desc: 'Technology & channel partners' },
          { label: 'Press', to: '/press-releases', desc: 'News and announcements' },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (idx) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header
      ref={navRef}
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${mobileOpen ? 'navbar-mobile-open' : ''}`}
    >
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <VorroLogo white={!isScrolled} height={34} />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-links">
          {navLinks.map((link, idx) => (
            <div
              key={link.label}
              className="nav-item"
              onMouseEnter={() => link.dropdown && handleMouseEnter(idx)}
              onMouseLeave={() => link.dropdown && handleMouseLeave()}
            >
              {link.to ? (
                <Link
                  to={link.to}
                  className="nav-link nav-link-direct"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  className={`nav-link ${activeDropdown === idx ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                >
                  {link.label}
                  <ChevronDown size={14} className={`nav-chevron ${activeDropdown === idx ? 'rotated' : ''}`} />
                </button>
              )}

              {link.dropdown && activeDropdown === idx && (
                <div className={`nav-dropdown nav-dropdown-pos-${idx} ${link.dropdown.length === 1 ? 'nav-dropdown-narrow' : ''}`}>
                  <div className={`nav-dropdown-inner ${link.dropdown.length === 1 ? 'nav-dropdown-inner-single' : ''}`}>
                    {link.dropdown.map((group) => (
                      <div key={group.heading} className="nav-dropdown-group">
                        <div className="nav-dropdown-heading">{group.heading}</div>
                        {group.items.map((item) => (
                          <Link key={item.label} to={item.to} className="nav-dropdown-item">
                            <span className="nav-dropdown-item-label">{item.label}</span>
                            <span className="nav-dropdown-item-desc">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar-cta">
          <Link to="/contact-us" className="btn btn-ghost-nav">
            Contact
          </Link>
          <button onClick={() => setDemoModalOpen(true)} className="btn btn-primary btn-sm">
            Talk to an Expert
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar-mobile-menu">
          <div className="container">
            {navLinks.map((link, idx) => (
              <div key={link.label} className="mobile-nav-item">
                {link.to ? (
                  <Link to={link.to} className="mobile-nav-link mobile-nav-link-direct" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="mobile-nav-link"
                      onClick={() => setMobileExpanded(mobileExpanded === idx ? null : idx)}
                    >
                      {link.label}
                      <ChevronDown size={16} className={mobileExpanded === idx ? 'rotated' : ''} />
                    </button>

                    {mobileExpanded === idx && link.dropdown && (
                      <div className="mobile-nav-dropdown">
                        {link.dropdown.map((group) => (
                          <div key={group.heading}>
                            <div className="mobile-nav-group-heading">{group.heading}</div>
                            {group.items.map((item) => (
                              <Link key={item.label} to={item.to} className="mobile-nav-dropdown-item">
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="mobile-nav-cta">
              <button onClick={() => { setMobileOpen(false); setDemoModalOpen(true); }} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Book Demo Modal */}
      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </header>
  );
}
