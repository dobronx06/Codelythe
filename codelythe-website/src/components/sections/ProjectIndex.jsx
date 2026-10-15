import { motion } from 'framer-motion'
import { ArrowUpRight, Lock } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { content, projects } from '../../data/content'

const rest = projects.filter((p) => !p.featured)

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

function Visual({ project }) {
  if (project.customVisual === 'pinkcc') return <PinkccVisual />
  if (project.imgContain) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white">
        <img src={project.img} alt={`${project.name} logo`} loading="lazy" className="max-w-[55%] max-h-[55%] object-contain" />
      </div>
    )
  }
  return (
    <img
      src={project.img}
      alt={project.name}
      loading="lazy"
      className={`w-full h-full object-cover ${project.big ? 'object-center' : 'object-top'} transition-transform duration-700 group-hover:scale-[1.03]`}
    />
  )
}

function Card({ project, lang, index, t }) {
  const Wrapper = project.url ? 'a' : 'div'
  const linkProps = project.url ? { href: project.url, target: '_blank', rel: 'noopener' } : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      viewport={{ once: true }}
      className={project.big ? 'sm:col-span-2' : ''}
    >
      <Wrapper
        {...linkProps}
        className="group flex flex-col h-full bg-white border border-[var(--border-warm)] rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(10,26,18,0.2)] hover:shadow-[0_24px_48px_-24px_rgba(10,26,18,0.18)]"
      >
        <div className={`relative overflow-hidden bg-[var(--bg-creme-deep)] ${project.big ? 'aspect-[16/10] sm:aspect-auto sm:h-[300px]' : 'aspect-[16/10]'}`}>
          <Visual project={project} />
          {project.client && (
            <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[rgba(10,26,18,0.08)] text-[10px] font-semibold tracking-[0.12em] uppercase text-[var(--ink-strong)]">
              {t.client} · {project.client}
            </span>
          )}
        </div>

        <div className="flex flex-col flex-1 p-5 pb-6">
          <div className="text-[11px] text-[var(--ink-dim)] tracking-[0.14em] uppercase font-semibold mb-1.5">
            {project.category[lang]} · {project.year}
          </div>
          <h4 className={`font-display font-bold tracking-[-0.015em] text-[var(--ink-strong)] mb-2 ${project.big ? 'text-[26px]' : 'text-[18px]'}`}>
            {project.name}
          </h4>
          <p className="text-[14px] leading-[1.55] text-[var(--ink)] mb-4">{project.desc[lang]}</p>

          <div className="mt-auto flex items-end justify-between gap-3">
            <div className="flex flex-wrap gap-1">
              {project.stack.map((s) => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] text-[var(--accent-deep)]">
                  {s}
                </span>
              ))}
            </div>
            <span className="shrink-0 flex items-center gap-1 text-[12px] font-medium text-[var(--ink-dim)] group-hover:text-[var(--accent-deep)] transition-colors">
              {project.url ? (
                <>{project.domain && project.domain.length < 24 ? project.domain : t.visit}<ArrowUpRight size={14} /></>
              ) : (
                <><Lock size={12} />{t.private}</>
              )}
            </span>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  )
}

export default function ProjectIndex() {
  const { lang } = useLanguage()
  const t = content.index[lang]

  return (
    <section id="index" className="section-padding">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] tracking-[-0.025em] leading-[1.02] text-[var(--ink-strong)] mt-3">
              {t.head}
            </h2>
          </div>
          <p className="text-[17px] text-[var(--ink-dim)] max-w-[44ch]">{t.sub}</p>
        </div>

        {/* Client names */}
        <ul className="flex flex-wrap items-baseline gap-x-10 gap-y-4 py-8 mb-14 border-y border-[var(--border-warm)]">
          {content.index.clients.map((name, i) => (
            <li
              key={name}
              className={`font-display font-bold tracking-[-0.02em] ${
                i === 0 ? 'text-[clamp(24px,3vw,34px)] text-[var(--ink-strong)]' : 'text-[clamp(17px,2vw,22px)] text-[var(--ink-dim)]'
              }`}
            >
              {name}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <Card key={p.id} project={p} lang={lang} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
