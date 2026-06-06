import Image from "next/image";
import { Animal } from "@/data/animals";

const speciesLabel: Record<Animal["species"], string> = {
  cat: "🐱 Cat",
  dog: "🐶 Dog",
  rabbit: "🐰 Rabbit",
  other: "🐾 Animal",
};

export function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-[#13101c] border border-[#7b5ea7]/20 transition-all duration-300 hover:border-[#00c9b1]/50 hover:shadow-[0_0_24px_rgba(0,201,177,0.15)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b12] via-transparent to-transparent" />
        <span className="absolute top-3 right-3 bg-[#0d0b12]/70 backdrop-blur-sm text-[#9c98a8] text-xs px-3 py-1 rounded-full border border-[#7b5ea7]/30">
          {speciesLabel[animal.species]}
        </span>
      </div>
      <div className="p-5">
        <h3
          className="text-xl font-bold text-[#f0ece4] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {animal.name}
        </h3>
        <p className="text-[#9c98a8] text-sm leading-relaxed mb-3">{animal.description}</p>
        <p className="text-[#f0ece4]/70 text-sm leading-relaxed line-clamp-3">{animal.story}</p>
      </div>
    </div>
  );
}
