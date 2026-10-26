
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { requireAdmin } from "@/lib/supabase/require-admin";
import TourForm from "@/components/admin/TourForm";

export default async function NewTourPage() {
  await requireAdmin();

  return (
    <main className="min-h-screen bg-cream px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/admin/tours"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-coral"
        >
          <ArrowLeft className="size-4" />
          Back to tours
        </Link>

        <div className="mt-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
            Content management
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy">
            Add a new tour
          </h1>
          <p className="mt-3 text-slate-600">
            Enter the package details. You can save it as a draft before
            publishing it on the website.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <TourForm />
        </div>
      </div>
    </main>
  );
}
