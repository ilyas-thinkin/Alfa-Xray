import ServicePageTemplate from "@/components/ServicePageTemplate";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Lead Sheet",
    description: "High-quality lead sheets for comprehensive radiation shielding in medical facilities.",
  },
  {
    title: "Lead Glass",
    description: "Transparent radiation protection for observation windows and control rooms.",
  },
  {
    title: "Radiation Warning Lamps",
    description: "Visual indicators for active radiation zones ensuring personnel safety.",
  },
  {
    title: "Lead Shielded Doors & Windows",
    description: "Custom-designed lead-lined doors and windows for radiation containment.",
  },
  {
    title: "Lead Brick for Bunkers",
    description: "Heavy-duty lead bricks for constructing radiation-safe bunker environments.",
  },
  {
    title: "Bunker Doors",
    description: "Specialized doors designed for high-radiation areas and treatment rooms.",
  },
  {
    title: "Solid Surface Tops",
    description: "Durable, hygienic surface solutions for medical workstations.",
  },
  {
    title: "LED Relaxation Murals",
    description: "Calming visual displays for patient comfort in radiation treatment areas.",
  },
  {
    title: "Borated Sheets",
    description: "Neutron absorption sheets for specialized radiation protection needs.",
  },
];

const faqs = [
  {
    question: "What is ionizing radiation and how can I protect against it?",
    answer: "Ionizing radiation is energy released by atoms that can cause cell damage. Protection methods include using lead-based shielding materials, maintaining distance from sources, limiting exposure time, and implementing proper safety protocols. Our comprehensive solutions cover all aspects of radiation protection.",
  },
  {
    question: "What are the harmful effects of radiation exposure?",
    answer: "Prolonged or high-dose radiation exposure can lead to various health issues including skin burns, radiation sickness, and increased cancer risk. Proper shielding and safety measures are essential in medical environments to protect both staff and patients from harmful exposure levels.",
  },
  {
    question: "Can your radiation protection solutions be customized?",
    answer: "Yes, we offer fully customizable radiation protection solutions tailored to your specific facility requirements. Our team works closely with you to assess your needs and design optimal shielding configurations for your space.",
  },
  {
    question: "What industries do you serve with radiation protection?",
    answer: "We serve healthcare facilities including hospitals, diagnostic centers, dental clinics, and veterinary practices. We also provide solutions for industrial applications, research laboratories, and any facility working with radiation-emitting equipment.",
  },
  {
    question: "What role do radiation-resistant doors play in protection?",
    answer: "Radiation-resistant doors are crucial barriers that prevent radiation leakage between rooms. They are designed with lead lining and specialized seals to ensure complete containment while allowing safe passage for personnel and patients.",
  },
  {
    question: "What compliance standards do you follow?",
    answer: "Our products and installations comply with international radiation safety standards including IAEA guidelines, local regulatory requirements, and industry best practices. We ensure all our solutions meet or exceed required safety specifications.",
  },
  {
    question: "Do you offer safety training for personnel?",
    answer: "Yes, we provide comprehensive training programs covering radiation safety protocols, proper equipment usage, emergency procedures, and best practices for maintaining a safe working environment in radiation-exposed areas.",
  },
  {
    question: "What flooring solutions do you offer for radiation areas?",
    answer: "We provide specialized flooring solutions that are easy to clean, resistant to radiation damage, and meet hygiene standards. Our flooring options are designed for durability and safety in high-traffic medical environments.",
  },
];

export default function RadiationProtectionPage() {
  return (
    <>
      <ServicePageTemplate
        title="Radiation Protection"
        subtitle="Safety Solutions"
        description="ALFA XRAY implements and installs a full line of shielding products, offering quality radiation protection to ensure that radiology and radiotherapy staff, patients, and the public are protected from harmful radiation exposure."
        image="/images/Radiation F.jpg"
        services={services}
        faqs={faqs}
      />
      <Footer />
    </>
  );
}
