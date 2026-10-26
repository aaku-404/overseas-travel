
import TourCatalogue from "@/components/tours/TourCatalogue";
import { createClient } from "@/lib/supabase/server";
import type { Tour } from "@/data/tours";

export const metadata = {
  title: "Tour Packages",
  description:
    "Explore Himalayan trekking, pilgrimage and holiday packages. Contact our team for itineraries and current pricing.",
};

export default async function ToursPage() {
  const supabase = await createClient();

  const { data: tours, error } = await supabase
    .from("tours")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch tours:", error.message);

    return (
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">
          Tour packages are temporarily unavailable
        </h1>
        <p className="mt-4 text-gray-600">
          Please contact our team for available tour packages.
        </p>
      </main>
    );
  }

  const catalogueTours: Tour[] = (tours ?? []).map((tour) => ({
    slug: tour.slug,
    title: tour.title,
    destination: tour.destination,
    duration: tour.duration ?? "Contact for details",
    category: tour.category,
    priceLabel: tour.price_label ?? "Request current price",
    image: tour.image_url ?? "",
    description: tour.description,
    featured: tour.featured,
  }));

  return <TourCatalogue tours={catalogueTours} />;
}
