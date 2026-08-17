import React from 'react';

// 1. Kashi Subtle Geometric Linework Pattern
export const KashiPattern: React.FC<{
  opacity?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ opacity = 0.06, color = '#173F4E', className = '', style = {} }) => {
  return (
    <div
      className={`kashi-pattern-bg ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity,
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px), linear-gradient(to right, ${color} 1px, transparent 1px)`,
        backgroundSize: '32px 32px, 64px 64px',
        zIndex: 0,
        ...style
      }}
      aria-hidden="true"
    />
  );
};

// 2. Gold Architectural Line Accent
export const GoldLine: React.FC<{
  width?: string | number;
  height?: number;
  style?: React.CSSProperties;
}> = ({ width = '48px', height = 2, style = {} }) => {
  return (
    <div
      className="kashi-gold-line"
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: `${height}px`,
        background: 'linear-gradient(90deg, var(--kashi-gold), rgba(214, 181, 106, 0.2))',
        margin: '16px 0',
        ...style
      }}
      aria-hidden="true"
    />
  );
};

// 3. Section Eyebrow with Brochure Peak Motif
export const SectionEyebrow: React.FC<{
  text: string;
  light?: boolean;
  align?: 'left' | 'center' | 'right';
}> = ({ text, light = false, align = 'left' }) => {
  return (
    <div
      className={`section-eyebrow ${align}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.74rem',
        fontWeight: 700,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: light ? 'var(--kashi-gold-light)' : 'var(--kashi-gold-dark)',
        marginBottom: '12px'
      }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
        <polygon points="5,0 10,10 0,10" fill="currentColor" />
      </svg>
      <span>{text}</span>
    </div>
  );
};

// 4. Gold Corner Accent for Architectural Framing
export const GoldCorner: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
}> = ({ position = 'top-right', size = 16 }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    borderColor: 'var(--kashi-gold)',
    borderStyle: 'solid',
    pointerEvents: 'none',
    zIndex: 2
  };

  if (position === 'top-left') {
    styles.top = 0;
    styles.left = 0;
    styles.borderWidth = '2px 0 0 2px';
  } else if (position === 'top-right') {
    styles.top = 0;
    styles.right = 0;
    styles.borderWidth = '2px 2px 0 0';
  } else if (position === 'bottom-left') {
    styles.bottom = 0;
    styles.left = 0;
    styles.borderWidth = '0 0 2px 2px';
  } else if (position === 'bottom-right') {
    styles.bottom = 0;
    styles.right = 0;
    styles.borderWidth = '0 2px 2px 0';
  }

  return <div style={styles} aria-hidden="true" />;
};

// 5. Architectural Frame Container
export const ArchitecturalFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, className = '', style = {} }) => {
  return (
    <div
      className={`architectural-frame ${className}`}
      style={{
        position: 'relative',
        border: '1px solid var(--kashi-border)',
        background: 'var(--kashi-white)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        ...style
      }}
    >
      <GoldCorner position="top-right" size={14} />
      <GoldCorner position="bottom-left" size={14} />
      {children}
    </div>
  );
};

// 6. Editorial Section Divider
export const EditorialDivider: React.FC<{ style?: React.CSSProperties }> = ({ style = {} }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        margin: '40px 0',
        ...style
      }}
      aria-hidden="true"
    >
      <div style={{ height: '1px', flex: 1, background: 'var(--kashi-border)' }} />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <polygon points="6,1 11,11 1,11" fill="var(--kashi-gold)" />
      </svg>
      <div style={{ height: '1px', flex: 1, background: 'var(--kashi-border)' }} />
    </div>
  );
};
