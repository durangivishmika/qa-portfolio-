import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Download, Check, Loader2 } from 'lucide-react';
import './HeroSection.css';

const roles = ["I'M A WEB DEVELOPER", "UI/UX DESIGNER", "TRAVELER", "QUICK LEARNER", "CREATIVE THINKER"];

const codeSnippet = `const developer = {
  name: "Danushka",
  role: "UI/UX Engineer",
  skills: ["React", "Next.js", "Figma", "Neon DB"],
  passion: "Crafting modern & high-performance applications"
};`;

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const NextjsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="90" cy="90" r="90" fill="currentColor" />
    <path
      d="M149.508 157.52L69.142 54H54V125.97H66.8136V69.3831L137.919 161.3C142.102 160.223 145.978 158.941 149.508 157.52Z"
      fill="url(#next_grad)"
    />
    <rect x="115" y="54" width="12" height="72" fill="url(#next_grad2)" />
    <defs>
      <linearGradient id="next_grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="next_grad2" x1="121" y1="54" x2="121" y2="106" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const FigmaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#0ACF83"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#03A9F4"/>
    <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="#A259FF"/>
    <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
    <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
  </svg>
);

const ReactIcon = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="8.2" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="4.5" fill="none">
      <ellipse cx="50" cy="50" rx="42" ry="16.5" />
      <ellipse cx="50" cy="50" rx="42" ry="16.5" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="16.5" transform="rotate(120 50 50)" />
    </g>
  </svg>
);

const NeonDbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#00E599" strokeWidth="2" strokeLinejoin="round" />
    <path d="M2 7L12 12L22 7" stroke="#00E599" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 12V22" stroke="#00E599" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" fill="#00E599" />
  </svg>
);

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [downloadState, setDownloadState] = useState('idle');

  const [codePhase, setCodePhase] = useState('skeleton');
  const [displayedCode, setDisplayedCode] = useState('');

  // Role typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText !== '') {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 45);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Code Card State Machine Loop
  useEffect(() => {
    let timer;

    if (codePhase === 'skeleton') {
      timer = setTimeout(() => {
        setDisplayedCode('');
        setCodePhase('typing');
      }, 1400);
    } else if (codePhase === 'typing') {
      if (displayedCode !== codeSnippet) {
        timer = setTimeout(() => {
          setDisplayedCode(codeSnippet.slice(0, displayedCode.length + 1));
        }, 20);
      } else {
        setCodePhase('complete');
      }
    } else if (codePhase === 'complete') {
      timer = setTimeout(() => {
        setCodePhase('deleting');
      }, 2500);
    } else if (codePhase === 'deleting') {
      if (displayedCode !== '') {
        timer = setTimeout(() => {
          setDisplayedCode(codeSnippet.slice(0, displayedCode.length - 1));
        }, 12);
      } else {
        setCodePhase('skeleton');
      }
    }

    return () => clearTimeout(timer);
  }, [codePhase, displayedCode]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('ProjectsSection');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    if (downloadState !== 'idle') return;

    setDownloadState('downloading');

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/Images/Danushka_CV.pdf';
      link.download = 'Danushka_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadState('completed');

      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
    }, 1800);
  };

  return (
    <section className="hero-root">
      <div className="hero-video-container">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-background-video"
        >
          <source src="/Images/Hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-pill">
            <span className="pulse-wrapper">
              <span className="blue-ping" />
              <span className="blue-pulse-dot" />
            </span>
            <span className="typewriter-text">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">Danushka Wickramasinghe</span>
            <br />
            <span className="hero-subtitle">
              I turn complex ideas into meaningful digital experiences.
            </span>
          </h1>

          <p className="hero-description">
            I combine product thinking, user-centered design, and frontend development to create intuitive, meaningful digital experiences that solve real user problems.
          </p>

          <div className="hero-actions">
            <a
              href="#ProjectsSection"
              className="btn-primary"
              onClick={handleScrollToProjects}
            >
              <span>View My Work</span>
              <ArrowUpRight size={18} />
            </a>

            <button
              onClick={handleDownloadCV}
              className={`btn-secondary btn-download ${downloadState}`}
              disabled={downloadState !== 'idle'}
              aria-label="Download CV"
            >
              <div className="download-progress-track">
                <span className="download-progress-bar" />
              </div>
              <span className="btn-content">
                {downloadState === 'idle' && (
                  <>
                    <span>Download CV</span>
                    <Download size={18} className="icon-download" />
                  </>
                )}
                {downloadState === 'downloading' && (
                  <>
                    <span>Downloading...</span>
                    <Loader2 size={18} className="icon-spinner" />
                  </>
                )}
                {downloadState === 'completed' && (
                  <>
                    <span>Downloaded!</span>
                    <Check size={18} className="icon-check" />
                  </>
                )}
              </span>
            </button>
          </div>

          <div className="code-card">
            <div className="code-card-header">
              <div className="code-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="code-title">developer.js</span>
            </div>
            
            <div className="code-fixed-box">
              {codePhase === 'skeleton' ? (
                <div className="code-skeleton">
                  <div className="skeleton-line shimmer w-75" />
                  <div className="skeleton-line shimmer w-50" />
                  <div className="skeleton-line shimmer w-100" />
                  <div className="skeleton-line shimmer w-60" />
                  <div className="skeleton-line shimmer w-40" />
                </div>
              ) : (
                <pre className="code-content">
                  <code>
                    {displayedCode}
                    {codePhase !== 'complete' && <span className="cursor">|</span>}
                  </code>
                </pre>
              )}
            </div>
          </div>

          <div className="tech-section">
            <span className="tech-title">TECHNOLOGIES I WORK WITH</span>
            <div className="tech-icons">
              <div className="tech-icon-box" title="GitHub"><GithubIcon /></div>
              <div className="tech-icon-box" title="Next.js"><NextjsIcon /></div>
              <div className="tech-icon-box" title="Figma"><FigmaIcon /></div>
              <div className="tech-icon-box" title="React"><ReactIcon /></div>
              <div className="tech-icon-box" title="Neon DB"><NeonDbIcon /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}