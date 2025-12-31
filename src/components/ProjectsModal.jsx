import { useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-gray-900 text-white max-w-2xl w-full rounded-xl p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <img
          src={project.images[index]}
          alt="Project Preview"
          className="w-full h-64 object-cover rounded mb-4"
        />

        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 rounded text-sm"
            >
              Live Website
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
