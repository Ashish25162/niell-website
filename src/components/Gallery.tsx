"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Sparkles, MapPin, Users, Award, Calendar } from "lucide-react";

type GalleryCategory = "all" | "classroom" | "campus" | "events";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "classroom" | "campus" | "events";
  src: string;
  tag: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "building-exterior",
    title: "Official Campus Building Signboard",
    subtitle: "Behind Radisson Hotel, Vijay Nagar, Indore",
    category: "campus",
    src: "/images/building-exterior.jpg",
    tag: "Campus Landmark",
  },
  {
    id: "classroom-gd",
    title: "Daily Group Discussion (GD) Session",
    subtitle: "Interactive U-shape seating for 100% speaking participation",
    category: "classroom",
    src: "/images/classroom-gd.jpg",
    tag: "Classroom Practice",
  },
  {
    id: "classroom-rules",
    title: "Classroom Rules & Student Awards",
    subtitle: "A disciplined, supportive English-only environment",
    category: "classroom",
    src: "/images/classroom-celebration.jpg",
    tag: "Culture & Values",
  },
  {
    id: "student-batch-classroom",
    title: "Active Learning Batch with Ranjan Sir",
    subtitle: "Foundation and fluency training at the Vijay Nagar center",
    category: "classroom",
    src: "/images/student-batch-classroom.jpg",
    tag: "Live Batch",
  },
  {
    id: "ranjan-sir-event",
    title: "Mentorship & Public Speaking Excellence",
    subtitle: "Ranjan Singh guiding students for inter-college presentations",
    category: "events",
    src: "/images/ranjan-sir-portrait.jpg",
    tag: "Mentorship",
  },
  {
    id: "terrace-banner",
    title: "Batch Completion & Milestone Celebration",
    subtitle: "Terrace celebrations at Vijay Nagar center",
    category: "campus",
    src: "/images/terrace-celebration-banner.jpg",
    tag: "Student Community",
  },
  {
    id: "ima-hall-event",
    title: "Indore Management Association (IMA) Seminar",
    subtitle: "Corporate exposure and management communication training",
    category: "events",
    src: "/images/ima-hall-event.jpg",
    tag: "Corporate Exposure",
  },
  {
    id: "terrace-certificates",
    title: "Certificate & Achievement Ceremony",
    subtitle: "Evening batch felicitations with Ranjan Sir",
    category: "campus",
    src: "/images/terrace-night-batch.jpg",
    tag: "Certification",
  },
  {
    id: "girls-batch",
    title: "Empowering Girls in Spoken English",
    subtitle: "Special batches building self-confidence for college & career",
    category: "campus",
    src: "/images/girl-batch-terrace.jpg",
    tag: "Confidence",
  },
  {
    id: "cultural-event",
    title: "Vibrant Student Community & Festivities",
    subtitle: "Celebrating milestones together like a family",
    category: "events",
    src: "/images/cultural-event.jpg",
    tag: "Celebration",
  },
  {
    id: "student-outing",
    title: "Outdoor Personality Development Trip",
    subtitle: "Real-world conversational practice outside classroom walls",
    category: "events",
    src: "/images/student-outing.jpg",
    tag: "Outdoor Activity",
  },
  {
    id: "student-appreciation",
    title: "Teacher Appreciation & Farewell Moments",
    subtitle: "Lifelong bond between students and mentor Ranjan Singh",
    category: "classroom",
    src: "/images/student-appreciation.jpg",
    tag: "Student Love",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const categories: { label: string; value: GalleryCategory }[] = [
    { label: "All Photos", value: "all" },
    { label: "Classrooms & GD", value: "classroom" },
    { label: "Campus & Building", value: "campus" },
    { label: "Events & Student Life", value: "events" },
  ];

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-blue-700" />
            Campus & Classroom Tour
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Life at NIELL Spoken English Classes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            Real photos from our Vijay Nagar campus, daily speaking activities, celebrations, and outdoor workshops guided by Ranjan Singh.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.value
                  ? "bg-blue-700 text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-sm shadow">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-700">
                  <span>Click to view photo</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Visit Callout */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-5 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              Want to visit our classroom in person?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Visit during batch hours: Morning (9:00 AM – 10:30 AM) or Evening (5:00 PM – 9:00 PM) Behind Radisson Hotel, Vijay Nagar, Indore.
            </p>
          </div>
          <a
            href="#book-demo"
            className="flex-shrink-0 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md transition-colors"
          >
            Attend a Free Live Session
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <div className="relative h-[65vh] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 sm:p-6 bg-slate-900 flex items-center justify-between text-white">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  {selectedImage.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {selectedImage.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
