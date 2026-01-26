"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-green-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Privacy <span className="text-green-500">Policy</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="prose prose-lg prose-slate max-w-none">
            {/* Last Updated */}
            <p className="text-slate-500 text-sm mb-8">
              Last Updated: January 2025
            </p>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                ALFA AL HAYAT CO. LTD is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                visit our website or use our services related to radiation protection, medical engineering, and
                healthcare facility solutions.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and company information when you contact us or request our services.</li>
                <li><strong>Project Information:</strong> Details about your healthcare facility, project requirements, and technical specifications.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
                <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email, phone, or our contact form.</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                How We Use Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and fulfill your requests</li>
                <li>To send you project updates, quotes, and service-related communications</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To send newsletters and marketing communications (with your consent)</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                Data Protection
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method
                of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                Information Sharing
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>With service providers who assist us in operating our business</li>
                <li>To comply with legal requirements or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With your consent or at your direction</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Unsubscribe from marketing communications</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience.
                You can choose to disable cookies through your browser settings, but this may affect some features
                of our website.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                Changes to This Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to
                review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="text-slate-700 font-semibold mb-2">ALFA AL HAYAT CO. LTD</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  4377 Al Imam Turki Ibn Abdullah Ibn Muhammad<br />
                  Ash Shimaisi, Riyadh 12745-7947<br />
                  Kingdom of Saudi Arabia<br /><br />
                  Email: <a href="mailto:info@alfaalhayat.com" className="text-green-600 hover:text-green-700">info@alfaalhayat.com</a><br />
                  Phone: <a href="tel:+966567169966" className="text-green-600 hover:text-green-700">+966 567 16 9966</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
