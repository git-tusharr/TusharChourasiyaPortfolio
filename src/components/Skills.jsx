import { motion } from "framer-motion";

export default function Skills() {

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Redux Toolkit", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML / CSS", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Core", level: 60 },
        { name: "Hibernate", level: 60 },
        { name: "Servlet / JSP", level: 65 },
        { name: "MySQL", level: 70 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "Figma", level: 65 },
        { name: "C++ Basics", level: 55 },
        { name: "DSA", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-purple-500">Skills</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -8 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="bg-purple-500 h-2 rounded-full"
                      />
                    </div>

                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}