export interface Artwork {
  title: string;
  description: string;
  image: string;
  medium: string;
  category: "art" | "handmade" | "wearable";
}

export const artworks: Artwork[] = [
  {
    title: "Flower of Life — Solar",
    description:
      "Sacred geometry rendered in warm amber and gold tones, celebrating the interconnection of all living things.",
    image: "/images/art/placeholder.jpg",
    medium: "Digital / Giclée Print",
    category: "art",
  },
  {
    title: "Window Fascinator — Crystal Keys",
    description:
      "Handcrafted window hanging with vintage brass keys, crystal beads, and iridescent wire wrapping. Each piece is one of a kind.",
    image: "/images/art/placeholder.jpg",
    medium: "Handmade — Wire, Crystal, Brass",
    category: "handmade",
  },
  {
    title: "Windchime — Ocean Dream",
    description:
      "Hand-assembled windchime with sea glass, moonstone beads, and driftwood. Designed to catch the breeze and the light in equal measure.",
    image: "/images/art/placeholder.jpg",
    medium: "Handmade — Sea Glass, Moonstone, Driftwood",
    category: "handmade",
  },
  {
    title: "Sacred Spiral",
    description:
      "A meditation on cycles — birth, death, renewal — expressed through layered geometry and chromatic flow.",
    image: "/images/art/placeholder.jpg",
    medium: "Digital / Giclée Print",
    category: "art",
  },
  {
    title: "Cat Spirit Tee",
    description:
      "Wearable art celebrating feline spirit. Printed on soft black cotton. Proceeds support sanctuary care.",
    image: "/images/art/placeholder.jpg",
    medium: "Screen Print on Cotton",
    category: "wearable",
  },
  {
    title: "Mama's Dream Pillow",
    description:
      "Handstitched dream pillow filled with lavender, mugwort, and intention. Designed to invite peaceful sleep and vivid dreaming.",
    image: "/images/art/placeholder.jpg",
    medium: "Handmade — Fabric, Botanicals",
    category: "handmade",
  },
];
