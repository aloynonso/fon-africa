import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Ticker } from '@/components/ui/Ticker';
import { MetricsGrid } from '@/components/sections/MetricsGrid';
import { groupMetrics } from '@/lib/content/metrics';
import { divisions } from '@/lib/content/divisions';

export const metadata: Metadata = {
  title: 'Father of Nations · Pan-African Industrial Group',
  description:
    'FON develops large-scale infrastructure, energy, agriculture, and technology ecosystems across Africa. A continental industrial group built for sovereign scale.',
};

const TICKER_ITEMS = [
  'FON ENERGY · 4.6 GW PIPELINE',
  'FON AGRO · 53K HA UNDER MANAGEMENT',
  'FON TECHNOLOGIES · 12 VENTURES',
  'PAN-AFRICAN INDUSTRIAL GROUP',
  '14 COUNTRIES · 47 PROJECTS · 8.2B USD',
  'BUILDING NATIONS · BUILDING THE CONTINENT',
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
            style={{ background: 'var(--accent-deep)', opacity: 0.18 }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: 'var(--accent)', opacity: 0.08 }}
          />
        </div>

        <div className="container-x relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
            <span className="label">FON · 00 · Pan-African Industrial Group</span>
          </div>

          <h1 className="serif font-light leading-[0.95] text-[clamp(48px,9vw,148px)] max-w-[1500px] mb-12">
            Building <em className="italic accent-text font-normal">nations</em>.<br />
            Building the<br />
            <span className="relative inline-block">
              continent.
              <span
                className="absolute -bottom-2 left-0 right-0 h-1 origin-left"
                style={{ background: 'var(--accent)' }}
              />
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <p
              className="lg:col-span-6 text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--bone-2)' }}
            >
              Father of Nations is a Pan-African industrial holding group developing large-scale energy,
              agro, technology, and infrastructure platforms — built for institutional capital and engineered
              for continental impact.
            </p>

            <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
              <Link href="/investors" className="btn-primary">
                Investor Overview <ArrowRight size={14} />
              </Link>
              <Link href="/about" className="btn-ghost">
                The Group <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between border-t hairline-bone pt-6">
            <span
              className="mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--slate)' }}
            >
              Scroll · 14 Countries · 47 Projects
            </span>
            <ChevronDown size={16} style={{ color: 'var(--accent)' }} />
          </div>
        </div>
      </section>

      <Ticker items={TICKER_ITEMS} />

      {/* OVERVIEW */}
      <section className="container-x py-32 border-t hairline-bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <span className="label">§ Mandate</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6">
              A <em className="italic accent-text">continental</em> operating system.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--bone-2)' }}>
              FON operates as an integrated industrial group — combining patient capital, engineering rigor,
              and sovereign-grade governance to build the infrastructure Africa needs to transform itself.
            </p>
            <p style={{ color: 'var(--slate)' }}>
              Three divisions. One mandate. Continental scale.
            </p>
          </div>
        </div>

        <MetricsGrid metrics={groupMetrics.slice(0, 4)} />
      </section>

      {/* DIVISIONS */}
      <section className="container-x py-32 border-t hairline-bone">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="label">§ Divisions</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 max-w-3xl">
              Three pillars. <em className="italic">One</em> platform.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed" style={{ color: 'var(--slate)' }}>
            Vertically integrated across energy, food systems, and digital infrastructure.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px border hairline-bone"
          style={{ background: 'var(--ink-3)' }}
        >
          {divisions.map((d, i) => (
            <Link
              key={d.slug}
              href={d.href}
              data-theme={d.theme}
              className="p-10 lg:p-12 group transition-colors duration-500 relative overflow-hidden"
              style={{ background: 'var(--ink)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at top right, var(--accent) 0%, transparent 60%)',
                  opacity: 0.06,
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-12">
                  <span
                    className="mono text-[10px] tracking-[0.2em]"
                    style={{ color: 'var(--accent)' }}
                  >
                    FON · {d.code}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="group-hover:rotate-45 transition-transform duration-500"
                    style={{ color: 'var(--bone-2)' }}
                  />
                </div>
                <h3 className="serif font-light text-[clamp(40px,5vw,72px)] leading-[0.95] mb-6">
                  {d.name}
                </h3>
                <p
                  className="leading-relaxed mb-8 min-h-[80px]"
                  style={{ color: 'var(--bone-2)' }}
                >
                  {d.tagline}
                </p>
                <div className="border-t hairline-bone pt-6">
                  <div className="serif text-3xl accent-text mb-1">{d.metric.value}</div>
                  <div
                    className="mono text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: 'var(--slate)' }}
                  >
                    {d.metric.label}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-32 border-t hairline-bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="label">§ Engagement</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 mb-10">
              Partner in building <em className="italic accent-text">Africa's</em> next chapter.
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--bone-2)' }}>
              FON works with sovereign wealth, development finance institutions, pension capital,
              and strategic industrial partners across the continent and beyond.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/investors" className="btn-primary">
                Investor Relations <ArrowRight size={14} />
              </Link>
              <Link href="/partners" className="btn-ghost">
                Partnership Inquiry <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
