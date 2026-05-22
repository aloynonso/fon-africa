import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About · The Group',
  description:
    "Father of Nations is a Pan-African industrial holding group. Learn about FON's mandate, leadership, governance, and ESG framework.",
};

const PRINCIPLES = [
  {
    n: '01',
    title: 'Sovereign Scale',
    body: 'Projects sized for national and continental impact. We build at the scale that meaningfully moves African economies.',
  },
  {
    n: '02',
    title: 'Patient Capital',
    body: 'Half-century investment horizons. We measure outcomes in generations, not quarters.',
  },
  {
    n: '03',
    title: 'Engineering Rigor',
    body: 'World-class delivery standards across project development, construction, and operations.',
  },
  {
    n: '04',
    title: 'Sovereign Partnership',
    body: 'Deep collaboration with governments, DFIs, and continental institutions. Africa builds with Africa.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x pt-40 pb-24">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
          <span className="label">§ About · The Group</span>
        </div>

        <h1 className="serif font-light leading-[0.95] text-[clamp(48px,8vw,128px)] max-w-[1400px] mb-12">
          A Pan-African<br />
          <em className="italic accent-text font-normal">industrial</em> group.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
          <div className="lg:col-span-7">
            <p className="text-xl leading-relaxed mb-8" style={{ color: 'var(--bone-2)' }}>
              Father of Nations is built on a single premise: Africa's transformation requires institutions
              that operate at continental scale, deploy patient capital, and partner deeply with sovereign
              stakeholders. We are that institution.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--bone-2)' }}>
              Across our three operating divisions — Energy, Agro, and Technologies — we develop and
              operate infrastructure that addresses Africa's most strategic challenges and unlocks its most
              significant opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-32 border-t hairline-bone">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="label">§ Operating Principles</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 max-w-3xl">
              Four <em className="italic">commitments</em>.
            </h2>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px border hairline-bone"
          style={{ background: 'var(--ink-3)' }}
        >
          {PRINCIPLES.map((p) => (
            <div key={p.n} className="p-10" style={{ background: 'var(--ink)' }}>
              <div
                className="mono text-[10px] tracking-[0.2em] mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {p.n}
              </div>
              <h3 className="serif text-3xl mb-4">{p.title}</h3>
              <p className="leading-relaxed" style={{ color: 'var(--bone-2)' }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="leadership" className="container-x py-32 border-t hairline-bone">
        <span className="label">§ Leadership</span>
        <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 mb-12 max-w-3xl">
          Operators. Investors. <em className="italic accent-text">Builders</em>.
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl" style={{ color: 'var(--bone-2)' }}>
          The FON leadership team combines decades of experience across infrastructure development, project
          finance, sovereign engagement, and operational delivery across the continent. Full leadership
          profiles available upon request.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Request Leadership Profile <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section id="esg" className="container-x py-32 border-t hairline-bone">
        <span className="label">§ ESG · Governance</span>
        <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 mb-12 max-w-3xl">
          Built for <em className="italic accent-text">integrity</em>.
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mb-10" style={{ color: 'var(--bone-2)' }}>
          FON operates to international ESG and governance standards. Every project is structured with
          IFC Performance Standards alignment, transparent reporting, and sovereign-grade compliance.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-ghost">
            ESG Framework <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
