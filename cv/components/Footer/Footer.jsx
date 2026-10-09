"use client";

import React, { useState, useEffect } from 'react';
import './Footer.css';

const PHRASES = ["LET'S TALK", "LET'S BUILD", "LET'S CREATE", "LET'S SHIP"];

const Footer = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Auto typing / deleting loop through PHRASES
  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 55 : 110;
    const pauseAtFull = 1700;
    const pauseAtEmpty = 350;

    let timeout;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAtFull);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, pauseAtEmpty);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentPhrase.slice(0, prev.length - 1)
            : currentPhrase.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      {/* Tech HUD layers */}
      <div className="footer-grid-bg" />
      <div className="footer-scanline" />
      <div className="footer-glow" />

      {/* Top Header Row */}
      <div className="footer-header">
        <span className="copyright">
          <span className="status-dot" aria-hidden="true" />
          © 2026 · SYSTEM ONLINE
        </span>
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <span className="back-to-top-text">BACK TO TOP</span>
          <div className="arrow-circle">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </div>
        </button>
      </div>

      {/* Hero Section with Auto-Typing Loop */}
      <div className="footer-hero">
        <p className="subtitle">
          <span className="prompt-arrow">&gt;</span> HAVE A PROJECT IN MIND?
        </p>
        <div className="typing-wrapper">
          <h1 className="main-title gradient-text">
            {displayText}
            <span className="cursor-blink" aria-hidden="true">_</span>
          </h1>
        </div>
      </div>

      {/* Bottom Content Row */}
      <div className="footer-bottom">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/danushka-wickramasinghe"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="LinkedIn Profile"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
        </div>

        <div className="credits">
          <p>
            Design & Development by <span>Danushka Wickramasinghe</span>
          </p>
          <p>
            Role <span>UI/UX Engineer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;