import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Intro from './components/sections/Intro'
import Credibility from './components/sections/Credibility'
import Work from './components/sections/Work'
import More from './components/sections/More'
import Journey from './components/sections/Journey'
import About from './components/sections/About'
import Stack from './components/sections/Stack'
import FooterCTA from './components/sections/FooterCTA'
import ContactModal from './components/ui/ContactModal'

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openModal = () => setContactOpen(true)
  const closeModal = () => setContactOpen(false)

  return (
    <>
      <Navbar onContact={openModal} />
      <main>
        <Intro onContact={openModal} />
        <Credibility />
        <Work />
        <More />
        <Journey />
        <About />
        <Stack />
        <FooterCTA onContact={openModal} />
      </main>
      <Footer />
      {contactOpen && <ContactModal onClose={closeModal} />}
    </>
  )
}

export default App
