
import { createClient } from "@/lib/supabase/server";

export default async function SupabaseTestPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tours")
    .select("id")
    .limit(1);

  if (error) {
    return (
      <main className="p-8">
        <h1 className="text-xl font-bold">
          Supabase connection needs attention
        </h1>
        <p className="mt-3">
          Error: {error.message}
        </p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold">
        Supabase connected successfully!
      </h1>
      <p className="mt-3">
        Your Next.js app can query the tours table.
      </p>
      <p className="mt-2">
        Rows returned: {data.length}
      </p>
    </main>
  );
}
