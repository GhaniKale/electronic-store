import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/6285972842784"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="
    fixed bottom-6 right-6 z-[9999]
    grid place-items-center
    w-14 h-14 rounded-full
    bg-green-500 shadow-lg
    hover:scale-110 transition
    pointer-events-auto
  ">
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
