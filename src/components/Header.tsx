"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { INSTITUTE_INFO } from "@/lib/constants";
import { Phone, MessageCircle, Menu, X, GraduationCap, MapPin, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Our Course", href: "#courses" },
    { label: "Why NIELL", href: "#why-us" },
    { label: "Meet Founder", href: "#founder" },
    { label: "Campus Life", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top Notification / Urgency Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 text-white text-xs md:text-sm py-2 px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>New Batches Starting Every Monday! Limited to 15 Students/Batch.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <a
              href={INSTITUTE_INFO.primaryAddress.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 hover:text-white transition-colors"
              title="Open Niell Spoken English Classes in Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Behind Radisson Hotel, Vijay Nagar, Indore
            </a>
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="inline-flex items-center gap-1 font-semibold text-amber-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {INSTITUTE_INFO.formattedPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-white flex items-center justify-center group-hover:scale-105 transition-transform p-0.5">
              <Image
                src="/logo.png"
                alt="NIELL Spoken English Classes Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-lg"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  NIELL
                </span>
                <span className="text-xs uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  Indore
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                  Spoken English Classes
                </p>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="hidden sm:inline text-[11px] font-bold text-amber-600 italic">
                  &ldquo;{INSTITUTE_INFO.tagline}&rdquo;
                </span>
              </div>
              <p className="text-[10px] text-blue-700 font-medium">
                Mentored by Ranjan Singh
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hi Ranjan Sir, I want to enquire about Spoken English classes at NIELL Indore."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-sm"
              title="Chat with Ranjan Sir on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#book-demo"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 shadow-md hover:shadow-lg transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Free Demo</span>
            </a>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#book-demo"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-700"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Demo</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#book-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg text-sm font-bold text-white bg-blue-700 shadow"
            >
              Book Free Demo Class
            </a>
            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hi Ranjan Sir, I want to enquire about Spoken English classes at NIELL Indore."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              Chat on WhatsApp ({INSTITUTE_INFO.phone})
            </a>
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100"
            >
              <Phone className="w-4 h-4" />
              Call Directly: {INSTITUTE_INFO.formattedPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
