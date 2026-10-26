"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import DeleteTourButton from "@/components/admin/DeleteTourButton";

type Tour = {
    id: string;
    title: string;
    slug: string;
    destination: string;
    category: string;
    is_published: boolean;
};

type TourTableControlsProps = {
    tours: Tour[];
};

export default function TourTableControls({
    tours,
}: TourTableControlsProps) {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");
    const [category, setCategory] = useState("all");

    const filteredTours = useMemo(() => {
        const query = search.trim().toLowerCase();

        return tours.filter((tour) => {
            const matchesSearch =
                tour.title.toLowerCase().includes(query) ||
                tour.destination.toLowerCase().includes(query);

            const matchesStatus =
                status === "all" ||
                (status === "published" && tour.is_published) ||
                (status === "draft" && !tour.is_published);

            const matchesCategory =
                category === "all" || tour.category === category;

            return matchesSearch && matchesStatus && matchesCategory;
        });
    }, [tours, search, status, category]); // Added category here!

    return (
        <div className="space-y-5">
            <div className="flex flex-col gap-3 sm:flex-row">
                <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search by title or destination..."
                    aria-label="Search tours"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
                />

                <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                    aria-label="Filter tours by publication status"
                    className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
                >
                    <option value="all">All tours</option>
                    <option value="published">Published</option>
                    <option value="draft">Drafts</option>
                </select>

                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    aria-label="Filter tours by category"
                    className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
                >
                    <option value="all">All categories</option>
                    <option value="Trekking">Trekking</option>
                    <option value="Pilgrimage">Pilgrimage</option>
                    <option value="Expedition">Expedition</option>
                    <option value="Holiday">Holiday</option>
                    <option value="Adventure">Adventure</option>
                </select>
            </div>

            <p className="text-sm text-slate-500">
                Showing {filteredTours.length} of {tours.length} tours.
            </p>

            {filteredTours.length === 0 ? (
                <p className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
                    No tours match your search.
                </p>
            ) : (
                <div className="space-y-3">
                    {filteredTours.map((tour) => (
                        <article
                            key={tour.id}
                            className="rounded-xl border border-slate-200 bg-white p-4"
                        >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="font-semibold text-navy">
                                        {tour.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        {tour.destination} · {tour.category}
                                    </p>
                                    <span
                                        className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                                            tour.is_published
                                                ? "bg-emerald-50 text-emerald-700"
                                                : "bg-amber-50 text-amber-700"
                                        }`}
                                    >
                                        {tour.is_published ? "Published" : "Draft"}
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    {tour.is_published && (
                                        <Link
                                            href={`/tours/${tour.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-semibold text-slate-600 hover:text-coral"
                                        >
                                            View
                                        </Link>
                                    )}

                                    <Link
                                        href={`/admin/tours/${tour.id}/edit`}
                                        className="text-sm font-semibold text-coral hover:underline"
                                    >
                                        Edit
                                    </Link>

                                    <DeleteTourButton
                                        id={tour.id}
                                        title={tour.title}
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}