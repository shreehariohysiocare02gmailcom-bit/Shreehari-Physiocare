"use client";

import React, { useState } from "react";
import { CLINIC_INFO } from "@/lib/data";
import {
  PhoneCall,
  MapPin,
  Clock,
  Menu,
  X,
  MessageCircle,
  CalendarCheck,
  Sparkles,
  Activity,
} from "lucide-react";

interface NavbarProps {
  onOpenBooking: (prefillService?: string) => void;
  onOpenAIAdvisor: () => void;
}

export default function Navbar({ onOpenBooking, onOpenAIAdvisor }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Treatments", href: "#treatments" },
    { name: "Pain Checker", href: "#pain-checker" },
    { name: "About Clinic", href: "#about" },
    { name: "Patient Stories", href: "#testimonials" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact & Map", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Top Bar - Highlighting address, phone, and hours */}
      <div className="bg-emerald-900 text-emerald-50 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate max-w-[280px] sm:max-w-none">
                Nagina Garden Front Road, Saidpur, Bhiwadi
              </span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-emerald-200">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            <a
              href={`tel:+91${CLINIC_INFO.phone}`}
              className="flex items-center gap-1.5 font-medium hover:text-emerald-200 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>+91 {CLINIC_INFO.phone}</span>
            </a>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center shadow-md shadow-emerald-600/20 text-white font-bold text-xl group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
                Shree Hari
                <span className="text-emerald-600 font-extrabold">Physio Care</span>
              </div>
              <div className="text-[11px] font-medium tracking-wide text-emerald-700 uppercase">
                Physiotherapy & Rehab Center • Bhiwadi
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenAIAdvisor}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all cursor-pointer shadow-xs"
              title="Ask AI Physio & Ergonomics Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>AI Physio Advisor</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIAdvisor();
              }}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>AI Physio Advisor</span>
            </button>
            <a
              href={`tel:+91${CLINIC_INFO.phone}`}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-800 bg-slate-100"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Clinic</span>
            </a>
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-emerald-700 py-1.5 px-2 rounded-md hover:bg-emerald-50/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
