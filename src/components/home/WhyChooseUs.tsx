
import {
  Compass,
  Headset,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "Curated Journeys",
    description: "Thoughtfully planned trips for your next adventure.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Information",
    description: "Understand trip details, costs and inclusions.",
  },
  {
    icon: Users,
    title: "Personal Assistance",
    description: "Get help choosing a journey that suits your needs.",
  },
  {
    icon: MapPinned,
    title: "Mountain Experiences",
    description: "Explore destinations across the Himalayas.",
  },
  {
    icon: Headset,
    title: "Direct Support",
    description: "Speak with our team before planning your trip.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
            Travel with confidence
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Why Choose Us?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Get the information and personal assistance you need to plan
            your Himalayan journey.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:border-orange/40 hover:bg-white hover:shadow-lg"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <Icon className="size-6" />
                </div>

                <h3 className="mt-4 text-sm font-bold text-navy sm:text-base">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
