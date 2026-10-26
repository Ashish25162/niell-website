import { FLAGSHIP_COURSE, INSTITUTE_INFO } from "@/lib/constants";
import { Clock, BookOpen, CheckCircle2, MessageCircle, Sparkles, ArrowRight, ShieldCheck, Award, Phone } from "lucide-react";

export default function Courses() {
  const course = FLAGSHIP_COURSE;

  return (
    <section id="courses" className="py-14 sm:py-20 bg-slate-50 relative">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            All-In-One Flagship Curriculum
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Spoken English Course in Indore
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            At NIELL, we offer <strong className="text-slate-900">one complete, all-inclusive flagship program</strong> personally mentored by{" "}
            <span className="font-semibold text-slate-900">Ranjan Singh</span>. No confusing tiers—everything you need for lifelong English fluency and stage confidence is included.
          </p>
        </div>

        {/* Master Flagship Showcase Card */}
        <div className="mt-10 sm:mt-14 bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          {/* Card Top Header Banner */}
          <div className="bg-gradient-to-r from-navy-900 via-blue-950 to-indigo-950 text-white p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400 text-slate-950 shadow-sm">
                    <Award className="w-3.5 h-3.5" />
                    Indore&apos;s #1 All-Inclusive Program
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-200 border border-white/15">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Course Duration Header Pill */}
              <div className="flex-shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-left lg:text-right">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider justify-start lg:justify-end mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Total Duration</span>
                </div>
                <div className="text-lg xs:text-xl sm:text-2xl font-black text-white">
                  3 Months + 3 Months
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                  Classroom Training + Practice Membership
                </p>
              </div>
            </div>
          </div>

          {/* Card Body: Programs List & Duration Details */}
          <div className="p-4 xs:p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
              
              {/* Left Column: 📚 Our Programs (13 Modules) */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                    <span>📚</span>
                    <span>Our Programs</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Every student masters all 13 modules through active daily speaking, live GDs, and stage practice:
                  </p>
                </div>

                {/* 13 Program Modules Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                  {course.programs.map((prog, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/60 hover:border-blue-300 transition-all group"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                        {prog}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Batch Timings Card */}
                <div className="bg-gradient-to-br from-blue-50/90 to-indigo-50/60 rounded-3xl p-4 sm:p-6 border-2 border-blue-200 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🗓️</span>
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-blue-900 block">
                          Official Batch Timings
                        </span>
                        <p className="text-[11px] sm:text-xs text-slate-600">
                          Choose the batch that fits your college, job, or business schedule
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center text-xs font-bold text-blue-800 bg-white px-3 py-1 rounded-xl border border-blue-200 shadow-sm whitespace-nowrap self-start sm:self-auto">
                      Small Batches (Max 15)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {/* Morning Slot */}
                    <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-blue-100 shadow-xs space-y-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                            Morning Batch
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">1.5 hrs/day</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-900 bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100">
                          <span>🕘</span>
                          <span>9:00 AM – 10:30 AM</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 pt-1">
                        Ideal for college students & morning learners.
                      </p>
                    </div>

                    {/* Evening Slots */}
                    <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-blue-100 shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200">
                          Evening Batches
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">3 Flexible Slots</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-50 p-2 sm:p-2.5 rounded-xl border border-slate-100">
                          <span>🕔</span>
                          <span>5:00 PM – 6:30 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-50 p-2 sm:p-2.5 rounded-xl border border-slate-100">
                          <span>🕡</span>
                          <span>6:30 PM – 7:45 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-50 p-2 sm:p-2.5 rounded-xl border border-slate-100">
                          <span>🕢</span>
                          <span>7:30 PM – 9:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: ⏳ Course Duration & Booking CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-6">
                
                {/* ⏳ Course Duration Structure Box */}
                <div className="bg-gradient-to-br from-amber-50 via-orange-50/60 to-yellow-50/40 rounded-3xl p-4 xs:p-6 sm:p-7 border-2 border-amber-300 shadow-md space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">⏳</span>
                    <div>
                      <h4 className="text-base sm:text-lg font-extrabold text-amber-950">
                        Course Duration Structure
                      </h4>
                      <p className="text-[11px] sm:text-xs text-amber-900/80">
                        A unique 2-stage methodology ensuring lasting fluency
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 pt-1">
                    {/* Stage 1 */}
                    <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-amber-200 shadow-sm space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-500 text-white font-black text-[11px] sm:text-xs flex items-center justify-center flex-shrink-0">
                          1
                        </span>
                        <h5 className="font-extrabold text-xs sm:text-sm text-slate-900">
                          3 Months of Intensive Classroom Training
                        </h5>
                      </div>
                      <p className="text-xs text-slate-600 pl-7 sm:pl-8 leading-relaxed">
                        Daily spoken English drills, stage extempore, group discussions, grammar foundation, and 1-on-1 correction by Ranjan Sir.
                      </p>
                    </div>

                    {/* Stage 2 */}
                    <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-amber-200 shadow-sm space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 text-white font-black text-[11px] sm:text-xs flex items-center justify-center flex-shrink-0">
                          2
                        </span>
                        <h5 className="font-extrabold text-xs sm:text-sm text-slate-900">
                          Additional 3 Months Membership
                        </h5>
                      </div>
                      <p className="text-xs text-slate-600 pl-7 sm:pl-8 leading-relaxed">
                        Continued practice and revision at your convenience.* Attend practice batches anytime you need to refresh your skills.
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-amber-900/70 italic pt-1 border-t border-amber-200">
                    *Additional 3 Months Membership allows students flexible revision and conversational maintenance so you never lose your fluency edge.
                  </p>
                </div>

                {/* Direct Enrollment & Demo Actions */}
                <div className="bg-slate-900 rounded-3xl p-4 xs:p-6 sm:p-7 text-white shadow-xl space-y-4">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-amber-400 mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Zero-Risk Attendance
                    </span>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">
                      Attend a Free Demo Class First
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Experience Ranjan Sir&apos;s practical teaching methodology live in our Vijay Nagar classroom before enrolling.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <a
                      href="#book-demo"
                      className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg transition-all"
                    >
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>Book Free Demo Class</span>
                    </a>

                    <a
                      href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                        "Hi Ranjan Sir, I want details regarding the Complete Spoken English Course (3M Training + 3M Membership) at NIELL Indore."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Corporate & Customized Training Banner */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-5 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold">
              Looking for Corporate Training or Customized 1-on-1 Mentorship?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We offer specialized communication workshops for corporate teams, college placement batches, and customized 1-on-1 executive coaching in Indore.
            </p>
          </div>
          <a
            href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hi Ranjan Sir, I am inquiring about customized 1-on-1 or corporate English training."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-md"
          >
            <span>Inquire for Custom Batches</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
