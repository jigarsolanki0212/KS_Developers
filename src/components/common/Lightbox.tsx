import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  src: string;
  title: string;
  caption?: string;
  category?: string;
}

interface LightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="lightbox-modal" onClick={onClose} role="dialog" aria-modal="true">
      {/* Lightbox Header */}
      <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
            {currentImage.category ? `${currentImage.category} · ` : ''}
            Photo {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '8px', borderRadius: '50%', cursor: 'pointer' }}
          aria-label="Close Lightbox"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Stage & Navigation */}
      <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handlePrev}
          className="lightbox-nav-btn prev"
          aria-label="Previous Image"
        >
          <ChevronLeft size={30} />
        </button>

        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="lightbox-main-img"
        />

        <button
          onClick={handleNext}
          className="lightbox-nav-btn next"
          aria-label="Next Image"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Caption Bar */}
      <div className="lightbox-caption-bar" onClick={(e) => e.stopPropagation()}>
        <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '4px' }}>
          {currentImage.title}
        </h4>
        {currentImage.caption && (
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            {currentImage.caption}
          </p>
        )}
      </div>
    </div>
  );
};
