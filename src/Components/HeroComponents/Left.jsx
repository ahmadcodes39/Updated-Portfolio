import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Left = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Social Icons */}
      <div className="flex md:flex-col gap-4">
        <a href="https://github.com/ahmadcodes39" target="_blank" rel="noopener noreferrer">
          <Github className="text-primary-content hover:text-secondary transition size-6" />
        </a>
        <a href="https://www.linkedin.com/in/syed-ahmad-ali-3461012a9/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-primary-content hover:text-secondary transition size-6" />
        </a>
        <a href="mailto:syedahmadalishah39@gmail.com">
          <Mail className="text-primary-content hover:text-secondary transition size-6" />
        </a>
      </div>

      {/* Floating Profile Image */}
      <motion.img
        src="mine3.jpg"
        alt="Ahmad"
        className="rounded-full size-52 sm:size-60 md:size-80 border-4 border-primary-content shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default Left;
