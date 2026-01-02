import { Star, Users, Lightbulb, Activity } from "lucide-react";

export default function About() {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "50+",
      label: "Happy Clients",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "5+",
      label: "Years Experience",
      color: "from-orange-500 to-red-500",
    },
    {
      number: "24/7",
      label: "Support Available",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const iconClass = "relative top-[0.5px]";

  const values = [
    {
      title: "Excellence",
      desc: "Delivering top-tier quality in every line of code we write.",
      icon: <Star size={24} strokeWidth={2} className={iconClass} />,
      gradient: "from-amber-400 to-orange-500",
    },
    {
      title: "Collaboration",
      desc: "Building strong partnerships through open communication.",
      icon: <Users size={24} strokeWidth={2} className={iconClass} />,
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Innovation",
      desc: "Using the latest tech to build smarter solutions.",
      icon: <Lightbulb size={24} strokeWidth={2} className={iconClass} />,
      gradient: "from-purple-400 to-indigo-500",
    },
    {
      title: "Performance",
      desc: "Fast, efficient, and optimized for the best results.",
      icon: <Activity size={24} strokeWidth={2} className={iconClass} />,
      gradient: "from-pink-400 to-rose-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-32 left-16 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Selected Projects & Experience
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Examples of websites and digital solutions delivered to real
            clients, showcasing quality, efficiency, and modern design.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 bg-gray-800/60 border border-gray-700 hover:border-blue-500/50 transition hover:-translate-y-1">
              <h3
                className={`text-4xl font-extrabold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.number}
              </h3>
              <p className="text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            What I Stand For
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Principles that guide how I design and build digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <div
              key={i}
              className="group bg-gray-800/60 backdrop-blur border border-gray-700/60 rounded-2xl p-8 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div
                  className={`w-16 h-16 grid place-items-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
              </div>

              <h4 className="text-lg font-bold text-white mb-3 text-center">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-[1px]">
            <div className="bg-gray-900 rounded-xl px-10 py-8">
              <p className="text-gray-300 mb-4">
                Interested in working together?
              </p>
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:scale-105 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
