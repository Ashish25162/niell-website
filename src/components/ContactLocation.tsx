import { INSTITUTE_INFO } from "@/lib/constants";
import { MapPin, Phone, MessageCircle, Clock, Building, Navigation, ShieldCheck } from "lucide-react";

export default function ContactLocation() {
  return (
    <section id="location" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Find Our Institute
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit NIELL Spoken English Classes in Indore
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Conveniently situated in the heart of Vijay Nagar, with easy access via iBus, city transport, and major roads.
          </p>
        </div>

        {/* Addresses & Map Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Campus Details & Direct Connect */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Primary Campus Card */}
            <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/50 rounded-3xl p-6 sm:p-7 border-2 border-blue-200/80 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-2 rounded-xl bg-blue-700 text-white">
                  <MapPin className="w-5 h-5 text-amber-300" />
                </span>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-blue-800">
                    Primary Classroom & Counseling Center
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Vijay Nagar Campus
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-800 font-medium leading-relaxed pl-1 mb-4">
                {INSTITUTE_INFO.primaryAddress.full}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-blue-100">
                <span className="font-semibold text-slate-900">Landmarks:</span>
                <span>Directly behind Radisson Blu Hotel</span>
                <span>•</span>
                <span>Next to H.P. Petrol Pump</span>
                <span>•</span>
                <span>Vijay Nagar Square</span>
              </div>
            </div>

            {/* Registered / Alternate Office Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-2 rounded-xl bg-slate-800 text-white">
                  <Building className="w-5 h-5 text-amber-300" />
                </span>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-600">
                    Registered / Alternate Address
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Bhagya Shree Colony Office
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-700 font-medium leading-relaxed pl-1">
                {INSTITUTE_INFO.registeredAddress.full}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">WhatsApp Direct</div>
                    <div className="text-sm font-bold text-slate-900">
                      {INSTITUTE_INFO.formattedPhone}
                    </div>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Ranjan Sir, I need location directions to NIELL Indore."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200"
                >
                  Chat Now
                </a>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Phone Support</div>
                    <div className="text-sm font-bold text-slate-900">
                      {INSTITUTE_INFO.formattedPhone}
                    </div>
                  </div>
                </div>
                <a
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200"
                >
                  Call Now
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Open Mon–Sat: 7:00 AM – 8:30 PM (Sun: Special Sessions)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Location Embed & Route Guidance */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-md flex-1 min-h-[380px] relative flex flex-col">
              {/* Map embed for Vijay Nagar / Radisson Hotel Indore */}
              <iframe
                title="NIELL Spoken English Classes Location - Behind Radisson Hotel, Vijay Nagar, Indore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.524856037703!2d75.894375!3d22.745892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fda08f090bb7%3A0xc480b0db37b58957!2sRadisson%20Blu%20Hotel%20Indore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map footer directions pill */}
              <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Navigation className="w-4 h-4 text-blue-700" />
                  <span>Located Behind Radisson Hotel, adjacent to H.P. Petrol Pump</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "Behind Radisson Hotel, near H.P. Petrol Pump, Vijay Nagar, Indore"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
