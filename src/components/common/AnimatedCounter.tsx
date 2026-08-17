import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1800,
  className = '',
  style = {}
}) => {
  const isRange = value.includes('–') || value.includes('-');
  // Initialize ranges directly to their final string to eliminate dual-number frame flickering on load
  const [displayValue, setDisplayValue] = useState(() => (isRange ? value : '0'));
  const hasAnimatedRef = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  const stopAnimation = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  useEffect(() => {
    if (isRange) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animateCount();
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      stopAnimation();
    };
  }, [value, duration, isRange]);

  const animateCount = () => {
    stopAnimation();

    // Single number with possible suffix (e.g. "75+", "100%", "2")
    const numericTarget = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
    const suffix = value.replace(/[0-9.]/g, '');

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const current = Math.floor(easeOut * numericTarget);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  return (
    <span ref={elementRef} className={className} style={{ fontVariantNumeric: 'tabular-nums', ...style }}>
      {displayValue}
    </span>
  );
};
