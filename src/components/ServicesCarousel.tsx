"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Radiation Protection",
    description: "ALFA AL HAYAT implements and installs a full line of shielding products thus offering quality line of radiation protection to ensure that radiology and radiotherapy staff.",
    image: "/images/Radiation F.jpg", 
    href: "/services/radiation-protection",
  },
  {
    title: "Radiological Pre Installation",
    description: "Streamline your radiological equipment setup with our expert pre-installation services.",
    image: "/images/radiology installation.jpg",
    href: "/services/radiological-pre-installation",
  },
  {
    title: "Hospital Interior",
    description: "Transform your healthcare environment with our innovative hospital interior services.",
    image: "/images/hospital interior F.jpg",
    href: "/services/hospital-interior",
  },
  {
    title: "Medical Engineering",
    description: "Rely on our medical engineering expertise for state-of-the-art equipment maintenance and optimization.",
    image: "/images/medical engineering F.jpg",
    href: "/services/medical-engineering",
  },
  {
    title: "Hospital Furniture",
    description: "Elevate the functionality and aesthetics of your healthcare facility with our range of hospital furniture.",
    image: "/images/hospital furniture F.jpg",
    href: "/services/hospital-furniture",
  },
  {
    title: "Dental Cabinets",
    description: "Enhance the efficiency of your dental practice with our specialized dental cabinets.",
    image: "/images/dental cabinets F.jpg",
    href: "/services/dental-cabinets",
  },
  {
    title: "CSSD",
    description: "Ensure the highest standards of sterilization and infection control with our CSSD services.",
    image: "/images/CSSD.jpg",
    href: "/services/cssd",
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Touch handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="text-slate-800">OUR </span>
            <span className="text-green-600">SERVICES</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive medical infrastructure solutions tailored to your needs.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div
            ref={carouselRef}
            className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`absolute inset-0 transition-all duration-700 ease-out
                  ${index === currentIndex
                    ? "opacity-100 translate-x-0 scale-100 z-10"
                    : index < currentIndex || (currentIndex === 0 && index === services.length - 1 && direction === "left")
                      ? "opacity-0 -translate-x-full scale-95 z-0"
                      : "opacity-0 translate-x-full scale-95 z-0"
                  }`}
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-xl px-12 sm:px-16 lg:px-24">
                    {/* Title */}
                    <h3
                      className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-500 delay-100
                        ${index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-base sm:text-lg text-white/80 mb-10 leading-relaxed transition-all duration-500 delay-200
                        ${index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href={service.href}
                      className={`group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600
                        hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg
                        shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300
                        ${index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      style={{ transitionDelay: index === currentIndex ? "300ms" : "0ms" }}
                    >
                      <span>Learn More</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows - Hidden on mobile */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-white hover:bg-green-500/40 hover:border-green-400/50 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-white hover:bg-green-500/40 hover:border-green-400/50 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-3 rounded-full transition-all duration-300 overflow-hidden
                  ${index === currentIndex ? "w-12 bg-green-500" : "w-3 bg-slate-300 hover:bg-slate-400"}`}
              >
                {index === currentIndex && isAutoPlaying && (
                  <div
                    className="absolute inset-0 bg-green-600 origin-left animate-progress"
                    style={{ animationDuration: "5s" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 overflow-x-auto pb-2 px-2">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => goToSlide(index)}
                className="group flex flex-col items-center gap-1 sm:gap-2 flex-shrink-0"
              >
                <div
                  className={`relative w-16 h-12 sm:w-20 sm:h-14 lg:w-24 lg:h-16 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300
                    ${index === currentIndex
                      ? "ring-2 ring-green-500 ring-offset-2 scale-110"
                      : "opacity-60 group-hover:opacity-100"
                    }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 transition-colors duration-300
                    ${index === currentIndex ? "bg-green-500/20" : "bg-black/30 group-hover:bg-black/10"}`}
                  />
                </div>
                <span
                  className={`text-[10px] sm:text-xs font-medium w-16 sm:w-20 lg:w-24 text-center leading-tight transition-colors duration-300
                    ${index === currentIndex ? "text-green-600" : "text-slate-400 group-hover:text-slate-600"}`}
                >
                  {service.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar animation keyframes */}
      <style jsx>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-progress {
          animation: progress linear forwards;
        }
      `}</style>
    </section>
  );
}
