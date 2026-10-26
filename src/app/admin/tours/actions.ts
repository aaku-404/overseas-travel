
"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/supabase/require-admin";

export type DeleteTourState = {
  error: string;
  success: string;
};

export async function deleteTour(
  _previousState: DeleteTourState,
  formData: FormData,
): Promise<DeleteTourState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "").trim();

  if (!id) {
    return {
      error: "Missing tour ID.",
      success: "",
    };
  }

  const { supabase } = await requireAdmin();

  const { data: deletedTour, error } = await supabase
    .from("tours")
    .delete()
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) {
    console.error("Failed to delete tour:", error.message);

    return {
      error: "Unable to delete this tour. Please try again.",
      success: "",
    };
  }

  if (!deletedTour) {
    return {
      error: "Tour not found or you don't have permission to delete it.",
      success: "",
    };
  }

  revalidatePath("/admin/tours");
  revalidatePath("/tours");
  revalidatePath("/");

  return {
    error: "",
    success: "Tour deleted successfully.",
  };
}
