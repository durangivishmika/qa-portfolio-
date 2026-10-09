"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Layers,
  Target,
  Users,
  Compass,
  Briefcase,
  Wrench,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  LayoutDashboard,
  ExternalLink
} from 'lucide-react';
import './SenzAgroAppCaseStudy.css';

// Data for SenzAgro Application Features
const appFeaturesData = [
  {
    id: "connect",
    name: "SenzAgro Connect",
    tagline: "Agriculture Web Application",
    badge: "AgriTech & Web App",
    themeColor: "#10c45d",
    themeSoft: "#ecfdf5",
    overview: {
      text1: "SenzAgro Connect is a web application designed to bring farmers and agricultural stakeholders into a connected digital experience.",
      text2: "The platform focuses on making agricultural information, farming activities, and relevant services easier to access and manage through a structured web application. I worked on the UI/UX design of the application, focusing on creating intuitive workflows, clear information architecture, and an interface that makes agricultural tasks easier to understand and complete."
    },
    meta: {
      role: ["UI/UX Designer"],
      tools: ["Figma"],
      timeline: "2026"
    },
    challenge: {
      title: "Designing a Simple Digital Experience for Complex Agricultural Workflows",
      subtext: "Agricultural applications can contain large amounts of information, multiple workflows, and different types of users. The challenge was to design a web application where users can:",
      points: [
        "Find relevant agricultural information quickly",
        "Understand important farming activities and updates",
        "Manage agricultural tasks through clear workflows",
        "Navigate different sections without unnecessary complexity",
        "Complete important actions with minimal effort"
      ],
      conclusion: "Designed a structured and user-friendly web application that organizes agricultural information and workflows into a clear digital experience."
    },
    designGoals: [
      {
        title: "Improve User Experience",
        desc: "Create simple and intuitive workflows for users interacting with the platform."
      },
      {
        title: "Centralize Agricultural Information",
        desc: "Bring important agricultural information and activities into one connected application."
      },
      {
        title: "Improve Task Efficiency",
        desc: "Reduce unnecessary steps and make common actions faster to complete."
      },
      {
        title: "Create a Scalable Product Experience",
        desc: "Establish reusable UI patterns and components that can support future SenzAgro Connect features."
      }
    ],
    targetUsers: [
      { role: "Farmers", need: "Users who need to access agricultural information, manage farming activities, and interact with digital farming services." },
      { role: "Field Officers", need: "Users who support farmers and need to access, manage, and update relevant agricultural information." },
      { role: "Agricultural Stakeholders", need: "Users involved in managing agricultural operations, information, and services through the platform." }
    ],
    userJourney: [
      { step: "Sign In", desc: "User securely enters the SenzAgro Connect application." },
      { step: "View Dashboard", desc: "User gets an overview of important information, activities, and updates." },
      { step: "Select a Task", desc: "User navigates to the relevant agricultural workflow or service." },
      { step: "Manage Information", desc: "User views, adds, updates, or manages relevant agricultural information." },
      { step: "Complete Action", desc: "User completes the required workflow with clear confirmation and feedback." },
      { step: "Monitor", desc: "User returns to the application to track updates and ongoing activities." }
    ],
    iaNodes: [
      "Authentication",
      "Dashboard",
      "Farmer / User Information",
      "Agricultural Activities",
      "Crop Information",
      "Farming Tasks",
      "Agricultural Updates",
      "Notifications",
      "Reports / Insights",
      "User Profile",
      "Settings"
    ],
    designDirection: {
      concepts: [
        "Clean agricultural web application",
        "Simple and functional interface",
        "Information-focused layouts",
        "Clear dashboard hierarchy",
        "Consistent navigation",
        "Easy-to-scan data presentation",
        "Responsive application experience"
      ],
      principles: [
        { title: "Task First", desc: "Prioritize the actions users need to complete rather than overwhelming them with information." },
        { title: "Clear Hierarchy", desc: "Organize agricultural data into clear sections so users can quickly understand what is important." },
        { title: "Simple Workflows", desc: "Reduce unnecessary steps and provide clear guidance throughout important tasks." },
        { title: "Consistent Interface", desc: "Use reusable components and interaction patterns across the application." },
        { title: "Accessible Information", desc: "Present information using clear typography, spacing, labels, and visual indicators." }
      ],
      primaryColor: "#10c45d",
      textColor: "#0F172A",
      font: "Poppins",
      components: [
        "Application Sidebar",
        "Top Navigation",
        "Dashboard Cards",
        "Data Tables",
        "Agricultural Information Cards",
        "Crop Cards",
        "Task Components",
        "Status Indicators",
        "Forms",
        "Filters",
        "Search",
        "Notifications",
        "Modal Dialogs",
        "Pagination"
      ]
    },
    dashboardExperience: {
      title: "Turning Agricultural Data Into Actionable Information",
      text1: "The dashboard was designed to give users a clear starting point when they enter SenzAgro Connect. Instead of presenting all available information at once, the interface prioritizes the most relevant information and actions.",
      flow: ["Overview", "Important Updates", "Pending Activities", "Agricultural Information", "Required Actions", "Progress / Monitoring"],
      conclusion: "This allows users to quickly understand what is happening, what requires attention, and what they should do next."
    },
    webAppUx: {
      title: "Designing for Real Workflows",
      subtext: "Unlike a marketing website, SenzAgro Connect required the interface to support repeated daily interactions. The design therefore focused on:",
      points: [
        { title: "Efficiency", desc: "Make frequent actions quick to complete." },
        { title: "Feedback", desc: "Clearly communicate successful actions, errors, and system states." },
        { title: "Consistency", desc: "Keep navigation and interactions predictable across the application." },
        { title: "Data Clarity", desc: "Present agricultural information in a format that is easy to scan and understand." },
        { title: "Scalability", desc: "Create reusable patterns that can accommodate future application features." }
      ]
    }
  },
  {
    id: "calendar",
    name: "Crop Calendar",
    tagline: "Agricultural Schedule & Lifecycle Planning Tool",
    badge: "AgriTech & Planning",
    themeColor: "#10c45d",
    themeSoft: "#ecfdf5",
    overview: {
      text1: "Crop Calendar is a dedicated lifecycle planning tool that allows farm operators to schedule seeding, irrigation, fertigation, and harvesting tasks systematically.",
      text2: "I designed the interactive calendar and timeline views to optimize visual task hierarchy, reduce scheduling errors, and simplify multi-crop field management."
    },
    meta: {
      role: ["UI/UX Designer"],
      tools: ["Figma", "FigJam"],
      timeline: "2026"
    },
    challenge: {
      title: "Visualizing Overlapping Crop Lifecycles",
      subtext: "Managing several crops simultaneously creates complex, overlapping operational timelines. Key challenges included:",
      points: [
        "Structuring multi-phase crop cycles across variable seasonal dates",
        "Highlighting critical task dependencies (e.g., watering before harvesting)",
        "Providing quick status updates for completed field activities",
        "Reducing cognitive overload on dense calendar displays"
      ],
      conclusion: "Built an intuitive timeline-driven UI system that brings clarity and predictability to crop management routines."
    },
    designGoals: [
      {
        title: "Organize Operational Tasks",
        desc: "Categorize planting, fertilizing, and harvesting routines with clear color-coding."
      },
      {
        title: "Enhance Task Visibility",
        desc: "Surface upcoming and overdue activities prominently on the dashboard."
      },
      {
        title: "Scalable Calendar Framework",
        desc: "Build a flexible layout capable of handling single fields or enterprise farms."
      }
    ],
    targetUsers: [
      { role: "Field Operators", need: "Need a daily operational checklist for field execution." },
      { role: "Farm Managers", need: "Need scheduling tools to coordinate labor, fertilizer, and equipment." },
      { role: "Supply Chain Coordinators", need: "Need accurate harvest estimates to arrange logistics." }
    ],
    userJourney: [
      { step: "Navigate", desc: "User navigates to Crop Calendar section." },
      { step: "Select Field", desc: "Selects target field or crop variety." },
      { step: "Review Stages", desc: "Reviews active crop lifecycle stages." },
      { step: "Schedule", desc: "Schedules upcoming field operations." },
      { step: "Track Outcomes", desc: "Tracks completed tasks and yield projections." }
    ],
    iaNodes: [
      "Calendar Main View",
      "Crop Lifecycle Timeline",
      "Daily Operational Checklist",
      "Fertigation & Irrigation Scheduler",
      "Task Assignment Panel",
      "Harvest History Log"
    ],
    designDirection: {
      concepts: [
        "Chronological precision",
        "Clear task distinction",
        "Structured scheduling grid",
        "Intuitive interaction patterns"
      ],
      principles: [],
      primaryColor: "#10c45d",
      textColor: "#0F172A",
      font: "Poppins",
      components: ["Timeline Gantt Bars", "Task Priority Chips", "Crop Stage Cards", "Filter & Date Selectors"]
    }
  }
];

export default function SenzAgroAppCaseStudy({ onBack }) {
  const router = useRouter();
  const [activeTabId, setActiveTabId] = useState("connect");

  const currentFeature = appFeaturesData.find((item) => item.id === activeTabId) || appFeaturesData[0];

  const handleBackClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof onBack === 'function') {
      onBack();
      return;
    }

    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <article 
      className="szag-cs-wrapper"
      style={{
        '--szag-brand-primary': currentFeature.themeColor,
        '--szag-brand-soft': currentFeature.themeSoft
      }}
    >
      {/* Background Glow Effects */}
      <div className="szag-cs-glow szag-cs-glow--primary" style={{ pointerEvents: 'none' }} />
      <div className="szag-cs-glow szag-cs-glow--secondary" style={{ pointerEvents: 'none' }} />

      <div className="szag-cs-container">
        {/* Navigation Bar */}
        <nav className="szag-cs-nav" style={{ position: 'relative', zIndex: 10 }}>
          <button 
            type="button"
            onClick={handleBackClick} 
            className="szag-cs-nav__back-btn" 
            aria-label="Back to portfolio grid"
            style={{ cursor: 'pointer', pointerEvents: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <ArrowLeft size={18} strokeWidth={2.2} />
            <span>Back to Portfolio</span>
          </button>
          
          <span className="szag-cs-badge">{currentFeature.badge}</span>
        </nav>

        {/* Feature Selector Tabs */}
        <div className="szag-cs-tab-switcher">
          <div className="szag-cs-tab-switcher__header">
            <span className="szag-cs-tab-switcher__label">Select Application Module</span>
            <span className="szag-cs-tab-switcher__count">{appFeaturesData.length} Key Modules Designed</span>
          </div>
          <div className="szag-cs-tab-switcher__grid" role="tablist">
            {appFeaturesData.map((feature) => {
              const isActive = activeTabId === feature.id;
              return (
                <button
                  key={feature.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`szag-cs-tab-switcher__btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveTabId(feature.id)}
                >
                  <span className="szag-cs-tab-switcher__indicator"></span>
                  <span className="szag-cs-tab-switcher__text">{feature.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Hero Section */}
        <header className="szag-cs-hero">
          <span className="szag-cs-hero__tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} />
            Case Study View
          </span>
          <h1 className="szag-cs-hero__title">{currentFeature.name}</h1>
          <p className="szag-cs-hero__subtitle">{currentFeature.tagline}</p>
        </header>

        {/* 01. Project Introduction */}
        <section className="szag-cs-section">
          <h2 className="szag-cs-section__index">01. Project Introduction</h2>
          <div className="szag-cs-card szag-cs-intro-card">
            <div className="szag-cs-intro-card__overview">
              <h3>Overview</h3>
              <p>{currentFeature.overview.text1}</p>
              <p>{currentFeature.overview.text2}</p>
            </div>

            <div className="szag-cs-intro-card__meta-grid">
              <div className="szag-cs-intro-card__meta-item">
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Briefcase size={16} /> Role
                </h4>
                <div className="szag-cs-chip-group">
                  {currentFeature.meta.role.map((r, i) => (
                    <span key={i} className="szag-cs-chip">{r}</span>
                  ))}
                </div>
              </div>
              <div className="szag-cs-intro-card__meta-item">
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Wrench size={16} /> Tools
                </h4>
                <div className="szag-cs-chip-group">
                  {currentFeature.meta.tools.map((t, i) => (
                    <span key={i} className="szag-cs-chip szag-cs-chip--alt">{t}</span>
                  ))}
                </div>
              </div>
              <div className="szag-cs-intro-card__meta-item">
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} /> Timeline
                </h4>
                <p className="szag-cs-intro-card__meta-value">{currentFeature.meta.timeline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 02. The Challenge */}
        <section className="szag-cs-section">
          <h2 className="szag-cs-section__index">02. The Challenge</h2>
          <div className="szag-cs-card">
            <h3 className="szag-cs-card__heading">{currentFeature.challenge.title}</h3>
            <p className="szag-cs-card__subtext">{currentFeature.challenge.subtext}</p>
            <div className="szag-cs-challenge-grid">
              {currentFeature.challenge.points.map((pt, idx) => (
                <div key={idx} className="szag-cs-challenge-grid__item">
                  <span className="szag-cs-challenge-grid__icon">0{idx + 1}</span>
                  <p>{pt}</p>
                </div>
              ))}
            </div>
            <div className="szag-cs-challenge-outcome" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--szag-brand-primary)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Key Outcome:</strong> {currentFeature.challenge.conclusion}
              </div>
            </div>
          </div>
        </section>

        {/* 03. Business Goals / Design Goals */}
        <section className="szag-cs-section">
          <h2 className="szag-cs-section__index">03. Business Goals</h2>
          <div className="szag-cs-goals-grid">
            {currentFeature.designGoals.map((goal, idx) => (
              <div key={idx} className="szag-cs-card szag-cs-goals-grid__card">
                <div className="szag-cs-goals-grid__icon">
                  <Target size={20} />
                </div>
                <h3>{goal.title}</h3>
                <p>{goal.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04. Target Users */}
        <section className="szag-cs-section">
          <h2 className="szag-cs-section__index">04. Target Users</h2>
          <div className="szag-cs-users-grid">
            {currentFeature.targetUsers.map((user, idx) => (
              <div key={idx} className="szag-cs-card szag-cs-users-grid__card">
                <div className="szag-cs-users-grid__role-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Users size={14} />
                  {user.role}
                </div>
                <p>{user.need}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05. User Journey Flow */}
        <section className="szag-cs-section">
          <h2 className="szag-cs-section__index">05. User Journey Flow</h2>
          <div className="szag-cs-card">
            <div className="szag-cs-journey">
              {currentFeature.userJourney.map((item, idx) => {
                const isLast = idx === currentFeature.userJourney.length - 1;
                return (
                  <div key={idx} className={`szag-cs-journey__step ${isLast ? 'szag-cs-journey__step--final' : ''}`}>
                    <div className="szag-cs-journey__marker">
                      <span>{idx + 1}</span>
                    </div>
                    <div className="szag-cs-journey__content">
                      <strong style={{ display: 'block', marginBottom: '4px' }}>{item.step}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 06. Application Information Architecture */}
        <section className="szag-cs-section">
          <h2 className="szag-cs-section__index">06. Application Information Architecture</h2>
          <div className="szag-cs-card">
            <div className="szag-cs-ia__header">
              <span className="szag-cs-ia__root-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Layers size={16} />
                {currentFeature.name} Information Architecture
              </span>
            </div>
            <div className="szag-cs-ia__grid">
              {currentFeature.iaNodes.map((node, idx) => (
                <div key={idx} className="szag-cs-ia__card">
                  <span className="szag-cs-ia__number">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="szag-cs-ia__title">{node}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07. Design Direction */}
        <section className="szag-cs-section">
          <h2 className="szag-cs-section__index">07. Design Direction</h2>
          <div className="szag-cs-design-grid">
            <div className="szag-cs-card">
              <h3 className="szag-cs-card__heading" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={18} /> Visual Concept
              </h3>
              <ul className="szag-cs-bullet-list">
                {currentFeature.designDirection.concepts.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              {currentFeature.designDirection.principles && currentFeature.designDirection.principles.length > 0 && (
                <div style={{ marginTop: '24px' }}>
                  <h3 className="szag-cs-card__heading">Design Principles</h3>
                  <div className="szag-cs-principles-list">
                    {currentFeature.designDirection.principles.map((p, i) => (
                      <div key={i} style={{ marginBottom: '12px' }}>
                        <strong style={{ display: 'block', color: 'var(--szag-brand-primary)' }}>{p.title}</strong>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 08. Design System embedded within Design Direction */}
            <div className="szag-cs-card">
              <h3 className="szag-cs-card__heading">Design System</h3>
              <div className="szag-cs-design-system__swatches">
                <div className="szag-cs-design-system__swatch-card">
                  <div className="szag-cs-design-system__swatch" style={{ backgroundColor: currentFeature.designDirection.primaryColor }}></div>
                  <div className="szag-cs-design-system__swatch-info">
                    <span className="szag-cs-design-system__swatch-label">Primary Accent</span>
                    <code className="szag-cs-design-system__swatch-hex">{currentFeature.designDirection.primaryColor}</code>
                  </div>
                </div>
                <div className="szag-cs-design-system__swatch-card">
                  <div className="szag-cs-design-system__swatch" style={{ backgroundColor: currentFeature.designDirection.textColor }}></div>
                  <div className="szag-cs-design-system__swatch-info">
                    <span className="szag-cs-design-system__swatch-label">Primary Text</span>
                    <code className="szag-cs-design-system__swatch-hex">{currentFeature.designDirection.textColor}</code>
                  </div>
                </div>
              </div>

              <div className="szag-cs-design-system__detail">
                <strong>Typography:</strong>
                <span className="szag-cs-pill">{currentFeature.designDirection.font}</span>
              </div>

              <div className="szag-cs-design-system__detail">
                <strong>Key Components:</strong>
                <div className="szag-cs-chip-group">
                  {currentFeature.designDirection.components.map((comp, idx) => (
                    <span key={idx} className="szag-cs-chip szag-cs-chip--alt">{comp}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09. Dashboard Experience (SenzAgro Connect Specific) */}
        {currentFeature.dashboardExperience && (
          <section className="szag-cs-section">
            <h2 className="szag-cs-section__index">09. Dashboard Experience</h2>
            <div className="szag-cs-card">
              <h3 className="szag-cs-card__heading" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LayoutDashboard size={20} />
                {currentFeature.dashboardExperience.title}
              </h3>
              <p className="szag-cs-card__subtext">{currentFeature.dashboardExperience.text1}</p>
              
              <div className="szag-cs-dashboard-flow" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '20px 0', alignItems: 'center' }}>
                {currentFeature.dashboardExperience.flow.map((item, i) => (
                  <React.Fragment key={i}>
                    <span className="szag-cs-chip" style={{ backgroundColor: 'var(--szag-brand-soft)', color: 'var(--szag-brand-primary)', fontWeight: '600' }}>
                      {item}
                    </span>
                    {i < currentFeature.dashboardExperience.flow.length - 1 && (
                      <ChevronRight size={16} style={{ color: '#94a3b8' }} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="szag-cs-card__subtext">{currentFeature.dashboardExperience.conclusion}</p>
            </div>
          </section>
        )}

        {/* 10. Web Application UX */}
        {currentFeature.webAppUx && (
          <section className="szag-cs-section">
            <h2 className="szag-cs-section__index">10. Web Application UX</h2>
            <div className="szag-cs-card">
              <h3 className="szag-cs-card__heading">{currentFeature.webAppUx.title}</h3>
              <p className="szag-cs-card__subtext">{currentFeature.webAppUx.subtext}</p>
              
              <div className="szag-cs-goals-grid" style={{ marginTop: '16px' }}>
                {currentFeature.webAppUx.points.map((pt, idx) => (
                  <div key={idx} className="szag-cs-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ color: 'var(--szag-brand-primary)', marginBottom: '6px' }}>{pt.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569' }}>{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 11. Final Web Application Design */}
        <section className="szag-cs-section szag-cs-section--final">
  <h2 className="szag-cs-section__index">11. Final Outcome</h2>

  <div className="szag-cs-card szag-cs-cta-card">
    <div className="szag-cs-cta-card__content">
      <h3>A Simpler Agricultural Experience</h3>

      <p>
        Designed a clear and user-friendly web application that simplifies
        agricultural workflows, improves navigation, and makes important
        information easier to manage.
      </p>
    </div>

    <div className="szag-cs-cta-card__tools">
      <span className="szag-cs-cta-card__tools-label">Designed with</span>
      <span className="szag-cs-pill">Figma</span>
    </div>
  </div>
</section>
      </div>
    </article>
  );
}