import React, { useEffect, useState } from 'react';
import './ProjectDetailsPage.css';

// Data for 4 Website Case Studies
const websitesData = [
  {
    id: "devicepulse",
    name: "DevicePulse.AI",
    tagline: "IoT Device Monitoring Platform Website",
    badge: "IoT & Mobile",
    liveUrl: "https://devicepulse.ai",
    themeColor: "#2A7CED",
    themeSoft: "#e0e7ff",
    overview: {
      text1: "DevicePulse.AI is an AI-powered IoT monitoring platform that helps businesses monitor connected devices, identify failures early, and reduce operational downtime.",
      text2: "I designed and developed the complete marketing website experience, transforming a complex IoT solution into a clear, enterprise-focused digital experience that improves product understanding and drives demo conversions."
    },
    meta: {
      role: ["UI/UX Designer", "Frontend Developer"],
      tools: ["Figma", "FigJam", "Next.js", "React", "CSS"],
      timeline: "2026"
    },
    challenge: {
      title: "Communicating Complex IoT Solutions Clearly",
      subtext: "IoT monitoring solutions can be difficult for users to understand. The website needed to answer:",
      points: [
        "What is DevicePulse.AI?",
        "How does device monitoring work?",
        "What business problems does it solve?",
        "Why should companies choose this solution?"
      ],
      conclusion: "Created a user-friendly website experience that simplifies technical information and communicates product value effectively."
    },
    businessGoals: [
      {
        title: "Improve Product Understanding",
        desc: "Create a clear product story that helps visitors understand DevicePulse.AI benefits quickly."
      },
      {
        title: "Establish Enterprise Trust",
        desc: "Show credibility through partnerships, security information, use cases, and platform capabilities."
      },
      {
        title: "Increase Lead Generation",
        desc: "Guide users toward booking demos and contacting the sales team."
      }
    ],
    targetUsers: [
      { role: "IT Managers", need: "Need visibility into device health and faster issue resolution." },
      { role: "Operations Teams", need: "Need real-time monitoring and reduced downtime." },
      { role: "Business Leaders", need: "Need better operational efficiency and cost reduction." }
    ],
    userJourney: [
      "Visitor lands on website",
      "Understands device monitoring challenges",
      "Learns DevicePulse.AI solution",
      "Explores features and capabilities",
      "Builds trust through partners and use cases",
      "Requests a demo"
    ],
    iaNodes: [
      "Hero Section",
      "Problem & Business Impact",
      "Solution Overview",
      "How DevicePulse Works",
      "Core Features",
      "Industry Use Cases",
      "AI Assistant Integration",
      "Partnership Section",
      "Blog / Knowledge Hub",
      "FAQ Section",
      "Contact / Demo CTA"
    ],
    designDirection: {
      concepts: [
        "Modern SaaS experience",
        "Enterprise technology feeling",
        "Clear product storytelling",
        "Trust and reliability"
      ],
      primaryColor: "#2A7CED",
      textColor: "#0F172A",
      font: "Poppins",
      components: ["Navigation Header", "Hero Section", "Feature Cards", "Product Screens", "CTA Sections", "FAQ Accordion"]
    }
  },
  {
    id: "tripplanner",
    name: "TripPlanner",
    tagline: "AI-Powered Travel Planning Website",
    badge: "Travel & Leisure",
    liveUrl: "https://srilankatripplanner.ai/",
    themeColor: "#52d17f",
    themeSoft: "#e6f7ed",
    overview: {
      text1: "TripPlanner is an AI-powered travel planning platform designed to help travelers discover Sri Lanka, build personalized itineraries, explore travel experiences, and connect with trusted local travel experts.",
      text2: "I designed and developed the website experience with a focus on making travel planning simple, visual, and personalized — combining AI-powered planning with human expertise."
    },
    meta: {
      role: ["UI/UX Designer", "Frontend Developer"],
      tools: ["Figma", "Next.js", "React", "TypeScript", "CSS"],
      timeline: "2026"
    },
    challenge: {
      title: "Making Travel Planning Simpler and More Personalized",
      subtext: "Travelers often need to search across multiple websites to discover destinations, compare experiences, plan routes, and organize their trips. The challenge was to create a single experience where users can:",
      points: [
        "Discover Sri Lankan destinations and experiences easily",
        "Get personalized travel recommendations",
        "Build a trip based on their interests, budget, and travel preferences",
        "Explore tour packages and compare travel options",
        "Connect with local travel experts when they need help"
      ],
      conclusion: "Designed and developed a travel experience that combines AI-powered trip planning, destination discovery, personalized recommendations, and local travel expertise in one platform."
    },
    businessGoals: [
      {
        title: "Make AI the Core Experience",
        desc: "Position AI as the starting point for creating a personalized Sri Lanka trip."
      },
      {
        title: "Increase Trip Planning Engagement",
        desc: "Encourage users to move from discovering destinations to creating an actual travel plan."
      },
      {
        title: "Build Traveler Trust",
        desc: "Create a professional experience supported by verified travel partners, reviews, and local experts."
      },
      {
        title: "Connect Travelers With Partners",
        desc: "Create a smooth transition from AI-generated planning to expert consultation and booking."
      }
    ],
    targetUsers: [
      { role: "Travelers", need: "International and local travelers looking for inspiration, destinations, and personalized Sri Lanka itineraries." },
      { role: "Experience Seekers", need: "Travelers looking for specific experiences such as wildlife, beaches, culture, hiking, and adventure." },
      { role: "Travel Planners", need: "Users who want to organize destinations, activities, accommodation, and transportation into one trip." },
      { role: "Travel Partners", need: "Local travel companies and experts looking for qualified travelers and booking opportunities." }
    ],
    userJourney: [
      "Discover: User enters TripPlanner and explores Sri Lanka.",
      "Share Preferences: User provides travel dates, interests, budget, and preferred experiences.",
      "AI Planning: AI generates a personalized travel itinerary based on the user's requirements.",
      "Explore & Refine: User reviews destinations, activities, packages, and recommendations.",
      "Connect With an Expert: User can connect with a local travel expert to refine the itinerary.",
      "Book: The finalized trip can move toward quotation and booking."
    ],
    iaNodes: [
      "Hero / AI Trip Planning",
      "Trusted Partners",
      "How Trip Planning Works",
      "Featured Destinations",
      "Travel Experiences",
      "Tour Packages",
      "AI-Powered Recommendations",
      "Seasonal Travel Guide",
      "Traveler Reviews",
      "Travel Partner Section",
      "FAQ",
      "Newsletter",
      "Contact"
    ],
    designDirection: {
      concepts: [
        "Modern travel experience",
        "AI-first planning journey",
        "Image-focused destination storytelling",
        "Clean information hierarchy",
        "Strong visual exploration",
        "Simple and intuitive navigation",
        "Trust-focused interface"
      ],
      primaryColor: "#10c45d",
      textColor: "#8a9099",
      font: "Poppins",
      components: [
        "Navigation Header",
        "AI Trip Planner",
        "Destination Cards",
        "Travel Experience Cards",
        "Package Cards",
        "Category Filters",
        "Recommendation Cards",
        "Itinerary Components",
        "Seasonal Calendar",
        "Review Cards",
        "Partner Sections",
        "Newsletter Callout"
      ]
    }
  },
  {
    id: "senzagro",
    name: "SenzAgro",
    tagline: "Smart Agriculture Platform",
    badge: "AgriTech & IoT",
    liveUrl: "https://senzagro.com",
    themeColor: "#52D17F",
    themeSoft: "#e6f7ed",
    overview: {
      text1: "SenzAgro is a smart agriculture platform designed to help farmers make better decisions through digital tools, agricultural insights, and connected farming experiences.",
      text2: "I worked on the UI/UX design of SenzAgro, focusing on creating a simple and accessible experience for farmers while organizing complex agricultural information into clear and useful interfaces. The project included SenzAgro Connect and CropCalendar, with a focus on improving how farmers access information, manage farming activities, and make informed decisions."
    },
    meta: {
      role: ["UI/UX Designer"],
      tools: ["Figma"],
      timeline: "2026"
    },
    challenge: {
      title: "Making Digital Agriculture Simple for Farmers",
      subtext: "Agricultural platforms can contain large amounts of information, making it difficult for farmers to quickly find what they need. The challenge was to design an experience where users can:",
      points: [
        "Access agricultural information easily",
        "Understand farming activities and recommendations clearly",
        "Plan crop-related activities more efficiently",
        "Navigate complex agricultural data without confusion",
        "Use digital tools without requiring advanced technical knowledge"
      ],
      conclusion: "Designed a simple and farmer-focused digital experience that makes agricultural information easier to understand, access, and use in everyday farming decisions."
    },
    businessGoals: [
      {
        title: "Improve Farmer Engagement",
        desc: "Create an approachable digital experience that encourages farmers to use SenzAgro regularly."
      },
      {
        title: "Simplify Agricultural Information",
        desc: "Transform complex agricultural information into clear and understandable interfaces."
      },
      {
        title: "Support Better Farm Planning",
        desc: "Help farmers organize crop activities and make better-informed decisions."
      },
      {
        title: "Build a Scalable Digital Platform",
        desc: "Create a consistent design foundation that can support additional agricultural services and features."
      }
    ],
    targetUsers: [
      { role: "Farmers", need: "Farmers who need simple access to agricultural information, recommendations, and digital farming tools." },
      { role: "Crop Growers", need: "Users who need support with crop planning, farming activities, and seasonal decisions." },
      { role: "Agricultural Professionals", need: "Agriculture-related users who need structured information and tools to support farming activities." }
    ],
    userJourney: [
      "Discover: User enters SenzAgro and explores available agricultural services.",
      "Select: User chooses the relevant crop, activity, or agricultural service.",
      "Understand: User views recommendations, information, and relevant farming insights.",
      "Plan: User uses the available tools to organize farming activities and crop-related tasks.",
      "Take Action: User applies the information and recommendations to their farming activities.",
      "Continue: User returns to SenzAgro for ongoing agricultural information and planning."
    ],
    iaNodes: [
      "Hero Section",
      "Agricultural Solutions",
      "SenzAgro Connect",
      "CropCalendar",
      "Smart Farming Features",
      "Agricultural Insights",
      "Crop & Activity Information",
      "Farmer Benefits",
      "Trusted / Partner Section",
      "Testimonials",
      "FAQ",
      "Contact / CTA"
    ],
    designDirection: {
      concepts: [
        "Modern agricultural experience",
        "Farmer-focused interface",
        "Clean and accessible layouts",
        "Nature-inspired visual language",
        "Information-focused design",
        "Simple navigation",
        "Clear content hierarchy",
        "Mobile-friendly experience"
      ],
      primaryColor: "#10c45d",
      textColor: "#374151",
      font: "Poppins",
      components: [
        "Navigation Header",
        "Hero Sections",
        "Agricultural Feature Cards",
        "Crop Cards",
        "CropCalendar",
        "Information Cards",
        "Recommendation Components",
        "Category Filters",
        "Farmer Benefit Sections",
        "Testimonial Cards",
        "CTA Sections"
      ]
    }
  },
 {
    id: "senzmate",
    name: "SenzMate",
    tagline: "IoT & AI Technology Website",
    badge: "IoT & AI Technology",
    liveUrl: "https://senzmate.com",
    themeColor: "#2A7CED",
    themeSoft: "#e0e7ff",
    overview: {
      text1: "SenzMate is an IoT and AI technology company focused on building connected solutions that help businesses monitor, understand, and improve their operations.",
      text2: "I worked on the UI/UX design of the SenzMate digital experience, focusing on creating a modern technology-focused interface that communicates complex solutions in a simple and engaging way. The design approach focused on clear information architecture, strong visual hierarchy, and presenting SenzMate's technology, solutions, and capabilities in a way that is easy for different audiences to understand."
    },
    meta: {
      role: ["UI/UX Designer"],
      tools: ["Figma"],
      timeline: "2026"
    },
    challenge: {
      title: "Making Complex Technology Easy to Understand",
      subtext: "IoT and AI products can involve complex technologies, technical terminology, and multiple business applications. The challenge was to create a digital experience where users can:",
      points: [
        "Understand what SenzMate does quickly",
        "Explore IoT and AI solutions without feeling overwhelmed",
        "Understand the business value behind the technology",
        "Navigate different products and solutions easily",
        "Move from discovering a solution to taking action"
      ],
      conclusion: "Designed a clean and modern technology experience that transforms complex IoT and AI capabilities into clear, understandable, and business-focused content."
    },
    businessGoals: [
      {
        title: "Communicate the Brand Clearly",
        desc: "Create a strong digital presence that represents SenzMate as a modern technology company."
      },
      {
        title: "Simplify Complex Solutions",
        desc: "Present IoT, AI, and connected technologies in a way that different audiences can understand."
      },
      {
        title: "Improve User Engagement",
        desc: "Use strong visual hierarchy and interactive sections to encourage users to explore the company's solutions."
      },
      {
        title: "Generate Business Interest",
        desc: "Guide visitors toward relevant solutions and conversion points such as inquiries and demo requests."
      }
    ],
    targetUsers: [
      { role: "Business Decision Makers", need: "Organizations looking for technology solutions to improve operational efficiency and visibility." },
      { role: "Technical Teams", need: "Users interested in understanding SenzMate's IoT, AI, and technology capabilities." },
      { role: "Industry Professionals", need: "Users exploring connected technology and digital transformation solutions." },
      { role: "Potential Partners", need: "Companies interested in collaborating with SenzMate on technology solutions." }
    ],
    userJourney: [
      "Discover: User enters the SenzMate website and understands the company's value proposition.",
      "Explore: User explores products, technologies, and industry solutions.",
      "Understand: User learns how SenzMate's technology solves real business problems.",
      "Evaluate: User explores relevant capabilities, solutions, and supporting information.",
      "Take Action: User reaches a relevant CTA to contact SenzMate, request information, or explore a solution further."
    ],
    iaNodes: [
      "Hero Section",
      "Company Introduction",
      "Solutions",
      "Products & Platforms",
      "Technology Capabilities",
      "Industry Applications",
      "How It Works",
      "Case Studies / Success Stories",
      "Trusted Partners",
      "Company Insights",
      "Contact / CTA"
    ],
    designDirection: {
      concepts: [
        "Modern technology-focused experience",
        "Clean and professional interface",
        "Strong visual hierarchy",
        "Data and technology-inspired visuals",
        "Clear business-focused messaging",
        "Structured content discovery",
        "Minimal and modern layouts"
      ],
      primaryColor: "#2A7CED",
      textColor: "#2B2C2C",
      font: "Poppins",
      components: [
        "Navigation Header",
        "Hero Sections",
        "Solution Cards",
        "Product Cards",
        "Technology Sections",
        "Industry Cards",
        "Statistics",
        "Case Study Cards",
        "Partner Logos",
        "CTA Sections",
        "Contact Forms"
      ]
    }
  }
];

export default function ProjectDetailsPage({ onBack }) {
  const [activeTabId, setActiveTabId] = useState("devicepulse");

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const selectedProject = params.get('project');

    if (selectedProject && websitesData.some((item) => item.id === selectedProject)) {
      setActiveTabId(selectedProject);
    }
  }, []);

  const currentWeb = websitesData.find((item) => item.id === activeTabId) || websitesData[0];

  return (
    <article 
      className="pdp-page"
      style={{
        '--pdp-brand-active': currentWeb.themeColor,
        '--pdp-brand-soft': currentWeb.themeSoft
      }}
    >
      {/* Dynamic Ambient Background Elements */}
      <div className="pdp-bg-glow pdp-bg-glow-primary" />
      <div className="pdp-bg-glow pdp-bg-glow-secondary" />

      <div className="pdp-container">
        {/* Navigation Bar */}
        <nav className="pdp-top-nav">
          <button onClick={onBack} className="pdp-back-btn" aria-label="Back to portfolio grid">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Portfolio</span>
          </button>
          
          <span className="pdp-badge">{currentWeb.badge}</span>
        </nav>

        {/* Website Selection Segmented Control */}
        <div className="pdp-selector-wrapper">
          <div className="pdp-selector-header">
            <span className="pdp-selector-label">Select Case Study</span>
            <span className="pdp-selector-count">{websitesData.length} Websites Available</span>
          </div>
          <div className="pdp-tabs-grid" role="tablist">
            {websitesData.map((web) => {
              const isActive = activeTabId === web.id;
              return (
                <button
                  key={web.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`pdp-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTabId(web.id)}
                >
                  <span className="pdp-tab-indicator"></span>
                  <span className="pdp-tab-text">{web.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Hero Section */}
        <header className="pdp-hero">
          <span className="pdp-section-tag">
            <span className="pdp-breathing-dot"></span>
            Case Study View
          </span>
          <h1 className="pdp-hero-title">{currentWeb.name}</h1>
          <p className="pdp-hero-subtitle">{currentWeb.tagline}</p>
        </header>

        {/* 01. Project Introduction */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">01. Project Introduction</h2>
          <div className="pdp-card pdp-intro-card">
            <div className="pdp-intro-overview">
              <h3>Overview</h3>
              <p>{currentWeb.overview.text1}</p>
              <p>{currentWeb.overview.text2}</p>
            </div>

            <div className="pdp-meta-grid">
              <div className="pdp-meta-item">
                <h4>Role</h4>
                <div className="pdp-chip-group">
                  {currentWeb.meta.role.map((r, i) => (
                    <span key={i} className="pdp-chip">{r}</span>
                  ))}
                </div>
              </div>
              <div className="pdp-meta-item">
                <h4>Tools</h4>
                <div className="pdp-chip-group">
                  {currentWeb.meta.tools.map((t, i) => (
                    <span key={i} className="pdp-chip pdp-chip-alt">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pdp-meta-item">
                <h4>Timeline</h4>
                <p className="pdp-meta-val">{currentWeb.meta.timeline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 02. The Challenge */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">02. The Challenge</h2>
          <div className="pdp-card pdp-challenge-card">
            <h3 className="pdp-card-heading">{currentWeb.challenge.title}</h3>
            <p className="pdp-card-subtext">{currentWeb.challenge.subtext}</p>
            <div className="pdp-challenge-grid">
              {currentWeb.challenge.points.map((pt, idx) => (
                <div key={idx} className="pdp-challenge-item">
                  <span className="pdp-challenge-icon">?</span>
                  <p>{pt}</p>
                </div>
              ))}
            </div>
            <div className="pdp-challenge-conclusion">
              <strong>Key Outcome:</strong> {currentWeb.challenge.conclusion}
            </div>
          </div>
        </section>

        {/* 03. Business Goals */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">03. Business Goals</h2>
          <div className="pdp-goals-grid">
            {currentWeb.businessGoals.map((goal, idx) => (
              <div key={idx} className="pdp-card pdp-goal-card">
                <div className="pdp-goal-icon">0{idx + 1}</div>
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
            {currentWeb.targetUsers.map((user, idx) => (
              <div key={idx} className="pdp-card pdp-user-card">
                <div className="pdp-user-tag">{user.role}</div>
                <p>{user.need}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05. User Journey Flow */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">05. User Journey Flow</h2>
          <div className="pdp-card pdp-flow-card">
            <div className="pdp-journey-timeline">
              {currentWeb.userJourney.map((step, idx) => {
                const isLast = idx === currentWeb.userJourney.length - 1;
                return (
                  <div key={idx} className={`pdp-timeline-step ${isLast ? 'pdp-step-final' : ''}`}>
                    <div className="pdp-step-marker">
                      <span>{idx + 1}</span>
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

        {/* 06. Website Information Architecture */}
        <section className="pdp-section">
          <h2 className="pdp-section-number">06. Website Information Architecture</h2>
          <div className="pdp-card">
            <div className="pdp-ia-header">
              <span className="pdp-ia-root-badge">{currentWeb.name} Index Page</span>
            </div>
            <div className="pdp-ia-grid">
              {currentWeb.iaNodes.map((node, idx) => (
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
                {currentWeb.designDirection.concepts.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="pdp-card">
              <h3 className="pdp-card-heading">Design System</h3>
              <div className="pdp-ds-swatches">
                <div className="pdp-swatch-card">
                  <div className="pdp-swatch" style={{ backgroundColor: currentWeb.designDirection.primaryColor }}></div>
                  <div className="pdp-swatch-info">
                    <span className="pdp-swatch-label">Primary Accent</span>
                    <code className="pdp-swatch-hex">{currentWeb.designDirection.primaryColor}</code>
                  </div>
                </div>
                <div className="pdp-swatch-card">
                  <div className="pdp-swatch" style={{ backgroundColor: currentWeb.designDirection.textColor }}></div>
                  <div className="pdp-swatch-info">
                    <span className="pdp-swatch-label">Primary Text</span>
                    <code className="pdp-swatch-hex">{currentWeb.designDirection.textColor}</code>
                  </div>
                </div>
              </div>

              <div className="pdp-ds-detail">
                <strong>Typography:</strong>
                <span className="pdp-ds-pill">{currentWeb.designDirection.font}</span>
              </div>

              <div className="pdp-ds-detail">
                <strong>Key Components:</strong>
                <div className="pdp-chip-group">
                  {currentWeb.designDirection.components.map((comp, idx) => (
                    <span key={idx} className="pdp-chip pdp-chip-alt">{comp}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08. Final Website Button */}
        <section className="pdp-section pdp-final-section">
          <h2 className="pdp-section-number">08. Final Website Design</h2>
          <div className="pdp-card pdp-cta-card">
            <div className="pdp-cta-content">
              <h3>Experience {currentWeb.name} Live</h3>
              <p>Explore the live production website and interact with the deployed experience.</p>
            </div>

            <a 
              href={currentWeb.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pdp-live-btn"
            >
              <span>Visit Live Website</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}