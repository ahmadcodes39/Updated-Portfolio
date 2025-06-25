import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiJavascript,
  SiDotnet,
  SiPython,
  SiPandas,
  SiCplusplus,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: [
      { label: "React", icon: <SiReact className="text-sky-400" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { label: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { label: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { label: "WebSockets", icon: <SiSocketdotio className="text-white" /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { label: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { label: "SQL", icon: <SiPostgresql className="text-blue-400" /> },
      { label: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    title: "Languages",
    items: [
      { label: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { label: "C#", icon: <SiDotnet className="text-purple-400" /> },
      { label: "C++", icon: <SiCplusplus className="text-blue-400" /> },
      { label: "Python", icon: <SiPython className="text-yellow-300" /> },
    ],
  },
  {
    title: "Data Science",
    items: [
      { label: "Pandas", icon: <SiPandas className="text-pink-400" /> },
      { label: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
      { label: "Matplotlib", icon: <img src="Matplotlib.svg" alt="Matplotlib" className="w-5 h-5" /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "GitHub", icon: <SiGithub className="text-white" /> },
      { label: "VS Code", icon: <VscVscode className="text-blue-400" /> },
      { label: "Visual Studio", icon: <TbBrandVscode className="text-purple-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <motion.section
      className="bg-base-200 px-5 py-12"
      id="skill"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wide mb-12">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4 text-left">{group.title}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {group.items.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral rounded-md text-sm font-medium text-white shadow hover:bg-neutral-focus transition"
                >
                  {skill.icon}
                  {skill.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
