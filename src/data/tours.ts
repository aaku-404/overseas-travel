
export type Tour = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  category: string;
  priceLabel: string;
  image: string;
  description: string;
  featured?: boolean;
};

export const tours: Tour[] = [
  {
    slug: "kailash-mansarovar-yatra",
    title: "Kailash Mansarovar Yatra",
    destination: "Tibet Autonomous Region",
    duration: "Package duration to be confirmed",
    category: "Pilgrimage",
    priceLabel: "Request current price",
    image: "/images/kailash-mansarovar.jpg",
    description:
      "Explore the pilgrimage route, travel requirements and package options with our team. ",
    featured: true,
  },
  {
    slug: "everest-base-camp",
    title: "Everest Base Camp Trek",
    destination: "Nepal",
    duration: "Duration to be confirmed",
    category: "Trekking",
    priceLabel: "Request current price",
    image: "/images/everest-base-camp.jpg",
    description:
      "Discover a classic Himalayan trekking experience and enquire about planned departures.",
  },
  {
    slug: "annapurna-circuit",
    title: "Annapurna Circuit Trek",
    destination: "Nepal",
    duration: "Duration to be confirmed",
    category: "Trekking",
    priceLabel: "Request current price",
    image: "/images/annapurna-circuit.jpg",
    description:
      "Explore mountain scenery and route options for a Himalayan adventure.",
  },
  {
    slug: "pokhara-himalayan-escape",
    title: "Pokhara Himalayan Escape",
    destination: "Pokhara, Nepal",
    duration: "Duration to be confirmed",
    category: "Holiday",
    priceLabel: "Request current price",
    image: "/images/pokhara.jpg",
    description:
      "Discover a relaxing mountain getaway and ask about available travel packages.",
  },
];
