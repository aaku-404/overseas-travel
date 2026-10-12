export type Destination = {
  slug: string;
  name: string;
  region: string;
  description: string;
  image: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    slug: "everest-region",
    name: "Everest Region",
    region: "Khumbu, Nepal",
    description:
      "Discover dramatic mountain landscapes, Sherpa culture, and trekking routes around the world's highest mountain.",
    image: "/images/everest-base-camp.jpg",
    highlights: ["Mountain trekking", "Sherpa culture", "Alpine scenery"],
  },
  {
    slug: "annapurna-region",
    name: "Annapurna Region",
    region: "Nepal",
    description:
      "Explore varied Himalayan landscapes, traditional mountain villages, and routes through the Annapurna region.",
    image: "/images/annapurna-circuit.jpg",
    highlights: ["Scenic trails", "Local villages", "Mountain panoramas"],
  },
  {
    slug: "kailash-mansarovar",
    name: "Mount Kailash & Mansarovar",
    region: "Tibet",
    description:
      "Learn about pilgrimage journeys to Mount Kailash and Lake Mansarovar, including travel requirements and available packages.",
    image: "/images/kailash-mansarovar.jpg",
    highlights: ["Pilgrimage", "Sacred landscapes", "Travel planning"],
  },
  {
    slug: "pokhara",
    name: "Pokhara",
    region: "Gandaki Province, Nepal",
    description:
      "Discover lakeside scenery, mountain views, and a variety of options for a relaxing Himalayan holiday.",
    image: "/images/pokhara.jpg",
    highlights: ["Lakeside experiences", "Mountain views", "Relaxing holidays"],
  },
];