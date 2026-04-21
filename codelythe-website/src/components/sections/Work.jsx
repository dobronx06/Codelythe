import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

function FeaturedRow({ project, index, lang }) {
  const isReversed = index % 2 !== 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-80px' }}
      className={`grid gap-16 items-center ${
        isReversed ? 'lg:grid-cols-[1fr_1.15fr]' : 'lg:grid-cols-[1.15fr_1fr]'
      }`}
    >
      {/* Media */}
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div className="relative rounded-[20px] overflow-hidden border border-[var(--border-warm)] bg-[var(--bg-creme-deep)] aspect-[16/10] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_40px_80px_-40px_rgba(10,26,18,0.35)]">
          {project.tag && (
            <span className="absolute top-4 left-4 z-[2] px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--ink-strong)] border border-[rgba(10,26,18,0.08)]">
              {project.tag[lang]}
            </span>
          )}
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full ${project.imageSquare ? 'object-contain p-[14%]' : 'object-cover object-top'}`}
          />
        </div>
      </div>

      {/* Body */}
      <div className={`${isReversed ? 'lg:order-1' : ''}`}>
        <div className="font-display font-bold text-[11px] tracking-[0.22em] text-[var(--ink-dim)] mb-5">
          {String(index + 1).padStart(2, '0')} / {String(content.featured.items.length).padStart(2, '0')}
        </div>
        <h3 className="font-display font-bold text-[clamp(28px,4vw,40px)] tracking-[-0.015em] text-[var(--ink-strong)] leading-[1.05] mb-3">
          {project.title}
        </h3>
        <p className="text-[18px] text-[var(--ink)] leading-[1.45] mb-4">
          {project.tagline[lang]}
        </p>
        <p className="text-[15px] text-[var(--ink-dim)] leading-[1.6] mb-6">
          {project.blurb[lang]}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-7">
          {project.stack.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>

        {/* Metric */}
        {project.metric && (
          <div className="inline-flex items-baseline gap-3 mb-7 pl-4 border-l-2 border-[var(--accent)]">
            <span className="font-display font-bold text-[clamp(28px,4vw,40px)] text-[var(--accent-deep)] tracking-[-0.02em] leading-none">
              {project.metric.value}
            </span>
            <span className="text-[13px] text-[var(--ink-dim)]">
              {project.metric.label[lang]}
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2.5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              {lang === 'fr' ? 'Voir le projet' : 'View project'}
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Work() {
  const { lang } = useLanguage()
  const t = content.featured[lang]

  return (
    <section id="work" className="section-padding">
      <div className="container">
        {/* Section head */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-20">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="font-display font-bold text-[clamp(40px,5vw,64px)] tracking-[-0.025em] leading-[1.02] text-[var(--ink-strong)] mt-3">
              {t.head}
            </h2>
          </div>
          <p className="text-[17px] text-[var(--ink-dim)] max-w-[44ch]">{t.sub}</p>
        </div>

        {/* Featured rows */}
        <div className="flex flex-col gap-24">
          {content.featured.items.map((project, i) => (
            <FeaturedRow key={project.id} project={project} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
