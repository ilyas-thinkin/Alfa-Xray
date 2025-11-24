"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const countryCodes = [
  { code: "+966", country: "Saudi Arabia" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+973", country: "Bahrain" },
  { code: "+974", country: "Qatar" },
  { code: "+965", country: "Kuwait" },
  { code: "+968", country: "Oman" },
  { code: "+20", country: "Egypt" },
  { code: "+962", country: "Jordan" },
  { code: "+961", country: "Lebanon" },
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+92", country: "Pakistan" },
  { code: "+63", country: "Philippines" },
];

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  countryCode: "+966",
  message: "",
};

export default function ContactFormPopup({ isOpen, onClose }: ContactFormPopupProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState(() => ({ ...initialFormState }));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const whatsappNumber = "966567169966";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openWhatsApp = (url: string) => {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = url;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const message = [
      "New enquiry via popup form:",
      `Name: ${formData.name || "N/A"}`,
      `Email: ${formData.email || "N/A"}`,
      `Phone: ${formData.countryCode} ${formData.phone || ""}`,
      `Message: ${formData.message || "N/A"}`,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    openWhatsApp(url);

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ ...initialFormState });
  };

  const closeForm = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setSubmitted(false);
      setIsCountryDropdownOpen(false);
    }, 200);
  };

  const selectedCountry = countryCodes.find((c) => c.code === formData.countryCode) || countryCodes[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm ${isClosing ? "modal-backdrop-exit" : "modal-backdrop-enter"}`}
        onClick={closeForm}
      />

      {/* Form Modal */}
      <div className={`relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden ${isClosing ? "modal-content-exit" : "modal-content-enter"}`}>
        {/* Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800">How can we help?</h3>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Thank you!</h4>
              <p className="text-slate-600 mb-6">We received your message.</p>
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
                />
              </div>

              <div>
                <label htmlFor="popup-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  {/* Country Code Selector */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="flex items-center gap-2 px-3 py-3 rounded-xl border border-slate-300 hover:border-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-slate-800 bg-white min-w-[140px] justify-between"
                    >
                      <span className="text-sm font-semibold text-slate-900">{selectedCountry.code}</span>
                      <span className="text-[11px] text-slate-500 truncate w-24 text-left hidden sm:inline">
                        {selectedCountry.country}
                      </span>
                      <svg className={`w-4 h-4 text-slate-400 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {isCountryDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl border border-slate-200 shadow-lg z-20 max-h-56 overflow-y-auto">
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, countryCode: country.code }));
                              setIsCountryDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between gap-3 px-3 py-2 hover:bg-green-50 transition-colors text-left ${
                              formData.countryCode === country.code ? "bg-green-50 text-green-600" : "text-slate-700"
                            }`}
                          >
                            <span className="text-sm font-semibold">{country.code}</span>
                            <span className="text-xs text-slate-500 truncate flex-1 text-right">{country.country}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Phone Input */}
                  <input
                    type="tel"
                    id="popup-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-slate-800"
                  />
                </div>
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
    </div>
  );
}
