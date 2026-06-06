import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArtCard } from "@/components/ui/ArtCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { artworks } from "@/data/art";

export const metadata: Metadata = {
  title: "Art & Spirit",
  description:
    "Lozen's sacred creations — fine art, handmade spiritual goods, and wearable art. A life of magick in motion.",
};

export default function ArtPage() {
  const categories = ["art", "handmade", "wearable"] as const;
  const categoryTitles = {
    art: "Fine Art",
    handmade: "Handmade Sacred Goods",
    wearable: "Wearable Art",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        title="Art & Spirit"
        subtitle="A life of magick in motion"
        centered
      />

      {/* Intro */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-[#f0ece4]/75 leading-relaxed mb-4">
          Lozen is not only the founder of Sacred Space — she is a spiritual artist and maker.
          Her creations range from sacred geometry fine art to handmade windchimes, window
          fascinators, crystal goods, and one-of-a-kind wearable pieces.
        </p>
        <p className="text-[#9c98a8] text-sm">
          Purchases from the shop directly support the animals in Lozen&apos;s care. Every item
          carries intention, crafted with love and spiritual purpose.
        </p>
      </div>

      {/* Gallery by category */}
      {categories.map((cat) => {
        const items = artworks.filter((a) => a.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="mb-20">
            <h3
              className="text-2xl font-bold text-gradient mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {categoryTitles[cat]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((artwork) => (
                <ArtCard key={artwork.title} artwork={artwork} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Classes callout */}
      <div className="rounded-2xl p-8 md:p-10 bg-[#13101c] border border-[#7b5ea7]/30 mb-16 text-center glow-purple">
        <div className="text-5xl mb-4">🎓</div>
        <h3
          className="text-2xl font-bold text-gradient mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Classes & Workshops
        </h3>
        <p className="text-[#f0ece4]/75 max-w-xl mx-auto mb-6 leading-relaxed">
          Lozen offers spiritual classes and workshops to help you discover and embrace your unique
          gifts and talents. Proceeds from classes support the sanctuary residents.
        </p>
        <CTAButton href="/get-involved" variant="primary">
          Learn More
        </CTAButton>
      </div>

      {/* Commission / Inquire */}
      <div className="text-center">
        <p className="text-[#9c98a8] mb-6">
          Interested in a piece? Custom orders, commissions, and availability are shared on
          Facebook.
        </p>
        <CTAButton href="https://www.facebook.com/share/1EcCPftfHo/" external variant="outline">
          Inquire on Facebook
        </CTAButton>
      </div>
    </div>
  );
}
