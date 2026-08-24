import { ArrowUpRight, CheckCircle2, Download, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const STEAM_URL = "https://store.steampowered.com/app/3979840/Bedtime_Nightmare/";

export default function SteamSpotlight() {
  const { language } = useLanguage();
  const isItalian = language === "it";

  return (
    <section id="steam-release" className="container mx-auto px-4" aria-labelledby="steam-release-title">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="steam-panel relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950 shadow-2xl shadow-cyan-950/30"
      >
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[540px]">
            <img
              src="https://www.unseencatstudio.com/media/BedtimeNightmare/A_BN_Cameretta.png"
              alt="Bedtime Nightmare child bedroom at night"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-slate-950/10 lg:to-slate-950" />
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <CheckCircle2 size={15} className="text-cyan-300" />
              {isItalian ? "Pubblicato il 23 giugno 2026" : "Released June 23, 2026"}
            </div>
          </div>

          <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:-ml-12 lg:p-14">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-cyan-200">
              <Gamepad2 size={17} />
              {isItalian ? "Ora disponibile su Steam" : "Now available on Steam"}
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">Unseen Cat Studio</p>
            <h2 id="steam-release-title" className="text-4xl font-black leading-none text-white sm:text-5xl lg:text-6xl">
              Bedtime<br />Nightmare
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {isItalian
                ? "Ho co-fondato uno studio indie e portato il nostro primo horror psicologico dal concept alla release su Steam. Luci limitate, task notturni e qualcosa che si muove nel buio."
                : "I co-founded an indie studio and helped take our first psychological horror from concept to a full Steam release. Limited light, nightly tasks, and something moving in the dark."}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3" aria-label="Bedtime Nightmare highlights">
              {[
                ["Steam", isItalian ? "Release" : "Released"],
                ["UE5", "Engine"],
                ["EN · IT", isItalian ? "Lingue" : "Languages"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-bold text-white">{value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={STEAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="steam-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold text-slate-950"
              >
                <Download size={20} />
                {isItalian ? "Scarica su Steam" : "Download on Steam"}
                <ArrowUpRight size={17} />
              </a>
              <Link
                to="/project/bedtime-nightmare"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Gamepad2 size={19} />
                {isItalian ? "Leggi il case study" : "Read the case study"}
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
