import { ArrowRight } from 'lucide-react';

const tools = [
  {
    tag: 'Free Tool',
    title: 'FHIR Validation',
    description: 'Check FHIR resources for structure, compliance, and data quality before they hit production.',
    link: 'https://vorro.net/FHIR-Validation/',
    cta: 'Try it free',
  },
  {
    tag: 'Free Tool',
    title: 'BridgeGate for N8N',
    description: 'Bring native EMR connectivity to n8n workflows — no custom code, no middleware.',
    link: 'https://vorro.net/BridgeGate-N8N-Node/',
    cta: 'Get started',
  },
];

export function FreeToolsBanner() {
  return (
    <section className="ftb-section">
      <div className="ftb-container">
        <div className="ftb-left">
          <div className="ftb-badge">New Free Tools</div>
          <p className="ftb-left-sub">No cost · No commitment</p>
        </div>

        <div className="ftb-cards">
          {tools.map((tool) => (
            <a
              key={tool.title}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ftb-card"
            >
              <span className="ftb-card-tag">{tool.tag}</span>
              <div className="ftb-card-title">{tool.title}</div>
              <p className="ftb-card-desc">{tool.description}</p>
              <span className="ftb-card-cta">
                {tool.cta} <ArrowRight size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FreeToolsBanner;
