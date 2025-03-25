import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Tools from './pages/Tools';
import { videos, BilibiliVideo } from './config/videos';
import { tools, QuickTool } from './config/tools';

function VideoCard({ video }: { video: BilibiliVideo }) {
  return (
    <a 
      href={`https://www.bilibili.com/video/${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card"
    >
      <div className="thumbnail">
        <img src={video.thumbnail} alt={video.title} />
      </div>
      <div className="content">
        <h3>{video.title}</h3>
        <div className="meta">
          <span>{video.uploader}</span>
          <span>{video.views} views</span>
        </div>
      </div>
    </a>
  );
}

function QuickToolCard({ tool }: { tool: QuickTool }) {
  return (
    <Link to={tool.url.startsWith('http') ? '' : tool.url} 
          onClick={tool.url.startsWith('http') ? () => window.open(tool.url, '_blank') : undefined}
          className="tool-card">
      <span className="tool-icon">{tool.icon}</span>
      <h3>{tool.name}</h3>
      <p>{tool.description}</p>
    </Link>
  );
}

function Home() {
  return (
    <>
      <section className="hero-section">
        <h2>Welcome to My Digital Space</h2>
        <p>Exploring technology, sharing knowledge, and building useful tools</p>
      </section>

      <section id="tools" className="tools-section">
        <h2>Quick Tools</h2>
        <div className="tools-grid">
          {tools.map((tool) => (
            <QuickToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section id="videos" className="videos-section">
        <h2>Featured Videos</h2>
        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="nav-bar">
            <Link to="/" className="nav-logo">Evosoon</Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/tools">Tools</Link>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>

        <footer className="App-footer">
          <p> 2024 Evosoon. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
