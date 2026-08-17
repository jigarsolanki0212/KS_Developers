import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen } from 'lucide-react';
import { corporateData } from '../config/projects';
import { getAssetUrl } from '../config/assets';
import { SectionEyebrow, GoldLine, KashiPattern, ArchitecturalFrame } from '../components/common/Decorative';
import { RevealOnScroll } from '../components/common/RevealOnScroll';
import { LazyImage } from '../components/common/LazyImage';
import { SEOHead } from '../components/common/SEOHead';
import { BuyerFAQSection } from '../components/common/BuyerFAQSection';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { LoanEmiCalculator } from '../components/common/LoanEmiCalculator';

interface HomePageProps {
  onOpenScheduleModal: () => void;
  onOpenLightbox: (src: string, title: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenScheduleModal, onOpenLightbox }) => {
  return (
    <div className="home-page">
      <SEOHead
        title="K.S. Developers | Premium 2 BHK Flats in Naroda & Enasan Ahmedabad | Kashi Hills"
        description="Buy 2 BHK flats & shops in Enasan, Naroda Ahmedabad by K.S. Developers. AUDA & GujRERA approved (PR/GJ/AHMEDABAD/DASKROI/AUDA/MAA09995/310322). Maximum carpet area, garden, lift, bank loan approved."
        keywords="2 BHK Flat in Naroda Ahmedabad, Buy 2 BHK Home Enasan, K S Kashi Hills, Kashi Hills Ahmedabad, Flats near Naroda Dehgam Road, AUDA approved 2 BHK flats Ahmedabad, K.S. Developers Ahmedabad, Ready to move flats Naroda"
      />

      {/* 1. HERO SECTION (Deep Teal Cinematic Experience) */}
      <section className="hero-corporate">
        <div className="hero-bg-container">
          <img
            src={getAssetUrl('brochureHero')}
            alt="K.S. Developers Architecture"
            className="hero-bg-image"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <KashiPattern opacity={0.06} color="#FFFFFF" />

        <div className="container">
          <div className="hero-content">
            <RevealOnScroll direction="up" delay={100}>
              <SectionEyebrow text="K.S. DEVELOPERS · AHMEDABAD" light />
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={200}>
              <h1 className="hero-title">
                Building spaces that become part of <span className="gold">your story</span>.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={300}>
              <GoldLine width={64} height={2} />
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={400}>
              <p className="hero-subtitle">
                A design-forward real estate developer in Ahmedabad, crafting enduring residences defined by architectural proportion, honest materiality, and absolute transparency.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={500}>
              <div className="hero-actions">
                <Link to="/projects/kashi-hills" className="btn btn-kashi-gold">
                  <span>Discover Kashi Hills →</span>
                </Link>
                <Link to="/projects/kashi-hills#digital-brochure" className="btn btn-dark-secondary">
                  <BookOpen size={16} />
                  <span>View Full Brochure</span>
                </Link>
                <button onClick={onOpenScheduleModal} className="btn btn-dark-secondary">
                  <Calendar size={16} />
                  <span>Schedule a Visit</span>
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 2. THE DEVELOPER / ABOUT SECTION (Warm Ivory Large Editorial Layout) */}
      <section className="section section-ivory">
        <KashiPattern opacity={0.04} color="#173F4E" />

        <div className="container">
          <div className="about-developer-grid">
            <RevealOnScroll direction="up">
              <div>
                <SectionEyebrow text="THE DEVELOPER" />
                <h2 className="section-title">
                  Building with <span className="highlight">purpose</span>.
                </h2>
                <GoldLine width={48} />
                <p style={{ marginBottom: '20px', fontSize: '1.08rem', lineHeight: '1.8', color: 'var(--kashi-charcoal)' }}>
                  At K.S. Developers, we reject superficial ornamentation in favor of purposeful architecture. We believe a home must be measured by how naturally it breathes, how light travels through its living rooms, and the long-term peace of mind it provides to its families.
                </p>
                <p style={{ marginBottom: '32px', fontSize: '1rem', color: 'var(--kashi-muted)', lineHeight: '1.7' }}>
                  Every development under our banner is RERA registered, legally verified, and executed with strict adherence to structural engineering standards.
                </p>

                <Link to="/about" className="btn btn-kashi-primary">
                  <span>Read Developer Story & Philosophy →</span>
                </Link>
              </div>
            </RevealOnScroll>

            {/* Corporate Stats Cards in Warm Ivory Theme */}
            <div className="stats-grid-2x2">
              {corporateData.stats.map((stat, idx) => (
                <RevealOnScroll key={idx} direction="up" delay={idx * 120}>
                  <div
                    style={{
                      background: 'var(--kashi-white)',
                      border: '1px solid var(--kashi-border)',
                      padding: '32px 24px',
                      borderRadius: 'var(--radius-sm)',
                      textAlign: 'center',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--kashi-teal)', marginBottom: '6px' }}>
                      <AnimatedCounter value={stat.number} duration={1600} />
                    </div>
                    <div style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--kashi-muted)', fontWeight: 600 }}>
                      {stat.label}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECT: KASHI HILLS (Full-width Architectural Showcase) */}
      <section className="section section-ivory-warm" style={{ borderTop: '1px solid var(--kashi-border)', borderBottom: '1px solid var(--kashi-border)' }}>
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-header">
              <SectionEyebrow text="FEATURED RESIDENTIAL PROJECT" />
              <h2 className="section-title">
                KASHI <span className="highlight">HILLS</span>
              </h2>
              <p className="section-subtitle">
                Premium 2 BHK residences & retail arcade situated on the Naroda–Dehgam corridor in Enasan, Ahmedabad.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={150}>
            <ArchitecturalFrame>
              <div className="featured-project-card-grid">
                {/* Image Preview with Smooth Blur-up */}
                <div
                  style={{ position: 'relative', overflow: 'hidden', minHeight: '440px', cursor: 'pointer' }}
                  onClick={() => onOpenLightbox(getAssetUrl('brochureHero'), 'K S Kashi Hills — 3D Architectural Elevation')}
                >
                  <LazyImage
                    src={getAssetUrl('brochureHero')}
                    alt="K S Kashi Hills Flagship"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      background: 'rgba(16, 52, 64, 0.92)',
                      backdropFilter: 'blur(8px)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--kashi-border-gold)',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      color: 'var(--kashi-gold-light)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      zIndex: 2
                    }}
                  >
                    Ready to Move
                  </div>
                </div>

                {/* Content Details */}
                <div style={{ padding: '44px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--kashi-white)' }}>
                  <div>
                    <span style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--kashi-gold-dark)', fontWeight: 700 }}>
                      ENASAN · AHMEDABAD
                    </span>
                    <h3 style={{ fontSize: '2.2rem', color: 'var(--kashi-teal)', margin: '4px 0 6px' }}>
                      K S Kashi Hills
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--kashi-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '16px' }}>
                      2 BHK · Live The Sky Life & Shops
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--kashi-charcoal)', marginBottom: '24px', lineHeight: '1.7' }}>
                      Featuring 2 standalone towers, 75 exclusive residences, 8 commercial arcade shops, central green common plot, and 2 automatic elevators per block.
                    </p>

                    {/* Key Project Badges */}
                    <div className="project-stats-triplet">
                      <div style={{ background: 'var(--kashi-ivory)', padding: '12px', borderRadius: 'var(--radius-xs)', textAlign: 'center', border: '1px solid var(--kashi-border)' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--kashi-muted)', textTransform: 'uppercase', display: 'block' }}>Config</span>
                        <strong style={{ fontSize: '0.96rem', color: 'var(--kashi-teal)' }}>2 BHK</strong>
                      </div>
                      <div style={{ background: 'var(--kashi-ivory)', padding: '12px', borderRadius: 'var(--radius-xs)', textAlign: 'center', border: '1px solid var(--kashi-border)' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--kashi-muted)', textTransform: 'uppercase', display: 'block' }}>Carpet</span>
                        <strong style={{ fontSize: '0.96rem', color: 'var(--kashi-teal)' }}>595.78–617.09 SQ.FT.</strong>
                      </div>
                      <div style={{ background: 'var(--kashi-ivory)', padding: '12px', borderRadius: 'var(--radius-xs)', textAlign: 'center', border: '1px solid var(--kashi-border)' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--kashi-muted)', textTransform: 'uppercase', display: 'block' }}>Status</span>
                        <strong style={{ fontSize: '0.96rem', color: 'var(--kashi-teal)' }}>Ready to Move</strong>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <Link to="/projects/kashi-hills" className="btn btn-kashi-primary" style={{ flex: 1 }}>
                      <span>Explore Kashi Hills →</span>
                    </Link>
                    <button onClick={onOpenScheduleModal} className="btn btn-kashi-secondary">
                      <Calendar size={16} />
                      <span>Book Visit</span>
                    </button>
                  </div>
                </div>
              </div>
            </ArchitecturalFrame>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. GUIDING PILLARS (Warm Ivory Rhythm) */}
      <section className="section section-ivory">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-header text-center">
              <SectionEyebrow text="CORE DEVELOPER STANDARDS" align="center" />
              <h2 className="section-title">
                Principles Built on <span className="highlight">Integrity</span>
              </h2>
              <p className="section-subtitle">
                Four fundamental commitments embedded into every drawing, concrete pour, and homeowner relationship.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {corporateData.pillars.map((pillar, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={idx * 100}>
                <div
                  style={{
                    background: 'var(--kashi-white)',
                    border: '1px solid var(--kashi-border)',
                    padding: '36px 28px',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: 'var(--shadow-sm)',
                    position: 'relative'
                  }}
                >
                  <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--kashi-gold-dark)', marginBottom: '12px', fontWeight: 700 }}>
                    0{idx + 1}.
                  </div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--kashi-teal)' }}>{pillar.title}</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--kashi-muted)', lineHeight: '1.65', margin: 0 }}>
                    {pillar.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CINEMATIC BIRD-VIEW MOMENT (Deep Teal Accent Section) */}
      <section
        style={{
          position: 'relative',
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: 'var(--kashi-teal-dark)'
        }}
      >
        <img
          src={getAssetUrl('birdView')}
          alt="K S Kashi Hills Aerial Bird View"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.48)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(16,52,64,0.7) 0%, transparent 50%, rgba(16,52,64,0.9) 100%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <RevealOnScroll direction="up">
            <SectionEyebrow text="AERIAL PERSPECTIVE · ENASAN" light align="center" />
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: '#FFFFFF', marginBottom: '16px' }}>
              A place with room to breathe.
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#DDE5E8', maxWidth: '600px', margin: '0 auto 32px' }}>
              Twin tower residences thoughtfully integrated into Enasan's open surroundings, providing tranquil neighborhood living without urban congestion.
            </p>
            <button
              onClick={() => onOpenLightbox(getAssetUrl('birdView'), 'K S Kashi Hills — Aerial Bird View')}
              className="btn btn-dark-secondary"
            >
              <span>View Fullscreen Aerial Perspective →</span>
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* 6. HOME LOAN EMI CALCULATOR */}
      <LoanEmiCalculator />

      {/* 7. HOME BUYER FAQS & ADVISORY (AI & Location Search Optimization) */}
      <BuyerFAQSection />

      {/* 8. CALL TO ACTION */}
      <section className="section section-white" style={{ borderTop: '1px solid var(--kashi-border)' }}>
        <div className="container">
          <RevealOnScroll direction="up">
            <div
              style={{
                background: 'var(--kashi-teal-dark)',
                color: 'var(--kashi-ivory)',
                borderRadius: 'var(--radius-sm)',
                padding: '56px 48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '32px',
                border: '1px solid var(--kashi-border-gold)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <KashiPattern opacity={0.06} color="#FFFFFF" />

              <div style={{ maxWidth: '640px', position: 'relative', zIndex: 1 }}>
                <SectionEyebrow text="PERSONAL GUIDED WALKTHROUGH" light />
                <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', margin: '8px 0 16px' }}>
                  Come see it for yourself.
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#C2CCD0', lineHeight: '1.7', margin: 0 }}>
                  Experience the spatial flow, cross-ventilation, and craftsmanship in person. Our developer representatives are on-site in Enasan to answer every question with complete clarity.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '240px', position: 'relative', zIndex: 1 }}>
                <button
                  onClick={onOpenScheduleModal}
                  className="btn btn-kashi-gold"
                  style={{ width: '100%', padding: '16px 28px' }}
                >
                  <Calendar size={18} />
                  <span>Schedule a Site Visit →</span>
                </button>
                <Link to="/contact" className="btn btn-dark-secondary" style={{ width: '100%', textAlign: 'center' }}>
                  <span>Contact Corporate Office</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};
