export type Language = "en" | "it";

export const translations = {
  en: {
    nav: {
      brandFirst: "Andrea",
      brandLast: "Reverberi",
      brandTagline: "Game Designer",
      primaryLinks: [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" }
      ],
      secondaryLinks: [
        { to: "/projects", label: "All Projects" },
        { to: "/techtimeline", label: "Tech Timeline" }
      ],
      cta: "Let's talk"
    },
    hero: {
      badge: "Available for freelance & relocation",
      name: "Andrea Reverberi",
      role: "Game Designer",
      description:
        "Italian game designer crafting emotionally charged experiences through inventive mechanics and strong narrative beats. I combine Unreal & Unity prototyping, UX systems and sound direction to deliver polished vertical slices.",
      ctas: {
        primary: "View my work",
        secondary: "Play Techdle"
      },
      stats: [
        { label: "Playable prototypes", value: "12+" },
        { label: "Game jams & festivals", value: "8" },
        { label: "Engines", value: "Unreal · Unity" }
      ],
      highlights: [
        {
          title: "Systems-first Design",
          description:
            "Economy balancing, level pacing and onboarding tailored to each platform."
        },
        {
          title: "Narrative & Documentation",
          description:
            "Full GDDs, beat charts and feature briefs that keep cross-team collaboration aligned."
        }
      ],
      focus: {
        label: "Focus 2025",
        value: "Vertical slices · Narrative horror"
      },
      location: {
        label: "Based in",
        value: "Modena, Italy · Remote friendly"
      }
    },
    about: {
      kicker: "About",
      title: "Design, document, iterate.",
      description:
        "I started as a narrative designer and now guide indie and corporate teams from vision to vertical slice. Playtests, difficulty tuning and living documentation keep every pod aligned and shipping faster.",
      metrics: [
        { value: "4+", label: "years bridging GDD and prototyping" },
        { value: "8", label: "game jams & festivals" },
        { value: "15+", label: "moderated playtests" },
        { value: "6", label: "multi-platform teams" }
      ],
      processTitle: "Process",
      process: [
        {
          title: "Discovery & Vision",
          description: "Fantasy alignment, competitive audits and retention KPIs."
        },
        {
          title: "Documentation",
          description: "Modular GDDs, narrative beat charts and progression systems."
        },
        {
          title: "Playtest & Iteration",
          description: "Moderated sessions, surveys and prioritized improvement roadmaps."
        }
      ],
      skills: [
        {
          title: "Game Engines",
          description:
            "Rapid prototyping in Unreal Engine 5 (Blueprints) and Unity (C#), with Ren'Py/Ink for branching dialogues and narrative tools."
        },
        {
          title: "Development",
          description:
            "Bridging gameplay and UX through scripting, shaders and tooling. Comfortable with gameplay systems, UI logic and telemetry."
        },
        {
          title: "Design Tools",
          description:
            "Figma, Miro and Notion power my documentation pipeline—from beat charts to annotated UX flows."
        },
        {
          title: "Project Management",
          description:
            "Agile ceremonies, Jira/Trello pipelines and milestone planning for multi-disciplinary teams."
        }
      ],
      locationTitle: "Location & Contact",
      basedInLabel: "Based in",
      basedInValue: "Modena, Italy",
      basedInNote: "Available for remote work and onsite workshops across Europe.",
      contactTitle: "Contact",
      contactNote: "Ping me for mentorship, lectures or bespoke prototype work."
    },
    projects: {
      kicker: "Selected work",
      title: "Playable experiences",
      description:
        "Vertical slices, jam games and commissioned prototypes. Each case study includes goals, responsibilities and interactive galleries.",
      archiveButton: "Browse archive",
      caseStudyLabel: "Case study",
      inProgress: "In progress",
      primaryButton: "View all projects",
      fallbackButton: "Explore project archive"
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something memorable",
      description:
        "Share your concept, an upcoming jam or the outline for a workshop. I can support documentation sprints, level design and audio direction.",
      highlights: [
        {
          title: "Response time",
          description: "Within 24 hours on business days"
        },
        {
          title: "Looking for",
          description: "Indie prototypes, academic workshops, mentorship"
        },
        {
          title: "Languages",
          description: "English · Italian"
        }
      ],
      networkLabel: "Network",
      form: {
        nameLabel: "Name *",
        emailLabel: "Email *",
        projectTypeLabel: "Project type *",
        timelineLabel: "Estimated timeline",
        messageLabel: "Message *",
        projectTypeOptions: [
          { value: "prototype", label: "Prototype / Vertical Slice" },
          { value: "jam", label: "Game Jam or Contest" },
          { value: "mentorship", label: "Mentorship / Workshop" },
          { value: "sound", label: "Sound & Narrative" }
        ],
        timelineOptions: [
          { value: "1-2-weeks", label: "1–2 weeks" },
          { value: "1-month", label: "1 month" },
          { value: "3-plus-months", label: "3+ months" },
          { value: "tbd", label: "To be defined" }
        ],
        metaProjectTypeLabel: "Project type",
        metaTimelineLabel: "Timeline",
        submitLabel: "Send message",
        sendingLabel: "Sending...",
        success: "Message sent! I'll reply as soon as possible.",
        error: "Something went wrong. Please try again later."
      }
    },
    footer: {
      kicker: "Game Design",
      title: "Let's craft memorable playable experiences.",
      description:
        "From documentation to level design, I follow the full creative cycle to build prototypes and vertical slices with polish.",
      button: "Schedule a call",
      navTitle: "Navigate",
      socialTitle: "Social",
      rights: "All rights reserved.",
      origin: "Based in Modena · Unreal & Unity certified"
    },
    timelineCTA: {
      kicker: "Mini game",
      title: "Techdle — guess the tech milestone!",
      description:
        "Challenge your knowledge of tech history with a snappy guessing game. Great for events, talks and workshops.",
      button: "Play now"
    },
    projectDetails: {
      notFoundTitle: "Project not found",
      notFoundCta: "Back to home",
      backLabel: "Go back",
      featuredLabel: "Featured project",
      caseStudyLabel: "Case study",
      detailsTitle: "Project Details",
      responsibilitiesTitle: "Responsibilities",
      playableTitle: "Playable demo",
      playableDescription: "Try the web build published on Unity Play.",
      playableCta: "Play demo",
      ctaKicker: "Need a post-mortem?",
      ctaTitle: "Available for talks, lectures and new collaborations.",
      ctaDescription:
        "Happy to help with documentation sprints, UX consulting and sound direction for horror or casual briefs.",
      ctaButton: "Schedule a call"
    },
    allProjects: {
      backLabel: "Home",
      statsLabel: "Total case studies",
      title: "Project archive",
      description:
        "From mobile casual to short-form horror—every project includes objectives, responsibilities and outcomes.",
      ctaTitle: "Have a concept for the next jam?",
      ctaDescription:
        "I can support your team with core loop definition, publisher decks or university lectures.",
      ctaButton: "Get in touch"
    },
    languageToggle: {
      label: "Language",
      en: "EN",
      it: "IT"
    }
  },
  it: {
    nav: {
      brandFirst: "Andrea",
      brandLast: "Reverberi",
      brandTagline: "Game Designer",
      primaryLinks: [
        { id: "home", label: "Home" },
        { id: "about", label: "Chi sono" },
        { id: "projects", label: "Progetti" },
        { id: "contact", label: "Contatti" }
      ],
      secondaryLinks: [
        { to: "/projects", label: "Tutti i progetti" },
        { to: "/techtimeline", label: "Tech Timeline" }
      ],
      cta: "Parliamone"
    },
    hero: {
      badge: "Disponibile per freelance e trasferte",
      name: "Andrea Reverberi",
      role: "Game Designer",
      description:
        "Game designer italiano che costruisce esperienze emozionali con meccaniche inventive e ritmi narrativi forti. Unisco prototipazione Unreal & Unity, sistemi UX e direzione audio per vertical slice rifiniti.",
      ctas: {
        primary: "Guarda i progetti",
        secondary: "Gioca a Techdle"
      },
      stats: [
        { label: "Prototipi giocabili", value: "12+" },
        { label: "Game jam & festival", value: "8" },
        { label: "Motori", value: "Unreal · Unity" }
      ],
      highlights: [
        {
          title: "Design sistemico",
          description:
            "Bilanciamento economie, pacing e onboarding su misura per ogni piattaforma."
        },
        {
          title: "Narrativa & Documentazione",
          description:
            "GDD completi, beat chart e feature brief che mantengono allineata la collaborazione cross-team."
        }
      ],
      focus: {
        label: "Focus 2025",
        value: "Vertical slice · Horror narrativo"
      },
      location: {
        label: "Base operativa",
        value: "Modena, Italia · Disponibile da remoto"
      }
    },
    about: {
      kicker: "Chi sono",
      title: "Design, documenta, itera.",
      description:
        "Partito come narrative designer, oggi accompagno team indie e corporate dalla visione al vertical slice. Playtest, tuning della difficoltà e documentazione viva tengono i team allineati e produttivi.",
      metrics: [
        { value: "4+", label: "anni tra GDD e prototipi" },
        { value: "8", label: "game jam & festival" },
        { value: "15+", label: "playtest moderati" },
        { value: "6", label: "team multipiattaforma" }
      ],
      processTitle: "Processo",
      process: [
        {
          title: "Discovery & Vision",
          description: "Allineamento sul fantasy, analisi competitor e KPI di retention."
        },
        {
          title: "Documentazione",
          description: "GDD modulari, beat chart narrative, sistemi economici e difficulty curve."
        },
        {
          title: "Playtest & Iteration",
          description: "Sessioni moderate, survey e roadmap di miglioramento prioritizzate."
        }
      ],
      skills: [
        {
          title: "Game Engines",
          description:
            "Prototipi rapidi in Unreal Engine 5 (Blueprint) e Unity (C#), con Ren'Py/Ink per dialoghi ramificati e strumenti narrativi."
        },
        {
          title: "Sviluppo",
          description:
            "Collego gameplay e UX con scripting, shader e tool. A mio agio con sistemi di gioco, logiche UI e telemetria."
        },
        {
          title: "Design Tools",
          description:
            "Figma, Miro e Notion alimentano la pipeline di documentazione: da beat chart a UX annotate."
        },
        {
          title: "Project Management",
          description:
            "Cerimonie Agile, pipeline Jira/Trello e pianificazione milestone per team multidisciplinari."
        }
      ],
      locationTitle: "Dove lavoro & contatti",
      basedInLabel: "Base",
      basedInValue: "Modena, Italia",
      basedInNote: "Disponibile per collaborazioni remote e workshop onsite in Europa.",
      contactTitle: "Contatti",
      contactNote: "Scrivimi per mentorship, docenze o prototipi su misura."
    },
    projects: {
      kicker: "Selezione lavori",
      title: "Esperienze giocabili",
      description:
        "Vertical slice, jam game e prototipi commissionati. Ogni scheda include obiettivi, ruoli e una galleria interattiva.",
      archiveButton: "Sfoglia l'archivio",
      caseStudyLabel: "Case study",
      inProgress: "In corso",
      primaryButton: "Vedi tutti i progetti",
      fallbackButton: "Esplora l'archivio"
    },
    contact: {
      kicker: "Contatti",
      title: "Costruiamo qualcosa di memorabile",
      description:
        "Raccontami il tuo concept, una jam imminente o il programma di un workshop. Posso supportarti in documentation sprint, level design e direzione audio.",
      highlights: [
        {
          title: "Tempo di risposta",
          description: "Entro 24 ore nei giorni feriali"
        },
        {
          title: "Cosa cerco",
          description: "Prototipi indie, workshop accademici, mentorship"
        },
        {
          title: "Lingue",
          description: "Italiano · Inglese"
        }
      ],
      networkLabel: "Network",
      form: {
        nameLabel: "Nome *",
        emailLabel: "Email *",
        projectTypeLabel: "Tipo di progetto *",
        timelineLabel: "Timeline stimata",
        messageLabel: "Messaggio *",
        projectTypeOptions: [
          { value: "prototype", label: "Prototype / Vertical Slice" },
          { value: "jam", label: "Game Jam o Contest" },
          { value: "mentorship", label: "Mentorship / Workshop" },
          { value: "sound", label: "Sound & Narrative" }
        ],
        timelineOptions: [
          { value: "1-2-weeks", label: "1–2 settimane" },
          { value: "1-month", label: "1 mese" },
          { value: "3-plus-months", label: "3+ mesi" },
          { value: "tbd", label: "Da definire" }
        ],
        metaProjectTypeLabel: "Tipo di progetto",
        metaTimelineLabel: "Timeline",
        submitLabel: "Invia messaggio",
        sendingLabel: "Invio...",
        success: "Messaggio inviato! Ti risponderò al più presto.",
        error: "Qualcosa è andato storto. Riprova più tardi."
      }
    },
    footer: {
      kicker: "Game Design",
      title: "Costruiamo esperienze videoludiche memorabili.",
      description:
        "Dalla documentazione al level design seguo l'intero ciclo creativo per dare vita a prototipi e vertical slice curati.",
      button: "Pianifichiamo una call",
      navTitle: "Naviga",
      socialTitle: "Social",
      rights: "Tutti i diritti riservati.",
      origin: "Made in Modena · Certificato Unreal & Unity"
    },
    timelineCTA: {
      kicker: "Mini game",
      title: "Techdle — indovina l'evento tech!",
      description:
        "Metti alla prova le tue conoscenze con un guessing game veloce. Perfetto per eventi, talk e workshop.",
      button: "Gioca ora"
    },
    projectDetails: {
      notFoundTitle: "Progetto non trovato",
      notFoundCta: "Torna alla home",
      backLabel: "Indietro",
      featuredLabel: "Progetto in evidenza",
      caseStudyLabel: "Case study",
      detailsTitle: "Dettagli progetto",
      responsibilitiesTitle: "Responsabilità",
      playableTitle: "Demo giocabile",
      playableDescription: "Prova la versione web pubblicata su Unity Play.",
      playableCta: "Gioca ora",
      ctaKicker: "Serve un post-mortem?",
      ctaTitle: "Disponibile per talk, docenze e nuove collaborazioni.",
      ctaDescription:
        "Posso supportarti con documentation sprint, consulenze UX e direzione audio per horror o casual.",
      ctaButton: "Pianifica una call"
    },
    allProjects: {
      backLabel: "Home",
      statsLabel: "Case study totali",
      title: "Archivio progetti",
      description:
        "Dal mobile casual all'horror narrativo: ogni progetto include obiettivi, responsabilità e risultati.",
      ctaTitle: "Hai un concept pronto per la prossima jam?",
      ctaDescription:
        "Posso aiutarti con core loop, deck per publisher o lezioni universitarie.",
      ctaButton: "Scrivimi"
    },
    languageToggle: {
      label: "Lingua",
      en: "EN",
      it: "IT"
    }
  }
} as const;

export type Copy = typeof translations.en;
