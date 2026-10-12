
import TourCatalogue from "@/components/tours/TourCatalogue";
import { tours } from "@/data/tours";

export const metadata = {
  title: "Himalayan Tour Packages",
  description:
    "Explore Himalayan trekking, pilgrimage and holiday packages. Contact our team for itineraries and current pricing.",
};

export default function ToursPage() {
  return <TourCatalogue tours={tours} />;
}
