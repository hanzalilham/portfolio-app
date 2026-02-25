interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-text-muted bg-surface border border-border rounded">
      {children}
    </span>
  );
}
