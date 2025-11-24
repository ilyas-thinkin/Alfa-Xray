"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

const groupCompanies = [
  {
    number: "01",
    title: "ALFA AL HAYAT Co. LTD.",
    description: "The core division specializing in radiation safety and technical services.",
  },
  {
    number: "02",
    title: "Alfaco Metallic UAE",
    description: "Dedicated manufacturing and supply of metallic structural components.",
  },
  {
    number: "03",
    title: "Alfaco Interiors",
    description: "Focusing on high-standard medical and commercial interior fit-outs.",
  },
  {
    number: "04",
    title: "Alfaco Modular System",
    description: "Custom modular solutions for efficient space utilization in healthcare facilities.",
  },
  {
    number: "05",
    title: "New Hail Switch Gear LLC",
    description: "Providing specialized electrical and switchgear solutions for critical systems.",
  },
];

const values = [
  {
    title: "Radiation Protection Expertise",
    description: "Comprehensive solutions for radiation-prone environments across healthcare, research, and industrial sectors.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Commitment to the latest technological advancements in radiation protection and medical infrastructure.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Customization",
    description: "Tailored solutions addressing specific project requirements and unique client needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Quality",
    description: "High-grade shielding materials and equipment ensuring maximum protection and durability.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    description: "Emphasis on exceeding client expectations with dedicated support and service excellence.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const services = [
  "Radiation Protection",
  "Radiological Pre-Installation",
  "Hospital Interior",
  "Medical Engineering",
  "Hospital Furniture",
  "Dental Cabinets",
  "CSSD",
];

export default function AboutPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isGroupVisible, setIsGroupVisible] = useState(false);
  const [isValuesVisible, setIsValuesVisible] = useState(false);
  const missionRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHeroVisible(true);

    const observerOptions = { threshold: 0.1 };

    const missionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsMissionVisible(true);
        missionObserver.disconnect();
      }
    }, observerOptions);

    const groupObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsGroupVisible(true);
        groupObserver.disconnect();
      }
    }, observerOptions);

    const valuesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsValuesVisible(true);
        valuesObserver.disconnect();
      }
    }, observerOptions);

    if (missionRef.current) missionObserver.observe(missionRef.current);
    if (groupRef.current) groupObserver.observe(groupRef.current);
    if (valuesRef.current) valuesObserver.observe(valuesRef.current);

    return () => {
      missionObserver.disconnect();
      groupObserver.disconnect();
      valuesObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          {/* Breadcrumb */}
          <nav className={`flex items-center gap-2 text-sm mb-8 transition-all duration-700 ${
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-green-400">About Us</span>
          </nav>

          <div className="max-w-3xl">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 transition-all duration-700 delay-100 ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">Who We Are</span>
            </div>

            {/* Title */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 transition-all duration-700 delay-200 ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              About <span className="text-green-400">ALFA AL HAYAT</span>
            </h1>

            {/* Description */}
            <p className={`text-lg sm:text-xl text-white/80 leading-relaxed mb-8 transition-all duration-700 delay-300 ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Welcome to ALFA AL HAYAT Co. LTD.! We are a leading radiation protection company based in Saudi Arabia,
              dedicated to ensuring the safety and well-being of our clients. With years of expertise in the field,
              we specialize in designing, installing, and maintaining state-of-the-art radiation protection solutions.
            </p>

            {/* CTA */}
            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-all duration-300"
              >
                <span>Get in Touch</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className={`relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100 transition-all duration-1000 ${
              isMissionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-4 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To provide exceptional radiation protection solutions, customized to meet the unique needs of our clients in Saudi Arabia.
                We focus on delivering innovative, reliable, and cost-effective services while establishing industry standards for
                safety and quality in radiation protection.
              </p>
            </div>

            {/* Vision */}
            <div className={`relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 transition-all duration-1000 delay-200 ${
              isMissionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-lg shadow-slate-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-4 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be at the forefront of radiation protection technology, continuously innovating and adapting to meet the
                evolving needs of our clients. Our goal is to become the recognized industry leader in safety-focused solutions
                across the Middle East region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Group Section */}
      <section ref={groupRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isGroupVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              <span className="text-slate-800">OUR </span>
              <span className="text-green-600">GROUP</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A family of specialized companies delivering comprehensive solutions
            </p>
          </div>

          {/* Group Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupCompanies.map((company, index) => (
              <div
                key={company.title}
                className={`group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  isGroupVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Large Number */}
                <div className="mb-4">
                  <span className="text-6xl sm:text-7xl font-black bg-gradient-to-br from-green-200 to-green-100 bg-clip-text text-transparent select-none">
                    {company.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {company.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm">
                  {company.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Values Section */}
      <section ref={valuesRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isValuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              <span className="text-slate-800">WHY </span>
              <span className="text-green-600">CHOOSE US</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What sets us apart in delivering exceptional radiation protection solutions
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group relative p-8 rounded-3xl bg-white border border-slate-200/50 shadow-lg hover:shadow-xl hover:border-green-200 transition-all duration-500 hover:-translate-y-2 ${
                  isValuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                <span className="text-slate-800">OUR </span>
                <span className="text-green-600">SERVICES</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We offer a comprehensive range of services to meet all your medical infrastructure needs.
                From radiation protection to hospital interiors, our expert team delivers excellence in every project.
              </p>
              <ul className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <li key={service} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#services"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-all duration-300"
              >
                <span>View All Services</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100 text-center">
                <div className="text-4xl sm:text-5xl font-black text-green-600 mb-2">4k+</div>
                <div className="text-slate-600 font-medium">Projects Completed</div>
              </div>
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 text-center">
                <div className="text-4xl sm:text-5xl font-black text-slate-800 mb-2">100+</div>
                <div className="text-slate-600 font-medium">Partners</div>
              </div>
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 text-center">
                <div className="text-4xl sm:text-5xl font-black text-slate-800 mb-2">3+</div>
                <div className="text-slate-600 font-medium">Countries</div>
              </div>
              <div className="p-6 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100 text-center">
                <div className="text-4xl sm:text-5xl font-black text-green-600 mb-2">8+</div>
                <div className="text-slate-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your radiation protection and medical infrastructure needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-all duration-300"
            >
              <span>Contact Us</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:info@alfaalhayat.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
