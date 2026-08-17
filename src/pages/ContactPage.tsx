import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Calendar, CheckCircle2, ShieldCheck, Phone, Building } from 'lucide-react';
import { corporateData, kashiHillsProject } from '../config/projects';
import { SectionEyebrow, GoldLine, KashiPattern, InstagramIcon } from '../components/common/Decorative';
import { SEOHead } from '../components/common/SEOHead';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [projectInterest, setProjectInterest] = useState('K S Kashi Hills (2 BHK)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${corporateData.whatsapp}?text=${encodeURIComponent(
    `Hello K.S. Developers, I am reaching out regarding ${projectInterest}. Name: ${name || 'Prospective Buyer'}`
  )}`;

  return (
    <div className="contact-page">
      <SEOHead
        title="Contact K.S. Developers | Site Office & Inquiries in Enasan Ahmedabad"
        description="Get in touch with K.S. Developers sales & engineering desk. Schedule a guided walkthrough of K S Kashi Hills 2 BHK flats in Enasan, Naroda-Dehgam corridor."
        keywords="Contact K.S. Developers, Kashi Hills Site Office, Phone Number K.S. Developers, Enasan Flat Inquiry, Schedule Site Visit Ahmedabad"
        canonicalPath="/contact"
      />

      {/* Hero (Deep Teal) */}
      <section className="section section-teal-dark" style={{ paddingTop: 'calc(var(--header-height) + 36px)' }}>
        <KashiPattern opacity={0.06} color="#FFFFFF" />
        <div className="container">
          <div style={{ maxWidth: '780px', position: 'relative', zIndex: 1 }}>
            <SectionEyebrow text="DIRECT DEVELOPER INQUIRIES" light />
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#FFFFFF', margin: '8px 0 16px' }}>
              Let's talk about your <span style={{ color: 'var(--kashi-gold-light)', fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>next home</span>.
            </h1>
            <GoldLine width={56} height={2} />
            <p style={{ fontSize: '1.15rem', color: '#DDE5E8', lineHeight: '1.7' }}>
              Connect directly with K.S. Developers. Our project advisory team provides transparent pricing breakdowns, title clarity, and guided site walkthroughs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid (Warm Ivory) */}
      <section className="section section-ivory">
        <KashiPattern opacity={0.04} color="#173F4E" />
        <div className="container">
          <div className="contact-page-grid">
            {/* Left: Contact Form */}
            <div
              style={{
                background: 'var(--kashi-white)',
                border: '1px solid var(--kashi-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '40px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(23, 63, 78, 0.08)',
                      color: 'var(--kashi-teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--kashi-teal)', marginBottom: '12px' }}>
                    Inquiry Submitted
                  </h3>
                  <p style={{ color: 'var(--kashi-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
                    Thank you, <strong style={{ color: 'var(--kashi-charcoal)' }}>{name}</strong>. An authorized K.S. Developers consultant will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setName('');
                      setMobile('');
                      setEmail('');
                      setMessage('');
                      setIsSubmitted(false);
                    }}
                    className="btn btn-kashi-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '1.75rem', color: 'var(--kashi-teal)', marginBottom: '6px' }}>
                    Send Us an Inquiry
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: 'var(--kashi-muted)', marginBottom: '28px' }}>
                    Fill out the form below for immediate assistance from our sales and engineering desk.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row-2col">
                      <div className="form-group">
                        <label className="form-label">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Amit Shah"
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
                          placeholder="10-digit number"
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
                        <label className="form-label">Project of Interest</label>
                        <select
                          value={projectInterest}
                          onChange={(e) => setProjectInterest(e.target.value)}
                          className="form-select"
                        >
                          <option value="K S Kashi Hills (2 BHK 596-617 sq.ft)">K S Kashi Hills (2 BHK)</option>
                          <option value="K S Kashi Hills Commercial Shops">K S Kashi Hills (Shops)</option>
                          <option value="Future Residential Developments">Future Residential Developments</option>
                          <option value="General Developer Inquiry">General Developer Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message / Preferred Date</label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your home requirements or preferred site visit date..."
                        className="form-textarea"
                      />
                    </div>

                    <button type="submit" className="btn btn-kashi-primary" style={{ width: '100%', padding: '15px' }}>
                      <Calendar size={18} />
                      <span>Submit Inquiry →</span>
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Right: Direct Developer Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div
                style={{
                  background: 'var(--kashi-white)',
                  border: '1px solid var(--kashi-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '36px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h3 style={{ fontSize: '1.35rem', color: 'var(--kashi-teal)', marginBottom: '20px' }}>
                  Official Contact Channels
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <MapPin size={22} color="var(--kashi-teal)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-gold-dark)', display: 'block', fontWeight: 700 }}>
                        Project Site Office
                      </span>
                      <p style={{ fontSize: '0.94rem', color: 'var(--kashi-charcoal)', margin: '4px 0 0', lineHeight: '1.6' }}>
                        {kashiHillsProject.mapAddress}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <Phone size={22} color="var(--kashi-teal)" style={{ flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-gold-dark)', display: 'block', fontWeight: 700 }}>
                        Phone & Hotline
                      </span>
                      <div style={{ display: 'flex', gap: '10px', marginTop: '2px' }}>
                        <a href={`tel:${corporateData.phone}`} style={{ fontSize: '0.98rem', color: 'var(--kashi-teal)', fontWeight: 700 }}>
                          {corporateData.phone}
                        </a>
                        <span style={{ color: 'var(--kashi-muted)' }}>/</span>
                        <a href={`tel:${corporateData.phoneSecondary}`} style={{ fontSize: '0.98rem', color: 'var(--kashi-teal)', fontWeight: 700 }}>
                          {corporateData.phoneSecondary}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <Mail size={22} color="var(--kashi-teal)" style={{ flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-gold-dark)', display: 'block', fontWeight: 700 }}>
                        Official Email
                      </span>
                      <a href={`mailto:${corporateData.email}`} style={{ fontSize: '0.96rem', color: 'var(--kashi-teal)', fontWeight: 600 }}>
                        {corporateData.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <MessageCircle size={22} color="#25D366" style={{ flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#25D366', display: 'block', fontWeight: 700 }}>
                        Direct WhatsApp
                      </span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.96rem', color: 'var(--kashi-teal)', fontWeight: 600 }}
                      >
                        Chat with Project Desk →
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <InstagramIcon size={22} color="#E1306C" style={{ flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E1306C', display: 'block', fontWeight: 700 }}>
                        Official Instagram
                      </span>
                      <a
                        href={corporateData.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.96rem', color: 'var(--kashi-teal)', fontWeight: 600 }}
                      >
                        {corporateData.instagramHandle} (Kashi Group) →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer & Architect Credentials */}
              <div
                style={{
                  background: 'var(--kashi-ivory-warm)',
                  border: '1px solid var(--kashi-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <ShieldCheck size={22} color="var(--kashi-gold-dark)" />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--kashi-teal)', margin: 0 }}>RERA Verified Developer</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--kashi-muted)', margin: '0 0 16px', lineHeight: '1.6' }}>
                  AUDA Registration: <strong style={{ color: 'var(--kashi-charcoal)', wordBreak: 'break-all', overflowWrap: 'anywhere' }}>{kashiHillsProject.reraNumber}</strong>. We invite prospective buyers to inspect all approved blueprints and legal titles at our office.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--kashi-muted)' }}>
                  <Building size={16} color="var(--kashi-teal)" />
                  <span>Architect: <strong>7-AXIS</strong> · Structural: <strong>KIRAN N. PATEL</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
