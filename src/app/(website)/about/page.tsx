import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Learn about our approach to Himalayan travel planning, trekking, holidays, and pilgrimage journeys.",
};

const principles = [
  {
    icon: Compass,
    title: "Thoughtful Planning",
    description:
      "Understand the destination, route, timing, and requirements before choosing a journey.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Communication",
    description:
      "Discuss your interests and expectations directly with the team before making arrangements.",
  },
  {
    icon: MapPinned,
    title: "Destination Knowledge",
    description:
      "Learn about routes, local conditions, and travel options relevant to your chosen destination.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Information",
    description:
      "Ask about package inclusions, exclusions, pricing, permits, and other important requirements.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
              About our travel business
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Every Great Journey Starts With a Plan
            </h1>

            <p className="mt-6 leading-8 text-slate-300">
              The Himalayas offer extraordinary landscapes, cultural
              experiences, and meaningful journeys. Our goal is to help
              travellers explore their options and plan trips that suit
              their interests and requirements.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              From trekking enquiries to pilgrimage planning, we encourage
              clear conversations about routes, dates, costs, and travel
              arrangements before a trip is confirmed.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-coral px-6 py-3.5 font-semibold text-white transition hover:bg-rose-500"
            >
              Talk to Our Team
              <Compass className="size-4" />
            </Link>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 sm:min-h-[460px]">
            <Image
              src="/images/himalayan-hero.jpg"
              alt="Himalayan mountain landscape"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-orange">
                Discover. Plan. Explore.
              </p>
              <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Your Himalayan journey begins here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
              How we approach travel
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Planning With Clarity and Care
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Every traveller has different priorities. These principles
              guide the information we aim to provide while helping people
              evaluate their travel options.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-orange/50 hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="mt-5 font-bold text-navy">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Have a destination in mind?
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Browse the available tours or contact the team to discuss
              your preferred itinerary.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/tours"
              className="rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-navy-light"
            >
              Browse Tours
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-navy transition hover:border-coral"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}