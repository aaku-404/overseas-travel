import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/himalayan-gallery-1.jpg",
    alt: "Himalayan mountain landscape",
    title: "Mountain Landscapes",
    size: "large",
  },
  {
    src: "/images/himalayan-gallery-2.jpg",
    alt: "A trekking trail through the mountains",
    title: "Mountain Trails",
    size: "normal",
  },
  {
    src: "/images/himalayan-gallery-3.jpg",
    alt: "Traditional architecture in a Himalayan region",
    title: "Local Culture",
    size: "normal",
  },
  {
    src: "/images/himalayan-gallery-4.jpg",
    alt: "A Himalayan mountain valley",
    title: "Untouched Nature",
    size: "normal",
  },
  {
    src: "/images/himalayan-gallery-5.jpg",
    alt: "A scenic view of the Himalayas",
    title: "Unforgettable Views",
    size: "normal",
  },
];

export default function TravelGallery() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
              Moments from the mountains
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Discover the Himalayas
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Explore the landscapes, trails, and destinations that make
              Himalayan journeys special.
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 font-semibold text-orange transition hover:text-white"
          >
            Explore destinations
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:auto-rows-[250px] lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <article
              key={item.src}
              className={`group relative overflow-hidden rounded-2xl bg-navy-light ${
                index === 0 ? "sm:row-span-2 sm:min-h-[400px]" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                    : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                }
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-lg font-bold">{item.title}</p>
                <p className="mt-1 text-sm text-slate-300">
                  Explore the Himalayan region
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-6 text-slate-400">
          Use authentic travel photography that the business owns or is
          licensed to publish.
        </p>
      </div>
    </section>
  );
}