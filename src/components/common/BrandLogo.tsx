import React from 'react';

interface BrandLogoProps {
  isScrolled?: boolean;
  theme?: 'auto' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  isScrolled = false,
  theme = 'dark',
  size = 'md',
  className = ''
}) => {
  // Always dark background for the luxury dark teal navbar
  const isLightBg = theme === 'light' && !isScrolled;

  const emblemHeight = size === 'sm' ? 32 : size === 'lg' ? 52 : 40;
  const titleSize = size === 'sm' ? 'clamp(0.9rem, 3.5vw, 1.05rem)' : size === 'lg' ? 'clamp(1.25rem, 4vw, 1.55rem)' : 'clamp(1rem, 3.8vw, 1.25rem)';
  const taglineSize = size === 'sm' ? 'clamp(0.5rem, 1.8vw, 0.58rem)' : size === 'lg' ? 'clamp(0.6rem, 2.2vw, 0.74rem)' : 'clamp(0.52rem, 2vw, 0.66rem)';

  return (
    <div
      className={`brand-logo-lockup ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        userSelect: 'none'
      }}
    >
      {/* 1. Official 3D Skyscraper Emblem */}
      <img
        src="/assets/brand/ks-emblem-gold.png"
        alt="K.S. Developers Emblem"
        style={{
          height: `${emblemHeight}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
          filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25))'
        }}
      />

      {/* 2. Vector Subpixel Typography & Tagline */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Main Title */}
        <div
          style={{
            fontFamily: "var(--font-serif), 'Cinzel', 'Playfair Display', serif",
            fontSize: titleSize,
            fontWeight: 700,
            letterSpacing: '0.14em',
            lineHeight: 1.15,
            background: 'linear-gradient(135deg, #F5D78E 0%, #D4AF37 50%, #A37F2C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}
        >
          K.S. DEVELOPERS
        </div>

        {/* Decorative Gold Divider */}
        <div
          style={{
            height: '1.5px',
            width: '100%',
            background: 'linear-gradient(90deg, #D4AF37 0%, rgba(212, 175, 55, 0.3) 100%)',
            margin: '3px 0 2px'
          }}
        />

        {/* Tagline: 100% Crisp White & Readable */}
        <div
          style={{
            fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif",
            fontSize: taglineSize,
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            lineHeight: 1.2,
            color: isLightBg ? 'var(--kashi-teal)' : '#FFFFFF',
            transition: 'color 0.2s ease'
          }}
        >
          BUILDING SPACES · CRAFTING STORIES
        </div>
      </div>
    </div>
  );
};
