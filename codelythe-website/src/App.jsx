import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import Offre from './pages/Offre'

function Portfolio() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/offre" element={<Offre />} />
    </Routes>
  )
}

export default App
