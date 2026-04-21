import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

export default function Credibility() {
  const { lang } = useLanguage()
  const t = content.credibility[lang]
  const items = t.items
  // Duplicate for infinite ticker
  const doubled = [...items, ...items]

  return (
    <section className="relative z-[3]" style={{ marginTop: '-40px', padding: 0 }}>
      <div className="container">
        <div className="rounded-3xl border border-[var(--border-forest)] bg-[var(--bg-forest)] text-[#f5f1ea] overflow-hidden shadow-[0_30px_80px_-30px_rgba(10,26,18,0.45)]">
          {/* Ticker */}
          <div className="relative py-7 overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-20 bg-gradient-to-r from-[var(--bg-forest)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-20 bg-gradient-to-l from-[var(--bg-forest)] to-transparent" />

            <div
              className="flex gap-[72px] w-max"
              style={{ animation: 'tickerScroll 32s linear infinite' }}
            >
              {doubled.map((item, i) => (
                <div key={i} className="inline-flex items-baseline gap-3.5 whitespace-nowrap">
                  <span className="font-display font-bold text-[32px] tracking-[-0.02em] text-[var(--accent-light)]">
                    {item.number}
                  </span>
                  <span className="text-sm text-[#d4cdc3]">
                    {item.label}
                  </span>
                  <span className="ml-2.5 inline-flex items-center px-2.5 py-1 rounded-full border border-[var(--border-forest-2)] bg-white/[0.06] text-[11px] font-semibold tracking-[0.04em] uppercase text-[var(--accent-light)]">
                    {item.firm}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
