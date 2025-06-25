import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-20">
      <div className="container mx-auto px-6 py-10 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold tracking-wide text-primary">
            Syed Ahmad Ali Shah
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Full Stack Developer | ML Enthusiast
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
          <a href="#home" className="link link-hover">Home</a>
          <a href="#about" className="link link-hover">About</a>
          <a href="#project" className="link link-hover">Projects</a>
          <a href="#contact" className="link link-hover">Contact</a>
        </div>

        {/* Right - Socials */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-2">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com/ahmadcodes39" target="_blank" rel="noreferrer">
              <Github className="size-5 hover:text-primary transition" />
            </a>
            <a href="https://www.linkedin.com/in/syed-ahmad-ali-3461012a9/" target="_blank" rel="noreferrer">
              <Linkedin className="size-5 hover:text-primary transition" />
            </a>
            <a href="mailto:syedahmadalishah39@gmail.com">
              <Mail className="size-5 hover:text-primary transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-base-300">
        © {new Date().getFullYear()} Syed Ahmad Ali Shah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
