import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { getProjectBySlug } from "./utils/markdownLoader";
import ReactMarkdown from "react-markdown";
import ProjectGallery from "./ProjectGallery";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(projectId || "");

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate("/")}
            className="text-violet-400 hover:text-violet-300 flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate("/")}
          className="text-violet-400 hover:text-violet-300 flex items-center gap-2 mb-8"
        >
          <ArrowLeft size={20} /> Back to Projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-lg overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-violet-600/30 text-violet-300 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Details</h2>
                <div className="space-y-2">
                  <p>
                    <span className="text-violet-300">Engine:</span>{" "}
                    {project.details.engine}
                  </p>
                  <p>
                    <span className="text-violet-300">Role:</span>{" "}
                    {project.details.role}
                  </p>
                  <p>
                    <span className="text-violet-300">Duration:</span>{" "}
                    {project.details.duration}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-300">
                  {project.details.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>

            {project.title === "Turbo Trash" && (
              <div className="flex gap-4 mt-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://play.unity.com/en/games/d76a7f3f-b0ab-4ead-97ba-a5064f6c3b3e/turbo-trash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-violet-400 hover:text-violet-300"
                >
                  <PlayCircle size={20} /> Play Demo
                </motion.a>
              </div>
            )}

            <ProjectGallery projectName={useMemo(() => project.title.replace(/\s+/g, ''), [project.title])} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}