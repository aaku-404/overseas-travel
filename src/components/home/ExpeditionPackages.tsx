
import Link from "next/link";
import { ArrowRight, Mountain, MessageCircle } from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default async function ExpeditionPackages() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tours")
    .select("slug, title, destination, duration, category, price_label")
    .eq("is_published", true)
    .in("category", ["Trekking", "Pilgrimage", "Expedition"])
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Failed to fetch expeditions:", error.message);
  }

  const expeditions = data ?? [];

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

        {expeditions.length > 0 ? (
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            <div className="hidden grid-cols-[1.6fr_1fr_1fr_1fr_auto] gap-4 bg-navy px-6 py-4 text-xs font-bold uppercase tracking-wider text-white md:grid">
              <span>Expedition</span>
              <span>Region</span>
              <span>Duration</span>
              <span>Package price</span>
              <span>Enquire</span>
            </div>

            {expeditions.map((expedition, index) => (
              <div
                key={expedition.slug}
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
                      {expedition.title}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400 md:hidden">
                    Region
                  </p>
                  <p className="text-sm text-slate-600">
                    {expedition.destination}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400 md:hidden">
                    Duration
                  </p>
                  <p className="text-sm text-slate-600">
                    {expedition.duration || "To be confirmed"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400 md:hidden">
                    Package price
                  </p>
                  <p className="font-bold text-navy">
                    {expedition.price_label || "Contact for price"}
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(
                    `Hello, I would like details about ${expedition.title}, including itinerary, available dates, and package pricing.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${expedition.title} on WhatsApp`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-coral px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
                >
                  <MessageCircle className="size-4" />
                  Enquire
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-slate-600">
            Expedition packages will be announced soon. Contact our team
            for available trekking and pilgrimage options.
          </p>
        )}

        <p className="mt-4 text-xs leading-6 text-slate-500">
          Confirm all package details, durations, availability, and prices
          with the agency before booking.
        </p>
      </div>
    </section>
  );
}
