import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionNavigation } from "../hooks/useSectionNavigation";
import { useLanguage } from "../context/LanguageContext";

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

export default function Footer() {
  const { copy } = useLanguage();
  const { footer, nav } = copy;
  const scrollToSection = useSectionNavigation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6d28d9,transparent_55%)] opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200/80 mb-4">{footer.kicker}</p>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {footer.title}
            </h3>
            <p className="text-gray-400 mb-6">
              {footer.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg shadow-white/30"
            >
              {footer.button}
            </motion.button>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 mb-4">
              {footer.navTitle}
            </h4>
            <div className="flex flex-col gap-3 text-gray-300">
              {nav.primaryLinks.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left capitalize hover:text-white transition-colors"
                >
                  {section.label}
                </button>
              ))}
              {nav.secondaryLinks.map((link) => (
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
              {footer.socialTitle}
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
          <p>© {year} Andrea Reverberi. {footer.rights}</p>
          <p className="text-gray-400">{footer.origin}</p>
        </div>
      </div>
    </footer>
  );
}
