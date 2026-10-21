// src/components/Hero.tsx
import Image from "next/image"; // Fixed: Added missing Image import
import Link from "next/link";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  const typewriterPhrases = [
    "Academic Excellence.",
    "Holistic Leadership.",
    "Future Global Innovators.",
    "Moral Integrity & Faith.",
  ];

  return (
    <section className="relative overflow-hidden flex items-center justify-center py-16 md:py-24">
      {/* Decorative Background Lighting Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-800/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Hero Copy */}
        <div className="flex flex-col items-start space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-800/60 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Admissions Open for 2026/2027
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Nurturing Minds For <br />
            <Typewriter words={typewriterPhrases} />
          </h1>

          <p className="text-lg text-slate-300/90 leading-relaxed max-w-xl">
            At Vineyard College, we empower students through world-class academic rigour, character building, and modern digital skills to lead in a changing world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <Link
              href="/admissions"
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-center transition-all duration-300 shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/20 hover:-translate-y-0.5"
            >
              Enroll Today
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-center transition-all duration-300 hover:border-emerald-800/50"
            >
              Explore Campus
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 w-full max-w-md">
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</span>
              <span className="text-xs text-slate-400">Pass Rate</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400">25+</span>
              <span className="text-xs text-slate-400">Clubs & Sports</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400">15:1</span>
              <span className="text-xs text-slate-400">Student-Teacher Ratio</span>
            </div>
          </div>
        </div>

        {/* Right Column: Framed Image Showcase */}
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-3xl blur-xl opacity-20 transform scale-95" />

          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-emerald-900/50 bg-slate-900 shadow-2xl">
            <Image
              src="/hero-student.jpg" // Fixed: Direct reference to public folder file
              alt="Vineyard College Students"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

           
          </div>
        </div>
      </div>
    </section>
  );
}