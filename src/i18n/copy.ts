export type Language = "en" | "it";

export const translations = {
  en: {
    nav: {
      brandFirst: "Andrea",
      brandLast: "Reverberi",
      brandTagline: "Game Designer & Frontend Dev",
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
      role: "Game Designer & Frontend Developer",
      description:
        "Italian game designer and frontend developer building interactive experiences from web apps to horror games. I work with React, TypeScript, Next.js and Unreal Engine 5/Unity, using AI tools to prototype fast and craft small polished vertical slices.",
      ctas: {
        primary: "View my work",
        secondary: "Play Techdle"
      },
      stats: [
        { label: "Indie studio", value: "Unseen Cat" },
        { label: "Current project", value: "Bedtime Nightmare" },
        { label: "Engines", value: "Unreal · Unity" }
      ],
      highlights: [
        {
          title: "Systems-first Design",
          description:
            "Core loops, pacing and onboarding tuned for both horror and casual experiences."
        },
        {
          title: "Narrative & Documentation",
          description:
            "GDDs, beat charts and feature briefs that keep small cross-discipline teams aligned."
        }
      ],
      focus: {
        label: "Focus 2025",
        value: "Vertical slices · Narrative horror"
      },
      location: {
        label: "Based in",
        value: "Reggio Emilia, Italy · Remote friendly"
      }
    },
    about: {
      kicker: "About",
      title: "Design, document, iterate.",
      description:
        "By day I’m a frontend developer working on digital products for Paramount, by night I design videogames. After completing a Game Design master at Digital Bros Game Academy, I co-founded Unseen Cat Studio with Diego, where I’m specialising in system design and horror projects like Bedtime Nightmare. I keep iterating on prototypes, studying how players interact with systems, and my long-term goal is to work on a multiplayer-focused game.",
      metrics: [
        { value: "Multiple", label: "playable prototypes and academy projects" },
        { value: "Several", label: "published games on Itch.io, Steam and Unity Play" },
        { value: "Ongoing", label: "development of Bedtime Nightmare" },
        { value: "Daily", label: "frontend work with React & TypeScript" }
      ],
      processTitle: "Process",
      process: [
        {
          title: "Concept & Direction",
          description: "I collect ideas, references and the mood I want the game to express. I define what the player should feel and which systems actually matter. Lots of fast experimentation, no useless theory."
        },
        {
          title: "Prototyping & Living Documentation",
          description: "I build quick prototypes in Unreal/Unity and keep lightweight documentation: systems, UX, flows, notes for Collaborators. I update things as the game evolves, not before."
        },
        {
          title: "Fast Playtesting & Iteration",
          description: "I test builds myself, along with friends and whoever touches the controller. I watch what breaks, what works and iterate immediately. No fluff — just practical improvements to the systems."
        }
      ],
      skills: [
        {
          title: "Game Engines",
          description:
            "I prototype fast in Unreal Engine 5 (Blueprints) and Unity (C#), focusing on gameplay feel, systems and level flow more than raw code. I also experiment in Roblox Studio when exploring multiplayer ideas. My workflow is: build → test → tweak, keeping everything playable as early as possible."
        },
        {
          title: "Development",
          description:
            "I know how to code and build features when needed, but when it comes to games I mainly work on system design, level design, UX flow and narrative structure rather than heavy engineering. I bridge designers and developers easily thanks to my frontend background (React, TypeScript, Next.js), making me comfortable writing logic, debugging and communicating technical needs without drowning in code."
        },
        {
          title: "Design Tools",
          description:
            "Figma is my main brain for UI/UX, flowcharts and system diagrams. Milanote for moodboards and references. I also use Miro and Notion when collaborating, all part of a clean, flexible documentation pipeline that evolves with the project."
        },
        {
          title: "Project Management",
          description:
            "Strong experience with Agile workflows: refinement, grooming, sprint planning, standups, reviews, retros and all the painful-but-necessary ceremonies. Comfortable managing tasks through Jira/Trello and keeping scopes clean for small indie teams."
        }
      ],
      locationTitle: "Location & Contact",
      basedInLabel: "Based in",
      basedInValue: "Reggio Emilia, Italy",
      basedInNote: "Available for remote work and onsite workshops across Europe.",
      contactTitle: "Contact",
      contactNote: "Ping me for mentorship, lectures, bespoke prototype work or frontend collaborations."
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
        "Share your concept, an upcoming jam or the outline for a workshop. I can support documentation sprints, level design, audio direction and small frontend tools that support your game or event.",
      highlights: [
        {
          title: "Response time",
          description: "Within 24 hours on business days"
        },
        {
          title: "Looking for",
          description: "Indie prototypes, academic workshops, mentorship, dev tools"
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
      origin: "Based in Reggio Emilia · Unreal & Unity focused"
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
      playableDescription: "If available, you can try a web build or downloadable demo.",
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
      brandTagline: "Game Designer & Frontend Developer",
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
      role: "Game Designer & Frontend Developer",
      description:
        "Game designer e frontend developer italiano che costruisce esperienze interattive, dalle web app agli horror game. Lavoro con React, TypeScript, Next.js e Unreal Engine 5/Unity, usando tool di AI per prototipare veloce e rifinire vertical slice.",
      ctas: {
        primary: "Guarda i progetti",
        secondary: "Gioca a Techdle"
      },
      stats: [
        { label: "Indie studio", value: "Unseen Cat" },
        { label: "Progetto attuale", value: "Bedtime Nightmare" },
        { label: "Motori", value: "Unreal · Unity" }
      ],
      highlights: [
        {
          title: "Design sistemico",
          description:
            "Core loop, pacing e onboarding pensati sia per esperienze horror che casual."
        },
        {
          title: "Narrativa & Documentazione",
          description:
            "GDD completi, beat chart e feature brief che mantengono allineata la collaborazione tra discipline."
        }
      ],
      focus: {
        label: "Focus 2025",
        value: "Vertical slice · Horror narrativo"
      },
      location: {
        label: "Base operativa",
        value: "Reggio Emilia, Italia · Disponibile da remoto"
      }
    },
    about: {
      kicker: "Chi sono",
      title: "Design, documenta, itera.",
      description:
        "Di giorno sono un frontend developer che lavora su prodotti digitali per Paramount, fuori orario progetto videogiochi. Dopo un master in Game Design alla Digital Bros Game Academy ho co-fondato Unseen Cat Studio insieme a Diego, dove mi sto specializzando in system design e giochi horror come Bedtime Nightmare. Continuo a sperimentare con prototipi, a studiare come i giocatori interagiscono con i sistemi e il mio obiettivo a lungo termine è lavorare su un videogioco multiplayer.",
      metrics: [
        { value: "Diversi", label: "prototipi giocabili e progetti accademici" },
        { value: "Alcuni", label: "giochi pubblicati su Itch.io, Steam e Unity Play" },
        { value: "In corso", label: "sviluppo di Bedtime Nightmare" },
        { value: "Ogni giorno", label: "lavoro frontend con React e TypeScript" }
      ],
      processTitle: "Processo",
      process: [
        {
          title: "Concept & Direzione",
          description: "Raccolgo idee, referenze e sensazioni di mood. Definisco cosa deve far provare il gioco e quali sistemi servono davvero. Molta sperimentazione veloce, zero teoria inutile."
        },
        {
          title: "Prototipazione & Documentazione viva",
          description: "Creo prototipi rapidi in Unreal/Unity e documento solo ciò che serve: sistemi, UX, flow, note per collaboratori. Aggiorno la documentazione mentre il gioco evolve, non prima."
        },
        {
          title: "Playtest rapido & Iterazioni",
          description: "Provo la build io, amici, chi capita. Osservo cosa funziona e cosa no e itero subito. Poche perdite di tempo, solo miglioramenti concreti e veloci ai sistemi."
        }
      ],
      skills: [
        {
          title: "Game Engines",
          description:
            "Prototipo velocemente in Unreal Engine 5 (Blueprint) e Unity (C#), concentrandomi su gameplay feel, sistemi e level flow più che sulla programmazione pura. Ogni tanto smanetto anche in Roblox Studio quando esploro idee multiplayer. Il mio metodo è: costruire → testare → iterare, tenendo tutto giocabile il prima possibile."
        },
        {
          title: "Sviluppo",
          description:
            "So programmare e scrivere logiche quando servono, ma nello sviluppo di giochi mi concentro soprattutto su system design, level design, UX flow e struttura narrativa più che sul codice pesante. Grazie alla mia esperienza da programmatore (React, TypeScript, Next.js) capisco bene cosa serve ai programmatori e comunico in modo chiaro senza finire sommerso di ingegneria."
        },
        {
          title: "Design Tools",
          description:
            "Figma è la mia base operativa per UI/UX, flowchart e schemi di sistema. Milanote per moodboard e referenze. Uso anche Miro e Notion quando collaboro, una pipeline di documentazione leggera, chiara e che cresce insieme al progetto."
        },
        {
          title: "Project Management",
          description:
            "Esperienza solida in workflow Agile: refinement, grooming, sprint planning, standup, review, retro e tutta la trafila di cerimonie che nessuno ama ma servono parecchio. A mio agio con Jira/Trello e nel mantenere chiari scope e priorità nei team indie."
        }
      ],
      locationTitle: "Dove lavoro & contatti",
      basedInLabel: "Base",
      basedInValue: "Reggio Emilia, Italia",
      basedInNote: "Disponibile per collaborazioni remote e workshop onsite in Europa.",
      contactTitle: "Contatti",
      contactNote: "Scrivimi per mentorship, docenze, prototipi su misura o collaborazioni frontend."
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
        "Raccontami il tuo concept, una jam imminente o il programma di un workshop. Posso supportarti in documentation sprint, level design, direzione audio e piccoli tool frontend a supporto del progetto.",
      highlights: [
        {
          title: "Tempo di risposta",
          description: "Entro 24 ore nei giorni feriali"
        },
        {
          title: "Cosa cerco",
          description: "Prototipi indie, workshop accademici, mentorship, tool di supporto"
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
      origin: "Made in Reggio Emilia · Focus su Unreal & Unity"
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
      playableDescription: "Quando disponibile, puoi provare una web build o una demo scaricabile.",
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