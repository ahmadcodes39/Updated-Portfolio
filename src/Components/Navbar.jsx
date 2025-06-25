import React from "react";
import { Palette } from "lucide-react";
import { motion } from "framer-motion";
import ThemeSelector from "./ThemeSelector";

const Navbar = () => {
  const data = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Skills", href: "#skill" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
      className="shadow-md bg-primary text-primary-content sticky top-0 z-50"
    >
      <div className="flex items-center justify-between px-6 py-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <img
            src="mine.jpg"
            alt="Ahmad"
            className="size-10 rounded-full shadow-lg border-2 border-secondary"
          />
          <p className="font-bold font-mono text-lg">Ahmad</p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:flex items-center gap-4 font-semibold font-sans"
        >
          {data.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-3 py-1 rounded-lg hover:bg-white hover:text-primary transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="cursor-pointer hover:text-primary-content transition duration-200"
        >
         <ThemeSelector/>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
