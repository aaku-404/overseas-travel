"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";


export default function ContactForm() {
    const [error, setError] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const phone = String(formData.get("phone") ?? "").trim();
        const tour = String(formData.get("tour") ?? "").trim();
        const travelDate = String(formData.get("travelDate") ?? "").trim();
        const groupSize = String(formData.get("groupSize") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();

        if (!name || !phone || !tour) {
            setError("Please enter your name, phone number, and tour interest.");
            return;
        }

        const whatsappMessage = [
            "Hello! I would like to enquire about a Himalayan trip.",
            "",
            `Name: ${name}`,
            `Email: ${email || "Not provided"}`,
            `Phone: ${phone}`,
            `Tour of interest: ${tour}`,
            `Preferred travel date: ${travelDate || "Flexible / not decided"}`,
            `Group size: ${groupSize || "Not decided"}`,
            "",
            `Additional details: ${message || "None provided"}`,
        ].join("\n");

        const whatsappUrl = getWhatsAppUrl(whatsappMessage);

        window.location.href = whatsappUrl;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
            <div className="mb-7">
                <div className="flex size-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <MessageCircle className="size-6" />
                </div>

                <h2 className="mt-4 text-2xl font-bold text-navy">
                    Plan Your Journey
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                    Share a few details and continue the conversation with our team
                    through WhatsApp.
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-navy"
                    >
                        Full name *
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        maxLength={100}
                        autoComplete="name"
                        placeholder="Your name"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-coral focus:ring-2 focus:ring-coral/15"
                    />
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-navy"
                    >
                        Phone number *
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={30}
                        autoComplete="tel"
                        placeholder="Your contact number"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-coral focus:ring-2 focus:ring-coral/15"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-navy"
                    >
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        maxLength={254}
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-coral focus:ring-2 focus:ring-coral/15"
                    />
                </div>

                <div>
                    <label
                        htmlFor="tour"
                        className="mb-2 block text-sm font-semibold text-navy"
                    >
                        Tour of interest *
                    </label>
                    <select
                        id="tour"
                        name="tour"
                        required
                        defaultValue=""
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15"
                    >
                        <option value="" disabled>
                            Select a tour
                        </option>
                        <option value="Kailash Mansarovar Yatra">
                            Kailash Mansarovar Yatra
                        </option>
                        <option value="Everest Base Camp Trek">
                            Everest Base Camp Trek
                        </option>
                        <option value="Annapurna Circuit Trek">
                            Annapurna Circuit Trek
                        </option>
                        <option value="Pokhara Himalayan Escape">
                            Pokhara Himalayan Escape
                        </option>
                        <option value="Custom itinerary">Custom itinerary</option>
                        <option value="Other enquiry">Other enquiry</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="travelDate"
                        className="mb-2 block text-sm font-semibold text-navy"
                    >
                        Preferred travel date
                    </label>
                    <input
                        id="travelDate"
                        name="travelDate"
                        type="date"
                        min={new Date().toLocaleDateString("en-CA")}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15"
                    />
                </div>

                <div>
                    <label
                        htmlFor="groupSize"
                        className="mb-2 block text-sm font-semibold text-navy"
                    >
                        Number of travellers
                    </label>
                    <select
                        id="groupSize"
                        name="groupSize"
                        defaultValue=""
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/15"
                    >
                        <option value="">Not decided</option>
                        <option value="1">1 traveller</option>
                        <option value="2">2 travellers</option>
                        <option value="3–5">3–5 travellers</option>
                        <option value="6–10">6–10 travellers</option>
                        <option value="More than 10">More than 10 travellers</option>
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-navy"
                    >
                        Tell us about your plans
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={2000}
                        placeholder="Preferred itinerary, questions, or other requirements..."
                        className="w-full resize-y rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-coral focus:ring-2 focus:ring-coral/15"
                    />
                </div>
            </div>

            {error && (
                <p role="alert" className="mt-4 text-sm font-medium text-red-600">
                    {error}
                </p>
            )}

            <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-coral px-6 py-3.5 font-semibold text-white transition hover:bg-rose-500 sm:w-auto"
            >
                Continue on WhatsApp
                <Send className="size-4" />
            </button>

            <p className="mt-4 text-xs leading-5 text-slate-500">
                This form opens WhatsApp with a pre-filled message. Your enquiry is
                not submitted until you send that message in WhatsApp.
            </p>
        </form>
    );
}