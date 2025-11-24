"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const closeForm = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsContactFormOpen(false);
      setIsClosing(false);
      setSubmitted(false);
    }, 200);
  };

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
      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm ${isClosing ? 'modal-backdrop-exit' : 'modal-backdrop-enter'}`}
            onClick={closeForm}
          />

          {/* Form Modal */}
          <div className={`relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto ${isClosing ? 'modal-content-exit' : 'modal-content-enter'}`}>
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Get in Touch</h3>
                <p className="text-slate-500 mt-1">We&apos;ll get back to you shortly</p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Thank You!</h4>
                  <p className="text-slate-600 mb-6">Your message has been sent successfully.</p>
                  <button
                    onClick={closeForm}
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="popup-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="popup-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-slate-800"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="popup-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-slate-800"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="popup-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-slate-800"
                      placeholder="+966 50 000 0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="popup-message"
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none text-slate-800"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
