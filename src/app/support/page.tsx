import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FundraisingThermometer } from "@/components/ui/FundraisingThermometer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Every donation is an act of mercy. Help us build a permanent sanctuary where every animal is valued, protected, and free.",
};

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        title="Support Our Mission"
        subtitle="Every act of generosity is a promise kept."
        centered
      />

      <p className="text-center text-[#2c1f14]/70 mb-16 text-lg leading-relaxed max-w-2xl mx-auto">
        Our work depends upon the generosity of compassionate hearts. Your support allows us to
        provide lifesaving veterinary care, emergency treatment, nutritious food, safe shelter, and
        the daily love each resident deserves.
      </p>

      <div className="mb-16">
        <FundraisingThermometer />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: "🩺",
            title: "Veterinary Care",
            desc: "Emergency treatment, wellness visits, surgeries, and medications that keep our residents healthy.",
          },
          {
            icon: "🍽️",
            title: "Food & Nutrition",
            desc: "High-quality food and supplements tailored to each animal's needs and healing journey.",
          },
          {
            icon: "🏡",
            title: "Safe Shelter",
            desc: "Safe, enriched living spaces where animals can rest, play, and recover in peace.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-2xl bg-[#f5ede0] border border-[#c4622d]/15 text-center"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3
              className="text-[#2c1f14] font-semibold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.title}
            </h3>
            <p className="text-[#7a6555] text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl p-8 bg-[#f5ede0] border border-[#7a9e7e]/25 mb-16">
        <h3
          className="text-xl font-bold text-[#7a9e7e] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Other Ways to Support
        </h3>
        <ul className="space-y-4">
          {[
            { emoji: "📘", text: "Follow and share our Facebook page to spread the word" },
            { emoji: "🛍️", text: "Purchase Lozen's handmade spiritual art and sacred creations — proceeds support the sanctuary" },
            { emoji: "🎓", text: "Attend a class or workshop — your investment in growth supports theirs" },
            { emoji: "📦", text: "Donate supplies: food, bedding, toys, litter, and medical items" },
            { emoji: "💬", text: "Share our story with people who might become fosters or volunteers" },
          ].map((item) => (
            <li key={item.text} className="flex items-start gap-3 text-[#2c1f14]/70 text-sm leading-relaxed">
              <span className="text-xl shrink-0">{item.emoji}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c4622d]/25 to-transparent mb-12" />
        <p
          className="text-2xl font-bold text-gradient mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Together, we are creating something sacred.
        </p>
        <p className="text-[#7a6555] mb-8">
          A refuge of hope. A place of healing. A living testament to the power of compassion.
        </p>
        <CTAButton href="https://www.facebook.com/share/1EcCPftfHo/" external variant="primary">
          Donate on Facebook 💜
        </CTAButton>
      </div>
    </div>
  );
}
