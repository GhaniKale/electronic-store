import { useEffect, useState } from "react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          What Clients Say
        </h2>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transition">
          {t.avatar && (
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border border-gray-700"
            />
          )}

          <p className="text-gray-300 italic mb-6">
            “{t.message}”
          </p>

          <h4 className="font-bold">{t.name}</h4>
          <span className="text-sm text-gray-400">
            {t.role}
          </span>
        </div>

        {/* indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
