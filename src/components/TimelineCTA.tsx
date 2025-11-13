import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function TimelineCTA() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-900/40 via-slate-900/80 to-slate-950/90 p-10 shadow-2xl shadow-violet-900/40"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-violet-200">
              <Sparkles size={16} />
              Mini game
            </p>
            <h3 className="text-3xl font-semibold text-white mt-3 mb-2">
              Techdle — indovina l&rsquo;evento tech!
            </h3>
            <p className="text-gray-300 max-w-2xl">
              Metti alla prova le tue conoscenze storiche con un gioco rapido e reattivo. Perfetto per eventi, talk e workshop sul game design.
            </p>
          </div>
          <Link
            to="/techtimeline"
            className="group inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-slate-900 font-semibold shadow-xl shadow-white/40 hover:bg-white transition-colors"
          >
            Gioca ora
            <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
