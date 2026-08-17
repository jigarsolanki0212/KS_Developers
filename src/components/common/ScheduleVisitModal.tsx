import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, MessageCircle, MapPin } from 'lucide-react';
import { corporateData } from '../../config/projects';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProject?: string;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({
  isOpen,
  onClose,
  initialProject = 'K S Kashi Hills'
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setMobile('');
    setEmail('');
    setDate('');
    setMessage('');
    setIsSubmitted(false);
    onClose();
  };

  const whatsappUrl = `https://wa.me/${corporateData.whatsapp}?text=${encodeURIComponent(
    `Hello K.S. Developers, I would like to schedule a site visit for ${initialProject}. Name: ${name || 'Prospective Buyer'}, Phone: ${mobile || 'N/A'}, Preferred Date: ${date || 'Soonest'}`
  )}`;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '24px 12px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(197, 168, 128, 0.18)',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
              Visit Request Received
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.98rem' }}>
              Thank you, <strong style={{ color: '#fff' }}>{name}</strong>. Our dedicated project representative from K.S. Developers will confirm your appointment for <strong style={{ color: 'var(--accent-gold)' }}>{date || 'the requested date'}</strong>.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ color: '#25D366', borderColor: 'rgba(37, 211, 102, 0.4)' }}
              >
                <MessageCircle size={16} />
                <span>Instant Confirmation on WhatsApp</span>
              </a>
              <button onClick={handleReset} className="btn btn-primary">
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '28px' }}>
              <span className="section-tag">Direct Developer Scheduling</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                Experience Kashi Hills
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Schedule a guided walkthrough of the site, sample finishes, and 2 BHK apartment layouts at Enasan, Ahmedabad.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row-2col">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Patel"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="10-digit mobile"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-input"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Time Slot</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="form-select"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Specific Questions / Requirements</label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Inquiring about 617 sq.ft variant or loan assistance..."
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '16px' }}
              >
                <Calendar size={18} />
                <span>Confirm Site Visit Request</span>
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '16px',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}
              >
                <MapPin size={14} color="var(--accent-gold)" />
                <span>Site Address: Naroda–Dehgam Road, Enasan, Ahmedabad 382330</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
