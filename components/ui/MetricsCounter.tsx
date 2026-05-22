'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  value: string;
  suffix?: string;
  className?: string;
};

export function MetricsCounter({ value, suffix, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(value);
    if (Number.isNaN(num)) {
      setDisplay(value);
      return;
    }
    const isFloat = value.includes('.');
    const duration = 1800;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = num * eased;
      setDisplay(isFloat ? cur.toFixed(1) : Math.floor(cur).toString());
      if (p < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className={`num-tick ${className ?? ''}`}>
      {display}
      {suffix && (
        <span className="text-[0.5em] ml-1" style={{ color: 'var(--slate)' }}>
          {suffix}
        </span>
      )}
    </span>
  );
}
