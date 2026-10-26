
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const popularLinks = [
  {
    label: "Kailash Mansarovar Yatra",
    href: "/tours/kailash-mansarovar-yatra",
  },
  { label: "Explore All Tours", href: "/tours" },
  { label: "Our Destinations", href: "/destinations" },
  { label: "Plan a Custom Trip", href: "/contact" },
];

const linkClass =
  "inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-sm";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const contact = siteConfig.contact;

  return (
    <footer className="relative overflow-hidden bg-[#101B2D] text-white">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-orange-400/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-12 sm:px-8 sm:pt-16 lg:px-10">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-9 border-b border-white/10 pb-9 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-12 lg:pb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Overseas Travel Assistance home"
              className="group inline-flex max-w-full items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <Image
                src="/logo.png"
                alt="Overseas Travel Assistance logo"
                width={56}
                height={56}
                className="size-12 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:size-14"
              />

              <span className="min-w-0 leading-tight">
                <span className="block text-base font-extrabold tracking-tight text-white sm:text-lg">
                  Overseas Travel
                </span>
                <span className="mt-1 block text-xs font-bold tracking-[0.15em] text-orange-300 sm:text-sm">
                  ASSISTANCE
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              {siteConfig.description}
            </p>

            <Link
              href="/tours"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              Discover our journeys
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3.5"
            >
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Popular links */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Plan Your Journey
            </h2>

            <nav
              aria-label="Popular journeys"
              className="mt-5 flex flex-col items-start gap-3.5"
            >
              {popularLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h2>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href={`tel:${contact.phoneLink}`}
                className={linkClass}
              >
                <Phone className="size-4 shrink-0 text-orange-300" />
                <span className="break-words">{contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className={linkClass}
              >
                <Mail className="size-4 shrink-0 text-orange-300" />
                <span className="break-all">{contact.email}</span>
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                <MapPin className="mt-0.5 size-4 shrink-0 text-orange-300" />
                <span>{contact.location}</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Overseas Travel Assistance on WhatsApp"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#16865B] px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#116D49] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101B2D] sm:w-fit"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 pt-6 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Overseas Travel Assistance. All rights reserved.
          </p>

          <p className="text-slate-400">
            Made for journeys beyond the ordinary.
          </p>
        </div>
      </div>
    </footer>
  );
}
