
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const highlights = [
  "Trip itinerary and duration",
  "Accommodation and transport details",
  "What's included and excluded",
  "Departure dates and current pricing",
];

export default function FeaturedYatra() {
  return (
    <section className="bg-navy px-5 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
            Featured pilgrimage
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Kailash Mansarovar Yatra
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Explore pilgrimage travel options, understand the journey,
            and contact our team for current availability and trip details.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[420px]">
            <Image
              src="/images/kailash-mansarovar.jpg"
              alt="Mount Kailash and the surrounding Himalayan landscape"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

            <p className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-navy/70 px-4 py-2 text-sm font-medium backdrop-blur">
              Discover the pilgrimage
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-9">
            <h3 className="text-xl font-bold sm:text-2xl">
              Plan your journey with confidence
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Every journey needs careful preparation. Contact our team
              to discuss the route, travel requirements, dates and pricing
              for the package you are considering.
            </p>

            <div className="mt-7 space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-orange" />
                  <span className="text-sm leading-6 text-slate-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/tours/kailash-mansarovar-yatra"
                className="inline-flex items-center gap-2 rounded-lg bg-coral px-5 py-3 font-semibold transition hover:opacity-90"
              >
                View Tour Details
                <ArrowRight className="size-4" />
              </Link>

              <a
                href={getWhatsAppUrl(
                  "Hello, I would like information about the Kailash Mansarovar Yatra.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:bg-white/10"
              >
                <MessageCircle className="size-4" />
                Enquire on WhatsApp
              </a>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-400">
              Travel dates, permits, eligibility, inclusions and prices
              must be confirmed with the agency before booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
