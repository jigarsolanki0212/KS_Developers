import React from 'react';
import {
  ShieldCheck,
  Calendar,
  Maximize2,
  Building,
  ExternalLink,
  MessageCircle,
  MapPin,
  Phone,
  BookOpen
} from 'lucide-react';
import { kashiHillsProject, corporateData } from '../config/projects';
import { kashiHillsAssets, getAssetUrl } from '../config/assets';
import { FloorPlanViewer } from '../components/kashi-hills/FloorPlanViewer';
import { SitePlanViewer } from '../components/kashi-hills/SitePlanViewer';
import { AmenitiesGrid } from '../components/kashi-hills/AmenitiesGrid';
import { SpecificationsTable } from '../components/kashi-hills/SpecificationsTable';
import { LocationSection } from '../components/kashi-hills/LocationSection';
import { BrochureViewer } from '../components/kashi-hills/BrochureViewer';
import { SectionEyebrow, GoldLine, KashiPattern, ArchitecturalFrame } from '../components/common/Decorative';
import { RevealOnScroll } from '../components/common/RevealOnScroll';
import { LazyImage } from '../components/common/LazyImage';
import { SEOHead } from '../components/common/SEOHead';
import { BuyerFAQSection } from '../components/common/BuyerFAQSection';
import { AnimatedCounter } from '../components/common/AnimatedCounter';

interface KashiHillsPageProps {
  onOpenScheduleModal: () => void;
  onOpenBrochureModal: () => void;
  onOpenLightbox: (src: string, title: string) => void;
}

export const KashiHillsPage: React.FC<KashiHillsPageProps> = ({
  onOpenScheduleModal,
  onOpenBrochureModal: _onOpenBrochureModal,
  onOpenLightbox
}) => {
  return (
    <div className="project-page">
      <SEOHead
        title="K S Kashi Hills | 2 BHK Flats & Shops in Enasan Ahmedabad | K.S. Developers"
        description="Buy 2 BHK residences & retail shops at K S Kashi Hills in Enasan, Naroda-Dehgam corridor, Ahmedabad. 595.78 to 617.09 sq.ft carpet area, 2 lifts per block, garden, AUDA approved, GujRERA PR/GJ/AHMEDABAD/DASKROI/AUDA/MAA09995/310322."
        keywords="K S Kashi Hills, Kashi Hills Enasan, 2 BHK Flat in Naroda Ahmedabad, Buy Flat in Enasan, Flats near Sahaj Hospital Enasan, AUDA approved 2 BHK flats Ahmedabad, 2 BHK Naroda Dehgam Road, GujRERA PR/GJ/AHMEDABAD/DASKROI/AUDA/MAA09995/310322"
        canonicalPath="/projects/kashi-hills"
      />

      {/* 1. HERO SECTION (Deep Teal Background + Gold Typography + Brochure Messaging) */}
      <section className="hero-project">
        <div className="hero-bg-container">
          <img
            src={getAssetUrl('brochureHero')}
            alt="K S Kashi Hills 3D Architectural Cover"
            className="hero-bg-image"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <KashiPattern opacity={0.06} color="#FFFFFF" />

        <div className="container hero-project-content">
          <div className="hero-project-grid">
            <div>
              <RevealOnScroll direction="up" delay={100}>
                <SectionEyebrow text="A PROJECT BY K.S. DEVELOPERS" light />
              </RevealOnScroll>

              {/* Stylized Kashi Hills Official Wordmark from Brochure Page 1 */}
              <RevealOnScroll direction="up" delay={200}>
                <div style={{ marginBottom: '14px' }}>
                  <img
                    src="/assets/kashi-hills/branding/kashi-hills-official-gold-transparent.png"
                    alt="K S Kashi Hills"
                    style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={300}>
                <h1 style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)', color: '#FFFFFF', lineHeight: 1.15, marginBottom: '12px' }}>
                  An ideal destination <span style={{ color: 'var(--kashi-gold-light)', fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>becomes iconic</span>.
                </h1>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={400}>
                <p style={{ fontSize: '1.2rem', color: '#DDE5E8', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>
                  2 BHK RESIDENCES & SHOPS · ENASAN, AHMEDABAD
                </p>
                <GoldLine width={56} height={2} />
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={500}>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
                  <a href="#floorplans" className="btn btn-kashi-gold">
                    <span>Explore Residences →</span>
                  </a>
                  <a href="#digital-brochure" className="btn btn-dark-secondary">
                    <BookOpen size={16} />
                    <span>Digital Brochure</span>
                  </a>
                  <button onClick={onOpenScheduleModal} className="btn btn-dark-secondary">
                    <Calendar size={16} />
                    <span>Book Site Visit</span>
                  </button>
                </div>
              </RevealOnScroll>
            </div>

            {/* Quick Stats Summary Card */}
            <RevealOnScroll direction="up" delay={350}>
              <div className="project-stats-badge-group">
                <div className="stat-item">
                  <span className="stat-value">2 BHK</span>
                  <span className="stat-label">Residences & Shops</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">
                    <AnimatedCounter value="596–617" duration={1600} />
                  </span>
                  <span className="stat-label">Sq.Ft. Carpet</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">Ready</span>
                  <span className="stat-label">To Move</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW & FACTS (Warm Ivory Section) */}
      <section className="section section-ivory">
        <KashiPattern opacity={0.04} color="#173F4E" />

        <div className="container">
          <div className="project-overview-grid">
            <RevealOnScroll direction="up">
              <div>
                <SectionEyebrow text="THE RESIDENCES" />
                <h2 className="section-title">
                  Designed for the life you <span className="highlight">actually live</span>.
                </h2>
                <GoldLine width={48} />
                <p style={{ fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '20px', color: 'var(--kashi-charcoal)' }}>
                  K S Kashi Hills is an authentic residential & commercial sanctuary situated on the high-growth Naroda–Dehgam corridor in Enasan, Ahmedabad. Built across 2 standalone residential towers containing 75 premium 2 BHK homes and 8 ground-floor commercial shops facing the 24.00 MT. wide road.
                </p>
                <p style={{ fontSize: '0.98rem', lineHeight: '1.7', color: 'var(--kashi-muted)', marginBottom: '32px' }}>
                  Engineered with earthquake-resistant RCC structural framing, expansive landscaped common plot gardens, 2 automatic lifts per block, 24-hour water supply, and China mosaic terrace waterproofing.
                </p>

                {/* RERA Verification Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: 'var(--kashi-white)',
                    border: '1px solid var(--kashi-border-gold)',
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-sm)',
                    maxWidth: '520px',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <ShieldCheck size={28} color="var(--kashi-gold-dark)" style={{ flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-gold-dark)', fontWeight: 700, display: 'block' }}>
                      AUDA & GUJRERA REGISTERED
                    </span>
                    <span style={{ fontSize: '0.92rem', color: 'var(--kashi-teal)', fontWeight: 700 }}>
                      {kashiHillsProject.reraNumber}
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Architecture 3D Elevation Card in Sharp Frame */}
            <RevealOnScroll direction="up" delay={150}>
              <ArchitecturalFrame style={{ cursor: 'pointer' }}>
                <div
                  style={{ position: 'relative' }}
                  onClick={() => onOpenLightbox(getAssetUrl('brochureHero'), 'K S Kashi Hills — 3D Architecture Facade')}
                >
                  <LazyImage
                    src={getAssetUrl('brochureHero')}
                    alt="K S Kashi Hills 3D Facade"
                    style={{ height: '420px' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      right: '16px',
                      background: 'rgba(16, 52, 64, 0.92)',
                      backdropFilter: 'blur(8px)',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--kashi-border-gold)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: '#FFFFFF',
                      zIndex: 2
                    }}
                  >
                    <span style={{ fontSize: '0.85rem' }}>Twin Tower Facade & Commercial Arcade</span>
                    <Maximize2 size={16} color="var(--kashi-gold-light)" />
                  </div>
                </div>
              </ArchitecturalFrame>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. DIGITAL BROCHURE FLIPBOOK */}
      <section className="section section-ivory-warm" style={{ borderTop: '1px solid var(--kashi-border)', borderBottom: '1px solid var(--kashi-border)' }}>
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-header text-center">
              <SectionEyebrow text="OFFICIAL BROCHURE" align="center" />
              <h2 className="section-title">
                Everything you need to know about <span className="highlight">Kashi Hills</span>.
              </h2>
              <p className="section-subtitle">
                Browse all 9 high-resolution pages of the official brochure directly in your browser. Pan, zoom, inspect floor plans, and download the full PDF.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={150}>
            <BrochureViewer onOpenLightbox={onOpenLightbox} />
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. THE ARCHITECTURE (5-View Storytelling Sequence) */}
      <section className="section section-white">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-header text-center">
              <SectionEyebrow text="THE ARCHITECTURE" align="center" />
              <h2 className="section-title">
                Designed to make an <span className="highlight">impression</span>.
              </h2>
              <p className="section-subtitle">
                A sequential walkthrough of Kashi Hills' twin-tower structure, showcasing clean vertical massing, wide balcony recesses, and durable textured exterior finishes.
              </p>
            </div>
          </RevealOnScroll>

          <div className="architecture-mosaic-grid">
            <div
              className="arch-tile arch-tile-7"
              onClick={() => onOpenLightbox(getAssetUrl('elevation01'), 'Elevation 01 — Front Facade')}
            >
              <LazyImage src={getAssetUrl('elevation01')} alt="Elevation 1" />
            </div>

            <div
              className="arch-tile arch-tile-5"
              onClick={() => onOpenLightbox(getAssetUrl('elevation02'), 'Elevation 02 — Angle Perspective')}
            >
              <LazyImage src={getAssetUrl('elevation02')} alt="Elevation 2" />
            </div>

            <div
              className="arch-tile arch-tile-4"
              onClick={() => onOpenLightbox(getAssetUrl('elevation03'), 'Elevation 03 — Tower Profile')}
            >
              <LazyImage src={getAssetUrl('elevation03')} alt="Elevation 3" />
            </div>

            <div
              className="arch-tile arch-tile-4"
              onClick={() => onOpenLightbox(getAssetUrl('closeUp'), 'Architecture Detail — Balcony & Finish')}
            >
              <LazyImage src={getAssetUrl('closeUp')} alt="Close-up detail" />
            </div>

            <div
              className="arch-tile arch-tile-4"
              onClick={() => onOpenLightbox(getAssetUrl('sideView'), 'Side View — Driveway & Tower')}
            >
              <LazyImage src={getAssetUrl('sideView')} alt="Side view" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. BIRD'S-EYE EXPERIENCE (Deep Teal Section) */}
      <section
        style={{
          position: 'relative',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: 'var(--kashi-teal-dark)'
        }}
      >
        <img
          src={getAssetUrl('birdView')}
          alt="K S Kashi Hills Aerial Bird's Eye View"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(16,52,64,0.7) 0%, rgba(16,52,64,0.3) 50%, var(--kashi-teal-dark) 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', maxWidth: '800px' }}>
          <RevealOnScroll direction="up">
            <SectionEyebrow text="KASHI HILLS · ENASAN" light align="center" />
            <h2 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', color: '#FFFFFF', marginBottom: '16px' }}>
              A place with room to breathe.
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#DDE5E8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
              LIVE THE SKY LIFE
            </p>
            <p style={{ fontSize: '1.05rem', color: '#C2CCD0', lineHeight: '1.7', marginBottom: '32px' }}>
              Twin residential blocks set amidst peaceful suburban surrounds. The master site plan guarantees expansive daylight exposure and natural cross-breezes across all 75 homes.
            </p>
            <button
              onClick={() => onOpenLightbox(getAssetUrl('birdView'), 'K S Kashi Hills — Full Aerial Bird View')}
              className="btn btn-kashi-gold"
            >
              <Maximize2 size={16} />
              <span>Explore High-Resolution Aerial View</span>
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* 6. RESIDENCES & 2D/3D FLOOR PLAN EXPLORER */}
      <section className="section section-ivory" style={{ borderTop: '1px solid var(--kashi-border)' }}>
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-header text-center">
              <SectionEyebrow text="FIND YOUR SPACE" align="center" />
              <h2 className="section-title">
                Explore the <span className="highlight">Residences</span>
              </h2>
              <p className="section-subtitle">
                Inspect Block A & Block B 2 BHK layouts with interactive toggle between 2D technical blueprints and 3D furnished isometric cutaways.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={150}>
            <FloorPlanViewer
              floorPlans={kashiHillsProject.floorPlans}
              onOpenScheduleModal={onOpenScheduleModal}
              onOpenLightbox={onOpenLightbox}
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* 7. VERIFIED AMENITIES (Deep Teal Panel matching Brochure Page 3) */}
      <section className="section section-white">
        <div className="container">
          <RevealOnScroll direction="up">
            <AmenitiesGrid
              amenities={kashiHillsProject.amenities}
              onOpenLightbox={onOpenLightbox}
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* 8. MASTER SITE & CLUSTER PLANS */}
      <section className="section section-ivory-warm" style={{ borderTop: '1px solid var(--kashi-border)', borderBottom: '1px solid var(--kashi-border)' }}>
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-header text-center">
              <SectionEyebrow text="EXPLORE THE SITE" align="center" />
              <h2 className="section-title">
                Master Site & <span className="highlight">Cluster Plans</span>
              </h2>
              <p className="section-subtitle">
                Interact with high-resolution cluster plans for the Ground Floor (with 8 Commercial Shops & Common Plot), Typical Floor (Units 101–706), Basement Parking, and Road Network.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={150}>
            <SitePlanViewer
              clusterPlans={kashiHillsProject.clusterPlans}
              onOpenLightbox={onOpenLightbox}
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* 9. SPECIFICATIONS (Brochure Page 9 Split Layout) */}
      <section className="section section-ivory">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-header">
              <SectionEyebrow text="MATERIALITY & CONSTRUCTION" />
              <h2 className="section-title">
                Technical <span className="highlight">Specifications</span>
              </h2>
              <p className="section-subtitle">
                Verified construction materials directly from Page 9 of the brochure: Earthquake Resistant R.C.C. Frame, Vitrified tiles throughout, Granite platform with S.S. sink, Color glazed tiles dado, and China Mosaic terrace waterproofing.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={150}>
            <SpecificationsTable specifications={kashiHillsProject.specifications} />
          </RevealOnScroll>
        </div>
      </section>

      {/* 10. LOCATION & CONNECTIVITY */}
      <section className="section section-white" style={{ borderTop: '1px solid var(--kashi-border)' }}>
        <div className="container">
          <RevealOnScroll direction="up">
            <LocationSection
              onOpenScheduleModal={onOpenScheduleModal}
              onOpenLightbox={onOpenLightbox}
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* 11. EDITORIAL GALLERY */}
      <section className="section section-ivory-warm" id="gallery" style={{ borderTop: '1px solid var(--kashi-border)' }}>
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-header text-center">
              <SectionEyebrow text="PROJECT VISUALS" align="center" />
              <h2 className="section-title">
                Complete Project <span className="highlight">Gallery</span>
              </h2>
              <p className="section-subtitle">
                Authentic project photography including 3D elevations, architectural close-ups, garden walks, and lobbies.
              </p>
            </div>
          </RevealOnScroll>

          <div className="gallery-grid">
            {kashiHillsProject.gallery.map((item, idx) => (
              <RevealOnScroll key={item.id} direction="up" delay={idx * 60}>
                <div
                  className="gallery-card"
                  style={{
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--kashi-border)'
                  }}
                  onClick={() => onOpenLightbox(item.image, item.title)}
                >
                  <LazyImage src={item.image} alt={item.title} />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-tag">{item.category}</span>
                    <h4 className="gallery-card-title">{item.title}</h4>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BUYER FAQS & ADVISORY SECTION (SEO & AI Search Target) */}
      <BuyerFAQSection />

      {/* 13. CONTACT CTA (Deep Teal Full-width Section) */}
      <section className="section section-teal-dark">
        <KashiPattern opacity={0.06} color="#FFFFFF" />

        <div className="container">
          <RevealOnScroll direction="up">
            <div className="project-cta-split-grid">
              <div>
                <SectionEyebrow text="PRIVATE APPOINTMENT" light />
                <h2 className="section-title" style={{ color: '#FFFFFF' }}>
                  Come home to <span style={{ color: 'var(--kashi-gold-light)', fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>Kashi Hills</span>.
                </h2>
                <GoldLine width={48} />
                <p style={{ fontSize: '1.08rem', color: '#C2CCD0', lineHeight: '1.8', marginBottom: '24px' }}>
                  Experience the project in person. Walk through the sample finishes, test the natural cross-ventilation, and inspect the construction firsthand in Enasan.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MapPin size={20} color="var(--kashi-gold-light)" />
                    <span style={{ color: 'var(--kashi-ivory)', fontSize: '0.95rem' }}>{kashiHillsProject.mapAddress}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Phone size={20} color="var(--kashi-gold-light)" />
                    <span style={{ color: 'var(--kashi-ivory)', fontSize: '0.95rem' }}>
                      Direct Hotline: <strong>{corporateData.phone}</strong> / <strong>{corporateData.phoneSecondary}</strong>
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Building size={20} color="var(--kashi-gold-light)" />
                    <span style={{ color: 'var(--kashi-ivory)', fontSize: '0.95rem' }}>
                      Architect: <strong>7-AXIS</strong> · Structural: <strong>KIRAN N. PATEL</strong>
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <button onClick={onOpenScheduleModal} className="btn btn-kashi-gold">
                    <Calendar size={16} />
                    <span>Schedule a Site Visit →</span>
                  </button>
                  <a
                    href={`https://wa.me/${corporateData.whatsapp}?text=${encodeURIComponent('Hello K.S. Developers, I would like to schedule a site visit for Kashi Hills.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark-secondary"
                    style={{ color: '#25D366', borderColor: 'rgba(37, 211, 102, 0.4)' }}
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Legal RERA Trust Card */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--kashi-border-gold)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '40px 32px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <ShieldCheck size={32} color="var(--kashi-gold-light)" />
                  <div>
                    <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: 0 }}>RERA Registered Project</h3>
                    <span style={{ fontSize: '0.76rem', color: '#C2CCD0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Government of Gujarat AUDA Approved
                    </span>
                  </div>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '16px', borderRadius: 'var(--radius-xs)', marginBottom: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ fontSize: '0.72rem', color: '#8E9CA2', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    Official Registration Number
                  </span>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--kashi-gold-light)', wordBreak: 'break-all', fontFamily: 'monospace' }}>
                    {kashiHillsProject.reraNumber}
                  </strong>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#C2CCD0', lineHeight: '1.6', marginBottom: '24px' }}>
                  Under RERA regulations, all project approvals, sanctioned plans, title certificates, and milestone reports are publicly accountable.
                </p>

                <a
                  href={kashiHillsAssets.sources.reraVerify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark-secondary"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <span>Verify on Official GujRERA Portal</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};
