import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "At Sacred Space Animal Sanctuary & Rescue, we believe every animal is a sacred soul deserving of safety, dignity, healing, and unconditional love.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        title="Our Mission"
        subtitle="Every soul is honored. Every life matters."
        centered
      />

      <div className="space-y-6 text-[#2c1f14]/75 leading-relaxed text-base md:text-lg mb-20">
        <p className="text-[#2c1f14] text-xl md:text-2xl font-medium leading-relaxed border-l-4 border-[#c4622d] pl-6 italic">
          At Sacred Space Animal Sanctuary & Rescue, we believe every animal is a sacred soul
          deserving of safety, dignity, healing, and unconditional love.
        </p>

        <p>
          Our mission is to rescue, protect, rehabilitate, and provide lifelong sanctuary to animals
          who have been abandoned, neglected, abused, forgotten, or left without a voice. We are
          more than a rescue — we are a sanctuary of healing where wounded bodies are nurtured,
          fearful hearts are restored, and spirits are given the opportunity to shine once again.
        </p>

        <p>
          We envision a peaceful sanctuary in the countryside where animals can experience freedom,
          security, and joy. A place where they can run through open fields, rest beneath the trees,
          feel the warmth of compassion, and know they are finally home. Here, healing extends
          beyond physical care. Through patience, kindness, respect, and connection, we honor the
          emotional and spiritual well-being of every animal entrusted to us.
        </p>

        <p>
          Sacred Space is founded upon the belief that love is a transformative force. Every life
          matters. Every soul has value. Every animal deserves the chance to live free from
          suffering and fear.
        </p>
      </div>

      {/* The Dream */}
      <div className="rounded-2xl p-8 md:p-10 bg-[#f5ede0] border border-[#c4622d]/20 mb-20 warm-shadow">
        <h3
          className="text-2xl font-bold text-gradient mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Dream
        </h3>
        <p className="text-[#2c1f14]/75 leading-relaxed mb-6">
          Our work depends upon the generosity of compassionate hearts. Financial support allows us
          to provide lifesaving veterinary care, emergency medical treatment, nutritious food, safe
          shelter, enrichment, rehabilitation, and the daily care that each resident requires. Every
          donation becomes an act of mercy, every contribution a promise that no animal will be left
          behind.
        </p>
        <p className="text-[#2c1f14]/75 leading-relaxed mb-8">
          Together, we are creating more than a sanctuary — we are creating a refuge of hope, a
          place of healing, and a living testament to the power of compassion.
        </p>
        <CTAButton href="/support" variant="primary">
          Help Build the Dream
        </CTAButton>
      </div>

      {/* For the... */}
      <div className="text-center mb-20 space-y-3">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c4622d]/30 to-transparent mb-12" />
        {["the forgotten.", "the abandoned.", "the wounded.", "the voiceless."].map((line) => (
          <p
            key={line}
            className="text-xl md:text-2xl font-bold text-gradient"
            style={{ fontFamily: "var(--font-display)" }}
          >
            For {line}
          </p>
        ))}
        <p className="text-[#7a6555] mt-8 text-lg italic">
          We stand as guardians of their journey, caretakers of their healing, and witnesses to
          their transformation.
        </p>
      </div>

      {/* Welcome */}
      <div className="text-center rounded-2xl p-8 bg-[#f5ede0] border border-[#d4a843]/25 mb-20">
        <p className="text-[#2c1f14] text-lg leading-relaxed">
          Welcome to Sacred Space Animal Sanctuary & Rescue —{" "}
          <span className="text-gradient font-semibold">
            where love rescues, healing begins, and every soul is honored.
          </span>
        </p>
      </div>

      {/* About Lozen */}
      <SectionHeader title="Lozen's Story" subtitle="A life of magick in motion" />
      <div className="bg-[#f5ede0] rounded-2xl p-8 border border-[#c4622d]/15 mb-12">
        <p className="text-[#7a6555] text-center italic mb-4">
          Lozen&apos;s personal story is coming soon.
        </p>
        <p className="text-[#2c1f14]/60 text-center text-sm">
          Founder of Sacred Space Animal Sanctuary & Rescue, spiritual artist, healer, and
          guardian of the voiceless — since 2018.
        </p>
      </div>

      {/* History */}
      <SectionHeader title="Our History" />
      <div className="flex items-start gap-6">
        <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#d4a843] to-[#c4622d] flex items-center justify-center text-white font-bold text-sm">
          2018
        </div>
        <div>
          <h4
            className="text-[#2c1f14] font-semibold mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sacred Space is Founded
          </h4>
          <p className="text-[#7a6555] text-sm leading-relaxed">
            What began as one person&apos;s refusal to look away became a mission. Sacred Space
            Animal Sanctuary & Rescue was established with a simple, unwavering belief: every
            animal deserves a safe place to heal and be loved.
          </p>
        </div>
      </div>
    </div>
  );
}
