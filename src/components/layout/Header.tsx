"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { assetPath } from "@/lib/assetPath";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/animals", label: "Our Animals" },
  { href: "/art", label: "Art & Spirit" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/support", label: "Support Us" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf6f0]/90 backdrop-blur-md border-b border-[#c4622d]/15 warm-shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c4622d]/20">
              <Image
                src={assetPath("/logo-light.jpg")}
                alt="Sacred Space Animal Sanctuary"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span
              className="text-sm font-bold leading-tight hidden sm:block"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-gradient">Sacred Space</span>
              <br />
              <span className="text-[#7a6555] text-xs font-normal">Sanctuary & Rescue</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-[#c4622d] bg-[#c4622d]/8"
                    : "text-[#7a6555] hover:text-[#2c1f14] hover:bg-[#f5ede0]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-[#f5ede0] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-[#2c1f14] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#2c1f14] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#2c1f14] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 pb-4" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-[#c4622d] bg-[#c4622d]/8"
                    : "text-[#7a6555] hover:text-[#2c1f14] hover:bg-[#f5ede0]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
