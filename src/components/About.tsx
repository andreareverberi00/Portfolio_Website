import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Gamepad2,
  Layout,
  Briefcase,
  Instagram,
  Linkedin,
  Compass,
  PenSquare,
  Users
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skills = [
    {
      icon: <Gamepad2 className="w-8 h-8 text-violet-400" />,
      title: "Game Engines",
      description: "Rapid prototyping in Unreal Engine 5 (Blueprints) and Unity (C#), with Ren'Py/Ink for branching dialogues and narrative tools."
    },
    {
      icon: <Code2 className="w-8 h-8 text-violet-400" />,
      title: "Development",
      description: "Bridging gameplay and UX using scripting, shaders and tooling. Comfortable with gameplay systems, UI logic and data tracking."
    },
    {
      icon: <Layout className="w-8 h-8 text-violet-400" />,
      title: "Design Tools",
      description: "Figma, Miro and Notion power my documentation pipeline&mdash;from beat charts to annotated UX flows."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-violet-400" />,
      title: "Project Management",
      description: "Agile ceremonies, Jira/Trello pipelines and milestone planning for multi-disciplinary teams."
    }
  ];

  const metrics = [
    { value: "4+", label: "anni tra GDD e prototipi" },
    { value: "8", label: "game jam & festival" },
    { value: "15+", label: "playtest moderati" },
    { value: "6", label: "team multipiattaforma" }
  ];

  const process = [
    {
      icon: <Compass className="w-6 h-6 text-violet-300" />,
      title: "Discovery & Vision",
      description: "Allineamento sul fantasy, analisi competitor e KPI di retention."
    },
    {
      icon: <PenSquare className="w-6 h-6 text-violet-300" />,
      title: "Documentation",
      description: "GDD modulari, beat chart narrative, sistemi di economia e difficulty curve."
    },
    {
      icon: <Users className="w-6 h-6 text-violet-300" />,
      title: "Playtest & Iteration",
      description: "Sessioni moderata + survey, roadmap di miglioramento e handoff al team di dev."
    }
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mb-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">About</p>
            <h2 className="text-4xl font-bold">Design, document, iterate.</h2>
            <p className="text-lg text-gray-400">
              Ho iniziato come narrative designer e oggi accompagno team indie e corporate dalla visione al vertical slice.
              Alterno sessioni di playtest, tuning della difficoltà e documentazione living per mantenere il team allineato.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-3xl font-bold text-white">{metric.value}</p>
                  <p className="text-sm text-gray-400 mt-2">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200 mb-4">Processo</p>
            {process.map((step) => (
              <div key={step.title} className="flex gap-4 py-3 border-b border-white/5 last:border-none">
                <div className="rounded-full bg-white/10 p-3 h-fit">{step.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-700/50 transition-colors border border-violet-900/50"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg border border-violet-900/30"
        >
          <h3 className="text-2xl font-bold mb-4">Location & Contact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-violet-400">Based in</h4>
              <p className="text-gray-300">Modena, Italia</p>
              <p className="text-gray-400 mt-2">Disponibile per collaborazioni remote e workshop on-site in EU.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-violet-400">Contact</h4>
              <a
                href="https://www.instagram.com/andreareverberi_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 flex items-center gap-2 hover:text-violet-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/andrea-reverberi-041a7b240/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 flex items-center gap-2 mt-2 hover:text-violet-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <p className="text-gray-400 mt-2">Scrivimi per mentorship, docenze o sviluppo di prototipi custom.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
