"use client";

import { BookOpen, Cpu, Award } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ACADEMIC_PILLARS: Feature[] = [
  {
    icon: BookOpen,
    title: "Rigorous Academics",
    description:
      "Our comprehensive curriculum emphasizes critical thinking, research skills, and analytical problem-solving across all secondary grade levels.",
  },
  {
    icon: Cpu,
    title: "Innovation & STEM",
    description:
      "Equipped with modern science and computing facilities, we introduce students to practical software engineering, robotics, and quantitative analysis.",
  },
  {
    icon: Award,
    title: "Character & Leadership",
    description:
      "We build ethical leadership, public speaking, and community awareness through structured mentorship, extracurriculars, and collaborative projects.",
  },
];

export default function About() {
  return (
    <section className="relative py-24 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-800/80">
      {/* Background subtle radial glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/5 blur-[120px] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            About Vineyard College
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            A Tradition of Academic Rigor & Character Development
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed pt-2">
            Combining core ethical values with a modern technological curriculum to prepare students for top tier universities and global careers.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACADEMIC_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                {/* Icon Container with subtle scale animation on card hover */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-200">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                {/* Subtle bottom border highlight on hover */}
                <div className="absolute inset-x-8 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/50 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
