import { Code, Rocket, Heart, Award, Coffee, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '../ui/Card'

const About = () => {
  const skills = [
    { name: 'React & Next.js', level: 95, color: 'bg-blue-500' },
    { name: 'Node.js & Express', level: 90, color: 'bg-green-500' },
    { name: 'Python & IA', level: 88, color: 'bg-yellow-500' },
    { name: 'Bases de données', level: 85, color: 'bg-purple-500' },
    { name: 'UI/UX Design', level: 82, color: 'bg-pink-500' },
    { name: 'DevOps & Cloud', level: 78, color: 'bg-indigo-500' },
  ]

  const values = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Toujours à la pointe des dernières technologies pour créer des solutions modernes et performantes.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Chaque projet est abordé avec enthousiasme et dévouement pour dépasser vos attentes.'
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Code propre, architecture solide et tests rigoureux pour des applications fiables.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Communication transparente et implication dans chaque étape de votre projet.'
    }
  ]

  const stats = [
    { value: '3+', label: 'Années d\'études' },
    { value: '5+', label: 'Projets réalisés' },
    { value: '100%', label: 'Clients satisfaits' },
    { value: '24h', label: 'Temps de réponse' }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de <span className="text-gradient">Codelythe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développeur passionné, je transforme vos idées en solutions digitales exceptionnelles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center p-8">
                <img 
                  src="/images/codelythe-logo.png" 
                  alt="Codelythe Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-8xl font-bold text-primary-200 opacity-50" style={{display: 'none'}}>
                  C
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <Coffee className="h-8 w-8 text-amber-500" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Étudiant Développeur Full-Stack & Passionné d'IA
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Actuellement en 3ème année d'études en développement web avec une spécialisation 
                en intelligence artificielle, je crée des solutions digitales modernes et innovantes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ma mission ? Transformer vos idées en applications web performantes et intuitives. 
                Que ce soit pour un site vitrine, une plateforme e-commerce ou une 
                solution IA sur mesure, j'apporte fraîcheur et innovation à vos projets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-4 rounded-xl text-center"
                >
                  <div className="text-2xl font-bold text-primary-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Mes Compétences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-full ${skill.color} rounded-full`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Mes Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <Card.Content className="pt-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mb-4">
                      <value.icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </Card.Content>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About