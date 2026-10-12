
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { tours } from "@/data/tours";

type TourDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: TourDetailPageProps) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);

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
  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  const message = `Hello, I am interested in ${tour.title}. Please share the itinerary, departure dates and current price.`;

  const whatsappUrl =
    `https://wa.me/9779800000000?text=${encodeURIComponent(message)}`;

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
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
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

                <span className="flex items-center gap-2">
                  <Clock3 className="size-4 text-coral" />
                  {tour.duration}
                </span>
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
              {tour.priceLabel}
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
              href="tel:+9779800000000"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3.5 font-semibold text-navy transition hover:bg-slate-50"
            >
              <Phone className="size-5" />
              Call the agency
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
