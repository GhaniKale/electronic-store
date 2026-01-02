import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoad(false), 2000);
  }, []);
  if (load) return <Preloader />;
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
