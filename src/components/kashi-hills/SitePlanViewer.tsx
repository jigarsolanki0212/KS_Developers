import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Download, Layers } from 'lucide-react';
import type { ClusterPlan } from '../../types/project';

interface SitePlanViewerProps {
  clusterPlans: ClusterPlan[];
  onOpenLightbox: (src: string, title: string) => void;
}

export const SitePlanViewer: React.FC<SitePlanViewerProps> = ({
  clusterPlans,
  onOpenLightbox
}) => {
  const [activeLevelId, setActiveLevelId] = useState<string>(clusterPlans[0]?.id || '');
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const activePlan = clusterPlans.find((p) => p.id === activeLevelId) || clusterPlans[0];

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

  return (
    <div className="site-plan-viewer" id="siteplan" style={{ background: 'var(--kashi-white)', border: '1px solid var(--kashi-border)' }}>
      {/* Cluster Plan Level Navigation */}
      <div className="sp-level-nav" style={{ background: 'var(--kashi-ivory-warm)', borderBottom: '1px solid var(--kashi-border)' }}>
        {clusterPlans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => {
              setActiveLevelId(plan.id);
              handleReset();
            }}
            className={`sp-level-btn ${plan.id === activePlan.id ? 'active' : ''}`}
            style={{
              background: plan.id === activePlan.id ? 'var(--kashi-teal)' : 'var(--kashi-white)',
              color: plan.id === activePlan.id ? 'var(--kashi-ivory)' : 'var(--kashi-charcoal)',
              border: '1px solid var(--kashi-border)'
            }}
          >
            <Layers size={14} style={{ display: 'inline', marginRight: '6px' }} />
            {plan.floorRange} ({plan.title})
          </button>
        ))}
      </div>

      {/* Viewport Canvas with Interactive Drag & Zoom */}
      <div
        className="sp-viewport"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ background: '#0C1215' }}
      >
        <img
          src={activePlan.image}
          alt={activePlan.title}
          className="sp-plan-image"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          draggable={false}
        />

        {/* Floating Zoom & Control Bar */}
        <div className="sp-floating-controls" style={{ background: 'rgba(16, 52, 64, 0.9)', border: '1px solid var(--kashi-border-gold)' }}>
          <button
            onClick={handleZoomIn}
            className="fp-control-btn"
            title="Zoom In"
            aria-label="Zoom in site plan"
          >
            <ZoomIn size={17} />
          </button>
          <button
            onClick={handleZoomOut}
            className="fp-control-btn"
            title="Zoom Out"
            aria-label="Zoom out site plan"
          >
            <ZoomOut size={17} />
          </button>
          <button
            onClick={handleReset}
            className="fp-control-btn"
            title="Reset Plan View"
            aria-label="Reset site plan view"
          >
            <RotateCcw size={17} />
          </button>
          <button
            onClick={() => onOpenLightbox(activePlan.image, activePlan.title)}
            className="fp-control-btn"
            title="Fullscreen Mode"
            aria-label="View fullscreen site plan"
          >
            <Maximize2 size={17} />
          </button>
        </div>
      </div>

      {/* Plan Details & Description Footer */}
      <div style={{ padding: '24px 28px', background: 'var(--kashi-white)', borderTop: '1px solid var(--kashi-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-gold-dark)', fontWeight: 700 }}>
            {activePlan.floorRange}
          </span>
          <h4 style={{ fontSize: '1.2rem', color: 'var(--kashi-teal)', margin: '4px 0' }}>{activePlan.subtitle}</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--kashi-muted)', margin: 0, maxWidth: '680px' }}>
            {activePlan.description}
          </p>
        </div>

        <a
          href={activePlan.image}
          download={`kashi-hills-${activePlan.id}.jpg`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-kashi-secondary"
        >
          <Download size={16} />
          <span>Download Plan</span>
        </a>
      </div>
    </div>
  );
};
