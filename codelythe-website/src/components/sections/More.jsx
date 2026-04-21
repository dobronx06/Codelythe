import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

function PinkccVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[var(--bg-forest)]">
      <svg viewBox="0 0 160 100" className="w-3/4 h-3/4" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="0.8">
        <ellipse cx="80" cy="50" rx="40" ry="30" />
        <circle cx="70" cy="45" r="8" fill="rgba(16,185,129,0.15)" strokeWidth="1" />
        <circle cx="90" cy="55" r="5" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.4)" />
      </svg>
    </div>
  )
}

function MoreCard({ item, lang, index }) {
  const Wrapper = item.url ? 'a' : 'div'
  const wrapperProps = item.url ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <Wrapper
        {...wrapperProps}
        className="block bg-white border border-[var(--border-warm)] rounded-[18px] overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:border-[rgba(10,26,18,0.2)] hover:shadow-[0_24px_48px_-24px_rgba(10,26,18,0.18)] cursor-pointer"
      >
        {/* Image */}
        <div className="aspect-[16/10] bg-[var(--bg-creme-deep)] overflow-hidden">
          {item.customVisual === 'pinkcc' ? (
            <PinkccVisual />
          ) : item.img ? (
            <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-[var(--ink-dim)]/20">
              {item.title[0]}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 pb-6">
          <div className="text-[11px] text-[var(--ink-dim)] tracking-[0.14em] uppercase font-semibold mb-1.5">
            {item.type[lang]}
          </div>
          <h4 className="text-[18px] font-semibold text-[var(--ink-strong)] tracking-[-0.01em] mb-2.5">
            {item.title}
          </h4>
          <div className="flex flex-wrap gap-1">
            {item.stack.map((s) => (
              <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] text-[var(--accent-deep)]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.div>
  )
}

export default function More() {
  const { lang } = useLanguage()
  const t = content.more[lang]

  return (
    <section className="section-padding">
      <div className="container">
        {/* Section head */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] tracking-[-0.025em] leading-[1.02] text-[var(--ink-strong)] mt-3">
              {t.head}
            </h2>
          </div>
          <p className="text-[17px] text-[var(--ink-dim)] max-w-[44ch]">{t.sub}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.more.items.map((item, i) => (
            <MoreCard key={item.id} item={item} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
