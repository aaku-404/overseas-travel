
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  Phone,
  X,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const contact = siteConfig.contact;

  return (
    <header className="relative z-50 text-navy">
      {/* Top information strip */}
      <div className="bg-[#101B2D] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-5 text-xs">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 font-medium text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <MessageCircle className="size-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span>{contact.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="hidden min-w-0 items-center gap-2 text-slate-300 transition-colors hover:text-orange-300 md:inline-flex"
            >
              <Mail className="size-3.5 shrink-0 text-orange-300" />
              <span className="truncate">{contact.email}</span>
            </a>
          </div>

          <Link
            href="/tours/kailash-mansarovar-yatra"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-amber-300 transition-colors hover:text-white"
          >
            <Mountain className="size-3.5" />
            <span className="hidden sm:inline">
              KAILASH MANSAROVAR YATRA
            </span>
            <span className="sm:hidden">Kailash Yatra</span>
            <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-[#E8DFD1] bg-[#FAF7F0] shadow-[0_4px_20px_rgba(16,27,45,0.04)]">
        <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:min-h-[94px] lg:px-10">
          {/* Brand */}

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            aria-label="Overseas Travel Assistance home"
            className="group flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <Image
              src="/logo.png"
              alt="Overseas Travel Assistance logo"
              width={56}
              height={56}
              priority
              className="size-12 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:size-14"
            />

            <span className="max-w-[180px] leading-tight sm:max-w-none">
              <span className="block text-sm font-extrabold tracking-tight text-[#101B2D] sm:text-base lg:text-lg">
                Overseas Travel
              </span>
              <span className="mt-0.5 block text-xs font-bold tracking-[0.12em] text-[#B9682D] sm:text-sm">
                ASSISTANCE
              </span>
            </span>
          </Link>


          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 xl:flex"
          >
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative whitespace-nowrap rounded-lg px-3 py-3 text-sm font-semibold text-[#354155] transition-colors duration-200 hover:text-[#B9682D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                {item.label}

                <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-[#C8793D] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop contact actions */}
          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <a
              href={`tel:${contact.phoneLink}`}
              className="inline-flex items-center gap-2 rounded-xl border border-[#E5D9C8] px-4 py-3 text-sm font-bold text-[#263449] transition duration-200 hover:-translate-y-0.5 hover:border-[#C8793D] hover:bg-white hover:text-[#B9682D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <Phone className="size-4" />
              Call Us
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              // className="inline-flex items-center gap-2 rounded-xl bg-[#16865B] px-4 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#116D49] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              className="inline-flex items-center gap-2 rounded-xl bg-[#16865B] px-4 py-3 text-sm font-bold !text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#116D49] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>

          {/* Tablet and mobile actions */}
          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="inline-flex size-10 items-center justify-center rounded-xl bg-[#16865B] text-white transition hover:bg-[#116D49] sm:w-auto sm:px-3"
            >
              <MessageCircle className="size-5" />
              <span className="hidden text-sm font-semibold sm:ml-2 sm:inline">
                WhatsApp
              </span>
            </a>

            <button
              type="button"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((open) => !open)}
              className="flex size-10 items-center justify-center rounded-xl border border-[#E5D9C8] text-[#101B2D] transition-colors hover:border-[#C8793D] hover:bg-[#F0E6D5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              {isOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-[#E8DFD1] bg-[#FAF7F0] px-5 py-4 shadow-lg sm:px-8 xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#354155] transition-colors hover:bg-[#F0E6D5] hover:text-[#B9682D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  {item.label}
                  <ArrowUpRight className="size-4 text-[#B9682D] opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-[#E8DFD1] pt-4">
                <a
                  href={`tel:${contact.phoneLink}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5D9C8] px-3 py-3 text-sm font-bold transition hover:bg-white"
                >
                  <Phone className="size-4" />
                  Call Us
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16865B] px-3 py-3 text-sm font-bold text-white transition hover:bg-[#116D49]"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>

              <Link
                href="/tours/kailash-mansarovar-yatra"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F0E6D5] px-4 py-3 text-sm font-bold text-[#8E4D24] transition hover:bg-[#E9D6B8]"
              >
                <Mountain className="size-4" />
                Discover Kailash Mansarovar Yatra
                <ArrowUpRight className="size-4" />
              </Link>

              <div className="mt-2 flex items-center justify-center gap-2 px-3 py-2 text-xs text-[#647084]">
                <MapPin className="size-3.5" />
                {contact.location}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
