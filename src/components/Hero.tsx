import { motion } from "framer-motion";
import { Gamepad2, ChevronDown, MapPin, Sparkles, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { copy } = useLanguage();
  const { hero } = copy;
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

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-[90vh] relative flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_1200px_at_50%_-10%,#3b0764,transparent)] opacity-60" />
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <motion.div
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-200 uppercase tracking-[0.2em] mb-8 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-violet-300" />
            {hero.badge}
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-block mb-8 p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl shadow-violet-500/10"
          >
            <Gamepad2 size={56} className="text-violet-400" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              {hero.name}
            </span>
            <span className="block text-2xl md:text-4xl mt-4 font-medium text-violet-300/80">{hero.role}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
              onClick={() => scrollTo("projects")}
            >
              {hero.ctas.primary}
            </motion.button>
            <Link to="/techtimeline" className="contents">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                {hero.ctas.secondary}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-32 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto"
        >
          {hero.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col justify-center items-center"
            >
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-24 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto pb-32"
        >
          {hero.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-6 text-left backdrop-blur-sm hover:border-violet-500/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">{highlight.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        style={{ x: "-50%" }}
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 cursor-pointer p-2 z-20"
        onClick={() => scrollTo("about")}
      >
        <ChevronDown size={24} className="text-white/50 hover:text-white transition-colors" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden xl:flex absolute top-32 right-10 items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/50 px-6 py-4 backdrop-blur-md"
      >
        <div className="p-2 rounded-full bg-violet-500/20">
          <Timer className="text-violet-300" size={20} />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">{hero.focus.label}</p>
          <p className="text-sm font-medium text-white">{hero.focus.value}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="hidden xl:flex absolute top-1/3 left-10 items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/50 px-6 py-4 backdrop-blur-md"
      >
        <div className="p-2 rounded-full bg-indigo-500/20">
          <MapPin className="text-indigo-300" size={20} />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">{hero.location.label}</p>
          <p className="text-sm font-medium text-white">{hero.location.value}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
