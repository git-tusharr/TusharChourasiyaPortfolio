import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-gray-950 to-black text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Let's <span className="text-purple-500">Connect</span>
        </motion.h2>

        <p className="text-gray-400 text-lg mb-12">
          I am currently open to internship opportunities and collaboration.
          Feel free to reach out through any platform below.
        </p>

        {/* CONTACT INFO */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-gray-900 p-6 rounded-xl">
            <Mail className="mx-auto mb-3 text-purple-400" size={28} />
            <p className="text-gray-300 text-sm">
              chourasiyatushar53@gmail.com
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <Phone className="mx-auto mb-3 text-purple-400" size={28} />
            <p className="text-gray-300 text-sm">
              +91-7692870163
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <MapPin className="mx-auto mb-3 text-purple-400" size={28} />
            <p className="text-gray-300 text-sm">
              Bhopal, India
            </p>
          </div>

        </div>

        {/* CTA BUTTONS */}
        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="mailto:chourasiyatushar53@gmail.com"
            className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            href="/tushar_chourasiya_resume.pdf"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:border-white transition flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>

        </div>

        {/* SOCIAL */}
        <div className="flex justify-center gap-6 mt-10">

          <a
            href="https://github.com/git-tusharr"
            target="_blank"
            className="bg-gray-800 p-4 rounded-lg hover:bg-purple-600 transition"
          >
            <Github />
          </a>

          <a
            href="https://www.linkedin.com/in/tushar-chourasiya-376106321/"
            target="_blank"
            className="bg-gray-800 p-4 rounded-lg hover:bg-purple-600 transition"
          >
            <Linkedin />
          </a>

        </div>

      </div>
    </section>
  );
}