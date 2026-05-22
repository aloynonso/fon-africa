import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Ticker } from '@/components/ui/Ticker';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { MetricsGrid } from '@/components/sections/MetricsGrid';
import { CapabilitiesGrid } from '@/components/sections/CapabilitiesGrid';
import { energyMetrics } from '@/lib/content/metrics';
import { energyCapabilities } from '@/lib/content/capabilities';
import { projects } from '@/lib/content/projects';

export const metadata: Metadata = {
  title: 'FON Energy · Powering the Continent',
  description:
    'FON Energy develops, finances, and operates renewable generation, storage, and grid infrastructure across Africa — 4.6 GW pipeline closing the continental energy deficit.',
};

const TICKER_ITEMS = [
  'KAROO BESS · 1.2 GWh · PRE-CONSTRUCTION',
  'LAKE VICTORIA SOLAR · 310 MW',
  'COPPERBELT IPP · 450 MW · CONSTRUCTION',
  'FON ENERGY · 4.6 GW PIPELINE',
  'VOLTA HYBRID GRID · OPERATIONAL',
  'DFI PARTNERSHIPS OPEN',
];

const energyProjects = projects.filter((p) => p.division === 'energy');

export default function EnergyPage() {
  return (
    <div data-theme="energy">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(45, 180, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 180, 255, 0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
            style={{ background: 'var(--accent-deep)', opacity: 0.15 }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: '#1fbe7d', opacity: 0.08 }}
          />
        </div>

        <div className="container-x relative z-10">
          <div className="mb-8">
            <Breadcrumb items={[{ label: 'FON', href: '/' }, { label: 'Energy Division' }]} />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
            <span className="label">FON · 01 · Power Infrastructure</span>
          </div>

          <h1 className="serif font-light leading-[0.95] text-[clamp(48px,9vw,148px)] max-w-[1500px] mb-12">
            Powering the<br />
            <em className="italic accent-text font-normal">continent</em> through<br />
            <span className="relative inline-block">
              sovereign energy.
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
              FON Energy develops, finances, and operates renewable generation, storage, and grid
              infrastructure across Africa — closing the continental energy deficit through institutional
              capital and engineering rigor.
            </p>
            <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
              <Link href="#pipeline" className="btn-primary">
                View Pipeline <ArrowRight size={14} />
              </Link>
              <Link href="#capabilities" className="btn-ghost">
                Capabilities <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between border-t hairline-bone pt-6">
            <span
              className="mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--slate)' }}
            >
              Scroll · 4.6 GW Pipeline
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
              Closing the <em className="italic accent-text">600 GW</em> energy deficit.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--bone-2)' }}>
              Africa needs more than 600 GW of new generation by 2040 to meet industrial and demographic
              demand. FON Energy is structured to deploy patient capital into bankable, utility-scale
              projects — renewable-first, grid-integrated, and engineered for half-century lifespans.
            </p>
            <p style={{ color: 'var(--slate)' }}>
              From utility solar to battery storage and digital substations, we operate across the full
              energy value chain.
            </p>
          </div>
        </div>
        <MetricsGrid metrics={energyMetrics} />
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="container-x py-32 border-t hairline-bone">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="label">§ Capabilities</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 max-w-3xl">
              Full-stack energy <em className="italic">development</em>.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed" style={{ color: 'var(--slate)' }}>
            From concept to commissioning to operations — vertically integrated capability across the
            energy lifecycle.
          </p>
        </div>
        <CapabilitiesGrid capabilities={energyCapabilities} />
      </section>

      {/* PIPELINE */}
      <section id="pipeline" className="container-x py-32 border-t hairline-bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <span className="label">§ Project Pipeline</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6">
              <em className="italic accent-text">4.6 GW</em> in active development.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p style={{ color: 'var(--bone-2)' }} className="leading-relaxed">
              A live snapshot of the FON Energy project portfolio spanning generation, storage, and grid
              infrastructure across the continent.
            </p>
          </div>
        </div>

        <div className="border hairline-bone">
          <div
            className="hidden md:grid grid-cols-12 gap-4 p-6 border-b hairline-bone mono text-[10px] tracking-[0.15em] uppercase"
            style={{ background: 'var(--ink-2)', color: 'var(--slate)' }}
          >
            <div className="col-span-4">Project</div>
            <div className="col-span-2">Country</div>
            <div className="col-span-2">Capacity</div>
            <div className="col-span-2">Investment</div>
            <div className="col-span-2">Status</div>
          </div>

          {energyProjects.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b hairline-bone last:border-b-0 group cursor-pointer transition-colors hover:bg-[var(--ink-2)]"
            >
              <div className="col-span-4 flex items-center gap-4">
                <div
                  className="w-1 h-12"
                  style={{ background: 'linear-gradient(180deg, var(--accent), #1fbe7d)' }}
                />
                <div>
                  <div className="serif text-xl leading-tight">{p.name}</div>
                </div>
              </div>
              <div className="col-span-2 hidden md:flex items-center text-sm" style={{ color: 'var(--bone-2)' }}>
                {p.country}
              </div>
              <div className="col-span-2 flex items-center">
                <span className="accent-text serif text-xl">{p.capacity}</span>
              </div>
              <div className="col-span-2 flex items-center mono text-sm">{p.value}</div>
              <div className="col-span-2 flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background:
                      p.status === 'Operational' ? '#1fbe7d' : 'var(--accent)',
                  }}
                />
                <span className="text-sm">{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INVESTMENT CTA */}
      <section className="container-x py-32 border-t hairline-bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="label">§ Capital Opportunity</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 mb-10">
              Co-invest in <em className="italic accent-text">Africa's</em> energy transition.
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--bone-2)' }}>
              FON Energy structures bankable equity and project finance opportunities for development
              finance institutions, pension funds, sovereign wealth, and strategic industrial partners.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/investors" className="btn-primary">
                Energy Investor Memo <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Schedule Briefing <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
