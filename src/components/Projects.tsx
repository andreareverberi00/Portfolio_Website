import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getProjects } from "./utils/markdownLoader";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const navigate = useNavigate();
  const projects = getProjects();
  const { copy, language } = useLanguage();
  const { projects: projectCopy } = copy;

  const displayedProjects = projects.slice(0, 6);
  const hasMoreProjects = projects.length > displayedProjects.length;

  const formatDate = (date: string) => {
    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) return projectCopy.inProgress;
    const locale = language === "it" ? "it-IT" : "en-GB";
    return parsedDate.toLocaleDateString(locale, {
      month: "short",
      year: "numeric"
    });
  };

  return (
    <div className="container mx-auto px-4" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-violet-200">{projectCopy.kicker}</p>
          <h2 className="text-4xl font-bold mt-3 mb-4">{projectCopy.title}</h2>
          <p className="text-gray-400 max-w-2xl">
            {projectCopy.description}
          </p>
        </div>
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 self-start border border-white/10 rounded-full px-5 py-2 text-sm text-gray-200 hover:bg-white/10 transition-colors"
        >
          {projectCopy.archiveButton}
          <ArrowUpRight size={16} />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => navigate(`/project/${project.slug}`)}
            className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl shadow-black/20 hover:shadow-violet-600/20 hover:border-violet-500/30 transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-white border border-white/10">
                {project.steamAppId ? "Released on Steam" : formatDate(project.date)}
              </div>
            </div>

            <div className="p-6 space-y-4 relative">
              <div className="absolute -top-10 right-6 p-3 rounded-full bg-violet-600 text-white shadow-lg shadow-violet-600/30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight size={20} />
              </div>

              <div className="flex items-center justify-between text-sm text-violet-300/80 font-medium">
                <span>{project.tags[0] || "Game Design"}</span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-400 line-clamp-3 leading-relaxed text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.1em] rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-400 group-hover:border-violet-500/30 group-hover:text-violet-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/projects")}
          className="px-8 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors"
        >
          {hasMoreProjects ? projectCopy.primaryButton : projectCopy.fallbackButton}
        </motion.button>
      </div>
    </div>
  );
} 
