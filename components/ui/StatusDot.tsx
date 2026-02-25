"use client";

export function StatusDot() {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-text-secondary">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
      Building at Amadeus
    </span>
  );
}
