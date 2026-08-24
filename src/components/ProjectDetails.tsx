import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, PlayCircle, Sparkles } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "./utils/markdownLoader";
import ReactMarkdown from "react-markdown";
import ProjectGallery from "./ProjectGallery";
import { useSectionNavigation } from "../hooks/useSectionNavigation";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(projectId || "");
  const scrollToContact = useSectionNavigation();
  const { copy, language } = useLanguage();
  const { projectDetails, projects: projectsCopy } = copy;

  useEffect(() => {
    if (!project) return;
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonical?.href;

    document.title = `${project.title} | Andrea Reverberi — Game Designer`;
    if (description) description.content = project.description;
    if (canonical) canonical.href = `https://www.andreareverberi.com/project/${project.slug}`;

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
      if (canonical && previousCanonical) canonical.href = previousCanonical;
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{projectDetails.notFoundTitle}</h2>
          <button
            onClick={() => navigate("/")}
            className="text-violet-400 hover:text-violet-300 flex items-center gap-2"
          >
            <ArrowLeft size={20} /> {projectDetails.notFoundCta}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-28">
      <div className="container mx-auto px-4 space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate(-1)}
            className="text-violet-300 hover:text-white flex items-center gap-2 text-sm uppercase tracking-[0.3em]"
          >
            <ArrowLeft size={16} />
            {projectDetails.backLabel}
          </motion.button>
          <p className="text-sm text-gray-400 uppercase tracking-[0.3em]">
            {projectDetails.caseStudyLabel} · {project.date || projectsCopy.inProgress}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-gray-300">
              <Sparkles size={16} className="text-violet-300" />
              {projectDetails.featuredLabel}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-lg text-gray-300 max-w-3xl">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-[0.3em] rounded-full border border-white/10 px-3 py-1 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert max-w-none"
          >
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold mb-4">{projectDetails.detailsTitle}</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="text-white font-semibold">Engine:</span> {project.details.engine || "N/A"}
                </p>
                <p>
                  <span className="text-white font-semibold">Role:</span> {project.details.role || "N/A"}
                </p>
                <p>
                  <span className="text-white font-semibold">Duration:</span> {project.details.duration || "N/A"}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold mb-4">{projectDetails.responsibilitiesTitle}</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.details.responsibilities.map((resp) => (
                  <li key={resp}>{resp}</li>
                ))}
              </ul>
            </div>

            {project.demoUrl && (
              <div className={`rounded-3xl border p-6 ${project.steamAppId ? "border-cyan-300/30 bg-cyan-300/[0.07]" : "border-violet-500/40 bg-violet-500/10"}`}>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.steamAppId ? (language === "it" ? "Disponibile su Steam" : "Available on Steam") : projectDetails.playableTitle}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.steamAppId
                    ? (language === "it" ? "Scarica il gioco completo o prova la demo dalla pagina ufficiale." : "Download the full game or try the demo from the official store page.")
                    : projectDetails.playableDescription}
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900"
                >
                  {project.steamAppId ? <Download size={18} /> : <PlayCircle size={18} />}
                  {project.steamAppId ? "Download on Steam" : projectDetails.playableCta}
                </motion.a>
              </div>
            )}
          </motion.div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">{projectDetails.ctaKicker}</p>
            <h3 className="text-2xl font-semibold text-white mt-2">
              {projectDetails.ctaTitle}
            </h3>
            <p className="text-gray-400">
              {projectDetails.ctaDescription}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToContact("contact")}
            className="rounded-full bg-violet-600 px-6 py-3 font-semibold text-white"
          >
            {projectDetails.ctaButton}
          </motion.button>
        </div>

        {project.steamAppId && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-900/70 p-3 shadow-2xl shadow-cyan-950/20 sm:p-5"
            aria-labelledby="steam-widget-title"
          >
            <div className="mb-4 flex items-center justify-between gap-4 px-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Steam</p>
                <h2 id="steam-widget-title" className="mt-1 text-2xl font-bold text-white">
                  {language === "it" ? "Scarica Bedtime Nightmare" : "Download Bedtime Nightmare"}
                </h2>
              </div>
              <Sparkles className="text-cyan-300" aria-hidden="true" />
            </div>
            <iframe
              title="Bedtime Nightmare on Steam"
              src={`https://store.steampowered.com/widget/${project.steamAppId}/`}
              className="h-[190px] w-full rounded-2xl border-0 sm:h-[210px]"
              loading="lazy"
            />
          </motion.section>
        )}

        <ProjectGallery projectName={project.title.replace(/\s+/g, "")} />
      </div>
    </div>
  );
}
