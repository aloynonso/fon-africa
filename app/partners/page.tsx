import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partners · Strategic Collaboration',
  description:
    'FON partners with sovereign institutions, development finance, engineering EPCs, and strategic capital across the African continent.',
};

const PARTNER_CATEGORIES = [
  {
    title: 'Sovereign Institutions',
    body:
      'Government ministries, sovereign wealth funds, public infrastructure agencies, and national development banks.',
    examples: 'Ministries · National DBs · Sovereign Funds',
  },
  {
    title: 'Development Finance',
    body: 'Multilateral and bilateral DFIs financing African infrastructure transformation.',
    examples: 'AfDB · IFC · DFC · BII · KfW · Proparco',
  },
  {
    title: 'Engineering · EPC',
    body: 'Tier-1 engineering, procurement, and construction partners delivering at scale.',
    examples: 'Global EPCs · OEM Partners · Tech Vendors',
  },
  {
    title: 'Strategic Capital',
    body: 'Pension, insurance, family offices, and corporate strategic investors.',
    examples: 'Pensions · Insurance · Strategic LPs',
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="container-x pt-40 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
          <span className="label">§ Partners · Strategic Collaboration</span>
        </div>

        <h1 className="serif font-light leading-[0.95] text-[clamp(48px,8vw,128px)] max-w-[1400px] mb-12">
          We build with<br />
          <em className="italic accent-text font-normal">partners</em>.
        </h1>

        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--bone-2)' }}>
          FON projects are delivered through deep partnership with sovereign institutions, development
          finance, leading engineering firms, and strategic capital partners across the continent and
          internationally.
        </p>
      </section>

      <section className="container-x py-32 border-t hairline-bone">
        <span className="label">§ Partner Categories</span>
        <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 mb-16 max-w-3xl">
          Four <em className="italic">domains</em> of collaboration.
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px border hairline-bone"
          style={{ background: 'var(--ink-3)' }}
        >
          {PARTNER_CATEGORIES.map((p, i) => (
            <div key={p.title} className="p-10" style={{ background: 'var(--ink)' }}>
              <div
                className="mono text-[10px] tracking-[0.2em] mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="serif text-3xl mb-4">{p.title}</h3>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--bone-2)' }}>
                {p.body}
              </p>
              <div className="mono text-xs" style={{ color: 'var(--slate)' }}>
                {p.examples}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-32 border-t hairline-bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="label">§ Begin a Partnership</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 mb-10">
              Engage with <em className="italic accent-text">FON</em>.
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--bone-2)' }}>
              We engage strategically with partners who share our long-horizon commitment to African
              industrial transformation.
            </p>
            <Link href="/contact" className="btn-primary">
              Partnership Inquiry <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
