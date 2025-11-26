"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const partners = [
  {
    number: "01",
    name: "ALFA X-Ray Technical LLC",
    description: "Premier provider of advanced radiation protection solutions for medical, industrial, and research facilities.",
    logo: "/images/alfaco group/ALFA XRay Logo.png",
  },
  {
    number: "02",
    name: "ALFA AL HAYAT Co. LTD",
    description: "Leading provider of integrated healthcare solutions and medical infrastructure services.",
    logo: "/images/alfaco group/Alfa Al Hayat.png",
  },
  {
    number: "03",
    name: "ALFCO Metallics",
    description: "Dedicated manufacturing and supply of high-quality metallic structural components and assemblies.",
    logo: "/images/alfaco group/ALFCO Metallics.png",
  },
  {
    number: "04",
    name: "ALFCO Interiors",
    description: "Focusing on high-standard medical and commercial interior fit-outs with innovative design solutions.",
    logo: "/images/alfaco group/ALFCO Interior.png",
  },
  {
    number: "05",
    name: "ALFCO Modular System",
    description: "Custom modular solutions for efficient space utilization in healthcare facilities and beyond.",
    logo: "/images/alfaco group/ALFCO Modular.png",
  },
  {
    number: "06",
    name: "New Hail Switch Gear LLC",
    description: "Providing specialized electrical and switchgear solutions for critical systems and infrastructure.",
    logo: "/images/alfaco group/NEW HAIL.png",
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
            <span className="text-slate-800">ALFCO </span>
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
              className={`transition-all duration-700 ease-out
                ${animatedItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 h-full flex flex-col">
                {/* Number Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {partner.number}
                  </div>
                </div>

                {/* Logo Section */}
                <div className="relative bg-gradient-to-br from-slate-50 to-white pt-8 pb-6 px-6 border-b border-slate-100">
                  <div className="relative w-28 h-28 mx-auto group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col p-8 bg-white">
                  {/* Company Name */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                    {partner.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
