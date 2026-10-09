import React from 'react';
import './EducationCertificates.css';

// Lucide icons for UI and general domain concepts
import { 
  GraduationCap, 
  Award, 
  Building2, 
  BookOpen, 
  Cpu 
} from 'lucide-react';

// Brand logos from react-icons
import { SiFigma } from 'react-icons/si';
import { FaLinkedin, FaMicrosoft } from 'react-icons/fa';

const educationData = [
  {
    id: "01",
    period: "2026 – 2027",
    institution: "Cardiff Metropolitan University - ICBT",
    degree: "BSc (Hons) Business Information Systems",
    icon: <Building2 className="w-5 h-5" />
  },
  {
    id: "02",
    period: "2025 – 2026",
    institution: "National Institute of Business Management (NIBM)",
    degree: "Higher National Diploma In Information Systems (GPA - 3.56 / 4.00)",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    id: "03",
    period: "2023 – 2024",
    institution: "National Institute of Business Management (NIBM)",
    degree: "Diploma in Computer System Design (GPA - 3.35 / 4.00)",
    icon: <BookOpen className="w-5 h-5" />
  }
];

const certificatesData = [
  {
    id: 1,
    title: "Industrial AIoT Bootcamp - The AI-Augmented Product Lifecycle",
    issuer: "SenzMate",
    category: "AI & IoT",
    color: "aiot",
    logo: <Cpu className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Figma for UX Design",
    issuer: "LinkedIn",
    category: "Design",
    color: "figma",
    logo: <SiFigma size={18} />
  },
  {
    id: 3,
    title: "Career Essentials in Project Management Professional Certificate",
    issuer: "Microsoft and LinkedIn",
    category: "Management",
    color: "microsoft",
    logo: <FaMicrosoft size={18} />
  },
  {
    id: 4,
    title: "Agile Foundation",
    issuer: "LinkedIn",
    category: "Agile",
    color: "linkedin",
    logo: <FaLinkedin size={18} />
  },
  {
    id: 5,
    title: "Business Analysis Foundations",
    issuer: "LinkedIn",
    category: "Analysis",
    color: "linkedin",
    logo: <FaLinkedin size={18} />
  }
];

export default function EducationCertificates() {
  return (
    <section className="apple-showcase-container edu-cert-section">
      
      {/* Section Header */}
      <div className="showcase-header-wrapper">
        <div className="hero-badge">
          <span className="edc-dot-indicator"></span>
          EDUCATION & CERTIFICATES
        </div>
        <h2 className="showcase-title">
          Education & <span className="gradient-text">Certificates</span>
        </h2>
        <p className="showcase-subtitle">
          My academic background and professional certifications that fuel my passion for continuous learning and growth.
        </p>
      </div>

      {/* Grid Container */}
      <div className="showcase-grid">
        
        {/* Education Apple Card Container */}
        <div className="apple-card edu-card-wrapper">
          <div className="apple-card-inner">
            <div className="edc-card-header">
              <div className="edc-icon-badge">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3>Education</h3>
            </div>

            <div className="edc-timeline-container">
              {educationData.map((item, index) => (
                <div key={item.id} className="edc-timeline-item">
                  <div className="edc-timeline-tracker">
                    <span className="edc-tracker-dot"></span>
                    {index !== educationData.length - 1 && <span className="edc-tracker-line"></span>}
                  </div>

                  <div className="edc-timeline-box">
                    <div className="edc-box-left">
                      <span className="edc-box-number">{item.id}</span>
                      <span className="edc-box-period">{item.period}</span>
                    </div>
                    
                    <div className="edc-box-middle">
                      <h4 className="edc-institution-name">{item.institution}</h4>
                      <p className="edc-degree-title">{item.degree}</p>
                    </div>

                    <div className="edc-box-right">
                      <div className="edc-institution-icon">{item.icon}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates Apple Card Container */}
        <div className="apple-card cert-card-wrapper">
          <div className="apple-card-inner">
            <div className="edc-card-header">
              <div className="edc-icon-badge">
                <Award className="w-5 h-5" />
              </div>
              <h3>Certificates</h3>
            </div>

            <div className="edc-certs-grid">
              {certificatesData.map((cert) => (
                <div key={cert.id} className={`edc-cert-item edc-brand-${cert.color}`}>
                  <div className="edc-cert-top">
                    <div className="edc-cert-logo">{cert.logo}</div>
                    <span className="edc-cert-category">{cert.category}</span>
                  </div>
                  <h4 className="edc-cert-title">{cert.title}</h4>
                  <p className="edc-cert-issuer">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Full-Width Apple Card Banner */}
      <div className="showcase-grid" style={{ paddingTop: 0, paddingBottom: '100px' }}>
        <div className="apple-card edc-bottom-banner-card">
          <div className="apple-card-inner edc-bottom-banner">
            <div className="edc-banner-content">
              <h4>Always Learning, Always Growing</h4>
              <p>Committed to continuous learning and building high-impact tech solutions.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}