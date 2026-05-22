type Props = {
  children: React.ReactNode;
  number?: string;
};

export function SectionLabel({ children, number }: Props) {
  return (
    <div className="flex items-center gap-3">
      {number && (
        <span className="mono text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--slate)' }}>
          {number}
        </span>
      )}
      <span className="label">§ {children}</span>
    </div>
  );
}
