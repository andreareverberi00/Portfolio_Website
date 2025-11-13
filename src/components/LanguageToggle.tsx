import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage, copy } = useLanguage();
  const { languageToggle } = copy;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs uppercase tracking-[0.3em] text-gray-300">
      <span className="hidden sm:inline">{languageToggle.label}</span>
      {(["en", "it"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`rounded-full px-2 py-0.5 transition-colors ${
            language === lang ? "bg-white text-slate-900" : "text-gray-300 hover:text-white"
          }`}
          aria-pressed={language === lang}
        >
          {languageToggle[lang]}
        </button>
      ))}
    </div>
  );
}
