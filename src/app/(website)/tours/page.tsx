
import TourCatalogue from "@/components/tours/TourCatalogue";
import { createClient } from "@/lib/supabase/server";

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

  return <TourCatalogue tours={tours ?? []} />;
}
