import { useState } from 'react';
import { X, Download, Play, FileText } from 'lucide-react';

const ZOHO_ENDPOINT = 'https://www.zohoapis.in/crm/v7/functions/website_form_integration/actions/execute?auth_type=apikey&zapikey=1003.ac8d2f0ec070fcedce42f03f55eefed1.318c243fefeb1ae115fca5b62924c604';

export function ResourceGate({ open, onOpenChange, resourceUrl, resourceType = 'pdf', resourceTitle }) {
  const [formData, setFormData] = useState({
    Last_Name: '',
    Designation: '',
    Company: '',
    Email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Get UTM params from URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
      UTM_Source: urlParams.get('utm_source') || '',
      UTM_Medium: urlParams.get('utm_medium') || '',
      UTM_Campaign: urlParams.get('utm_campaign') || '',
      UTM_Lead_Source: urlParams.get('utm_content') || '',
      UTM_Term: urlParams.get('utm_term') || '',
      Referral_Link: document.referrer || '',
      Landing_Page_URL: window.location.href,
      Lead_Source: resourceType === 'pdf' ? 'Vorro Case Study' : 'Vorro Webinar',
    };

    const payload = {
      ...formData,
      ...utmData,
      pdf_url: resourceUrl,
    };

    try {
      await fetch(ZOHO_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors', // Zoho may not support CORS
      });
      
      setSubmitted(true);
      
      // Open the resource after a short delay
      setTimeout(() => {
        if (resourceType === 'pdf') {
          window.open(resourceUrl, '_blank');
        }
        onOpenChange(false);
        setSubmitted(false);
        setFormData({ Last_Name: '', Designation: '', Company: '', Email: '' });
      }, 1500);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="resource-gate-backdrop" onClick={() => onOpenChange(false)} />
      <div className="resource-gate-modal">
        <button className="resource-gate-close" onClick={() => onOpenChange(false)}>
          <X size={18} />
        </button>

        <div className="resource-gate-content">
          <div className="resource-gate-icon">
            {resourceType === 'pdf' ? <FileText size={32} /> : <Play size={32} />}
          </div>
          
          <h3 className="resource-gate-title">
            {submitted ? 'Thank you!' : `Access: ${resourceTitle || 'Resource'}`}
          </h3>
          
          {submitted ? (
            <p className="resource-gate-desc">
              {resourceType === 'pdf' 
                ? 'Your download will begin shortly...'
                : 'Loading the video now...'}
            </p>
          ) : (
            <>
              <p className="resource-gate-desc">
                Fill in the details below to {resourceType === 'pdf' ? 'download' : 'watch'} this resource.
              </p>

              <form onSubmit={handleSubmit} className="resource-gate-form">
                <div className="resource-gate-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="Last_Name"
                    value={formData.Last_Name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="resource-gate-field">
                  <label>Job Title *</label>
                  <input
                    type="text"
                    name="Designation"
                    value={formData.Designation}
                    onChange={handleChange}
                    required
                    placeholder="CIO, VP of IT, etc."
                  />
                </div>
                
                <div className="resource-gate-field">
                  <label>Company *</label>
                  <input
                    type="text"
                    name="Company"
                    value={formData.Company}
                    onChange={handleChange}
                    required
                    placeholder="Your organization"
                  />
                </div>
                
                <div className="resource-gate-field">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                  />
                </div>

                {error && <p className="resource-gate-error">{error}</p>}

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg resource-gate-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      {resourceType === 'pdf' ? <Download size={16} /> : <Play size={16} />}
                      {resourceType === 'pdf' ? 'Download Now' : 'Watch Now'}
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ResourceGate;
