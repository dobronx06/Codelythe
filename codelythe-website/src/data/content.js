export const content = {
  nav: {
    fr: { work: 'Projets', index: 'Clients', about: 'À propos', stack: 'Stack', contact: 'Contact', cv: 'Télécharger CV' },
    en: { work: 'Work', index: 'Clients', about: 'About', stack: 'Stack', contact: 'Contact', cv: 'Download CV' },
  },

  hero: {
    // {id} placeholders become links to the matching project in `projects`.
    fr: {
      name: 'Tom Bouchard',
      role: 'Architecte mobile · fondateur de Codelythe',
      lead: 'Je conçois et lance mes propres apps et sites : {jutrack}, {chollo}, {spoily}, {perfumdle} et {mesferias}. Et des apps pour d\'autres, comme {xvovalie}.',
      now: 'Aujourd\'hui chez Hitopic, je construis des apps mobiles et les SDK publicitaires qui les financent. L\'IA est dans chaque étape.',
      workCta: 'Voir les projets', cvCta: 'Télécharger CV',
    },
    en: {
      name: 'Tom Bouchard',
      role: 'Mobile architect · founder of Codelythe',
      lead: 'I design and ship my own apps and sites: {jutrack}, {chollo}, {spoily}, {perfumdle} and {mesferias}. And apps for others, like {xvovalie}.',
      now: 'Currently at Hitopic, building mobile apps and the ad SDKs that fund them. AI is part of every step.',
      workCta: 'See the work', cvCta: 'Download CV',
    },
  },

  featured: {
    fr: { eyebrow: 'Sélection', head: 'Produits phares', sub: 'Mes produits, conçus, codés et lancés de A à Z.' },
    en: { eyebrow: 'Selected work', head: 'Flagship products', sub: 'My own products, designed, built and launched end to end.' },
  },

  index: {
    fr: { eyebrow: 'Clients & missions', head: 'Ils m\'ont fait confiance.', sub: 'Entreprises, agences et médias avec qui j\'ai travaillé, et quelques projets annexes.', client: 'Client', visit: 'Voir le site', private: 'Projet privé' },
    en: { eyebrow: 'Clients & missions', head: 'They trusted me.', sub: 'Companies, agencies and media I\'ve worked with, plus a few side projects.', client: 'Client', visit: 'Visit site', private: 'Private project' },
    clients: ['Royal Canin', 'Hitopic', 'XV Ovalie', 'Elloha', 'Told', 'Rizblanc'],
  },

  about: {
    fr: {
      eyebrow: 'À propos',
      head: 'La personne\nderrière le code.',
      bio: [
        'Je suis Tom, architecte mobile, étudiant en 4e année à Epitech Montpellier et fondateur de Codelythe. Aujourd\'hui chez Hitopic, je conçois des apps mobiles et les SDK publicitaires qui les monétisent.',
        'J\'aime aller du premier commit jusqu\'aux premiers utilisateurs. Jutrack (ex-Judata) suit plus de 900 judokas et pratiquants de JJB sur iOS, Android et le web. Chollo, Spoily, Perfumdle et Mes Ferias suivent la même logique : un besoin précis, un produit simple, et du SEO pour être trouvé.',
        'Avant ça : l\'app XV Ovalie, des missions pour Royal Canin via Told, un stage chez Elloha et un poste d\'architecte IA chez Rizblanc. L\'IA est dans ma boîte à outils depuis 2023, du code jusqu\'aux produits.',
      ],
      stats: [
        { v: '900+', k: 'utilisateurs Jutrack' },
        { v: 'Architecte mobile', k: 'Hitopic · en cours' },
        { v: '4e année', k: 'Epitech Montpellier' },
      ],
      cvCta: 'Télécharger le CV',
    },
    en: {
      eyebrow: 'About',
      head: 'The person\nbehind the code.',
      bio: [
        'I\'m Tom, mobile architect, 4th-year Epitech Montpellier student and founder of Codelythe. Currently at Hitopic, I design mobile apps and the ad SDKs that monetize them.',
        'I like going from the first commit to the first users. Jutrack (formerly Judata) tracks 900+ judo and BJJ athletes on iOS, Android and the web. Chollo, Spoily, Perfumdle and Mes Ferias follow the same recipe: a sharp need, a simple product, and SEO so people find it.',
        'Before that: the XV Ovalie app, missions for Royal Canin via Told, an internship at Elloha and an AI architect role at Rizblanc. AI has been in my toolbox since 2023, from code to products.',
      ],
      stats: [
        { v: '900+', k: 'Jutrack users' },
        { v: 'Mobile architect', k: 'Hitopic · current' },
        { v: 'Year 4', k: 'Epitech Montpellier' },
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
          { n: 'Astro', ic: 'astro' },
          { n: 'Vue · Nuxt', ic: 'vue' },
          { n: 'TypeScript', ic: 'ts' },
          { n: 'Tailwind', ic: 'tailwind' },
          { n: 'Framer Motion', ic: 'framer' },
        ]},
      { key: 'mobile', label: { fr: 'Mobile', en: 'Mobile' },
        items: [
          { n: 'React Native', ic: 'react' },
          { n: 'Expo · EAS', ic: 'expo' },
          { n: 'NativeWind', ic: 'tailwind' },
          { n: 'RevenueCat', ic: 'revenuecat' },
        ]},
      { key: 'backend', label: { fr: 'Backend', en: 'Backend' },
        items: [
          { n: 'Node.js', ic: 'node' },
          { n: 'Fastify', ic: 'fastify' },
          { n: 'PostgreSQL', ic: 'postgres' },
          { n: 'Supabase', ic: 'supabase' },
          { n: 'Prisma', ic: 'prisma' },
          { n: 'Stripe', ic: 'stripe' },
        ]},
      { key: 'ai', label: { fr: 'IA', en: 'AI' },
        items: [
          { n: 'Anthropic', ic: 'anthropic' },
          { n: 'Claude Code', ic: 'claudecode' },
          { n: 'OpenAI', ic: 'openai' },
          { n: 'Agents', ic: 'agent' },
          { n: 'RAG', ic: 'rag' },
          { n: 'PyTorch', ic: 'pytorch' },
        ]},
      { key: 'tools', label: { fr: 'Infra & outils', en: 'Infra & tools' },
        items: [
          { n: 'Cloudflare', ic: 'cloudflare' },
          { n: 'Vercel', ic: 'vercel' },
          { n: 'Railway', ic: 'railway' },
          { n: 'Docker', ic: 'docker' },
          { n: 'Git', ic: 'git' },
          { n: 'Figma', ic: 'figma' },
        ]},
    ],
  },

  journey: {
    fr: { heading: 'Parcours', subheading: 'Le chemin jusqu\'ici.' },
    en: { heading: 'Journey', subheading: 'The road so far.' },
  },

  footerCta: {
    fr: { head: 'On en discute ?', sub: 'App, site ou outil IA : réponse sous 24h.', cta: 'Me contacter' },
    en: { head: 'Let\'s talk.', sub: 'App, website or AI tool: reply within 24 hours.', cta: 'Get in touch' },
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
    fr: { rights: 'Tous droits réservés.', products: 'Produits', elsewhere: 'Ailleurs' },
    en: { rights: 'All rights reserved.', products: 'Products', elsewhere: 'Elsewhere' },
  },
}

/*
 * Every project, in display order. `featured` ones get a large row in <Work />,
 * the rest go in the <ProjectIndex /> table. All outbound links are followed
 * (no rel="nofollow") on purpose: they double as backlinks for each product.
 */
export const projects = [
  {
    id: 'jutrack', name: 'Jutrack', featured: true, live: true, year: '2025',
    url: 'https://jutrack.app', domain: 'jutrack.app',
    icon: '/images/projects/jutrack-icon.webp', color: '#7c3aed', surface: '#0b0b10',
    shots: ['/images/projects/jutrack-home.webp', '/images/projects/jutrack-stats.webp'],
    category: { fr: 'App mobile · Web', en: 'Mobile app · Web' },
    tagline: {
      fr: 'Le carnet de combat des judokas et pratiquants de JJB.',
      en: 'The fight logbook for judo and BJJ athletes.',
    },
    desc: {
      fr: 'Anciennement Judata. Suivi des compétitions et des résultats, statistiques, historique par adversaire et espace coach sur le web. Freemium avec abonnement Pro, traduit en 5 langues.',
      en: 'Formerly Judata. Competition and result tracking, stats, per-opponent history and a web space for coaches. Freemium with a Pro plan, translated into 5 languages.',
    },
    stack: ['Expo', 'React Native', 'Fastify', 'Supabase', 'Next.js', 'RevenueCat'],
    metric: { value: '900+', label: { fr: 'utilisateurs', en: 'users' } },
    links: [
      { label: 'jutrack.app', href: 'https://jutrack.app' },
      { label: 'App Store', href: 'https://apps.apple.com/fr/app/jutrack/id6757122341' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.judata.app' },
    ],
  },
  {
    id: 'chollo', name: 'Chollo', featured: true, live: true, year: '2026',
    url: 'https://cholloapp.com', domain: 'cholloapp.com',
    icon: '/images/projects/chollo-icon.webp', color: '#e8682a', surface: '#f6ead3',
    shots: ['/images/projects/chollo-1.webp', '/images/projects/chollo-2.webp'],
    category: { fr: 'App mobile · Web', en: 'Mobile app · Web' },
    tagline: {
      fr: 'Barcelone, en moins cher. Les bons plans des 18-26 ans.',
      en: 'Barcelona, for less. Deals for 18–26 year olds.',
    },
    desc: {
      fr: 'On scanne le QR code d\'un bar, d\'une salle de sport ou d\'un resto partenaire et l\'offre se débloque pour 24h. Abonnement, vérification d\'âge, carte, parrainage et back-office pour les commerçants. En ES, CA, EN et FR.',
      en: 'Scan the QR code at a partner bar, gym or restaurant to unlock a 24h offer. Subscriptions, age verification, map, referrals and a back office for venues. In ES, CA, EN and FR.',
    },
    stack: ['Expo', 'Supabase', 'Stripe', 'Next.js', 'Edge Functions'],
    links: [{ label: 'cholloapp.com', href: 'https://cholloapp.com' }],
  },
  {
    id: 'spoily', name: 'Spoily', featured: true, live: true, year: '2026',
    url: 'https://spoily.app', domain: 'spoily.app',
    icon: '/images/projects/spoily-icon.webp', color: '#f5b335', surface: '#0d1017',
    shots: ['/images/projects/spoily-1.webp', '/images/projects/spoily-2.webp'],
    category: { fr: 'App mobile · Web', en: 'Mobile app · Web' },
    tagline: {
      fr: 'Le journal de tes séries. Zéro spoiler.',
      en: 'Your TV show diary. Zero spoilers.',
    },
    desc: {
      fr: 'Chaque épisode vu, noté et commenté. Un feed de bandes-annonces à swiper, des recommandations et « où regarder » selon le pays. FR, EN, ES.',
      en: 'Every episode watched, rated and commented. A swipeable trailer feed, recommendations and "where to watch" by country. FR, EN, ES.',
    },
    stack: ['Expo', 'Expo Router', 'Fastify', 'Supabase', 'Astro'],
    links: [
      { label: 'spoily.app', href: 'https://spoily.app' },
      { label: 'App Store', href: 'https://apps.apple.com/app/spoily-tv-show-tracker/id6817471555' },
    ],
  },
  {
    id: 'perfumdle', name: 'Perfumdle', featured: true, live: true, year: '2026',
    url: 'https://perfumdle.com', domain: 'perfumdle.com',
    icon: '/images/projects/perfumdle-icon.webp', color: '#7a1f2b', surface: '#e9dfd2',
    site: '/images/projects/perfumdle-site.webp',
    category: { fr: 'Jeu quotidien · SEO', en: 'Daily game · SEO' },
    tagline: {
      fr: 'Un parfum mystère à deviner chaque jour.',
      en: 'A mystery perfume to guess every day.',
    },
    desc: {
      fr: 'Indices progressifs (maison, famille olfactive, année, notes) et une encyclopédie SEO de 300+ parfums, maisons, notes et parfumeurs. Rebuild quotidien automatique.',
      en: 'Progressive clues (house, olfactive family, year, notes) plus an SEO encyclopedia of 300+ perfumes, houses, notes and perfumers. Automated daily rebuild.',
    },
    stack: ['Astro', 'Cloudflare Pages', 'GitHub Actions', 'Python'],
    metric: { value: '300+', label: { fr: 'parfums référencés', en: 'perfumes indexed' } },
    links: [{ label: 'perfumdle.com', href: 'https://perfumdle.com' }],
  },
  {
    id: 'mesferias', name: 'Mes Ferias', featured: true, live: true, year: '2026',
    url: 'https://mesferias.fr', domain: 'mesferias.fr',
    icon: '/images/projects/mesferias-icon.svg', color: '#dc2626', surface: '#efe1d4',
    site: '/images/projects/mesferias-site.webp',
    category: { fr: 'Site SEO', en: 'SEO site' },
    tagline: {
      fr: 'Le calendrier des ferias du Sud de la France et d\'Espagne.',
      en: 'The feria calendar for southern France and Spain.',
    },
    desc: {
      fr: 'Dates, programmes et infos pratiques des ferias de Nîmes, Dax, Bayonne, Béziers ou Pampelune. Compte à rebours, carte interactive, pages par région et plus de 250 articles.',
      en: 'Dates, programs and practical info for the ferias of Nîmes, Dax, Bayonne, Béziers or Pamplona. Countdown, interactive map, region pages and 250+ articles.',
    },
    stack: ['Astro', 'Tailwind', 'Cloudflare'],
    metric: { value: '250+', label: { fr: 'articles et guides', en: 'articles and guides' } },
    links: [{ label: 'mesferias.fr', href: 'https://mesferias.fr' }],
  },
  {
    id: 'royal-canin', name: 'Royal Canin', live: false, year: '2025',
    img: '/images/projects/royal-canin.webp', client: 'Royal Canin', big: true,
    url: null, domain: null,
    category: { fr: 'Mission · via Told', en: 'Mission · via Told' },
    desc: {
      fr: 'Développement de solutions digitales pour Royal Canin, en mission avec l\'agence Told.',
      en: 'Built digital solutions for Royal Canin, on a mission with the Told agency.',
    },
    stack: ['React', 'TypeScript', 'REST'],
  },
  {
    id: 'xvovalie', name: 'XV Ovalie', live: true, year: '2025',
    img: '/images/projects/xvovalie-logo.webp', imgContain: true, client: 'XV Ovalie',
    url: 'https://www.xvovalie.com', domain: 'xvovalie.com',
    icon: '/images/projects/xvovalie-icon.webp',
    category: { fr: 'App mobile · via Hitopic', en: 'Mobile app · via Hitopic' },
    desc: {
      fr: 'L\'app d\'actualité rugby du média XV Ovalie, branchée sur son WordPress, avec monétisation publicitaire.',
      en: 'The rugby news app for the XV Ovalie media, wired to its WordPress, with ad monetization.',
    },
    stack: ['Expo', 'React Native', 'AdMob'],
  },
  {
    id: 'edgeniche', name: 'EdgeNiche', live: true, year: '2024',
    img: '/images/projects/edgeniche.webp', client: 'EdgeNiche',
    url: 'https://edgeniche.com', domain: 'edgeniche.com',
    category: { fr: 'Site vitrine', en: 'Landing page' },
    desc: {
      fr: 'Site vitrine pour une agence SEO.',
      en: 'Landing page for an SEO agency.',
    },
    stack: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 'pinkcc', name: 'PINKCC Challenge', live: false, year: '2025',
    customVisual: 'pinkcc', big: true,
    url: 'https://github.com/dobronx06/PinkCC', domain: 'github.com/dobronx06/PinkCC',
    category: { fr: 'IA médicale · finaliste', en: 'Medical AI · finalist' },
    desc: {
      fr: 'Segmentation de tumeurs sur scanners CT en 10 semaines, face à Stanford et des équipes de chercheurs.',
      en: 'Tumor segmentation on CT scans over 10 weeks, against Stanford and research teams.',
    },
    stack: ['PyTorch', 'MONAI', 'UNet 3D'],
  },
]

export const liveProjects = projects.filter((p) => p.live && p.url && !p.url.includes('github.com'))

export const timeline = [
  {
    year: '2026',
    events: [
      {
        type: 'work',
        title: { fr: 'Architecte mobile chez Hitopic', en: 'Mobile architect at Hitopic' },
        description: {
          fr: 'Apps mobiles et SDK publicitaires pour les éditeurs, avec l\'IA dans le workflow.',
          en: 'Mobile apps and ad SDKs for publishers, with AI built into the workflow.',
        },
        pulse: true,
      },
      {
        type: 'milestone',
        title: { fr: 'Judata devient Jutrack · 900+ utilisateurs', en: 'Judata becomes Jutrack · 900+ users' },
        description: {
          fr: 'Ouverture au JJB, espace coach, abonnement Pro et nouveau domaine jutrack.app.',
          en: 'Opened to BJJ, added a coach space, a Pro plan and the new jutrack.app domain.',
        },
        pulse: true,
      },
      {
        type: 'project',
        title: { fr: 'Spoily sur l\'App Store', en: 'Spoily on the App Store' },
        description: {
          fr: 'Lancement de l\'app de suivi de séries, avec site et version web.',
          en: 'Launched the TV show tracker app, with a website and web version.',
        },
      },
      {
        type: 'project',
        title: { fr: 'Perfumdle et Mes Ferias', en: 'Perfumdle and Mes Ferias' },
        description: {
          fr: 'Deux sites de niche pensés pour le SEO : un jeu quotidien et un calendrier des ferias.',
          en: 'Two SEO-first niche sites: a daily game and a feria calendar.',
        },
      },
      {
        type: 'project',
        title: { fr: 'Lancement de Chollo à Barcelone', en: 'Chollo launch in Barcelona' },
        description: {
          fr: 'App de bons plans pour les 18-26 ans avec QR codes, abonnements Stripe et back-office.',
          en: 'Deals app for 18–26 year olds with QR codes, Stripe subscriptions and a back office.',
        },
      },
      {
        type: 'work',
        title: { fr: 'Architecte Solutions IA chez Rizblanc', en: 'AI Solutions Architect at Rizblanc' },
        description: {
          fr: 'Stage : orchestration d\'agents et workflows automatisés.',
          en: 'Internship: agent orchestration and automated workflows.',
        },
      },
      {
        type: 'education',
        title: { fr: '4e année Epitech Montpellier', en: '4th year Epitech Montpellier' },
        description: {
          fr: 'Dernière ligne droite du cursus, en parallèle de mon poste chez Hitopic.',
          en: 'Final stretch of the program, alongside my role at Hitopic.',
        },
      },
    ],
  },
  {
    year: '2025',
    events: [
      {
        type: 'project',
        title: { fr: 'Lancement de Judata', en: 'Judata launch' },
        description: {
          fr: 'App de suivi de combats pour judokas, sur iOS, Android et web.',
          en: 'Fight tracking app for judokas, on iOS, Android and web.',
        },
      },
      {
        type: 'work',
        title: { fr: 'Stage Hitopic · app XV Ovalie', en: 'Hitopic internship · XV Ovalie app' },
        description: {
          fr: 'Stage de 5 mois à temps partiel, dont l\'app mobile du média rugby XV Ovalie.',
          en: '5-month part-time internship, including the mobile app for rugby media XV Ovalie.',
        },
      },
      {
        type: 'work',
        title: { fr: 'Royal Canin (via Told)', en: 'Royal Canin (via Told)' },
        description: {
          fr: 'Mission freelance avec l\'agence Told.',
          en: 'Freelance mission with the Told agency.',
        },
      },
      {
        type: 'milestone',
        title: { fr: '1er prix Hackathon GenAI Epitech', en: '1st place, Epitech GenAI Hackathon' },
        description: {
          fr: 'Générateur de quiz multijoueur par IA.',
          en: 'AI-powered multiplayer quiz generator.',
        },
      },
      {
        type: 'milestone',
        title: { fr: 'PINKCC Challenge, finaliste', en: 'PINKCC Challenge, finalist' },
        description: {
          fr: 'Compétition d\'IA médicale de 10 semaines, segmentation de tumeurs sur CT scans.',
          en: '10-week medical AI competition, tumor segmentation on CT scans.',
        },
      },
      {
        type: 'education',
        title: { fr: '3e année Epitech Montpellier', en: '3rd year Epitech Montpellier' },
        description: {
          fr: 'Spécialisation web et intelligence artificielle.',
          en: 'Specialization in web and artificial intelligence.',
        },
      },
    ],
  },
  {
    year: '2024',
    events: [
      {
        type: 'work',
        title: { fr: 'Stage Elloha (6 mois)', en: 'Elloha internship (6 months)' },
        description: {
          fr: 'Développement web sur une plateforme de réservation.',
          en: 'Web development on a booking platform.',
        },
      },
      {
        type: 'project',
        title: { fr: 'EdgeNiche', en: 'EdgeNiche' },
        description: {
          fr: 'Site vitrine pour une agence SEO.',
          en: 'Landing page for an SEO agency.',
        },
      },
      {
        type: 'education',
        title: { fr: '2e année Epitech Montpellier', en: '2nd year Epitech Montpellier' },
        description: {
          fr: 'Full-stack et bases de données.',
          en: 'Full-stack and databases.',
        },
      },
    ],
  },
  {
    year: '2023',
    events: [
      {
        type: 'education',
        title: { fr: 'Entrée à Epitech Montpellier', en: 'Joined Epitech Montpellier' },
        description: {
          fr: 'Premières lignes de code sérieuses, et premiers projets IA.',
          en: 'First serious lines of code, and first AI projects.',
        },
      },
    ],
  },
]
