import React from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl"
            >

              {/* IMAGE */}
              <div className="h-48 bg-gray-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>

                <p className="mt-3 text-gray-400 text-sm">
                  {p.description}
                </p>

                {/* TECH */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 px-3 py-1 text-xs rounded-lg text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    className="bg-purple-600 px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={p.demo}
                    target="_blank"
                    className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:border-white transition"
                  >
                    Live Demo
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}