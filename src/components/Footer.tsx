import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionNavigation } from "../hooks/useSectionNavigation";

const socialLinks = [
  {
    label: "Email",
    icon: Mail,
    href: "mailto:andreareverberi.work@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/andrea-reverberi-041a7b240/",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/andreareverberi_/",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/andreareverberi00",
  },
];

const quickLinks = [
  { label: "Progetti", to: "/projects" },
  { label: "Tech Timeline", to: "/techtimeline" },
];

export default function Footer() {
  const scrollToSection = useSectionNavigation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6d28d9,transparent_55%)] opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200/80 mb-4">Game Design</p>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Costruiamo esperienze videoludiche memorabili.
            </h3>
            <p className="text-gray-400 mb-6">
              Dalla documentazione tecnica al level design, seguo l&rsquo;intero ciclo creativo per dare vita a prototipi e vertical slice curati in ogni dettaglio.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg shadow-white/30"
            >
              Pianifichiamo una call
            </motion.button>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 mb-4">
              Naviga
            </h4>
            <div className="flex flex-col gap-3 text-gray-300">
              {["home", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left capitalize hover:text-white transition-colors"
                >
                  {section}
                </button>
              ))}
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 mb-4">
              Social
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} Andrea Reverberi. Tutti i diritti riservati.</p>
          <p className="text-gray-400">Made from Modena · Unreal &amp; Unity certified</p>
        </div>
      </div>
    </footer>
  );
}
