"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./RebuildLankaDetails.css";

// Rebuild Lanka Case Study Data
const featureData = {
  id: "rebuild-lanka",
  name: "Rebuild Lanka",
  tagline: "A Community Platform for Building Better Sri Lankan Communities",
  badge: "Social Impact & Community",
  themeColor: "#16A34A",
  themeSoft: "#DCFCE7",

  overview: {
    text1:
      "Rebuild Lanka is a community-focused digital platform designed to help people identify local problems, connect with communities, and support projects that improve public spaces and local living conditions.",
    text2:
      "I designed the platform to make community participation simple, transparent, and accessible, allowing users to report issues, discover ongoing projects, contribute ideas, and track progress from one place.",
  },

  meta: {
    role: ["UI/UX Designer", "Full Stack Developer"],
    tools: ["Figma", "React", "Next.js"],
    timeline: "2026",
  },

  challenge: {
    title: "Making Community Development More Connected and Transparent",
    subtext:
      "Many local community problems are difficult to report, track, and communicate effectively. Rebuild Lanka focuses on creating a single digital space where communities can work together.",
    points: [
      "Create a simple way for citizens to report local problems and community needs",
      "Help users discover existing community projects and development initiatives",
      "Make project progress visible to residents and contributors",
      "Encourage collaboration between citizens, volunteers, organizations, and local groups",
    ],
    conclusion:
      "Designed a centralized community platform that turns local problems into visible, trackable, and collaborative development opportunities.",
  },

  designGoals: [
    {
      title: "Simple Community Reporting",
      titleNum: "01",
      desc: "Make it easy for users to report local issues with clear descriptions, images, and location information.",
    },
    {
      title: "Transparent Progress",
      titleNum: "02",
      desc: "Allow communities to follow project updates and understand what has been completed, planned, or delayed.",
    },
    {
      title: "Community Participation",
      titleNum: "03",
      desc: "Create simple ways for people to support projects through volunteering, feedback, ideas, and contributions.",
    },
  ],

  targetUsers: [
    {
      role: "Citizens",
      need: "Need an easy way to report community problems and follow issues that affect their area.",
    },
    {
      role: "Community Groups",
      need: "Need tools to organize projects, communicate with residents, and track development activities.",
    },
    {
      role: "Volunteers & Contributors",
      need: "Need to discover meaningful projects and find opportunities to contribute their time and skills.",
    },
  ],

  userJourney: [
    "User discovers a community issue and opens Rebuild Lanka",
    "Creates a report with a description, images, and relevant location details",
    "Community members review the issue and support or provide feedback",
    "A verified issue becomes a community project or action",
    "Volunteers and contributors join the project and development work begins",
    "Users track project updates until the issue is resolved or the project is completed",
  ],

  iaNodes: [
    "Community Dashboard",
    "Report an Issue",
    "Community Projects",
    "Project Details",
    "Volunteer & Contributions",
    "Community Discussions",
    "Notifications",
    "User Profile",
  ],

  designDirection: {
    concepts: [
      "Community-first experience",
      "Clean and approachable interface",
      "Trust through transparency",
      "Mobile-first accessibility",
      "Clear project progress indicators",
    ],

    primaryColor: "#16A34A",
    textColor: "#172B1B",
    font: "Poppins",

    components: [
      "Issue Report Cards",
      "Project Progress Cards",
      "Community Activity Feed",
      "Location Indicators",
      "Volunteer Action Cards",
      "Project Status Badges",
    ],
  },
};

export default function RebuildLankaDetails({ onBack }) {
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
      className="pdp-page"
      style={{
        "--pdp-brand-active": featureData.themeColor,
        "--pdp-brand-soft": featureData.themeSoft,
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
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Portfolio</span>
          </button>

          <span className="pdp-badge">{featureData.badge}</span>
        </nav>

        {/* Hero */}
        <header className="pdp-hero">
          <span className="pdp-section-tag">
            <span className="pdp-breathing-dot"></span>
            Case Study View
          </span>

          <h1 className="pdp-hero-title">{featureData.name}</h1>

          <p className="pdp-hero-subtitle">{featureData.tagline}</p>
        </header>

        {/* 01. Project Introduction */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">01. Project Introduction</h2>

          <div className="pdp-card pdp-intro-card">
            <div className="pdp-intro-overview">
              <h3>Overview</h3>
              <p>{featureData.overview.text1}</p>
              <p>{featureData.overview.text2}</p>
            </div>

            <div className="pdp-meta-grid">
              <div className="pdp-meta-item">
                <h4>Role</h4>
                <div className="pdp-chip-group">
                  {featureData.meta.role.map((role, i) => (
                    <span key={i} className="pdp-chip">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pdp-meta-item">
                <h4>Tools</h4>
                <div className="pdp-chip-group">
                  {featureData.meta.tools.map((tool, i) => (
                    <span key={i} className="pdp-chip pdp-chip-alt">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pdp-meta-item">
                <h4>Timeline</h4>
                <p className="pdp-meta-val">{featureData.meta.timeline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Challenge */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">02. The Challenge</h2>

          <div className="pdp-card pdp-challenge-card">
            <h3 className="pdp-card-heading">{featureData.challenge.title}</h3>

            <p className="pdp-card-subtext">{featureData.challenge.subtext}</p>

            <div className="pdp-challenge-grid">
              {featureData.challenge.points.map((point, index) => (
                <div key={index} className="pdp-challenge-item">
                  <span className="pdp-challenge-icon">?</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>

            <div className="pdp-challenge-conclusion">
              <strong>Key Outcome:</strong> {featureData.challenge.conclusion}
            </div>
          </div>
        </section>

        {/* 03. Design Goals */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">03. Design Goals</h2>

          <div className="pdp-goals-grid">
            {featureData.designGoals.map((goal, index) => (
              <div key={index} className="pdp-card pdp-goal-card">
                <div className="pdp-goal-icon">{goal.titleNum}</div>
                <h3>{goal.title}</h3>
                <p>{goal.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04. Target Users */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">04. Target Users</h2>

          <div className="pdp-users-grid">
            {featureData.targetUsers.map((user, index) => (
              <div key={index} className="pdp-card pdp-user-card">
                <div className="pdp-user-tag">{user.role}</div>
                <p>{user.need}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05. User Journey */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">05. User Journey Flow</h2>

          <div className="pdp-card pdp-flow-card">
            <div className="pdp-journey-timeline">
              {featureData.userJourney.map((step, index) => {
                const isLast = index === featureData.userJourney.length - 1;

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
                      <p>{step}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 06. Information Architecture */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">
            06. Module Information Architecture
          </h2>

          <div className="pdp-card">
            <div className="pdp-ia-header">
              <span className="pdp-ia-root-badge">
                {featureData.name} Interface Tree
              </span>
            </div>

            <div className="pdp-ia-grid">
              {featureData.iaNodes.map((node, index) => (
                <div key={index} className="pdp-ia-card">
                  <span className="pdp-ia-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pdp-ia-title">{node}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07. Design Direction */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">07. Design Direction</h2>

          <div className="pdp-design-grid">
            <div className="pdp-card">
              <h3 className="pdp-card-heading">Visual Concept</h3>

              <ul className="pdp-bullet-list">
                {featureData.designDirection.concepts.map((concept, index) => (
                  <li key={index}>{concept}</li>
                ))}
              </ul>
            </div>

            <div className="pdp-card">
              <h3 className="pdp-card-heading">Design System</h3>

              <div className="pdp-ds-swatches">
                <div className="pdp-swatch-card">
                  <div
                    className="pdp-swatch"
                    style={{
                      backgroundColor: featureData.designDirection.primaryColor,
                    }}
                  />
                  <div className="pdp-swatch-info">
                    <span className="pdp-swatch-label">Primary Accent</span>
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
                <strong>Key Components:</strong>
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

        {/* 08. Final Design */}
        <section className="pdp-section pdp-final-section">
          <h2 className="pdp-section-number">08. Final Application Design</h2>

          <div className="pdp-card pdp-cta-card">
            <div className="pdp-cta-content">
              <h3>{featureData.name} Experience</h3>
              <p>
                Designed a community-centered digital platform that makes local
                issues easier to report, projects easier to discover, and
                community participation easier to manage.
              </p>
            </div>

            <div className="pdp-tools-summary">
              <span className="pdp-tools-label">Designed & Developed with</span>
              <span className="pdp-ds-pill">Figma, React & Next.js</span>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}