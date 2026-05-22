'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/content/projects';

type Props = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: Props) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border hairline-bone"
      style={{ background: 'var(--ink-3)' }}
    >
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="p-8 lift group cursor-pointer relative overflow-hidden min-h-[260px] flex flex-col justify-between"
          style={{ background: 'var(--ink)' }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                className="mono text-[10px] tracking-[0.15em] uppercase mb-2"
                style={{ color: 'var(--accent)' }}
              >
                {p.country}
              </div>
              <h3 className="serif text-2xl leading-tight mb-2">{p.name}</h3>
              <div className="text-sm" style={{ color: 'var(--bone-2)' }}>
                {p.scale ?? p.capacity}
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-bone-2 group-hover:rotate-45 transition-all duration-500"
              style={{ color: 'var(--bone-2)' }}
            />
          </div>

          <div className="border-t hairline-bone pt-4 mt-8 grid grid-cols-3 gap-4">
            <div>
              <div
                className="mono text-[9px] tracking-[0.15em] uppercase mb-1"
                style={{ color: 'var(--slate)' }}
              >
                Value
              </div>
              <div className="serif text-base accent-text">{p.value}</div>
            </div>
            <div>
              <div
                className="mono text-[9px] tracking-[0.15em] uppercase mb-1"
                style={{ color: 'var(--slate)' }}
              >
                Region
              </div>
              <div className="text-xs">{p.region}</div>
            </div>
            <div>
              <div
                className="mono text-[9px] tracking-[0.15em] uppercase mb-1"
                style={{ color: 'var(--slate)' }}
              >
                Status
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background:
                      p.status === 'Operational'
                        ? 'var(--accent-bright)'
                        : 'var(--accent)',
                  }}
                />
                <span className="text-xs">{p.status}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
