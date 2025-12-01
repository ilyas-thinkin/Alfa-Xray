"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface LogoShowcaseProps {
  title: string;
  subtitle?: string;
  logos: Array<{
    name: string;
    path: string;
  }>;
  accentColor?: "green" | "slate";
  withBackground?: boolean;
}

export default function LogoShowcase({
  title,
  subtitle,
  logos,
  accentColor = "green",
  withBackground = false
}: LogoShowcaseProps) {
  const [isVisible, setIsVisible] = useState(false);
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

  const colorClasses = {
    green: {
      accent: "text-green-600",
    },
    slate: {
      accent: "text-slate-800",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        withBackground ? "bg-gradient-to-b from-green-50 to-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            <span className="text-slate-800">{title.split(" ").slice(0, -1).join(" ")} </span>
            <span className={colors.accent}>{title.split(" ").slice(-1)}</span>
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={`group relative transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Logo Container */}
              <div className="relative w-full h-56 flex items-center justify-center p-6">
                <Image
                  src={logo.path}
                  alt={logo.name}
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
