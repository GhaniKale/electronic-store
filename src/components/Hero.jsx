import TextPressure from "../components/TextPressure";
export default () => (
  <section
    id="home"
    className="min-h-screen flex items-center pt-32 bg-gray-900 text-white"
  >
    <div className="max-w-6xl mx-auto text-center px-6">

<div style={{position: 'relative', height: '300px'}}>
  <TextPressure
    text="codewithu"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>
      {/* Badge */}
      <div className="inline-block px-5 py-2 rounded-full bg-black border border-gray-700 text-gray-200 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm animate__animated animate__fadeInDown">
        AVAILABLE FOR WORK (SIDE-JOB)
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate__animated animate__fadeInDown">
        Hi, I'm <span className="text-purple-400">Developer</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-lg mb-6 animate__animated animate__fadeInUp">
        Full-Stack Web Developer
      </p>

      {/* Description */}
      <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed mx-auto animate__animated animate__fadeInUp">
        I am a creative Web Developer with extensive experience in building
        modular, responsive, and user-friendly web applications. Beyond my
        primary role, I actively take on freelance projects, ranging from
        dashboard development and cloud integration to UI/UX optimization.
      </p>

    </div>
  </section>
);
