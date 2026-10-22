import { COURSES, INSTITUTE_INFO } from "@/lib/constants";
import { Clock, BookOpen, CheckCircle, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-slate-50 relative">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Curriculum & Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Spoken English Courses in Indore
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Carefully structured modules crafted by{" "}
            <span className="font-semibold text-slate-900">Ranjan Singh</span> to take you from
            hesitant beginner to articulate speaker.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between relative group hover:border-blue-400"
            >
              <div>
                {/* Course Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${course.badgeColor}`}
                  >
                    {course.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Duration: {course.duration}</span>
                  </div>
                </div>

                {/* Course Title & Level */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs font-semibold text-blue-700 mt-0.5 mb-3">
                  Target Level: {course.level}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    What You Will Master:
                  </p>
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Batch Timings */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-6 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block mb-0.5">🗓️ Available Batches:</span>
                  <span>{course.batchTimings}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hi Ranjan Sir, I want details regarding the "${course.title}" batch at NIELL Indore.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  <span>Ask on WhatsApp</span>
                </a>

                <a
                  href="#book-demo"
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 shadow transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Book Demo Class</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Corporate & School Batches Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for Corporate Training or Customized 1-on-1 Mentorship?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              We offer specialized communication workshops for corporate teams, colleges, and customized 1-on-1 executive coaching in Indore.
            </p>
          </div>
          <a
            href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hi Ranjan Sir, I am inquiring about customized 1-on-1 or corporate English training."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-md"
          >
            <span>Inquire for Custom Batches</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
