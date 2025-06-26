import React from "react";
import { motion } from "framer-motion";

const Right = () => {
  return (
    <motion.div
      className="flex flex-col items-start gap-4 text-left max-w-xl px-4 sm:px-0"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-mono leading-snug">
        <span className="text-primary-content">Hi, I'm</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wide">
          Syed Ahmad Ali Shah
        </span>
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-primary">
        Full-Stack Developer | MERN Stack | .NET | React.js | Node.js | C# | ML Enthusiast | Open to Internships, Onsite & Remote Roles
      </p>

      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="projects"
          className="btn btn-primary btn-sm sm:btn-md rounded-md shadow-md hover:scale-105 transition-transform duration-200"
        >
          View Projects
        </a>
        <a
          href="/Syed_Ahmad_Ali_Shah_Resume.pdf"
          download="Syed_Ahmad_Ali_Shah_Resume.pdf"
          className="btn btn-outline btn-secondary btn-sm sm:btn-md rounded-md shadow-md hover:scale-105 transition-transform duration-200"
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  );
};

export default Right;
