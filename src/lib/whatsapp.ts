import { siteConfig } from "@/data/site";

export function getWhatsAppUrl(message?: string): string {
  const number = siteConfig.contact.whatsappNumber;

  const baseUrl = `https://wa.me/${number}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}