
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { requireAdmin } from "@/lib/supabase/require-admin";
import TourForm from "@/components/admin/TourForm";
import { updateTour } from "@/app/admin/tours/[id]/edit/actions";

type EditTourPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditTourPage({
  params,
}: EditTourPageProps) {
  const { id } = await params;
  const { supabase } = await requireAdmin();

  const { data: tour, error } = await supabase
    .from("tours")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Failed to load tour for editing:", error.message);
    throw new Error("Unable to load this tour.");
  }

  if (!tour) {
    notFound();
  }

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
            Edit tour
          </h1>

          <p className="mt-3 text-slate-600">
            Update the package details and publication settings.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <TourForm
            initialTour={{
              id: tour.id,
              title: tour.title,
              slug: tour.slug,
              destination: tour.destination,
              duration: tour.duration ?? "",
              category: tour.category,
              price_label: tour.price_label ?? "",
              description: tour.description,
              image_url: tour.image_url ?? "",
              featured: tour.featured,
              is_published: tour.is_published,
            }}
            action={updateTour}
          />
        </div>
      </div>
    </main>
  );
}
