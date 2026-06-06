import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/animals", label: "Our Animals" },
  { href: "/art", label: "Art & Spirit" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/support", label: "Support Us" },
];

export function Footer() {
  return (
    <footer className="bg-[#f5ede0] border-t border-[#c4622d]/15 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold text-gradient mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sacred Space
            </h3>
            <p className="text-[#7a6555] text-sm leading-relaxed mb-4">
              Animal Sanctuary & Rescue
              <br />
              Established 2018
            </p>
            <p className="text-[#2c1f14]/50 text-sm italic">
              &ldquo;join us in saving lives&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[#2c1f14] font-semibold mb-4 text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Navigate
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#7a6555] text-sm hover:text-[#c4622d] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-[#2c1f14] font-semibold mb-4 text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.facebook.com/share/1EcCPftfHo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7a6555] text-sm hover:text-[#c4622d] transition-colors duration-200 flex items-center gap-2"
                >
                  <span>📘</span> Facebook Page
                </a>
              </li>
              <li>
                <a
                  href="mailto:sacredspacesanctuary@email.com"
                  className="text-[#7a6555] text-sm hover:text-[#c4622d] transition-colors duration-200 flex items-center gap-2"
                >
                  <span>✉️</span> Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1EcCPftfHo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7a6555] text-sm hover:text-[#c4622d] transition-colors duration-200 flex items-center gap-2"
                >
                  <span>💜</span> Donate on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#c4622d]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#7a6555] text-xs">
            © {new Date().getFullYear()} Sacred Space Animal Sanctuary & Rescue. All rights reserved.
          </p>
          <p className="text-[#7a6555]/50 text-xs">
            For the forgotten. For the voiceless. For the healing. 🐾
          </p>
        </div>
      </div>
    </footer>
  );
}
