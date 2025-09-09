import { Brain, ExternalLink, Github, CheckCircle, ArrowRight, Zap, Bot, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import ProjectCarousel from '../components/sections/ProjectCarousel'
import { projects } from '../data/projects'

const AI = () => {
  const aiProjects = projects.ai

  const aiServices = [
    {
      icon: Bot,
      title: 'Chatbots Intelligents',
      description: 'Assistants conversationnels personnalisés pour améliorer l\'expérience client.',
      features: ['Compréhension du langage naturel', 'Réponses contextuelles', 'Intégration multi-canal', 'Apprentissage continu']
    },
    {
      icon: Cpu,
      title: 'Agents Autonomes',
      description: 'Systèmes intelligents capables d\'exécuter des tâches complexes de manière autonome.',
      features: ['Automatisation de processus', 'Prise de décision', 'Intégration API', 'Monitoring en temps réel']
    },
    {
      icon: Zap,
      title: 'Automatisation IA',
      description: 'Solutions d\'automatisation intelligente pour optimiser vos workflows.',
      features: ['Analyse prédictive', 'Optimisation de processus', 'Intégration système', 'Reporting avancé']
    }
  ]

  const technologies = [
    { name: 'Python', description: 'Langage de référence pour l\'IA' },
    { name: 'OpenAI GPT', description: 'Modèles de langage avancés' },
    { name: 'LangChain', description: 'Framework pour applications IA' },
    { name: 'TensorFlow', description: 'Machine Learning et Deep Learning' },
    { name: 'Hugging Face', description: 'Modèles pré-entraînés' },
    { name: 'Vector Databases', description: 'Stockage de données vectorielles' },
    { name: 'FastAPI', description: 'APIs haute performance' },
    { name: 'Docker', description: 'Conteneurisation et déploiement' }
  ]

  const useCases = [
    {
      title: 'Service Client',
      description: 'Chatbots pour répondre aux questions fréquentes 24/7',
      savings: '70% de réduction des tickets support'
    },
    {
      title: 'Génération de Contenu',
      description: 'Création automatique de textes marketing et SEO',
      savings: '80% de temps économisé'
    },
    {
      title: 'Analyse de Documents',
      description: 'Extraction et analyse automatique d\'informations',
      savings: '90% d\'erreurs en moins'
    },
    {
      title: 'Trading Automatisé',
      description: 'Bots de trading basés sur l\'analyse prédictive',
      savings: 'ROI moyen de +25%'
    }
  ]

  return (
    <div className="min-h-screen">
      <ProjectCarousel 
        title="Mes Solutions IA & Agents Intelligents"
        description="Technologies d'avant-garde pour automatiser et optimiser vos processus business"
        projectsData={aiProjects}
        showAllTypes={false}
        theme="ai"
      />

      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Services <span className="text-gradient">IA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'idée à la mise en production, je développe des solutions IA adaptées à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center group">
                  <Card.Header>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-blue-200 transition-colors">
                      <service.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card.Header>
                  <Card.Content>
                    <ul className="space-y-2 text-left">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Content>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cas d'<span className="text-gradient">Usage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Découvrez comment l'IA peut transformer votre business
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-left">
                    <Card.Header>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 mb-4">{useCase.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        <Zap className="h-4 w-4 mr-1" />
                        {useCase.savings}
                      </div>
                    </Card.Header>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technologies & <span className="text-gradient">Stack IA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              J'utilise les technologies les plus avancées pour développer vos solutions IA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <Card.Content className="pt-6">
                    <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </Card.Content>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl text-center"
          >
            <Brain className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à transformer votre business avec l'IA ?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et découvrons ensemble comment l'IA peut 
              révolutionner votre activité.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Planifier une consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AI