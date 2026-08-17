import React from 'react';
import { MapPin, Navigation, Calendar } from 'lucide-react';
import { kashiHillsProject } from '../../config/projects';
import { SectionEyebrow, ArchitecturalFrame } from '../common/Decorative';

interface LocationSectionProps {
  onOpenScheduleModal: () => void;
  onOpenLightbox: (src: string, title: string) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  onOpenScheduleModal,
  onOpenLightbox
}) => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${kashiHillsProject.coordinates.lat},${kashiHillsProject.coordinates.lng}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${kashiHillsProject.coordinates.lat},${kashiHillsProject.coordinates.lng}&hl=en&z=14&output=embed`;

  return (
    <div id="location">
      <div className="section-header text-center">
        <SectionEyebrow text="STRATEGIC CONNECTIVITY" align="center" />
        <h2 className="section-title">
          An Ideal Destination <span className="highlight">Becomes Iconic</span>
        </h2>
        <p className="section-subtitle">
          Situated on the rapid-growth Naroda–Dehgam arterial corridor in Enasan, Ahmedabad—connecting S.P. Ring Road, Dastan Circle, Sahaj Hospital, and Gandhinagar.
        </p>
      </div>

      <div className="location-split-grid">
        {/* Left: Google Maps Interactive Embed */}
        <ArchitecturalFrame style={{ minHeight: '440px', background: 'var(--kashi-white)' }}>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '440px' }}
            allowFullScreen={true}
            loading="lazy"
            title="K S Kashi Hills Location Map"
          />
        </ArchitecturalFrame>

        {/* Right: Address Details & Brochure Road Network Map */}
        <div
          style={{
            background: 'var(--kashi-white)',
            border: '1px solid var(--kashi-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <MapPin size={22} color="var(--kashi-teal)" />
              <h3 style={{ fontSize: '1.35rem', color: 'var(--kashi-teal)', margin: 0 }}>Site Office & Landmarks</h3>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-gold-dark)', display: 'block', marginBottom: '4px', fontWeight: 700 }}>
                Site Address (Brochure Page 09)
              </span>
              <p style={{ fontSize: '0.98rem', color: 'var(--kashi-charcoal)', lineHeight: '1.6', marginBottom: '12px' }}>
                {kashiHillsProject.mapAddress}
              </p>

              <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-muted)', display: 'block', marginBottom: '4px', fontWeight: 700 }}>
                Official RERA Survey Details
              </span>
              <p style={{ fontSize: '0.86rem', color: 'var(--kashi-muted)', lineHeight: '1.5' }}>
                {kashiHillsProject.address}
              </p>
            </div>

            {/* Regional Road Network Schematic Thumbnail */}
            {kashiHillsProject.keyPlanImage && (
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-teal)', display: 'block', marginBottom: '8px', fontWeight: 700 }}>
                  Brochure Road Network & Connectivity Map
                </span>
                <div
                  style={{
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    border: '1px solid var(--kashi-border)',
                    cursor: 'pointer',
                    maxHeight: '140px',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onClick={() => onOpenLightbox(kashiHillsProject.keyPlanImage, 'K S Kashi Hills — Road Network Map (Brochure Page 9)')}
                >
                  <img
                    src={kashiHillsProject.keyPlanImage}
                    alt="Kashi Hills Road Network Map"
                    style={{ maxHeight: '140px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-kashi-primary"
              style={{ flex: 1 }}
            >
              <Navigation size={16} />
              <span>Get Directions →</span>
            </a>
            <button
              onClick={onOpenScheduleModal}
              className="btn btn-kashi-secondary"
            >
              <Calendar size={16} />
              <span>Schedule Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
