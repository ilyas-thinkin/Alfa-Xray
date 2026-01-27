import ServicePageTemplate from "@/components/ServicePageTemplate";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Equipment Calibration",
    description: "Precision calibration ensuring accuracy and regulatory compliance.",
  },
  {
    title: "Negative/Positive Pressure",
    description: "Specialized pressure control systems for infection control and containment areas.",
  },
  {
    title: "OT Laminar Flow",
    description: "Advanced laminar airflow systems for sterile operating theatre environments.",
  },
  {
    title: "Hermetic Doors",
    description: "Airtight door solutions for controlled environments and clean rooms.",
  },
  {
    title: "Isolation Room",
    description: "Complete isolation room engineering for patient safety and infection prevention.",
  },
  {
    title: "Clean Room",
    description: "Design and implementation of clean room facilities meeting healthcare standards.",
  },
  {
    title: "Medical Gas",
    description: "Medical gas pipeline systems installation, maintenance, and compliance testing.",
  },
];

const faqs = [
  {
    question: "What is equipment calibration and why is it important?",
    answer: "Equipment calibration ensures that medical devices measure and operate with precision according to regulatory standards. Regular calibration maintains accuracy, ensures patient safety, and keeps your facility compliant with healthcare regulations.",
  },
  {
    question: "What is the difference between negative and positive pressure rooms?",
    answer: "Negative pressure rooms prevent airborne contaminants from escaping by drawing air inward, ideal for isolating infectious patients. Positive pressure rooms push filtered air outward to protect immunocompromised patients from external contaminants.",
  },
  {
    question: "What is OT laminar flow and how does it work?",
    answer: "OT laminar flow systems deliver a continuous stream of filtered air in a uniform direction across the operating theatre. This minimizes airborne particles and bacteria, significantly reducing the risk of surgical site infections.",
  },
  {
    question: "What are hermetic doors used for in healthcare facilities?",
    answer: "Hermetic doors create airtight seals essential for maintaining pressure differentials in clean rooms, isolation rooms, and operating theatres. They prevent air leakage and cross-contamination between controlled and non-controlled areas.",
  },
  {
    question: "What standards do your clean rooms meet?",
    answer: "Our clean room installations comply with ISO 14644 standards and healthcare-specific guidelines. We design and implement clean rooms for various classifications based on your facility's requirements, from pharmaceutical preparation to surgical environments.",
  },
  {
    question: "What medical gas systems do you install and maintain?",
    answer: "We provide complete medical gas pipeline systems including oxygen, nitrous oxide, medical air, and vacuum systems. Our services cover installation, testing, certification, and ongoing maintenance to ensure safe and reliable gas delivery throughout your facility.",
  },
];

export default function MedicalEngineeringPage() {
  return (
    <>
      <ServicePageTemplate
        title="Medical Engineering"
        subtitle="Technical Excellence"
        description="Rely on our medical engineering expertise for state-of-the-art equipment maintenance and optimization. We ensure your medical devices operate efficiently, reducing operational interruptions while extending equipment lifespan."
        image="/images/medical engineering F.jpg"
        services={services}
        faqs={faqs}
      />
      <Footer />
    </>
  );
}
