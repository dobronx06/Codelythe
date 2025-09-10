export const projects = {
  commerce: [
    {
      id: 1,
      title: "EdgeNiche",
      description: "One-page pour une entreprise de SEO proposant des services d'optimisation pour le référencement.",
      image: "/images/edgeniche.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Analytics"],
      features: ["Design moderne", "Optimisé SEO", "CTA stratégiques", "Mobile-first"],
      demoUrl: "https://edgeniche.com/",
      codeUrl: "#",
      category: "Landing Page"
    }
  ],
  ai: [
    {
      id: 2,
      title: "Aigent Hub",
      description: "Plateforme centralisée pour la création, le déploiement et la gestion d'agents IA personnalisés.",
      image: "/images/aigenthub.png",
      technologies: ["React", "Node.js", "OpenAI", "MongoDB"],
      features: ["Interface intuitive", "Personnalisation avancée", "Analyse performances", "Déploiement simplifié"],
      demoUrl: "https://www.aigent-hub.com/",
      codeUrl: "#",
      category: "Plateforme IA"
    },
    {
      id: 3,
      title: "QuizGen IA",
      description: "Application web générant automatiquement des quiz à partir de documents PDF de cours grâce à l'intelligence artificielle.",
      image: "/images/quizgen.png",
      technologies: ["Vue.js", "Python", "LangChain", "Firebase"],
      features: ["Extraction intelligente", "Quiz personnalisés", "Interface intuitive", "Export multi-formats"],
      demoUrl: "https://genaihackaton.pages.dev/",
      codeUrl: "#",
      category: "Éducation"
    }
  ],
  community: [
    {
      id: 4,
      title: "Jeb Incubator",
      description: "Plateforme de mise en relation entre startups et investisseurs avec espace de discussion et tableau de bord analytique.",
      image: "/images/JebIncubator.png",
      technologies: ["Next.js", "Express", "PostgreSQL", "Socket.io"],
      features: ["Profils détaillés", "Messagerie intégrée", "Dashboard analytics", "Système de matching"],
      demoUrl: "#",
      codeUrl: "#",
      category: "Incubateur"
    },
    {
      id: 5,
      title: "Series Watcher",
      description: "Réseau social permettant de noter et discuter des séries TV entre amis avec recommandations personnalisées.",
      image: "/images/seriesTracker.png",
      technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
      features: ["Système notation", "Groupes privés", "Recommandations IA", "Calendrier sorties"],
      demoUrl: "https://mangawatcher.pages.dev/",
      codeUrl: "#",
      category: "Réseau Social"
    }
  ]
}

export const services = [
  {
    id: 1,
    title: "Sites Web & E-commerce",
    description: "Création de sites vitrines, boutiques en ligne et landing pages optimisées pour la conversion.",
    icon: "ShoppingCart",
    features: [
      "Sites vitrines modernes",
      "Landing pages SEO",
      "E-commerce optimisé",
      "Design responsive"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Vite"],
    price: "À partir de 300€",
    href: "/commerce"
  },
  {
    id: 2,
    title: "Solutions IA & Automation",
    description: "Développement de plateformes IA, outils éducatifs intelligents et systèmes d'automatisation personnalisés.",
    icon: "Brain",
    features: [
      "Plateformes d'agents IA",
      "Outils éducatifs intelligents",
      "Traitement automatique de documents",
      "Solutions IA sur mesure"
    ],
    technologies: ["Python", "OpenAI", "LangChain", "React"],
    price: "Sur devis",
    href: "/ai"
  },
  {
    id: 3,
    title: "Plateformes Communautaires",
    description: "Création d'espaces de collaboration, réseaux sociaux thématiques et plateformes de mise en relation.",
    icon: "Users",
    features: [
      "Réseaux sociaux thématiques",
      "Plateformes de mise en relation",
      "Espaces collaboratifs",
      "Systèmes d'évaluation et feedback"
    ],
    technologies: ["React", "Next.js", "Node.js", "GraphQL"],
    price: "Sur devis",
    href: "/community"
  }
]

export const testimonials = [
  {
    id: 1,
    name: "Alexandre Moreau",
    role: "Directeur Marketing, EdgeNiche",
    content: "Le one-page créé par Codelythe a parfaitement capté l'essence de notre offre SEO. Les conversions ont augmenté de 40% dès le premier mois !",
    avatar: "/images/avatar-1.png",
    rating: 5,
    project: "EdgeNiche Landing Page"
  },
  {
    id: 2,
    name: "Émilie Bernard",
    role: "Responsable Innovation, EduTech+",
    content: "QuizGen IA a révolutionné notre approche pédagogique. Nos professeurs gagnent un temps précieux et nos étudiants adorent le format interactif.",
    avatar: "/images/avatar-2.png",
    rating: 5,
    project: "QuizGen IA"
  },
  {
    id: 3,
    name: "Lucas Durand",
    role: "Co-fondateur, JebStart",
    content: "La plateforme d'incubation développée par Codelythe nous a permis de connecter efficacement startups et investisseurs. Un vrai game-changer pour notre écosystème !",
    avatar: "/images/avatar-3.png",
    rating: 5,
    project: "Jeb Incubator"
  }
]