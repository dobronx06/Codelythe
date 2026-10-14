import { useLanguage } from '../../hooks/useLanguage'
import { content, liveProjects } from '../../data/content'

export default function Footer() {
  const { lang } = useLanguage()
  const t = content.footer[lang]
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--bg-forest)] text-[var(--ink-on-dark)] pt-16 pb-10">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr] pb-12 border-b border-[var(--border-forest)]">
          <div>
            <span className="font-display text-[20px] font-bold tracking-[-0.02em]">CODELYTHE</span>
            <p className="mt-3 max-w-[34ch] text-[14px] leading-[1.6] text-[var(--ink-on-dark-dim)]">
              {lang === 'fr'
                ? 'Studio indépendant de Tom Bouchard. Apps, sites et outils IA, de l\'idée à la mise en ligne.'
                : 'Independent studio by Tom Bouchard. Apps, websites and AI tools, from idea to launch.'}
            </p>
          </div>

          <nav aria-label={t.products}>
            <span className="eyebrow !text-[var(--ink-on-dark-dim)]">{t.products}</span>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {liveProjects.map((p) => (
                <li key={p.id}>
                  <a href={p.url} target="_blank" rel="noopener" className="text-[14px] hover:text-[var(--accent-light)] transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <span className="eyebrow !text-[var(--ink-on-dark-dim)]">{t.elsewhere}</span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {content.socials.map((s) => (
                <li key={s.id}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[var(--ink-on-dark-dim)] hover:text-[var(--accent-light)] transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[12px] text-[var(--ink-on-dark-dim)]">
          <span>&copy; {year} Tom Bouchard. {t.rights}</span>
          <span>codelythe.com</span>
        </div>
      </div>
    </footer>
  )
}
