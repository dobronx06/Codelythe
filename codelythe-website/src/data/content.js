export const content = {
  nav: {
    fr: { work: 'Projets', about: 'À propos', stack: 'Stack', contact: 'Contact', cv: 'Télécharger CV' },
    en: { work: 'Work', about: 'About', stack: 'Stack', contact: 'Contact', cv: 'Download CV' },
  },

  hero: {
    variants: {
      conservative: {
        fr: { kicker: 'Tom Bouchard · Architecte Solutions IA', head: 'CODELYTHE', sub: 'Développeur full-stack, orienté IA et agentique depuis 2023. Étudiant Epitech, stage chez Rizblanc.', workCta: 'Voir mes projets', cvCta: 'Télécharger CV' },
        en: { kicker: 'Tom Bouchard · AI Solutions Architect', head: 'CODELYTHE', sub: 'Full-stack developer, focused on AI and agentic systems since 2023. Epitech student, intern at Rizblanc.', workCta: 'See my work', cvCta: 'Download CV' },
      },
      bold: {
        fr: { kicker: 'Tom Bouchard · codelythe', head: 'Je construis des\nproduits IA qui tournent.', sub: 'De Aigent Hub en 2023 à Factories et mon poste d\'Architecte Solutions IA , je livre, je mesure, je recommence.', workCta: 'Voir mes projets', cvCta: 'Télécharger CV' },
        en: { kicker: 'Tom Bouchard · codelythe', head: 'I build AI products\nthat ship.', sub: 'From Aigent Hub in 2023 to Factories and my AI Solutions Architect role , I ship, I measure, I iterate.', workCta: 'See my work', cvCta: 'Download CV' },
      },
      experimental: {
        fr: { kicker: 'Tom Bouchard', head: 'Agentique\ndepuis 2023.', sub: 'Aigent Hub à l\'aube du code agentique · Factories en auto-pilote · Architecte Solutions IA chez Rizblanc. Le même fil directeur depuis le début.', workCta: 'Voir mes projets', cvCta: 'Télécharger CV' },
        en: { kicker: 'Tom Bouchard', head: 'Agentic\nsince 2023.', sub: 'Aigent Hub at the dawn of agentic code · Factories on auto-pilot · AI Solutions Architect at Rizblanc. Same through-line since day one.', workCta: 'See my work', cvCta: 'Download CV' },
      },
    },
  },

  credibility: {
    fr: { eyebrow: 'Preuves', items: [
      { number: 'Depuis 2023', label: 'focus IA / agentique', firm: 'Aigent Hub' },
      { number: '450+', label: 'utilisateurs actifs', firm: 'Judata' },
      { number: '1er', label: 'prix GenAI Hackathon', firm: 'Epitech' },
      { number: 'Architecte IA', label: 'stage en cours', firm: 'Rizlblanc' },
      { number: 'Production', label: 'agents déployés', firm: 'Factories' },
    ]},
    en: { eyebrow: 'Track record', items: [
      { number: 'Since 2023', label: 'AI / agentic focus', firm: 'Aigent Hub' },
      { number: '450+', label: 'active users', firm: 'Judata' },
      { number: '1st', label: 'GenAI Hackathon', firm: 'Epitech' },
      { number: 'AI Architect', label: 'current internship', firm: 'Rizlblanc' },
      { number: 'Production', label: 'agents shipped', firm: 'Factories' },
    ]},
  },

  featured: {
    fr: { eyebrow: 'Sélection', head: 'Projets', sub: 'Trois projets qui définissent ma direction.' },
    en: { eyebrow: 'Selected work', head: 'Work', sub: 'Three projects that define where I\'m headed.' },
    items: [
      {
        id: 'factories', image: '/images/factories.png',
        tag: { fr: 'SaaS IA', en: 'AI SaaS' },
        title: 'Factories',
        tagline: {
          fr: 'Plateforme d\'articles SEO générés et publiés en auto-pilote.',
          en: 'Auto-pilot SEO article generation and publishing, at scale.',
        },
        blurb: {
          fr: 'Plateforme de génération et publication automatique d\'articles SEO via IA. Auto-pilote, intégration WordPress multi-sites, scoring qualité, planification intelligente.',
          en: 'AI-powered platform for automated SEO article generation and publishing. Auto-pilot mode, multi-site WordPress integration, quality scoring and smart scheduling.',
        },
        stack: ['Next.js', 'Fastify', 'Supabase', 'OpenAI', 'Claude'],
        metric: { value: '24/7', label: { fr: 'mode auto-pilote', en: 'auto-pilot mode' } },
        link: null, github: null,
      },
      {
        id: 'judata', image: '/images/Judata.png', imageSquare: true,
        tag: { fr: 'Mobile · Web', en: 'Mobile · Web' },
        title: 'Judata',
        tagline: {
          fr: 'Le carnet de bord des judokas. iOS, Android, Web.',
          en: 'The judoka\'s logbook. iOS, Android, Web.',
        },
        blurb: {
          fr: 'Suivi de combats, statistiques, historique par adversaire, badges de progression. Déployé sur les trois plateformes.',
          en: 'Fight tracking, statistics, per-opponent history, progression badges. Live on all three platforms.',
        },
        stack: ['React Native', 'Expo', 'Node.js', 'PostgreSQL'],
        metric: { value: '450+', label: { fr: 'utilisateurs actifs', en: 'active users' } },
        link: 'https://beacons.ai/zath.p', github: null,
      },
      {
        id: 'aigent-hub', image: '/images/aigenthub.png',
        tag: { fr: 'Plateforme IA · origine 2023', en: 'AI Platform · 2023 origin' },
        title: 'Aigent Hub',
        tagline: {
          fr: 'Mon premier vrai projet perso , une plateforme d\'agents IA, imaginée à l\'aube du code agentique.',
          en: 'My first real personal project , an AI-agent platform, conceived at the dawn of agentic coding.',
        },
        blurb: {
          fr: 'Pensée en 2023, quand les agents LLM commençaient à peine à émerger. Aigent Hub a posé la base de ce que je construis aujourd\'hui : orchestration d\'agents, workflows automatisés, produits IA utilisables.',
          en: 'Conceived in 2023, when LLM agents were barely emerging. Aigent Hub set the foundation for what I build today: agent orchestration, automated workflows, usable AI products.',
        },
        stack: ['React', 'Node.js', 'OpenAI', 'Agents'],
        metric: { value: '2023', label: { fr: 'origine agentique', en: 'agentic origin' } },
        link: 'https://www.aigent-hub.com/', github: null,
      },
    ],
  },

  more: {
    fr: { eyebrow: 'Plus', head: 'Autres projets', sub: 'Side-projects, missions freelance, outils.' },
    en: { eyebrow: 'More', head: 'More projects', sub: 'Side-projects, freelance missions, tools.' },
    items: [
      { id: 'royal-canin', title: 'Royal Canin', img: '/images/royal-canin.png', url: null,
        type: { fr: 'Entreprise · via Told', en: 'Enterprise · via Told' }, stack: ['React', 'TypeScript', 'REST'] },
      { id: 'pinkcc', title: 'PINKCC Challenge', img: null, customVisual: 'pinkcc', url: 'https://github.com/dobronx06/PinkCC',
        type: { fr: 'IA médicale · finaliste', en: 'Medical AI · finalist' }, stack: ['PyTorch', 'UNet 3D'] },
      { id: 'quizgen', title: 'QuizGen IA', img: '/images/quizgen.png', url: 'https://genaihackaton.pages.dev/',
        type: { fr: 'Outil éducatif · 1er prix', en: 'Educational tool · 1st place' }, stack: ['React', 'Node', 'OpenAI'] },
      { id: 'bouger', title: 'Bouge&Apprends', img: '/images/B&A.png', url: 'https://www.bouge-et-apprends.com/',
        type: { fr: 'App éducative · via Devify', en: 'Educational app · via Devify' }, stack: ['Vue', 'Nuxt', 'Fastify'] },
      { id: 'edgeniche', title: 'EdgeNiche', img: '/images/edgeniche.png', url: 'https://edgeniche.com/',
        type: { fr: 'Landing SEO', en: 'SEO landing' }, stack: ['React', 'Tailwind', 'Framer'] },
      { id: 'jeb', title: 'JEB Incubator', img: '/images/JebIncubator.png', url: null,
        type: { fr: 'Plateforme · 2 semaines', en: 'Platform · 2 weeks' }, stack: ['Next.js', 'Express', 'Postgres'] },
    ],
  },

  about: {
    fr: {
      eyebrow: 'À propos',
      head: 'La personne\nderrière le code.',
      bio: [
        'Je suis Tom , développeur full-stack, étudiant en 3ème année à Epitech Montpellier, fondateur de Codelythe, actuellement Architecte Solutions IA chez Rizblanc.',
        'Je travaille sur des produits IA depuis 2023, quand Aigent Hub était mon premier vrai projet perso , à l\'aube du code agentique. Cette ligne ne s\'est jamais arrêtée : Factories aujourd\'hui, l\'orchestration d\'agents chez Rizblanc, et mes missions freelance pour Royal Canin, Elloha, Hitopic.',
        'Ce qui m\'intéresse : transformer des prompts en produits utilisables. Agents, automatisation, IA appliquée. Pas l\'IA comme démo , l\'IA comme outil qui tourne.',
      ],
      stats: [
        { v: 'Depuis 2023', k: 'focus IA / agentique' },
        { v: 'Architecte IA', k: 'Rizblanc · en cours' },
        { v: '3e année', k: 'Epitech Montpellier' },
      ],
      cvCta: 'Télécharger le CV',
    },
    en: {
      eyebrow: 'About',
      head: 'The person\nbehind the code.',
      bio: [
        'I\'m Tom , full-stack developer, 3rd-year Epitech Montpellier student, founder of Codelythe, currently AI Solutions Architect at Rizblanc.',
        'I\'ve been shipping AI products since 2023, when Aigent Hub was my first real personal project , at the dawn of agentic code. That line never stopped: Factories today, agent orchestration at Rizblanc, and freelance missions for Royal Canin, Elloha, Hitopic.',
        'What I care about: turning prompts into usable products. Agents, automation, applied AI. Not AI as a demo , AI as a tool that actually ships.',
      ],
      stats: [
        { v: 'Since 2023', k: 'AI / agentic focus' },
        { v: 'AI Architect', k: 'Rizblanc · current' },
        { v: 'Year 3', k: 'Epitech Montpellier' },
      ],
      cvCta: 'Download CV',
    },
  },

  stack: {
    fr: { eyebrow: 'Stack', head: 'Avec quoi je construis.', sub: 'L\'outillage que j\'utilise au quotidien.' },
    en: { eyebrow: 'Stack', head: 'What I build with.', sub: 'The tools I reach for on the daily.' },
    groups: [
      { key: 'frontend', label: { fr: 'Frontend', en: 'Frontend' },
        items: [
          { n: 'React', ic: 'react' },
          { n: 'Next.js', ic: 'nextjs' },
          { n: 'Vue · Nuxt', ic: 'vue' },
          { n: 'TypeScript', ic: 'ts' },
          { n: 'Tailwind', ic: 'tailwind' },
          { n: 'shadcn/ui', ic: 'shadcn' },
          { n: 'Framer Motion', ic: 'framer' },
        ]},
      { key: 'backend', label: { fr: 'Backend', en: 'Backend' },
        items: [
          { n: 'Node.js', ic: 'node' },
          { n: 'Fastify', ic: 'fastify' },
          { n: 'Express', ic: 'express' },
          { n: 'REST', ic: 'rest' },
          { n: 'PostgreSQL', ic: 'postgres' },
          { n: 'Prisma', ic: 'prisma' },
          { n: 'Supabase', ic: 'supabase' },
        ]},
      { key: 'mobile', label: { fr: 'Mobile', en: 'Mobile' },
        items: [
          { n: 'React Native', ic: 'react' },
          { n: 'Expo', ic: 'expo' },
          { n: 'RN Reusables', ic: 'rn' },
        ]},
      { key: 'ai', label: { fr: 'IA', en: 'AI' },
        items: [
          { n: 'OpenAI', ic: 'openai' },
          { n: 'Anthropic', ic: 'anthropic' },
          { n: 'Claude Code', ic: 'claudecode' },
          { n: 'Agents', ic: 'agent' },
          { n: 'RAG', ic: 'rag' },
          { n: 'Perplexity', ic: 'perplexity' },
          { n: 'PyTorch', ic: 'pytorch' },
        ]},
      { key: 'tools', label: { fr: 'Outils', en: 'Tools' },
        items: [
          { n: 'Git', ic: 'git' },
          { n: 'Docker', ic: 'docker' },
          { n: 'Vite', ic: 'vite' },
          { n: 'Vercel', ic: 'vercel' },
          { n: 'Railway', ic: 'railway' },
          { n: 'Figma', ic: 'figma' },
        ]},
    ],
  },

  journey: {
    fr: { heading: 'Parcours', subheading: 'Le chemin jusqu\'ici.' },
    en: { heading: 'Journey', subheading: 'The road so far.' },
  },

  footerCta: {
    fr: { head: 'On en discute ?', sub: 'Réponse sous 24h.', cta: 'Me contacter' },
    en: { head: 'Let\'s talk.', sub: 'Reply within 24 hours.', cta: 'Get in touch' },
  },

  contact: {
    fr: {
      head: 'Contact', sub: 'Dites-moi ce sur quoi vous travaillez.',
      nameL: 'Nom', nameP: 'Votre nom',
      emailL: 'Email', emailP: 'vous@entreprise.com',
      msgL: 'Message', msgP: 'Dites-moi ce sur quoi vous travaillez…',
      send: 'Envoyer', sending: 'Envoi…', sent: 'Message envoyé.',
      or: 'Ou trouvez-moi ici', close: 'Fermer',
    },
    en: {
      head: 'Contact', sub: 'Tell me what you\'re working on.',
      nameL: 'Name', nameP: 'Your name',
      emailL: 'Email', emailP: 'you@company.com',
      msgL: 'Message', msgP: 'Tell me what you\'re working on…',
      send: 'Send', sending: 'Sending…', sent: 'Message sent.',
      or: 'Or find me here', close: 'Close',
    },
  },

  socials: [
    { id: 'email', label: 'codelythe@gmail.com', href: 'mailto:codelythe@gmail.com' },
    { id: 'linkedin', label: 'linkedin.com/in/tom-bouchard', href: 'https://www.linkedin.com/in/tom-bouchard-881b212b2' },
    { id: 'github', label: 'github.com/dobronx06', href: 'https://github.com/dobronx06' },
  ],

  footer: {
    fr: { rights: 'Tous droits réservés.' },
    en: { rights: 'All rights reserved.' },
  },
}

export const timeline = [
  {
    year: '2026',
    events: [
      {
        type: 'project',
        title: { fr: 'Factories, Plateforme SaaS IA', en: 'Factories, AI SaaS Platform' },
        description: {
          fr: 'Création d\'une plateforme de génération et publication automatique d\'articles SEO avec auto-pilote et intégration WordPress.',
          en: 'Built an AI-powered platform for automated SEO article generation and publishing with auto-pilot and WordPress integration.',
        },
      },
      {
        type: 'work',
        title: { fr: 'Architecte Solutions IA chez Rizblanc', en: 'AI Solutions Architect at Rizblanc' },
        description: {
          fr: 'Stage en tant qu\'Architecte Solutions IA , orchestration d\'agents, workflows automatisés.',
          en: 'Internship as AI Solutions Architect , agent orchestration, automated workflows.',
        },
        pulse: true,
      },
    ],
  },
  {
    year: '2025',
    events: [
      {
        type: 'work',
        title: { fr: 'Stage Hitopic (5 mois, temps partiel)', en: 'Internship Hitopic (5 months, part-time)' },
        description: {
          fr: 'Stage de 5 mois les jeudis et vendredis en développement.',
          en: '5-month part-time internship (Thursdays & Fridays) in development.',
        },
      },
      {
        type: 'work',
        title: { fr: 'Judata, Développeur Full-Stack', en: 'Judata, Full-Stack Developer' },
        description: {
          fr: 'Application de suivi de combats pour judokas. 450+ utilisateurs actifs.',
          en: 'Fight tracking app for judokas. 450+ active users.',
        },
      },
      {
        type: 'work',
        title: { fr: 'Royal Canin (via Told)', en: 'Royal Canin (via Told)' },
        description: {
          fr: 'Développement de solutions digitales pour Royal Canin en collaboration avec Told.',
          en: 'Built digital solutions for Royal Canin in collaboration with Told.',
        },
      },
      {
        type: 'work',
        title: { fr: 'Bouge&Apprends (via Devify)', en: 'Bouge&Apprends (via Devify)' },
        description: {
          fr: 'Application éducative alliant mouvement et apprentissage.',
          en: 'Educational app combining movement and learning.',
        },
      },
      {
        type: 'education',
        title: { fr: '3ème année Epitech Montpellier', en: '3rd Year Epitech Montpellier' },
        description: {
          fr: 'Spécialisation développement web et intelligence artificielle.',
          en: 'Specialization in web development and artificial intelligence.',
        },
      },
      {
        type: 'project',
        title: { fr: 'Aigent Hub', en: 'Aigent Hub' },
        description: {
          fr: 'Lancement de la plateforme de gestion d\'agents IA.',
          en: 'Launched AI agent management platform.',
        },
      },
      {
        type: 'project',
        title: { fr: 'QuizGen IA, 1er prix Hackathon GenAI', en: 'QuizGen IA, 1st Place GenAI Hackathon' },
        description: {
          fr: 'Générateur de quiz multijoueur par IA. Victoire au hackathon GenAI Epitech.',
          en: 'AI-powered multiplayer quiz generator. Won the Epitech GenAI hackathon.',
        },
      },
      {
        type: 'project',
        title: { fr: 'PINKCC Challenge, Finaliste', en: 'PINKCC Challenge, Finalist' },
        description: {
          fr: 'Compétition IA médicale de 10 semaines. Segmentation de tumeurs sur CT scans avec UNet/MONAI. Face à Stanford, PhDs et chercheurs.',
          en: '10-week medical AI competition. Tumor segmentation on CT scans with UNet/MONAI. Competed against Stanford, PhDs and researchers.',
        },
      },
      {
        type: 'project',
        title: { fr: 'JEB Incubator', en: 'JEB Incubator' },
        description: {
          fr: 'Plateforme de mise en relation startups/investisseurs. Réalisé en 2 semaines.',
          en: 'Platform connecting startups and investors. Built in 2 weeks.',
        },
      },
    ],
  },
  {
    year: '2024',
    events: [
      {
        type: 'education',
        title: { fr: '2ème année Epitech Montpellier', en: '2nd Year Epitech Montpellier' },
        description: {
          fr: 'Formation en développement full-stack et bases de données.',
          en: 'Training in full-stack development and databases.',
        },
      },
      {
        type: 'work',
        title: { fr: 'Stage Elloha (6 mois)', en: 'Internship Elloha (6 months)' },
        description: {
          fr: 'Stage de 6 mois en développement web.',
          en: '6-month internship in web development.',
        },
      },
      {
        type: 'project',
        title: { fr: 'EdgeNiche', en: 'EdgeNiche' },
        description: {
          fr: 'Création du site vitrine pour une entreprise SEO.',
          en: 'Built landing page for an SEO company.',
        },
      },
      {
        type: 'project',
        title: { fr: 'Series Watcher', en: 'Series Watcher' },
        description: {
          fr: 'Réseau social pour amateurs de séries TV.',
          en: 'Social network for TV series fans.',
        },
      },
    ],
  },
  {
    year: '2023',
    events: [
      {
        type: 'education',
        title: { fr: '1ère année Epitech Montpellier', en: '1st Year Epitech Montpellier' },
        description: {
          fr: 'Début du parcours en développement et technologies de l\'information.',
          en: 'Started journey in development and information technology.',
        },
      },
    ],
  },
]
