import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Play } from 'lucide-react';
import { ResourceGate } from '../components/ui/ResourceGate';

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

const featuredWebinar = {
  title: "American Lung Association's Digital Transformation with Vorro",
  thumbnail: 'https://vorro.net/wp-content/uploads/2025/12/Capture.jpg',
  videoUrl: 'https://vorro.net//wp-content/uploads/2026/01/American-Lung-Associations-digital-transformation-with-Vorro-1.mp4',
  duration: 'On demand',
  category: 'Non-Profit',
  description: 'Learn how the American Lung Association replaced manual fax-and-paper tobacco cessation referrals with automated digital exchange between hospitals, clinics, and EMRs — fully managed by Vorro.',
};

export default function Webinar() {
  const [gateOpen, setGateOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setGateOpen(true);
  };

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

      {/* Featured On-Demand Webinar */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Featured</div>
            <h2>On-Demand Webinar</h2>
          </div>
          
          <div className="webinar-featured">
            <div className="webinar-featured-video">
              {videoPlaying ? (
                <video 
                  controls 
                  autoPlay
                  className="webinar-video-player"
                >
                  <source src={featuredWebinar.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div 
                  className="webinar-thumbnail"
                  onClick={handlePlayClick}
                  style={{ backgroundImage: `url(${featuredWebinar.thumbnail})` }}
                >
                  <div className="webinar-play-btn">
                    <Play size={40} fill="white" />
                  </div>
                  <div className="webinar-thumbnail-overlay" />
                </div>
              )}
            </div>
            
            <div className="webinar-featured-info">
              <span className="tag tag-primary">{featuredWebinar.category}</span>
              <h3 className="webinar-featured-title">{featuredWebinar.title}</h3>
              <p className="webinar-featured-desc">{featuredWebinar.description}</p>
              <div className="webinar-featured-meta">
                <span><Clock size={14} /> {featuredWebinar.duration}</span>
              </div>
              <button 
                onClick={handlePlayClick}
                className="btn btn-primary btn-lg"
                style={{ marginTop: '1.5rem' }}
              >
                <Play size={16} /> Watch Now
              </button>
            </div>
          </div>
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

      {/* Resource Gate Modal */}
      <ResourceGate 
        open={gateOpen} 
        onOpenChange={(open) => {
          setGateOpen(open);
          if (!open) {
            // When gate closes after submission, play video
            setVideoPlaying(true);
          }
        }}
        resourceUrl={featuredWebinar.videoUrl}
        resourceType="video"
        resourceTitle={featuredWebinar.title}
      />
    </main>
  );
}
