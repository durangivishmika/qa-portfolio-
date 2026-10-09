'use client';

import React from 'react';
import './ThreeDShowcase.css';

const showcaseItems = [
   {
    id: 1,
    title: "JBL Headphones - Product Animation",
    videoUrl: "/Images/video-01.mp4",
   },
   {
    id: 2,
    title: "JBL Earbuds - Product Animation",
    videoUrl: "/Images/video-02.mp4",
   },
   {
    id: 3,
    title: "Fluid Mechanics 04",
    videoUrl: "/Images/video-03.mp4",
   },
   {
    id: 4,
    title: "BMW — Cinematic Assembly",
    videoUrl: "/Images/video-04.mp4",
   },
];

export default function ThreeDShowcase() {
  return (
    <div className="t3ds-wrapper">
      {/* Clean Gradient Hero Section */}
      <header className="t3ds-hero">
        <div className="t3ds-hero-content">
          <div className="t3ds-hero-badge">Motion &amp; Form Studio</div>
          <h1 className="t3ds-hero-title">
            Spatial Depth. <br />
            <span className="t3ds-gradient-text">Material Fidelity.</span>
          </h1>
          <p className="t3ds-hero-subtitle">
            A curated sequence of high-end 3D animation studies exploring dynamic rhythm, realistic refraction, and seamless mechanical assembly.
          </p>
        </div>
      </header>

      {/* Showcase Video Grid */}
      <div className="t3ds-grid">
        {showcaseItems.map((item) => (
          <div 
            className="t3ds-card" 
            key={item.id} 
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="t3ds-video-container">
              <video
                src={item.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                className="t3ds-video-element"
              />
              <div className="t3ds-video-overlay"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}