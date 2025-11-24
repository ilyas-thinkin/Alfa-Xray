"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AboutSection() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-700">About Us</span>
            </div>

            {/* Heading */}
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="text-slate-800">WHO </span>
              <span className="text-green-600">ARE WE</span>
            </h2>

            {/* Description */}
            <p className={`text-lg text-slate-600 leading-relaxed mb-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Welcome to <span className="font-semibold text-slate-800">ALFA AL HAYAT Co. LTD.!</span> We are a leading radiation protection company based in Saudi Arabia, dedicated to ensuring the safety and well-being of our clients. With years of expertise in the field, we specialize in designing, installing, and maintaining state-of-the-art radiation protection solutions.
            </p>

            {/* CTA Button */}
            <Link
              href="/about"
              className={`group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <span>View More</span>
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

          {/* Right - Decorative Element */}
          <div className={`relative transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative">
              {/* Main card */}
              <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/50 shadow-xl">
                {/* Floating elements */}
                <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/30 flex items-center justify-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                {/* Stats or highlights */}
                <div className="space-y-6">
                  <div className={`flex items-center gap-4 transition-all duration-500 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Based in Saudi Arabia</h4>
                      <p className="text-sm text-slate-500">Serving the Middle East region</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 transition-all duration-500 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Years of Expertise</h4>
                      <p className="text-sm text-slate-500">Industry-leading experience</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 transition-all duration-500 delay-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Safety First</h4>
                      <p className="text-sm text-slate-500">Ensuring client well-being</p>
                    </div>
                  </div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-500/10 to-transparent rounded-tl-full" />
              </div>

              {/* Background blur decoration */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-green-500/20 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-slate-300/30 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
