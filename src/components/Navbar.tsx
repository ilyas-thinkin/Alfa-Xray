"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Radiation Protection",
    href: "/services/radiation-protection",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    name: "Radiological Pre Installation",
    href: "/services/radiological-pre-installation",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Hospital Interior",
    href: "/services/hospital-interior",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Medical Engineering",
    href: "/services/medical-engineering",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    name: "Hospital Furniture",
    href: "/services/hospital-furniture",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    name: "Dental Cabinets",
    href: "/services/dental-cabinets",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: "CSSD",
    href: "/services/cssd",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const DROPDOWN_CLOSE_DELAY = 500;

  // Handle dropdown open with delay for better UX
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, DROPDOWN_CLOSE_DELAY); // small delay to allow cursor to reach dropdown
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Reset scroll state when pathname changes (navigation occurs)
  useEffect(() => {
    setLastScrollY(0);
    setScrollProgress(0);
    setIsNavbarVisible(true);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Calculate scroll progress from 0 to 1 over first 100px
      const progress = Math.min(currentScrollY / 100, 1);
      setScrollProgress(progress);

      // Only apply hide/show behavior after passing hero section
      if (currentScrollY > heroHeight) {
        // Scrolling up - show navbar
        if (currentScrollY < lastScrollY) {
          setIsNavbarVisible(true);
        }
        // Scrolling down - hide navbar
        else if (currentScrollY > lastScrollY && currentScrollY > heroHeight + 100) {
          setIsNavbarVisible(false);
        }
      } else {
        // Always show navbar in hero section
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isScrolled = scrollProgress > 0.1;

  // Check if current page is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className="fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-out"
      style={{
        padding: `${20 - scrollProgress * 8}px 0`,
        backgroundColor: `rgba(255, 255, 255, ${scrollProgress})`,
        boxShadow: scrollProgress > 0.5 ? `0 1px 3px rgba(0, 0, 0, ${scrollProgress * 0.1})` : 'none',
        transform: isNavbarVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Left with pill background */}
          <Link href="/" className={`flex-shrink-0 rounded-full px-4 py-2 transition-all duration-300 ${
            isScrolled ? "bg-transparent" : "bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/50"
          }`}>
            <Image
              src="/images/Alfa Al Hayat.png"
              alt="Alfa Al Hayat"
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation Pill - Right */}
          <div className="hidden md:flex items-center flex-1 justify-end ml-8">
            <div className={`flex items-center gap-1 rounded-full px-3 py-2.5 transition-all duration-300 ${
              isScrolled ? "bg-transparent" : "bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/50"
            }`}>
              <Link
                href="/"
                className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive("/")
                    ? "text-green-600 bg-green-50"
                    : "text-slate-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                Home
                {isActive("/") && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full" />
                )}
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`relative flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isServicesActive
                      ? "text-green-600 bg-green-50"
                      : "text-slate-600 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {isServicesActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full" />
                  )}
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu - positioned with invisible bridge for better hover UX */}
                <div
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${
                    isServicesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className={`w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 origin-top ${
                    isServicesOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-2"
                  }`}>
                  <div className="p-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50 transition-all duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-green-50 group-hover:bg-green-500 flex items-center justify-center text-green-600 group-hover:text-white transition-all duration-200">
                          {service.icon}
                        </div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-green-600 transition-colors duration-200">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-slate-50 px-4 py-3 border-t border-slate-100">
                    <Link
                      href="/#services"
                      className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center gap-2"
                    >
                      <span>View All Services</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive("/about")
                    ? "text-green-600 bg-green-50"
                    : "text-slate-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                About Us
                {isActive("/about") && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full" />
                )}
              </Link>
              <Link
                href="/contact"
                className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive("/contact")
                    ? "text-green-600 bg-green-50"
                    : "text-slate-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                Contact
                {isActive("/contact") && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full" />
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-white shadow-sm border border-slate-200/50 text-slate-600 hover:text-green-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[600px] mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200/50 p-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                isActive("/")
                  ? "text-green-600 bg-green-50"
                  : "text-slate-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  isServicesActive
                    ? "text-green-600 bg-green-50"
                    : "text-slate-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-2 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-colors ${
                        pathname === service.href
                          ? "text-green-600 bg-green-50"
                          : "text-slate-500 hover:text-green-600 hover:bg-green-50"
                      }`}
                    >
                      <span className={pathname === service.href ? "text-green-600" : "text-green-500"}>{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                isActive("/about")
                  ? "text-green-600 bg-green-50"
                  : "text-slate-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                isActive("/contact")
                  ? "text-green-600 bg-green-50"
                  : "text-slate-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              Contact
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
}
