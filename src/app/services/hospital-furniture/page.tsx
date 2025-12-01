import ServicePageTemplate from "@/components/ServicePageTemplate";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Hospital Chairs",
    description: "Ergonomic seating solutions for patients, visitors, and medical staff.",
  },
  {
    title: "Hospital Tables",
    description: "Durable and functional tables for examination rooms and workstations.",
  },
  {
    title: "Hospital Beds",
    description: "Advanced patient beds with adjustable features for optimal care.",
  },
  {
    title: "Hospital Trolleys",
    description: "Mobile equipment and supply trolleys for efficient healthcare delivery.",
  },
  {
    title: "Waiting Area Furniture",
    description: "Comfortable and durable seating for patient waiting areas.",
  },
  {
    title: "Medical Staff Furniture",
    description: "Ergonomic workstations and seating for healthcare professionals.",
  },
  {
    title: "Storage Solutions",
    description: "Organized storage systems for medical supplies and equipment.",
  },
  {
    title: "Custom Furniture",
    description: "Tailored furniture solutions designed for specific facility needs.",
  },
];

const faqs = [
  {
    question: "What makes hospital furniture different from regular furniture?",
    answer: "Hospital furniture is designed specifically for demanding healthcare environments. It features enhanced durability, easy-clean surfaces, antimicrobial materials, ergonomic designs for patient comfort, and compliance with healthcare safety standards.",
  },
  {
    question: "Can furniture be customized to match our facility's aesthetics?",
    answer: "Yes, we offer extensive customization options to tailor designs to your facility's aesthetic preferences. This includes color choices, materials, dimensions, and special features to match your brand and interior design.",
  },
  {
    question: "How does your furniture support infection control?",
    answer: "Our furniture incorporates smooth surfaces, easy-clean materials, and antimicrobial features that help prevent the spread of infections. The designs minimize gaps and crevices where contaminants could accumulate.",
  },
  {
    question: "What ergonomic features do you offer?",
    answer: "Our furniture includes adjustable heights, lumbar support, mobility features, and designs that reduce strain for both patients and staff. We focus on comfort and functionality to support extended use in healthcare settings.",
  },
  {
    question: "Do you use sustainable materials?",
    answer: "Yes, we use eco-friendly materials and resource-efficient manufacturing processes. Our commitment to sustainability includes selecting recyclable materials and minimizing environmental impact in production.",
  },
  {
    question: "What warranty do you provide on hospital furniture?",
    answer: "We provide comprehensive warranties on all our furniture products, covering manufacturing defects and material issues. Specific warranty terms vary by product type and can be discussed during the ordering process.",
  },
];

export default function HospitalFurniturePage() {
  return (
    <>
      <ServicePageTemplate
        title="Hospital Furniture"
        subtitle="Quality Furnishings"
        description="Elevate the functionality and aesthetics of your healthcare facility with our range of hospital furniture. Our designs prioritize both comfort and durability, offering solutions for patient rooms, waiting areas, and medical staff spaces."
        image="/images/hospital furniture F.jpg"
        services={services}
        faqs={faqs}
      />
      <Footer />
    </>
  );
}
