import React from 'react';
import type { SpecificationCategory } from '../../types/project';
import {
  Building2,
  Grid,
  Utensils,
  Droplets,
  DoorClosed,
  Zap,
  Paintbrush,
  Sun,
  Check
} from 'lucide-react';
import { KashiPattern } from '../common/Decorative';

interface SpecificationsTableProps {
  specifications: SpecificationCategory[];
}

const specIcons: Record<string, React.ReactNode> = {
  Structure: <Building2 size={20} color="var(--kashi-teal)" />,
  Flooring: <Grid size={20} color="var(--kashi-teal)" />,
  Kitchen: <Utensils size={20} color="var(--kashi-teal)" />,
  'Toilet / Plumbing': <Droplets size={20} color="var(--kashi-teal)" />,
  'Doors & Windows': <DoorClosed size={20} color="var(--kashi-teal)" />,
  Electrification: <Zap size={20} color="var(--kashi-teal)" />,
  'Wall / Paint': <Paintbrush size={20} color="var(--kashi-teal)" />,
  Terrace: <Sun size={20} color="var(--kashi-teal)" />
};

export const SpecificationsTable: React.FC<SpecificationsTableProps> = ({ specifications }) => {
  return (
    <div className="specs-split-layout" id="specifications">
      {/* Left: Deep Teal / Gold Vertical Banner matching Brochure Page 9 */}
      <div className="specs-vertical-banner">
        <KashiPattern opacity={0.08} color="#FFFFFF" />
        <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--kashi-gold-light)', fontWeight: 700 }}>
          PAGE 09
        </div>
        <h3 className="specs-vertical-title">SPECIFICATION</h3>
        <div style={{ width: '28px', height: '2px', background: 'var(--kashi-gold)', margin: '12px auto' }} />
        <span style={{ fontSize: '0.75rem', color: '#B9C6CB' }}>K.S. DEVELOPERS</span>
      </div>

      {/* Right: Structured Material Cards in Warm Ivory Theme */}
      <div className="specs-content-grid">
        {specifications.map((cat, idx) => (
          <div key={idx} className="spec-block-card">
            <div className="spec-block-header">
              {specIcons[cat.category] || <Building2 size={20} color="var(--kashi-teal)" />}
              <h4>{cat.category}</h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="spec-block-content" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Check size={14} color="var(--kashi-gold-dark)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    {item.label !== item.value && (
                      <span style={{ fontWeight: 600, color: 'var(--kashi-charcoal)', display: 'block', fontSize: '0.84rem' }}>
                        {item.label}:
                      </span>
                    )}
                    <span style={{ color: 'var(--kashi-muted)' }}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
