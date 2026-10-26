
"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/supabase/require-admin";

export type UpdateTourState = {
    error: string;
};

export async function updateTour(
    _previousState: UpdateTourState,
    formData: FormData,
): Promise<UpdateTourState> {
    await requireAdmin();

    const id = String(formData.get("id") ?? "").trim();
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

    if (
        !id ||
        !title ||
        !slug ||
        !destination ||
        !category ||
        !description
    ) {
        return { error: "Please complete all required fields." };
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        return {
            error: "Use a URL-friendly slug, such as annapurna-circuit-trek.",
        };
    }

    const { supabase } = await requireAdmin();

    const { data: updatedTour, error } = await supabase
        .from("tours")
        .update({
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
            updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select("id")
        .maybeSingle();

    if (error) {
        console.error("Failed to update tour:", error.message);

        if (error.code === "23505") {
            return { error: "That slug already exists. Please choose another." };
        }

        return { error: "Unable to update the tour. Please try again." };
    }

    if (!updatedTour) {
        return {
            error: "Tour not found or you don't have permission to update it.",
        };
    }

    revalidatePath("/tours");
    revalidatePath("/");
    revalidatePath(`/tours/${slug}`);
    redirect("/admin/tours");
}
