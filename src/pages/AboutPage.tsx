import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { corporateData } from '../config/projects';
import { getAssetUrl } from '../config/assets';
import { SectionEyebrow, GoldLine, KashiPattern, ArchitecturalFrame } from '../components/common/Decorative';
import { SEOHead } from '../components/common/SEOHead';

interface AboutPageProps {
  onOpenScheduleModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenScheduleModal }) => {
  return (
    <div className="about-page" style={{ paddingTop: 'var(--header-height)' }}>
      <SEOHead
        title="About K.S. Developers | Premium Real Estate Developer Ahmedabad"
        description="Learn about K.S. Developers — a leading Ahmedabad developer committed to architectural integrity, honest materiality, RERA compliance, and quality residential living in Enasan."
        keywords="About K.S. Developers, Real Estate Developer Ahmedabad, Builders in Naroda, K.S. Developers Enasan Ahmedabad, RERA Real Estate Ahmedabad"
        canonicalPath="/about"
      />

      {/* Hero (Deep Teal) */}
      <section className="section section-teal-dark">
        <KashiPattern opacity={0.06} color="#FFFFFF" />
        <div className="container">
          <div style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
            <SectionEyebrow text="THE DEVELOPER · ABOUT US" light />
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#FFFFFF', margin: '8px 0 16px' }}>
              Built with <span style={{ color: 'var(--kashi-gold-light)', fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>purpose</span>.
            </h1>
            <GoldLine width={56} height={2} />
            <p style={{ fontSize: '1.2rem', color: '#DDE5E8', lineHeight: '1.8' }}>
              K.S. Developers was established with an uncompromising mandate: to bring architectural distinction, structural resilience, and absolute transactional clarity to the Ahmedabad real estate landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative: Who We Are & Our Philosophy (Warm Ivory) */}
      <section className="section section-ivory">
        <KashiPattern opacity={0.04} color="#173F4E" />
        <div className="container">
          <div className="about-narrative-grid">
            <div>
              <SectionEyebrow text="OUR ETHOS" />
              <h2 className="section-title">
                Honest Materials, <span className="highlight">Living Architecture</span>
              </h2>
              <GoldLine width={48} />
              <p style={{ fontSize: '1.05rem', color: 'var(--kashi-charcoal)', lineHeight: '1.8', marginBottom: '20px' }}>
                We believe that a residential building should not be an exercise in decorative disguise. Instead, it should celebrate proportion, light, and ventilation. By collaborating with leading architects and structural engineers like 7-AXIS and Kiran N. Patel, we ensure our floor plans prioritize usable carpet area and daily comfort over superficial marketing gimmicks.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--kashi-muted)', lineHeight: '1.8', marginBottom: '32px' }}>
                In an era of dense urban crowding, K.S. Developers deliberately chooses locations like Enasan that afford open skies, clean air pockets, and effortless transit links to Ahmedabad and Gandhinagar.
              </p>

              <div className="btn-group">
                <Link to="/projects/kashi-hills" className="btn btn-kashi-primary">
                  <span>Explore Flagship: Kashi Hills →</span>
                </Link>
              </div>
            </div>

            <ArchitecturalFrame>
              <img
                src={getAssetUrl('elevation02')}
                alt="K.S. Developers Architecture"
                style={{ width: '100%', height: '460px', objectFit: 'cover' }}
              />
            </ArchitecturalFrame>
          </div>
        </div>
      </section>

      {/* Core Standards (Warm Ivory Warm Rhythm) */}
      <section className="section section-ivory-warm" style={{ borderTop: '1px solid var(--kashi-border)', borderBottom: '1px solid var(--kashi-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <SectionEyebrow text="CORE STANDARDS" align="center" />
            <h2 className="section-title">
              What Defines <span className="highlight">K.S. Developers</span>
            </h2>
            <p className="section-subtitle">
              Four fundamental commitments embedded into every blueprint, concrete pour, and homeowner relationship.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {corporateData.pillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--kashi-white)',
                  border: '1px solid var(--kashi-border)',
                  padding: '36px 28px',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: 'var(--kashi-gold-dark)', marginBottom: '12px', fontWeight: 700 }}>
                  0{idx + 1}.
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--kashi-teal)', marginBottom: '10px' }}>{pillar.title}</h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--kashi-muted)', lineHeight: '1.7', margin: 0 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-white">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <SectionEyebrow text="NEXT STEPS" align="center" />
          <h2 className="section-title">
            Begin Your Conversation With Us
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--kashi-muted)', marginBottom: '32px' }}>
            Whether you are looking for your primary residence or an enduring real estate asset in Ahmedabad, our developer advisory team is ready to assist.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <button onClick={onOpenScheduleModal} className="btn btn-kashi-primary">
              <Calendar size={16} />
              <span>Schedule a Site Visit →</span>
            </button>
            <Link to="/contact" className="btn btn-kashi-secondary">
              <span>Contact Office</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
