import { ShoppingCart, ExternalLink, Github, CheckCircle, ArrowRight, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import ProjectCarousel from '../components/sections/ProjectCarousel'
import { projects } from '../data/projects'

const Commerce = () => {
  const commerceProjects = projects.commerce

  const features = [
    'Design responsive et moderne',
    'Système de paiement sécurisé',
    'Gestion de catalogue produits',
    'Dashboard administrateur',
    'Optimisation SEO intégrée',
    'Analytics et reporting',
    'Intégration réseaux sociaux',
    'Support multi-langues'
  ]

  const technologies = [
    { name: 'React', description: 'Interface utilisateur moderne' },
    { name: 'Next.js', description: 'Framework full-stack optimisé' },
    { name: 'Tailwind CSS', description: 'Styling rapide et cohérent' },
    { name: 'Stripe/PayPal', description: 'Paiements sécurisés' },
    { name: 'Shopify/WooCommerce', description: 'Solutions e-commerce' },
    { name: 'Node.js', description: 'Backend performant' },
    { name: 'MongoDB/PostgreSQL', description: 'Bases de données robustes' },
    { name: 'Vercel/Netlify', description: 'Déploiement et hébergement' }
  ]

  return (
    <div className="min-h-screen">
      <ProjectCarousel 
        title="Mes Projets E-commerce & Sites Web"
        description="Solutions complètes pour votre présence digitale : boutiques en ligne, sites vitrines et landing pages performantes"
        projectsData={commerceProjects}
        showAllTypes={false}
        theme="commerce"
      />

      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir mes <span className="text-gradient">solutions e-commerce</span> ?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chaque projet e-commerce est unique. Je développe des solutions sur mesure 
                qui répondent exactement à vos besoins et objectifs business.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg">
                    Discutons de votre projet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center mb-6">
                  <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack E-commerce Complet</h3>
                  <div className="text-3xl font-bold text-primary-600">À partir de 400€</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Design responsive personnalisé
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Système de paiement sécurisé
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dashboard d'administration
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Formation et support 3 mois
                  </li>
                </ul>

                <Link to="/contact" className="block w-full">
                  <Button className="w-full">
                    Demander un devis
                  </Button>
                </Link>
              </div>
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
              Technologies & <span className="text-gradient">Outils</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              J'utilise les meilleures technologies pour créer des solutions robustes et évolutives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>
    </div>
  )
}

export default Commerce