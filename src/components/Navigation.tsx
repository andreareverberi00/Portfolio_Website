import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSectionNavigation } from "../hooks/useSectionNavigation";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = useSectionNavigation();
  const { copy } = useLanguage();
  const { nav } = copy;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handlePrimaryLink = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleSecondaryLink = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <LanguageToggle />
            <button
              onClick={() => handlePrimaryLink("home")}
              className="group text-lg font-bold tracking-tight text-white text-left"
              aria-label="Back to hero"
            >
              <span className="group-hover:text-violet-300 transition-colors duration-300">{nav.brandFirst}</span> <span className="text-violet-400 group-hover:text-violet-300 transition-colors duration-300">{nav.brandLast}</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 group-hover:text-violet-400/70 transition-colors duration-300 font-medium">
                {nav.brandTagline}
              </span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-8 bg-white/5 rounded-full px-6 py-2 border border-white/5 backdrop-blur-sm">
            {nav.primaryLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handlePrimaryLink(link.id)}
                className="relative text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {nav.secondaryLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleSecondaryLink(link.to)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handlePrimaryLink("contact")}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 transition-all duration-300 border border-white/10"
            >
              {nav.cta}
            </motion.button>
          </div>

          <button
            className="lg:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  {nav.primaryLinks.map((link, index) => (
                    <motion.button
                      key={link.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handlePrimaryLink(link.id)}
                      className="text-2xl font-bold text-gray-200 text-left hover:text-violet-400 transition-colors py-2"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>

                <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />

                <div className="flex flex-col gap-4">
                  {nav.secondaryLinks.map((link, index) => (
                    <motion.button
                      key={link.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      onClick={() => handleSecondaryLink(link.to)}
                      className="text-gray-400 text-left hover:text-white transition-colors font-medium"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePrimaryLink("contact")}
                    className="mt-2 w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold py-4 shadow-lg shadow-violet-900/20"
                  >
                    {nav.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
