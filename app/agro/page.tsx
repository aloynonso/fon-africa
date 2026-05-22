import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Ticker } from '@/components/ui/Ticker';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { MetricsGrid } from '@/components/sections/MetricsGrid';
import { CapabilitiesGrid } from '@/components/sections/CapabilitiesGrid';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { agroMetrics } from '@/lib/content/metrics';
import { agroCapabilities } from '@/lib/content/capabilities';
import { projects } from '@/lib/content/projects';

export const metadata: Metadata = {
  title: 'FON Agro · Feeding Nations',
  description:
    'FON Agro builds vertically integrated agricultural and food-processing ecosystems across Africa — 53,000 hectares under management anchoring continental food security.',
};

const TICKER_ITEMS = [
  'MAHIKENG AGRO/POWER · 12,000 HA · DEVELOPMENT',
  'ASHANTI AGRO CORRIDOR · GHANA',
  'FON AGRO · 1.6B USD AUM',
  'LIMPOPO CITRUS · EXPORT GRADE',
  'KAFUE WHEAT PLATFORM · CONSTRUCTION',
  'FOOD SECURITY · CONTINENTAL MANDATE',
];

const VALUE_CHAIN = [
  { stage: 'Land & Inputs', desc: 'Long-lease land assembly, irrigation, mechanization, and input supply networks.' },
  { stage: 'Production', desc: 'Commercial-scale farming operations with precision agriculture and yield management.' },
  { stage: 'Processing', desc: 'Vertically integrated milling, refining, and value-added manufacturing.' },
  { stage: 'Cold Chain', desc: 'Pre-cooling, packing, refrigerated storage, and temperature-controlled logistics.' },
  { stage: 'Distribution', desc: 'Domestic FMCG channels and continental commodity trading platforms.' },
  { stage: 'Export', desc: 'SEZ-routed exports to European, Gulf, and Asian markets at compliance grade.' },
];

const agroProjects = projects.filter((p) => p.division === 'agro');

export default function AgroPage() {
  return (
    <div data-theme="agro">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(105deg, transparent 0, transparent 22px, rgba(74, 138, 92, 0.04) 22px, rgba(74, 138, 92, 0.04) 23px), repeating-linear-gradient(75deg, transparent 0, transparent 38px, rgba(212, 161, 62, 0.03) 38px, rgba(212, 161, 62, 0.03) 39px)',
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
            style={{ background: 'var(--accent-deep)', opacity: 0.35 }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: '#8b5e3c', opacity: 0.12 }}
          />
        </div>

        <div className="container-x relative z-10">
          <div className="mb-8">
            <Breadcrumb items={[{ label: 'FON', href: '/' }, { label: 'Agro Division' }]} />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
            <span className="label">FON · 02 · Agro-Industrial Systems</span>
          </div>

          <h1 className="serif font-light leading-[0.95] text-[clamp(48px,9vw,148px)] max-w-[1500px] mb-12">
            Feeding nations.<br />
            <em className="italic accent-text font-normal">Building</em> the<br />
            <span className="relative inline-block">
              food system.
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
              FON Agro builds vertically integrated agricultural and food-processing ecosystems — from
              large-scale commercial farms to value-add manufacturing and export platforms — anchoring
              continental food security.
            </p>
            <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
              <Link href="#mahikeng" className="btn-primary">
                Mahikeng Project <ArrowRight size={14} />
              </Link>
              <Link href="#value-chain" className="btn-ghost">
                Value Chain <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between border-t hairline-bone pt-6">
            <span
              className="mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--slate)' }}
            >
              Scroll · 53K Hectares Under Management
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
              Africa imports <em className="italic accent-text">$80B</em> in food annually.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--bone-2)' }}>
              Africa holds 60% of the world's uncultivated arable land yet imports food on industrial scale.
              FON Agro deploys patient capital into commercial farming, processing infrastructure, and cold
              chains that reverse this asymmetry.
            </p>
            <p style={{ color: 'var(--slate)' }}>
              We build full value chains: land to processing, processing to port, port to global market.
            </p>
          </div>
        </div>
        <MetricsGrid metrics={agroMetrics} />
      </section>

      {/* CAPABILITIES */}
      <section className="container-x py-32 border-t hairline-bone">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="label">§ Capabilities</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 max-w-3xl">
              Land to <em className="italic">global market</em>.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed" style={{ color: 'var(--slate)' }}>
            Vertically integrated agro-industrial systems — designed for scale, engineered for export grade.
          </p>
        </div>
        <CapabilitiesGrid capabilities={agroCapabilities} />
      </section>

      {/* VALUE CHAIN */}
      <section id="value-chain" className="container-x py-32 border-t hairline-bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <span className="label">§ Value Chain</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6">
              Integrated <em className="italic accent-text">six-stage</em> ecosystem.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--bone-2)' }}>
              Each FON Agro deployment is structured as a closed-loop value chain — controlling quality,
              capturing margin, and ensuring food security at every stage.
            </p>
          </div>
        </div>

        <div>
          {VALUE_CHAIN.map((s, i) => (
            <div
              key={s.stage}
              className="grid grid-cols-12 gap-4 md:gap-8 py-8 border-b hairline-bone last:border-b-0 group"
            >
              <div className="col-span-2 md:col-span-1">
                <span
                  className="mono text-[10px] tracking-[0.2em]"
                  style={{ color: 'var(--accent)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="serif text-2xl md:text-3xl group-hover:opacity-80 transition-opacity">
                  {s.stage}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7 self-center">
                <p className="leading-relaxed" style={{ color: 'var(--bone-2)' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="mahikeng" className="container-x py-32 border-t hairline-bone">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="label">§ Project Portfolio</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 max-w-3xl">
              Active <em className="italic accent-text">portfolio</em>.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed" style={{ color: 'var(--slate)' }}>
            Six anchor platforms spanning Southern, Eastern, and West Africa.
          </p>
        </div>
        <ProjectsGrid projects={agroProjects} />
      </section>

      {/* INVESTMENT CTA */}
      <section className="container-x py-32 border-t hairline-bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="label">§ Capital Opportunity</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 mb-10">
              Partner in continental <em className="italic accent-text">food security</em>.
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--bone-2)' }}>
              FON Agro offers institutional-grade exposure to Africa's agro-industrial transformation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/investors" className="btn-primary">
                Agro Investment Memo <ArrowRight size={14} />
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
