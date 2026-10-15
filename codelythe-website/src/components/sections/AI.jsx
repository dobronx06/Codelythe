import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

export default function AI() {
  const { lang } = useLanguage()
  const t = content.ai[lang]

  return (
    <section id="ai" className="relative overflow-hidden bg-[var(--bg-forest)] text-[#f5f1ea]" style={{ padding: '120px 0' }}>
      <div aria-hidden="true" className="pointer-events-none absolute -top-48 -right-48 w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.22),transparent_65%)]" />

      <div className="relative container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow !text-[#a8b5a0]">{t.eyebrow}</span>
            <h2 className="font-display font-bold text-[clamp(30px,4vw,52px)] tracking-[-0.025em] leading-[1.05] mt-3 whitespace-pre-line">
              {t.head}
            </h2>
          </div>
          <p className="text-[17px] text-[#a8b5a0] max-w-[42ch]">{t.sub}</p>
        </div>

        <div className="grid gap-px rounded-3xl overflow-hidden border border-[var(--border-forest)] bg-[var(--border-forest)] md:grid-cols-2">
          {content.ai.items.map((item, i) => (
            <motion.article
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--bg-forest)] p-8 lg:p-10 flex flex-col transition-colors hover:bg-[var(--bg-forest-2)]"
            >
              <span className="font-display font-bold text-[13px] tracking-[0.2em] text-[var(--accent-light)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-bold text-[22px] tracking-[-0.015em] mt-4 mb-3">{item.title[lang]}</h3>
              <p className="text-[15px] leading-[1.65] text-[#c9cfc4] mb-6">{item.body[lang]}</p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {item.proof.map((p) => (
                  <span key={p} className="px-2.5 py-1 rounded-full border border-[var(--border-forest-2)] bg-white/[0.04] text-[11px] font-medium text-[var(--accent-light)]">
                    {p}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
