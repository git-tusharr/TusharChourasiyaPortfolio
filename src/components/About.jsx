import { motion } from "framer-motion";

export default function About() {
  const techStack = [
    "React",
    "JavaScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Spring",
    "Springboot",
    "Hibernate",
    "MySQL",
    "Git",
    "Github"
  ];

  const highlights = [
    "Built E-commerce Applications",
    "REST API Integration",
    "Responsive UI Development",
    "State Management Experience"
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About <span className="text-purple-500">Me</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.2 }}
          className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto text-center"
        >
          I am a Computer Science Engineering student based in Bhopal with a strong
          interest in Frontend and Full Stack Web Development. I specialize in
          building modern, responsive and interactive web applications using React,
          JavaScript and Tailwind CSS.

          I have hands-on experience with component-based architecture, state
          management using Redux Toolkit and REST API integration. Along with
          frontend technologies, I am also exploring backend development using
          Spring and Hibernate to understand complete product development.

          Currently I am strengthening my problem-solving skills through Data
          Structures and continuously building real-world projects like
          e-commerce apps and dashboards.
        </motion.p>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* HIGHLIGHTS */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:0.6 }}
          className="grid md:grid-cols-4 gap-6 mt-14"
        >
          {highlights.map((item) => (
            <div
              key={item}
              className="bg-gray-800 p-6 rounded-xl text-center text-gray-300 hover:bg-gray-700 transition"
            >
              {item}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}