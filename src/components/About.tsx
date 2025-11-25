
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
  Users,
  Globe
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { copy } = useLanguage();
  const { about } = copy;
  const skillIcons = [Gamepad2, Code2, Layout, Briefcase];
  const processIcons = [Compass, PenSquare, Users];
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
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">{about.kicker}</p>
            <h2 className="text-4xl font-bold">{about.title}</h2>
            <p className="text-lg text-gray-400">
              {about.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {about.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-3xl font-bold text-white">{metric.value}</p>
                  <p className="text-sm text-gray-400 mt-2">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200 mb-4">{about.processTitle}</p>
            {about.process.map((step, index) => {
              const Icon = processIcons[index] ?? Compass;
              return (
                <div key={index} className="flex gap-4 py-3 border-b border-white/5 last:border-none">
                  <div className="rounded-full bg-white/10 p-3 h-fit">
                    <Icon className="w-6 h-6 text-violet-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {about.skills.map((skill, index) => {
            const Icon = skillIcons[index] ?? Gamepad2;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-700/50 transition-colors border border-violet-900/50"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg border border-violet-900/30"
        >
          <h3 className="text-2xl font-bold mb-4">{about.locationTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-violet-400">{about.basedInLabel}</h4>
              <p className="text-gray-300">{about.basedInValue}</p>
              <p className="text-gray-400 mt-2">{about.basedInNote}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-violet-400">{about.contactTitle}</h4>
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
              <a
                href="https://www.f6s.com/andrea-reverberi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 flex items-center gap-2 mt-2 hover:text-violet-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
                F6S
              </a>
              <p className="text-gray-400 mt-2">{about.contactNote}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
