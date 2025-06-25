import React from "react";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const data = [
    ["badge-primary", "Software Engineering"],
    ["badge-secondary", "MERN Stack"],
    ["badge-accent", ".NET & C#"],
    ["badge-warning", "Backend APIs"],
    ["badge-info", "Databases"],
    ["badge-success", "Machine Learning"],
  ];
  return (
    <motion.section
      className="mt-20 bg-base-200 py-16 px-6 md:px-20"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wide mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A Glimpse of Me & Myself
        </motion.h2>

        <motion.img
          src="portfolio pic.webp"
          alt="Ahmad Ali Shah"
          className="md:size-52 size-44 rounded-full border-2 border-secondary shadow-lg mb-6  sm:block"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <p className="text-base-content text-lg max-w-3xl leading-relaxed mb-6">
          I’m <span className="text-primary font-semibold">Ahmad Ali Shah</span>
          , a passionate{" "}
          <span className="font-semibold">Software Engineer</span> with a solid
          grip on
          <span className="text-secondary"> Full-Stack Development</span> and
          <span className="text-secondary"> Applied Machine Learning</span>. I
          specialize in building scalable web apps, crafting backend
          architectures, and solving complex problems using MERN and .NET.
        </p>

        <p className="text-base-content text-md max-w-3xl leading-relaxed mb-6">
          From user interfaces to machine intelligence, I love engineering
          clean, efficient, and practical tech solutions. I’m currently open to
          remote jobs and internships where I can learn, grow, and make impact.
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {data.map(([badge, label], i) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              className={`badge ${badge} gap-1 transition`}
            >
              <BadgeCheck className="size-4" /> {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
