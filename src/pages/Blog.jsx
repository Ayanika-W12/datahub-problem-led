import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blogPosts';

const categories = blogCategories;

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <main>
      <section className="vertical-hero">
        <div className="container vertical-hero-inner">
          <div className="badge badge-white" style={{ marginBottom: '1.25rem' }}>Blog</div>
          <h1 className="vertical-hero-headline">Healthcare Data Insights</h1>
          <p className="vertical-hero-sub">
            Practical guides, integration best practices, and healthcare data strategy —
            written by engineers and strategists who live in this space every day.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`vertical-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-gray-400)' }}>
              No posts in this category yet.
            </div>
          ) : (
            <div className="grid-3" style={{ gap: '1.5rem' }}>
              {filtered.map((post) => (
                <div key={post.slug} className="card-feature" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="tag tag-primary">{post.category}</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)' }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--color-navy)', lineHeight: 1.35, flex: 1 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 1.6, flex: 1 }}>
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-primary)', textDecoration: 'none' }}
                  >
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Count */}
          <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: 'var(--text-sm)', color: 'var(--color-gray-400)' }}>
            Showing {filtered.length} of {blogPosts.length} articles
          </div>
        </div>
      </section>
    </main>
  );
}
