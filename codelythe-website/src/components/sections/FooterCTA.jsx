import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

export default function FooterCTA({ onContact }) {
  const { lang } = useLanguage()
  const t = content.footerCta[lang]

  return (
    <section className="text-center" style={{ padding: '160px 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-display font-bold text-[clamp(56px,9vw,140px)] tracking-[-0.04em] leading-[0.95] text-[var(--ink-strong)] mb-5"
        >
          {t.head}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[17px] text-[var(--ink-dim)] mb-10"
        >
          {t.sub}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button onClick={onContact} className="btn btn-primary">
            {t.cta}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
