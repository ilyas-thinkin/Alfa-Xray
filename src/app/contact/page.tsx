"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    title: "Phone",
    details: ["+966 567 16 9966"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    href: "tel:+966567169966",
  },
  {
    title: "Email",
    details: ["info@alfaalhayat.com"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: "mailto:info@alfaalhayat.com",
  },
  {
    title: "Address",
    details: ["4377 Al Imam Turki Ibn Abdullah", "Ibn Muhammad - Ash Shimaisi,", "Riyadh 12745-7947,", "Kingdom of Saudi Arabia"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: "https://maps.google.com/?q=Riyadh+Saudi+Arabia",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/alfa-x-ray-technical-services-llc-154a4b231",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const whatsappNumber = "966567169966";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openWhatsApp = (url: string) => {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = url;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const message = [
      "New enquiry via Contact page:",
      `Name: ${formData.name || "N/A"}`,
      `Email: ${formData.email || "N/A"}`,
      `Phone: ${formData.phone || "N/A"}`,
      `Subject: ${formData.subject || "N/A"}`,
      `Message: ${formData.message || "N/A"}`,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    openWhatsApp(url);

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Breadcrumb */}
          <nav className={`flex items-center gap-2 text-sm mb-8 transition-all duration-700 ${
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-green-400">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 transition-all duration-700 delay-100 ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">Get In Touch</span>
            </div>

            {/* Title */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 transition-all duration-700 delay-200 ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Contact <span className="text-green-400">Us</span>
            </h1>

            {/* Description */}
            <p className={`text-lg sm:text-xl text-white/80 leading-relaxed transition-all duration-700 delay-300 ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Have questions about our radiation protection solutions? We&apos;re here to help.
              Reach out to our team and let&apos;s discuss how we can support your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.href}
                target={info.title === "Address" ? "_blank" : undefined}
                rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                className={`group relative p-6 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-green-200 transition-all duration-500 hover:-translate-y-2 ${
                  isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-4 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {info.title}
                </h3>

                {/* Details */}
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-slate-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 text-slate-300 group-hover:text-green-500 transition-colors duration-300">
                  <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-6">
                      Your message has been sent successfully. We&apos;ll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-300"
                          placeholder="+971 50 000 0000"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-300"
                        >
                          <option value="">Select a subject</option>
                          <option value="radiation-protection">Radiation Protection</option>
                          <option value="pre-installation">Radiological Pre-Installation</option>
                          <option value="hospital-interior">Hospital Interior</option>
                          <option value="medical-engineering">Medical Engineering</option>
                          <option value="hospital-furniture">Hospital Furniture</option>
                          <option value="dental-cabinets">Dental Cabinets</option>
                          <option value="cssd">CSSD</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-300 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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
                    <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                      <path d="M16 3C9.373 3 4 8.206 4 14.635c0 2.37.803 4.57 2.181 6.36L4 29l8.263-2.61A12.73 12.73 0 0016 26c6.627 0 12-5.206 12-11.635C28 8.206 22.627 3 16 3zm0 21.36c-1.238 0-2.444-.21-3.583-.625l-.257-.092-4.912 1.551 1.573-4.596-.167-.218A9.26 9.26 0 016.5 14.635C6.5 9.495 10.76 5.5 16 5.5s9.5 3.995 9.5 9.135-4.26 9.725-9.5 9.725zm5.056-7.199c-.277-.139-1.637-.807-1.89-.9-.254-.093-.44-.139-.627.14-.186.278-.72.9-.882 1.085-.162.186-.324.209-.6.07-.277-.14-1.17-.426-2.23-1.358-.824-.723-1.379-1.617-1.541-1.895-.162-.278-.017-.429.123-.568.127-.126.278-.325.416-.487.139-.163.185-.279.278-.465.093-.186.046-.349-.023-.488-.07-.14-.627-1.508-.86-2.065-.226-.54-.456-.467-.627-.475-.162-.007-.349-.009-.536-.009a1.033 1.033 0 00-.747.349c-.255.278-.976.953-.976 2.323 0 1.37 1 2.693 1.138 2.88.139.186 1.966 3.133 4.76 4.266.665.287 1.183.457 1.586.585.666.212 1.272.183 1.75.111.533-.08 1.637-.667 1.87-1.312.231-.646.231-1.199.162-1.313-.069-.116-.255-.186-.533-.325z" />
                    </svg>
                    <span>Send via WhatsApp</span>
                  </>
                )}
              </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Address Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-xl border border-slate-700 p-8 sm:p-10 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Our Location</h3>
                      <p className="text-white/60 text-sm">Visit us at our office</p>
                    </div>
                  </div>

                  {/* Address Details */}
                  <div className="space-y-4 mb-8">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-white font-semibold mb-1">ALFA AL HAYAT CO. LTD</p>
                      <p className="text-white/70 leading-relaxed">
                        4377 Al Imam Turki Ibn Abdullah<br />
                        Ibn Muhammad - Ash Shimaisi<br />
                        Riyadh 12745-7947<br />
                        Kingdom of Saudi Arabia
                      </p>
                    </div>
                  </div>

                  {/* Contact Quick Links */}
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="tel:+966567169966"
                      className="group flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/50 text-xs">Call Us</p>
                        <p className="text-white text-sm font-medium">+966 567 16 9966</p>
                      </div>
                    </a>
                    <a
                      href="mailto:info@alfaalhayat.com"
                      className="group flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/50 text-xs">Email</p>
                        <p className="text-white text-sm font-medium">info@alfaalhayat.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100 p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-green-100">
                    <span className="text-slate-600">Sunday - Thursday</span>
                    <span className="font-semibold text-slate-800">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-100">
                    <span className="text-slate-600">Friday</span>
                    <span className="font-semibold text-slate-800">Closed</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600">Saturday</span>
                    <span className="font-semibold text-slate-800">9:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Follow Us</h3>
                <p className="text-slate-600 mb-6">
                  Stay connected with us on social media for the latest updates.
                </p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-green-500 hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
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
            Need Immediate Assistance?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Our team is ready to help you with any questions about our radiation protection and medical infrastructure services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@alfaalhayat.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@alfaalhayat.com</span>
            </a>
            <a
              href="https://www.alfaalhayat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span>www.alfaalhayat.com</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
