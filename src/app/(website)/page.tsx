
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedYatra from "@/components/home/FeaturedYatra";
import SpecialTourPackages from "@/components/home/SpecialTourPackages";
import ExpeditionPackages from "@/components/home/ExpeditionPackages";
import AdditionalServices from "@/components/home/AdditionalServices";
import Testimonials from "@/components/home/Testimonials";
import TravelGallery from "@/components/home/TravelGallery";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedYatra />
      <SpecialTourPackages />
      <ExpeditionPackages />
      <AdditionalServices />
      <Testimonials />
      <TravelGallery />
      <FAQ />
    </>
  );
}
