import ProjectCarousel from '../components/sections/ProjectCarousel'
import Services from '../components/sections/Services'
import About from '../components/sections/About'

const Home = () => {
  return (
    <>
      <ProjectCarousel 
        title="Mes Dernières Réalisations"
        description="Découvrez une sélection de projets qui illustrent mon expertise : sites e-commerce, solutions IA et plateformes communautaires"
      />
      <Services />
      <About />
    </>
  )
}

export default Home