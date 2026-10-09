"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Cpu, 
  Wrench, 
  ShieldAlert, 
  Activity, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Target, 
  Users, 
  Workflow, 
  Network,
  Palette, 
  Zap, 
  AlertTriangle 
} from 'lucide-react';
import './DevicePulseDetails.css';

const featureData = {
  id: "devicepulse-ai",
  name: "DevicePulse.AI",
  tagline: "AI-Powered Predictive Maintenance Platform",
  badge: "AI & Industrial IoT",
  themeColor: "#2563eb",
  themeSoft: "#dbeafe",
  overview: {
    text1: "DevicePulse.AI is an AI-powered predictive maintenance platform designed to help businesses monitor connected devices, identify potential failures, and take action before equipment problems impact operations.",
    text2: "I worked on the UI/UX design of the DevicePulse.AI platform, focusing on making complex device data, alerts, AI insights, and maintenance workflows easy to understand and act on."
  },
  meta: {
    role: ["UI/UX Designer"],
    tools: ["Figma"],
    timeline: "2026"
  },
  challenge: {
    title: "Turning Device Data Into Actionable Insights",
    subtext: "Industrial systems generate large amounts of device and sensor data. Without a clear interface, it can be difficult for teams to identify what requires attention and respond before a failure occurs. The challenge was to create an experience where users can:",
    points: [
      "Monitor device health in real time",
      "Identify potential failures before they happen",
      "Understand alerts and their business impact",
      "Use AI insights to troubleshoot problems",
      "Take action quickly when a device requires attention"
    ],
    conclusion: "Designed a focused predictive maintenance experience that turns complex device data into clear alerts, AI insights, and actionable maintenance workflows."
  },
  businessGoals: [
    {
      titleNum: "01",
      title: "Reduce Unexpected Failures",
      desc: "Help teams identify potential device problems before they become critical failures."
    },
    {
      titleNum: "02",
      title: "Improve Response Time",
      desc: "Make important alerts and recommended actions immediately visible."
    },
    {
      titleNum: "03",
      title: "Simplify Device Monitoring",
      desc: "Present complex device information through clear dashboards and visual indicators."
    },
    {
      titleNum: "04",
      title: "Support Smarter Decisions",
      desc: "Use AI-generated insights to help users understand problems and determine the next action."
    }
  ],
  targetUsers: [
    { role: "Maintenance Teams", need: "Monitor equipment health and respond to potential failures." },
    { role: "Operations Teams", need: "Track device performance and understand operational risks." },
    { role: "Technical Teams", need: "Investigate device issues and use AI-assisted troubleshooting." },
    { role: "Business Managers", need: "Understand equipment health, risks, and potential business impact." }
  ],
  userJourney: [
    { step: "1", label: "Monitor", desc: "User views the overall health of connected devices." },
    { step: "2", label: "Detect", desc: "DevicePulse identifies abnormal behavior or potential failures." },
    { step: "3", label: "Alert", desc: "The system highlights the issue based on its severity and impact." },
    { step: "4", label: "Investigate", desc: "User explores device data, history, and AI-generated insights." },
    { step: "5", label: "Act", desc: "User follows recommended troubleshooting or maintenance actions." },
    { step: "6", label: "Resolve", desc: "The issue is resolved and the device returns to a healthy state." }
  ],
  iaNodes: [
    "01 · Dashboard",
    "02 · Device Monitoring",
    "03 · Device Details",
    "04 · Alerts & Incidents",
    "05 · AI Insights",
    "06 · Predictive Maintenance",
    "07 · Troubleshooting",
    "08 · Device History",
    "09 · Notifications",
    "10 · Reports & Analytics",
    "11 · Settings"
  ],
  designDirection: {
    visualConcepts: [
      "Modern industrial technology interface",
      "Data-focused dashboard",
      "Risk-first information hierarchy",
      "Clear status visualization",
      "AI-assisted workflows",
      "Action-oriented interface",
      "Professional enterprise experience"
    ],
    designPrinciples: [
      { name: "Risk First", desc: "Prioritize issues based on severity and potential business impact." },
      { name: "Actionable Information", desc: "Show users not only what happened, but what they can do next." },
      { name: "Progressive Disclosure", desc: "Keep the main dashboard simple while allowing users to explore deeper device information when needed." },
      { name: "AI With Context", desc: "Present AI insights alongside relevant device data so users can understand why a recommendation was made." },
      { name: "Fast Response", desc: "Make critical alerts and actions easy to identify and access." }
    ],
    primaryColor: "#2563eb",
    textColor: "#0F172A",
    font: "Poppins",
    components: [
      "Navigation Sidebar",
      "Top Navigation",
      "Device Health Cards",
      "Status Indicators",
      "Alert Cards",
      "Risk Levels",
      "Device Charts",
      "AI Insight Cards",
      "Troubleshooting Panels",
      "Activity Timeline",
      "Data Tables",
      "Filters",
      "Notifications"
    ]
  },
  predictiveWorkflow: [
    "Device Data",
    "AI Analysis",
    "Failure Prediction",
    "Risk Alert",
    "AI Recommendation",
    "Maintenance Action"
  ],
  aiTroubleshooting: [
    "Device Status",
    "Alert History",
    "Sensor Data",
    "AI Analysis",
    "Possible Cause",
    "Recommended Action"
  ]
};

export default function DevicePulseAppCaseStudy({ onBack }) {
  const router = useRouter();

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
      className="dpcase-page"
      style={{
        '--dpcase-brand-active': featureData.themeColor,
        '--dpcase-brand-soft': featureData.themeSoft
      }}
    >
      {/* Background Ambient Spheres */}
      <div className="dpcase-bg-glow dpcase-bg-glow-primary" aria-hidden="true" />
      <div className="dpcase-bg-glow dpcase-bg-glow-secondary" aria-hidden="true" />

      <div className="dpcase-container">
        {/* Navigation Bar */}
        <nav className="dpcase-top-nav">
          <button 
            type="button"
            onClick={handleBackClick} 
            className="dpcase-back-btn" 
            aria-label="Back to portfolio grid"
          >
            <ArrowLeft className="dpcase-icon-sm" />
            <span>Back to Portfolio</span>
          </button>
          
          <span className="dpcase-badge">
            <Cpu className="dpcase-icon-xs" />
            {featureData.badge}
          </span>
        </nav>

        {/* Hero Header */}
        <header className="dpcase-hero">
          <span className="dpcase-section-tag">
            <span className="dpcase-breathing-dot" />
            Case Study View
          </span>
          <h1 className="dpcase-hero-title">{featureData.name}</h1>
          <p className="dpcase-hero-subtitle">{featureData.tagline}</p>
        </header>

        {/* 01. Project Introduction */}
        <section className="dpcase-section">
          <h2 className="dpcase-section-number">01. Project Introduction</h2>
          <div className="dpcase-card dpcase-intro-card">
            <div className="dpcase-intro-overview">
              <h3>Overview</h3>
              <p>{featureData.overview.text1}</p>
              <p>{featureData.overview.text2}</p>
            </div>

            <div className="dpcase-meta-grid">
              <div className="dpcase-meta-item">
                <h4>Role</h4>
                <div className="dpcase-chip-group">
                  {featureData.meta.role.map((r, i) => (
                    <span key={i} className="dpcase-chip">{r}</span>
                  ))}
                </div>
              </div>
              <div className="dpcase-meta-item">
                <h4>Tools</h4>
                <div className="dpcase-chip-group">
                  {featureData.meta.tools.map((t, i) => (
                    <span key={i} className="dpcase-chip dpcase-chip-alt">{t}</span>
                  ))}
                </div>
              </div>
              <div className="dpcase-meta-item">
                <h4>Timeline</h4>
                <p className="dpcase-meta-val">{featureData.meta.timeline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 02. The Challenge */}
        <section className="dpcase-section">
          <h2 className="dpcase-section-number">02. The Challenge</h2>
          <div className="dpcase-card dpcase-challenge-card">
            <h3 className="dpcase-card-heading">{featureData.challenge.title}</h3>
            <p className="dpcase-card-subtext">{featureData.challenge.subtext}</p>
            <div className="dpcase-challenge-grid">
              {featureData.challenge.points.map((pt, idx) => (
                <div key={idx} className="dpcase-challenge-item">
                  <span className="dpcase-challenge-icon">0{idx + 1}</span>
                  <p>{pt}</p>
                </div>
              ))}
            </div>
            <div className="dpcase-challenge-conclusion">
              <strong>Key Outcome:</strong> {featureData.challenge.conclusion}
            </div>
          </div>
        </section>

        {/* 03. Business Goals */}
        <section className="dpcase-section">
          <h2 className="dpcase-section-number">03. Business Goals</h2>
          <div className="dpcase-goals-grid">
            {featureData.businessGoals.map((goal, idx) => (
              <div key={idx} className="dpcase-card dpcase-goal-card">
                <div className="dpcase-goal-icon">{goal.titleNum}</div>
                <h3>{goal.title}</h3>
                <p>{goal.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04. Target Users */}
        <section className="dpcase-section">
          <h2 className="dpcase-section-number">04. Target Users</h2>
          <div className="dpcase-users-grid">
            {featureData.targetUsers.map((user, idx) => (
              <div key={idx} className="dpcase-card dpcase-user-card">
                <div className="dpcase-user-tag">
                  <Users className="dpcase-icon-xs" />
                  {user.role}
                </div>
                <p>{user.need}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05. User Journey Flow */}
        <section className="dpcase-section">
          <h2 className="dpcase-section-number">05. User Journey Flow</h2>
          <div className="dpcase-card dpcase-flow-card">
            <div className="dpcase-journey-timeline">
              {featureData.userJourney.map((item, idx) => {
                const isLast = idx === featureData.userJourney.length - 1;
                return (
                  <div key={idx} className={`dpcase-timeline-step ${isLast ? 'dpcase-step-final' : ''}`}>
                    <div className="dpcase-step-marker">
                      <span>{item.step}</span>
                    </div>
                    <div className="dpcase-step-content">
                      <h4>{item.label}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 06. Information Architecture */}
        <section className="dpcase-section">
          <h2 className="dpcase-section-number">06. Application Information Architecture</h2>
          <div className="dpcase-card">
            <div className="dpcase-ia-header">
              <span className="dpcase-ia-root-badge">
                <Network className="dpcase-icon-xs" />
                {featureData.name}
              </span>
            </div>
            <div className="dpcase-ia-grid">
              {featureData.iaNodes.map((node, idx) => (
                <div key={idx} className="dpcase-ia-card">
                  <span className="dpcase-ia-title">{node}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07. Design Direction */}
        <section className="dpcase-section">
          <h2 className="dpcase-section-number">07. Design Direction</h2>
          <div className="dpcase-design-grid">
            <div className="dpcase-card">
              <h3 className="dpcase-card-heading">Visual Concept</h3>
              <ul className="dpcase-bullet-list">
                {featureData.designDirection.visualConcepts.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <h3 className="dpcase-card-heading" style={{ marginTop: '1.5rem' }}>Design Principles</h3>
              <ul className="dpcase-principles-list">
                {featureData.designDirection.designPrinciples.map((p, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem' }}>
                    <strong>{p.name}:</strong> {p.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="dpcase-card">
              <h3 className="dpcase-card-heading">Design System</h3>
              <div className="dpcase-ds-swatches">
                <div className="dpcase-swatch-card">
                  <div className="dpcase-swatch" style={{ backgroundColor: featureData.designDirection.primaryColor }} />
                  <div className="dpcase-swatch-info">
                    <span className="dpcase-swatch-label">Primary Accent</span>
                    <code className="dpcase-swatch-hex">{featureData.designDirection.primaryColor}</code>
                  </div>
                </div>
                <div className="dpcase-swatch-card">
                  <div className="dpcase-swatch" style={{ backgroundColor: featureData.designDirection.textColor }} />
                  <div className="dpcase-swatch-info">
                    <span className="dpcase-swatch-label">Primary Text</span>
                    <code className="dpcase-swatch-hex">{featureData.designDirection.textColor}</code>
                  </div>
                </div>
              </div>

              <div className="dpcase-ds-detail">
                <strong>Typography:</strong>
                <span className="dpcase-ds-pill">{featureData.designDirection.font}</span>
              </div>

              <div className="dpcase-ds-detail">
                <strong>Key Components:</strong>
                <div className="dpcase-chip-group">
                  {featureData.designDirection.components.map((comp, idx) => (
                    <span key={idx} className="dpcase-chip dpcase-chip-alt">{comp}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09. Predictive Maintenance Experience */}
        <section className="dpcase-section">
          <h2 className="dpcase-section-number">09. Predictive Maintenance Experience</h2>
          <div className="dpcase-card">
            <h3 className="dpcase-card-heading">From Device Signals to Preventive Action</h3>
            <p className="dpcase-card-subtext">The platform was designed around a simple operational flow:</p>
            <div className="dpcase-workflow-chain">
              {featureData.predictiveWorkflow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="dpcase-workflow-node">{step}</div>
                  {idx < featureData.predictiveWorkflow.length - 1 && (
                    <span className="dpcase-workflow-arrow">↓</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="dpcase-card-footer-text">
              This allows users to move from detecting a potential problem to understanding and resolving it within the same workflow.
            </p>
          </div>
        </section>

        {/* 10. AI-Assisted Troubleshooting */}
        <section className="dpcase-section">
          <h2 className="dpcase-section-number">10. AI-Assisted Troubleshooting</h2>
          <div className="dpcase-card">
            <h3 className="dpcase-card-heading">Helping Teams Understand What Went Wrong</h3>
            <p className="dpcase-card-subtext">
              DevicePulse.AI uses AI to support users when they need to investigate a device issue. Instead of requiring users to manually interpret large amounts of technical information, the experience brings together:
            </p>
            <div className="dpcase-chip-group" style={{ margin: '1rem 0' }}>
              {featureData.aiTroubleshooting.map((item, idx) => (
                <span key={idx} className="dpcase-chip">{item}</span>
              ))}
            </div>
            <p className="dpcase-card-footer-text">
              The goal is to help technical and operational teams reach the right action faster while keeping the relevant context visible.
            </p>
          </div>
        </section>

        {/* 11. Final Outcome */}
        <section className="dpcase-section dpcase-final-section">
          <h2 className="dpcase-section-number">11. Final Outcome</h2>
          <div className="dpcase-card dpcase-cta-card">
            <div className="dpcase-cta-content">
              <h3>Turning Predictive Intelligence Into Action</h3>
              <p>Designed a focused application experience that helps teams monitor device health, understand risks, and respond to potential failures before they impact operations.</p>
            </div>
            
            <div className="dpcase-tools-summary">
              <span className="dpcase-tools-label">Designed with</span>
              <span className="dpcase-ds-pill">Figma</span>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}