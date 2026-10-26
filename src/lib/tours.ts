
import type { Tour } from "@/data/tours";

export type SupabaseTour = {
  id: string;
  slug: string;
  title: string;
  destination: string;
  duration: string | null;
  category: string;
  price_label: string | null;
  description: string;
  image_url: string | null;
  featured: boolean;
  is_published: boolean;
};

export function mapSupabaseTour(tour: SupabaseTour): Tour {
  return {
    slug: tour.slug,
    title: tour.title,
    destination: tour.destination,
    duration: tour.duration || "Duration to be confirmed",
    category: tour.category,
    priceLabel: tour.price_label || "Contact for price",
    image: tour.image_url || "/images/kailash-mansarovar.jpg",
    description: tour.description,
    featured: tour.featured,
  };
}
