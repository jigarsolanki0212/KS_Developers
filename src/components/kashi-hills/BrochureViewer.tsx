import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  BookOpen,
  Eye
} from 'lucide-react';
import { kashiHillsAssets } from '../../config/assets';

interface BrochureViewerProps {
  onOpenLightbox?: (src: string, title: string) => void;
}

const brochurePageLabels = [
  { page: 1, title: 'Cover & Developer Identity', subtitle: 'Live The Sky Life & Shops' },
  { page: 2, title: '3D Elevation & Facade', subtitle: 'Twin Tower Architecture' },
  { page: 3, title: 'Elevations & 9 Amenities', subtitle: 'Curated Lifestyle Features' },
  { page: 4, title: 'Ground Floor Master Plan', subtitle: 'Commercial Shops & Common Plot' },
  { page: 5, title: 'Typical Floor Plan (1st–7th)', subtitle: 'Units 101 to 706' },
  { page: 6, title: 'Basement Floor Plan', subtitle: 'Sub-surface Parking Bays' },
  { page: 7, title: 'Block A: 2 BHK Floor Plans', subtitle: 'Type 01 & Type 02 + 3D Isometric View' },
  { page: 8, title: 'Block B: 2 BHK Floor Plans', subtitle: 'Type 01 & Type 02 + 3D Isometric View' },
  { page: 9, title: 'Specifications & Location Map', subtitle: 'Materials, Road Network & Contacts' }
];

export const BrochureViewer: React.FC<BrochureViewerProps> = ({ onOpenLightbox }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const pages = kashiHillsAssets.local.brochurePages;

  const handleNext = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
    setZoom(1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
    setZoom(1);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoom(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentInfo = brochurePageLabels[currentPage] || {
    page: currentPage + 1,
    title: `Brochure Page ${currentPage + 1}`,
    subtitle: ''
  };

  return (
    <div
      className={`brochure-viewer-container ${isFullscreen ? 'fullscreen-mode' : ''}`}
      id="digital-brochure"
      style={{
        background: 'var(--kashi-white)',
        border: '1px solid var(--kashi-border)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {/* Top Toolbar in Warm Ivory */}
      <div
        style={{
          padding: '16px 24px',
          background: 'var(--kashi-ivory-warm)',
          borderBottom: '1px solid var(--kashi-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-xs)',
              background: 'var(--kashi-teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--kashi-gold-light)'
            }}
          >
            <BookOpen size={18} />
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-gold-dark)', fontWeight: 700, display: 'block' }}>
              Official Digital Brochure · Page {currentPage + 1} of {pages.length}
            </span>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--kashi-teal)', margin: '2px 0 0' }}>
              {currentInfo.title} <span style={{ color: 'var(--kashi-muted)', fontSize: '0.85rem' }}>({currentInfo.subtitle})</span>
            </h4>
          </div>
        </div>

        {/* View Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={handleZoomIn}
            className="fp-control-btn"
            title="Zoom In"
            aria-label="Zoom in"
          >
            <ZoomIn size={16} />
          </button>
          <button
            onClick={handleZoomOut}
            className="fp-control-btn"
            title="Zoom Out"
            aria-label="Zoom out"
          >
            <ZoomOut size={16} />
          </button>
          <button
            onClick={handleResetZoom}
            className="fp-control-btn"
            title="Reset Zoom"
            aria-label="Reset zoom"
          >
            <RotateCcw size={16} />
          </button>
          {onOpenLightbox && (
            <button
              onClick={() => onOpenLightbox(pages[currentPage], `${currentInfo.title} — Page ${currentPage + 1}`)}
              className="fp-control-btn"
              title="Open Lightbox"
              aria-label="Open page in lightbox"
            >
              <Eye size={16} />
            </button>
          )}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="fp-control-btn"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          <a
            href={kashiHillsAssets.local.brochurePdf}
            download="kashi-hills-official-brochure.pdf"
            className="btn btn-kashi-primary"
            style={{ padding: '8px 16px', fontSize: '0.8rem' }}
          >
            <Download size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Main Page Display Stage */}
      <div
        style={{
          position: 'relative',
          minHeight: '520px',
          maxHeight: isFullscreen ? '82vh' : '620px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#090E11',
          overflow: 'hidden',
          padding: '20px'
        }}
      >
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: currentPage === 0 ? 'rgba(255,255,255,0.05)' : 'var(--kashi-teal-dark)',
            color: currentPage === 0 ? 'rgba(255,255,255,0.2)' : 'var(--kashi-gold-light)',
            border: '1px solid var(--kashi-border-gold)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
          }}
          aria-label="Previous Page"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Rendered Brochure Image */}
        <div
          style={{
            transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: `scale(${zoom})`,
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={pages[currentPage]}
            alt={`Kashi Hills Brochure Page ${currentPage + 1}`}
            style={{
              maxHeight: isFullscreen ? '78vh' : '560px',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: 'var(--radius-xs)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.7)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          />
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: currentPage === pages.length - 1 ? 'rgba(255,255,255,0.05)' : 'var(--kashi-teal-dark)',
            color: currentPage === pages.length - 1 ? 'rgba(255,255,255,0.2)' : 'var(--kashi-gold-light)',
            border: '1px solid var(--kashi-border-gold)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentPage === pages.length - 1 ? 'not-allowed' : 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
          }}
          aria-label="Next Page"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnail Filmstrip */}
      <div
        style={{
          padding: '16px 20px',
          background: 'var(--kashi-ivory)',
          borderTop: '1px solid var(--kashi-border)',
          display: 'flex',
          gap: '12px',
          overflowX: 'auto',
          scrollBehavior: 'smooth'
        }}
      >
        {pages.map((thumb, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentPage(idx);
              setZoom(1);
            }}
            style={{
              flexShrink: 0,
              width: '84px',
              height: '56px',
              borderRadius: 'var(--radius-xs)',
              overflow: 'hidden',
              border: currentPage === idx ? '2px solid var(--kashi-teal)' : '1px solid var(--kashi-border)',
              opacity: currentPage === idx ? 1 : 0.65,
              transform: currentPage === idx ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.2s ease',
              padding: 0,
              background: '#000',
              cursor: 'pointer',
              position: 'relative'
            }}
            aria-label={`Jump to page ${idx + 1}`}
          >
            <img
              src={thumb}
              alt={`Page ${idx + 1} thumbnail`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '2px',
                right: '4px',
                fontSize: '0.65rem',
                fontWeight: 700,
                color: '#fff',
                background: 'rgba(16, 52, 64, 0.85)',
                padding: '1px 4px',
                borderRadius: '2px'
              }}
            >
              {idx + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
