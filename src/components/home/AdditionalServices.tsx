import Link from "next/link";
import {
  HeartPulse,
  Hotel,
  MapPinned,
  Mountain,
  Plane,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Trekking & Hiking",
    description:
      "Explore Himalayan trails with journey options suited to your interests and experience.",
    icon: Mountain,
  },
  {
    title: "Pilgrimage Tours",
    description:
      "Enquire about spiritual journeys, pilgrimage routes, travel requirements, and itineraries.",
    icon: Sparkles,
  },
  {
    title: "Accommodation",
    description:
      "Ask about accommodation options and stays for your planned Himalayan trip.",
    icon: Hotel,
  },
  {
    title: "Flight & Transport Assistance",
    description:
      "Get assistance understanding transport options and travel arrangements for your journey.",
    icon: Plane,
  },
  {
    title: "Wellness & Yoga Retreats",
    description:
      "Explore wellness-focused travel and retreat options, subject to availability.",
    icon: HeartPulse,
  },
  {
    title: "Travel Planning",
    description:
      "Discuss destinations, routes, trip duration, and package options with our team.",
    icon: MapPinned,
  },
];

export default function AdditionalServices() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
            More than a journey
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Services for Your Himalayan Adventure
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            From planning your route to exploring travel options, discover how
            we can help you prepare for your next journey.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange/50 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition group-hover:bg-coral group-hover:text-white">
                  <Icon className="size-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-navy">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-coral hover:text-navy"
                >
                  Ask about this service
                  <ArrowUpRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}