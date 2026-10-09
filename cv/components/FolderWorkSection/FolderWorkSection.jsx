import React, { useEffect, useRef, useState, useCallback } from 'react';
import './FolderWorkSection.css';

const projects = [
  {
    id: 1,
    title: "AJ Salon Application",
    category: "React • TypeScript",
    accent: "indigo",
    link: "https://aj-salon-dashboard.vercel.app/"
  },
  {
    id: 2,
    title: "AJ Salon Website",
    category: "Next.js • Tailwind",
    accent: "blue",
    link: "https://aj-website-alpha.vercel.app/"
  },
  {
    id: 3,
    title: "Carlos Embellishers Website",
    category: "Figma • UI/UX Design",
    accent: "emerald",
    link: "https://www.figma.com/proto/CCwWMams8kB57ik3TRDYd6/Carlos?node-id=61-188&t=QHF8ykUgfdCV4FWf-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A652"
  },
  {
    id: 4,
    title: "SafeLink",
    category: "Figma • UI/UX Design",
    accent: "indigo",
    link: "https://www.figma.com/proto/MAqINcUUtCdqY3DrHJAU13/Safe-Link?node-id=706-67&t=dBc8H6Gdro0lYlD6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=706%3A67"
  },
];

export default function FolderWorkSection() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Handle outside clicks securely for mobile & desktop
  useEffect(() => {
    function handleOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('pointerdown', handleOutside);
    return () => document.removeEventListener('pointerdown', handleOutside);
  }, []);

  const handleToggle = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  // Enable hover only for devices that support mouse pointers (desktop)
  const handleMouseEnter = useCallback(() => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setIsOpen(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setIsOpen(false);
    }
  }, []);

  return (
    <section className="fw-section">
      <div className="fw-glow fw-glow-indigo" aria-hidden="true" />
      <div className="fw-glow fw-glow-blue" aria-hidden="true" />

      <div className="fw-container">
        <div
          className={`fw-wrapper${isOpen ? ' is-open' : ''}`}
          ref={wrapperRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
        >
          <span className="fw-hint">
            {isOpen ? 'Tap a project to view it' : 'Curious? Open the folder'}
          </span>

          <div className="fw-folder3d">
            <div className="fw-back">
              <div className="fw-stack">
                {projects.map((project, index) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`fw-card fw-card-${index + 1} fw-accent-${project.accent}`}
                    tabIndex={isOpen || index === 0 ? 0 : -1}
                    aria-hidden={!isOpen && index !== 0}
                  >
                    <span className="fw-card-content">
                      <span className="fw-card-cat">{project.category}</span>
                      <span className="fw-card-title">{project.title}</span>
                    </span>
                    <span className="fw-card-arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="fw-front"
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close project folder' : 'Open project folder'}
            >
              <span className="fw-tab">
                <span className="fw-tab-label">Portfolio</span>
              </span>

              <span className="fw-body">
                <span className="fw-brand">
                  <span className="fw-brand-name">Danushka</span>
                  <span className="fw-brand-surname">Wickramasinghe.</span>
                </span>

                <span className="fw-action-btn" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </span>
            </button>
          </div>

          <span className="fw-scroll-hint">Or keep <strong>scrolling</strong></span>
        </div>
      </div>
    </section>
  );
}