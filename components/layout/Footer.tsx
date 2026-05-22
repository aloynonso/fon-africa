import Link from 'next/link';
import { footerNav } from '@/lib/content/navigation';

export function Footer() {
  return (
    <footer className="border-t hairline-bone" style={{ background: 'var(--ink-2)' }}>
      <div className="container-x py-20">
        {/* Monumental wordmark */}
        <div className="serif font-light text-[clamp(72px,14vw,220px)] leading-[0.9] mb-16 -ml-1">
          <span className="accent-text">FON</span>
          <span style={{ color: 'var(--ink-3)' }}>.AFRICA</span>
        </div>

        {/* Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {Object.entries(footerNav).map(([title, items]) => (
            <div key={title}>
              <div
                className="mono text-[10px] tracking-[0.2em] uppercase mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {title}
              </div>
              <div className="space-y-2">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-bone-2/80 hover:text-bone transition-colors underline-grow"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t hairline-bone pt-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="mono text-[10px] tracking-[0.15em] uppercase text-bone-2/60">
            © {new Date().getFullYear()} Father of Nations · A Pan-African Industrial Group
          </div>
          <div className="mono text-[10px] tracking-[0.15em] uppercase text-bone-2/60">
            Building Nations · Building the Continent
          </div>
        </div>
      </div>
    </footer>
  );
}
