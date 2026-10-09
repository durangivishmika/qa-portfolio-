"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Building2,
  Users,
  Briefcase,
  Layers,
  ChevronRight,
  Globe,
  Sparkles,
  Palette,
  Terminal,
  Calendar,
  Code2,
  ExternalLink,
  Search,
  Layout,
  Wrench,
  Smartphone,
} from "lucide-react";
import "./CarlosEmbershilsDetails.css";

// Exact inline Figma icon styled to act like a Lucide component
const Figma = ({ size = 24, color = "currentColor", style = {}, className = "", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 38 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle", ...style }}
    {...props}
  >
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
  </svg>
);

// Carlos Embellishers Case Study Data
const featureData = {
  id: "carlos-embellishers",
  name: "Carlos Embellishers",
  tagline: "Website Redesign & Frontend Development",
  badge: "UI/UX Design & Next.js Development",
  themeColor: "#008FD5",
  themeSoft: "#E0F2FE",

  // Project Action Links
  links: {
    figma: "https://www.figma.com/proto/CCwWMams8kB57ik3TRDYd6/Carlos?node-id=61-188&t=HV5I26n3wgYCMBBb-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A652",
    livePreview: "https://carlos-embellishers.vercel.app/",
  },

  overview: {
    text1:
      "I worked on the redesign and development of the Carlos Embellishers website, focusing on creating a more modern, structured, and user-friendly web experience.",
    text2:
      "Starting by analyzing the existing site and conducting competitor research, I designed the complete UI/UX in Figma and translated the designs into a responsive React/Next.js application.",
  },

  meta: {
    role: ["UI/UX Designer", "Frontend Developer"],
    tools: ["Figma", "React", "Next.js", "JavaScript", "CSS"],
    timeline: "2024",
  },

  contributions: [
    "Reviewed and analyzed the existing Carlos Embellishers website",
    "Researched competitor and industry websites for design and UX references",
    "Planned the website structure and content hierarchy",
    "Designed the website UI/UX in Figma",
    "Created responsive layouts for different screen sizes",
    "Developed the website using React and Next.js",
    "Implemented the designs using JavaScript and CSS",
    "Built reusable and modular frontend components",
    "Refined the interface based on visual consistency, usability, and responsive behavior",
  ],

  projectWorkflow: [
    { title: "Existing Website Analysis", desc: "Reviewed legacy content, structure, and visual bottlenecks." },
    { title: "Competitor Research", desc: "Identified industry patterns and B2B apparel design benchmarks." },
    { title: "UX & Visual Direction", desc: "Planned site structure, content hierarchy, and design direction." },
    { title: "Figma Design", desc: "Created page layouts, wireframes, and responsive component systems." },
    { title: "Frontend Development", desc: "Translated designs into code using React, Next.js, and CSS." },
    { title: "Responsive Implementation", desc: "Ensured seamless consistency across desktop, tablet, and mobile." },
    { title: "UI Refinement", desc: "Polished interface for usability, performance, and visual fidelity." },
  ],

  designDirection: {
    concepts: [
      "Modern corporate aesthetic tailored for apparel manufacturing",
      "Structured content hierarchy for clear B2B navigation",
      "Mobile-first responsive UX across desktop, tablet, and mobile",
      "Reusable component-driven frontend architecture",
      "High-contrast readability and clean visual presentation",
    ],

    primaryColor: "#008FD5",
    textColor: "#222222",
    font: "Modern Sans Serif (Inter / System)",

    components: [
      "Design System / Tokens",
      "Figma Responsive Layouts",
      "Navigation & Drawer Systems",
      "Modular Next.js Components",
      "Custom CSS Modules / Styles",
    ],
  },
};

export default function CarlosEmbershilsDetails({ onBack }) {
  const router = useRouter();

  const handleBackClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof onBack === "function") {
      onBack();
      return;
    }

    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <article
      className="pdp-page pdp-carlos-theme"
      style={{
        "--pdp-brand-active": featureData.themeColor,
        "--pdp-brand-soft": featureData.themeSoft,
        "--pdp-text-primary": featureData.designDirection.textColor,
      }}
    >
      {/* Background Glows */}
      <div
        className="pdp-bg-glow pdp-bg-glow-primary"
        style={{ pointerEvents: "none" }}
      />
      <div
        className="pdp-bg-glow pdp-bg-glow-secondary"
        style={{ pointerEvents: "none" }}
      />

      <div className="pdp-container">
        {/* Navigation */}
        <nav className="pdp-top-nav" style={{ position: "relative", zIndex: 10 }}>
          <button
            type="button"
            onClick={handleBackClick}
            className="pdp-back-btn"
            aria-label="Back to portfolio grid"
          >
            <ArrowLeft className="pdp-nav-icon" size={18} />
            <span>Back to Portfolio</span>
          </button>

          <span className="pdp-badge">
            <Building2 size={14} className="pdp-badge-icon" />
            {featureData.badge}
          </span>
        </nav>

        {/* Hero */}
        <header className="pdp-hero">
          <span className="pdp-section-tag">
            <span className="pdp-breathing-dot"></span>
            Case Study View
          </span>

          <h1 className="pdp-hero-title">{featureData.name}</h1>
          <p className="pdp-hero-subtitle">{featureData.tagline}</p>

          {/* Action Buttons */}
          <div className="pdp-hero-actions">
            {featureData.links.figma && (
              <a
                href={featureData.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="pdp-btn pdp-btn-secondary"
              >
                <Figma size={18} />
                <span>Figma Design</span>
                <ExternalLink size={14} className="pdp-btn-ext" />
              </a>
            )}

            {featureData.links.livePreview && (
              <a
                href={featureData.links.livePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="pdp-btn pdp-btn-primary"
              >
                <Globe size={18} />
                <span>Live Preview</span>
                <ExternalLink size={14} className="pdp-btn-ext" />
              </a>
            )}
          </div>
        </header>

        {/* 01. Project Introduction */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">01. Project Overview</h2>

          <div className="pdp-card pdp-intro-card">
            <div className="pdp-intro-overview">
              <h3>Overview</h3>
              <p>{featureData.overview.text1}</p>
              <p>{featureData.overview.text2}</p>
            </div>

            <div className="pdp-meta-grid">
              <div className="pdp-meta-item">
                <h4>
                  <Code2 size={16} className="pdp-meta-icon" />
                  Role
                </h4>
                <div className="pdp-chip-group">
                  {featureData.meta.role.map((role, i) => (
                    <span key={i} className="pdp-chip">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pdp-meta-item">
                <h4>
                  <Terminal size={16} className="pdp-meta-icon" />
                  Tools & Tech
                </h4>
                <div className="pdp-chip-group">
                  {featureData.meta.tools.map((tool, i) => (
                    <span key={i} className="pdp-chip pdp-chip-alt">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pdp-meta-item">
                <h4>
                  <Calendar size={16} className="pdp-meta-icon" />
                  Timeline
                </h4>
                <p className="pdp-meta-val">{featureData.meta.timeline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 02. My Contribution */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">02. My Contribution</h2>

          <div className="pdp-card pdp-challenge-card">
            <h3 className="pdp-card-heading">Key Design & Development Responsibilities</h3>

            <div className="pdp-challenge-grid">
              {featureData.contributions.map((point, index) => (
                <div key={index} className="pdp-challenge-item">
                  <CheckCircle2
                    size={20}
                    className="pdp-challenge-icon-lucide"
                    color={featureData.themeColor}
                  />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03. Project Workflow */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">03. Project Workflow</h2>

          <div className="pdp-card pdp-flow-card">
            <div className="pdp-journey-timeline">
              {featureData.projectWorkflow.map((step, index) => {
                const isLast = index === featureData.projectWorkflow.length - 1;

                return (
                  <div
                    key={index}
                    className={`pdp-timeline-step ${
                      isLast ? "pdp-step-final" : ""
                    }`}
                  >
                    <div className="pdp-step-marker">
                      <span>{index + 1}</span>
                    </div>

                    <div className="pdp-step-content">
                      <strong style={{ display: "block", marginBottom: "4px", color: "var(--pdp-text-primary)" }}>
                        {step.title}
                      </strong>
                      <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>{step.desc}</p>
                    </div>

                    {!isLast && (
                      <ChevronRight
                        size={16}
                        className="pdp-step-connector-icon"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 04. Design Direction & Implementation */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">04. Design Direction & Implementation</h2>

          <div className="pdp-design-grid">
            <div className="pdp-card">
              <h3 className="pdp-card-heading">
                <Sparkles size={18} className="pdp-heading-icon" />
                Visual Concept & Strategy
              </h3>

              <ul className="pdp-bullet-list">
                {featureData.designDirection.concepts.map((concept, index) => (
                  <li key={index}>{concept}</li>
                ))}
              </ul>
            </div>

            <div className="pdp-card">
              <h3 className="pdp-card-heading">
                <Palette size={18} className="pdp-heading-icon" />
                Design System & Deliverables
              </h3>

              <div className="pdp-ds-swatches">
                <div className="pdp-swatch-card">
                  <div
                    className="pdp-swatch"
                    style={{
                      backgroundColor: featureData.designDirection.primaryColor,
                    }}
                  />
                  <div className="pdp-swatch-info">
                    <span className="pdp-swatch-label">Brand Primary</span>
                    <code className="pdp-swatch-hex">
                      {featureData.designDirection.primaryColor}
                    </code>
                  </div>
                </div>

                <div className="pdp-swatch-card">
                  <div
                    className="pdp-swatch"
                    style={{
                      backgroundColor: featureData.designDirection.textColor,
                    }}
                  />
                  <div className="pdp-swatch-info">
                    <span className="pdp-swatch-label">Primary Text</span>
                    <code className="pdp-swatch-hex">
                      {featureData.designDirection.textColor}
                    </code>
                  </div>
                </div>
              </div>

              <div className="pdp-ds-detail">
                <strong>Typography:</strong>
                <span className="pdp-ds-pill">
                  {featureData.designDirection.font}
                </span>
              </div>

              <div className="pdp-ds-detail">
                <strong>Key Deliverables:</strong>
                <div className="pdp-chip-group">
                  {featureData.designDirection.components.map(
                    (component, index) => (
                      <span key={index} className="pdp-chip pdp-chip-alt">
                        {component}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05. Design to Development Execution */}
        <section className="pdp-section pdp-final-section">
          <h2 className="pdp-section-number">05. End-to-End Execution</h2>

          <div className="pdp-card pdp-cta-card">
            <div className="pdp-cta-content">
              <h3>From Research & Design to Production Code</h3>
              <p>
                This project allowed me to take a complete design-to-development approach—starting from initial website review and competitor research, creating the UI/UX design in Figma, and carrying the approved layouts through to a functional, responsive React/Next.js application.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}