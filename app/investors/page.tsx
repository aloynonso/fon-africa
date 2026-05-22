import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investors · Capital Partnership',
  description:
    'FON partners with sovereign wealth, development finance institutions, pension funds, and strategic capital. Institutional-grade access to African industrial transformation.',
};

const INVESTOR_TYPES = [
  {
    title: 'Sovereign Wealth',
    body: 'Long-duration, strategic capital aligned with continental industrial transformation.',
  },
  {
    title: 'Development Finance',
    body: 'DFIs and multilateral institutions catalyzing patient infrastructure capital.',
  },
  {
    title: 'Pension & Insurance',
    body: 'Yield-grade infrastructure exposure with stable, inflation-linked returns.',
  },
  {
    title: 'Strategic Industrial',
    body: 'Corporate partners seeking continental operational footprint and co-investment.',
  },
];

const ALLOCATION = [
  { name: 'FON Energy', pct: 56, val: '$2.1B', deals: '4.6 GW · 6 anchor projects' },
  { name: 'FON Agro', pct: 30, val: '$1.6B', deals: '53K ha · 6 platforms' },
  { name: 'FON Technologies', pct: 14, val: '$850M', deals: '12 ventures · 5 sites' },
];

export default function InvestorsPage() {
  return (
    <>
      <section className="container-x pt-40 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
          <span className="label">§ Investors · Capital Partnership</span>
        </div>

        <h1 className="serif font-light leading-[0.95] text-[clamp(48px,8vw,128px)] max-w-[1400px] mb-12">
          Co-invest in<br />
          <em className="italic accent-text font-normal">Africa's</em><br />
          transformation.
        </h1>

        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--bone-2)' }}>
          FON partners with institutional capital across the spectrum — sovereign wealth funds,
          development finance institutions, pension funds, insurance pools, and strategic industrial
          partners — to deploy patient capital at continental scale.
        </p>
      </section>

      <section className="container-x py-32 border-t hairline-bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <span className="label">§ Capital Allocation</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,64px)] leading-[1] mt-6">
              <em className="italic accent-text">$8.2B</em> pipeline across three divisions.
            </h2>
          </div>
        </div>

        <div className="border hairline-bone">
          {ALLOCATION.map((a) => (
            <div
              key={a.name}
              className="grid grid-cols-12 gap-4 p-8 border-b hairline-bone last:border-b-0"
            >
              <div className="col-span-12 md:col-span-3 serif text-2xl">{a.name}</div>
              <div className="col-span-12 md:col-span-3 serif text-2xl accent-text">{a.val}</div>
              <div className="col-span-12 md:col-span-3 text-sm" style={{ color: 'var(--bone-2)' }}>
                {a.deals}
              </div>
              <div className="col-span-12 md:col-span-3 flex items-center gap-3">
                <div
                  className="h-[3px] flex-1 overflow-hidden"
                  style={{ background: 'var(--ink-3)' }}
                >
                  <div
                    className="h-full"
                    style={{ width: `${a.pct}%`, background: 'var(--accent)' }}
                  />
                </div>
                <span className="mono text-xs" style={{ color: 'var(--slate)' }}>
                  {a.pct}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-32 border-t hairline-bone">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="label">§ Investor Profile</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 max-w-3xl">
              We work with <em className="italic accent-text">institutional</em> capital.
            </h2>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border hairline-bone"
          style={{ background: 'var(--ink-3)' }}
        >
          {INVESTOR_TYPES.map((t, i) => (
            <div key={t.title} className="p-8" style={{ background: 'var(--ink)' }}>
              <div
                className="mono text-[10px] tracking-[0.2em] mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="serif text-xl mb-3">{t.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--bone-2)' }}>
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-32 border-t hairline-bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="label">§ Engagement</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 mb-10">
              Begin a <em className="italic accent-text">capital dialogue</em>.
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--bone-2)' }}>
              We engage with qualified institutional capital across deal sizes from $30M to $1.2B+.
              All inquiries handled under standard NDA.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Request Investor Deck <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Schedule Briefing <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
