import React from 'react';
import './ProjectsSection.css';

const projectsData = [
  {
    id: 1,
    category: "Website Projects",
    title: "Website Design & Development",
    description: "Designed and developed modern, responsive websites for SaaS, IoT, agriculture, and travel platforms with a focus on user experience, performance, and product storytelling.",
    contribution: "UI/UX Designer + Frontend Developer",
    technology: "Next.js • React • TypeScript",
    accent: "indigo",
    badge: "Featured",
    link: "/ProjectDetailsPage"
  },
  {
    id: 2,
    category: "Web Application Project",
    title: "SenzAgro Web Application",
    description: "A smart agriculture platform designed to help users monitor crop data, manage agricultural insights, and make better decisions through IoT-powered solutions.",
    contribution: "UI UX Designer",
    technology: "Figma • Draw.io • Balsamiq",
    accent: "blue",
    badge: "New",
    link: "/SenzAgroAppCaseStudy"
  },
  {
    id: 3,
    category: "Web Application Project",
    title: "DevicePulse",
    description: "AI-powered IoT device management platform for monitoring device health, detecting failures, and simplifying fleet operations.",
    contribution: "UI/UX Designer & Frontend Developer",
    technology: "Figma • Balsamiq • Draw.io",
    accent: "purple",
    badge: "AIoT",
    link: "/DevicePulseDetailsPage"
  },
  {
    id: 4,
    category: "Web Application Project",
    title: "Polar Cold Chain Monitoring",
    description: "Smart cold chain monitoring platform helping businesses track temperature-sensitive assets, detect risks, and maintain product quality.",
    contribution: "UI/UX Designer",
    technology: "Figma • Balsamiq • Draw.io",
    accent: "blue",
    badge: "IoT",
    link: "/PolarDetailsPage"
  },
  {
    id: 5,
    category: "Web Application Project",
    title: "Rebuild Lanka",
    description: "Modern digital platform designed to support Sri Lanka's rebuilding efforts by connecting communities, resources, and development initiatives.",
    contribution: "UI/UX Designer + Frontend Developer",
    technology: "Next.js • React • JavaScript",
    accent: "emerald",
    badge: "Web Platform",
    link: "/RebuildLankaDetailsPage"
  },
  {
    id: 6,
    category: "Website Project",
    title: "Carlos Embellishers Website",
    description: "Professional business website designed to showcase embroidery services, company capabilities, and product offerings.",
    contribution: "UI/UX Designer + Frontend Developer",
    technology: "React • JavaScript • CSS",
    accent: "purple",
    badge: "Website",
    link: "/CarlosEmbershilsDetailsPage"
  },
];

export default function ProjectsSection() {
  return (
    <section id="ProjectsSection" className="psec-section">
      {/* Apple-grade ambient atmospheric glows */}
      <div className="psec-bg-glow psec-bg-glow-indigo" />
      <div className="psec-bg-glow psec-bg-glow-purple" />
      <div className="psec-bg-glow psec-bg-glow-blue" />

      <div className="psec-container">
        {/* Section Header */}
        <div className="psec-header">
          <span className="psec-section-tag">
            <span className="psec-breathing-dot"></span>
            Portfolio Highlights
          </span>
          <h2 className="psec-section-title">Featured Works & Case Studies</h2>
          <p className="psec-section-subtitle">
            A curated selection of recent projects exploring modern software architecture, 
            intuitive UX, and robust engineering.
          </p>
        </div>

        {/* 6-Project Responsive Grid */}
        <div className="psec-grid">
          {projectsData.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              className={`psec-card psec-card-link psec-accent-${project.accent}`}
            >
              <article className="psec-article-wrapper">
                <div className="psec-card-top">
                  <span className="psec-category">{project.category}</span>
                  <span 
                    className="psec-icon-btn" 
                    aria-label={`View details for ${project.title}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </span>
                </div>

                <div className="psec-card-body">
                  <h3 className="psec-title">{project.title}</h3>
                  <p className="psec-desc">{project.description}</p>
                </div>

                <div className="psec-card-details">
                  <div className="psec-detail-group">
                    <span className="psec-detail-label">Contribution</span>
                    <span className="psec-detail-value">{project.contribution}</span>
                  </div>
                  <div className="psec-detail-group">
                    <span className="psec-detail-label">Technology</span>
                    <span className="psec-detail-value">{project.technology}</span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}