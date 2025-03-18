import React from 'react';
import './App.css';

interface BilibiliVideo {
  id: string;
  title: string;
  thumbnail: string;
  uploader: string;
  views: string;
}

const sampleVideos: BilibiliVideo[] = [
  {
    id: 'BV1Z64y1K74p',
    title: 'World Beyond - WELCOME TO OUR WORLD BEYOND | 官方MV',
    thumbnail: '/wb.jpg',
    uploader: 'World Beyond',
    views: '2.4K'
  },
  {
    id: 'BV1Tt421u7Fd',
    title: 'World Beyond - ONE FINAL CHANCE | 官方MV',
    thumbnail: '/wb.jpg',
    uploader: 'World Beyond',
    views: '2.4K'
  },
  {
    id: 'BV12H4y1K7Xi',
    title: 'World Beyond - CTOS_Calibration | 官方MV',
    thumbnail: '/wb.jpg',
    uploader: 'World Beyond',
    views: '2.4K'
  },
];
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bilibili Collection</h1>
      </header>
      <main className="video-grid">
        {sampleVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </main>
    </div>
  );
}

export default App;
