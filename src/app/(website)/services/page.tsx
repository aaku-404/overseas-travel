import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  Hotel,
  MapPinned,
  Mountain,
  Plane,
  Sparkles,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Overseas Travel Assistance",
  description:
    "Your trusted partner for Himalayan trekking, pilgrimage yatras, and customized overseas travel assistance. Plan your next mountain adventure with confidence.",
};

const services = [
  {
    icon: Mountain,
    title: "Trekking & Hiking",
    description:
      "Explore trekking routes, mountain trails, route options, and trip requirements based on your experience and interests.",
    details: [
      "Route and itinerary discussions",
      "Trip duration planning",
      "Equipment and preparation guidance",
    ],
  },
  {
    icon: Sparkles,
    title: "Pilgrimage Tours",
    description:
      "Enquire about pilgrimage itineraries, travel arrangements, document requirements, and available departure options.",
    details: [
      "Pilgrimage package enquiries",
      "Travel document guidance",
      "Itinerary and date discussions",
    ],
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description:
      "Discuss accommodation preferences and available stay options for your planned trip.",
    details: [
      "Accommodation preferences",
      "Stay options along your route",
      "Package inclusion enquiries",
    ],
  },
  {
    icon: Plane,
    title: "Transport & Travel Assistance",
    description:
      "Understand transport options and discuss the arrangements needed for your planned journey.",
    details: [
      "Transport option enquiries",
      "Travel connection planning",
      "Route coordination discussions",
    ],
  },
  {
    icon: HeartPulse,
    title: "Wellness & Yoga Retreats",
    description:
      "Explore wellness-focused travel and yoga retreat options where these services are available.",
    details: [
      "Retreat enquiries",
      "Preferred travel dates",
      "Accommodation and itinerary discussions",
    ],
  },
  {
    icon: MapPinned,
    title: "Custom Travel Planning",
    description:
      "Discuss your preferred destinations, available time, group size, and travel interests with the team.",
    details: [
      "Personal travel preferences",
      "Group travel enquiries",
      "Itinerary discussions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
            Travel made easier
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Travel Services for Your Himalayan Journey
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Explore the services available for your trip, understand your
            options, and speak with our team before confirming your plans.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-coral px-6 py-3.5 font-semibold text-white transition hover:bg-rose-500"
          >
            Discuss Your Requirements
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
              What we can help you explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Explore Our Services
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Tell us what you need and we can discuss the relevant
              arrangements, availability, and package details.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              const message = encodeURIComponent(
                `Hello, I would like to enquire about your ${service.title} service. Please share available options and details.`,
              );

              return (
                <article
                  key={service.title}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange/50 hover:shadow-xl"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <Icon className="size-6" />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-navy">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm text-slate-600"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-coral"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/9779816264341?text=${message}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-coral transition hover:text-navy"
                  >
                    Enquire on WhatsApp
                    <ArrowRight className="size-4" />
                  </a>
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Services are subject to actual availability and business
            capabilities.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Looking for Something Specific?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Tell us about your preferred destination, travel dates, and
            requirements. Our team can clarify which services and
            arrangements are available.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-coral px-6 py-3.5 font-semibold !text-white transition hover:bg-rose-500"
          >
            Send an Enquiry
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}