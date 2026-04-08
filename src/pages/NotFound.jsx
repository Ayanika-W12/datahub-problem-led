import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', background: 'var(--color-gray-50)' }}>
      <div>
        <div style={{ fontSize: '6rem', fontWeight: 'var(--font-black)', color: 'var(--color-gray-200)', lineHeight: 1, marginBottom: '1rem' }}>404</div>
        <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-extrabold)', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-gray-500)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Back to Homepage <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
