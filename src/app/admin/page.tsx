
import Link from "next/link";
import { redirect } from "next/navigation";
import { LogOut, Map, PlusCircle } from "lucide-react";

import { requireAdmin } from "@/lib/supabase/require-admin";

export default async function AdminDashboardPage() {
  const { supabase, user } = await requireAdmin();

  const { count, error } = await supabase
    .from("tours")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("Failed to count tours:", error.message);
  }

  async function signOut() {
    "use server";

    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();

    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-cream px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
              Overseas Travel Assistance
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Signed in as {user.email}
            </p>
          </div>

          <form action={signOut}>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 font-semibold text-navy transition hover:bg-slate-50"
            >
              <LogOut className="size-4" />
              Sign out
            </button>
          </form>
        </header>

        <section className="mt-10 grid gap-5 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex size-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
              <Map className="size-5" />
            </div>
            <p className="mt-5 text-sm font-medium text-slate-500">
              Total tours
            </p>
            <p className="mt-1 text-3xl font-bold text-navy">
              {error ? "—" : count ?? 0}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Includes draft and published packages visible to this admin.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex size-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
              <PlusCircle className="size-5" />
            </div>
            <h2 className="mt-5 text-lg font-bold text-navy">
              Manage tour packages
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Review your tours and prepare packages for publication.
            </p>
            <Link
              href="/admin/tours"
              className="mt-5 inline-flex items-center rounded-lg bg-coral px-4 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Manage tours
            </Link>
          </article>
        </section>

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
          <p className="font-semibold text-navy">Dashboard status</p>
          Your admin session has been verified. Tour creation, editing,
          publishing and deletion will be added in the next steps.
        </div>
      </div>
    </main>
  );
}
