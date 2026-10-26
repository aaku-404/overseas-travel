import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import DestinationCard from "@/components/destinations/DestinationCard";
import { destinations } from "@/data/destinations";

export const metadata = {
  title: "Destinations",
  description:
    "Explore Himalayan destinations, mountain trekking regions, pilgrimage journeys, and holiday options.",
};

export default function DestinationsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-2 text-sm text-orange">
              <Compass className="size-4" />
              Find your next adventure
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Explore the Himalayan Destinations
            </h1>

            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
              From mountain trails and peaceful lakesides to meaningful
              pilgrimage journeys, explore destinations for your next trip.
            </p>

            <Link
              href="/tours"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-coral px-6 py-3.5 font-semibold text-white transition hover:bg-rose-500"
            >
              Browse Tour Packages
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
              Discover new places
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Where Will Your Journey Take You?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Explore our destination highlights and contact the team to
              discuss routes, availability, and travel arrangements.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}