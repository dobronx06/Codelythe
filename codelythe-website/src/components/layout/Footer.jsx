import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

export default function Footer() {
  const { lang } = useLanguage()
  const t = content.footer[lang]
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2e5a3f] bg-[#1a3a2a] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <span className="font-display text-sm font-semibold tracking-tight text-[#6b7a64]">
          CODELYTHE
        </span>
        <span className="text-xs text-[#6b7a64]">
          &copy; {year} Tom Bouchard. {t.rights}
        </span>
      </div>
    </footer>
  )
}
