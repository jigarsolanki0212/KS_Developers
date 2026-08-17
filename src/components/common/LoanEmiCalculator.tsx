import React, { useState, useMemo } from 'react';
import { Calculator } from 'lucide-react';
import { SectionEyebrow, KashiPattern } from './Decorative';
import { RevealOnScroll } from './RevealOnScroll';

export const LoanEmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(3000000); // Default 30 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.50); // Default 8.50%
  const [tenureYears, setTenureYears] = useState<number>(20); // Default 20 Years (5-25 range)

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
              Calculate your monthly installment, enter your custom interest rate, adjust tenure between 5 to 25 years, and plan your investment with total transparency.
            </p>
          </div>
        </RevealOnScroll>

        {/* Clean 2-Column Calculator Grid */}
        <div className="location-split-grid">
          {/* Left Column: Manual Sliders & Inputs */}
          <RevealOnScroll direction="up">
            <div
              style={{
                background: 'var(--kashi-white)',
                border: '1px solid var(--kashi-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '36px 32px',
                boxShadow: 'var(--shadow-sm)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                <Calculator size={22} color="var(--kashi-teal)" />
                <h3 style={{ fontSize: '1.35rem', color: 'var(--kashi-teal)', margin: 0 }}>
                  Loan Parameters
                </h3>
              </div>

              {/* 1. Loan Amount */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--kashi-charcoal)' }}>
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

              {/* 2. Interest Rate (Manual Input + Slider) */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--kashi-charcoal)' }}>
                    Interest Rate (% per annum)
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <input
                      type="number"
                      min="5"
                      max="20"
                      step="0.05"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      style={{
                        width: '72px',
                        padding: '4px 8px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--kashi-teal)',
                        fontFamily: 'var(--font-serif)',
                        border: '1px solid var(--kashi-border-gold)',
                        borderRadius: 'var(--radius-xs)',
                        background: 'var(--kashi-ivory)',
                        textAlign: 'right'
                      }}
                    />
                    <span style={{ fontWeight: 700, color: 'var(--kashi-teal)' }}>%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="6.0"
                  max="15.0"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--kashi-gold-dark)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--kashi-muted)', marginTop: '4px' }}>
                  <span>6.0%</span>
                  <span>8.50% (Default Average)</span>
                  <span>15.0%</span>
                </div>
              </div>

              {/* 3. Loan Tenure (5 to 25 Years) */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--kashi-charcoal)' }}>
                    Loan Tenure (Years)
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <input
                      type="number"
                      min="5"
                      max="25"
                      step="1"
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                      style={{
                        width: '60px',
                        padding: '4px 8px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--kashi-teal)',
                        fontFamily: 'var(--font-serif)',
                        border: '1px solid var(--kashi-border-gold)',
                        borderRadius: 'var(--radius-xs)',
                        background: 'var(--kashi-ivory)',
                        textAlign: 'right'
                      }}
                    />
                    <span style={{ fontWeight: 700, color: 'var(--kashi-teal)', fontSize: '0.9rem' }}>Yrs</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--kashi-gold-dark)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--kashi-muted)', marginTop: '4px' }}>
                  <span>5 Yrs</span>
                  <span>10 Yrs</span>
                  <span>15 Yrs</span>
                  <span>20 Yrs</span>
                  <span>25 Yrs</span>
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
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <KashiPattern opacity={0.06} color="#FFFFFF" />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kashi-gold-light)', fontWeight: 700, display: 'block' }}>
                  ESTIMATED MONTHLY INSTALLMENT
                </span>

                <div style={{ margin: '14px 0 24px' }}>
                  <span style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>
                    {formatINR(emi)}
                  </span>
                  <span style={{ fontSize: '0.95rem', color: '#DDE5E8', marginLeft: '8px' }}>/ month</span>
                </div>

                {/* Progress Bar (Principal vs Interest Ratio) */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ height: '8px', width: '100%', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.1)', overflow: 'hidden', display: 'flex' }}>
                    <div style={{ width: `${principalPercentage}%`, background: 'var(--kashi-gold-light)', transition: 'width 0.4s ease' }} />
                    <div style={{ width: `${interestPercentage}%`, background: '#588B9C', transition: 'width 0.4s ease' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: '#C2CCD0', marginTop: '8px' }}>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                    <span style={{ color: '#C2CCD0' }}>Principal Loan Amount</span>
                    <strong style={{ color: '#FFFFFF', fontSize: '1.05rem' }}>{formatINR(loanAmount)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                    <span style={{ color: '#C2CCD0' }}>Total Interest Payable</span>
                    <strong style={{ color: 'var(--kashi-gold-light)', fontSize: '1.05rem' }}>{formatINR(totalInterest)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '14px' }}>
                    <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Total Amount Payable</span>
                    <strong style={{ color: '#FFFFFF', fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>{formatINR(totalAmount)}</strong>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
