export interface Animal {
  name: string;
  species: "cat" | "dog" | "rabbit" | "other";
  description: string;
  image: string;
  story: string;
}

export const animals: Animal[] = [
  {
    name: "Luna",
    species: "cat",
    description: "A gentle elder who arrived frightened and has blossomed into a beacon of trust.",
    image: "/images/animals/placeholder.jpg",
    story:
      "Luna came to us after years of neglect. She arrived silent and afraid, tucked into herself. Months of patience, warmth, and consistency transformed her. Today she greets every morning with a slow blink and a quiet purr — her own way of saying she knows she is finally home.",
  },
  {
    name: "Sage",
    species: "cat",
    description: "A spirited young soul with eyes full of curiosity and a heart full of fire.",
    image: "/images/animals/placeholder.jpg",
    story:
      "Sage was found abandoned at just a few weeks old, too young to be without family. He came to Sacred Space and found his footing here. His playfulness fills the sanctuary with joy, and his fearlessness reminds us that resilience lives even in the smallest souls.",
  },
  {
    name: "River",
    species: "cat",
    description: "A meditative presence who brings calm to every corner of the sanctuary.",
    image: "/images/animals/placeholder.jpg",
    story:
      "River arrived injured and withdrawn, carrying wounds both visible and invisible. He needed time, and we gave it freely. He now spends his days in sunny windows and quiet contemplation — a living testament to what healing looks like when it is allowed to unfold at its own pace.",
  },
  {
    name: "Ember",
    species: "cat",
    description: "Bold, warm, and impossible to ignore — Ember lights up every room she enters.",
    image: "/images/animals/placeholder.jpg",
    story:
      "Ember was surrendered when her previous family could no longer care for her. She was confused at first, searching for what she had lost. But her spirit was unbreakable. She quickly claimed her space at Sacred Space and reminds us daily that love, once rooted, does not disappear — it only moves.",
  },
  {
    name: "Cedar",
    species: "rabbit",
    description: "A quiet, thoughtful soul who finds joy in the simplest moments.",
    image: "/images/animals/placeholder.jpg",
    story:
      "Cedar came to us from an overcrowded shelter where he had been overlooked for months. He is not loud or showy — he is steady, grounded, and deeply present. He reminds us that every animal, no matter how quiet, carries a full and worthy life within them.",
  },
  {
    name: "Indigo",
    species: "cat",
    description: "A dreamer and explorer — always watching, always wondering.",
    image: "/images/animals/placeholder.jpg",
    story:
      "Indigo was rescued from a difficult situation and arrived with a wariness that ran deep. She observed everything from a distance for weeks before she let herself be touched. The day she climbed into a lap of her own choosing, everyone in the sanctuary felt the weight of that small, enormous moment.",
  },
];
