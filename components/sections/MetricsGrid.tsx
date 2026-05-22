'use client';

import { motion } from 'framer-motion';
import { MetricsCounter } from '@/components/ui/MetricsCounter';
import type { Metric } from '@/lib/content/metrics';

type Props = {
  metrics: Metric[];
};

export function MetricsGrid({ metrics }: Props) {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-px border hairline-bone"
      style={{ background: 'var(--ink-3)' }}
    >
      {metrics.map((m, i) => (
        <motion.div
          key={`${m.label}-${i}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="p-8 lift"
          style={{ background: 'var(--ink)' }}
        >
          <div className="serif text-[clamp(36px,5vw,64px)] font-light leading-none mb-3">
            <MetricsCounter value={m.value} suffix={m.suffix} />
          </div>
          <div
            className="mono text-[10px] tracking-[0.15em] uppercase"
            style={{ color: 'var(--slate)' }}
          >
            {m.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
