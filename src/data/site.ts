export const siteConfig = {
  name: "Himalayan Travel",
  description:
    "Discover Himalayan journeys, trekking adventures, and pilgrimage tours.",

  navigation: [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Our Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  contact: {
    // Replace these example values with the real business details.
    phoneDisplay: "+977-9816264341",
    phoneLink: "+9779816264341",
    whatsappNumber: "9779816264341",
    email: "hello@example.com",
    location: "Kathmandu, Nepal",
  },
} as const;