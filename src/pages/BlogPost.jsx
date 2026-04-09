import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Tag, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { articleContent } from '../data/articleContent';

const categoryColors = {
  'Interfacing': 'primary',
  'Compliance': 'navy',
  'Data Quality': 'green',
  'AI Readiness': 'cyan',
  'Analytics & Conversational AI': 'orange',
  'Reporting & Conversational AI': 'primary',
  'Workflow Orchestration': 'cyan',
};

function ArticleBlock({ block }) {
  if (block.type === 'h2') {
    return <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', marginTop: '2.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>{block.text}</h2>;
  }
  if (block.type === 'li') {
    return (
      <li style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '0.5rem' }}>
        {block.text}
      </li>
    );
  }
  // Skip figure captions and source lines
  if (block.text.startsWith('Figure ') || block.text.startsWith('Source:') || block.text === 'Sources') {
    return <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-400)', fontStyle: 'italic', marginBottom: '0.5rem' }}>{block.text}</p>;
  }
  return <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--color-gray-600)', marginBottom: '1.25rem' }}>{block.text}</p>;
}

function ArticleBody({ blocks }) {
  const rendered = [];
  let listItems = [];

  const flushList = () => {
    if (listItems.length > 0) {
      rendered.push(
        <ul key={`list-${rendered.length}`} style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem', listStyleType: 'disc' }}>
          {listItems}
        </ul>
      );
      listItems = [];
    }
  };

  blocks.forEach((block, i) => {
    if (block.type === 'li') {
      listItems.push(<ArticleBlock key={i} block={block} />);
    } else {
      flushList();
      rendered.push(<ArticleBlock key={i} block={block} />);
    }
  });
  flushList();

  return <>{rendered}</>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main>
        <section className="section" style={{ textAlign: 'center', paddingTop: '8rem' }}>
          <h1>Article Not Found</h1>
          <Link to="/blog" className="btn btn-primary btn-lg" style={{ marginTop: '2rem' }}>← Back to Blog</Link>
        </section>
      </main>
    );
  }

  const content = articleContent[String(post.num)] || [];
  const colorKey = categoryColors[post.category] || 'primary';

  // Get related posts (same category, excluding current)
  const related = blogPosts
    .filter(p => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  // Estimate read time
  const totalChars = content.reduce((s, b) => s + b.text.length, 0);
  const readTime = Math.max(3, Math.round(totalChars / 1200));

  return (
    <main>
      {/* Hero */}
      <section className="vertical-hero" style={{ minHeight: '340px' }}>
        <div className="container" style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
          <Link to="/blog" className="btn btn-ghost-white btn-sm" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span className={`tag tag-${colorKey}`}>{post.category}</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={13} /> {post.date}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)' }}>{readTime} min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 'var(--font-bold)', color: '#fff', lineHeight: 1.25, maxWidth: '820px' }}>
            {post.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-lg)', marginTop: '1rem', maxWidth: '680px', lineHeight: 1.6 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Layout */}
      <section className="section bg-light" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '3rem', alignItems: 'start' }}>

            {/* Article Body */}
            <article style={{ background: '#fff', borderRadius: 'var(--radius-xl)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              {content.length > 0 ? (
                <ArticleBody blocks={content} />
              ) : (
                <p style={{ color: 'var(--color-gray-500)', lineHeight: 1.8 }}>{post.excerpt}</p>
              )}

              {/* Article Footer */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-gray-100)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Tag size={14} style={{ color: 'var(--color-gray-400)' }} />
                <span className={`tag tag-${colorKey}`}>{post.category}</span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-400)' }}>Vorro Integration Bible</span>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: '6rem' }}>
              {/* CTA Card */}
              <div className="card" style={{ background: 'var(--color-navy)', color: '#fff', marginBottom: '1.5rem', padding: '1.75rem' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', marginBottom: '0.75rem' }}>
                  Ready to solve this in your organization?
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', opacity: 0.8, lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Talk to a Vorro integration expert about your specific healthcare data challenges.
                </p>
                <Link to="/contact-us" className="btn btn-cyan btn-md" style={{ width: '100%', justifyContent: 'center' }}>
                  Get a Free Consultation <ArrowRight size={14} />
                </Link>
              </div>

              {/* Related Articles */}
              {related.length > 0 && (
                <div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-gray-400)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                    Related Articles
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {related.map(r => (
                      <Link
                        key={r.slug}
                        to={`/blog/${r.slug}`}
                        style={{ display: 'block', background: '#fff', borderRadius: 'var(--radius-lg)', padding: '1rem', boxShadow: 'var(--shadow-sm)', textDecoration: 'none', transition: 'box-shadow 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
                      >
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-primary)', fontWeight: 'var(--font-semibold)', marginBottom: '0.35rem' }}>{r.category}</div>
                        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-navy)', lineHeight: 1.4 }}>{r.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* Bottom Nav */}
          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/blog" className="btn btn-secondary btn-md">
              <ArrowLeft size={16} /> Back to All Articles
            </Link>
            <Link to="/contact-us" className="btn btn-primary btn-md">
              Talk to an Expert <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
