
"use client";

import { useState } from "react";
import { deleteTour } from "@/app/admin/tours/actions";

type DeleteTourButtonProps = {
  id: string;
  title: string;
};

export default function DeleteTourButton({
  id,
  title,
}: DeleteTourButtonProps) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"? This action cannot be undone.`,
    );

    if (!confirmed) return;

    setPending(true);
    setError("");

    try {
      const formData = new FormData();
      formData.set("id", id);

      const result = await deleteTour(
        { error: "", success: "" },
        formData,
      );

      if (result.error) {
        setError(result.error);
        return;
      }

      window.location.reload();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleDelete}
        disabled={pending}
        className="rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Deleting..." : "Delete"}
      </button>

      {error && (
        <p role="alert" className="mt-2 max-w-48 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
