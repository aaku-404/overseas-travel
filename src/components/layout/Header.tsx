
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Mountain, Phone, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <Mountain className="size-8 text-orange" />
          <span className="text-lg font-bold tracking-tight">
            Himalayan <span className="text-orange">Travel</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-200 transition hover:text-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${siteConfig.contact.phoneLink}`}
          className="hidden items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 md:flex"
        >
          <Phone className="size-4" />
          Contact Us
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-lg border border-white/15 p-2 lg:hidden"
        >
          {isOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-navy px-5 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-orange"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={`tel:${siteConfig.contact.phoneLink}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-coral px-4 py-3 font-semibold"
            >
              <Phone className="size-4" />
              Call our team
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
