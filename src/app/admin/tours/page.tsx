
import Link from "next/link";
import { ArrowLeft, Map, PlusCircle } from "lucide-react";
import { requireAdmin } from "@/lib/supabase/require-admin";
import DeleteTourButton from "@/components/admin/DeleteTourButton";
import TourTableControls from "@/components/admin/TourTableControls";

export default async function AdminToursPage() {
    const { supabase } = await requireAdmin();

    const { data: tours, error } = await supabase
        .from("tours")
        .select(
            "id, title, slug, destination, duration, category, price_label, is_published, featured, created_at",
        )
        .order("created_at", { ascending: false });

    return (
        <main className="min-h-screen bg-cream px-5 py-10 sm:px-8">
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/admin"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-coral"
                >
                    <ArrowLeft className="size-4" />
                    Back to dashboard
                </Link>

                <header className="mt-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
                            Content management
                        </p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy">
                            Tour Packages
                        </h1>
                        <p className="mt-3 text-slate-600">
                            Review your tour packages and their publication status.
                        </p>
                    </div>

                    <Link
                        href="/admin/tours/new"
                        className="inline-flex w-fit items-center gap-2 rounded-lg bg-coral px-5 py-3 font-semibold text-white transition hover:opacity-90"
                    >
                        <PlusCircle className="size-5" />
                        Add new tour
                    </Link>
                </header>


                {error ? (
                    <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
                        Unable to load tours. Please check your database permissions
                        and try again.
                    </div>
                ) : tours.length === 0 ? (
                    <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
                        <Map className="mx-auto size-10 text-slate-400" />
                        <h2 className="mt-4 text-xl font-bold text-navy">
                            No tours found
                        </h2>
                        <p className="mt-2 text-slate-600">
                            Add your first tour package to get started.
                        </p>
                    </div>
                ) : (

                    <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">

                        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-xl border border-slate-200 bg-white p-5">
                                <p className="text-sm text-slate-500">Total tours</p>
                                <p className="mt-2 text-2xl font-bold text-navy">
                                    {(tours ?? []).length}
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-5">
                                <p className="text-sm text-slate-500">Published</p>
                                <p className="mt-2 text-2xl font-bold text-emerald-700">
                                    {(tours ?? []).filter((tour) => tour.is_published).length}
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-5">
                                <p className="text-sm text-slate-500">Drafts</p>
                                <p className="mt-2 text-2xl font-bold text-amber-700">
                                    {(tours ?? []).filter((tour) => !tour.is_published).length}
                                </p>
                            </div>
                        </div>
                        <TourTableControls
                            tours={(tours ?? []).map((tour) => ({
                                id: tour.id,
                                title: tour.title,
                                slug: tour.slug,
                                destination: tour.destination,
                                category: tour.category,
                                is_published: tour.is_published,
                            }))}
                        />
                    </div>
                )}
            </div>
        </main>
    );
}
