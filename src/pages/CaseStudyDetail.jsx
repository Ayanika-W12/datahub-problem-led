import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, X, CheckCircle2, Building2, MapPin, ArrowRight, Quote, TrendingUp, Zap, Shield, Users, Sparkles, Target, ArrowUpRight, Clock, FileText } from 'lucide-react';
import { BookDemoModal } from '../components/ui/BookDemoModal';
import '../styles/home.css';

const caseStudies = {
  'avesis': {
    title: 'Streamlining High-Volume EDI and Real-Time Eligibility Checks for Avesis',
    client: 'Avesis',
    industry: 'Insurance / Benefits Administration',
    location: 'USA',
    color: 'primary',
    pdfUrl: 'https://blobs.vusercontent.net/blob/Vorro-Avesis-Case-Study-JhC5Zh3b3hcIjPldYNSroL5tQxR3Rx.pdf',
    stats: [
      { label: 'Reduction in integration maintenance cost', value: '75%', icon: TrendingUp },
      { label: 'Reduction in manual processing time', value: '90%', icon: Zap },
    ],
    highlights: ['Universal EDI Translation', 'Real-Time Eligibility API', 'End-to-End Visibility'],
    about: 'Avesis is a leading administrator of vision, dental, and hearing insurance benefits for commercial and government-sponsored plans.',
    challenge: `As a leading administrator of specialized health benefits, Avesis manages millions of member enrollment and claims transactions flowing through a complex ecosystem of health plan partners and providers. This data exchange relies heavily on X12 EDI (Electronic Data Interchange) files.

Avesis faced two critical, high-volume operational pain points:

1. EDI Ingestion and Transformation: Large batch files (834, 835, 837 transactions) arrived from various partners with disparate formats and specific routing rules. Manual intervention was frequently required to standardize, validate, and route these files into the core policy and claims processing systems, leading to delays and increased risk of error.

2. Real-Time Eligibility Checks: To ensure accurate claims processing and member services, Avesis needed the capability to perform instant, high-speed eligibility checks. This process required querying multiple internal systems to confirm benefit coverage status, but the existing integration methods were too slow and costly to scale for real-time demands.`,
    solution: `Avesis leveraged the Vorro VIIA Platform to introduce an automated, resilient, and scalable data pipeline for their most critical operations:

Automated EDI Processing Pipeline:
- Universal EDI Translation: VIIA's pre-built EDI capabilities standardized data formats automatically, eliminating the need for custom coding for each partner's variance.
- Intelligent Routing and Validation: Data received via partner SFTPs or APIs was automatically ingested, validated for compliance and routed directly to the appropriate backend systems.
- Continuous Monitoring: Vorro's system provided end-to-end visibility and an auditable log for every EDI transaction, drastically simplifying troubleshooting and compliance reporting.

Real-Time Eligibility & Service Verification:
- API Orchestration: Vorro built a lightweight, high-performance API that acts as a single point of entry for eligibility requests.
- Instant System Query: This API instantly orchestrates queries across the necessary internal policy and membership databases.
- Millisecond Response: The result is a millisecond-level response confirming whether the requested procedure or service is covered.`,
    quote: {
      text: 'The ability of the Vorro VIIA Platform to manage our high-volume EDI transactions and provide instant eligibility verification has fundamentally changed how we interact with our partners. It\'s not just about integration; it\'s about providing superior, reliable service at scale.',
      author: 'VP, Operations',
      company: 'Avesis',
    },
  },
  'dme-provider': {
    title: 'Streamlining E-Prescriptions for a Leading DME Provider',
    client: 'Leading DME Provider',
    industry: 'Durable Medical Equipment',
    location: 'USA',
    color: 'primary',
    pdfUrl: 'https://blobs.vusercontent.net/blob/Streamlining-E-Prescriptions-for-a-Leading-DME-Provider-with-Vorros-BridgeGate_compressed-J6bx3HFiOc5RGfaD8806kANgZFjn98.pdf',
    stats: [
      { label: 'Monthly transactions', value: '5M+', icon: TrendingUp },
      { label: 'Savings vs. in-house development', value: '70%', icon: Zap },
    ],
    highlights: ['Multi-EMR Integration', 'Format Translation', 'Fully Managed Service'],
    about: 'A leading Durable Medical Equipment (DME) provider across the United States whose products are aimed at streamlining the process of electronically prescribing home and DME solutions.',
    challenge: `The customer gets data from multiple EMRs in different formats. They faced the challenge of navigating multiple data types and connectivity protocols that interface with multiple EMRs.

Our workflows pull the required data for demographics, encounter details, observations, document ref etc. This data is then pushed into the customer's application in their proprietary JSON format, which they consume to analyze and process the request. They then write back an HL7 message to the EMR for the order.`,
    solution: `The customer receives different data types like HL7, FHIR bundles, PDFs, JSONs, etc from the EMR. BridgeGate ingests the data and converts it into their proprietary format while also ensuring that output format from the customer's application can be translated back to ensure conformance with EMR standards.

This allows all parties to not change anything in their current ecosystem and helps maintain true interoperability.

The customer leverages Vorro's Fully Managed EiPaaS Services, which allows the team to focus on their core capabilities of building their application and leave the data interfacing work to our team which specializes in it.`,
    quote: null,
  },
  'pharmacy-management': {
    title: 'How a Pharmacy Management Provider Found Data Harmony with BridgeGate',
    client: 'Pharmacy Management Provider',
    industry: 'Pharmacy Management Software',
    location: 'USA',
    color: 'primary',
    pdfUrl: 'https://blobs.vusercontent.net/blob/How-a-Pharmacy-Management-Provider-Found-Data-Harmony-with-Vorros-BridgeGate%E2%84%A2-Integration-Platform-sRY1Usiekj0huN8MNhUckHmUuG57G0.pdf',
    stats: [
      { label: 'Patient records processed per day', value: '3M+', icon: Users },
      { label: 'Facilities integrated', value: '500+', icon: Building2 },
    ],
    highlights: ['Real-Time Eligibility', 'Multi-Format Data Handling', '3-Tier Architecture'],
    about: 'A pharmacy management software provider who assists healthcare facilities with program administration, including key tasks like split billing and contract pharmacy network administration.',
    challenge: `For the pharmacy management software to help its partners implement healthcare programs in an optimized manner, data exchange between their partners needed to be robust and efficient. The challenge was to connect and acquire information about near-real-time visits from hundreds of hospitals, clinics, and healthcare organizations across the US.

To determine the patient's eligibility for participation in healthcare programs, the detailed visit information from the point of care and any prescriptions written on that visit need to be matched up for the pharmacies. A patient could present at a pharmacy with a prescription in hand within minutes of the care episode.`,
    solution: `BridgeGate's primary role was to acquire the visit for "eligibility information" from the qualified facilities. The first challenge was to create an efficient mechanism to quickly ramp up new facilities while accommodating both low-tech and high-tech abilities of IT staff.

BridgeGate ensured a coherent and timely transaction, validation, and storage of different formats of data between the client database and its trading partners. Through our platform, the client acquires data from its trading partners, validates the data based on specifications, and then uploads it to their stage database.`,
    quote: {
      text: 'Dealing with a differential implementation of the HL7 standard across our client locations was a big challenge. The BridgeGate team\'s ingenious 3-tier approach was key to ensure fast and smooth real-time data processing while maintaining full chain of custody of the data.',
      author: 'Client Representative',
      company: 'Pharmacy Management Provider',
    },
  },
  'american-lung-association': {
    title: 'How the American Lung Association Streamlined Data Integration',
    client: 'American Lung Association',
    industry: 'Non-Profit Healthcare',
    location: 'USA',
    color: 'primary',
    pdfUrl: 'https://blobs.vusercontent.net/blob/How-the-American-Lung-Association-Streamlined-Data-Integration-with-BridgeGate-QFxaY5u7OqySP9DRD6V2MDORGlvKWU.pdf',
    stats: [
      { label: 'Clinics for Quitline Referrals', value: '100+', icon: Building2 },
      { label: 'Uptime ensured', value: '99.9%', icon: Shield },
    ],
    highlights: ['Digital Referral System', 'EMR Integration', 'Multi-Format Support'],
    about: 'The American Lung Association is a non-profit organization that works to promote lung health and prevent lung disease through advocacy, research, and education. The organization has been in operation for over 115 years.',
    challenge: `The American Lung Association of the Upper Midwest is dedicated to improving lung health and preventing lung disease. One of their key initiatives is the Illinois Tobacco Quitline, which is a free resource for tobacco users who want to quit.

However, the organization faced challenges due to manual data entry processes, including referrals via fax and paper forms, which hindered their ability to provide the best possible services to tobacco users. The lack of an integration tool made it difficult to manage and streamline the referral process efficiently.`,
    solution: `The American Lung Association partnered with Vorro to implement a healthcare integration platform that collated ADT data from hospitals, FQHCs, and physicians. The goal was to eliminate manual processes and create efficiencies through data integration solutions.

We digitized the entirety of the incoming data process from various stakeholders. This involved setting up a secure mailbox, custom web forms for patients/referring clinics, and a direct integration with EMRs — thereby digitizing all referrals via ADT, JSON, and multiple data formats.`,
    quote: null,
  },
  'emr-provider': {
    title: 'Achieving Seamless Healthcare Data Exchange for a Leading EMR Provider',
    client: 'Leading EMR Provider',
    industry: 'EMR Software',
    location: 'USA',
    color: 'primary',
    pdfUrl: 'https://blobs.vusercontent.net/blob/Achieving-Seamless-Healthcare-Data-Exchange-for-a-Leading-EMR-Provider_compressed-1-uNn2bSixYP6Lu4jmdS4R0b0fNA1hPR.pdf',
    stats: [
      { label: 'Monthly transactions', value: '3M+', icon: TrendingUp },
      { label: 'Pharmacies integrated', value: '100+', icon: Building2 },
    ],
    highlights: ['HL7/CCD Translation', 'HIE Integration', 'All 50 States Coverage'],
    about: 'A software development company that builds software for private service providers as well as government agencies, with a presence in all 50 states in the US. They specialize in comprehensive documentation and information management systems.',
    challenge: `Working with healthcare providers meant the client had to support the receipt, translation, and delivery of data across multiple protocols and formats.

They understood the necessity of a dynamic platform to meet the ever-evolving needs of providers and government entities in the mental health and disability domains.`,
    solution: `BridgeGate translated complex formats like HL7 ADT and CCD into a single, manageable standard. This allowed the client to reduce technical overhead and focus on delivering impactful solutions in the mental health and disability space.

The company has managed to transform its information flow with seamless sharing of individual health information with a variety of stakeholders and efficient message exchange with HIE (Health Information Exchange) trading partners.`,
    quote: null,
  },
  'healthcare-analytics': {
    title: 'Scaling Healthcare Analytics: Processing 45TB of Patient Data in 44 Hours',
    client: 'Healthcare Analytics Provider',
    industry: 'Healthcare Analytics',
    location: 'USA',
    color: 'primary',
    pdfUrl: 'https://blobs.vusercontent.net/blob/Scaling-Healthcare-Analytics-How-BridgeGate%E2%84%A2-Processed-45TB-of-Patient-Data-in-44-Hours-GLEG9XwstjUNRYALudOcPPgSBvqbdV.pdf',
    stats: [
      { label: 'Hospitals and millions of patients', value: '100+', icon: Building2 },
      { label: 'Complex CCDs per hour', value: '1M', icon: Zap },
    ],
    highlights: ['45TB in 44 Hours', 'Auto-Scaling Cloud', 'Cost-Effective Processing'],
    about: 'An Enterprise healthcare data platform which unifies data across multiple health plans for the providers to get insights for streamlining operations and improving clinical trial revenue.',
    challenge: `The customer receives different file types like HL7 v3 (CCDs), FHIR bundles, JSONs etc through multiple protocols, depending on the connectivity methods of the health plan organizations.

The customer attempted to use competing EiPaaS products but they lacked the core integration functionality to parse the necessary data sets and fix errors in the data. Furthermore, the products lacked the stringent volume/time processing requirements without spending millions of dollars in additional server costs.`,
    solution: `The customer uses the fully managed BridgeGate which allows the team to focus on their core capabilities of building the analytics engine and leave the data interfacing work to our expert healthcare integration team.

BridgeGate processed over 44 million patient files, approximately 45TB of data in 44 hours. The BridgeGate cloud auto-scaling and clustering feature was able to spin up additional processing power to meet the peak demand at a fraction of the competing EiPaaS platform costs.`,
    quote: null,
  },
  'retail-conglomerate': {
    title: 'How a Tier-1 Retail Conglomerate Standardized Technology for Two Global Brands',
    client: 'Global Retail Conglomerate',
    industry: 'Retail / E-commerce',
    location: 'Global',
    color: 'primary',
    pdfUrl: 'https://blobs.vusercontent.net/blob/How-a-Tier-1-Retail-Conglomerate-Standardized-Technology-for-Two-Global-Shopping-Brands-for-World-Class-Scale-ZTeuSrN1mVExtDMaSMDeHy5Pvmu4Ty.pdf',
    stats: [
      { label: 'Faster time-to-market', value: '65%', icon: Zap },
      { label: 'Reduction in operational overhead', value: '40%', icon: TrendingUp },
      { label: 'Platform standardization', value: '100%', icon: Shield },
    ],
    highlights: ['Dual Brand Migration', 'Global Expansion', '24/7 Managed Services'],
    about: 'A Global Retail and E-commerce Conglomerate, a worldwide leader operating some of the planet\'s largest shopping brands including QVC and HSN.',
    challenge: `The Global Retail and E-commerce Conglomerate needed to standardize its integration technology across its two distinct retail powerhouses without merging their separate business operations.

- Disparate Deployment Support: The First Iconic Brand relied on a legacy third-party system across 10 servers, while the Second Iconic Brand used an on-premise version of the BridgeGate platform.
- Operational Friction: Using separate technologies led to inconsistent development pipelines and varied operational processes between the two brands.
- Hindered Global Scale: The massive effort required to update, maintain, and resource two complex, on-premise solutions became a critical, costly bottleneck.`,
    solution: `Vorro executed a strategic transformation, migrating both retail brands' disparate integration needs onto a standardized BridgeGate framework:

- Dual Deployment Model: Vorro successfully migrated all critical integration workloads from the legacy systems to separate, dedicated BridgeGate environments.
- Platform Standard: BridgeGate was established as the single, standardized "EDI iPaaS of choice" for all vendor and internal system integrations.
- Managed Services: Vorro provided comprehensive Managed Services with round-the-clock monitoring.
- Global Framework: A common architectural blueprint was created, enabling rapid market entry in Italy, Germany, and the UK.`,
    quote: {
      text: 'The support we received was invaluable. The round-the-clock monitoring and hands-on help with key blockers ensured our complex migration was executed flawlessly and on time.',
      author: 'Team Lead',
      company: 'Global Retail and E-commerce Conglomerate',
    },
  },
  'health-system-ltpac': {
    title: 'Enabling Care Coordination Between Health Systems and LTPAC Providers',
    client: 'Health Systems & IDNs',
    industry: 'Healthcare',
    location: 'USA',
    color: 'primary',
    pdfUrl: 'https://blobs.vusercontent.net/blob/Vorros-BridgeGate-Enterprise-Integration-Platform-as-a-Service-EiPaaS-l2olIfElGgfctsRN2jJREa65gseTCm.pdf',
    stats: [
      { label: 'Health systems connected', value: '250+', icon: Building2 },
      { label: 'Facilities integrated', value: '1,000+', icon: Users },
      { label: 'Readmission reduction potential', value: '30%', icon: TrendingUp },
    ],
    highlights: ['LTPAC Integration', 'Real-Time Messaging', 'Multi-EHR Support'],
    about: 'Health Systems and Integrated Delivery Networks (IDNs) across the United States seeking to coordinate care across acute, long-term, and post-acute care settings.',
    challenge: `In today's collaborative environment, more Health Systems and Integrated Delivery Networks (IDNs) are required to move and share large volumes of clinical and financial data. They are seeking solutions that:

- Coordinate care and data integration with Long Term Care and Post-Acute Care (LTPAC) systems
- Enable "Big Data" and advanced analytics
- Provide for elevated systems integration
- Manage evolving healthcare standards like HL7 and FHIR

Currently, patient information is locked in different silos of data, and a trusted, patient-centric view cannot be achieved without an information exchange infrastructure.`,
    solution: `Vorro's BridgeGate Enterprise Integration Platform As A Service (EiPaaS) solution enables IDNs and Health Information Exchanges (HIE) to:

- Share patient clinical data from Nursing Homes and Home Health agencies
- Reduce 30-day re-hospitalization through baseline, profile and clinical data reporting
- Enable medication reconciliation with real-time patient medication information from LTPAC providers

BridgeGate interoperates with any LTC EHR system including PointClickCare, BlueStep, AOD Software, MDI Achieve, NTT DATA, and Optimus. The platform orchestrates millions of real-time data messages daily for 250 health systems, encompassing over 1,000 facilities.`,
    quote: {
      text: 'Vorro eliminated the need for emails to be created only by people with coding skills. It allowed us to fulfill more email requests easily.',
      author: 'Kyle Garrett',
      company: 'Senior Marketing Operations Manager, Weave',
    },
  },
};

const colorMap = {
  primary: { 
    bg: '#AC4197', 
    light: 'rgba(172, 65, 151, 0.08)',
    gradient: 'linear-gradient(135deg, #AC4197 0%, #d376b8 100%)',
    glow: 'rgba(172, 65, 151, 0.25)'
  },
  cyan: { 
    bg: '#20D3EF', 
    light: 'rgba(32, 211, 239, 0.08)',
    gradient: 'linear-gradient(135deg, #0ea5c7 0%, #20D3EF 100%)',
    glow: 'rgba(32, 211, 239, 0.25)'
  },
  green: { 
    bg: '#02B164', 
    light: 'rgba(2, 177, 100, 0.08)',
    gradient: 'linear-gradient(135deg, #02B164 0%, #04d67a 100%)',
    glow: 'rgba(2, 177, 100, 0.25)'
  },
  orange: { 
    bg: '#F17A42', 
    light: 'rgba(241, 122, 66, 0.08)',
    gradient: 'linear-gradient(135deg, #F17A42 0%, #ff9a6c 100%)',
    glow: 'rgba(241, 122, 66, 0.25)'
  },
};

// Animated counter component
function AnimatedNumber({ value, delay = 0 }) {
  const [display, setDisplay] = useState('0');
  
  useEffect(() => {
    const numMatch = value.match(/[\d.]+/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }
    
    const target = parseFloat(numMatch[0]);
    const suffix = value.replace(numMatch[0], '');
    const duration = 1500;
    const startTime = Date.now() + delay;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      
      if (target >= 100) {
        setDisplay(Math.round(current) + suffix);
      } else {
        setDisplay(current.toFixed(target % 1 === 0 ? 0 : 1) + suffix);
      }
      
      if (progress < 1) requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }, [value, delay]);
  
  return display;
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies[slug];
  const [showGate, setShowGate] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', jobTitle: '', company: '', email: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (showGate || showDemo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showGate, showDemo]);

  if (!study) {
    return (
      <main className="section">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h1>Case Study Not Found</h1>
          <Link to="/case-studies" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            View All Case Studies
          </Link>
        </div>
      </main>
    );
  }

  const colors = colorMap[study.color] || colorMap.primary;

  const handleDownload = () => {
    setShowGate(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.fullName || !formData.jobTitle || !formData.company || !formData.email) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    
    try {
      const params = new URLSearchParams(window.location.search);
      const payload = {
        Full_Name: formData.fullName,
        Job_Title: formData.jobTitle,
        Company: formData.company,
        Email: formData.email,
        Resource_Name: study.title,
        UTM_Source: params.get('utm_source') || '',
        UTM_Medium: params.get('utm_medium') || '',
        UTM_Campaign: params.get('utm_campaign') || '',
      };

      await fetch('https://www.zohoapis.com/crm/v2/functions/website_resource_download/actions/execute?auth_type=apikey&zapikey=1003.8047d5b9d6c46e3060c5a85b84a17e10.7e46f9d25c8a76e35c34ac13e3e8c99c', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      });

      window.open(study.pdfUrl, '_blank');
      setShowGate(false);
    } catch (err) {
      window.open(study.pdfUrl, '_blank');
      setShowGate(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="cs-page">
      {/* Immersive Hero */}
      <section className="cs-hero-v2">
        <div className="cs-hero-bg-v2">
          <div className="cs-hero-gradient" style={{ '--accent': colors.bg, '--glow': colors.glow }} />
          <div className="cs-hero-grid-pattern" />
          <div className="cs-hero-glow" style={{ background: colors.glow }} />
        </div>
        
        <div className="container">
          <div className={`cs-hero-inner ${visible ? 'visible' : ''}`}>
            <Link to="/case-studies" className="cs-breadcrumb">
              <ArrowLeft size={14} />
              <span>All Case Studies</span>
            </Link>
            
            <div className="cs-hero-grid">
              <div className="cs-hero-text">
                <div className="cs-tag-row">
                  <span className="cs-tag" style={{ '--tag-color': colors.bg }}>
                    <Sparkles size={12} />
                    {study.industry}
                  </span>
                  <span className="cs-meta-pill">
                    <MapPin size={12} /> {study.location}
                  </span>
                </div>
                
                <h1 className="cs-title">{study.title}</h1>
                
                <p className="cs-subtitle">{study.about}</p>
                
                <div className="cs-hero-actions">
                  <button onClick={handleDownload} className="cs-download-trigger">
                    <Download size={18} />
                    Download PDF
                  </button>
                  <button onClick={() => setShowDemo(true)} className="cs-talk-link">
                    Talk to an Expert
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
              
              <div className="cs-stats-showcase">
                {study.stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={i} 
                      className="cs-stat-card"
                      style={{ '--delay': `${i * 0.1}s`, '--accent': colors.bg, '--light': colors.light }}
                    >
                      <div className="cs-stat-icon" style={{ background: colors.gradient }}>
                        <Icon size={20} />
                      </div>
                      <div className="cs-stat-value">
                        <AnimatedNumber value={stat.value} delay={i * 200} />
                      </div>
                      <div className="cs-stat-label">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="cs-highlights-strip" style={{ '--accent': colors.bg }}>
        <div className="container">
          <div className="cs-highlights-scroll">
            {study.highlights.map((item, i) => (
              <div key={i} className="cs-highlight-chip">
                <CheckCircle2 size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="cs-content-v2">
        <div className="container">
          <div className="cs-content-grid">
            {/* Main Column */}
            <div className="cs-main-col">
              {/* Challenge Section */}
              <article className="cs-article cs-article-challenge">
                <div className="cs-article-header">
                  <div className="cs-article-icon cs-icon-warning">
                    <Target size={20} />
                  </div>
                  <div>
                    <span className="cs-article-eyebrow">The Problem</span>
                    <h2 className="cs-article-title">The Challenge</h2>
                  </div>
                </div>
                <div className="cs-article-body">
                  {study.challenge.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>

              {/* Solution Section */}
              <article className="cs-article cs-article-solution" style={{ '--accent': colors.bg, '--light': colors.light }}>
                <div className="cs-article-accent" style={{ background: colors.gradient }} />
                <div className="cs-article-header">
                  <div className="cs-article-icon cs-icon-success" style={{ background: colors.gradient }}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <span className="cs-article-eyebrow" style={{ color: colors.bg }}>The Outcome</span>
                    <h2 className="cs-article-title">The Solution</h2>
                  </div>
                </div>
                <div className="cs-article-body">
                  {study.solution.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>

              {/* Quote */}
              {study.quote && (
                <blockquote className="cs-quote-block" style={{ '--accent': colors.bg }}>
                  <div className="cs-quote-decoration" style={{ background: colors.gradient }}>
                    <Quote size={24} />
                  </div>
                  <p className="cs-quote-text">{study.quote.text}</p>
                  <footer className="cs-quote-footer">
                    <div className="cs-quote-avatar" style={{ background: colors.gradient }}>
                      {study.quote.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <cite className="cs-quote-author">{study.quote.author}</cite>
                      <span className="cs-quote-company">{study.quote.company}</span>
                    </div>
                  </footer>
                </blockquote>
              )}
            </div>

            {/* Sticky Sidebar */}
            <aside className="cs-sidebar-col">
              <div className="cs-sidebar-sticky">
                {/* Download CTA */}
                <div className="cs-download-box">
                  <div className="cs-download-top" style={{ background: colors.gradient }}>
                    <div className="cs-download-icon-wrap">
                      <FileText size={28} />
                    </div>
                    <div>
                      <div className="cs-download-label">Case Study PDF</div>
                      <div className="cs-download-client">{study.client}</div>
                    </div>
                  </div>
                  <div className="cs-download-body">
                    <p>Download the complete report with detailed insights, metrics, and implementation details.</p>
                    <button onClick={handleDownload} className="cs-sidebar-btn" style={{ background: colors.gradient }}>
                      <Download size={16} />
                      Download PDF
                    </button>
                  </div>
                </div>

                {/* Results Summary */}
                <div className="cs-sidebar-card cs-results-box">
                  <h3>
                    <TrendingUp size={18} style={{ color: colors.bg }} />
                    Key Results
                  </h3>
                  <ul className="cs-results-list-v2">
                    {study.stats.map((stat, i) => {
                      const Icon = stat.icon;
                      return (
                        <li key={i}>
                          <div className="cs-result-bullet" style={{ background: colors.light, color: colors.bg }}>
                            <Icon size={14} />
                          </div>
                          <div>
                            <strong style={{ color: colors.bg }}>{stat.value}</strong>
                            <span>{stat.label}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* CTA */}
                <div className="cs-cta-box">
                  <div className="cs-cta-icon">
                    <Sparkles size={20} />
                  </div>
                  <h4>Ready for similar results?</h4>
                  <p>See how Vorro can transform your integration challenges.</p>
                  <button onClick={() => setShowDemo(true)} className="btn btn-primary btn-md cs-cta-btn">
                    Talk to an Expert
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Resource Gate Modal */}
      {showGate && (
        <div className="cs-modal-overlay" onClick={() => setShowGate(false)}>
          <div className="cs-modal" onClick={(e) => e.stopPropagation()} style={{ '--accent': colors.bg }}>

            {/* Accent top bar */}
            <div className="cs-modal-accent-bar" style={{ background: colors.bg }} />

            <div className="cs-modal-body">
              <button className="cs-modal-close" onClick={() => setShowGate(false)}>
                <X size={15} />
              </button>

              {/* Header */}
              <div className="cs-modal-hd">
                <div className="cs-modal-icon-box" style={{ background: colors.light, color: colors.bg }}>
                  <Download size={18} />
                </div>
                <div>
                  <h3 className="cs-modal-title">Download Case Study</h3>
                  <p className="cs-modal-sub">{study.client} · PDF Report</p>
                </div>
              </div>

              <form className="cs-modal-form" onSubmit={handleSubmit}>
                <div className="cs-form-row">
                  <div className="cs-form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="cs-form-group">
                    <label>Job Title</label>
                    <input
                      type="text"
                      placeholder="VP of Engineering"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="cs-form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Your organization"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>

                <div className="cs-form-group">
                  <label>Work Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {error && <p className="cs-form-error">{error}</p>}

                <button
                  type="submit"
                  className="cs-form-submit"
                  style={{ background: colors.bg }}
                  disabled={loading}
                >
                  {loading ? 'Processing…' : (<>Get the PDF <ArrowRight size={16} /></>)}
                </button>

                <p className="cs-form-note">No spam. We respect your privacy.</p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Book Demo Modal */}
      <BookDemoModal open={showDemo} onOpenChange={setShowDemo} />
    </main>
  );
}
