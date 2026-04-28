import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { content } from '../../data/content'
import LanguageToggle from '../ui/LanguageToggle'

const SECTIONS = ['work', 'about', 'stack']

export default function Navbar({ onContact, minimal }) {
  const { lang } = useLanguage()
  const activeId = useScrollSpy(SECTIONS)
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = content.nav[lang]
  const location = useLocation()
  const isMinimal = minimal || location.pathname === '/offre'

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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-creme)]/80 backdrop-blur-lg border-b border-[var(--border-warm)]/60">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4">
          {isMinimal ? (
            <Link
              to="/"
              className="font-display text-[17px] font-bold tracking-[-0.02em] text-[var(--ink-strong)]"
            >
              CODELYTHE
            </Link>
          ) : (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="font-display text-[17px] font-bold tracking-[-0.02em] text-[var(--ink-strong)]"
            >
              CODELYTHE
            </a>
          )}

          {isMinimal ? (
            <button
              onClick={onContact}
              className="btn btn-primary !py-2 !px-4 !text-[13px]"
            >
              Contact
            </button>
          ) : (
            <>
              {/* Desktop nav */}
              <div className="hidden items-center gap-8 md:flex">
                {SECTIONS.map((id) => (
                  <button
                    key={id}
                    onClick={() => handleClick(id)}
                    className={`text-[13px] font-medium transition-colors ${
                      activeId === id
                        ? 'text-[var(--accent-deep)]'
                        : 'text-[var(--ink-dim)] hover:text-[var(--ink-strong)]'
                    }`}
                  >
                    {nav[id]}
                  </button>
                ))}
                <LanguageToggle />
                <button
                  onClick={onContact}
                  className="btn btn-primary !py-2 !px-4 !text-[13px]"
                >
                  {nav.contact}
                </button>
              </div>

              {/* Mobile toggle */}
              <div className="flex items-center gap-3 md:hidden">
                <LanguageToggle />
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="text-[var(--ink-dim)] hover:text-[var(--ink-strong)]"
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </>
          )}
        </nav>
      </header>

      {/* Mobile menu */}
      {!isMinimal && mobileOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-[var(--bg-creme)] md:hidden">
          <div className="flex flex-col items-center gap-8 pt-16">
            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`text-lg font-medium transition-colors ${
                  activeId === id
                    ? 'text-[var(--accent-deep)]'
                    : 'text-[var(--ink-dim)] hover:text-[var(--ink-strong)]'
                }`}
              >
                {nav[id]}
              </button>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onContact() }}
              className="btn btn-primary"
            >
              {nav.contact}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
