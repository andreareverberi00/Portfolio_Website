import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getProjects } from "./utils/markdownLoader";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const navigate = useNavigate();
  const projects = getProjects();

  const displayedProjects = projects.slice(0, 6);
  const hasMoreProjects = projects.length > displayedProjects.length;

  const formatDate = (date: string) => {
    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) return "In progress";
    return parsedDate.toLocaleDateString("en-GB", {
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
          <p className="text-sm uppercase tracking-[0.3em] text-violet-200">Selected work</p>
          <h2 className="text-4xl font-bold mt-3 mb-4">Playable experiences</h2>
          <p className="text-gray-400 max-w-2xl">
            Vertical slice, jam games e prototipi commissionati. Ogni progetto ha una scheda dettagliata con obiettivi,
            ruoli e screenshot interattivi.
          </p>
        </div>
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 self-start border border-white/10 rounded-full px-5 py-2 text-sm text-gray-200 hover:bg-white/10 transition-colors"
        >
          Sfoglia l&rsquo;archivio
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
            className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-2xl shadow-black/30"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-1 text-sm text-white">
                {formatDate(project.date)}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{project.tags[0] || "Game Design"}</span>
                <span className="inline-flex items-center gap-1 text-violet-300">
                  Case study
                  <ArrowUpRight size={14} />
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-[0.2em] rounded-full border border-white/10 px-3 py-1 text-gray-300"
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
          {hasMoreProjects ? "View All Projects" : "Explore project archive"}
        </motion.button>
      </div>
    </div>
  );
} 
