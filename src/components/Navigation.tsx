import React, { useState, useEffect } from "react";
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/85 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex flex-col gap-2">
            <LanguageToggle />
            <button
              onClick={() => handlePrimaryLink("home")}
              className="text-lg font-semibold tracking-wide text-white text-left"
              aria-label="Back to hero"
            >
              {nav.brandFirst} <span className="text-violet-400">{nav.brandLast}</span>
              <span className="block text-xs uppercase tracking-[0.4em] text-gray-400">
                {nav.brandTagline}
              </span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {nav.primaryLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handlePrimaryLink(link.id)}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
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
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handlePrimaryLink("contact")}
              className="px-5 py-2 rounded-full bg-violet-600 text-white text-sm font-semibold shadow-lg shadow-violet-600/30"
            >
              {nav.cta}
            </motion.button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Apri il menu di navigazione"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mb-4 rounded-2xl border border-white/10 bg-slate-900/95 p-6 shadow-xl shadow-black/40"
            >
              <div className="flex flex-col gap-4">
                {nav.primaryLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handlePrimaryLink(link.id)}
                    className="text-lg text-gray-200 text-left hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                ))}

                <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-2">
                  {nav.secondaryLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleSecondaryLink(link.to)}
                      className="text-gray-400 text-left hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePrimaryLink("contact")}
                    className="mt-4 rounded-full bg-violet-600 text-white font-semibold py-3"
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
