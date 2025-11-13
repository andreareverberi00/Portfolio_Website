import { motion } from "framer-motion";
import { Gamepad2, ChevronDown, MapPin, Sparkles, Timer } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const heroStats = [
    { label: "Playable prototypes", value: "12+" },
    { label: "Game jams & festivals", value: "8" },
    { label: "Engines", value: "Unreal · Unity" }
  ];

  const heroHighlights = [
    {
      title: "Systems-first Design",
      description: "Economy balancing, level pacing and onboarding tailored to each platform."
    },
    {
      title: "Narrative & Documentation",
      description: "Full GDDs, beat charts and feature briefs that keep cross-team collaboration aligned."
    }
  ];

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-[90vh] relative flex items-center justify-center bg-gradient-to-br from-violet-950 via-gray-900 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#3b0764,transparent)]" />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_300px_at_80%_20%,#4c0894,transparent)]"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-violet-500/10 via-transparent to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 uppercase tracking-[0.3em] mb-6"
          >
            <Sparkles size={16} className="text-violet-300" />
            Available for freelance & relocation
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className="inline-block mb-6"
          >
            <Gamepad2 size={64} className="text-violet-400" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-200"
          >
            Andrea Reverberi
            <span className="block text-3xl md:text-4xl mt-4 text-violet-300">Game Designer</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Italian game designer crafting emotionally charged experiences through inventive mechanics and strong narrative beats. I combine Unreal & Unity prototyping, UX systems and sound direction to deliver polished vertical slices.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors"
              onClick={() => scrollTo("projects")}
            >
              View My Work
            </motion.button>
            <Link to="/techtimeline" className="contents">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border-2 border-violet-300/60 text-violet-200 font-semibold hover:bg-white/10 transition-colors"
              >
                Play Techdle
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {heroHighlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              variants={itemVariants}
              className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/10 to-transparent p-6 text-left backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-300">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollTo("about")}
      >
        <ChevronDown size={32} className="text-violet-400" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="hidden lg:flex absolute top-20 right-16 items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-3 backdrop-blur"
      >
        <Timer className="text-violet-300" size={24} />
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Focus 2025</p>
          <p className="text-sm text-white">Vertical slices · Narrative horror</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="hidden lg:flex absolute top-1/3 left-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur"
      >
        <MapPin className="text-violet-200" size={24} />
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Based in</p>
          <p className="text-sm text-white">Modena, Italy · Remote friendly</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
