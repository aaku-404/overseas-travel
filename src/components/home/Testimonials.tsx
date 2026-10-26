import Link from "next/link";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
              Travel stories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Every Journey Has a Story
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Every Himalayan adventure is personal. We want to make it
              easier for travellers to share their experiences and help
              future visitors plan their own journeys.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 font-semibold !text-white transition hover:bg-navy-light"
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
            <div className="flex size-12 items-center justify-center rounded-xl bg-orange/15 text-orange">
              <Star className="size-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-navy">
              Your travel experience matters
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Have you travelled with us? We would love to hear about your
              journey. Your feedback can help other travellers make informed
              decisions.
            </p>

            <a
              href={getWhatsAppUrl(
                "Hello, I would like to share feedback about my trip.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-semibold !text-coral transition hover:text-navy"
            >
              <MessageCircle className="size-5" />
              Share your feedback
            </a>

            <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-6 text-slate-500">
              Customer testimonials will be added here once genuine reviews
              and permission to publish them have been obtained.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}