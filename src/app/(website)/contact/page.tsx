import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact our Himalayan travel team to discuss tour packages, pilgrimage journeys, trekking routes, and travel arrangements.",
};


export default function ContactPage() {
    const contactDetails = siteConfig.contact;
  return (
    <>
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
            Let's plan your trip
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch With Our Team
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Have a destination in mind? Tell us about your plans and enquire
            about available packages, travel dates, and itineraries.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
              Contact information
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
              Let's Talk About Your Journey
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Reach out through your preferred contact method. Our team can
              discuss your interests and explain the next steps for your trip.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${contactDetails.phoneLink}`}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-orange/50"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <Phone className="size-5" />
                </div>

                <div>
                  <h3 className="font-bold text-navy">Call Us</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {contactDetails.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${contactDetails.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-orange/50"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700">
                  <MessageCircle className="size-5" />
                </div>

                <div>
                  <h3 className="font-bold text-navy">WhatsApp</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Message us about your travel plans.
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-orange/50"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <Mail className="size-5" />
                </div>

                <div>
                  <h3 className="font-bold text-navy">Email</h3>
                  <p className="mt-1 break-all text-sm text-slate-600">
                    {contactDetails.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <MapPin className="size-5" />
                </div>

                <div>
                  <h3 className="font-bold text-navy">Location</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {contactDetails.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <Clock className="size-5" />
                </div>

                <div>
                  <h3 className="font-bold text-navy">Enquiry availability</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Message us at any time. Response times depend on our
                    team's availability.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/tours"
              className="mt-7 inline-flex font-semibold text-coral transition hover:text-navy"
            >
              Browse our tour packages →
            </Link>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}