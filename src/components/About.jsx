export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - TEXT */}
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-black border border-gray-700 text-white text-xs font-bold tracking-widest uppercase mb-4">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate Full-Stack Web Developer
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Saya adalah seorang <span className="text-white font-semibold">
            Full-Stack Developer</span> yang berfokus pada pembuatan website dan web
            application yang modern, cepat, dan responsif.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Berpengalaman menggunakan <strong>React</strong>, <strong>Tailwind CSS</strong>,
            <strong> JavaScript</strong>, dan <strong>REST API</strong> untuk membangun
            solusi digital yang efektif dan scalable.
          </p>

          {/* CTA */}
          <div className="flex gap-4">
            <a
              href="/cv.pdf"
              target="_blank"
              className="px-6 py-3 bg-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT - INFO CARD */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
          <ul className="space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-white">Name:</span> Ghani Abassyah Helar
            </li>
            <li>
              <span className="font-semibold text-white">Role:</span> Full-Stack Developer
            </li>
            <li>
              <span className="font-semibold text-white">Experience:</span> 2+ Years
            </li>
            <li>
              <span className="font-semibold text-white">Location:</span> Indonesia
            </li>
            <li>
              <span className="font-semibold text-white">Availability:</span>{" "}
              <span className="text-green-400 font-semibold">
                Open for Side-Job
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
