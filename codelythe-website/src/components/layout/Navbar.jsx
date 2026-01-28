import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { content } from '../../data/content'
import LanguageToggle from '../ui/LanguageToggle'

const SECTIONS = ['work', 'journey', 'stack', 'about', 'contact']

export default function Navbar() {
  const { lang } = useLanguage()
  const activeId = useScrollSpy(SECTIONS)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = content.nav[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleClick = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f0ebe3]/80 backdrop-blur-lg border-b border-[#d4cdc3]/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display text-lg font-bold tracking-tight text-[#0a1a12]"
        >
          CODELYTHE
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`text-sm font-medium transition-colors ${
                activeId === id
                  ? 'text-emerald-600'
                  : 'text-[#7a8a74] hover:text-[#0a1a12]'
              }`}
            >
              {nav[id]}
            </button>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#7a8a74] hover:text-[#0a1a12]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-[#f0ebe3]/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center gap-8 pt-16">
            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`text-lg font-medium transition-colors ${
                  activeId === id
                    ? 'text-emerald-600'
                    : 'text-[#7a8a74] hover:text-[#0a1a12]'
                }`}
              >
                {nav[id]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
