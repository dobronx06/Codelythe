import { useLanguage } from '../../hooks/useLanguage'
import { liveProjects } from '../../data/content'

// Ticker of every live product. The second copy is aria-hidden and
// unfocusable so screen readers and crawlers see each link once.
function Row({ lang, hidden }) {
  return (
    <ul className="flex shrink-0 gap-[72px] pr-[72px]" aria-hidden={hidden || undefined}>
      {liveProjects.map((p) => (
        <li key={p.id}>
          <a
            href={p.url}
            target="_blank"
            rel="noopener"
            tabIndex={hidden ? -1 : undefined}
            className="group inline-flex items-baseline gap-3.5 whitespace-nowrap"
          >
            <span className="font-display font-bold text-[28px] tracking-[-0.02em] text-[var(--accent-light)] group-hover:text-white transition-colors">
              {p.name}
            </span>
            <span className="text-sm text-[#d4cdc3]">{p.category[lang]}</span>
            <span className="ml-1 inline-flex items-center px-2.5 py-1 rounded-full border border-[var(--border-forest-2)] bg-white/[0.06] text-[11px] font-semibold tracking-[0.04em] text-[var(--accent-light)]">
              {p.domain}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Credibility() {
  const { lang } = useLanguage()

  return (
    <section className="relative z-[3]" style={{ marginTop: '-40px', padding: 0 }}>
      <div className="container">
        <div className="rounded-3xl border border-[var(--border-forest)] bg-[var(--bg-forest)] text-[#f5f1ea] overflow-hidden shadow-[0_30px_80px_-30px_rgba(10,26,18,0.45)]">
          <div className="relative py-7 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-20 bg-gradient-to-r from-[var(--bg-forest)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-20 bg-gradient-to-l from-[var(--bg-forest)] to-transparent" />
            <div data-marquee className="flex w-max hover:[animation-play-state:paused]" style={{ animation: 'tickerScroll 40s linear infinite' }}>
              <Row lang={lang} />
              <Row lang={lang} hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
