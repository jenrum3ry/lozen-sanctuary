import Image from "next/image";
import { Artwork } from "@/data/art";
import { assetPath } from "@/lib/assetPath";

const categoryColors: Record<Artwork["category"], string> = {
  art: "text-[#f5a623] border-[#f5a623]/40",
  handmade: "text-[#00c9b1] border-[#00c9b1]/40",
  wearable: "text-[#7b5ea7] border-[#7b5ea7]/40",
};

const categoryLabel: Record<Artwork["category"], string> = {
  art: "Fine Art",
  handmade: "Handmade",
  wearable: "Wearable Art",
};

export function ArtCard({ artwork }: { artwork: Artwork }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-[#13101c] border border-[#7b5ea7]/20 transition-all duration-300 hover:border-[#f5a623]/50 hover:shadow-[0_0_24px_rgba(245,166,35,0.15)]">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={assetPath(artwork.image)}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0d0b12]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <p className="text-[#f0ece4] text-sm text-center leading-relaxed">{artwork.description}</p>
        </div>
      </div>
      <div className="p-4">
        <h3
          className="text-lg font-bold text-[#f0ece4] mb-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {artwork.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[#9c98a8] text-xs">{artwork.medium}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[artwork.category]}`}
          >
            {categoryLabel[artwork.category]}
          </span>
        </div>
      </div>
    </div>
  );
}
