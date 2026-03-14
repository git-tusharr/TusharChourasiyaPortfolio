import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">

        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">
          Tushar<span className="text-purple-500">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -3 }}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* MOBILE ICON */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white transition text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}