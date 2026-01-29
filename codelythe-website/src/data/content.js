export const content = {
  nav: {
    fr: {
      work: 'Projets',
      journey: 'Parcours',
      stack: 'Stack',
      about: 'À propos',
      contact: 'Contact',
    },
    en: {
      work: 'Work',
      journey: 'Journey',
      stack: 'Stack',
      about: 'About',
      contact: 'Contact',
    },
  },

  intro: {
    fr: {
      subtitle: 'développeur . étudiant . builder',
    },
    en: {
      subtitle: 'developer . student . builder',
    },
  },

  work: {
    fr: {
      heading: 'Projets',
      subheading: 'Ce que j\'ai construit — pour des clients et pour le plaisir.',
      tabClient: 'Travaux Client',
      tabSide: 'Projets Perso',
    },
    en: {
      heading: 'Work',
      subheading: 'What I\'ve built — for clients and for fun.',
      tabClient: 'Client Work',
      tabSide: 'Side Projects',
    },
  },

  journey: {
    fr: {
      heading: 'Parcours',
      subheading: 'Le chemin jusqu\'ici.',
    },
    en: {
      heading: 'Journey',
      subheading: 'The road so far.',
    },
  },

  stack: {
    fr: {
      heading: 'Stack',
      subheading: 'Les technologies avec lesquelles je travaille au quotidien.',
    },
    en: {
      heading: 'Stack',
      subheading: 'The technologies I work with daily.',
    },
  },

  about: {
    fr: {
      heading: 'À propos',
      subheading: 'Qui est derrière le code.',
      bio: [
        'Je suis Tom, développeur web full-stack, étudiant à Epitech Montpellier et dirigeant de Codelythe, mon auto-entreprise. Originaire de Perpignan, je construis des choses pour le web depuis que j\'ai découvert que le code peut donner vie à des idées — et ça ne s\'est jamais arrêté.',
        'Ce qui me motive, c\'est de résoudre de vrais problèmes avec du code propre. Que ce soit une plateforme d\'IA pour gérer des agents, un outil éducatif qui génère des quiz, ou un site client qui convertit — j\'aime tout le processus, du premier wireframe au déploiement. J\'ai eu la chance de faire mes armes en entreprise avec un stage de 6 mois chez Elloha et un stage à temps partiel de 5 mois chez Hitopic.',
        'En dehors du code, je suis curieux de tout ce qui touche à l\'IA, j\'aime partager ce que j\'apprends, et je cherche constamment à m\'améliorer. Je suis actuellement à la recherche d\'un stage de 4 mois pour mettre mes compétences en pratique dans un environnement professionnel.',
      ],
    },
    en: {
      heading: 'About',
      subheading: 'The person behind the code.',
      bio: [
        'I\'m Tom, a full-stack web developer, student at Epitech Montpellier and founder of Codelythe, my freelance business. Originally from Perpignan, I\'ve been building things for the web since I discovered that code can bring ideas to life — and I haven\'t stopped since.',
        'What drives me is solving real problems with clean code. Whether it\'s an AI platform to manage agents, an educational tool that generates quizzes, or a client site that converts — I love the entire process from first wireframe to deployment. I\'ve had the chance to sharpen my skills with a 6-month internship at Elloha and a 5-month part-time internship at Hitopic.',
        'Outside of code, I\'m curious about everything AI, I enjoy sharing what I learn, and I\'m constantly pushing to improve. I\'m currently looking for a 4-month internship to put my skills to work in a professional environment.',
      ],
    },
  },

  internship: {
    fr: {
      heading: 'Stage',
      subheading: 'Prêt à rejoindre votre équipe.',
      badge: 'Disponible maintenant',
      title: 'Disponible pour un stage de 4 mois',
      period: 'Mars – Juillet 2026',
      description: 'À la recherche d\'une expérience en entreprise où je peux contribuer, apprendre et grandir en tant que développeur.',
      bullets: [
        'Maîtrise de React, Node.js, TypeScript et de l\'écosystème web moderne',
        'Expérience avec les APIs IA (OpenAI) et les outils d\'automatisation',
        'Habitué à travailler de manière autonome et à livrer des résultats concrets',
        'Apprentissage rapide, curieux et motivé par les défis techniques',
      ],
      cta: 'Me contacter',
    },
    en: {
      heading: 'Internship',
      subheading: 'Ready to join your team.',
      badge: 'Available now',
      title: 'Available for a 4-month internship',
      period: 'March – July 2026',
      description: 'Looking for a company where I can contribute, learn, and grow as a developer.',
      bullets: [
        'Proficient in React, Node.js, TypeScript, and the modern web ecosystem',
        'Experience with AI APIs (OpenAI) and automation tools',
        'Comfortable working autonomously and delivering real results',
        'Fast learner, curious, and driven by technical challenges',
      ],
      cta: 'Get in touch',
    },
  },

  contact: {
    fr: {
      heading: 'Contact',
      subheading: 'Envie de discuter ? Écrivez-moi.',
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email',
      emailPlaceholder: 'votre@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Votre message...',
      send: 'Envoyer',
      sending: 'Envoi...',
      success: 'Message envoyé avec succès !',
      error: 'Erreur lors de l\'envoi. Réessayez.',
      or: 'Ou retrouvez-moi sur',
    },
    en: {
      heading: 'Contact',
      subheading: 'Want to chat? Drop me a line.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Your message...',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send. Please try again.',
      or: 'Or find me on',
    },
  },

  footer: {
    fr: {
      rights: 'Tous droits réservés.',
    },
    en: {
      rights: 'All rights reserved.',
    },
  },
}

export const projects = {
  client: [
    {
      id: 'edgeniche',
      title: 'EdgeNiche',
      type: { fr: 'Landing Page', en: 'Landing Page' },
      role: { fr: 'Développeur & Designer', en: 'Developer & Designer' },
      description: {
        fr: 'One-page pour une entreprise de SEO. Design moderne, optimisé pour la conversion avec animations fluides et CTA stratégiques.',
        en: 'One-page site for an SEO company. Modern design, optimized for conversion with smooth animations and strategic CTAs.',
      },
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/edgeniche.png',
      url: 'https://edgeniche.com/',
    },
    {
      id: 'judata',
      title: 'Judata',
      type: { fr: 'Application Mobile & Web', en: 'Mobile & Web App' },
      role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
      description: {
        fr: 'Carnet de bord digital pour judokas, disponible sur iOS, Android et Web. Suivi des combats, statistiques, historique par adversaire et badges de progression. 125+ utilisateurs.',
        en: 'Digital logbook for judokas, available on iOS, Android and Web. Fight tracking, statistics, per-opponent history and progression badges. 125+ users.',
      },
      tech: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
      image: '/images/Judata.png',
      imageSquare: true,
      url: 'https://beacons.ai/zath.p',
      metric: '125+',
      metricLabel: { fr: 'utilisateurs', en: 'users' },
    },
    {
      id: 'royal-canin',
      title: 'Royal Canin',
      type: { fr: 'Projet Entreprise', en: 'Enterprise Project' },
      role: { fr: 'Développeur Frontend (via Told)', en: 'Frontend Developer (via Told)' },
      description: {
        fr: 'Développement du backoffice d\'une application de recommandation alimentaire pour chats et chiens.',
        en: 'Built the back-office for a pet food recommendation app for cats and dogs.',
      },
      tech: ['React', 'TypeScript'],
      image: '/images/royal-canin.png',
      url: null,
    },
    {
      id: 'bouger-apprendre',
      title: 'Bouger&Apprendre',
      type: { fr: 'Application Éducative', en: 'Educational App' },
      role: { fr: 'Développeur (via Devify)', en: 'Developer (via Devify)' },
      description: {
        fr: 'Application éducative combinant activité physique et apprentissage, développée en collaboration avec l\'agence Devify.',
        en: 'Educational app combining physical activity and learning, developed in collaboration with Devify agency.',
      },
      tech: ['Vue.js', 'Nuxt', 'NuxtUI', 'Fastify'],
      image: '/images/B&A.png',
      url: 'https://www.bouge-et-apprends.com/',
    },
  ],
  side: [
    {
      id: 'aigent-hub',
      title: 'Aigent Hub',
      type: { fr: 'Plateforme IA', en: 'AI Platform' },
      role: { fr: 'Créateur & Développeur', en: 'Creator & Developer' },
      description: {
        fr: 'Plateforme centralisée pour créer, déployer et gérer des agents IA personnalisés. Interface intuitive avec analyse de performances.',
        en: 'Centralized platform for creating, deploying and managing custom AI agents. Intuitive interface with performance analytics.',
      },
      tech: ['React', 'Node.js', 'OpenAI', 'Supabase'],
      image: '/images/aigenthub.png',
      url: 'https://www.aigent-hub.com/',
    },
    {
      id: 'quizgen',
      title: 'QuizGen IA',
      type: { fr: 'Outil Éducatif', en: 'Educational Tool' },
      role: { fr: 'Créateur & Développeur', en: 'Creator & Developer' },
      description: {
        fr: 'Générateur de quiz multijoueur par IA à partir de PDF de cours. Projet vainqueur du hackathon GenAI Epitech.',
        en: 'AI-powered multiplayer quiz generator from course PDFs. Winner of the Epitech GenAI hackathon.',
      },
      tech: ['React', 'Tailwind CSS', 'Node.js', 'OpenAI API'],
      image: '/images/quizgen.png',
      url: 'https://genaihackaton.pages.dev/',
    },
    {
      id: 'jeb-incubator',
      title: 'JEB Incubator',
      type: { fr: 'Plateforme Web', en: 'Web Platform' },
      role: { fr: 'Créateur & Développeur', en: 'Creator & Developer' },
      description: {
        fr: 'Plateforme de mise en relation entre startups et investisseurs avec dashboard, messagerie intégrée et export PDF. Réalisé en 2 semaines.',
        en: 'Platform connecting startups and investors with dashboard, built-in messaging and PDF export. Built in 2 weeks.',
      },
      tech: ['Next.js', 'Express', 'PostgreSQL', 'Socket.io'],
      image: '/images/JebIncubator.png',
      url: null,
    },
    {
      id: 'series-watcher',
      title: 'Series Watcher',
      type: { fr: 'Réseau Social', en: 'Social Network' },
      role: { fr: 'Créateur & Développeur', en: 'Creator & Developer' },
      description: {
        fr: 'Réseau social pour noter et discuter des séries TV entre amis avec recommandations personnalisées.',
        en: 'Social network to rate and discuss TV shows with friends, featuring personalized recommendations.',
      },
      tech: ['React', 'Node.js', 'REST API', 'PostgreSQL'],
      image: '/images/seriesTracker.png',
      url: 'https://mangawatcher.pages.dev/',
    },
  ],
}

export const timeline = [
  {
    year: '2026',
    events: [
      {
        type: 'milestone',
        title: { fr: 'Recherche de stage', en: 'Internship search' },
        description: {
          fr: 'À la recherche d\'un stage de 4 mois (mars–juillet 2026) en développement web / IA.',
          en: 'Looking for a 4-month internship (March–July 2026) in web development / AI.',
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
        title: { fr: 'Stage – Hitopic (5 mois, temps partiel)', en: 'Internship – Hitopic (5 months, part-time)' },
        description: {
          fr: 'Stage de 5 mois les jeudis et vendredis en développement.',
          en: '5-month part-time internship (Thursdays & Fridays) in development.',
        },
      },
      {
        type: 'work',
        title: { fr: 'Judata – Développeur Full-Stack', en: 'Judata – Full-Stack Developer' },
        description: {
          fr: 'Application de suivi de combats pour judokas. 125+ utilisateurs actifs.',
          en: 'Fight tracking app for judokas. 125+ active users.',
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
        title: { fr: 'Bouger&Apprendre (via Devify)', en: 'Bouger&Apprendre (via Devify)' },
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
        title: { fr: 'QuizGen IA – 1er prix Hackathon GenAI', en: 'QuizGen IA – 1st Place GenAI Hackathon' },
        description: {
          fr: 'Générateur de quiz multijoueur par IA. Victoire au hackathon GenAI Epitech.',
          en: 'AI-powered multiplayer quiz generator. Won the Epitech GenAI hackathon.',
        },
      },
      {
        type: 'project',
        title: { fr: 'PINKCC Challenge – Finaliste', en: 'PINKCC Challenge – Finalist' },
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
        title: { fr: 'Stage – Elloha (6 mois)', en: 'Internship – Elloha (6 months)' },
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

export const techStack = {
  frontend: {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
  },
  backend: {
    label: 'Backend',
    items: ['Node.js', 'Express', 'Fastify', 'REST APIs', 'PostgreSQL', 'Prisma ORM', 'Supabase'],
  },
  mobile: {
    label: 'Mobile',
    items: ['React Native', 'Expo', 'ReactNativeReusables'],
  },
  ai: {
    label: 'AI / ML',
    items: ['OpenAI API', 'Hugging Face', 'RAG', 'MONAI'],
  },
  tools: {
    label: 'Tools',
    items: ['Git', 'Docker', 'Railway', 'Vercel', 'Vite', 'Swagger'],
  },
}
