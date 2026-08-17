import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';
import { allProjects } from '../config/projects';
import { SectionEyebrow, GoldLine, KashiPattern, ArchitecturalFrame } from '../components/common/Decorative';

interface ProjectsPageProps {
  onOpenScheduleModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenScheduleModal }) => {
  return (
    <div className="projects-page" style={{ paddingTop: 'var(--header-height)' }}>
      {/* Hero (Deep Teal) */}
      <section className="section section-teal-dark">
        <KashiPattern opacity={0.06} color="#FFFFFF" />
        <div className="container">
          <div style={{ maxWidth: '780px', position: 'relative', zIndex: 1 }}>
            <SectionEyebrow text="PORTFOLIO & DEVELOPMENTS" light />
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#FFFFFF', margin: '8px 0 16px' }}>
              Places designed to <span style={{ color: 'var(--kashi-gold-light)', fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>belong</span>.
            </h1>
            <GoldLine width={56} height={2} />
            <p style={{ fontSize: '1.15rem', color: '#DDE5E8', lineHeight: '1.7' }}>
              Explore our current flagship development and pipeline projects across Ahmedabad's prime growth corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid (Warm Ivory) */}
      <section className="section section-ivory">
        <KashiPattern opacity={0.04} color="#173F4E" />
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {allProjects.map((project) => (
              <ArchitecturalFrame key={project.id}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr' }}>
                  {/* Image Showcase */}
                  <div style={{ position: 'relative', minHeight: '380px' }}>
                    <img
                      src={project.heroImage}
                      alt={project.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                        textTransform: 'uppercase'
                      }}
                    >
                      Flagship · {project.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--kashi-white)' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <MapPin size={16} color="var(--kashi-teal)" />
                        <span style={{ fontSize: '0.85rem', color: 'var(--kashi-muted)' }}>{project.location}</span>
                      </div>

                      <h2 style={{ fontSize: '2.2rem', color: 'var(--kashi-teal)', marginBottom: '8px' }}>
                        {project.name}
                      </h2>

                      <p style={{ fontSize: '0.92rem', color: 'var(--kashi-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '14px' }}>
                        2 BHK · Live The Sky Life & Shops
                      </p>

                      <p style={{ fontSize: '0.98rem', color: 'var(--kashi-charcoal)', lineHeight: '1.7', marginBottom: '24px' }}>
                        A premier 2 BHK residential enclave featuring 75 units, 2 standalone towers, 8 commercial shops, high-speed elevators, and landscaped park.
                      </p>

                      {/* Stats Grid */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '28px' }}>
                        <div style={{ background: 'var(--kashi-ivory)', padding: '10px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--kashi-border)' }}>
                          <span style={{ fontSize: '0.7rem', color: 'var(--kashi-muted)', textTransform: 'uppercase', display: 'block' }}>Config</span>
                          <strong style={{ fontSize: '0.96rem', color: 'var(--kashi-teal)' }}>2 BHK</strong>
                        </div>
                        <div style={{ background: 'var(--kashi-ivory)', padding: '10px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--kashi-border)' }}>
                          <span style={{ fontSize: '0.7rem', color: 'var(--kashi-muted)', textTransform: 'uppercase', display: 'block' }}>Area</span>
                          <strong style={{ fontSize: '0.96rem', color: 'var(--kashi-teal)' }}>595.78–617.09 SQ.FT.</strong>
                        </div>
                        <div style={{ background: 'var(--kashi-ivory)', padding: '10px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--kashi-border)' }}>
                          <span style={{ fontSize: '0.7rem', color: 'var(--kashi-muted)', textTransform: 'uppercase', display: 'block' }}>RERA</span>
                          <strong style={{ fontSize: '0.82rem', color: 'var(--kashi-teal)' }}>AUDA Approved</strong>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                      <Link to={`/projects/${project.slug}`} className="btn btn-kashi-primary" style={{ flex: 1 }}>
                        <span>View Project Page →</span>
                      </Link>
                      <button onClick={onOpenScheduleModal} className="btn btn-kashi-secondary">
                        <Calendar size={16} />
                        <span>Book Visit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ArchitecturalFrame>
            ))}

            {/* Upcoming Projects Placeholder Card */}
            <div
              style={{
                background: 'var(--kashi-white)',
                border: '1px dashed var(--kashi-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '48px 36px',
                textAlign: 'center'
              }}
            >
              <SectionEyebrow text="FUTURE PIPELINE" align="center" />
              <h3 style={{ fontSize: '1.6rem', color: 'var(--kashi-teal)', margin: '8px 0 12px' }}>
                Upcoming Residential & Commercial Developments
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--kashi-muted)', maxWidth: '600px', margin: '0 auto 24px' }}>
                K.S. Developers is actively acquiring land parcels and finalizing architectural blueprints for future luxury residential communities in Ahmedabad.
              </p>
              <button onClick={onOpenScheduleModal} className="btn btn-kashi-secondary">
                <span>Register for Future Project Previews →</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
