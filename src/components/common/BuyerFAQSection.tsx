import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Phone } from 'lucide-react';
import { SectionEyebrow, KashiPattern } from './Decorative';
import { RevealOnScroll } from './RevealOnScroll';
import { corporateData, kashiHillsProject } from '../../config/projects';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: 'Home Buying & Location',
    question: 'Why is Enasan on Naroda–Dehgam corridor an ideal location for home buying in Ahmedabad?',
    answer: 'Enasan is one of Northeast Ahmedabad’s fastest-growing residential hubs, positioned directly on the 24-meter wide Naroda–Dehgam arterial road. It offers rapid 5–10 minute connectivity to S.P. Ring Road, Dastan Circle, Sahaj Hospital, and major GIDC industrial corridors, while maintaining open green surroundings, cleaner air, and high future appreciation potential.'
  },
  {
    category: 'Project & Configurations',
    question: 'What unit configurations and carpet areas are available at K S Kashi Hills?',
    answer: `K S Kashi Hills features 75 exclusive 2 BHK residential apartments spread across two standalone towers (Block A & Block B) with usable carpet areas ranging from 595.78 sq.ft. to 617.09 sq.ft., alongside 8 premium ground-floor commercial shops facing the main road.`
  },
  {
    category: 'Legal & RERA Approvals',
    question: 'Is K S Kashi Hills legally verified, AUDA approved, and registered with GujRERA?',
    answer: `Yes, K S Kashi Hills is 100% legally clear, AUDA sanctioned, and officially registered with the Gujarat Real Estate Regulatory Authority under RERA registration number PR/GJ/AHMEDABAD/DASKROI/AUDA/MAA09995/310322.`
  },
  {
    category: 'Home Loans & Financing',
    question: 'Are home loans approved for K S Kashi Hills by major nationalized and private banks?',
    answer: 'Yes, project finance and individual home buyer loans are pre-approved with transparent documentation by leading banks including State Bank of India (SBI), HDFC Bank, ICICI Bank, Bank of Baroda, and Axis Bank. Our sales desk assists with end-to-end loan sanctioning.'
  },
  {
    category: 'Construction & Specifications',
    question: 'What construction standards and amenities are included in K S Kashi Hills?',
    answer: 'Built with earthquake-resistant RCC frame structure (designed by Kiran N. Patel and 7-AXIS), 2 automatic elevators per block, vitrified tile flooring, granite kitchen counters with SS sink, landscaped common plot gardens, children play area, 24/7 water supply, and China mosaic terrace waterproofing.'
  },
  {
    category: 'Site Visit & Booking',
    question: 'How can I schedule an in-person site visit or download the official brochure?',
    answer: `You can schedule an in-person guided site visit by clicking "Book Visit" or calling our direct desk at ${corporateData.phone} / ${corporateData.phoneSecondary}. You can also download the complete 9-page digital brochure directly on this website.`
  }
];

export const BuyerFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section-ivory" id="faq-guide" style={{ borderTop: '1px solid var(--kashi-border)' }}>
      <KashiPattern opacity={0.04} color="#173F4E" />

      <div className="container" style={{ maxWidth: '960px' }}>
        <RevealOnScroll direction="up">
          <div className="section-header text-center">
            <SectionEyebrow text="HOME BUYER ADVISORY & FAQS" align="center" />
            <h2 className="section-title">
              Frequently Asked <span className="highlight">Questions</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about buying a 2 BHK home in Naroda & Enasan, Ahmedabad, AUDA sanctions, loan approvals, and construction quality.
            </p>
          </div>
        </RevealOnScroll>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <RevealOnScroll key={idx} direction="up" delay={idx * 50}>
                <div
                  style={{
                    background: 'var(--kashi-white)',
                    border: isOpen ? '1px solid var(--kashi-border-gold)' : '1px solid var(--kashi-border)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)'
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      background: 'transparent',
                      textAlign: 'left',
                      cursor: 'pointer',
                      border: 'none',
                      color: isOpen ? 'var(--kashi-teal)' : 'var(--kashi-charcoal)'
                    }}
                    aria-expanded={isOpen}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <HelpCircle size={18} color={isOpen ? 'var(--kashi-gold-dark)' : 'var(--kashi-muted)'} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '1.05rem', fontWeight: 600, fontFamily: 'var(--font-sans)', lineHeight: '1.4' }}>
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      size={20}
                      color="var(--kashi-gold-dark)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 24px 54px',
                        fontSize: '0.98rem',
                        lineHeight: '1.75',
                        color: 'var(--kashi-charcoal)',
                        borderTop: '1px solid rgba(23, 63, 78, 0.06)'
                      }}
                    >
                      <div style={{ paddingTop: '16px' }}>{faq.answer}</div>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Developer Trust Badge */}
        <RevealOnScroll direction="up" delay={200}>
          <div
            style={{
              marginTop: '40px',
              padding: '24px 32px',
              background: 'var(--kashi-white)',
              border: '1px solid var(--kashi-border-gold)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <ShieldCheck size={28} color="var(--kashi-gold-dark)" />
              <div>
                <strong style={{ display: 'block', color: 'var(--kashi-teal)', fontSize: '0.95rem' }}>
                  AUDA & GujRERA Registered: {kashiHillsProject.reraNumber}
                </strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--kashi-muted)' }}>
                  Complete legal title verification, clear documentation, and transparent pricing.
                </span>
              </div>
            </div>

            <a
              href={`tel:${corporateData.phone}`}
              className="btn btn-kashi-primary"
              style={{ padding: '10px 18px', fontSize: '0.85rem' }}
            >
              <Phone size={15} />
              <span>Talk to Project Advisor</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
