import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

export default function About() {
  const { lang } = useLanguage()
  const t = content.about[lang]

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid gap-16 items-center lg:grid-cols-[0.8fr_1.2fr]">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--border-warm)] bg-[var(--bg-creme-deep)]">
              <img
                src="/images/1766693087603.jpeg"
                alt="Tom Bouchard"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="font-display font-bold text-[clamp(36px,4.5vw,56px)] tracking-[-0.025em] leading-[1.02] text-[var(--ink-strong)] mt-3 mb-7 whitespace-pre-line">
              {t.head}
            </h2>

            {t.bio.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.65] text-[var(--ink)] mb-4">
                {p}
              </p>
            ))}

            {/* Stats */}
            <div className="flex gap-10 mt-9 mb-9 flex-wrap">
              {t.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="font-display font-bold text-[22px] text-[var(--ink-strong)] tracking-[-0.015em]">
                    {stat.v}
                  </span>
                  <span className="text-xs text-[var(--ink-dim)] tracking-[0.06em]">
                    {stat.k}
                  </span>
                </div>
              ))}
            </div>

            <a href={lang === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.cvCta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
