import Image from "next/image";
import { INSTITUTE_INFO } from "@/lib/constants";
import { MessageCircle, Phone, Sparkles, CheckCircle2, Star, Users, Award, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-14 md:pt-16 md:pb-28">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af0a_1px,transparent_1px),linear-gradient(to_bottom,#1e40af0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-900 text-xs sm:text-sm font-semibold shadow-sm">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-700">|</span>
                <span>Indore&apos;s Leading Spoken English Institute</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-black shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>&ldquo;Join and Feel the Changes&rdquo;</span>
              </div>
            </div>

            {/* Main H1 - High SEO weight */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15]">
              Speak Fluent English with Complete Confidence{" "}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 bg-clip-text text-transparent">
                in 60 Days
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Transform your hesitation into fluent communication. Join{" "}
              <strong className="text-slate-900 font-bold">NIELL Spoken English Classes</strong> in{" "}
              <span className="text-blue-800 font-semibold underline decoration-blue-300 decoration-2">
                Vijay Nagar, Indore
              </span>
              , guided personally by master trainer{" "}
              <strong className="text-slate-900 font-bold">Ranjan Singh</strong>.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1 text-xs xs:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero-Hesitation Speaking Environment</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Ideal for Both English & Hindi Medium Learners</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Daily Group Discussions & Stage Practice</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Interview & Personality Grooming</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 justify-center lg:justify-start">
              <a
                href="#book-demo"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-7 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Ranjan Sir, I want to inquire about joining NIELL Spoken English classes in Indore."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-600 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>Call {INSTITUTE_INFO.phone}</span>
              </a>
            </div>

            {/* Address Hint */}
            <p className="text-xs text-slate-500 pt-1">
              📍 Campus: Behind Radisson Hotel, near H.P. Petrol Pump, Vijay Nagar, Indore
            </p>
          </div>

          {/* Right Column: Hero Highlight Card & Founder Spotlight Box */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing Background Blob */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-20 -z-10" />

              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-4 xs:p-6 sm:p-8 space-y-4 sm:space-y-5">
                {/* Real Classroom Photo Card in Hero */}
                <div className="relative h-40 xs:h-44 sm:h-48 w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200">
                  <Image
                    src="/images/classroom-gd.jpg"
                    alt="Active Group Discussion at NIELL Spoken English Indore"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Group Discussion • Vijay Nagar Campus
                    </span>
                  </div>
                </div>

                {/* Founder Badge Header */}
                <div className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-slate-100">
                  <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-blue-900 to-indigo-800 flex items-center justify-center text-white shadow-inner flex-shrink-0 p-2 sm:p-3">
                    <Award className="w-8 h-8 sm:w-9 sm:h-9 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                      Founder & Chief Mentor
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                      Ranjan Singh
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      12+ Years Transforming English Learners in Indore
                    </p>
                  </div>
                </div>

                {/* Institute Guarantee Card */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-3.5 sm:p-4 border border-blue-100/60 space-y-2.5 sm:space-y-3">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
                    The NIELL Classroom Experience
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 sm:space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-700 font-bold">✓</span>
                      <span><strong>Zero Grammar Boredom:</strong> Learn through conversational drills, not dry textbooks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-700 font-bold">✓</span>
                      <span><strong>Stage Fear Elimination:</strong> Daily podium speaking to build rock-solid confidence.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-700 font-bold">✓</span>
                      <span><strong>Corporate Readiness:</strong> Resume building, interview Q&A, and group discussions.</span>
                    </li>
                  </ul>
                </div>

                {/* Live Stats Pill */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-base sm:text-lg font-black text-blue-800">10k+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium">Students</div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-base sm:text-lg font-black text-emerald-700">4.9 ★</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium">Rating</div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-base sm:text-lg font-black text-indigo-700">15 Max</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium">Per Batch</div>
                  </div>
                </div>

                {/* Quick Call Out Button */}
                <a
                  href="#book-demo"
                  className="w-full block text-center py-3 sm:py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-700 hover:bg-blue-800 shadow-md transition-colors"
                >
                  Claim 1 Free Demo Session Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
