type Props = {
  items: string[];
};

export function Ticker({ items }: Props) {
  const loop = [...items, ...items];
  return (
    <div
      className="border-y hairline-bone overflow-hidden py-3"
      style={{ background: 'var(--ink-2)' }}
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="mono text-[10px] tracking-[0.2em] mx-8 flex items-center gap-3"
            style={{ color: 'var(--bone-2)' }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
