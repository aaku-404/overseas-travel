import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How can I enquire about a tour?",
    answer:
      "Open the tour you are interested in and contact our team through WhatsApp or phone. We can discuss your preferred dates, itinerary, and package details.",
  },
  {
    question: "Are tour prices listed on the website?",
    answer:
      "Pricing depends on the package and travel arrangements. Contact our team to request current prices and a breakdown of package inclusions.",
  },
  {
    question: "Can I request a customised itinerary?",
    answer:
      "You can contact our team with your preferred destination, travel dates, group size, and interests. We will confirm which arrangements are available.",
  },
  {
    question: "What should I know before a Himalayan trek?",
    answer:
      "Preparation depends on the route, season, altitude, and trek difficulty. Ask the team about fitness requirements, appropriate equipment, permits, insurance, and safety arrangements for your chosen trip.",
  },
  {
    question: "What documents are required for Kailash Mansarovar Yatra?",
    answer:
      "Requirements depend on your nationality, route, and the applicable travel regulations. Contact the team for current guidance and verify requirements with the relevant official authorities before booking.",
  },
  {
    question: "Does submitting an enquiry confirm my booking?",
    answer:
      "No. A WhatsApp message or phone enquiry does not confirm a booking. Your trip is confirmed only after the business communicates the applicable requirements and confirms your arrangements.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral">
            Need to know more?
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Find answers to common questions about tour enquiries, travel
            planning, and preparing for your Himalayan journey.
          </p>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Travel requirements can change. Confirm important details with
            the relevant authorities before your trip.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy marker:content-none">
                <span>{faq.question}</span>

                <Plus className="size-5 shrink-0 text-coral transition-transform duration-200 group-open:rotate-45" />
              </summary>

              <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}