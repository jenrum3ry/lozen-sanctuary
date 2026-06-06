interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient leading-tight mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <div
        className={`h-px bg-gradient-to-r from-[#d4a843] via-[#c4622d] to-[#7a9e7e] ${centered ? "mx-auto w-32" : "w-24"}`}
      />
      {subtitle && (
        <p
          className="mt-4 text-[#7a6555] text-lg italic"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
