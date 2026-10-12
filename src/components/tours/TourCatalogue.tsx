
"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { Tour } from "@/data/tours";
import TourCard from "@/components/tours/TourCard";

type TourCatalogueProps = {
  tours: Tour[];
};

export default function TourCatalogue({ tours }: TourCatalogueProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(tours.map((tour) => tour.category))),
  ];

  const filteredTours = useMemo(() => {
    const query = search.trim().toLowerCase();

    return tours.filter((tour) => {
      const matchesCategory =
        category === "All" || tour.category === category;

      const matchesSearch = [
        tour.title,
        tour.destination,
        tour.description,
        tour.category,
      ].some((value) => value.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [tours, search, category]);

  return (
    <>
      <section className="bg-navy px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
            Discover the Himalayas
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Find Your Next Journey
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Browse pilgrimage journeys, trekking adventures and
            Himalayan holidays. Contact us for confirmed itineraries,
            availability and pricing.
          </p>
        </div>
      </section>

      <section className="bg-cream px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search tours or destinations..."
                aria-label="Search tours or destinations"
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20"
              />
            </div>

            <div className="flex items-center gap-3">
              <SlidersHorizontal className="size-5 text-slate-500" />

              <label htmlFor="tour-category" className="text-sm font-medium">
                Category
              </label>

              <select
                id="tour-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="min-w-36 rounded-lg border border-slate-200 bg-white px-3 py-3 outline-none focus:border-coral"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-slate-600" aria-live="polite">
              {filteredTours.length}{" "}
              {filteredTours.length === 1 ? "tour" : "tours"} found
            </p>

            {(search || category !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="text-sm font-semibold text-coral hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredTours.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <h2 className="text-xl font-bold text-navy">
                No tours found
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Try a different search term or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-5 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-light"
              >
                Show all tours
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
