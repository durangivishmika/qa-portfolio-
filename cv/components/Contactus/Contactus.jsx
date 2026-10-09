import React from 'react';
import { MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import './Contactus.css';

export default function PortfolioContact() {
  const whatsappNumber = "+94763659342"; 

  return (
    <div className="portfolio-scoped-wrapper">
      <div className="portfolio-contact-container">
        
        {/* Hero Section */}
        <section className="portfolio-hero">
          <div className="hero-content-wrapper">
            <div className="hero-badge">
              <span className="status-dot"></span>
              Available for Engineering &amp; Design Sprints
            </div>
            <h1 className="portfolio-title">
              Let’s connect and build <span className="gradient-text">exceptional products.</span>
            </h1>
            <p className="portfolio-subtitle">
              Connect instantly on LinkedIn or launch a direct WhatsApp chat session for rapid project scoping and technical discussions.
            </p>
          </div>
        </section>

        {/* Main Grid */}
        <div className="portfolio-grid">

          {/* Card 1: Professional Network (LinkedIn) */}
          <div className="apple-card">
            <div className="apple-card-inner">
              <div>
                <h2 className="card-heading">
                  Professional Network
                </h2>
                <p className="card-subtext">
                  Connect or drop a direct note through my verified professional LinkedIn profile.
                </p>

                {/* LinkedIn Link Card */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-channel-card"
                >
                  <div className="channel-icon linkedin-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div className="channel-details">
                    <h4 className="channel-title">LinkedIn Profile</h4>
                    <p className="channel-subtitle">linkedin.com/in/username</p>
                  </div>
                  <ArrowRight size={18} color="var(--portfolio-text-secondary)" />
                </a>
              </div>

              <div className="card-footer-info">
                <div className="quick-info-row">
                  <CheckCircle2 size={18} color="#34c759" className="info-icon" />
                  <div>
                    <h5 className="info-title">Verified Credentials</h5>
                    <p className="info-desc">Endorsed for System Architecture &amp; UI/UX Design</p>
                  </div>
                </div>
                <div className="quick-info-row">
                  <Clock size={18} color="#0071e3" className="info-icon" />
                  <div>
                    <h5 className="info-title">Response Time</h5>
                    <p className="info-desc">Typically replies within 4 business hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Direct WhatsApp Channel */}
          <div className="apple-card">
            <div className="apple-card-inner">
              <div>
                <h2 className="card-heading">
                  Instant Chat &amp; Scoping
                </h2>
                <p className="card-subtext">
                  Skip forms and initiate an immediate conversation via WhatsApp.
                </p>

                {/* WhatsApp Launcher Box */}
                <div className="whatsapp-launcher-box">
                  <div className="whatsapp-avatar">
                    <img src="/Images/whatsapp new.png" alt="WhatsApp GIF" className="whatsapp-gif-icon" />
                  </div>
                  <h3 className="whatsapp-box-title">
                    Chat on WhatsApp
                  </h3>
                  <p className="whatsapp-box-desc">
                    Connect instantly for quick queries, project availability, or collaboration.
                  </p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                  >
                    Start WhatsApp Chat
                  </a>
                </div>
              </div>

              <div className="location-box">
                <MapPin size={20} color="#0071e3" />
                <div>
                  <span className="location-label">Primary Hub</span>
                  <span className="location-value">Colombo, Sri Lanka &bull; Remote Worldwide</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}