import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote, Award } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-14 sm:py-20 bg-slate-50 relative">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            Real Success Stories
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hear From Our Fluent Achievers in Indore
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            From college students to IT engineers and entrepreneurs, see how NIELL transformed their spoken English.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-100 absolute top-5 sm:top-6 right-5 sm:right-6 -z-0" />

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3 sm:mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed italic mb-4 sm:mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base">{item.name}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">{item.role}</p>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md">
                  {item.course}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
