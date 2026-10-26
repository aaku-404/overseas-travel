import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Destination } from "@/data/destinations";

type DestinationCardProps = {
  destination: Destination;
};

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-white">
          <MapPin className="size-4 text-orange" />
          {destination.region}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-navy">
          {destination.name}
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {destination.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {destination.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {highlight}
            </span>
          ))}
        </div>

        <Link
          href="/tours"
          className="mt-6 inline-flex items-center gap-2 font-semibold !text-coral transition hover:text-navy"
        >
          Explore tours
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}