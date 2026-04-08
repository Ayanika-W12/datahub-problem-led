import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import VorroLogo from '../ui/VorroLogo';

const navLinks = [
  {
    label: 'Platform',
    dropdown: [
      {
        heading: 'Capabilities',
        items: [
          { label: 'Analytics & NLP', to: '/platform/analytics-nlp', desc: 'Extract intelligence from clinical data' },
          { label: 'Reporting & NLP', to: '/platform/reporting-nlp', desc: 'Natural language query for healthcare data' },
          { label: 'Governance & Compliance', to: '/platform/governance-compliance', desc: 'Automated HIPAA, Cures Act, FHIR' },
          { label: 'Governance & Version Control', to: '/platform/governance-versioning', desc: 'Data lineage & pipeline versioning' },
          { label: 'Interfacing', to: '/platform/interfacing', desc: 'HL7, FHIR, EDI — every standard' },
          { label: 'AI Readiness', to: '/platform/ai-readiness', desc: 'Data lake & ML-ready pipelines' },
          { label: 'Workflow Orchestration', to: '/platform/workflow-orchestration', desc: 'n8n + AI-powered automation' },
        ],
      },
      {
        heading: 'Platform Overview',
        items: [
          { label: 'Healthcare AI Platform', to: '/healthcare-ai-platform', desc: 'Full platform overview' },
          { label: 'BridgeGate EiPaaS', to: '/solutions', desc: 'Enterprise integration layer' },
          { label: 'VIIA Integration™', to: '/solutions', desc: 'AI-powered data unification' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    dropdown: [
      {
        heading: 'By Integration Type',
        items: [
          { label: 'EMR Integrations', to: '/solutions/emr-integrations', desc: 'Epic, Cerner, Athena & beyond' },
          { label: 'HIE Integrations', to: '/solutions/hie-integrations', desc: 'Health information exchange' },
          { label: 'Payer Integrations', to: '/solutions/payer-integrations', desc: 'Prior auth, eligibility, claims' },
          { label: 'Pharmacy Integrations', to: '/solutions/pharmacy-integrations', desc: 'ePrescribing & pharmacy data' },
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
          { label: 'For Health Systems', to: '/solutions', desc: 'Enterprise data orchestration' },
          { label: 'For Payers', to: '/solutions/payer-integrations', desc: 'Claims, eligibility, prior auth' },
          { label: 'For HIEs', to: '/solutions/hie-integrations', desc: 'Network-wide interoperability' },
          { label: 'For Startups', to: '/vorro-for-startups', desc: 'Launch fast with managed integration' },
        ],
      },
      {
        heading: 'By Challenge',
        items: [
          { label: '340B Compliance', to: '/solutions/use-case/340b-compliance-without-the-roadblocks', desc: 'Automate 340B workflows' },
          { label: 'Behavioral Health', to: '/solutions/use-case/behavioral-health-integration-without-the-barriers', desc: '42 CFR Part 2 compliance' },
          { label: 'Build vs Buy', to: '/build-vs-buy', desc: 'Make the right integration decision' },
          { label: 'AI Readiness', to: '/platform/ai-readiness', desc: 'Prepare data for ML/AI' },
        ],
      },
    ],
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
      {
        heading: 'Resources',
        items: [
          { label: 'Case Studies', to: '/case-studies', desc: 'Real outcomes from real clients' },
          { label: 'Blog', to: '/blog', desc: 'Healthcare data insights' },
          { label: 'Webinars', to: '/webinar', desc: 'Live and on-demand sessions' },
          { label: 'Contact Us', to: '/contact-us', desc: 'Talk to an integration expert' },
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
        <Link to="/" className="navbar-logo">
          <VorroLogo white={!isScrolled} height={34} />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-links">
          {navLinks.map((link, idx) => (
            <div
              key={link.label}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`nav-link ${activeDropdown === idx ? 'active' : ''}`}
                onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
              >
                {link.label}
                <ChevronDown size={14} className={`nav-chevron ${activeDropdown === idx ? 'rotated' : ''}`} />
              </button>

              {link.dropdown && activeDropdown === idx && (
                <div className={`nav-dropdown nav-dropdown-pos-${idx}`}>
                  <div className="nav-dropdown-inner">
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
          <Link to="/contact-us" className="btn btn-primary btn-sm">
            Get a Demo
            <ArrowRight size={14} />
          </Link>
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
              </div>
            ))}
            <div className="mobile-nav-cta">
              <Link to="/contact-us" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Get a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
