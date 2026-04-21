import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

export default function Footer() {
  const { lang } = useLanguage()
  const t = content.footer[lang]
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--bg-forest)] py-12">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-8 flex-wrap">
        <span className="font-display text-[18px] font-bold tracking-[-0.02em] text-[#f5f1ea]">
          CODELYTHE
        </span>
        <span className="text-xs text-[#a8b5a0]">
          &copy; {year} Tom Bouchard. {t.rights}
        </span>
        <div className="flex gap-4 text-[13px]">
          {content.socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8b5a0] transition-colors hover:text-[var(--accent-light)]"
            >
              {s.label.split('/').pop() || s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
