
"use client";

import { useState } from "react";
import TourImageUpload from "@/components/admin/TourImageUpload";
import { useActionState } from "react";
import { createTour } from "@/app/admin/tours/new/actions";
import type { UpdateTourState } from "@/app/admin/tours/[id]/edit/actions";

type TourFormValues = {
    id: string;
    title: string;
    slug: string;
    destination: string;
    duration: string;
    category: string;
    price_label: string;
    description: string;
    image_url: string;
    featured: boolean;
    is_published: boolean;
};

type TourFormProps = {
    initialTour?: TourFormValues;
    action?: (
        previousState: UpdateTourState,
        formData: FormData,
    ) => Promise<UpdateTourState>;
};

const initialState = { error: "" };

const inputClass =
    "mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-navy outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20";

export default function TourForm({
    initialTour,
    action,
}: TourFormProps) {
    const [imageUrl, setImageUrl] = useState(
        initialTour?.image_url ?? "",
    );

    const formActionToUse = action ?? createTour;
    const [state, formAction, pending] = useActionState(
        formActionToUse,
        initialState,
    );

    const editing = Boolean(initialTour);

    return (
        <form action={formAction} className="space-y-5">
            {initialTour && (
                <input type="hidden" name="id" value={initialTour.id} />
            )}

            <div>
                <label htmlFor="title" className="text-sm font-semibold text-navy">
                    Tour title *
                </label>
                <input
                    id="title"
                    name="title"
                    required
                    defaultValue={initialTour?.title ?? ""}
                    placeholder="Annapurna Circuit Trek"
                    className={inputClass}
                />
            </div>

            <div>
                <label htmlFor="slug" className="text-sm font-semibold text-navy">
                    URL slug *
                </label>
                <input
                    id="slug"
                    name="slug"
                    required
                    pattern="[a-z0-9]+(-[a-z0-9]+)*"
                    defaultValue={initialTour?.slug ?? ""}
                    placeholder="annapurna-circuit-trek"
                    className={inputClass}
                />
                <p className="mt-2 text-xs text-slate-500">
                    Changing the slug changes the tour's public URL.
                </p>
            </div>

            <div>
                <label
                    htmlFor="destination"
                    className="text-sm font-semibold text-navy"
                >
                    Destination *
                </label>
                <input
                    id="destination"
                    name="destination"
                    required
                    defaultValue={initialTour?.destination ?? ""}
                    placeholder="Annapurna Region, Nepal"
                    className={inputClass}
                />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="category"
                        className="text-sm font-semibold text-navy"
                    >
                        Category *
                    </label>
                    <select
                        id="category"
                        name="category"
                        required
                        defaultValue={initialTour?.category ?? "Trekking"}
                        className={inputClass}
                    >
                        <option value="Trekking">Trekking</option>
                        <option value="Pilgrimage">Pilgrimage</option>
                        <option value="Expedition">Expedition</option>
                        <option value="Holiday">Holiday</option>
                        <option value="Adventure">Adventure</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="duration"
                        className="text-sm font-semibold text-navy"
                    >
                        Duration
                    </label>
                    <input
                        id="duration"
                        name="duration"
                        defaultValue={initialTour?.duration ?? ""}
                        placeholder="14 Days"
                        className={inputClass}
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="price_label"
                    className="text-sm font-semibold text-navy"
                >
                    Price label
                </label>
                <input
                    id="price_label"
                    name="price_label"
                    defaultValue={initialTour?.price_label ?? ""}
                    placeholder="Contact for price"
                    className={inputClass}
                />
            </div>

            <div>
                <label
                    htmlFor="image_url"
                    className="text-sm font-semibold text-navy"
                >
                    Image path or URL
                </label>

                <div className="space-y-4">
                    <TourImageUpload
                        initialImageUrl={initialTour?.image_url ?? ""}
                        onImageUploaded={setImageUrl}
                    />

                    <div>
                        <label
                            htmlFor="image_url"
                            className="text-sm font-semibold text-navy"
                        >
                            Image path or URL
                        </label>

                        <input
                            id="image_url"
                            name="image_url"
                            value={imageUrl}
                            onChange={(event) => setImageUrl(event.target.value)}
                            placeholder="/images/annapurna-circuit.jpg"
                            className={inputClass}
                        />

                        <p className="mt-2 text-xs text-slate-500">
                            Upload an image above or enter an existing image path or URL.
                        </p>
                    </div>
                </div>

            </div>

            <div>
                <label
                    htmlFor="description"
                    className="text-sm font-semibold text-navy"
                >
                    Description *
                </label>
                <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    defaultValue={initialTour?.description ?? ""}
                    placeholder="Describe the journey and what travellers can expect."
                    className={inputClass}
                />
            </div>

            <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                <label className="flex items-start gap-3 text-sm text-navy">
                    <input
                        type="checkbox"
                        name="featured"
                        defaultChecked={initialTour?.featured ?? false}
                        className="mt-1 size-4 accent-orange-600"
                    />
                    <span>
                        <span className="font-semibold">Featured tour</span>
                        <span className="mt-1 block text-slate-500">
                            Mark this package as featured for homepage use.
                        </span>
                    </span>
                </label>

                <label className="flex items-start gap-3 text-sm text-navy">
                    <input
                        type="checkbox"
                        name="is_published"
                        defaultChecked={initialTour?.is_published ?? false}
                        className="mt-1 size-4 accent-orange-600"
                    />
                    <span>
                        <span className="font-semibold">
                            {editing ? "Published" : "Publish immediately"}
                        </span>
                        <span className="mt-1 block text-slate-500">
                            {editing
                                ? "Uncheck to hide this tour from the public website."
                                : "If unchecked, the tour is saved as a draft."}
                        </span>
                    </span>
                </label>
            </div>

            {state.error && (
                <p
                    role="alert"
                    className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                    {state.error}
                </p>
            )}

            <button
                type="submit"
                disabled={pending}
                className="w-full rounded-lg bg-coral px-5 py-3.5 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {pending
                    ? "Saving tour..."
                    : editing
                        ? "Save changes"
                        : "Save tour"}
            </button>
        </form>
    );
}
