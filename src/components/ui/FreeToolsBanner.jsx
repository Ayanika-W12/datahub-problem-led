import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

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
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Continuous smooth scroll animation
  useEffect(() => {
    const speed = 0.5; // pixels per frame
    
    const animate = () => {
      setOffset(prev => {
        // Reset when scrolled full width of one set
        const containerWidth = containerRef.current?.scrollWidth / 2 || 800;
        if (prev >= containerWidth) {
          return 0;
        }
        return prev + speed;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="tools-banner-v2">
      {/* Grainy noise overlay */}
      <div className="tools-banner-noise" />
      
      {/* Glassmorphism background */}
      <div className="tools-banner-glass" />
      
      {/* Scrolling content */}
      <div 
        ref={containerRef}
        className="tools-banner-scroll"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {/* Duplicate tools for seamless loop */}
        {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
          <a 
            key={i} 
            href={tool.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="tools-banner-item"
          >
            <div className="tools-banner-item-badge">
              <Sparkles size={10} />
              {tool.badge}
            </div>
            <div className="tools-banner-item-title">{tool.title}</div>
            <div className="tools-banner-item-cta">
              {tool.cta} <ArrowRight size={12} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default FreeToolsBanner;
