
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Overseas Travel Assistance | Trekking, Tours & Pilgrimage",
    template: "%s | Overseas Travel Assistance",
  },
  description:
    "Discover the Himalayas with our trekking adventures, Nepal travel packages, and pilgrimage tours. Contact us to plan your journey.",
  keywords: [
    "Overseas Travel Assistance",
    "Nepal trekking packages",
    "Himalayan tours",
    "Kailash Mansarovar Yatra",
    "Nepal pilgrimage tours",
  ],
  openGraph: {
    title: "Overseas Travel Assistance | Explore the Himalayas",
    description:
      "Your trusted partner for Himalayan trekking, pilgrimage yatras, and customized overseas travel assistance. Plan your next mountain adventure with confidence. Explore Himalayan trekking, holiday packages, and pilgrimage journeys.",
    type: "website",
    locale: "en_US",
  },
};

type WebsiteLayoutProps = {
  children: ReactNode;
};

export default function WebsiteLayout({
  children,
}: WebsiteLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
