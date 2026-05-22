'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { iconRegistry, type Capability } from '@/lib/content/capabilities';

type Props = {
  capabilities: Capability[];
};

export function CapabilitiesGrid({ capabilities }: Props) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border hairline-bone"
      style={{ background: 'var(--ink-3)' }}
    >
      {capabilities.map((cap, i) => {
        const Icon = iconRegistry[cap.icon as keyof typeof iconRegistry];
        return (
          <motion.div
            key={cap.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="p-8 min-h-[240px] flex flex-col justify-between group transition-colors duration-500 hover:bg-[var(--ink-2)]"
            style={{ background: 'var(--ink)' }}
          >
            <div>
              {Icon && (
                <div
                  className="mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{ color: 'var(--accent)' }}
                >
                  <Icon size={32} strokeWidth={1.2} />
                </div>
              )}
              <h3 className="serif text-2xl mb-3 leading-tight">{cap.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--bone-2)' }}>
                {cap.description}
              </p>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span
                className="mono text-[9px] tracking-[0.2em]"
                style={{ color: 'var(--slate)' }}
              >
                {String(i + 1).padStart(2, '0')} / {String(capabilities.length).padStart(2, '0')}
              </span>
              <ArrowUpRight
                size={14}
                className="group-hover:rotate-45 transition-transform duration-500"
                style={{ color: 'var(--accent)' }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
