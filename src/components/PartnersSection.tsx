"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
  {
    number: "01",
    name: "ALFA AL HAYAT Co. LTD.",
    description: "The core division specializing in radiation safety and technical services.",
  },
  {
    number: "02",
    name: "Alfaco Metallic",
    description: "Dedicated manufacturing and supply of metallic structural components.",
  },
  {
    number: "03",
    name: "Alfaco Interiors",
    description: "Focusing on high-standard medical and commercial interior fit-outs.",
  },
  {
    number: "04",
    name: "Alfaco Modular System",
    description: "Custom modular solutions for efficient space utilization in healthcare facilities.",
  },
  {
    number: "05",
    name: "New Hail Switch Gear LLC",
    description: "Providing specialized electrical and switchgear solutions for critical systems.",
  },
];

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.number}
              className={`transition-all duration-700 ease-out
                ${animatedItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-green-200 hover:-translate-y-2 transition-all duration-300 h-full cursor-pointer">
                {/* Number */}
                <div className="mb-4">
                  <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-green-700 transition-all duration-300">
                    {partner.number}
                  </span>
                </div>

                {/* Company Name */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
