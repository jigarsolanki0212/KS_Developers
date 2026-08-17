import React, { useState } from 'react';
import { Play, Sparkles, Eye, ShieldCheck, MapPin, X } from 'lucide-react';
import { SectionEyebrow, GoldLine, KashiPattern, ArchitecturalFrame } from './Decorative';
import { RevealOnScroll } from './RevealOnScroll';
import { kashiHillsProject } from '../../config/projects';

interface VideoTourSectionProps {
  videoId?: string;
  title?: string;
  subtitle?: string;
}

export const VideoTourSection: React.FC<VideoTourSectionProps> = ({
  videoId = 'XWG9iA4Et1I',
  title = 'Cinematic Walkthrough',
  subtitle = 'Experience K S Kashi Hills in Motion'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <section className="section section-teal-dark" id="video-tour" style={{ position: 'relative', overflow: 'hidden' }}>
      <KashiPattern opacity={0.06} color="#FFFFFF" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <RevealOnScroll direction="up">
          <div className="section-header text-center" style={{ maxWidth: '780px', margin: '0 auto 40px' }}>
            <SectionEyebrow text="VIRTUAL SITE EXPERIENCE" light align="center" />
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              {title} · <span style={{ color: 'var(--kashi-gold-light)', fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>{subtitle}</span>
            </h2>
            <GoldLine width={64} height={2} style={{ margin: '14px auto 16px' }} />
            <p style={{ color: '#DDE5E8', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Take a virtual walkthrough of K S Kashi Hills. Explore the spatial proportions, natural cross-ventilation, and structural craftsmanship from any device.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={150}>
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <ArchitecturalFrame style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: '#0B242C' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  background: '#0B242C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {!isPlaying ? (
                  <div
                    onClick={() => setIsPlaying(true)}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundImage: `linear-gradient(to top, rgba(11, 36, 44, 0.92) 0%, rgba(11, 36, 44, 0.45) 60%, rgba(11, 36, 44, 0.3) 100%), url(${kashiHillsProject.heroImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.4s ease'
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Play virtual walkthrough video"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setIsPlaying(true);
                      }
                    }}
                  >
                    {/* Pulsing Luxury Play Button */}
                    <div
                      style={{
                        width: '84px',
                        height: '84px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--kashi-gold), var(--kashi-gold-dark))',
                        color: 'var(--kashi-teal-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 0 12px rgba(214, 181, 106, 0.25), 0 12px 32px rgba(0, 0, 0, 0.5)',
                        transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease',
                        cursor: 'pointer'
                      }}
                      className="play-pulse-btn"
                    >
                      <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />
                    </div>

                    {/* Bottom Floating Info Tag */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '24px',
                        left: '24px',
                        right: '24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        flexWrap: 'wrap',
                        gap: '12px'
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--kashi-gold-light)', fontWeight: 700, display: 'block' }}>
                          K S KASHI HILLS · ENASAN
                        </span>
                        <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', margin: '4px 0 0', fontFamily: 'var(--font-serif)' }}>
                          Official Architectural & Site Walkthrough
                        </h4>
                      </div>

                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16, 52, 64, 0.85)', backdropFilter: 'blur(10px)', padding: '6px 14px', borderRadius: '20px', border: '1px solid var(--kashi-border-gold)', color: 'var(--kashi-gold-light)', fontSize: '0.8rem', fontWeight: 600 }}>
                        <Eye size={14} />
                        <span>Click to Play HD Video</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <iframe
                      src={embedUrl}
                      title="K S Kashi Hills — Official Architectural Walkthrough"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setIsPlaying(false)}
                      aria-label="Pause and close video"
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        zIndex: 10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(11, 36, 44, 0.88)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--kashi-gold-light)',
                        border: '1px solid var(--kashi-border-gold)',
                        padding: '8px 16px',
                        borderRadius: '24px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <X size={16} />
                      <span>Pause / Close Video</span>
                    </button>
                  </>
                )}
              </div>
            </ArchitecturalFrame>

            {/* Sub-Video Key Highlights Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginTop: '24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255, 255, 255, 0.05)', padding: '12px 18px', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <MapPin size={16} color="var(--kashi-gold-light)" />
                <span style={{ fontSize: '0.84rem', color: '#DDE5E8' }}>Enasan, Naroda-Dehgam Corridor</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255, 255, 255, 0.05)', padding: '12px 18px', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <ShieldCheck size={16} color="var(--kashi-gold-light)" />
                <span style={{ fontSize: '0.84rem', color: '#DDE5E8' }}>AUDA Sanctioned & RERA Verified</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255, 255, 255, 0.05)', padding: '12px 18px', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <Sparkles size={16} color="var(--kashi-gold-light)" />
                <span style={{ fontSize: '0.84rem', color: '#DDE5E8' }}>2 Standalone Towers · 2 Lifts/Block</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

