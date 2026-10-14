import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { content, projects } from '../../data/content'

const featured = projects.filter((p) => p.featured)

function Media({ project }) {
  const dark = project.surface && parseInt(project.surface.slice(1, 3), 16) < 0x60

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener"
      aria-label={`${project.name} · ${project.domain}`}
      className="group relative block rounded-[24px] overflow-hidden aspect-[4/3] border border-[var(--border-warm)] transition-shadow duration-500 hover:shadow-[0_40px_80px_-40px_rgba(18,18,17,0.45)]"
      style={{ background: project.surface }}
    >

      {project.shots ? (
        <div className="absolute inset-0 flex items-end justify-center gap-[6%] pt-[8%]">
          {project.shots.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
              loading="lazy"
              className={`w-[34%] rounded-t-[18px] border border-white/10 shadow-2xl transition-transform duration-500 ${
                i === 0 ? 'translate-y-[6%] group-hover:translate-y-[2%]' : 'translate-y-[14%] group-hover:translate-y-[8%]'
              }`}
            />
          ))}
        </div>
      ) : (
        // Desktop site in a minimal browser window
        <div className="absolute left-[7%] right-[7%] top-[16%] bottom-0 rounded-t-[14px] overflow-hidden bg-white border border-black/10 shadow-[0_30px_60px_-30px_rgba(10,26,18,0.5)] transition-transform duration-500 translate-y-[4%] group-hover:translate-y-[1%]">
          <div className="flex items-center gap-1.5 px-3.5 h-7 border-b border-black/5 bg-[#f7f4ef]">
            <span className="w-2 h-2 rounded-full bg-black/15" />
            <span className="w-2 h-2 rounded-full bg-black/15" />
            <span className="w-2 h-2 rounded-full bg-black/15" />
          </div>
          <img
            src={project.site}
            alt={`${project.name} website`}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      )}

      <span
        className={`absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium tracking-[0.04em] backdrop-blur-md ${
          dark ? 'bg-white/10 text-white border border-white/15' : 'bg-white/85 text-[var(--ink-strong)] border border-black/5'
        }`}
      >
        {project.domain}
      </span>
    </a>
  )
}

function FeaturedRow({ project, index, lang }) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-80px' }}
      className="grid gap-10 lg:gap-16 items-center lg:grid-cols-[1.1fr_1fr]"
    >
      <div className={reversed ? 'lg:order-2' : ''}>
        <Media project={project} />
      </div>

      <div className={reversed ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-3 mb-5">
          <img src={project.icon} alt="" width="40" height="40" className="w-10 h-10 rounded-[11px] border border-[var(--border-warm)]" />
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--ink-dim)]">
            {String(index + 1).padStart(2, '0')} · {project.category[lang]} · {project.year}
          </span>
        </div>

        <h3 className="font-display font-bold text-[clamp(30px,4vw,46px)] tracking-[-0.025em] text-[var(--ink-strong)] leading-[1.02] mb-3">
          <a href={project.url} target="_blank" rel="noopener" className="hover:text-[var(--accent-deep)] transition-colors">
            {project.name}
          </a>
        </h3>
        <p className="text-[19px] text-[var(--ink-strong)] leading-[1.4] mb-4">{project.tagline[lang]}</p>
        <p className="text-[15px] text-[var(--ink)] leading-[1.65] mb-6">{project.desc[lang]}</p>

        {project.metric && (
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-display font-bold text-[clamp(32px,4vw,44px)] text-[var(--accent-deep)] tracking-[-0.03em] leading-none">
              {project.metric.value}
            </span>
            <span className="text-[14px] text-[var(--ink-dim)]">{project.metric.label[lang]}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-7">
          {project.stack.map((s) => (
            <span key={s} className="tech-pill">{s}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener"
              className={`btn ${i === 0 ? 'btn-primary' : 'btn-ghost'} !py-2.5 !px-4 !text-[13px]`}
            >
              {l.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Work() {
  const { lang } = useLanguage()
  const t = content.featured[lang]

  return (
    <section id="work" className="section-padding">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-20">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="font-display font-bold text-[clamp(38px,5vw,64px)] tracking-[-0.03em] leading-[1.02] text-[var(--ink-strong)] mt-3">
              {t.head}
            </h2>
          </div>
          <p className="text-[17px] text-[var(--ink-dim)] max-w-[40ch]">{t.sub}</p>
        </div>

        <div className="flex flex-col gap-28">
          {featured.map((project, i) => (
            <FeaturedRow key={project.id} project={project} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
