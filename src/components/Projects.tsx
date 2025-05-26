import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "./utils/markdownLoader";

export default function Projects() {
  const navigate = useNavigate();
  const projects = getAllProjects();
  
  // Limit to 6 projects for the homepage
  const displayedProjects = projects.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <motion.div
            key={project.slug} // Use project.slug as key
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onClick={() => navigate(`/project/${project.slug}`)}
            className="relative group cursor-pointer rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 line-clamp-3">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {projects.length > 6 && (
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="px-8 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors"
          >
            View All Projects
          </motion.button>
        </div>
      )}
    </div>
  );
} 