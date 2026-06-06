import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  className?: string;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#f5a623] to-[#00c9b1] text-[#0d0b12] hover:scale-105 hover:shadow-[0_0_24px_rgba(0,201,177,0.4)]",
    outline:
      "border border-[#7b5ea7] text-[#f0ece4] hover:border-[#00c9b1] hover:text-[#00c9b1] hover:shadow-[0_0_16px_rgba(0,201,177,0.2)]",
    ghost:
      "text-[#9c98a8] hover:text-[#f0ece4] underline-offset-4 hover:underline",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
