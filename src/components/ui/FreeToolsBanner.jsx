import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const tools = [
  {
    title: 'FHIR Validation',
    badge: 'New FREE Tool',
    description: 'Check FHIR resources for structure, compliance, and data quality before they reach production workflows.',
    link: 'https://vorro.net/FHIR-Validation/',
    cta: 'Validate FHIR',
  },
  {
    title: 'BridgeGate N8N Node',
    badge: 'New FREE Tool',
    description: 'Connect your n8n workflows to BridgeGate for seamless healthcare data automation and integration.',
    link: 'https://vorro.net/BridgeGate-N8N-Node/',
    cta: 'Try N8N Node',
  },
];

export function FreeToolsBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tools.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (index) => setActiveIndex(index);
  const prev = () => setActiveIndex((activeIndex - 1 + tools.length) % tools.length);
  const next = () => setActiveIndex((activeIndex + 1) % tools.length);

  const tool = tools[activeIndex];

  return (
    <section 
      className="tools-banner"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="tools-banner-bg" />
      
      <button className="tools-banner-nav tools-banner-nav-prev" onClick={prev} aria-label="Previous">
        <ChevronLeft size={20} />
      </button>

      <div className="tools-banner-content">
        <div className="tools-banner-left">
          <div className="tools-banner-badge">
            <Sparkles size={12} />
            {tool.badge}
          </div>
          <h3 className="tools-banner-title">{tool.title}</h3>
        </div>
        <div className="tools-banner-right">
          <p className="tools-banner-desc">{tool.description}</p>
          <a href={tool.link} target="_blank" rel="noopener noreferrer" className="tools-banner-cta">
            {tool.cta} <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <button className="tools-banner-nav tools-banner-nav-next" onClick={next} aria-label="Next">
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="tools-banner-dots">
        {tools.map((_, i) => (
          <button
            key={i}
            className={`tools-banner-dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default FreeToolsBanner;
