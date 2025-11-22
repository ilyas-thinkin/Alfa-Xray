import ServicePageTemplate from "@/components/ServicePageTemplate";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Equipment Selection",
    description: "Expert guidance on selecting the right sterilization equipment for your needs.",
  },
  {
    title: "Layout Planning",
    description: "Optimized department layouts for efficient sterilization workflows.",
  },
  {
    title: "Workflow Optimization",
    description: "Streamlined processes reducing turnaround times and enhancing productivity.",
  },
  {
    title: "Autoclave Systems",
    description: "State-of-the-art steam sterilization equipment and installation.",
  },
  {
    title: "Ultrasonic Cleaners",
    description: "Advanced cleaning systems for thorough instrument decontamination.",
  },
  {
    title: "Washer-Disinfectors",
    description: "Automated cleaning and disinfection systems for medical instruments.",
  },
  {
    title: "Staff Training",
    description: "Comprehensive training on equipment operation and sterilization protocols.",
  },
  {
    title: "Compliance Support",
    description: "Ensuring your CSSD meets all regulatory and accreditation requirements.",
  },
];

const faqs = [
  {
    question: "What services are included in your CSSD solutions?",
    answer: "Our comprehensive CSSD services cover equipment selection, layout planning, workflow optimization, and staff training for establishing and maintaining sterile services departments. We provide end-to-end support from design to implementation.",
  },
  {
    question: "Do you ensure compliance with sterilization standards?",
    answer: "Yes, our team is well-versed in international sterilization standards, and we design CSSD setups to meet or exceed regulatory requirements including local health authority guidelines and international best practices.",
  },
  {
    question: "How do you help with equipment selection?",
    answer: "We assist in selecting the right sterilization equipment based on your facility's needs, including autoclaves, ultrasonic cleaners, washer-disinfectors, and other state-of-the-art technology. We consider capacity, throughput, and budget requirements.",
  },
  {
    question: "Can you optimize our existing CSSD workflow?",
    answer: "Absolutely. Our services include optimizing department layouts to streamline operations, reduce turnaround times, and enhance overall productivity. We analyze your current workflow and implement improvements for maximum efficiency.",
  },
  {
    question: "Do you provide ongoing support and training?",
    answer: "Yes, we offer comprehensive training programs for CSSD staff covering equipment operation, maintenance, and sterilization best practices. Our ongoing support ensures your team maintains the highest standards of sterilization.",
  },
  {
    question: "What is the process for setting up a new CSSD?",
    answer: "We begin with a thorough assessment of your requirements, followed by design planning, equipment specification, installation, staff training, and validation testing. Our team guides you through each phase to ensure a successful implementation.",
  },
];

export default function CSSDPage() {
  return (
    <>
      <ServicePageTemplate
        title="CSSD"
        subtitle="Central Sterile Services"
        description="Ensure the highest standards of sterilization and infection control with our CSSD services. From equipment selection to workflow optimization, we help you establish and maintain a central sterilization facility that meets regulatory requirements."
        image="/images/CSSD.jpg"
        services={services}
        faqs={faqs}
      />
      <Footer />
    </>
  );
}
