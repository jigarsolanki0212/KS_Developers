import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, ShieldCheck, Download } from 'lucide-react';
import { corporateData, kashiHillsProject } from '../../config/projects';
import { kashiHillsAssets } from '../../config/assets';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-corporate">
      <div className="container">
        {/* Main 4-Column Corporate Grid */}
        <div className="footer-grid">
          {/* Brand & Mission */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '18px' }}>
              <BrandLogo theme="dark" size="lg" />
            </Link>
            <p style={{ fontSize: '0.95rem', color: '#C2CCD0', marginBottom: '24px', lineHeight: '1.7' }}>
              A design-forward real estate developer in Ahmedabad, dedicated to creating enduring residential spaces rooted in architectural clarity, structural integrity, and total transparency.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={`https://wa.me/${corporateData.whatsapp}?text=${encodeURIComponent('Hello K.S. Developers, I would like to inquire about your residential projects.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark-secondary"
                style={{ padding: '8px 14px', fontSize: '0.8rem' }}
              >
                <MessageCircle size={14} color="#25D366" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About K.S. Developers</Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">All Projects</Link>
              </li>
              <li>
                <Link to="/projects/kashi-hills" className="footer-link">Kashi Hills (Flagship)</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact & Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* Flagship Project Links */}
          <div>
            <h4 className="footer-col-title">Kashi Hills Hub</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/projects/kashi-hills#floorplans" className="footer-link">2 BHK Floor Plans (2D/3D)</Link>
              </li>
              <li>
                <Link to="/projects/kashi-hills#amenities" className="footer-link">9 Lifestyle Amenities</Link>
              </li>
              <li>
                <Link to="/projects/kashi-hills#siteplan" className="footer-link">Master Ground & Floor Plans</Link>
              </li>
              <li>
                <Link to="/projects/kashi-hills#specifications" className="footer-link">IS Code Specifications</Link>
              </li>
              <li>
                <Link to="/projects/kashi-hills#location" className="footer-link">Enasan Location & Connectivity</Link>
              </li>
              <li>
                <a
                  href={kashiHillsAssets.local.brochurePdf}
                  download="kashi-hills-brochure.pdf"
                  className="footer-link"
                  style={{ color: 'var(--kashi-gold-light)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Download size={13} />
                  <span>Download Full Brochure</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Developer Contacts */}
          <div>
            <h4 className="footer-col-title">Site Office & Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: '#C2CCD0' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--kashi-gold-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{corporateData.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="var(--kashi-gold-light)" style={{ flexShrink: 0 }} />
                <span>
                  <a href={`tel:${corporateData.phone}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>{corporateData.phone}</a>
                  {' / '}
                  <a href={`tel:${corporateData.phoneSecondary}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>{corporateData.phoneSecondary}</a>
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="var(--kashi-gold-light)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${corporateData.email}`} style={{ color: '#FFFFFF' }}>{corporateData.email}</a>
              </div>
            </div>

            {/* AUDA RERA Verification Box */}
            <div className="rera-info-box" style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <ShieldCheck size={16} color="var(--kashi-gold-light)" />
                <strong style={{ fontSize: '0.78rem', color: 'var(--kashi-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  AUDA / GUJRERA REGISTERED
                </strong>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#C2CCD0', fontFamily: 'monospace' }}>
                {kashiHillsProject.reraNumber}
              </div>
              <a
                href={kashiHillsAssets.sources.reraVerify}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.74rem', color: 'var(--kashi-gold-light)', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}
              >
                <span>Verify on GujRERA portal</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="footer-legal-bar">
          <div>
            © {new Date().getFullYear()} K.S. DEVELOPERS. All rights reserved. Architect: 7-AXIS · Structural: Kiran N. Patel.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>RERA No: {kashiHillsProject.reraNumber}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
