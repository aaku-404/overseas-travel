"use client";

import Link from "next/link";
import { ArrowRight, Mountain, MessageCircle } from "lucide-react";

const expeditions = [
  {
    name: "Everest Base Camp Trek",
    region: "Khumbu, Nepal",
    duration: "To be confirmed",
    price: "Request price",
  },
  {
    name: "Annapurna Circuit Trek",
    region: "Annapurna, Nepal",
    duration: "To be confirmed",
    price: "Request price",
  },
  {
    name: "Kailash Mansarovar Yatra",
    region: "Tibet",
    duration: "To be confirmed",
    price: "Request price",
  },
];

const whatsappNumber = "9779800000000"; // Replace with the business number

export default function ExpeditionPackages() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
              Adventure awaits
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Himalayan Expeditions
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Compare our featured mountain journeys and contact our team for
              confirmed itineraries, departure dates, inclusions, and pricing.
            </p>
          </div>

          <Link
            href="/tours"
            className="inline-flex items-center gap-2 font-semibold text-navy transition hover:text-coral"
          >
            View all tours <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
          <div className="hidden grid-cols-[1.6fr_1fr_1fr_1fr_auto] gap-4 bg-navy px-6 py-4 text-xs font-bold uppercase tracking-wider text-white md:grid">
            <span>Expedition</span>
            <span>Region</span>
            <span>Duration</span>
            <span>Package price</span>
            <span>Enquire</span>
          </div>

          {expeditions.map((expedition, index) => {
            const message = encodeURIComponent(
              `Hello, I would like details about ${expedition.name}, including itinerary, available dates, and package pricing.`,
            );

            return (
              <div
                key={expedition.name}
                className={`grid gap-4 px-5 py-6 md:grid-cols-[1.6fr_1fr_1fr_1fr_auto] md:items-center md:px-6 ${
                  index !== expeditions.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <Mountain className="size-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-coral md:hidden">
                      Expedition
                    </p>
                    <h3 className="font-bold text-navy">
                      {expedition.name}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400 md:hidden">
                    Region
                  </p>
                  <p className="text-sm text-slate-600">
                    {expedition.region}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400 md:hidden">
                    Duration
                  </p>
                  <p className="text-sm text-slate-600">
                    {expedition.duration}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400 md:hidden">
                    Package price
                  </p>
                  <p className="font-bold text-navy">{expedition.price}</p>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Enquire about ${expedition.name} on WhatsApp`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-coral px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
                >
                  <MessageCircle className="size-4" />
                  Enquire
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-xs leading-6 text-slate-500">
          Durations and prices can be asked on "Enquire" button. Confirm all package details
          with the business before booking.
        </p>
      </div>
    </section>
  );
}