import { useState } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'commerce', label: 'E-commerce' },
    { id: 'ai', label: 'IA & Agentique' },
    { id: 'community', label: 'Communautaires' },
  ]

  const allProjects = [
    ...projects.commerce,
    ...projects.ai,
    ...projects.community
  ]

  const filteredProjects = activeCategory === 'all' 
    ? allProjects.slice(0, 6) 
    : projects[activeCategory]?.slice(0, 3) || []

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes <span className="text-gradient">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Découvrez quelques-uns des projets que j'ai eu le plaisir de développer
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-6xl font-bold text-primary-200 opacity-50">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <a
                        href={project.demoUrl}
                        className="w-full bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-center transition-colors flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Voir le projet
                      </a>
                    </div>
                  </div>
                </div>

                <Card.Header>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </Card.Header>

                <Card.Content>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies :</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Fonctionnalités clés :</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1 h-1 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Vous voulez voir plus de projets dans une catégorie spécifique ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {['commerce', 'ai', 'community'].map((category) => (
              <Link key={category} to={`/${category}`}>
                <Button variant="outline">
                  Voir tous les projets {category === 'commerce' ? 'E-commerce' : category === 'ai' ? 'IA' : 'Communautaires'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects