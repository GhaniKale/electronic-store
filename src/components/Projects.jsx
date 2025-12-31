import { useState } from "react";
import { projects } from "../data/projects";
import ProjectsModal from "./ProjectsModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow hover:scale-105 transition"
            >
              <img
                src={p.images[0]}
                alt={p.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {p.description}
                </p>

                <button
                  onClick={() => setSelected(p)}
                  className="text-sm text-blue-400 hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
