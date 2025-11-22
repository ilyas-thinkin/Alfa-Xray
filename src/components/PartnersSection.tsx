"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
  { number: "01", name: "Alfa x-ray technical LLC" },
  { number: "02", name: "Alfaco metallic uae" },
  { number: "03", name: "Alfaco interiors" },
  { number: "04", name: "Alfaco modular system" },
  { number: "05", name: "New hail switch gear LLC" },
];

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(new Array(partners.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      partners.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 150);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="text-slate-800">OUR </span>
            <span className="text-green-600">GROUP</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            A network of specialized companies delivering excellence across every aspect of medical infrastructure.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.number}
              className={`group relative transition-all duration-700 ease-out
                ${animatedItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden
                ${hoveredIndex === index
                  ? "bg-gradient-to-br from-green-500 to-green-600 border-green-400 shadow-2xl shadow-green-500/20 scale-[1.02] -translate-y-2"
                  : "bg-white/60 backdrop-blur-md border-slate-200/50 shadow-lg"
                }`}
              >
                {/* Large background number */}
                <div
                  className={`absolute -top-4 -left-2 text-[120px] sm:text-[150px] font-black leading-none select-none transition-all duration-300
                    ${hoveredIndex === index ? "text-white/20" : "text-slate-100"}`}
                >
                  {partner.number}
                </div>

                {/* Content */}
                <div className="relative z-10 pt-16">
                  <h3
                    className={`text-xl sm:text-2xl font-bold transition-all duration-300
                      ${hoveredIndex === index ? "text-white" : "text-slate-800"}`}
                  >
                    {partner.name}
                  </h3>

                  {/* Arrow icon */}
                  <div
                    className={`mt-4 inline-flex items-center gap-2 text-sm font-medium transition-all duration-300
                      ${hoveredIndex === index ? "text-white/90 translate-x-2" : "text-slate-400 opacity-0"}`}
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Shimmer effect on entrance */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out
                    ${animatedItems[index] ? "translate-x-full" : "-translate-x-full"}`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                />

                {/* Corner decoration */}
                <div
                  className={`absolute bottom-4 right-4 w-8 h-8 rounded-full transition-all duration-300
                    ${hoveredIndex === index ? "bg-white/20 scale-100" : "bg-slate-100 scale-0"}`}
                >
                  <svg
                    className={`w-8 h-8 p-2 transition-all duration-300
                      ${hoveredIndex === index ? "text-white" : "text-slate-400"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
