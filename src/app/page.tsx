import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { assetPath } from "@/lib/assetPath";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Soft warm orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, var(--color-accent-gold) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, var(--color-accent-terracotta) 0%, transparent 70%)" }} />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, var(--color-accent-sage) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mx-auto mb-8 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden warm-shadow-lg border-4 border-[#d4a843]/30">
            <Image
              src={assetPath("/logo-light.jpg")}
              alt="Sacred Space Animal Sanctuary and Rescue"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight text-gradient"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sacred Space
          </h1>
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#7a6555] mb-6 tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Animal Sanctuary & Rescue
          </h2>

          {/* Tagline */}
          <p className="text-[#2c1f14]/70 text-lg md:text-xl italic mb-10">
            join us in saving lives 🐾
          </p>

          {/* Dream quote */}
          <blockquote className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-[#f5ede0]/80 border border-[#c4622d]/20 backdrop-blur-sm warm-shadow">
            <p className="text-[#2c1f14]/80 text-base md:text-lg leading-relaxed italic">
              &ldquo;Our dream is to build a permanent country sanctuary where rescued animals can
              heal, thrive, and live in peace. With your support, we can provide medical care, food,
              shelter, safety, and a future filled with love. Together, we can create a sacred space
              where every animal is valued, protected, and free.&rdquo;
            </p>
            <footer className="mt-4 text-[#c4622d] text-sm">— Lozen, Founder ❤️</footer>
          </blockquote>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/support" variant="primary">
              Support the Mission
            </CTAButton>
            <CTAButton href="/get-involved" variant="outline">
              Get Involved
            </CTAButton>
            <CTAButton href="/about" variant="ghost">
              Our Story →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-[#c4622d]/30 to-transparent mb-16" />
          <p className="text-[#2c1f14]/75 text-lg md:text-xl leading-relaxed mb-6">
            We are more than a rescue — we are a{" "}
            <span className="text-gradient font-semibold">sanctuary of healing</span> where
            wounded bodies are nurtured, fearful hearts are restored, and spirits are given the
            opportunity to shine once again.
          </p>
          <p className="text-[#7a6555] mb-8">
            Every animal here is a sacred soul deserving of safety, dignity, and unconditional love.
          </p>
          <CTAButton href="/about" variant="outline">
            Read Our Mission
          </CTAButton>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 px-4 bg-[#f5ede0]/60">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center text-3xl md:text-4xl font-bold text-gradient mb-16"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How You Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#faf6f0] border border-[#c4622d]/15 hover:border-[#c4622d]/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(196,98,45,0.12)] text-center">
              <div className="text-5xl mb-4">💛</div>
              <h3
                className="text-xl font-bold text-[#c4622d] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Donate
              </h3>
              <p className="text-[#7a6555] text-sm leading-relaxed mb-6">
                Every donation becomes an act of mercy — funding veterinary care, food, shelter,
                and the daily love each resident deserves.
              </p>
              <CTAButton href="/support" variant="primary">
                Give Today
              </CTAButton>
            </div>

            <div className="p-8 rounded-2xl bg-[#faf6f0] border border-[#7a9e7e]/20 hover:border-[#7a9e7e]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(122,158,126,0.15)] text-center">
              <div className="text-5xl mb-4">🏡</div>
              <h3
                className="text-xl font-bold text-[#7a9e7e] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Foster & Volunteer
              </h3>
              <p className="text-[#7a6555] text-sm leading-relaxed mb-6">
                Open your heart and home. Fostering saves lives and gives healing animals the space
                to flourish.
              </p>
              <CTAButton href="/get-involved" variant="outline">
                Learn How
              </CTAButton>
            </div>

            <div className="p-8 rounded-2xl bg-[#faf6f0] border border-[#b8826e]/20 hover:border-[#b8826e]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(184,130,110,0.15)] text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3
                className="text-xl font-bold text-[#b8826e] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Art & Spirit
              </h3>
              <p className="text-[#7a6555] text-sm leading-relaxed mb-6">
                Explore Lozen&apos;s sacred creations, handmade spiritual goods, and classes
                designed to help you embrace your gifts.
              </p>
              <CTAButton href="/art" variant="outline">
                Explore
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Animals Teaser */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🐾</div>
          <h2
            className="text-3xl md:text-4xl font-bold text-gradient mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meet Our Residents
          </h2>
          <p className="text-[#7a6555] mb-8 leading-relaxed">
            Sacred Space is home to animals who have been abandoned, neglected, and forgotten.
            Here, every soul is honored. Every life matters.
          </p>
          <CTAButton href="/animals" variant="outline">
            Meet the Animals
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
