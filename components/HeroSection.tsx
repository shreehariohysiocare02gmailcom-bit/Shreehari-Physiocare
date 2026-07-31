"use client";

import React from "react";
import { CLINIC_INFO } from "@/lib/data";
import {
  Calendar,
  MessageCircle,
  PhoneCall,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Activity,
  HeartHandshake,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenAIAdvisor: () => void;
}

export default function HeroSection({
  onOpenBooking,
  onOpenAIAdvisor,
}: HeroSectionProps) {
  const trustHighlights = [
    {
      title: "Advanced Electrotherapy",
      desc: "FDA-grade IFT, TENS, Ultrasound & Muscle Stimulators",
      icon: Zap,
    },
    {
      title: "Personalized Care",
      desc: "1-on-1 supervision by experienced physiotherapists",
      icon: HeartHandshake,
    },
    {
      title: "Non-Invasive Relief",
      desc: "Treating disc herniation, sciatica & arthritis without surgery",
      icon: ShieldCheck,
    },
    {
      title: "Convenient Bhiwadi Location",
      desc: "Nagina Garden Front Road, Near Shree Ram Colony, Saidpur",
      icon: MapPin,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-slate-50 to-white pt-8 sm:pt-14 pb-16 border-b border-slate-100">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Certification Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-900 border border-emerald-200/60 text-xs sm:text-sm font-semibold shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Premier Physiotherapy & Rehab Center • Bhiwadi, Rajasthan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Restoring Movement.{" "}
              <span className="text-emerald-700">Relieving Pain.</span>{" "}
              Renewing Life.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Welcome to <strong className="text-slate-800">Shree Hari Physio Care</strong>. We offer evidence-based, personalized physical therapy for spine disorders, sports injuries, knee arthritis, post-surgical recovery, and neurological paralysis—right in Saidpur, Bhiwadi.
            </p>

            {/* Quick check benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                "Instant Sciatica & Cervical Relief",
                "Advanced IFT, TENS & Ultrasound",
                "Manual Joint Mobilization & Taping",
                "Mon–Sat: 9:00 AM – 8:00 PM",
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all hover:border-emerald-600"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp (+91 9306584551)</span>
              </a>

              <a
                href="#pain-checker"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-emerald-800 hover:text-emerald-900 bg-emerald-50/80 hover:bg-emerald-100/80 transition-colors"
              >
                <span>Where does it hurt? →</span>
              </a>
            </div>

            {/* Clinic Operating Hours & Address Quick Badge */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 border-t border-slate-200">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>
                  <strong className="text-slate-700">Open Mon–Sat:</strong> 9:00 AM – 8:00 PM
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <a
                  href={`tel:+91${CLINIC_INFO.phone}`}
                  className="hover:underline font-semibold text-slate-700"
                >
                  {CLINIC_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Visual Medical Card & Interactive Clinic Overview */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xl shadow-slate-200/50 space-y-6">
              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mb-2">
                    Bhiwadi Medical Clinic
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Shree Hari Physio Care
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Nagina Garden Front Road, Near Shree Ram Colony, Saidpur
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 font-extrabold text-lg shrink-0">
                  SH
                </div>
              </div>

              {/* Clinic Specialties Pills */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                  Specialized Treatments Available
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cervical Spondylosis",
                    "Lumbar Slip Disc",
                    "Sciatica Relief",
                    "Knee Osteoarthritis",
                    "Frozen Shoulder",
                    "Sports Sprains",
                    "Post-Surgery Rehab",
                    "Neurological Care",
                  ].map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation Card Callout */}
              <div className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-sm">
                      Immediate Consultation Available
                    </span>
                  </div>
                  <span className="text-[11px] bg-emerald-500/30 text-emerald-200 px-2 py-0.5 rounded-full">
                    No Wait Time
                  </span>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Experiencing shooting leg pain, stiff neck, or joint swelling? Walk in or book online for a thorough physical evaluation.
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Select Time Slot →
                  </button>
                  <span className="text-xs font-semibold text-emerald-200">
                    Call: 9306584551
                  </span>
                </div>
              </div>

              {/* Clinic Guarantee Footer */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>✓ Hygienic & Sanitized Clinic</span>
                <span>✓ Personalized Rehab Plans</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Highlights Cards Below Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14">
          {trustHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/70 p-5 shadow-xs hover:shadow-md transition-all flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
