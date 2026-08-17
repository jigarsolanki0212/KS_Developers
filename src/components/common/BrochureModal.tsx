import React, { useState } from 'react';
import { X, FileText, Download, ShieldCheck } from 'lucide-react';
import { kashiHillsProject } from '../../config/projects';
import { kashiHillsAssets } from '../../config/assets';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    // Open verified brochure link
    window.open(kashiHillsAssets.sources.brochure, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(197, 168, 128, 0.18)',
              color: 'var(--accent-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}
          >
            <FileText size={28} />
          </div>
          <span className="section-tag no-dash">Official Project Document</span>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginTop: '4px' }}>
            Kashi Hills E-Brochure
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
            Download the comprehensive project brochure featuring floor plans, master layout, amenities, and material specifications.
          </p>
        </div>

        {downloaded ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <p style={{ color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '16px' }}>
              Your download has been initiated in a new tab.
            </p>
            <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
              Return to Project
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="10-digit mobile number"
                className="form-input"
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
              <Download size={18} />
              <span>Instant Download PDF Brochure</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <ShieldCheck size={14} color="var(--accent-gold)" />
              <span>RERA Registered: {kashiHillsProject.reraNumber}</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
