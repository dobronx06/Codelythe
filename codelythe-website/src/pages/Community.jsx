import { Users, ExternalLink, Github, CheckCircle, ArrowRight, MessageSquare, Heart, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import ProjectCarousel from '../components/sections/ProjectCarousel'
import { projects } from '../data/projects'

const Community = () => {
  const communityProjects = projects.community

  const communityServices = [
    {
      icon: Users,
      title: 'Réseaux Sociaux Privés',
      description: 'Plateformes sociales sur mesure pour fédérer vos communautés.',
      features: ['Profils utilisateur', 'Timeline personnalisée', 'Système de followers', 'Notifications temps réel']
    },
    {
      icon: MessageSquare,
      title: 'Forums Spécialisés',
      description: 'Espaces de discussion thématiques avec modération avancée.',
      features: ['Catégories et tags', 'Système de réputation', 'Modération IA', 'Intégrations externes']
    },
    {
      icon: Share2,
      title: 'Plateformes Collaboratives',
      description: 'Outils de travail collaboratif et partage de connaissances.',
      features: ['Espaces de travail', 'Partage de fichiers', 'Visioconférence', 'Gestion de projets']
    }
  ]

  const features = [
    {
      icon: Heart,
      title: 'Engagement Utilisateur',
      description: 'Fonctionnalités conçues pour maximiser l\'engagement et la rétention'
    },
    {
      icon: Users,
      title: 'Gestion Communauté',
      description: 'Outils d\'administration pour gérer efficacement votre communauté'
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Systèmes de messagerie et notifications pour une communication fluide'
    },
    {
      icon: Share2,
      title: 'Partage Content',
      description: 'Fonctionnalités de publication et partage de contenu multimédia'
    }
  ]

  const technologies = [
    { name: 'React', description: 'Interface utilisateur interactive' },
    { name: 'Node.js', description: 'Backend robuste et scalable' },
    { name: 'Socket.io', description: 'Communication temps réel' },
    { name: 'GraphQL', description: 'API flexible et performante' },
    { name: 'PostgreSQL', description: 'Base de données relationnelle' },
    { name: 'Redis', description: 'Cache et sessions' },
    { name: 'AWS S3', description: 'Stockage de médias' },
    { name: 'WebRTC', description: 'Communication vidéo/audio' }
  ]

  const benefits = [
    {
      title: 'Augmentation de l\'engagement',
      percentage: '85%',
      description: 'Temps passé sur la plateforme'
    },
    {
      title: 'Réduction des coûts',
      percentage: '60%',
      description: 'Comparé aux solutions SaaS'
    },
    {
      title: 'Personnalisation complète',
      percentage: '100%',
      description: 'Adaptée à votre marque'
    },
    {
      title: 'Support et évolutivité',
      percentage: '24/7',
      description: 'Maintenance et nouvelles fonctionnalités'
    }
  ]

  return (
    <div className="min-h-screen">
      <ProjectCarousel 
        title="Mes Plateformes Communautaires"
        description="Espaces numériques pour fédérer, connecter et faire grandir vos communautés"
        projectsData={communityProjects}
        showAllTypes={false}
        theme="community"
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
              Types de <span className="text-gradient">Plateformes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions communautaires adaptées à tous vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {communityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center group">
                  <Card.Header>
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-200 group-hover:to-teal-200 transition-colors">
                      <service.icon className="h-8 w-8 text-emerald-600" />
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fonctionnalités <span className="text-gradient">Essentielles</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chaque plateforme communautaire est conçue avec les fonctionnalités 
                nécessaires pour créer de l'engagement et favoriser les interactions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="p-2 bg-emerald-100 rounded-lg flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center">
                    <Card.Content className="pt-6">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">{benefit.percentage}</div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </Card.Content>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
              Technologies & <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stack technique robuste pour des plateformes communautaires performantes
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
            className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl text-center"
          >
            <Users className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à créer votre communauté ?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discutons de votre vision et créons ensemble la plateforme communautaire 
              qui fédérera votre audience.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Lancer le projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Community