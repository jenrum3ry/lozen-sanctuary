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
      "bg-gradient-to-r from-[#c4622d] to-[#d4a843] text-white hover:scale-105 hover:shadow-[0_4px_20px_rgba(196,98,45,0.35)]",
    outline:
      "border-2 border-[#c4622d] text-[#c4622d] hover:bg-[#c4622d] hover:text-white hover:shadow-[0_4px_16px_rgba(196,98,45,0.2)]",
    ghost:
      "text-[#7a6555] hover:text-[#2c1f14] underline-offset-4 hover:underline",
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
