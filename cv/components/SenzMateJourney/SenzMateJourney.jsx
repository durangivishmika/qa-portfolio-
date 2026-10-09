import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { 
  Palette, 
  Globe, 
  Search, 
  Sparkles, 
  Users, 
  Code, 
  Layers, 
  HeartHandshake, 
  Cpu, 
  Smartphone, 
  LayoutDashboard,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './SenzMateJourney.css';

const PRODUCTS_DATA = {
  websites: [
    { name: 'SenzMate Website', role: 'UI/UX & Frontend' },
    { name: 'SenzAgro Website', role: 'UI/UX & Frontend' },
    { name: 'DevicePulse.AI', role: 'Full UI/UX & Frontend', highlight: 'Full Dev' },
    { name: 'TripPlanner.AI', role: 'Full UI/UX & Frontend', highlight: 'Full Dev' }
  ],
  mobile: [
    { name: 'SenzAgro Mobile App', role: 'Mobile UI/UX Design' },
    { name: 'Polar Mobile App', role: 'Mobile UI/UX Design' }
  ],
  webApps: [
    { name: 'SenzAgro Platform', role: 'Web App UI/UX' },
    { name: 'DevicePulse.AI', role: 'Enterprise Dashboard' },
    { name: 'Polar Platform', role: 'Dashboard UI/UX' },
    { name: 'Solar Track', role: 'Dashboard UI/UX' }
  ]
};

const GALLERY_IMAGES = [
  { id: 1, url: "/Images/gal1.JPG" },
  { id: 2, url: "/Images/gal2.jpeg" },
  { id: 3, url: "/Images/gal3.jpg" },
  { id: 4, url: "/Images/gal4.jpg" },
  { id: 5, url: "/Images/gal5.JPG" },
  { id: 6, url: "/Images/gal6.jpg" }
];

const TOTAL_IMAGES = GALLERY_IMAGES.length;

const HeaderSection = memo(() => (
  <header className="smj-apple-header">
    <div className="smj-apple-glass-pill">
      <span className="smj-pulse-dot" />
      <span>2025 – Present</span>
    </div>
    <h1 className="smj-apple-title">
      UI/UX Engineer Intern <br/>
      <span className="smj-apple-gradient">@ SenzMate</span>
    </h1>
    <p className="smj-apple-lead">
      Crafting human-centric interfaces and robust frontend systems for IoT ecosystems. 
      Focused on minimalist aesthetics, precision alignment, and seamless digital journeys.
    </p>
  </header>
));

const ProductsSection = memo(() => (
  <section className="smj-apple-section">
    <div className="smj-section-header">
      <span className="smj-eyebrow">Ecosystem</span>
      <h2>Things I’ve Worked On</h2>
    </div>

    <div className="smj-apple-grid-3">
      <div className="smj-apple-glass-card">
        <div className="smj-card-icon blue"><Globe size={18} strokeWidth={2.2} /></div>
        <h3>Websites</h3>
        <div className="smj-list">
          {PRODUCTS_DATA.websites.map((item, idx) => (
            <div key={idx} className="smj-list-row">
              <span>{item.name}</span>
              {item.highlight && <span className="smj-badge">{item.highlight}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="smj-apple-glass-card">
        <div className="smj-card-icon indigo"><Smartphone size={18} strokeWidth={2.2} /></div>
        <h3>Mobile Apps</h3>
        <div className="smj-list">
          {PRODUCTS_DATA.mobile.map((item, idx) => (
            <div key={idx} className="smj-list-row">
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="smj-apple-glass-card">
        <div className="smj-card-icon green"><LayoutDashboard size={18} strokeWidth={2.2} /></div>
        <h3>Web Applications</h3>
        <div className="smj-list">
          {PRODUCTS_DATA.webApps.map((item, idx) => (
            <div key={idx} className="smj-list-row">
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

const SkillsSection = memo(() => (
  <section className="smj-apple-section">
    <div className="smj-section-header">
      <span className="smj-eyebrow">Craftsmanship</span>
      <h2>What I Love Doing</h2>
    </div>

    <div className="smj-apple-grid-3">
      <div className="smj-apple-glass-card feature-card">
        <div className="smj-card-icon blue"><Palette size={18} strokeWidth={2.2} /></div>
        <h3>UI/UX Design</h3>
        <p>Architecting clean layouts, design systems, and responsive layouts inside Figma.</p>
      </div>
      <div className="smj-apple-glass-card feature-card">
        <div className="smj-card-icon indigo"><Code size={18} strokeWidth={2.2} /></div>
        <h3>Frontend Engineering</h3>
        <p>Translating complex requirements into crisp, responsive code using React & Modern CSS.</p>
      </div>
      <div className="smj-apple-glass-card feature-card">
        <div className="smj-card-icon green"><Search size={18} strokeWidth={2.2} /></div>
        <h3>UX Optimization</h3>
        <p>Simplifying complex telemetry views and streamlining developer handoff workflows.</p>
      </div>
    </div>
  </section>
));

export default function SenzMateJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TOTAL_IMAGES);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TOTAL_IMAGES) % TOTAL_IMAGES);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div className="smj-apple-wrapper">
      {/* Apple Dynamic Ambient Orbs for Glass Refraction */}
      <div className="smj-ambient-orb orb-1"></div>
      <div className="smj-ambient-orb orb-2"></div>
      <div className="smj-ambient-orb orb-3"></div>

      <div className="smj-apple-container">
        <HeaderSection />
        <ProductsSection />
        <SkillsSection />

        {/* APPLE GALLERY SHOWCASE */}
        <section className="smj-apple-section">
          <div className="smj-section-header center">
            <span className="smj-eyebrow">Gallery</span>
            <h2>Inside SenzMate</h2>
            <p className="smj-subtext">A glimpse of life at SenzMate with my teammates capturing friendships, team moments, and the memories we made together.</p>
          </div>

          <div 
            className="smj-apple-gallery-viewport"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="smj-apple-carousel-track">
              {GALLERY_IMAGES.map((img, idx) => {
                const isActive = idx === activeIndex;
                const isPrev = idx === (activeIndex - 1 + TOTAL_IMAGES) % TOTAL_IMAGES;
                const isNext = idx === (activeIndex + 1) % TOTAL_IMAGES;

                let positionClass = "unfocused";
                if (isActive) positionClass = "active-slide";
                else if (isPrev) positionClass = "prev-slide";
                else if (isNext) positionClass = "next-slide";

                return (
                  <div 
                    key={img.id} 
                    className={`smj-apple-slide ${positionClass}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div className="smj-image-frame">
                      <img 
                        src={img.url} 
                        alt="Gallery showcase" 
                        loading={isActive ? "eager" : "lazy"} 
                        fetchPriority={isActive ? "high" : "auto"}
                        decoding="async"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Apple Control Bar */}
            <div className="smj-apple-controls">
              <button className="smj-control-arrow" onClick={prevSlide} aria-label="Previous Slide">
                <ChevronLeft size={16} strokeWidth={2.2} />
              </button>
              <div className="smj-apple-pagination">
                {GALLERY_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    className={`smj-pagination-bullet ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Jump to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button className="smj-control-arrow" onClick={nextSlide} aria-label="Next Slide">
                <ChevronRight size={16} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}