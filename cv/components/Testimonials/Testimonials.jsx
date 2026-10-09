"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import "./Testimonials.css";

// Local helper to replace @/lib/utils cn()
const cn = (...classes) => classes.filter(Boolean).join(" ");

const TRANSITION_SPRING = {
  type: "spring",
  stiffness: 220,
  damping: 26,
  mass: 0.75,
};

const VISIBLE_OFFSETS = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

const testimonialsData = [
  {
    id: 1,
    company: "SenzMate",
    quote: "Danushka is a dedicated UI/UX designer who takes feedback positively and always focuses on creating simple, user-friendly experiences. He communicates well with the team and consistently works to improve the quality of his designs.",
    name: "Kumeshi Udabage",
    title: "Project Manager, SenzMate",
    avatar: "/Images/kumeshi.jpeg",
    linkedin: "https://www.linkedin.com/in/kumeshi-udabage-2a8987216/",
    alt: "Kumeshi Udabage profile photo",
  },
  {
    id: 2,
    company: "SenzMate",
    quote: "Working with Danushka has been a great experience. He is always willing to explore new ideas, take feedback, and improve his designs. His attention to detail and focus on the user experience really stand out.",
    name: "Sudarshana Sandaruwan",
    title: "UI/UX Engineer, SenzMate",
    avatar: "/Images/sadaruwan.jpeg",
    linkedin: "https://www.linkedin.com/in/sudarshana99/",
    alt: "Sudarshana Sandaruwan profile photo",
  },
  {
    id: 3,
    company: "SenzMate",
    quote: "Danushka has shown strong growth in UI/UX throughout his time with the team. He approaches design challenges with curiosity, pays attention to usability, and works well with both design and engineering teams.",
    name: "Nivethika Sivakumar",
    title: "Tech Lead – UI/UX, SenzMate",
    avatar: "/Images/nivethika.png",
    linkedin: "https://www.linkedin.com/in/nivethika-sivakumar/",
    alt: "Nivethika Sivakumar profile photo",
  },
];

export default function Testimonials({
  items = testimonialsData,
  autoPlayInterval = 6000,
  pauseOnHover = true,
  ...props
}) {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const elapsedRef = useRef(0);

  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [tier, setTier] = useState("desktop");
  const [viewportWidth, setViewportWidth] = useState(1200);

  const total = items.length;
  const activeIndex = ((page % total) + total) % total;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);

      if (width < 768) {
        setTier("mobile");
      } else if (width < 1120) {
        setTier("tablet");
      } else {
        setTier("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (pauseOnHover && isHovered) {
      lastTimeRef.current = null;
      return;
    }

    const step = (timestamp) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      elapsedRef.current += delta;

      if (elapsedRef.current >= autoPlayInterval) {
        elapsedRef.current = 0;
        lastTimeRef.current = null;
        setProgress(0);
        setPage((curr) => curr + 1);
        return;
      }

      setProgress(Math.min((elapsedRef.current / autoPlayInterval) * 100, 100));
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [page, pauseOnHover, isHovered, autoPlayInterval]);

  const handlePrev = useCallback(() => {
    elapsedRef.current = 0;
    lastTimeRef.current = null;
    setProgress(0);
    setPage((curr) => curr - 1);
  }, []);

  const handleNext = useCallback(() => {
    elapsedRef.current = 0;
    lastTimeRef.current = null;
    setProgress(0);
    setPage((curr) => curr + 1);
  }, []);

  const handleSelectCard = (event) => {
    const offsetStr = event.currentTarget.dataset.offset;

    if (offsetStr !== undefined) {
      const offset = Number.parseInt(offsetStr, 10);

      if (offset !== 0) {
        elapsedRef.current = 0;
        lastTimeRef.current = null;
        setProgress(0);
        setPage((curr) => curr + offset);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      handlePrev();
    } else if (event.key === "ArrowRight") {
      handleNext();
    }
  };

  const activeDimensions = {
    desktop: { width: 520, height: 380 },
    tablet: { width: 480, height: 360 },
    mobile: { width: Math.min(340, viewportWidth - 48), height: 390 },
  }[tier];

  return (
    <section className="tst-section">
      {/* Background Glows */}
      <div className="tst-bg-glow tst-bg-glow-indigo" />
      <div className="tst-bg-glow tst-bg-glow-blue" />

      {/* Grid Pattern */}
      <div className="tst-bg-grid-pattern" />

      <div className="tst-container" {...props}>
        {/* Section Header */}
        <div className="tst-header">
          <div className="tst-header-tag">
            <span className="tst-dot-indicator"></span>
            TESTIMONIALS
          </div>
          <h2 className="tst-header-title">
            TRUSTED BY TEAMS <br />
            <span className="tst-highlight-text">BACKED BY RESULTS</span>
          </h2>
          <p className="tst-header-subtitle">
            Feedback and recommendations from colleagues and leaders.
          </p>
        </div>

        {/* Badge Wrapper */}
        <div
          ref={containerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="tst-badge-wrapper"
        >
          {/* Lanyard Top Strap / Clip */}
          <div className="tst-lanyard-strap">
            <div className="tst-lanyard-clip"></div>
          </div>

          {/* Cards Canvas Stack */}
          <div
            id="carousel-view-panel"
            role="tabpanel"
            aria-live="polite"
            className="tst-cards-stack"
            style={{ height: activeDimensions.height }}
          >
            {VISIBLE_OFFSETS.map((offset) => {
              const virtualIndex = page + offset;
              const itemIndex = ((virtualIndex % total) + total) % total;
              const item = items[itemIndex];
              const isActive = offset === 0;

              const getVariant = () => {
                if (tier === "mobile") {
                  const activeW = activeDimensions.width;
                  const activeH = activeDimensions.height;
                  const gap = 16;
                  const peekW = 40;
                  const peekH = 340;

                  if (offset === 0) {
                    return {
                      x: -activeW / 2,
                      y: -activeH / 2,
                      width: activeW,
                      height: activeH,
                      opacity: 1,
                      zIndex: 10,
                      pointerEvents: "auto",
                    };
                  }
                  if (offset === -1) {
                    return {
                      x: -activeW / 2 - gap - peekW,
                      y: -peekH / 2,
                      width: peekW,
                      height: peekH,
                      opacity: 0.6,
                      zIndex: 5,
                      pointerEvents: "auto",
                    };
                  }
                  if (offset === 1) {
                    return {
                      x: activeW / 2 + gap,
                      y: -peekH / 2,
                      width: peekW,
                      height: peekH,
                      opacity: 0.6,
                      zIndex: 5,
                      pointerEvents: "auto",
                    };
                  }
                  return {
                    x: offset < 0 ? -400 : 400,
                    y: -peekH / 2,
                    width: peekW,
                    height: peekH,
                    opacity: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                  };
                }

                switch (offset) {
                  case 0:
                    return {
                      x: -260,
                      y: -190,
                      width: 520,
                      height: 380,
                      opacity: 1,
                      zIndex: 10,
                      pointerEvents: "auto",
                    };
                  case -1:
                    return {
                      x: -330,
                      y: -170,
                      width: 480,
                      height: 350,
                      opacity: 0.85,
                      zIndex: 5,
                      pointerEvents: "auto",
                    };
                  case 1:
                    return {
                      x: -150,
                      y: -170,
                      width: 480,
                      height: 350,
                      opacity: 0.85,
                      zIndex: 5,
                      pointerEvents: "auto",
                    };
                  case -2:
                    return {
                      x: -390,
                      y: -150,
                      width: 440,
                      height: 320,
                      opacity: 0.45,
                      zIndex: 1,
                      pointerEvents: "auto",
                    };
                  case 2:
                    return {
                      x: -50,
                      y: -150,
                      width: 440,
                      height: 320,
                      opacity: 0.45,
                      zIndex: 1,
                      pointerEvents: "auto",
                    };
                  default:
                    return {
                      x: offset < 0 ? -500 : 500,
                      y: -150,
                      width: 400,
                      height: 300,
                      opacity: 0,
                      zIndex: 0,
                      pointerEvents: "none",
                    };
                }
              };

              return (
                <motion.div
                  key={`${item.id}-${virtualIndex}`}
                  data-offset={offset}
                  onClick={handleSelectCard}
                  initial={false}
                  animate={getVariant()}
                  transition={TRANSITION_SPRING}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    willChange: "transform, opacity",
                  }}
                  className={cn(
                    "tst-card",
                    !isActive && "cursor-pointer"
                  )}
                >
                  {/* Card Header Bar */}
                  <div className="tst-card-top-bar">
                    <div className="tst-brand-logo" aria-label="SenzMate brand">
                      <Image
                        src="/Images/senzmate.png"
                        alt="SenzMate logo"
                        width={90}
                        height={22}
                        className="tst-brand-logo-image"
                      />
                    </div>

                    {/* Pagination Dots */}
                    <div className="tst-pagination-dots">
                      {items.map((dotItem, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`tst-dot ${dotItem.id === item.id ? "active" : ""}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Body Quote */}
                  <div className="tst-card-body">
                    <p className="tst-quote-text">“{item.quote}”</p>
                  </div>

                  {/* Card Footer Profile */}
                  <div className="tst-card-footer">
                    <div className="tst-profile-info">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={38}
                        height={38}
                        className="tst-profile-avatar"
                      />
                      <div className="tst-profile-details">
                        <h4 className="tst-profile-name">{item.name}</h4>
                        <p className="tst-profile-title">{item.title}</p>
                      </div>
                    </div>

                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tst-linkedin-btn"
                      aria-label="LinkedIn Profile"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="tst-nav-controls">
            <button
              className="tst-nav-btn"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              type="button"
            >
              &#10094;
            </button>
            <button
              className="tst-nav-btn"
              onClick={handleNext}
              aria-label="Next Testimonial"
              type="button"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}