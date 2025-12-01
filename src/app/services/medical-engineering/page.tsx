import ServicePageTemplate from "@/components/ServicePageTemplate";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Diagnostic Imaging Equipment",
    description: "Expert maintenance and optimization of X-ray, CT, MRI, and ultrasound systems.",
  },
  {
    title: "Patient Monitoring Devices",
    description: "Service and calibration of vital signs monitors and patient tracking systems.",
  },
  {
    title: "Surgical Instruments",
    description: "Maintenance and repair of surgical equipment and operating room systems.",
  },
  {
    title: "Equipment Calibration",
    description: "Precision calibration ensuring accuracy and regulatory compliance.",
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs extending equipment lifespan and reliability.",
  },
  {
    title: "24/7 Emergency Repairs",
    description: "Round-the-clock emergency support minimizing critical equipment downtime.",
  },
  {
    title: "Performance Optimization",
    description: "Fine-tuning equipment settings for optimal performance and efficiency.",
  },
  {
    title: "Compliance Testing",
    description: "Regular testing ensuring equipment meets safety and regulatory standards.",
  },
];

const faqs = [
  {
    question: "What types of medical equipment do you service?",
    answer: "We service a wide range of medical equipment including diagnostic imaging equipment (X-ray, CT, MRI), patient monitoring devices, surgical instruments, laboratory equipment, and various other medical devices across diverse healthcare settings.",
  },
  {
    question: "How do you approach equipment maintenance?",
    answer: "We develop customized maintenance schedules following manufacturer recommendations and industry standards, tailored to each facility's specific needs. Our approach includes preventive maintenance, regular inspections, and performance optimization.",
  },
  {
    question: "Do you provide calibration services?",
    answer: "Yes, our engineers perform comprehensive calibration and performance optimization services to ensure equipment accuracy and regulatory compliance. We maintain detailed records and provide calibration certificates.",
  },
  {
    question: "What emergency support do you offer?",
    answer: "We provide 24/7 emergency repair services to minimize downtime for critical equipment failures. Our rapid response team is available around the clock to address urgent equipment issues and restore operations quickly.",
  },
  {
    question: "What qualifications do your engineers have?",
    answer: "Our engineers hold biomedical engineering degrees and industry certifications with ongoing training in medical technology advancements. They are skilled in the latest diagnostic and repair techniques for modern medical equipment.",
  },
  {
    question: "Can you help with equipment upgrades and replacements?",
    answer: "Yes, we provide consultation on equipment upgrades and can assist with the planning and implementation of new equipment installations, ensuring seamless integration with your existing systems.",
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
