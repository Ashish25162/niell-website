import { Users, Award, Shield, MessageSquare, Target, MapPin, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: MessageSquare,
      title: "80% Practical Speaking, 20% Theory",
      description:
        "You cannot learn swimming by reading a book, and you cannot speak English by just memorizing grammar rules. At NIELL, you speak in English from Day 1.",
    },
    {
      icon: Users,
      title: "Small Batches (Max 15 Students)",
      description:
        "Unlike crowded institutes where you sit silently, our capped batches guarantee that Ranjan Sir listens to and corrects every single student in every class.",
    },
    {
      icon: Target,
      title: "Effective for Both English & Hindi Mediums",
      description:
        "Whether you studied in English medium and need fluency polish, stage confidence & interview skills, or come from Hindi medium and want to stop translating in your head—our method adapts to your level.",
    },
    {
      icon: Award,
      title: "Daily GDs & Stage Practice",
      description:
        "Step up to the podium every day. Practice impromptu speeches (extempore), debates, and discussions that permanently remove stage fear.",
    },
    {
      icon: Shield,
      title: "Interview & Career Preparation",
      description:
        "Master the corporate interview questions, body language, handshake etiquette, self-introduction, and group discussion tactics to land your dream job.",
    },
    {
      icon: MapPin,
      title: "Prime Vijay Nagar Location",
      description:
        "Conveniently located behind the Radisson Hotel, next to the H.P. Petrol Pump—easily connected by iBus, city buses, and major roads across Indore.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5" />
            The NIELL Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why NIELL is Indore&apos;s #1 Choice for English Fluency
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A scientifically designed methodology focused on active speech rather than rote memorization.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:bg-indigo-700 transition-all">
                  <Icon className="w-7 h-7 text-amber-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
