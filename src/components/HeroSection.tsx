"use client";

import { useState } from "react";
import Image from "next/image";
import ContactFormPopup from "./ContactFormPopup";

export default function HeroSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 sm:pt-0">

      {/* Background Image Wrapper */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/HeroBg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* White Transparent Overlay */}
      <div className="absolute inset-0 bg-white/50 -z-5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white mt-8 sm:mt-0 px-2">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          <span className="text-black">Precision Safety.</span>{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
            Engineered Health.
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-10 text-black/90 px-2">
          Pioneering comprehensive medical and radiation protection solutions across Saudi Arabia.
          <span className="hidden sm:inline"> We safeguard environments, empower healthcare, and build trust.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="w-52 sm:w-56 h-12 sm:h-14 flex items-center justify-center text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
          >
            Explore Our Services
          </a>

          <button
            onClick={() => setIsContactFormOpen(true)}
            className="w-52 sm:w-56 h-12 sm:h-14 flex items-center justify-center text-sm sm:text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-full shadow-sm border border-white/10 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Contact Form Popup */}
      <ContactFormPopup
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </section>
  );
}
