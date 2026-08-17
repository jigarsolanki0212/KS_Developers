import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { corporateData } from '../../config/projects';

interface MobileStickyBarProps {
  onOpenScheduleModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenScheduleModal }) => {
  const whatsappUrl = `https://wa.me/${corporateData.whatsapp}?text=${encodeURIComponent(
    'Hello K.S. Developers, I am interested in K S Kashi Hills (2 BHK).'
  )}`;

  return (
    <aside className="mobile-sticky-bar" aria-label="Quick Action Bar">
      <div className="mobile-sticky-grid">
        {/* Direct Call */}
        <a
          href={`tel:${corporateData.phone}`}
          className="mobile-sticky-btn"
          aria-label="Call Developer Hotline"
        >
          <Phone size={18} color="var(--accent-gold)" />
          <span>Call Desk</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-sticky-btn"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} color="#25D366" />
          <span>WhatsApp</span>
        </a>

        {/* Schedule Site Visit Trigger */}
        <button
          onClick={onOpenScheduleModal}
          className="mobile-sticky-btn primary"
          aria-label="Schedule a Site Visit"
        >
          <Calendar size={18} />
          <span>Book Visit</span>
        </button>
      </div>
    </aside>
  );
};
