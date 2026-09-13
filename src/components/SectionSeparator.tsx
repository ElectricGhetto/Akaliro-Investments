interface SectionSeparatorProps {
  title: string;
  className?: string;
}

export default function SectionSeparator({ title, className = '' }: SectionSeparatorProps) {
  return (
    <div className={`py-6 px-6 text-center ${className}`}>
      <h2 className="text-2xl font-bold text-[#298600]">{title}</h2>
    </div>
  );
}

