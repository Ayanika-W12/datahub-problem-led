import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Landing page identifier - this will be passed to Zoho Booking
const LANDING_PAGE = "Vorro Website";

// UTM parameters to track
const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'referral_page'
];

export function BookDemoModal({ open, onOpenChange }) {
  const [bookingUrl, setBookingUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (open) {
      // Store UTM params from URL in sessionStorage
      const params = new URLSearchParams(window.location.search);
      UTM_PARAMS.forEach(p => {
        const value = params.get(p);
        if (value) {
          sessionStorage.setItem(p, value);
        }
      });

      // Build Zoho booking URL with parameters
      let url = 'https://booknow.vorro.net/portal-embed#/ManishAgarwal?';
      
      // Append stored UTMs
      UTM_PARAMS.forEach(p => {
        const value = sessionStorage.getItem(p);
        if (value) {
          url += `${p}=${encodeURIComponent(value)}&`;
        }
      });
      
      // Add landing page identifier
      url += `landing_page=${encodeURIComponent(LANDING_PAGE)}&`;
      
      // Add full referral URL
      url += `referral_link=${encodeURIComponent(window.location.href)}`;

      setBookingUrl(url);
      setIsLoading(true);
    }
  }, [open]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleClose = () => {
    onOpenChange(false);
    setIsLoading(true);
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="book-demo-backdrop"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="book-demo-modal">
        {/* Close button */}
        <button 
          className="book-demo-close"
          onClick={handleClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="book-demo-content">
          {/* Loading spinner */}
          {isLoading && (
            <div className="book-demo-loading">
              <div className="book-demo-spinner" />
              <p>Loading booking calendar...</p>
            </div>
          )}

          {/* Zoho Booking iframe */}
          {bookingUrl && (
            <iframe
              src={bookingUrl}
              frameBorder="0"
              allowFullScreen
              onLoad={handleIframeLoad}
              title="Book a Demo"
              className="book-demo-iframe"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default BookDemoModal;
