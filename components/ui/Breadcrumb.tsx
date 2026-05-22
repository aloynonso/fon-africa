import Link from 'next/link';

export type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
};

export function Breadcrumb({ items }: Props) {
  return (
    <div className="flex items-center gap-3 mono text-[10px] tracking-[0.2em] uppercase">
      {items.map((c, i) => (
        <span key={i} className="flex items-center gap-3">
          {c.href ? (
            <Link href={c.href} className="hover:opacity-70 transition" style={{ color: 'var(--slate)' }}>
              {c.label}
            </Link>
          ) : (
            <span style={{ color: 'var(--accent-bright)' }}>{c.label}</span>
          )}
          {i < items.length - 1 && <span style={{ color: 'var(--slate)' }}>/</span>}
        </span>
      ))}
    </div>
  );
}
