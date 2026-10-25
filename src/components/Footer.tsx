import Image from "next/image";
import { INSTITUTE_INFO, COURSES } from "@/lib/constants";
import { GraduationCap, Phone, MessageCircle, MapPin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-14 pb-12 border-b border-slate-800">
          {/* Col 1: Institute Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border border-slate-700 overflow-hidden shadow-md flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="NIELL Spoken English Classes Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">NIELL</span>
                <span className="block text-xs uppercase tracking-wider font-bold text-blue-400">
                  Spoken English Classes
                </span>
                <span className="block text-[11px] font-bold text-amber-300 italic tracking-wide mt-0.5">
                  &ldquo;{INSTITUTE_INFO.tagline}&rdquo;
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Founded and mentored by <strong className="text-slate-200">Ranjan Singh</strong>, NIELL is Indore&apos;s premier institute dedicated to practical English speaking, hesitation removal, and corporate interview readiness.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call: {INSTITUTE_INFO.formattedPhone}</span>
              </a>

              <a
                href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {INSTITUTE_INFO.formattedPhone}</span>
              </a>

              <a
                href={`mailto:${INSTITUTE_INFO.email}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                title="Send official inquiry email to NIELL"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Email: {INSTITUTE_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blue-400 transition-colors">
                  Why NIELL
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-blue-400 transition-colors">
                  Meet Ranjan Singh
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">
                  Campus Life & Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-blue-400 transition-colors">
                  Student Reviews
                </a>
              </li>
              <li>
                <a href="#book-demo" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                  Book Free Demo
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-blue-400 transition-colors">
                  Campus Location
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Modules List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Course & Modules
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#courses" className="font-bold text-amber-300 hover:text-amber-200 transition-colors">
                  {COURSES[0].title}
                </a>
              </li>
              <li className="text-slate-400">
                • General Spoken English & Grammar
              </li>
              <li className="text-slate-400">
                • Public Speaking & Stage Presence
              </li>
              <li className="text-slate-400">
                • Group Discussions & Extempore
              </li>
              <li className="text-slate-400">
                • Personality Development & Leadership
              </li>
              <li className="text-slate-400">
                • Interview Training & Resume Writing
              </li>
              <li className="pt-2 text-emerald-400 font-semibold text-xs">
                ⏳ Duration: 3M Training + 3M Membership
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Locations in Indore
            </h4>

            {/* Primary Address */}
            <div className="text-xs space-y-1">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Primary Classroom Campus:
              </div>
              <p className="text-slate-400 leading-relaxed">
                Behind Radisson Hotel, near H.P. Petrol Pump, Vijay Nagar, Indore, Madhya Pradesh – 452010
              </p>
            </div>

            {/* Registered Address */}
            <div className="text-xs space-y-1 pt-2 border-t border-slate-800">
              <div className="font-bold text-slate-300">
                Registered / Alternate Office:
              </div>
              <p className="text-slate-400 leading-relaxed">
                105, Bhagya Shree Colony, Ganga Devi Nagar, Indore, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>

        {/* SEO Keywords Cluster - Crucial for Google Local SEO ranking */}
        <div className="pt-8 pb-6 text-slate-500 text-[11px] leading-relaxed">
          <p className="font-semibold text-slate-400 mb-2">
            Popular Searches for English Coaching in Indore:
          </p>
          <p>
            NIELL Spoken English Classes Indore • Best Spoken English Classes in Indore • English Speaking Course in Vijay Nagar Indore • Ranjan Singh Spoken English • Spoken English Near Radisson Hotel Indore • English Fluency Classes Indore • Personality Development Coaching Indore • IELTS Preparation Vijay Nagar Indore • Job Interview Training Institute Indore • English Speaking for Hindi Medium Students Indore.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} NIELL Spoken English Classes. All rights reserved. Founded by Ranjan Singh.
          </p>
          <p className="flex items-center gap-1">
            Empowering students in Indore to speak fluent English.
          </p>
        </div>
      </div>
    </footer>
  );
}
