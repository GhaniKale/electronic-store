import TextPressure from "../components/TextPressure";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* LOGO / TEXT PRESSURE */}
        <div className="relative h-[140px] flex items-center justify-center mb-6">
          <TextPressure
            text="CODE WITH U"
            flex
            width
            weight
            italic
            alpha={false}
            stroke={false}
            textColor="#ffffff"
            minFontSize={48}
          />
        </div>

        {/* BADGE */}
        <div className="inline-block px-5 py-2 rounded-full bg-black border border-gray-700 text-gray-200 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm animate__animated animate__fadeInDown">
          AVAILABLE FOR WORK (SIDE-JOB)
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate__animated animate__fadeInDown">
          Hi, I'm <span className="text-purple-400">Developer</span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-400 text-lg mb-6 animate__animated animate__fadeInUp">
          Full-Stack Web Developer
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed animate__animated animate__fadeInUp">
          I am a creative Web Developer with extensive experience in building
          modular, responsive, and user-friendly web applications. Beyond my
          primary role, I actively take on freelance projects, ranging from
          dashboard development and cloud integration to UI/UX optimization.
        </p>
      </div>
    </section>
  );
}
