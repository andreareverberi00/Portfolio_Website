import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "./utils/markdownLoader";
import { ArrowLeft } from "lucide-react";

export default function AllProjects() {
  const navigate = useNavigate();
  const projects = getAllProjects();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate("/")}
          className="text-violet-400 hover:text-violet-300 flex items-center gap-2 mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          All Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug} // Use project.slug as key
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
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
      </div>
    </div>
  );
} 