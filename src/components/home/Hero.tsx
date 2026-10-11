import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {/* Background Image and Overlays */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/images/himalayan-hero.jpg"
          alt="Himalayan mountain range"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
        <div className="absolute inset-0 bg-navy/20" />
      </div>

      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-2 text-sm text-orange">
            <Compass className="size-4" />
            Your Himalayan journey begins here
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Explore the Himalayas.
            <span className="mt-2 block text-coral">
              Travel with confidence.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Discover unforgettable mountain adventures, meaningful pilgrimages, and carefully planned journeys across the Himalayas.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-lg bg-coral px-6 py-3.5 font-semibold text-white transition hover:bg-rose-500"
            >
              Explore Our Tours
              <ArrowRight className="size-4" />
            </Link>

            <a
              href="https://wa.me/9779800000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white/10"
            >
              <MessageCircle className="size-4" />
              Talk to an Expert
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-white/15 pt-6">
            <div>
              <p className="text-xl font-bold text-orange">Tours</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">Mountain adventures</p>
            </div>

            <div>
              <p className="text-xl font-bold text-orange">Guided</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">Planned journeys</p>
            </div>

            <div>
              <p className="text-xl font-bold text-orange">Personal</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">Travel assistance</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-5 rounded-3xl bg-orange/10 blur-3xl" />

          <div className="relative flex aspect-[4/5] max-h-[510px] items-end overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-slate-700 via-slate-800 to-navy p-8 shadow-2xl">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
                Discover the extraordinary
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                The mountains are calling.
              </h2>
              <p className="mt-3 max-w-sm leading-7 text-slate-300">
                Find your next journey among the world&apos;s most spectacular mountain landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}