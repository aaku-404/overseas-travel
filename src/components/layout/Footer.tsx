import Link from "next/link";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Mountain,
    Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const contact = siteConfig.contact;

    return (
        <footer className="bg-[#050e1b] text-white">
            <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-8">
                <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2">
                            <Mountain className="size-8 text-orange" />

                            <span className="text-lg font-bold">
                                Himalayan <span className="text-orange">Travel</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                            {siteConfig.description}
                        </p>

                        <Link
                            href="/tours"
                            className="mt-6 inline-flex items-center gap-2 font-semibold text-orange transition hover:text-white"
                        >
                            Discover our tours
                            <ArrowUpRight className="size-4" />
                        </Link>
                    </div>

                    <div>
                        <h2 className="font-bold">Explore</h2>

                        <nav
                            aria-label="Footer navigation"
                            className="mt-5 flex flex-col items-start gap-3"
                        >
                            {siteConfig.navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-slate-400 transition hover:text-orange"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h2 className="font-bold">Popular Journeys</h2>

                        <div className="mt-5 flex flex-col items-start gap-3">
                            <Link
                                href="/tours/kailash-mansarovar-yatra"
                                className="text-sm text-slate-400 transition hover:text-orange"
                            >
                                Kailash Mansarovar Yatra
                            </Link>

                            <Link
                                href="/tours/everest-base-camp"
                                className="text-sm text-slate-400 transition hover:text-orange"
                            >
                                Everest Base Camp
                            </Link>

                            <Link
                                href="/tours/annapurna-circuit"
                                className="text-sm text-slate-400 transition hover:text-orange"
                            >
                                Annapurna Circuit
                            </Link>

                            <Link
                                href="/contact"
                                className="text-sm text-slate-400 transition hover:text-orange"
                            >
                                Custom Enquiries
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold">Contact Us</h2>

                        <div className="mt-5 flex flex-col gap-4">
                            <a
                                href={`tel:${contact.phoneLink}`}
                                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-orange"
                            >
                                <Phone className="mt-0.5 size-4 shrink-0" />
                                <span>{contact.phoneDisplay}</span>
                            </a>

                            <a
                                href={`mailto:${contact.email}`}
                                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-orange"
                            >
                                <Mail className="mt-0.5 size-4 shrink-0" />
                                <span>{contact.email}</span>
                            </a>

                            <div className="flex items-start gap-3 text-sm text-slate-400">
                                <MapPin className="mt-0.5 size-4 shrink-0" />
                                <span>{contact.location}</span>
                            </div>
                        </div>

                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center justify-center rounded-lg bg-coral px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {currentYear} Himalayan Travel. All rights reserved.
                    </p>

                    <p>Made for journeys beyond the ordinary.</p>
                </div>
            </div>
        </footer>
    );
}