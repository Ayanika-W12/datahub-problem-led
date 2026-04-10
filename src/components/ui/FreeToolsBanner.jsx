import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const tools = [
  {
    title: 'FHIR Validation Tool',
    description: 'Check FHIR resources for structure, compliance, and data quality before production.',
    link: 'https://vorro.net/FHIR-Validation/',
    cta: 'Try Free',
  },
  {
    title: 'BridgeGate N8N Node',
    description: 'Connect n8n workflows to BridgeGate for seamless healthcare data automation.',
    link: 'https://vorro.net/BridgeGate-N8N-Node/',
    cta: 'Get Started',
  },
];

export function FreeToolsBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % tools.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isHovered]);

  const goTo = (index) => setActiveIndex(index);
  const goPrev = () => setActiveIndex(prev => (prev - 1 + tools.length) % tools.length);
  const goNext = () => setActiveIndex(prev => (prev + 1) % tools.length);

  return (
    <section 
      className="ftb-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="ftb-container">
        {/* Left: Badge + Indicator */}
        <div className="ftb-left">
          <div className="ftb-badge">
            New Free Tools
          </div>
          <div className="ftb-dots">
            {tools.map((_, i) => (
              <button 
                key={i} 
                className={`ftb-dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Center: Slide Content */}
        <div className="ftb-slides">
          {tools.map((tool, i) => (
            <div 
              key={i}
              className={`ftb-slide ${i === activeIndex ? 'active' : ''}`}
            >
              <div className="ftb-slide-content">
                <h3 className="ftb-slide-title">{tool.title}</h3>
                <p className="ftb-slide-desc">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: CTA + Nav */}
        <div className="ftb-right">
          <a 
            href={tools[activeIndex].link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ftb-cta"
          >
            {tools[activeIndex].cta}
            <ArrowRight size={16} />
          </a>
          <div className="ftb-nav">
            <button className="ftb-nav-btn" onClick={goPrev} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button className="ftb-nav-btn" onClick={goNext} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="ftb-progress">
        <div 
          className="ftb-progress-bar" 
          style={{ 
            animationDuration: isHovered ? '0s' : '5s',
            animationPlayState: isHovered ? 'paused' : 'running'
          }}
          key={activeIndex}
        />
      </div>
    </section>
  );
}

export default FreeToolsBanner;
