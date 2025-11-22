import ServicePageTemplate from "@/components/ServicePageTemplate";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Flooring Solutions",
    description: "Professional healthcare flooring that meets hygiene and durability standards.",
  },
  {
    title: "Ceiling Systems",
    description: "Acoustic and aesthetic ceiling solutions designed for medical environments.",
  },
  {
    title: "Wallpaper & Wall Coverings",
    description: "Decorative and functional wall treatments for healing environments.",
  },
  {
    title: "Wall Paints",
    description: "Antimicrobial and easy-to-clean paint solutions for healthcare facilities.",
  },
  {
    title: "Custom Wall Designs",
    description: "Unique wall design solutions that enhance patient experience and comfort.",
  },
  {
    title: "Hospital Furniture",
    description: "Ergonomic and durable furniture solutions for all hospital areas.",
  },
  {
    title: "Lighting Systems",
    description: "Optimal illumination solutions for patient comfort and staff efficiency.",
  },
  {
    title: "Upholstery Services",
    description: "Quality fabric and cushioning work for medical furniture.",
  },
  {
    title: "Doors & Windows",
    description: "Specialized entry and window solutions meeting healthcare requirements.",
  },
  {
    title: "Hand Rails & Corner Guards",
    description: "Safety fixtures protecting walls and providing patient support.",
  },
];

const faqs = [
  {
    question: "What design principles do you follow for hospital interiors?",
    answer: "We follow evidence-based design principles that focus on workflow efficiency, patient comfort, and healing environments. Our designs incorporate elements that reduce stress, improve wayfinding, and support both patient recovery and staff performance.",
  },
  {
    question: "Can you renovate existing hospital spaces?",
    answer: "Yes, we specialize in adapting existing structures through renovation expertise. Our team can transform outdated facilities into modern, efficient healthcare environments while minimizing disruption to ongoing operations.",
  },
  {
    question: "How do you address infection control in your designs?",
    answer: "Infection control is integrated throughout our design process. We select materials that are easy to clean, resistant to microbial growth, and designed with smooth surfaces that minimize contamination risks. Our layouts also support proper workflow separation.",
  },
  {
    question: "Do you offer sustainable design options?",
    answer: "Absolutely. We provide sustainable, eco-friendly design options including energy-efficient lighting, recycled materials, low-VOC paints, and resource-efficient systems that reduce environmental impact while maintaining healthcare standards.",
  },
  {
    question: "How do you ensure patient privacy in your designs?",
    answer: "Patient privacy is achieved through strategic planning including soundproofing solutions, appropriate room layouts, privacy curtains, and visual barriers. We design spaces that protect patient dignity while maintaining functionality.",
  },
  {
    question: "What is your project timeline for hospital interior work?",
    answer: "Timelines vary based on project scope. We work closely with facilities to develop phased implementation plans that minimize disruption to patient care while delivering quality results within agreed timeframes.",
  },
];

export default function HospitalInteriorPage() {
  return (
    <>
      <ServicePageTemplate
        title="Hospital Interior"
        subtitle="Healthcare Design"
        description="Transform your healthcare environment with our innovative hospital interior services. Our designs blend functionality with aesthetics, creating spaces that promote healing and comfort for patients and staff."
        image="/images/Hospital Interior.jpg"
        services={services}
        faqs={faqs}
      />
      <Footer />
    </>
  );
}
