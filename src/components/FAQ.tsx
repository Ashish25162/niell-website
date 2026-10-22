"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  // Support independent expand/collapse per item
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });

  const toggle = (idx: number) => {
    setOpenMap((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  // Split FAQs into two balanced columns for widescreen desktop view
  const col1 = FAQS.filter((_, idx) => idx % 2 === 0);
  const col2 = FAQS.filter((_, idx) => idx % 2 !== 0);

  const renderFaqCard = (faq: (typeof FAQS)[0], originalIdx: number) => {
    const isOpen = Boolean(openMap[originalIdx]);
    return (
      <div
        key={originalIdx}
        className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden"
      >
        <button
          onClick={() => toggle(originalIdx)}
          className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-700 transition-colors"
          aria-expanded={isOpen}
        >
          <span className="text-sm sm:text-base">{faq.question}</span>
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-blue-700" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
            {faq.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base text-slate-600">
            Everything you need to know about joining NIELL Spoken English Classes in Indore.
          </p>
        </div>

        {/* 2-Column Responsive Grid on Desktop / 1-Column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          <div className="space-y-4">
            {col1.map((faq, i) => renderFaqCard(faq, i * 2))}
          </div>
          <div className="space-y-4">
            {col2.map((faq, i) => renderFaqCard(faq, i * 2 + 1))}
          </div>
        </div>
      </div>
    </section>
  );
}
