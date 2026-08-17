import React, { useState, useMemo } from 'react';
import { Calculator } from 'lucide-react';
import { SectionEyebrow, KashiPattern } from './Decorative';
import { RevealOnScroll } from './RevealOnScroll';

interface RateOption {
  label: string;
  rate: number;
  description: string;
}

const rateOptions: RateOption[] = [
  { label: 'All-Bank Average', rate: 8.50, description: 'Market Benchmark' },
  { label: 'Prime / Lowest', rate: 8.40, description: 'Top Credit Score' },
  { label: 'PSU Banks Avg', rate: 8.60, description: 'Nationalized Banks' },
  { label: 'Private Banks Avg', rate: 8.75, description: 'Private Lenders' }
];

export const LoanEmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(3000000); // 30 Lakhs (Typical 2 BHK)
  const [interestRate, setInterestRate] = useState<number>(8.50); // 8.5% All-Bank Average default
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 Years (Range 5-25)
  const [selectedOption, setSelectedOption] = useState<string>('All-Bank Average');

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

  const handleSelectRateOption = (option: RateOption) => {
    setSelectedOption(option.label);
    setInterestRate(option.rate);
  };

  const handleManualRateChange = (val: number) => {
    setInterestRate(val);
    const matched = rateOptions.find((opt) => opt.rate === val);
    if (matched) {
      setSelectedOption(matched.label);
    } else {
      setSelectedOption('Custom');
    }
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
              Calculate your monthly installment based on current average bank interest rates, adjust tenure between 5 to 25 years, and plan your investment with total transparency.
            </p>
          </div>
        </RevealOnScroll>

        {/* Clean 2-Column Calculator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'stretch' }} className="location-split-grid">
          {/* Left Column: Sliders & Controls */}
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
                justifyContent: 'space-between'
              }}
            >
              <div>
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
                    onChange={(e) => handleManualRateChange(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--kashi-gold-dark)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--kashi-muted)', marginTop: '4px' }}>
                    <span>7.0%</span>
                    <span>8.50% (All-Bank Avg)</span>
                    <span>14.0%</span>
                  </div>
                </div>

                {/* 3. Loan Tenure Slider (5 to 25 Years) */}
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

              {/* Average Rate Selection Option (Default: All-Bank Average) */}
              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--kashi-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '10px' }}>
                  Average Interest Rate Presets:
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {rateOptions.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectRateOption(opt)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-xs)',
                        border: selectedOption === opt.label ? '1.5px solid var(--kashi-gold-dark)' : '1px solid var(--kashi-border)',
                        background: selectedOption === opt.label ? 'rgba(185, 152, 77, 0.12)' : 'var(--kashi-ivory)',
                        color: selectedOption === opt.label ? 'var(--kashi-teal)' : 'var(--kashi-charcoal)',
                        fontSize: '0.82rem',
                        fontWeight: selectedOption === opt.label ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {opt.label} ({opt.rate}%)
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Calculated Monthly EMI Result Card (Pure Info Breakdown Only) */}
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
