import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import StatsSection from "@/components/StatsSection";
import IntegratedSolutions from "@/components/IntegratedSolutions";
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
      <IntegratedSolutions />
      <PartnersSection />
      <Footer />
    </>
  );
}
