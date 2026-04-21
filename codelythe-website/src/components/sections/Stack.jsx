import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'
import { StackIcon } from '../../data/stack-icons'

export default function Stack() {
  const { lang } = useLanguage()
  const t = content.stack[lang]

  return (
    <section id="stack" className="bg-[var(--bg-forest)] text-[#f5f1ea]" style={{ padding: '120px 0' }}>
      <div className="container">
        {/* Section head */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <div>
            <span className="eyebrow text-[#a8b5a0]">{t.eyebrow}</span>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] tracking-[-0.025em] leading-[1.02] text-[#f5f1ea] mt-3">
              {t.head}
            </h2>
          </div>
          <p className="text-[17px] text-[#a8b5a0] max-w-[44ch]">{t.sub}</p>
        </div>

        {/* Stack rows */}
        <div className="border-t border-[var(--border-forest)]">
          {content.stack.groups.map((group, gi) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] items-start py-7 border-b border-[var(--border-forest)]"
            >
              <div className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--accent-light)] pt-2 mb-3 md:mb-0">
                {group.label[lang]}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.n}
                    className="inline-flex items-center gap-2 px-3.5 py-[7px] rounded-full bg-white/[0.04] border border-[var(--border-forest-2)] text-[13px] text-[#f5f1ea]"
                  >
                    <StackIcon name={item.ic} className="text-[#f5f1ea] opacity-90" />
                    {item.n}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
