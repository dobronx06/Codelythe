import { useLanguage } from '../../hooks/useLanguage'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-[12px] font-medium">
      <button
        onClick={() => setLang('fr')}
        className={`rounded-full px-2.5 py-1 transition-all ${
          lang === 'fr'
            ? 'bg-[var(--accent-deep)] text-white'
            : 'text-[var(--ink-dim)] hover:text-[var(--ink-strong)]'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLang('en')}
        className={`rounded-full px-2.5 py-1 transition-all ${
          lang === 'en'
            ? 'bg-[var(--accent-deep)] text-white'
            : 'text-[var(--ink-dim)] hover:text-[var(--ink-strong)]'
        }`}
      >
        EN
      </button>
    </div>
  )
}
