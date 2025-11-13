import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getProjects } from "./utils/markdownLoader";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useSectionNavigation } from "../hooks/useSectionNavigation";

export default function AllProjects() {
  const navigate = useNavigate();
  const projects = getProjects();
  const scrollToSection = useSectionNavigation();
  const tags = Array.from(new Set(projects.flatMap((project) => project.tags))).slice(0, 8);

  return (
    <div className="min-h-screen py-28">
      <div className="container mx-auto px-4 space-y-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate("/")}
            className="text-violet-300 hover:text-white flex items-center gap-2 text-sm uppercase tracking-[0.3em]"
          >
            <ArrowLeft size={16} />
            Home
          </motion.button>
          <p className="text-gray-400 text-sm">Total case studies: {projects.length}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold">Project Archive</h2>
          <p className="text-gray-400">
            Dal mobile casual allo short horror: ogni progetto include obiettivi, responsabilità e risultati.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.05 } }}
              onClick={() => navigate(`/project/${project.slug}`)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-xl shadow-black/30"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-sm text-gray-200">
                  {project.details.engine}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{project.details.role}</span>
                  <span className="inline-flex items-center gap-1 text-violet-300">
                    Read case study
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center space-y-4">
          <h3 className="text-2xl font-semibold">Hai un concept pronto per la prossima jam?</h3>
          <p className="text-gray-400">
            Posso affiancarti nella definizione del core loop, nelle presentazioni per publisher o nella docenza universitaria.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white"
          >
            Contattami
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
