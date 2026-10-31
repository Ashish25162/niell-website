"use client";

import { INSTITUTE_INFO } from "@/lib/constants";
import { Phone, MessageCircle, Sparkles } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2.5 md:hidden">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${INSTITUTE_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
          aria-label="Call NIELL Institute"
        >
          <Phone className="w-5 h-5 text-blue-700" />
          <span className="text-[11px] font-bold mt-0.5">Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
            "Hello Ranjan Sir, I want to enquire about Spoken English classes at NIELL Indore."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm transition-colors"
          aria-label="WhatsApp NIELL"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
          <span className="text-[11px] font-bold mt-0.5">WhatsApp</span>
        </a>

        {/* Book Demo Button */}
        <a
          href="#book-demo"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white shadow-sm transition-colors"
          aria-label="Book Free Demo Class"
        >
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="text-[11px] font-bold mt-0.5">Free Demo</span>
        </a>
      </div>
    </div>
  );
}
