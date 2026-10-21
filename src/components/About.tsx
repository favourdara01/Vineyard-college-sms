// src/components/About.tsx
export default function About() {
  const features = [
    {
      icon: "📚",
      title: "Rigorous Academics",
      description: "Our comprehensive curriculum challenges critical thinking, creativity, and analytical problem-solving across all grade levels.",
    },
    {
      icon: "💡",
      title: "Innovation & STEM",
      description: "Equipped with cutting-edge labs, robotics, and coding programs, we prepare students for the tech-driven global landscape.",
    },
    {
      icon: "🌟",
      title: "Character & Leadership",
      description: "We foster strong moral foundations, empathy, teamwork, and leadership skills through active community and extracurricular engagement.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/50 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            A Tradition of Excellence & Innovation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We combine traditional values with a forward-thinking curriculum, ensuring every student is equipped for success in higher education and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900 border border-emerald-900/40 hover:border-emerald-600/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400 text-2xl font-bold mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}