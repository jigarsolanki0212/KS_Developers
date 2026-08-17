import React, { useState } from 'react';
import {
  Trees,
  Smile,
  ShieldCheck,
  Eye,
  ArrowUpDown,
  Droplets,
  Users,
  Flame,
  DoorClosed,
  ChevronDown
} from 'lucide-react';
import type { Amenity } from '../../types/project';
import { SectionEyebrow, KashiPattern } from '../common/Decorative';

interface AmenitiesGridProps {
  amenities: Amenity[];
  onOpenLightbox?: (src: string, title: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  DoorClosed: <DoorClosed size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Eye: <Eye size={22} />,
  ArrowUpDown: <ArrowUpDown size={22} />,
  Droplets: <Droplets size={22} />,
  Flame: <Flame size={22} />,
  Smile: <Smile size={22} />,
  Trees: <Trees size={22} />,
  Users: <Users size={22} />
};

export const AmenitiesGrid: React.FC<AmenitiesGridProps> = ({ amenities, onOpenLightbox }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="amenities-editorial-wrapper"
      id="amenities"
      style={{
        background: 'var(--kashi-teal)',
        color: 'var(--kashi-ivory)',
        borderRadius: 'var(--radius-sm)',
        padding: '56px 40px',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid var(--kashi-border-gold)'
      }}
    >
      <KashiPattern opacity={0.05} color="#FFFFFF" />

      {/* Header matching Brochure Page 3 */}
      <div style={{ textAlign: 'center', marginBottom: '44px', position: 'relative', zIndex: 1 }}>
        <SectionEyebrow text="KASHI HILLS LIFESTYLE" light align="center" />
        <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', color: 'var(--kashi-gold-light)', margin: '4px 0 12px', letterSpacing: '0.04em' }}>
          MORE THAN A HOME
        </h2>
        <p style={{ color: '#C2CCD0', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
          Nine essential lifestyle features engineered for comfort, round-the-clock safety, and long-term peace of mind.
        </p>
      </div>

      {/* 01 to 09 Numbered Editorial Amenities Rows */}
      <div className="amenities-editorial-container" style={{ position: 'relative', zIndex: 1 }}>
        {amenities.map((amenity, idx) => {
          const num = String(idx + 1).padStart(2, '0');
          const isExpanded = expandedId === amenity.id;

          return (
            <div
              key={amenity.id}
              className="amenity-row-item"
              onClick={() => toggleExpand(amenity.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="amenity-number">{num}</div>

              <div className="amenity-icon">
                {iconMap[amenity.iconName] || <ShieldCheck size={22} />}
              </div>

              <div className="amenity-text-group" style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h4>{amenity.title}</h4>
                  <ChevronDown
                    size={16}
                    style={{
                      color: 'var(--kashi-gold)',
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </div>
                <p style={{ marginTop: '4px' }}>{amenity.description}</p>

                {amenity.image && onOpenLightbox && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(amenity.image!, amenity.title);
                    }}
                    style={{
                      marginTop: '8px',
                      fontSize: '0.74rem',
                      color: 'var(--kashi-gold-light)',
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                  >
                    View Real Photo →
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
