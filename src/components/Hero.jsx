import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute w-[500px] h-[500px] bg-purple-600 blur-[150px] opacity-20 top-20 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>

          <motion.h1
            initial={{ opacity:0, y:50 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hi, I'm <span className="text-purple-500">Tushar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.4 }}
            className="mt-6 text-gray-400 text-lg"
          >
            React Developer focused on building fast, scalable and
            beautiful frontend applications.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >

            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Projects
            </a>

            {/* DOWNLOAD RESUME */}
           <a
  href="/tushar_chourasiya_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-gray-600 px-6 py-3 rounded-lg hover:border-white transition flex items-center gap-2"
>
  <Download size={18} />
  View Resume
</a>

          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity:0, scale:0.8 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="pointer-events-none absolute inset-0 bg-purple-600 blur-2xl opacity-30 rounded-full"></div>

            <img
              src="/profile.jpg"
              alt="Tushar"
              className="relative w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-700 shadow-xl"
            />

          </div>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y:[0,12,0] }}
        transition={{ repeat:Infinity, duration:1.5 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
}