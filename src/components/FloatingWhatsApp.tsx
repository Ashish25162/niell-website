"use client";

import { useState } from "react";
import { INSTITUTE_INFO } from "@/lib/constants";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-auto">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-900 shadow-2xl border border-slate-200/90 rounded-2xl py-2 px-3.5 text-xs font-semibold animate-bounce">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          <span>Inquire with Ranjan Sir on WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Close WhatsApp prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
          "Hi Ranjan Sir, I visited the NIELL website and want to know more about Spoken English classes."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Ranjan Singh"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsating ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-60 animate-ping group-hover:opacity-0 pointer-events-none" />

        <MessageCircle className="w-8 h-8 fill-white text-emerald-500" />
      </a>
    </div>
  );
}
