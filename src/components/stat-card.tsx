interface CardProps {
  value?: string;
  content?: string;
}

export default function StatCard({ value, content }: CardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[40px] font-display font-medium leading-none">
        {value}
      </div>

      <div className="max-w-[180px] text-[15px] leading-snug text-(--color-text-secondary)">
        {content}
      </div>
    </div>
  );
}
