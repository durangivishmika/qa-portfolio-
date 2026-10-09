"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Thermometer, 
  ShieldAlert, 
  Truck, 
  Store, 
  ClipboardCheck, 
  Activity, 
  Boxes, 
  Radio, 
  BellRing, 
  CheckCircle2, 
  FileSpreadsheet, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import './PolarDetails.css';

// Data for Polar Application Feature
const featureData = {
  id: "polar-cold-chain",
  name: "Polar",
  tagline: "Cold Chain Monitoring & Traceability Platform",
  badge: "IoT & Cold Chain Solutions",
  themeColor: "#2563EB",
  themeSoft: "#dbeafe",
  overview: {
    text1: "Polar is an IoT-powered cold chain monitoring and traceability platform developed by SenzMate. It helps businesses monitor temperature-sensitive products across farms, cold rooms, refrigerated trucks, warehouses, and retail stores with real-time visibility and automated alerts.",
    text2: "I designed the UI/UX for the Polar web application, focusing on real-time monitoring dashboards, alert management, traceability workflows, and data visualization."
  },
  meta: {
    role: ["UI/UX Designer"],
    tools: ["Figma"],
    timeline: "2026"
  },
  challenge: {
    title: "Protecting Perishable Products in Real Time",
    subtext: "Cold chain operations require continuous monitoring to prevent spoilage, maintain compliance, and reduce manual inspections. The challenge was to create an interface where users can:",
    points: [
      "Monitor temperature and humidity 24/7",
      "Receive instant alerts when thresholds are exceeded",
      "Track products from farm to fork",
      "Access audit-ready records and reports",
      "Monitor multiple locations from one dashboard"
    ],
    conclusion: "Designed a real-time monitoring experience that improves visibility, reduces product loss, and supports cold chain compliance."
  },
  designGoals: [
    {
      title: "Enable Real-Time Monitoring",
      titleNum: "01",
      desc: "Provide 24/7 continuous visibility over temperature and environmental conditions across all endpoints."
    },
    {
      title: "Reduce Food & Product Waste",
      titleNum: "02",
      desc: "Trigger proactive alert flows to mitigate spoilage before threshold breaches compromise quality."
    },
    {
      title: "Improve Compliance & Traceability",
      titleNum: "03",
      desc: "Deliver audit-ready record tracking and complete journey logs from farm to fork."
    },
    {
      title: "Simplify Cold Chain Operations",
      titleNum: "04",
      desc: "Consolidate multi-location cold rooms, vehicles, and warehouses into one central dashboard."
    }
  ],
  targetUsers: [
    { role: "Cold Storage Operators", need: "Monitor environmental status across cold rooms and warehouses.", icon: Boxes },
    { role: "Logistics Teams", need: "Track refrigerated trucks, transit conditions, and deliveries in real time.", icon: Truck },
    { role: "Supermarkets & Hotels", need: "Protect perishable food quality and prevent stock degradation.", icon: Store },
    { role: "Quality Managers", need: "Access instant compliance records, historical data, and audit reports.", icon: ClipboardCheck }
  ],
  userJourney: [
    { label: "Sensor Collects Data", icon: Radio },
    { label: "Cloud Receives Real-Time Data", icon: Activity },
    { label: "Dashboard Monitors Conditions", icon: Layers },
    { label: "Alert Triggered", icon: BellRing },
    { label: "User Takes Action", icon: CheckCircle2 },
    { label: "Generate Reports & Traceability", icon: FileSpreadsheet }
  ],
  iaNodes: [
    "Dashboard",
    "Live Monitoring",
    "Cold Rooms",
    "Vehicle Tracking",
    "Alerts",
    "Traceability",
    "Reports",
    "Device Management",
    "Notifications",
    "Settings"
  ],
  designDirection: {
    concepts: [
      "Industrial IoT dashboard",
      "Real-time monitoring experience",
      "Data-driven interface",
      "Clear alert hierarchy",
      "Enterprise-grade usability",
      "Responsive web application"
    ],
    primaryColor: "#2563EB",
    textColor: "#0F172A",
    font: "Poppins",
    components: [
      "Monitoring Dashboard",
      "Temperature Cards",
      "Alert Panels",
      "Device Maps",
      "Traceability Timeline",
      "Reports",
      "Data Tables",
      "Status Badges"
    ]
  }
};

export default function PolarDetails({ onBack }) {
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
      className="pdp-page"
      style={{
        '--pdp-brand-active': featureData.themeColor,
        '--pdp-brand-soft': featureData.themeSoft
      }}
    >
      {/* Background Glows */}
      <div className="pdp-bg-glow pdp-bg-glow-primary" style={{ pointerEvents: 'none' }} />
      <div className="pdp-bg-glow pdp-bg-glow-secondary" style={{ pointerEvents: 'none' }} />

      <div className="pdp-container">
        {/* Navigation Bar */}
        <nav className="pdp-top-nav" style={{ position: 'relative', zIndex: 10 }}>
          <button 
            type="button"
            onClick={handleBackClick} 
            className="pdp-back-btn" 
            aria-label="Back to portfolio grid"
            style={{ cursor: 'pointer', pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <ArrowLeft size={18} strokeWidth={2.2} />
            <span>Back to Portfolio</span>
          </button>
          
          <span className="pdp-badge">{featureData.badge}</span>
        </nav>

        {/* Dynamic Hero Section */}
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
                  {featureData.meta.role.map((r, i) => (
                    <span key={i} className="pdp-chip">{r}</span>
                  ))}
                </div>
              </div>
              <div className="pdp-meta-item">
                <h4>Tools</h4>
                <div className="pdp-chip-group">
                  {featureData.meta.tools.map((t, i) => (
                    <span key={i} className="pdp-chip pdp-chip-alt">{t}</span>
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

        {/* 02. The Challenge */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">02. The Challenge</h2>
          <div className="pdp-card pdp-challenge-card">
            <h3 className="pdp-card-heading">{featureData.challenge.title}</h3>
            <p className="pdp-card-subtext">{featureData.challenge.subtext}</p>
            <div className="pdp-challenge-grid">
              {featureData.challenge.points.map((pt, idx) => (
                <div key={idx} className="pdp-challenge-item">
                  <span className="pdp-challenge-icon">
                    <Thermometer size={18} />
                  </span>
                  <p>{pt}</p>
                </div>
              ))}
            </div>
            <div className="pdp-challenge-conclusion">
              <strong>Key Outcome:</strong> {featureData.challenge.conclusion}
            </div>
          </div>
        </section>

        {/* 03. Business Goals */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">03. Business Goals</h2>
          <div className="pdp-goals-grid">
            {featureData.designGoals.map((goal, idx) => (
              <div key={idx} className="pdp-card pdp-goal-card">
                <div className="pdp-goal-icon">{goal.titleNum || `0${idx + 1}`}</div>
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
            {featureData.targetUsers.map((user, idx) => {
              const UserIcon = user.icon;
              return (
                <div key={idx} className="pdp-card pdp-user-card">
                  <div className="pdp-user-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <UserIcon size={16} />
                    <span>{user.role}</span>
                  </div>
                  <p>{user.need}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 05. User Journey Flow */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">05. User Journey Flow</h2>
          <div className="pdp-card pdp-flow-card">
            <div className="pdp-journey-timeline">
              {featureData.userJourney.map((step, idx) => {
                const isLast = idx === featureData.userJourney.length - 1;
                const StepIcon = step.icon;
                return (
                  <div key={idx} className={`pdp-timeline-step ${isLast ? 'pdp-step-final' : ''}`}>
                    <div className="pdp-step-marker">
                      <StepIcon size={16} />
                    </div>
                    <div className="pdp-step-content">
                      <p>{step.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 06. Application Information Architecture */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">06. Application Information Architecture</h2>
          <div className="pdp-card">
            <div className="pdp-ia-header">
              <span className="pdp-ia-root-badge">{featureData.name} Interface Tree</span>
            </div>
            <div className="pdp-ia-grid">
              {featureData.iaNodes.map((node, idx) => (
                <div key={idx} className="pdp-ia-card">
                  <span className="pdp-ia-num">{String(idx + 1).padStart(2, '0')}</span>
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
                {featureData.designDirection.concepts.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="pdp-card">
              <h3 className="pdp-card-heading">Design System</h3>
              <div className="pdp-ds-swatches">
                <div className="pdp-swatch-card">
                  <div className="pdp-swatch" style={{ backgroundColor: featureData.designDirection.primaryColor }}></div>
                  <div className="pdp-swatch-info">
                    <span className="pdp-swatch-label">Primary Accent</span>
                    <code className="pdp-swatch-hex">{featureData.designDirection.primaryColor}</code>
                  </div>
                </div>
                <div className="pdp-swatch-card">
                  <div className="pdp-swatch" style={{ backgroundColor: featureData.designDirection.textColor }}></div>
                  <div className="pdp-swatch-info">
                    <span className="pdp-swatch-label">Primary Text</span>
                    <code className="pdp-swatch-hex">{featureData.designDirection.textColor}</code>
                  </div>
                </div>
              </div>

              <div className="pdp-ds-detail">
                <strong>Typography:</strong>
                <span className="pdp-ds-pill">{featureData.designDirection.font}</span>
              </div>

              <div className="pdp-ds-detail">
                <strong>Key Components:</strong>
                <div className="pdp-chip-group">
                  {featureData.designDirection.components.map((comp, idx) => (
                    <span key={idx} className="pdp-chip pdp-chip-alt">{comp}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08. Final Outcome */}
        <section className="pdp-section pdp-final-section">
          <h2 className="pdp-section-number">08. Final Outcome</h2>
          <div className="pdp-card pdp-cta-card">
            <div className="pdp-cta-content">
              <h3>Smarter Cold Chain Operations</h3>
              <p>Designed a user-friendly monitoring platform that gives businesses complete visibility, proactive alerts, and end-to-end traceability for temperature-sensitive supply chains.</p>
            </div>
            
            <div className="pdp-tools-summary">
              <span className="pdp-tools-label">Designed with</span>
              <span className="pdp-ds-pill">Figma</span>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}