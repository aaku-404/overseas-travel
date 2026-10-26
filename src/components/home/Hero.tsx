
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  MessageCircle,
  Mountain,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {/* Background image and overlays */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/himalayan-hero.jpg"
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-center"
        >
          <source
            src="/videos/himalayan-hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55" />
        <div className="absolute inset-0 bg-navy/15" />
      </div>

      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
        {/* Main content */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange/30 bg-navy/50 px-4 py-2 text-sm text-orange backdrop-blur-sm">
            <Compass className="size-4" aria-hidden="true" />
            Overseas Travel Assistance
          </div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Explore the Himalayas.
            <span className="mt-3 block text-coral">
              Travel with confidence.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            Combine high-altitude wilderness adventure with certified travel medicine consultation, doctor-supervised acclimatization, restorative yoga retreats, and comprehensive international patient care in Kathmandu.
          </p>

          {/* Calls to action */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/tours"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-coral px-6 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Explore Our Tours
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>

            <a
              href={getWhatsAppUrl(
                "Hello! I would like to know more about your Himalayan travel packages.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talk to a travel expert on WhatsApp (opens in a new tab)"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Talk to an Expert
            </a>
          </div>

          {/* Value propositions */}
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/20 pt-6 sm:mt-12 sm:gap-5">
            <div>
              <p className="text-lg font-bold text-orange sm:text-xl">
                Diverse
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                Mountain adventures
              </p>
            </div>

            <div>
              <p className="text-lg font-bold text-orange sm:text-xl">
                Guided
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                Planned journeys
              </p>
            </div>

            <div>
              <p className="text-lg font-bold text-orange sm:text-xl">
                Personal
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                Travel assistance
              </p>
            </div>
          </div>
        </div>

        {/* Featured visual — desktop */}
        <div className="relative hidden lg:block">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-3xl bg-orange/10 blur-3xl"
          />

          <div className="relative aspect-[4/5] max-h-[520px] overflow-hidden rounded-3xl border border-white/20 shadow-2xl shadow-black/30">
            <Image
              src="/images/everest-base-camp.jpg"
              alt="Snow-covered Himalayan peaks surrounding a mountain trekking route"
              fill
              sizes="(min-width: 1024px) 40vw, 0px"
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <Mountain className="size-4 text-orange" aria-hidden="true" />
                Discover the extraordinary
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight">
                The mountains are calling.
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-200">
                Find your next journey among the world&apos;s most
                spectacular mountain landscapes.
              </p>

              <Link
                href="/tours"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Find your adventure
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
