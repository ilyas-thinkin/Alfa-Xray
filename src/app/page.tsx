import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import StatsSection from "@/components/StatsSection";
import ModernServicesSection from "@/components/ModernServicesSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesCarousel />
      <StatsSection />
      <ModernServicesSection />
      <PartnersSection />
      <Footer />
    </>
  );
}
