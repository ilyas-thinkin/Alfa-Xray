import ServicePageTemplate from "@/components/ServicePageTemplate";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Treatment Room Cabinets",
    description: "Specialized storage solutions for dental treatment rooms and operatories.",
  },
  {
    title: "Sterilization Cabinets",
    description: "Dedicated storage for sterile instruments and sterilization equipment.",
  },
  {
    title: "Reception Cabinetry",
    description: "Professional front desk and reception area cabinet solutions.",
  },
  {
    title: "Lab Storage Systems",
    description: "Organized storage for dental laboratory materials and equipment.",
  },
  {
    title: "Instrument Organization",
    description: "Specialized drawers and organizers for dental instruments and supplies.",
  },
  {
    title: "Mobile Cabinets",
    description: "Portable storage units for flexible dental practice workflows.",
  },
  {
    title: "Custom Cabinetry",
    description: "Tailored cabinet solutions designed for your specific clinic layout.",
  },
  {
    title: "Material Storage",
    description: "Proper storage systems for dental materials and consumables.",
  },
];

const faqs = [
  {
    question: "Can dental cabinets be customized to our clinic layout?",
    answer: "Yes, we offer fully customized solutions, working closely with practitioners to match your clinic layout and optimize workflow efficiency. Our team assesses your space and designs cabinets that maximize storage while maintaining easy access.",
  },
  {
    question: "What design features support infection control?",
    answer: "Our cabinets feature smooth, easy-to-clean surfaces and materials that inhibit bacterial growth. The designs minimize gaps and joints where contaminants could accumulate, supporting your infection control protocols.",
  },
  {
    question: "Do your cabinets include security features?",
    answer: "Yes, we incorporate built-in locks and security features to protect valuable dental equipment, controlled substances, and sensitive patient materials. Various security options are available based on your requirements.",
  },
  {
    question: "What materials do you use for dental cabinets?",
    answer: "We use durable, environmentally friendly materials that reflect sustainable practices. Our cabinets are constructed with high-quality components designed to withstand the demands of busy dental practices while maintaining appearance.",
  },
  {
    question: "Can you match existing furniture and decor?",
    answer: "Absolutely. We offer a wide range of finishes, colors, and styles to complement your existing furniture and create a cohesive, professional look throughout your dental practice.",
  },
  {
    question: "What is the installation process like?",
    answer: "Our professional installation team handles the entire process with minimal disruption to your practice. We schedule installations at convenient times and ensure everything is properly secured and functional before completion.",
  },
];

export default function DentalCabinetsPage() {
  return (
    <>
      <ServicePageTemplate
        title="Dental Cabinets"
        subtitle="Practice Solutions"
        description="Enhance the efficiency of your dental practice with our specialized dental cabinets. Designed for optimal organization and easy access, our cabinets provide a seamless workflow in your dental clinic."
        image="/images/dental cabinets F.jpg"
        services={services}
        faqs={faqs}
      />
      <Footer />
    </>
  );
}
