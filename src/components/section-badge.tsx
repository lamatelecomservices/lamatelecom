interface SectionBadgeProps {
  label: string;
  className?: string;
  backgroundColor?: string;
  /** Pill shape (full radius) instead of small rounded corners */
  pill?: boolean;
}

export default function SectionBadge({
  label,
  className = "",
  backgroundColor = "var(--color-surface-warm-muted)",
  pill = false,
}: SectionBadgeProps) {
  return (
    <div
      style={{ backgroundColor }}
      className={`inline-flex items-center gap-2  px-4 py-3 w-fit ${
        pill ? "rounded-full" : "rounded-sm"
      } ${className}`}
    >
      <span className="bg-badge-icon-gradient h-5 w-5 rounded-xs" aria-hidden />
      <span className="text-o1 font-mono  tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}
