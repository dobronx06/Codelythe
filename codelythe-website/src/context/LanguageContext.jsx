import { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('codelythe-lang')
    if (saved) return saved
    const browserLang = navigator.language || navigator.userLanguage
    return browserLang.startsWith('fr') ? 'fr' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('codelythe-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang(prev => (prev === 'fr' ? 'en' : 'fr'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
