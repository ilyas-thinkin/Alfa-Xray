"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4000, suffix: "+", label: "Projects", prefix: "" },
  { value: 100, suffix: "+", label: "Partners", prefix: "" },
  { value: 3, suffix: "+", label: "Countries", prefix: "" },
  { value: 8, suffix: "+", label: "Years", prefix: "" },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatCard({ value, suffix, label, prefix, index, isVisible }: {
  value: number;
  suffix: string;
  label: string;
  prefix: string;
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 2000, isVisible);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), index * 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated, index]);

  return (
    <div
      className={`group relative text-center transition-all duration-700 ease-out
        ${hasAnimated ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Card background */}
      <div className="relative p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-slate-200/50 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-green-500/10 hover:border-green-200 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        {/* Gradient accent on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shimmer effect on entrance */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-out
            ${hasAnimated ? "translate-x-full" : "-translate-x-full"}`}
          style={{ transitionDelay: `${index * 150 + 300}ms` }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Number */}
          <div className={`text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-2 tabular-nums transition-all duration-500
            ${hasAnimated ? "blur-0" : "blur-sm"}`}>
            {prefix}
            <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              {value >= 1000 ? `${Math.floor(count / 1000)}k` : count}
            </span>
            {suffix}
          </div>

          {/* Label with slide up animation */}
          <div
            className={`text-sm sm:text-base font-medium text-slate-500 uppercase tracking-wider transition-all duration-500
              ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            style={{ transitionDelay: `${index * 150 + 200}ms` }}
          >
            {label}
          </div>
        </div>

        {/* Decorative element with pulse */}
        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500/50 transition-all duration-500
          ${hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
          style={{ transitionDelay: `${index * 150 + 400}ms` }}
        >
          <div className="absolute inset-0 rounded-full bg-green-500/50 animate-ping" />
        </div>

        {/* Bottom line accent */}
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-700 ease-out
            ${hasAnimated ? "w-12 opacity-100" : "w-0 opacity-0"}`}
          style={{ transitionDelay: `${index * 150 + 300}ms` }}
        />
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              prefix={stat.prefix}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
