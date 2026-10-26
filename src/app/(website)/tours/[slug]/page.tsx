
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site";

type TourDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: TourDetailPageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: tour } = await supabase
    .from("tours")
    .select("title, description")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (!tour) {
    return { title: "Tour Not Found" };
  }

  return {
    title: tour.title,
    description: tour.description,
  };
}

export default async function TourDetailPage({
  params,
}: TourDetailPageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: tour, error } = await supabase
    .from("tours")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch tour:", error.message);
    throw new Error("Unable to load tour details.");
  }

  if (!tour) {
    notFound();
  }

  const message = `Hello, I am interested in ${tour.title}. Please share the itinerary, departure dates and current price.`;
  const whatsappUrl = getWhatsAppUrl(message);

  return (
    <>
      <section className="bg-navy px-5 py-8 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-orange"
          >
            <ArrowLeft className="size-4" />
            All tours
          </Link>
        </div>
      </section>

      <section className="bg-cream px-5 py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-200">
              {tour.image_url ? (
                <img
                  src={tour.image_url}
                  alt={tour.title}
                  className="absolute inset-0 size-full object-cover"
                />
              ) : (
                <div className="flex size-full items-center justify-center bg-slate-200 text-slate-500">
                  Tour image coming soon
                </div>
              )}
            </div>

            <div className="mt-8">
              <span className="rounded-full bg-orange/10 px-3 py-1.5 text-sm font-semibold text-orange-700">
                {tour.category}
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {tour.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-coral" />
                  {tour.destination}
                </span>

                {tour.duration && (
                  <span className="flex items-center gap-2">
                    <Clock3 className="size-4 text-coral" />
                    {tour.duration}
                  </span>
                )}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <h2 className="text-xl font-bold text-navy">
                  About this journey
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  {tour.description}
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Contact our team to discuss the proposed itinerary,
                  travel arrangements, requirements, departure dates
                  and package inclusions before making your plans.
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-8">
            <p className="text-sm text-slate-500">
              Package pricing
            </p>

            <p className="mt-2 text-2xl font-bold text-navy">
              {tour.price_label || "Contact for price"}
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Request the latest price, available departures and
              a breakdown of what is included.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-coral px-5 py-3.5 font-semibold text-white transition hover:opacity-90"
            >
              <MessageCircle className="size-5" />
              Enquire on WhatsApp
            </a>

            <a
              href={`tel:${siteConfig.contact.phoneLink}`}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 font-semibold text-navy transition hover:bg-slate-50"
            >
              <Phone className="size-5" />
              Call {siteConfig.contact.phoneDisplay}
            </a>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Contact the agency to confirm all trip details, terms
              and availability. No booking is confirmed by this page.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
