import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Foster, volunteer, or join a class. There are many ways to be part of the Sacred Space mission.",
};

export default function GetInvolvedPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        title="Get Involved"
        subtitle="Every hand offered is a life changed."
        centered
      />

      <p className="text-center text-[#2c1f14]/70 mb-20 text-lg leading-relaxed max-w-2xl mx-auto">
        Whether you open your home, offer your time, or invest in your own growth through our
        classes — every way you show up matters deeply to the animals and the mission.
      </p>

      {/* Foster */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-5xl">🏡</div>
          <SectionHeader title="Become a Foster" className="mb-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-[#2c1f14]/75 leading-relaxed mb-4">
              Fostering is one of the most powerful acts of love you can offer. By temporarily
              opening your home to an animal in need, you give them the space to heal in a safe,
              nurturing environment — and you free up capacity for Sacred Space to save more lives.
            </p>
            <p className="text-[#7a6555] text-sm leading-relaxed">
              Sacred Space provides guidance, support, and all necessary supplies. You provide the
              love, patience, and a safe space.
            </p>
          </div>
          <div className="space-y-3">
            {[
              "Provide a quiet, safe room",
              "Patience and consistency",
              "Willingness to follow care guidelines",
              "Open heart and open home",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-[#2c1f14]/70 text-sm">
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#c4622d] to-[#d4a843] shrink-0 flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <CTAButton href="https://www.facebook.com/share/1EcCPftfHo/" external variant="primary">
          Express Interest in Fostering
        </CTAButton>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c4622d]/20 to-transparent mb-20" />

      {/* Volunteer */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-5xl">🌿</div>
          <SectionHeader title="Volunteer" className="mb-0" />
        </div>
        <p className="text-[#2c1f14]/75 leading-relaxed mb-8">
          There are many ways to contribute your time and skills. From hands-on animal care to
          community outreach, every volunteer role strengthens our mission.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Animal Care", desc: "Feeding, socialization, grooming, and enrichment" },
            { title: "Fundraising", desc: "Help organize events, campaigns, and drives" },
            { title: "Social Media", desc: "Share posts, create content, and spread the word" },
            { title: "Transport", desc: "Vet runs, supply pickups, and rescue transport" },
            { title: "Grant Writing", desc: "Research and apply for funding opportunities" },
            { title: "Event Support", desc: "Assist at fundraisers, markets, and community events" },
          ].map((role) => (
            <div
              key={role.title}
              className="p-4 rounded-xl bg-[#f5ede0] border border-[#c4622d]/15 hover:border-[#7a9e7e]/40 transition-colors"
            >
              <h4
                className="text-[#7a9e7e] font-semibold mb-1 text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {role.title}
              </h4>
              <p className="text-[#7a6555] text-xs leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>
        <CTAButton href="https://www.facebook.com/share/1EcCPftfHo/" external variant="outline">
          Contact Us to Volunteer
        </CTAButton>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#c4622d]/20 to-transparent mb-20" />

      {/* Classes & Workshops */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-5xl">✨</div>
          <SectionHeader title="Classes & Workshops" className="mb-0" />
        </div>
        <div className="rounded-2xl p-8 bg-[#f5ede0] border border-[#b8826e]/25 mb-8">
          <p className="text-[#2c1f14]/75 leading-relaxed mb-4">
            Lozen offers classes and workshops designed to help people grow spiritually and embrace
            their unique talents and gifts. These gatherings are part of the broader Sacred Space
            mission — healing extends to humans too.
          </p>
          <p className="text-[#7a6555] text-sm leading-relaxed mb-6">
            Class schedules and topics are shared regularly on our Facebook page. Proceeds from
            classes and workshops support the animals in our care.
          </p>
          <p className="text-[#7a6555] text-sm italic">
            Full class listings and booking coming soon.
          </p>
        </div>
        <CTAButton href="https://www.facebook.com/share/1EcCPftfHo/" external variant="outline">
          View on Facebook for Updates
        </CTAButton>
      </section>
    </div>
  );
}
