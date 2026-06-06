import Image from "next/image";
import { Artwork } from "@/data/art";
import { assetPath } from "@/lib/assetPath";

const categoryColors: Record<Artwork["category"], string> = {
  art: "text-[#c4622d] border-[#c4622d]/40",
  handmade: "text-[#7a9e7e] border-[#7a9e7e]/40",
  wearable: "text-[#b8826e] border-[#b8826e]/40",
};

const categoryLabel: Record<Artwork["category"], string> = {
  art: "Fine Art",
  handmade: "Handmade",
  wearable: "Wearable Art",
};

export function ArtCard({ artwork }: { artwork: Artwork }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-[#f5ede0] border border-[#c4622d]/15 transition-all duration-300 hover:border-[#d4a843]/50 hover:shadow-[0_8px_32px_rgba(212,168,67,0.2)]">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={assetPath(artwork.image)}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#faf6f0]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <p className="text-[#2c1f14] text-sm text-center leading-relaxed">{artwork.description}</p>
        </div>
      </div>
      <div className="p-4">
        <h3
          className="text-lg font-bold text-[#2c1f14] mb-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {artwork.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[#7a6555] text-xs">{artwork.medium}</span>
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
