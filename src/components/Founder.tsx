import Image from "next/image";
import { INSTITUTE_INFO } from "@/lib/constants";
import { MessageCircle, Phone, Award, CheckCircle2, GraduationCap, Quote } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="bg-gradient-to-br from-navy-900 via-blue-950 to-indigo-950 rounded-3xl text-white p-5 sm:p-8 md:p-12 lg:p-16 xl:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left: Founder Avatar / Graphic Badge */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group flex flex-col items-center">
                {/* Responsive Portrait Container with explicit dimensions */}
                <div className="w-[270px] h-[360px] xs:w-[290px] xs:h-[386px] sm:w-[310px] sm:h-[413px] xl:w-[340px] xl:h-[453px] rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-slate-900 rounded-[22px] relative overflow-hidden flex flex-col justify-end">
                    <Image
                      src="/images/ranjan-sir-founder.jpg"
                      alt="Ranjan Singh - Founder & Master English Trainer at NIELL Indore"
                      fill
                      sizes="(max-width: 640px) 290px, (max-width: 1280px) 320px, 360px"
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                    <div className="relative z-10 p-3 sm:p-3.5 text-center">
                      <div className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-black/75 px-2.5 py-0.5 rounded-full backdrop-blur-sm mb-1">
                        Founder & Chief Mentor
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">Ranjan Singh</h3>
                      <p className="text-[11px] text-slate-300">NIELL Spoken English, Indore</p>
                    </div>
                  </div>
                </div>

                {/* Rating badge - naturally positioned below photo */}
                <div className="mt-3.5 inline-flex items-center gap-1.5 bg-white text-slate-900 font-bold text-xs py-1.5 px-4 rounded-full shadow-lg border border-slate-200 whitespace-nowrap">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>12+ Years Teaching in Indore</span>
                </div>
              </div>

              {/* Direct Connect Buttons */}
              <div className="mt-5 flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full max-w-xs">
                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Ranjan Sir, I want to talk directly to you regarding English classes at NIELL Indore."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Sir</span>
                </a>
                <a
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Sir</span>
                </a>
              </div>
            </div>

            {/* Right: Message & Mentorship Philosophy */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                <Quote className="w-3.5 h-3.5 text-amber-400" />
                <span>Message from the Founder</span>
              </div>

              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                &ldquo;English is not an intelligence test. It is simply a practical skill anyone can master with the right environment.&rdquo;
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When students come to me at NIELL, the biggest problem isn&apos;t their grammar—it&apos;s their
                <strong className="text-white"> fear of being judged</strong>. They know the words in their head, but their tongue freezes when they speak.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At our Vijay Nagar campus, we created a culture where making mistakes is welcomed as part of learning. Under my direct supervision, we break that psychological hesitation with daily stage practice, interactive discussions, and real-world conversations.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Personalized feedback for every learner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Tailored for English & Hindi medium students</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Stage fear elimination drills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Placement & corporate interview prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
