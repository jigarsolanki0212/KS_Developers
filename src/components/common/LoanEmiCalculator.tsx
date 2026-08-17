import React, { useState, useMemo } from 'react';
import { Calculator, Landmark, ShieldCheck, Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionEyebrow, KashiPattern } from './Decorative';
import { RevealOnScroll } from './RevealOnScroll';
import { corporateData, kashiHillsProject } from '../../config/projects';

interface BankRate {
  name: string;
  code: string;
  rate: number;
  rateRange: string;
  processingFee: string;
  maxTenure: string;
  badge?: string;
}

const bankRates: BankRate[] = [
  {
    name: 'State Bank of India (SBI)',
    code: 'SBI',
    rate: 8.50,
    rateRange: '8.50% – 9.15%',
    processingFee: '0.35% (Max ₹10,000)',
    maxTenure: '30 Years',
    badge: 'Most Popular'
  },
  {
    name: 'HDFC Bank',
    code: 'HDFC',
    rate: 8.55,
    rateRange: '8.55% – 9.10%',
    processingFee: '0.50% or ₹3,000',
    maxTenure: '30 Years',
    badge: 'Fast Sanction'
  },
  {
    name: 'Bank of Baroda',
    code: 'BOB',
    rate: 8.40,
    rateRange: '8.40% – 9.10%',
    processingFee: 'Nil to 0.25%',
    maxTenure: '30 Years',
    badge: 'Lowest Rate'
  },
  {
    name: 'ICICI Bank',
    code: 'ICICI',
    rate: 8.75,
    rateRange: '8.75% – 9.35%',
    processingFee: '0.50% + GST',
    maxTenure: '30 Years'
  },
  {
    name: 'Axis Bank',
    code: 'AXIS',
    rate: 8.75,
    rateRange: '8.75% – 9.30%',
    processingFee: 'Up to 1%',
    maxTenure: '30 Years'
  }
];

export const LoanEmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(3000000); // 30 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.50); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 Years
  const [selectedBank, setSelectedBank] = useState<string>('SBI');

  // Calculate EMI: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const { emi, totalInterest, totalAmount, principalPercentage, interestPercentage } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (P <= 0 || r <= 0 || n <= 0) {
      return { emi: 0, totalInterest: 0, totalAmount: 0, principalPercentage: 50, interestPercentage: 50 };
    }

    const calculatedEmi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const calculatedTotalAmount = calculatedEmi * n;
    const calculatedTotalInterest = calculatedTotalAmount - P;

    const pPct = Math.round((P / calculatedTotalAmount) * 100);
    const iPct = 100 - pPct;

    return {
      emi: calculatedEmi,
      totalInterest: calculatedTotalInterest,
      totalAmount: calculatedTotalAmount,
      principalPercentage: pPct,
      interestPercentage: iPct
    };
  }, [loanAmount, interestRate, tenureYears]);

  const handleSelectBank = (bank: BankRate) => {
    setSelectedBank(bank.code);
    setInterestRate(bank.rate);
  };

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="section section-ivory-warm" id="emi-calculator" style={{ borderTop: '1px solid var(--kashi-border)' }}>
      <KashiPattern opacity={0.04} color="#173F4E" />

      <div className="container">
        <RevealOnScroll direction="up">
          <div className="section-header text-center">
            <SectionEyebrow text="FINANCIAL PLANNING & ADVISORY" align="center" />
            <h2 className="section-title">
              Home Loan <span className="highlight">EMI Calculator</span>
            </h2>
            <p className="section-subtitle">
              Calculate your monthly outflow, compare current interest rates across major approved partner banks, and plan your investment in Kashi Hills with total clarity.
            </p>
          </div>
        </RevealOnScroll>

        {/* Main 2-Column Calculator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'start' }} className="location-split-grid">
          {/* Left Column: Sliders & Controls */}
          <RevealOnScroll direction="up">
            <div
              style={{
                background: 'var(--kashi-white)',
                border: '1px solid var(--kashi-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '36px 32px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <Calculator size={22} color="var(--kashi-teal)" />
                <h3 style={{ fontSize: '1.35rem', color: 'var(--kashi-teal)', margin: 0 }}>
                  Loan Parameters
                </h3>
              </div>

              {/* 1. Loan Amount Slider */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--kashi-charcoal)' }}>
                    Loan Amount Required
                  </label>
                  <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--kashi-teal)', fontFamily: 'var(--font-serif)' }}>
                    {formatINR(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="10000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--kashi-gold-dark)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--kashi-muted)', marginTop: '4px' }}>
                  <span>₹5 Lakhs</span>
                  <span>₹30 L (Typical 2 BHK)</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* 2. Interest Rate Slider */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--kashi-charcoal)' }}>
                    Interest Rate (% per annum)
                  </label>
                  <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--kashi-teal)', fontFamily: 'var(--font-serif)' }}>
                    {interestRate.toFixed(2)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="7.0"
                  max="14.0"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--kashi-gold-dark)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--kashi-muted)', marginTop: '4px' }}>
                  <span>7.0%</span>
                  <span>8.5% (Bank Avg)</span>
                  <span>14.0%</span>
                </div>
              </div>

              {/* 3. Loan Tenure Slider */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--kashi-charcoal)' }}>
                    Loan Tenure (Years)
                  </label>
                  <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--kashi-teal)', fontFamily: 'var(--font-serif)' }}>
                    {tenureYears} Years ({tenureYears * 12} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--kashi-gold-dark)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--kashi-muted)', marginTop: '4px' }}>
                  <span>5 Yrs</span>
                  <span>15 Yrs</span>
                  <span>20 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>

              {/* Bank Selector Quick Pill Switcher */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--kashi-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '10px' }}>
                  Select Partner Bank Rate:
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {bankRates.map((bank) => (
                    <button
                      key={bank.code}
                      onClick={() => handleSelectBank(bank)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-xs)',
                        border: selectedBank === bank.code ? '1.5px solid var(--kashi-gold-dark)' : '1px solid var(--kashi-border)',
                        background: selectedBank === bank.code ? 'rgba(185, 152, 77, 0.12)' : 'var(--kashi-ivory)',
                        color: selectedBank === bank.code ? 'var(--kashi-teal)' : 'var(--kashi-charcoal)',
                        fontSize: '0.82rem',
                        fontWeight: selectedBank === bank.code ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {bank.code} ({bank.rate}%)
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Calculated Monthly EMI Result Card */}
          <RevealOnScroll direction="up" delay={150}>
            <div
              style={{
                background: 'var(--kashi-teal-dark)',
                color: 'var(--kashi-ivory)',
                border: '1px solid var(--kashi-border-gold)',
                borderRadius: 'var(--radius-sm)',
                padding: '36px 32px',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <KashiPattern opacity={0.06} color="#FFFFFF" />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-gold-light)', fontWeight: 700, display: 'block' }}>
                  ESTIMATED MONTHLY INSTALLMENT
                </span>

                <div style={{ margin: '12px 0 20px' }}>
                  <span style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.2rem)', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>
                    {formatINR(emi)}
                  </span>
                  <span style={{ fontSize: '0.95rem', color: '#DDE5E8', marginLeft: '8px' }}>/ month</span>
                </div>

                {/* Progress Bar (Principal vs Interest Ratio) */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ height: '8px', width: '100%', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.1)', overflow: 'hidden', display: 'flex' }}>
                    <div style={{ width: `${principalPercentage}%`, background: 'var(--kashi-gold-light)', transition: 'width 0.4s ease' }} />
                    <div style={{ width: `${interestPercentage}%`, background: '#588B9C', transition: 'width 0.4s ease' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: '#C2CCD0', marginTop: '6px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--kashi-gold-light)', display: 'inline-block' }} />
                      Principal: {principalPercentage}%
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#588B9C', display: 'inline-block' }} />
                      Interest: {interestPercentage}%
                    </span>
                  </div>
                </div>

                {/* Breakdown Summary Rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '18px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: '#C2CCD0' }}>Principal Loan Amount</span>
                    <strong style={{ color: '#FFFFFF' }}>{formatINR(loanAmount)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: '#C2CCD0' }}>Total Interest Payable</span>
                    <strong style={{ color: 'var(--kashi-gold-light)' }}>{formatINR(totalInterest)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '10px' }}>
                    <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Total Amount Payable</span>
                    <strong style={{ color: '#FFFFFF', fontSize: '1.1rem' }}>{formatINR(totalAmount)}</strong>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={`https://wa.me/${corporateData.whatsapp}?text=${encodeURIComponent(`Hello K.S. Developers, I am looking for home loan assistance for Kashi Hills. Loan amount: ${formatINR(loanAmount)}, Tenure: ${tenureYears} Years.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-kashi-gold"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <MessageCircle size={16} />
                    <span>Get Bank Sanction Assistance →</span>
                  </a>
                  <a
                    href={`tel:${corporateData.phone}`}
                    className="btn btn-dark-secondary"
                    style={{ width: '100%', textAlign: 'center', fontSize: '0.85rem' }}
                  >
                    <Phone size={14} />
                    <span>Call Loan Helpdesk: {corporateData.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Live Partner Bank Rates Table */}
        <div style={{ marginTop: '48px' }}>
          <RevealOnScroll direction="up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Landmark size={20} color="var(--kashi-gold-dark)" />
              <h3 style={{ fontSize: '1.3rem', color: 'var(--kashi-teal)', margin: 0 }}>
                Currently Running Home Loan Rates in Ahmedabad (2026)
              </h3>
            </div>

            <div style={{ overflowX: 'auto', background: 'var(--kashi-white)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--kashi-border)', boxShadow: 'var(--shadow-sm)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'var(--kashi-teal-dark)', color: 'var(--kashi-ivory)' }}>
                    <th style={{ padding: '14px 20px', fontWeight: 600 }}>Bank / Lender</th>
                    <th style={{ padding: '14px 20px', fontWeight: 600 }}>Interest Rate (p.a.)</th>
                    <th style={{ padding: '14px 20px', fontWeight: 600 }}>Processing Fee</th>
                    <th style={{ padding: '14px 20px', fontWeight: 600 }}>Max Tenure</th>
                    <th style={{ padding: '14px 20px', fontWeight: 600 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bankRates.map((bank, idx) => (
                    <tr
                      key={bank.code}
                      style={{
                        borderBottom: '1px solid var(--kashi-border)',
                        background: selectedBank === bank.code ? 'rgba(185, 152, 77, 0.08)' : idx % 2 === 0 ? 'var(--kashi-white)' : 'var(--kashi-ivory)',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <td style={{ padding: '14px 20px', fontWeight: 600, color: 'var(--kashi-teal)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>{bank.name}</span>
                          {bank.badge && (
                            <span style={{ fontSize: '0.68rem', padding: '2px 8px', background: 'var(--kashi-gold-light)', color: 'var(--kashi-teal-dark)', borderRadius: '10px', fontWeight: 700 }}>
                              {bank.badge}
                            </span>
                          )}
                        </div>
                      </td>
                      <td style={{ padding: '14px 20px', fontWeight: 700, color: 'var(--kashi-gold-dark)' }}>
                        {bank.rateRange}
                      </td>
                      <td style={{ padding: '14px 20px', color: 'var(--kashi-charcoal)' }}>
                        {bank.processingFee}
                      </td>
                      <td style={{ padding: '14px 20px', color: 'var(--kashi-muted)' }}>
                        {bank.maxTenure}
                      </td>
                      <td style={{ padding: '14px 20px' }}>
                        <button
                          onClick={() => handleSelectBank(bank)}
                          className="btn btn-kashi-secondary"
                          style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                        >
                          <span>Calculate EMI</span>
                          <ArrowRight size={12} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Document Checklist Pill Box */}
            <div
              style={{
                marginTop: '24px',
                background: 'var(--kashi-white)',
                border: '1px solid var(--kashi-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '24px 28px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--kashi-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--kashi-teal)', display: 'block' }}>KYC Documents</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--kashi-muted)' }}>Aadhaar Card, PAN Card, Passport Size Photos</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--kashi-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--kashi-teal)', display: 'block' }}>Salaried Applicants</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--kashi-muted)' }}>Last 3 Months Salary Slips, 6M Bank Statement, Form 16</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--kashi-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--kashi-teal)', display: 'block' }}>Self-Employed / Business</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--kashi-muted)' }}>Last 2–3 Years ITR, Balance Sheet, GST Returns</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <ShieldCheck size={18} color="var(--kashi-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--kashi-teal)', display: 'block' }}>Property Title Clear</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--kashi-muted)' }}>AUDA & RERA Approved ({kashiHillsProject.reraNumber})</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
