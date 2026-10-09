"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-root">
      <div className="navbar-container">
        
        {/* Image Brand / Logo */}
        <Link href="/" className="navbar-brand">
          <img 
            src="/Images/logo1.png" 
            alt="Logo" 
            className="brand-logo-image" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links-desktop">
          {/* <a href="#About" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'About')}>About</a> */}
          <a href="#ProjectsSection" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'ProjectsSection')}>Projects</a>
          <a href="/ThreeDShowcase" className="nav-link">3D Design</a>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <Link 
            href="/Contactus" 
            className="navbar-cta"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {/* <a href="#About" className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, 'About')}>About</a> */}
          <a href="#ProjectsSection" className="mobile-nav-link" onClick={(e) => handleNavLinkClick(e, 'ProjectsSection')}>Projects</a>
          <a href="/ThreeDShowcase" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>3D Design</a>
          <a href="/Contactus" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}