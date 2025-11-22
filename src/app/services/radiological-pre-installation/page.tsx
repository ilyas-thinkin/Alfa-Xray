import ServicePageTemplate from "@/components/ServicePageTemplate";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Steel Structure Installation",
    description: "Robust steel framework installation for supporting heavy radiological equipment.",
  },
  {
    title: "Power Distribution Board (PDB)",
    description: "Professional installation of power distribution systems for medical equipment.",
  },
  {
    title: "Trunking Work",
    description: "Organized cable management systems for clean and efficient installations.",
  },
  {
    title: "Emergency On/Off Switch",
    description: "Critical safety switches for immediate equipment shutdown in emergencies.",
  },
  {
    title: "Warning Lamp Installation",
    description: "Visual alert systems indicating active radiation equipment operation.",
  },
  {
    title: "Magnetic Lock Systems",
    description: "Secure access control preventing unauthorized entry during equipment operation.",
  },
  {
    title: "Safety Assessment",
    description: "Comprehensive evaluation of site conditions and safety requirements.",
  },
  {
    title: "Quality Control",
    description: "Rigorous testing and verification ensuring installation meets all standards.",
  },
];

const faqs = [
  {
    question: "What does the pre-installation process involve?",
    answer: "Our pre-installation process includes detailed site assessment, equipment compatibility analysis, optimal positioning planning, structural evaluation, electrical requirements assessment, and coordination with equipment manufacturers to ensure seamless integration.",
  },
  {
    question: "What types of radiological equipment do you handle?",
    answer: "We handle pre-installation for a wide range of equipment including X-ray machines, CT scanners, MRI systems, fluoroscopy units, and other diagnostic imaging equipment. We support both new installations and existing equipment relocation or upgrades.",
  },
  {
    question: "Do you provide post-installation support?",
    answer: "Yes, we provide comprehensive post-installation training for staff on proper operation and maintenance of installed equipment. Our team also offers ongoing technical support to ensure optimal equipment performance.",
  },
  {
    question: "How long does the pre-installation process take?",
    answer: "The timeline varies depending on the complexity of the installation and facility requirements. Simple installations may take a few days, while complex setups requiring structural modifications can take several weeks. We provide detailed timelines during the assessment phase.",
  },
  {
    question: "Can you work with existing facility infrastructure?",
    answer: "Absolutely. Our team specializes in adapting installations to existing infrastructure, minimizing disruption to ongoing operations while ensuring all safety and performance requirements are met.",
  },
  {
    question: "What safety measures are implemented during installation?",
    answer: "We implement comprehensive safety protocols including proper shielding, warning systems, emergency controls, and access restrictions. All installations comply with local and international safety regulations.",
  },
];

export default function RadiologicalPreInstallationPage() {
  return (
    <>
      <ServicePageTemplate
        title="Radiological Pre Installation"
        subtitle="Expert Setup Services"
        description="Streamline your radiological equipment setup with our expert pre-installation services. Our dedicated team ensures seamless integration, taking care of every detail from site assessment to equipment positioning."
        image="/images/radiology installation.jpg"
        services={services}
        faqs={faqs}
      />
      <Footer />
    </>
  );
}
