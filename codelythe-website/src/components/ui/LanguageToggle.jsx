import { useLanguage } from '../../hooks/useLanguage'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      className="relative flex items-center gap-1 rounded-full border border-[#d4cdc3] bg-[#e6e0d6] px-1 py-1 text-xs font-medium transition-colors hover:border-[#b5afa5]"
      aria-label="Toggle language"
    >
      <span
        className={`rounded-full px-2 py-0.5 transition-all ${
          lang === 'fr'
            ? 'bg-emerald-600 text-white'
            : 'text-[#7a8a74]'
        }`}
      >
        FR
      </span>
      <span
        className={`rounded-full px-2 py-0.5 transition-all ${
          lang === 'en'
            ? 'bg-emerald-600 text-white'
            : 'text-[#7a8a74]'
        }`}
      >
        EN
      </span>
    </button>
  )
}
