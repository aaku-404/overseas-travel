
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type TourImageUploadProps = {
  initialImageUrl?: string;
  onImageUploaded: (url: string) => void;
};

export default function TourImageUpload({
  initialImageUrl = "",
  onImageUploaded,
}: TourImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(initialImageUrl);

  async function handleUpload(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setError("");

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be 5 MB or less.");
      return;
    }

    setUploading(true);

    try {
      const supabase = createClient();
      const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const filePath = `${crypto.randomUUID()}.${extension}`;

      const { error: uploadError } = await supabase.storage
        .from("tour-images")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
          contentType: file.type,
        });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from("tour-images")
        .getPublicUrl(filePath);

      setPreviewUrl(data.publicUrl);
      onImageUploaded(data.publicUrl);
    } catch (uploadError) {
      console.error("Image upload failed:", uploadError);
      setError("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  return (
    <div>
      <label
        htmlFor="tour-image-upload"
        className="text-sm font-semibold text-navy"
      >
        Upload tour image
      </label>

      <input
        id="tour-image-upload"
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
        className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-navy file:mr-4 file:rounded-md file:border-0 file:bg-orange/10 file:px-3 file:py-2 file:font-semibold file:text-navy disabled:opacity-60"
      />

      <p className="mt-2 text-xs text-slate-500">
        Choose an image up to 5 MB. JPG, PNG and WebP are recommended.
      </p>

      {uploading && (
        <p className="mt-3 text-sm text-slate-600">
          Uploading image...
        </p>
      )}

      {error && (
        <p role="alert" className="mt-3 text-sm text-red-600">
          {error}
        </p>
      )}

      {previewUrl && (
        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-slate-600">
            Image preview
          </p>
          <img
            src={previewUrl}
            alt="Tour preview"
            className="h-48 w-full rounded-xl object-cover"
          />
        </div>
      )}
    </div>
  );
}
