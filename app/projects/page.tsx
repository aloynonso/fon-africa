import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/content/projects';

export const metadata: Metadata = {
  title: 'Projects · Active Portfolio',
  description:
    'FON operates 47 active projects across 14 African countries — energy, agro, technology, and infrastructure platforms at continental scale.',
};

const DIVISIONS = [
  { slug: 'energy' as const, label: 'Energy', theme: 'energy' as const },
  { slug: 'agro' as const, label: 'Agro', theme: 'agro' as const },
  { slug: 'technologies' as const, label: 'Technologies', theme: 'tech' as const },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="container-x pt-40 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
          <span className="label">§ Projects · Continental Portfolio</span>
        </div>

        <h1 className="serif font-light leading-[0.95] text-[clamp(48px,8vw,128px)] max-w-[1400px] mb-12">
          <em className="italic accent-text font-normal">47</em> active<br />
          projects. <br />
          <em className="italic">14</em> countries.
        </h1>

        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--bone-2)' }}>
          A live registry of FON's project portfolio across energy generation, agricultural production,
          digital infrastructure, and strategic ventures.
        </p>
      </section>

      {DIVISIONS.map((div) => {
        const items = projects.filter((p) => p.division === div.slug);
        return (
          <section
            key={div.slug}
            data-theme={div.theme}
            className="container-x py-24 border-t hairline-bone"
          >
            <div className="flex items-end justify-between mb-12 gap-8">
              <div>
                <span className="label">§ FON · {div.label}</span>
                <h2 className="serif font-light text-[clamp(32px,4vw,56px)] leading-[1] mt-6">
                  {items.length} <em className="italic accent-text">{div.label}</em> Projects
                </h2>
              </div>
              <Link
                href={`/${div.slug}`}
                className="mono text-[11px] tracking-[0.15em] uppercase underline-grow"
                style={{ color: 'var(--accent-bright)' }}
              >
                View Division →
              </Link>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border hairline-bone"
              style={{ background: 'var(--ink-3)' }}
            >
              {items.map((p) => (
                <div
                  key={p.id}
                  className="p-8 group cursor-pointer transition-colors duration-500 hover:bg-[var(--ink-2)]"
                  style={{ background: 'var(--ink)' }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div
                        className="mono text-[10px] tracking-[0.15em] uppercase mb-2"
                        style={{ color: 'var(--accent)' }}
                      >
                        {p.country}
                      </div>
                      <h3 className="serif text-xl leading-tight">{p.name}</h3>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="group-hover:rotate-45 transition-transform duration-500"
                      style={{ color: 'var(--bone-2)' }}
                    />
                  </div>
                  <div className="border-t hairline-bone pt-4 flex justify-between items-center text-xs">
                    <span className="serif accent-text">{p.value}</span>
                    <span className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background:
                            p.status === 'Operational'
                              ? 'var(--accent-bright)'
                              : 'var(--accent)',
                        }}
                      />
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
