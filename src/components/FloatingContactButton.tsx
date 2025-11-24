"use client";

import { useState, useEffect } from "react";
import ContactFormPopup from "./ContactFormPopup";

export default function FloatingContactButton() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsContactFormOpen(true)}
        className={`fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span>Get in Touch</span>
      </button>

      {/* Contact Form Popup */}
      <ContactFormPopup
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </>
  );
}
