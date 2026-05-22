import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Ticker } from '@/components/ui/Ticker';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { MetricsGrid } from '@/components/sections/MetricsGrid';
import { CapabilitiesGrid } from '@/components/sections/CapabilitiesGrid';
import { techMetrics } from '@/lib/content/metrics';
import { techCapabilities } from '@/lib/content/capabilities';
import { ventures } from '@/lib/content/ventures';

export const metadata: Metadata = {
  title: 'FON Technologies · The Intelligence Layer',
  description:
    'FON Technologies builds applied AI, sovereign cloud, and industrial automation platforms across Africa — 12 ventures, 5 data center sites, $850M AUM.',
};

const TICKER_ITEMS = [
  'HELIOS AI · SERIES B · ACTIVE',
  'SOVEREIGN CLOUD · TIER-III · 3 NODES',
  'FON TECHNOLOGIES · 850M USD AUM',
  'GRIDOS · DISPATCH OPTIMIZATION',
  'TERRAID · SOVEREIGN IDENTITY · PILOT',
  'AGRISENSE · YIELD INTELLIGENCE',
];

export default function TechnologiesPage() {
  return (
    <div data-theme="tech">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
            style={{ background: 'var(--accent-deep)', opacity: 0.2 }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: '#7c5cff', opacity: 0.1 }}
          />
        </div>

        <div className="container-x relative z-10">
          <div className="mb-8">
            <Breadcrumb items={[{ label: 'FON', href: '/' }, { label: 'Technologies Division' }]} />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
            <span className="label">FON · 03 · Digital Infrastructure</span>
            <span
              className="mono text-[10px] flex items-center gap-2"
              style={{ color: 'var(--slate)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }}
              />
              SYSTEMS ONLINE
            </span>
          </div>

          <h1 className="serif font-light leading-[0.95] text-[clamp(48px,9vw,148px)] max-w-[1500px] mb-12">
            The intelligence<br />
            layer of an<br />
            <span className="relative inline-block">
              <em className="italic accent-text font-normal">African</em> century<span className="animate-blink" style={{ color: 'var(--accent)' }}>.</span>
              <span
                className="absolute -bottom-2 left-0 right-0 h-1 origin-left"
                style={{ background: 'var(--accent)', boxShadow: '0 0 12px var(--accent)' }}
              />
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <p
              className="lg:col-span-6 text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--bone-2)' }}
            >
              FON Technologies builds and operates the digital backbone of FON's industrial platform —
              applied AI, sovereign cloud, automation, and enterprise software at continental scale.
            </p>
            <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
              <Link href="#ventures" className="btn-primary">
                View Ventures <ArrowRight size={14} />
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
              Scroll · 12 Ventures · 5 Sites · 850M USD
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
              Sovereign-grade <em className="italic accent-text">digital infrastructure</em>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--bone-2)' }}>
              Technology is no longer adjacent — it is the operating substrate of industry. FON
              Technologies builds the AI, cloud, and automation layer that powers FON's energy and agro
              platforms while serving sovereign clients across the continent.
            </p>
            <p style={{ color: 'var(--slate)' }}>We invest where compute meets sovereignty.</p>
          </div>
        </div>
        <MetricsGrid metrics={techMetrics} />
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="container-x py-32 border-t hairline-bone">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="label">§ Capability Stack</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6 max-w-3xl">
              Six layers. One <em className="italic">intelligence</em> platform.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed" style={{ color: 'var(--slate)' }}>
            Vertically integrated: from foundation models down to silicon-grade compute infrastructure.
          </p>
        </div>
        <CapabilitiesGrid capabilities={techCapabilities} />
      </section>

      {/* VENTURES */}
      <section id="ventures" className="container-x py-32 border-t hairline-bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <span className="label">§ Portfolio Ventures</span>
            <h2 className="serif font-light text-[clamp(36px,5vw,72px)] leading-[1] mt-6">
              <em className="italic accent-text">Twelve</em> ventures. One mandate.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p style={{ color: 'var(--bone-2)' }} className="leading-relaxed">
              FON Technologies operates a portfolio of internally built and strategically backed ventures,
              each addressing infrastructure-grade problems at continental scale.
            </p>
          </div>
        </div>

        <div className="border hairline-bone">
          <div
            className="flex items-center justify-between px-6 py-3 border-b hairline-bone"
            style={{ background: 'var(--ink-2)' }}
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}
              />
              <span
                className="mono text-[10px] tracking-[0.2em]"
                style={{ color: 'var(--bone-2)' }}
              >
                FON.TECHNOLOGIES :: VENTURE_INDEX
              </span>
            </div>
            <span className="mono text-[10px]" style={{ color: 'var(--slate)' }}>
              PUBLIC_REGISTRY
            </span>
          </div>

          {ventures.map((v) => (
            <div
              key={v.code}
              className="grid grid-cols-12 gap-4 p-6 border-b hairline-bone last:border-b-0 group cursor-pointer transition-colors hover:bg-[var(--ink-2)]"
            >
              <div
                className="col-span-12 md:col-span-1 mono text-[10px] flex items-center"
                style={{ color: 'var(--accent)' }}
              >
                {v.code}
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="serif text-xl">{v.name}</div>
                <div
                  className="mono text-[10px] mt-1"
                  style={{ color: 'var(--slate)' }}
                >
                  {v.focus}
                </div>
              </div>
              <div
                className="col-span-12 md:col-span-6 text-sm flex items-center"
                style={{ color: 'var(--bone-2)' }}
              >
                {v.description}
              </div>
              <div className="col-span-12 md:col-span-2 flex items-center justify-between md:justify-end gap-3">
                <span
                  className="mono text-[10px] tracking-[0.15em] uppercase px-2 py-1 border hairline-bone"
                  style={{ color: 'var(--bone-2)' }}
                >
                  {v.stage}
                </span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:rotate-45 transition-all duration-500"
                  style={{ color: 'var(--bone-2)' }}
                />
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
              Back the <em className="italic accent-text">intelligence</em> layer.
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--bone-2)' }}>
              FON Technologies provides growth-stage exposure to applied AI, sovereign cloud, and
              industrial automation across the continent.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/investors" className="btn-primary">
                Technology Memo <ArrowRight size={14} />
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
