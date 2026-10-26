
"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/supabase/require-admin";

export type TourFormState = {
    error: string;
};

export async function createTour(
    _previousState: TourFormState,
    formData: FormData,
): Promise<TourFormState> {
    await requireAdmin();

    const title = String(formData.get("title") ?? "").trim();
    const slug = String(formData.get("slug") ?? "")
        .trim()
        .toLowerCase();
    const destination = String(formData.get("destination") ?? "").trim();
    const duration = String(formData.get("duration") ?? "").trim();
    const category = String(formData.get("category") ?? "").trim();
    const priceLabel = String(formData.get("price_label") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const imageUrl = String(formData.get("image_url") ?? "").trim();
    const featured = formData.get("featured") === "on";
    const isPublished = formData.get("is_published") === "on";

    if (!title || !slug || !destination || !category || !description) {
        return { error: "Please complete all required fields." };
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        return {
            error: "Use a URL-friendly slug, such as annapurna-circuit-trek.",
        };
    }

    const { supabase } = await requireAdmin();

    const { error } = await supabase.from("tours").insert({
        title,
        slug,
        destination,
        duration: duration || null,
        category,
        price_label: priceLabel || null,
        description,
        image_url: imageUrl || null,
        featured,
        is_published: isPublished,
    });

    if (error) {
        console.error("Failed to create tour:", error.message);

        if (error.code === "23505") {
            return { error: "That slug already exists. Please choose another." };
        }

        return { error: "Unable to save the tour. Please try again." };
    }

    revalidatePath("/tours");
    revalidatePath("/");
    revalidatePath(`/tours/${slug}`);
    redirect("/admin/tours");
}
