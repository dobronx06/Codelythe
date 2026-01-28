import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Intro from './components/sections/Intro'
import LogoCarousel from './components/sections/LogoCarousel'
import Work from './components/sections/Work'
import Journey from './components/sections/Journey'
import Stack from './components/sections/Stack'
import About from './components/sections/About'
import Internship from './components/sections/Internship'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <LogoCarousel />
        <Work />
        <Journey />
        <Stack />
        <About />
        <Internship />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
