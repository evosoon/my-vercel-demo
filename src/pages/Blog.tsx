import React, { useState } from 'react';
import { blogPosts, BlogPost } from '../config/blog';
import './Blog.css';

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className="blog-card">
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{post.date}</span>
          <span className="blog-category">{post.category}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className="blog-tags">
          {post.tags.map(tag => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>技术博客</h1>
        <p>分享技术见解和实践经验</p>
      </header>

      <div className="blog-categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
