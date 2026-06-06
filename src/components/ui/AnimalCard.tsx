import Image from "next/image";
import { Animal } from "@/data/animals";
import { assetPath } from "@/lib/assetPath";

const speciesLabel: Record<Animal["species"], string> = {
  cat: "🐱 Cat",
  dog: "🐶 Dog",
  rabbit: "🐰 Rabbit",
  other: "🐾 Animal",
};

export function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-[#f5ede0] border border-[#c4622d]/15 transition-all duration-300 hover:border-[#c4622d]/40 hover:shadow-[0_8px_32px_rgba(196,98,45,0.15)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={assetPath(animal.image)}
          alt={animal.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1f14]/40 via-transparent to-transparent" />
        <span className="absolute top-3 right-3 bg-[#faf6f0]/85 backdrop-blur-sm text-[#7a6555] text-xs px-3 py-1 rounded-full border border-[#c4622d]/20">
          {speciesLabel[animal.species]}
        </span>
      </div>
      <div className="p-5">
        <h3
          className="text-xl font-bold text-[#2c1f14] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {animal.name}
        </h3>
        <p className="text-[#7a6555] text-sm leading-relaxed mb-3">{animal.description}</p>
        <p className="text-[#2c1f14]/65 text-sm leading-relaxed line-clamp-3">{animal.story}</p>
      </div>
    </div>
  );
}
