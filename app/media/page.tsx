import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Media · Reports & Press',
  description: 'Annual reports, whitepapers, press releases, and media inquiries for Father of Nations.',
};

const REPORTS = [
  { title: 'Annual Report 2025', kind: 'Annual Report', size: 'PDF · 12MB', date: 'Mar 2025' },
  { title: 'Energy Sector Outlook', kind: 'Whitepaper', size: 'PDF · 4MB', date: 'Feb 2025' },
  { title: 'Agro Investment Memorandum', kind: 'Investor Memo', size: 'PDF · 8MB', date: 'Jan 2025' },
  { title: 'Sovereign AI · A Continental Framework', kind: 'Whitepaper', size: 'PDF · 6MB', date: 'Dec 2024' },
];

const PRESS = [
  { date: 'Mar 2025', headline: 'FON Energy reaches financial close on Copperbelt Industrial PPA' },
  { date: 'Feb 2025', headline: 'FON Agro announces 12,000-ha Mahikeng integrated agro-power platform' },
  { date: 'Jan 2025', headline: 'Helios AI raises Series B led by sovereign technology fund' },
  { date: 'Dec 2024', headline: 'FON Group surpasses $8B in pipeline value across 14 countries' },
];

export default function MediaPage() {
  return (
    <>
      <section className="container-x pt-40 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
          <span className="label">§ Media · Reports · Press</span>
        </div>

        <h1 className="serif font-light leading-[0.95] text-[clamp(48px,8vw,128px)] max-w-[1400px] mb-12">
          <em className="italic accent-text font-normal">Public</em><br />
          record.
        </h1>
      </section>

      <section id="reports" className="container-x py-24 border-t hairline-bone">
        <span className="label">§ Reports & Whitepapers</span>
        <h2 className="serif font-light text-[clamp(32px,4vw,56px)] leading-[1] mt-6 mb-12">
          Latest <em className="italic">publications</em>.
        </h2>

        <div className="border hairline-bone">
          {REPORTS.map((r) => (
            <div
              key={r.title}
              className="grid grid-cols-12 gap-4 p-6 border-b hairline-bone last:border-b-0 group cursor-pointer transition-colors hover:bg-[var(--ink-2)]"
            >
              <div className="col-span-12 md:col-span-2 mono text-[10px] tracking-[0.15em] uppercase flex items-center" style={{ color: 'var(--accent)' }}>
                {r.kind}
              </div>
              <div className="col-span-12 md:col-span-6 serif text-xl">{r.title}</div>
              <div className="col-span-6 md:col-span-2 mono text-xs flex items-center" style={{ color: 'var(--slate)' }}>
                {r.size}
              </div>
              <div className="col-span-6 md:col-span-2 flex items-center justify-end gap-2">
                <span className="mono text-xs" style={{ color: 'var(--slate)' }}>{r.date}</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:rotate-45 transition-transform duration-500"
                  style={{ color: 'var(--bone-2)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="press" className="container-x py-24 border-t hairline-bone">
        <span className="label">§ Press</span>
        <h2 className="serif font-light text-[clamp(32px,4vw,56px)] leading-[1] mt-6 mb-12">
          Recent <em className="italic">announcements</em>.
        </h2>

        <div className="border hairline-bone">
          {PRESS.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 p-6 border-b hairline-bone last:border-b-0"
            >
              <div className="col-span-12 md:col-span-2 mono text-xs flex items-center" style={{ color: 'var(--accent)' }}>
                {p.date}
              </div>
              <div className="col-span-12 md:col-span-10 serif text-lg">{p.headline}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link href="/contact" className="btn-ghost">
            Media Inquiries <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
