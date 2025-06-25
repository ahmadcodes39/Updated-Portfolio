import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 80 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const Projects = () => {
  const data = [
    {
      title: "Resume Analyzer",
      description:
        "Built an AI-driven platform to analyze resumes against job descriptions with PDF parsing and match scoring",
      technology: ["React", "Tailwind css", "Node js", "Express js", "Mongodb", "multer"],
      projectType: "MERN",
      image: "resume-analyzer.png",
      link: "https://github.com/ahmadcodes39/Resume-Analyzer",
    },
    {
      title: "Learnify",
      description: "Real-time chat and video call platform with user profiles and language matching.",
      technology: ["React", "Tailwind css", "Node js", "Express js", "Mongodb", "Stream API", "Daisyui"],
      projectType: "MERN",
      image: "learnify.png",
      link: "https://github.com/ahmadcodes39/Language-Exchange",
    },
    {
      title: "Blog App",
      description: "Authenticated blog with CRUD, JWT, and RESTful API integration.",
      technology: ["React", "Tailwind css", "Node js", "Express js", "Mongodb", "multer"],
      projectType: "MERN",
      image: "blogApp.png",
      link: "https://github.com/ahmadcodes39/BlogApp-frontend",
    },
    {
      title: "Food Recipe App",
      description: "A responsive recipe app to explore, view, and manage delicious meals with step-by-step instructions.",
      technology: ["React", "Tailwind css", "Node js", "Express js", "Mongodb", "multer"],
      projectType: "MERN",
      image: "food.jpg",
      link: "https://github.com/ahmadcodes39/Food-Recipe-App-frontend",
    },
    {
      title: "Expense Tracker App",
      description: "Tracks income, expenses, and budget with secure login and dynamic chart visualization.",
      technology: ["React", "Tailwind css", "Node js", "Express js", "Mongodb", "Recharts.js"],
      projectType: "MERN",
      image: "ExpenseTracker.png",
      link: "https://github.com/ahmadcodes39/Expense-Tracker-App",
    },
    {
      title: "Text Tools",
      description: "A text utility app for quick formatting: case conversion, space cleanup, clipboard tools and more.",
      technology: ["React", "Bootstrap"],
      projectType: "React",
      image: "texttools.png",
      link: "https://github.com/ahmadcodes39/TextTools-ReactApp",
    },
    {
      title: "Daily Digest News",
      description: "News app fetching real-time headlines using public API, styled with Bootstrap for clean UI.",
      technology: ["React", "Bootstrap"],
      projectType: "React",
      image: "news.jpg",
      link: "https://github.com/ahmadcodes39/DailyDigest-News-App-React-App",
    },
    {
      title: "Blood Bank Portal",
      description: "Manage blood donations, inventory, and donors using ASP.NET MVC and SQL Server.",
      technology: ["C#", "SQL Server", "MVC"],
      projectType: "ASP.NET",
      image: "blood.jpg",
      link: "https://github.com/ahmadcodes39/EAD-Web-Project",
    },
    {
      title: "Sentiment Analysis using BERT",
      description: "Fine-tuned multilingual BERT on 60K Urdu sentences (93.7% accuracy) using Hugging Face Trainer API.",
      technology: ["Python", "Hugging Face", "Transformers", "PyTorch"],
      projectType: "NLP",
      image: "nlp.jpeg",
      link: "https://drive.google.com/drive/folders/18ZYIKE012IGO8ugcKH63KOCExL3WHKpO?usp=sharing",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="project"
      className="flex flex-col items-center justify-center mt-20"
    >
      <h2 className="text-center text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wide mb-12">
        My Personal Projects
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="card bg-base-100 w-full max-w-sm mx-auto shadow-md"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-md"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg flex justify-between items-center">
                {item.title}
                <div className="badge badge-secondary">{item.projectType}</div>
              </h2>
              <p className="text-sm">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.technology.map((tech, i) => (
                  <div key={i} className="badge badge-outline text-xs">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="card-actions mt-4 justify-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm w-full"
                >
                  Explore More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
};

export default Projects;
