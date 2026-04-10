import { useState, useRef } from 'react';
import { Play, Clock, Calendar, X, CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import '../styles/home.css';

const webinar = {
  title: "American Lung Association's Digital Transformation with Vorro",
  description: 'Learn how the American Lung Association streamlined their tobacco cessation referral process by replacing manual fax and paper workflows with BridgeGate\'s automated data integration platform.',
  thumbnail: 'https://vorro.net/wp-content/uploads/2025/12/Capture.jpg',
  videoUrl: 'https://vorro.net//wp-content/uploads/2026/01/American-Lung-Associations-digital-transformation-with-Vorro-1.mp4',
  duration: '18 min',
  date: 'January 2026',
  highlights: [
    'Eliminated manual data entry and fax-based referrals',
    'Integrated 100+ clinics for Quitline Referrals',
    'Achieved 99.9% uptime with fully managed service',
    'Digitized all incoming data from various stakeholders',
  ],
};

export default function Webinar() {
  const [showGate, setShowGate] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', jobTitle: '', company: '', email: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (hasAccess) {
      setIsPlaying(true);
      setTimeout(() => videoRef.current?.play(), 100);
    } else {
      setShowGate(true);
    }
  };

  const handleCloseGate = () => {
    setShowGate(false);
    // Video does NOT play when gate is closed without submission
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
        Resource_Name: webinar.title,
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

      setHasAccess(true);
      setShowGate(false);
      setIsPlaying(true);
      setTimeout(() => videoRef.current?.play(), 100);
    } catch (err) {
      setHasAccess(true);
      setShowGate(false);
      setIsPlaying(true);
      setTimeout(() => videoRef.current?.play(), 100);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="vertical-hero" style={{ minHeight: 'auto', padding: '5rem 0 2.5rem' }}>
        <div className="container">
          <FadeIn>
            <span className="hero-eyebrow">On-Demand Webinar</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Watch Our Latest Webinar
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Featured Webinar */}
      <section className="section" style={{ background: 'var(--color-gray-50)', paddingTop: '2rem' }}>
        <div className="container">
          <FadeIn>
            <div className="webinar-card">
              <div className="webinar-card-video">
                {!isPlaying ? (
                  <div className="webinar-thumb" onClick={handlePlayClick}>
                    <img src={webinar.thumbnail} alt={webinar.title} />
                    <div className="webinar-thumb-overlay" />
                    <button className="webinar-play-btn">
                      <Play size={28} fill="white" />
                    </button>
                  </div>
                ) : (
                  <video ref={videoRef} className="webinar-video" controls poster={webinar.thumbnail}>
                    <source src={webinar.videoUrl} type="video/mp4" />
                  </video>
                )}
              </div>

              <div className="webinar-card-info">
                <h2 className="webinar-card-title">{webinar.title}</h2>
                <p className="webinar-card-desc">{webinar.description}</p>
                
                <div className="webinar-card-meta">
                  <span><Clock size={14} /> {webinar.duration}</span>
                  <span><Calendar size={14} /> {webinar.date}</span>
                </div>

                <div className="webinar-card-highlights">
                  <h4>Key Takeaways</h4>
                  <ul>
                    {webinar.highlights.map((h, i) => (
                      <li key={i}><CheckCircle2 size={14} /> {h}</li>
                    ))}
                  </ul>
                </div>

                {!hasAccess && (
                  <button onClick={handlePlayClick} className="btn btn-primary btn-lg webinar-cta">
                    <Play size={16} /> Watch Now
                  </button>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* UPCOMING WEBINARS SECTION - Hidden for now, uncomment when ready */}
      {false && (
        <section className="section">
          <div className="container">
            <FadeIn>
              <div className="section-header" style={{ marginBottom: '2rem' }}>
                <h2 className="section-title">Upcoming Webinars</h2>
                <p className="section-subtitle">Register for our upcoming live sessions</p>
              </div>
              <div className="grid-3">
                {/* Add upcoming webinar cards here when available */}
                <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <p style={{ color: 'var(--color-gray-400)' }}>No upcoming webinars scheduled at this time. Check back soon!</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Resource Gate Modal */}
      {showGate && (
        <>
          <div className="gate-backdrop" onClick={handleCloseGate} />
          <div className="gate-modal">
            <button className="gate-close" onClick={handleCloseGate}><X size={18} /></button>
            <div className="gate-body">
              <div className="gate-icon"><Play size={24} /></div>
              <h3 className="gate-title">Watch Webinar</h3>
              <p className="gate-desc">Fill in your details to access this webinar.</p>
              <form className="gate-form" onSubmit={handleSubmit}>
                <div className="gate-field">
                  <label>Full Name *</label>
                  <input type="text" placeholder="John Doe" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                </div>
                <div className="gate-field">
                  <label>Job Title *</label>
                  <input type="text" placeholder="CIO, VP of IT, etc." value={formData.jobTitle} onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })} />
                </div>
                <div className="gate-field">
                  <label>Company *</label>
                  <input type="text" placeholder="Your organization" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                </div>
                <div className="gate-field">
                  <label>Email *</label>
                  <input type="email" placeholder="you@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                {error && <p className="gate-error">{error}</p>}
                <button type="submit" className="btn btn-primary gate-submit" disabled={loading}>
                  {loading ? 'Processing...' : <><Play size={16} /> Watch Now</>}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
