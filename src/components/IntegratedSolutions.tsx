"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    title: "Radiation Protection",
    description: "Advanced shielding solutions ensuring safety from harmful radiation exposure in medical and industrial environments.",
    href: "/services/radiation-protection",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Radiological Pre Installation",
    description: "Complete pre-installation assessment and preparation for radiological equipment with precision engineering.",
    href: "/services/radiological-pre-installation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Hospital Interior",
    description: "Modern, hygienic interior solutions designed specifically for healthcare facilities with patient comfort in mind.",
    href: "/services/hospital-interior",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Medical Engineering",
    description: "Cutting-edge engineering solutions for medical equipment installation, maintenance, and optimization.",
    href: "/services/medical-engineering",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Hospital Furniture",
    description: "Ergonomic, durable hospital furniture designed for functionality, comfort, and easy sterilization.",
    href: "/services/hospital-furniture",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Dental Cabinets",
    description: "Specialized dental cabinetry with integrated storage solutions for modern dental practices.",
    href: "/services/dental-cabinets",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "CSSD",
    description: "Central Sterile Services Department solutions ensuring highest standards of sterilization and infection control.",
    href: "/services/cssd",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function IntegratedSolutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<boolean[]>(new Array(services.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      services.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedCards(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 100);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8 transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="max-w-2xl">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight transition-all duration-700 delay-100
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <span className="text-slate-800">INTEGRATED </span>
              <span className="text-green-600">SOLUTIONS</span>
            </h2>
            <p className={`mt-6 text-lg text-slate-600 leading-relaxed transition-all duration-700 delay-200
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              We specialize in end-to-end medical infrastructure, delivering sterile, safe, and efficient environments.
            </p>
          </div>
          <a
            href="#catalog"
            className={`group inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-500
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">View Full Catalog</span>
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              href={service.href}
              key={service.title}
              className={`group relative transition-all duration-700 ease-out
                ${animatedCards[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div
                className={`relative h-full p-6 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden
                  ${hoveredIndex === index
                    ? "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border-green-200 shadow-2xl shadow-green-500/10 scale-[1.02] -translate-y-2"
                    : "bg-white/60 backdrop-blur-md border-slate-200/50 shadow-lg shadow-slate-200/50"
                  }`}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-600/5 opacity-0 transition-opacity duration-500
                    ${hoveredIndex === index ? "opacity-100" : ""}`}
                />

                {/* Pulse ring effect on hover */}
                <div
                  className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-500/20 to-green-600/20 blur-xl transition-opacity duration-500
                    ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                />

                {/* Shimmer effect on entrance */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out
                    ${animatedCards[index] ? "translate-x-full" : "-translate-x-full"}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-all duration-200
                      ${hoveredIndex === index
                        ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 rotate-6 scale-110"
                        : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold mb-3 transition-all duration-300
                      ${hoveredIndex === index ? "text-green-600" : "text-slate-800"}`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div
                    className={`flex items-center gap-2 text-sm font-medium transition-all duration-300
                      ${hoveredIndex === index ? "text-green-600 translate-x-2" : "text-slate-400"}`}
                  >
                    <span>Learn more</span>
                    <svg
                      className={`w-4 h-4 transition-all duration-300 ${hoveredIndex === index ? "translate-x-1 opacity-100" : "opacity-50"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 transition-all duration-500
                    ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500/50 animate-ping" />
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500 origin-left
                    ${hoveredIndex === index ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
