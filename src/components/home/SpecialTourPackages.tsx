
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";
import TourCard from "@/components/tours/TourCard";

export default function SpecialTourPackages() {
  const featuredTours = tours.slice(0, 4);

  return (
    <section className="bg-cream px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
              Find your next adventure
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Special Tour Packages
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore pilgrimage journeys, mountain treks and Himalayan
              holidays. Contact our team for confirmed itineraries,
              departure dates and pricing.
            </p>
          </div>

          <Link
            href="/tours"
            className="inline-flex w-fit items-center gap-2 font-semibold text-coral transition hover:gap-3"
          >
            View all tours
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
