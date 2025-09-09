import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

const ProjectCarousel = ({ 
  title = "Mes Dernières Réalisations",
  description = "Découvrez une sélection de projets qui illustrent mon expertise technique",
  projectsData = null,
  showAllTypes = true,
  theme = "default"
}) => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Use provided projects or combine all types for homepage
  const allProjects = projectsData || [
    ...projects.commerce,
    ...projects.ai,
    ...projects.community
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % allProjects.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [allProjects.length, isAutoPlaying])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % allProjects.length)
    setIsAutoPlaying(false)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + allProjects.length) % allProjects.length)
    setIsAutoPlaying(false)
  }

  const goToProject = (index) => {
    setCurrentProject(index)
    setIsAutoPlaying(false)
  }

  if (allProjects.length === 0) return null

  const current = allProjects[currentProject]

  // Theme configurations
  const themes = {
    default: {
      background: "from-gray-900 via-blue-900 to-purple-900",
      gradientOverlay: "from-primary-600/10 to-secondary-600/10",
      blob1: "bg-blue-500/5",
      blob2: "bg-purple-500/5",
      button: "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
      accent: "blue"
    },
    commerce: {
      background: "from-slate-900 via-blue-900 to-indigo-900",
      gradientOverlay: "from-blue-600/10 to-indigo-600/10",
      blob1: "bg-blue-500/5",
      blob2: "bg-indigo-500/5",
      button: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
      accent: "blue"
    },
    ai: {
      background: "from-gray-900 via-purple-900 to-pink-900",
      gradientOverlay: "from-purple-600/10 to-pink-600/10",
      blob1: "bg-purple-500/5",
      blob2: "bg-pink-500/5",
      button: "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      accent: "purple"
    },
    community: {
      background: "from-gray-900 via-emerald-900 to-teal-900",
      gradientOverlay: "from-emerald-600/10 to-teal-600/10",
      blob1: "bg-emerald-500/5",
      blob2: "bg-teal-500/5",
      button: "from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700",
      accent: "emerald"
    }
  }

  const currentTheme = themes[theme] || themes.default

  return (
    <section className={`relative bg-gradient-to-br ${currentTheme.background} text-white section-padding overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.gradientOverlay}`}></div>
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${currentTheme.blob1} rounded-full mix-blend-multiply filter blur-xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${currentTheme.blob2} rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000`}></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Preview */}
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="h-full flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-8xl font-bold text-white/20">
                    {current.title.charAt(0)}
                  </div>
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <a
                      href={current.demoUrl}
                      className="w-full bg-white/90 hover:bg-white text-gray-900 px-4 py-3 rounded-lg font-medium text-center transition-colors flex items-center justify-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir le projet
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                aria-label="Projet précédent"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                aria-label="Projet suivant"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>

            {/* Project Info */}
            <motion.div
              key={`info-${currentProject}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 bg-gradient-to-r ${
                  theme === 'commerce' ? 'from-blue-500/20 to-indigo-500/20' :
                  theme === 'ai' ? 'from-purple-500/20 to-pink-500/20' :
                  theme === 'community' ? 'from-emerald-500/20 to-teal-500/20' :
                  'from-blue-500/20 to-purple-500/20'
                } backdrop-blur-sm rounded-full text-sm font-medium border border-white/10`}>
                  {current.category}
                </span>
                <div className="text-sm text-gray-300">
                  {currentProject + 1} / {allProjects.length}
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold">{current.title}</h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-200">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {current.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-200">Fonctionnalités clés :</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {current.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 ${
                          theme === 'commerce' ? 'bg-indigo-400' :
                          theme === 'ai' ? 'bg-pink-400' :
                          theme === 'community' ? 'bg-teal-400' :
                          'bg-blue-400'
                        }`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {showAllTypes && (
                <div className="pt-4">
                  <Link
                    to={current.id <= 3 ? '/commerce' : current.id <= 6 ? '/ai' : '/community'}
                    className={`inline-flex items-center font-medium transition-colors ${
                      current.id <= 3 ? 'text-indigo-400 hover:text-indigo-300' :
                      current.id <= 6 ? 'text-pink-400 hover:text-pink-300' :
                      'text-teal-400 hover:text-teal-300'
                    }`}
                  >
                    Voir tous les projets {current.id <= 3 ? 'E-commerce' : current.id <= 6 ? 'IA' : 'Communautaires'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-12 space-x-2">
            {allProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Vous avez un projet en tête ? Discutons-en !
          </p>
          <Link to="/contact">
            <Button size="lg" className={`bg-gradient-to-r ${currentTheme.button}`}>
              Démarrer un projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectCarousel