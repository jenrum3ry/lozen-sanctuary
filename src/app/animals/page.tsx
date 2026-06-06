import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimalCard } from "@/components/ui/AnimalCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { animals } from "@/data/animals";

export const metadata: Metadata = {
  title: "Our Animals",
  description:
    "Meet the residents of Sacred Space Animal Sanctuary. Every soul has value. Every life matters.",
};

export default function AnimalsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        title="Our Sanctuary Residents"
        subtitle="Every soul has value. Every life matters."
        centered
      />

      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-[#2c1f14]/75 leading-relaxed mb-4">
          Sacred Space functions as a true sanctuary. The animals in our care are not simply waiting
          for adoption — they are{" "}
          <span className="text-[#7a9e7e] font-medium">home</span>. Each resident has a story of
          survival, and each one deserves to heal fully, without hurry.
        </p>
        <p className="text-[#7a6555] text-sm">
          Lozen is deeply selective about placements and takes the time to find the right match for
          each animal. If you feel called to offer a forever home, please reach out through our
          contact page.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {animals.map((animal) => (
          <AnimalCard key={animal.name} animal={animal} />
        ))}
      </div>

      <div className="text-center rounded-2xl p-10 bg-[#f5ede0] border border-[#c4622d]/15">
        <p className="text-[#2c1f14]/75 mb-6 text-lg italic">
          &ldquo;Every donation becomes an act of mercy — a promise that no animal will be left
          behind.&rdquo;
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <CTAButton href="/support" variant="primary">
            Support Their Care
          </CTAButton>
          <CTAButton href="/get-involved" variant="outline">
            Become a Foster
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
