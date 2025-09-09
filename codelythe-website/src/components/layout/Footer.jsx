import { Code, Mail, Instagram, Linkedin, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/codelythe/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/tom-bouchard-881b212b2' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@codelythe.com' },
  ]

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Projets', href: '/#projects' },
    { name: 'À propos', href: '/#about' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'Sites E-commerce', href: '/commerce' },
    { name: 'Solutions IA', href: '/ai' },
    { name: 'Plateformes Sociales', href: '/community' },
    { name: 'Développement React', href: '#' },
    { name: 'Optimisation SEO', href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Codelythe</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Développement web moderne et solutions digitales sur mesure. 
              Transformons vos idées en réalité numérique.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors group"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary-400 transition-colors flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="hover:text-primary-400 transition-colors flex items-center group"
                  >
                    {service.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary-400" />
                <a href="mailto:contact@codelythe.com" className="hover:text-primary-400 transition-colors">
                  contact@codelythe.com
                </a>
              </p>
              <p className="text-gray-400">
                Réponse sous 24h
              </p>
              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
                >
                  Démarrer un projet
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Codelythe. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer