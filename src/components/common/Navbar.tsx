import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, BookOpen } from 'lucide-react';
import { corporateData } from '../../config/projects';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenScheduleModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenScheduleModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`header-nav ${isScrolled ? 'scrolled' : 'transparent-dark'}`}>
        <div className="container nav-container">
          {/* Brand Logo with 100% Readable White Tagline & 3D Gold Emblem */}
          <Link to="/" className="brand-logo" aria-label="K.S. Developers Home">
            <BrandLogo theme="dark" size="md" />
          </Link>

          {/* Desktop Navigation Links (Always Crisp White & Gold) */}
          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`nav-link ${location.pathname === '/about' || location.pathname === '/about-us' ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/kashi-hills"
                  className={`nav-link ${location.pathname.startsWith('/projects/kashi-hills') || location.pathname === '/kashi-hills' || location.pathname === '/k-s-kashi-hills' ? 'active' : ''}`}
                >
                  K S Kashi Hills
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`nav-link ${location.pathname === '/contact' || location.pathname === '/contact-us' ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              to="/projects/kashi-hills#digital-brochure"
              className="btn btn-dark-secondary nav-cta-btn"
              style={{ padding: '9px 16px', fontSize: '0.8rem' }}
              onClick={() => {
                const el = document.getElementById('digital-brochure');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <BookOpen size={14} />
              <span>Brochure</span>
            </Link>

            <button
              onClick={onOpenScheduleModal}
              className="btn btn-kashi-gold nav-cta-btn"
              aria-label="Schedule a Site Visit"
            >
              <Calendar size={15} />
              <span>Book Visit</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-menu-btn"
              aria-label="Open Navigation Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <BrandLogo theme="dark" size="sm" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: 'transparent', color: '#FFFFFF', padding: '8px', cursor: 'pointer' }}
            aria-label="Close Navigation Menu"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          <li>
            <Link
              to="/"
              className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`mobile-nav-link ${location.pathname === '/about' || location.pathname === '/about-us' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About K.S. Developers
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`mobile-nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio & Projects
            </Link>
          </li>
          <li>
            <Link
              to="/projects/kashi-hills"
              className={`mobile-nav-link ${location.pathname.startsWith('/projects/kashi-hills') || location.pathname === '/kashi-hills' || location.pathname === '/k-s-kashi-hills' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'var(--kashi-gold-light)', fontWeight: 700 }}
            >
              K S Kashi Hills (Flagship 2 BHK) →
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`mobile-nav-link ${location.pathname === '/contact' || location.pathname === '/contact-us' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact & Enquiries
            </Link>
          </li>
        </ul>
        <div style={{ marginTop: 'auto', marginBottom: '24px', paddingTop: '24px', borderTop: '1px solid rgba(214, 181, 106, 0.2)' }}>
          <h5 style={{ fontSize: '0.8rem', color: 'var(--kashi-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Corporate Office
          </h5>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '12px' }}>
            {corporateData.address}
          </p>
          <a href={`mailto:${corporateData.email}`} style={{ color: 'var(--kashi-ivory)', fontSize: '0.9rem', textDecoration: 'underline' }}>
            {corporateData.email}
          </a>
        </div>

        <div className="mobile-drawer-footer">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenScheduleModal();
            }}
            className="btn btn-kashi-gold"
            style={{ width: '100%' }}
          >
            <Calendar size={18} />
            <span>Schedule Site Walkthrough</span>
          </button>
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <a
              href={`tel:${corporateData.phone}`}
              className="btn btn-dark-secondary"
              style={{ flex: 1, fontSize: '0.8rem', textAlign: 'center' }}
            >
              <span>Call: {corporateData.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
