interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-3">
        {title}<span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="text-text-muted text-sm md:text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
