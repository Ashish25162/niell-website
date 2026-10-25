"use client";

import { useState } from "react";
import { INSTITUTE_INFO, COURSES } from "@/lib/constants";
import { MessageCircle, Sparkles, CheckCircle2, Phone, Calendar, Clock, MapPin, Send } from "lucide-react";

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "", // User specified: keep email empty/ready for later update
    course: COURSES[0].title,
    batchTime: "Morning: 9:00 AM – 10:30 AM",
    mode: "Offline Classroom (Vijay Nagar Campus)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct structured WhatsApp message for instant delivery to 6266394121
    const textLines = [
      `🎓 *NEW DEMO CLASS INQUIRY - NIELL INDORE*`,
      `----------------------------------------`,
      `👤 *Student Name:* ${formData.name}`,
      `📱 *WhatsApp Number:* ${formData.phone}`,
      formData.email ? `📧 *Email:* ${formData.email}` : `📧 *Email:* (Pending/Not provided)`,
      `📚 *Course Interested:* ${formData.course}`,
      `⏰ *Preferred Timing:* ${formData.batchTime}`,
      `🏫 *Learning Mode:* ${formData.mode}`,
      formData.message ? `💬 *Note / Question:* ${formData.message}` : `💬 *Request:* I want to attend a Free Demo Session.`,
      `----------------------------------------`,
      `📍 *Preferred Campus:* Behind Radisson Hotel, Vijay Nagar, Indore`,
    ];

    const message = textLines.join("\n");
    const waUrl = `https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="book-demo" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/80 pointer-events-none" />

      <div className="relative max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          {/* Left: Persuasive text & benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              100% Free Demo Session
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Experience the Class Before You Decide
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Don&apos;t just take our word for it. Sit in a live interactive session with{" "}
              <strong className="text-white font-bold">Ranjan Singh</strong>, participate in daily speaking activities, and experience how our practical approach eliminates your hesitation.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center flex-shrink-0 text-amber-300 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Personal Fluency Diagnosis</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Get an honest evaluation of your current grammar, vocabulary, and mother-tongue accent.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center flex-shrink-0 text-amber-300 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Flexible Morning & Evening Slots</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Slots suitable for college students, working professionals, and business owners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center flex-shrink-0 text-amber-300 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Walk-ins Welcome at Vijay Nagar</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Behind Radisson Hotel, near H.P. Petrol Pump, Vijay Nagar, Indore.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone Assistance */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-4 text-xs sm:text-sm">
              <span className="text-slate-400">Prefer to book via direct call?</span>
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                {INSTITUTE_INFO.formattedPhone}
              </a>
            </div>
          </div>

          {/* Right: Interactive Booking Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Book Your Free Demo Session
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your details below. Your inquiry will be forwarded directly to WhatsApp (
                  <span className="font-semibold text-blue-700">{INSTITUTE_INFO.phone}</span>) for instant batch confirmation.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Inquiry Generated Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    We have redirected your inquiry to Ranjan Sir on WhatsApp at{" "}
                    <strong>{INSTITUTE_INFO.formattedPhone}</strong>.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Open WhatsApp Chat Again
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200"
                    >
                      Submit Another Booking
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm bg-slate-50"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-base sm:text-sm font-semibold text-slate-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter your 10-digit mobile number"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                          setFormData({ ...formData, phone: val });
                        }}
                        className="w-full pl-14 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Email (Optional / Ready for future updates) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@example.com (optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-base sm:text-sm bg-slate-50"
                    />
                  </div>

                  {/* Course Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Program & Focus Area
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm bg-slate-50"
                      >
                        <option value={COURSES[0].title}>
                          {COURSES[0].title}
                        </option>
                        <option value="Complete Course - Focus on General Spoken English & Grammar">
                          Focus: General Spoken English & Grammar
                        </option>
                        <option value="Complete Course - Focus on Public Speaking & Stage Confidence">
                          Focus: Public Speaking & Stage Confidence
                        </option>
                        <option value="Complete Course - Focus on Interview Training & Corporate GDs">
                          Focus: Interview Training & Corporate GDs
                        </option>
                        <option value="Complete Course - Focus on Personality & Leadership">
                          Focus: Personality Development & Leadership
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Preferred Batch
                      </label>
                      <select
                        value={formData.batchTime}
                        onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm bg-slate-50 font-medium"
                      >
                        <option value="Morning: 9:00 AM – 10:30 AM">
                          Morning: 9:00 AM – 10:30 AM
                        </option>
                        <option value="Evening: 5:00 PM – 6:30 PM">
                          Evening: 5:00 PM – 6:30 PM
                        </option>
                        <option value="Evening: 6:30 PM – 7:45 PM">
                          Evening: 6:30 PM – 7:45 PM
                        </option>
                        <option value="Evening: 7:30 PM – 9:00 PM">
                          Evening: 7:30 PM – 9:00 PM
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Campus Mode */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Training Mode
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm bg-slate-50"
                    >
                      <option value="Offline Classroom (Vijay Nagar, Indore)">
                        Offline Classroom (Vijay Nagar Campus)
                      </option>
                      <option value="Online Live Interactive Batch">
                        Online Live Interactive Batch
                      </option>
                    </select>
                  </div>

                  {/* Optional Note */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Any questions or specific needs?
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. I need to prepare for an interview next month..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm bg-slate-50"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Confirm Free Demo on WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    🔒 No spam. Instant direct response on WhatsApp from Ranjan Sir.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
