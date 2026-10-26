
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, MessageCircle } from "lucide-react";
import type { Tour } from "@/data/tours";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type TourCardProps = {
  tour: Tour;
};

export default function TourCard({ tour }: TourCardProps) {
  const message = `Hello, I am interested in ${tour.title}. Please share the itinerary, available dates and current price.`;

  // const whatsappUrl = `https://wa.me/9779812117278?text=${encodeURIComponent(message)}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/tours/${tour.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-slate-200"
        aria-label={`View ${tour.title}`}
      >
        <Image
          src={tour.image || "/images/kailash-mansarovar.jpg"}
          alt={tour.title}
          loading="eager"
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">
          {tour.category}
        </span>
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin className="size-4 shrink-0 text-coral" />
          <span>{tour.destination}</span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-navy transition group-hover:text-coral">
          <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {tour.description}
        </p>

        <div className="mt-4 flex items-start gap-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
          <Clock3 className="mt-0.5 size-4 shrink-0" />
          <span>{tour.duration}</span>
        </div>

        <div className="mt-5">
          <p className="text-xs text-slate-500">Package pricing</p>
          <p className="mt-1 font-bold text-navy">{tour.priceLabel}</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex items-center justify-center gap-1 rounded-lg bg-navy px-3 py-3 text-sm font-semibold !text-white transition hover:bg-navy-light"
          >
            Details
            <ArrowRight className="size-4" />
          </Link>

          <a
            href={getWhatsAppUrl(
              `Hello, I would like details about ${tour.title}, including itinerary, available dates, and package pricing.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 rounded-lg bg-coral px-3 py-3 text-sm font-semibold !text-white transition hover:opacity-90"
          >
            <MessageCircle className="size-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
