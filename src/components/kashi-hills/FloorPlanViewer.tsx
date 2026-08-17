import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Download, Calendar, Layers, Sparkles } from 'lucide-react';
import type { FloorPlan } from '../../types/project';

interface FloorPlanViewerProps {
  floorPlans: FloorPlan[];
  onOpenScheduleModal: () => void;
  onOpenLightbox: (src: string, title: string) => void;
}

export const FloorPlanViewer: React.FC<FloorPlanViewerProps> = ({
  floorPlans,
  onOpenScheduleModal,
  onOpenLightbox
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(floorPlans[0]?.id || '');
  const [viewMode, setViewMode] = useState<'3d' | '2d' | 'all'>('3d');
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const activePlan = floorPlans.find((p) => p.id === selectedPlanId) || floorPlans[0];

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Active Image based on 2D / 3D mode
  const currentImage =
    viewMode === '2d' && activePlan.image2D
      ? activePlan.image2D
      : viewMode === '3d' && activePlan.image3D
      ? activePlan.image3D
      : activePlan.image;

  return (
    <div className="floor-plan-viewer" id="floorplans">
      {/* Top Header Bar with Plan Selector, 2D/3D Toggle & Zoom Controls */}
      <div className="fp-header-bar">
        {/* Plan Variant Tabs */}
        <div className="fp-tab-selector" role="tablist">
          {floorPlans.map((plan) => (
            <button
              key={plan.id}
              role="tab"
              aria-selected={plan.id === activePlan.id}
              onClick={() => {
                setSelectedPlanId(plan.id);
                handleReset();
              }}
              className={`fp-tab-btn ${plan.id === activePlan.id ? 'active' : ''}`}
            >
              <span style={{ fontWeight: 600 }}>{plan.variant}</span>
              <span style={{ fontSize: '0.74rem', opacity: 0.8, marginLeft: '6px' }}>
                ({plan.carpetAreaSqFtRounded} sq.ft)
              </span>
            </button>
          ))}
        </div>

        {/* 2D PLAN / 3D VIEW Interactive Switcher */}
        <div className="fp-view-toggle">
          <button
            onClick={() => {
              setViewMode('3d');
              handleReset();
            }}
            className={`fp-toggle-btn ${viewMode === '3d' ? 'active' : ''}`}
          >
            3D Isometric View
          </button>
          <button
            onClick={() => {
              setViewMode('2d');
              handleReset();
            }}
            className={`fp-toggle-btn ${viewMode === '2d' ? 'active' : ''}`}
          >
            2D Blueprint Plan
          </button>
          <button
            onClick={() => {
              setViewMode('all');
              handleReset();
            }}
            className={`fp-toggle-btn ${viewMode === 'all' ? 'active' : ''}`}
          >
            Full Sheet
          </button>
        </div>

        {/* Interactive Controls */}
        <div className="fp-controls">
          <button
            onClick={handleZoomIn}
            className="fp-control-btn"
            title="Zoom In"
            aria-label="Zoom in floor plan"
          >
            <ZoomIn size={18} />
          </button>
          <button
            onClick={handleZoomOut}
            className="fp-control-btn"
            title="Zoom Out"
            aria-label="Zoom out floor plan"
          >
            <ZoomOut size={18} />
          </button>
          <button
            onClick={handleReset}
            className="fp-control-btn"
            title="Reset View"
            aria-label="Reset floor plan view"
          >
            <RotateCcw size={18} />
          </button>
          <button
            onClick={() => onOpenLightbox(currentImage, `${activePlan.name} (${viewMode.toUpperCase()} Mode)`)}
            className="fp-control-btn"
            title="Fullscreen Mode"
            aria-label="View fullscreen floor plan"
          >
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      {/* Main Split-Pane Stage */}
      <div className="fp-main-stage">
        {/* Left: Interactive Canvas */}
        <div
          className="fp-canvas-pane"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="fp-image-wrapper"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              cursor: isDragging ? 'grabbing' : zoom > 1 ? 'grab' : 'default',
              transition: isDragging ? 'none' : 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <img
              key={`${activePlan.id}-${viewMode}`}
              src={currentImage}
              alt={`${activePlan.name} ${viewMode} view`}
              className="fp-image"
              draggable={false}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: 'rgba(16, 52, 64, 0.9)',
              backdropFilter: 'blur(8px)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.74rem',
              color: 'var(--kashi-gold-light)',
              border: '1px solid var(--kashi-border-gold)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={13} />
            <span>
              {viewMode === '3d' ? '3D Furnished Isometric Section View' : viewMode === '2d' ? '2D Architectural Layout Blueprint' : 'Full Layout & Isometric Sheet'}
            </span>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              background: 'rgba(10, 12, 15, 0.75)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.75rem',
              color: '#FFFFFF',
              letterSpacing: '0.04em'
            }}
          >
            Tip: Drag to pan · Zoom: {Math.round(zoom * 100)}%
          </div>
        </div>

        {/* Right: Room Dimension Details & Specs */}
        <div className="fp-info-pane">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="badge-tag" style={{ background: 'rgba(23, 63, 78, 0.08)', color: 'var(--kashi-teal)', border: '1px solid var(--kashi-border)' }}>
                {activePlan.bhk}
              </span>
              <span className="badge-tag" style={{ background: 'rgba(214, 181, 106, 0.15)', color: 'var(--kashi-gold-dark)', border: '1px solid var(--kashi-border-gold)' }}>
                Live The Sky Life
              </span>
            </div>

            <h3 className="fp-meta-title">{activePlan.name}</h3>

            <div className="fp-meta-area">
              <span className="fp-area-large">{activePlan.carpetAreaSqFt}</span>
              <span style={{ fontSize: '1.2rem', color: 'var(--kashi-muted)', fontWeight: 600 }}>SQ.FT.</span>
              <span style={{ fontSize: '0.86rem', color: 'var(--kashi-muted)' }}>({activePlan.carpetAreaSqM} sq.m / {activePlan.carpetAreaSqFtRounded} sq.ft approx)</span>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--kashi-muted)', marginBottom: '20px', lineHeight: '1.6' }}>
              {activePlan.description}
            </p>

            {/* Room Dimensions Breakdown */}
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-gold-dark)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
                <Layers size={14} />
                <span>Brochure Dimension Specifications</span>
              </h4>
              <table className="fp-specs-table">
                <thead>
                  <tr>
                    <th>Space / Room</th>
                    <th style={{ textAlign: 'right' }}>Dimensions (W × L)</th>
                  </tr>
                </thead>
                <tbody>
                  {activePlan.roomDimensions.map((room, idx) => (
                    <tr key={idx}>
                      <td style={{ color: 'var(--kashi-charcoal)', fontWeight: 500 }}>{room.room}</td>
                      <td className="dim">{room.dimension}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--kashi-border)' }}>
            <button
              onClick={onOpenScheduleModal}
              className="btn btn-kashi-primary"
              style={{ flex: 1 }}
            >
              <Calendar size={16} />
              <span>Book Guided Visit →</span>
            </button>
            <a
              href={currentImage}
              download={`kashi-hills-${activePlan.id}-${viewMode}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-kashi-secondary"
            >
              <Download size={16} />
              <span>Download Plan</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
