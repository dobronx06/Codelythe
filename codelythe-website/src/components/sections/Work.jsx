import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { content, projects } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

function ProjectRow({ project, index, lang }) {
  const isReversed = index % 2 !== 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-80px' }}
      className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className="flex-1">
        <div className={`overflow-hidden rounded-2xl border border-[#2e5a3f] bg-[#1a3a2a] ${project.imageSquare ? 'flex aspect-video items-center justify-center p-8' : ''}`}>
          <img
            src={project.image}
            alt={project.title}
            className={project.imageSquare
              ? 'h-full w-auto rounded-xl object-contain drop-shadow-2xl transition-transform hover:scale-105'
              : 'aspect-video w-full object-cover transition-transform hover:scale-[1.02]'
            }
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div
            className={`hidden items-center justify-center bg-[#224433] text-4xl font-bold text-[#3a7050] ${project.imageSquare ? 'h-32 w-32 rounded-xl' : 'aspect-video w-full'}`}
            style={{ display: 'none' }}
          >
            {project.title[0]}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
          <span className="tech-pill">{project.type[lang]}</span>
          {project.metric && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
              {project.metric} {project.metricLabel[lang]}
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl font-bold text-[#0a1a12] lg:text-3xl">
          {project.title}
        </h3>

        <p className="text-sm text-[#7a8a74]">{project.role[lang]}</p>

        <p className="leading-relaxed text-[#4a5d4f]">
          {project.description[lang]}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-500"
          >
            {lang === 'fr' ? 'Voir le projet' : 'View project'}
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Work() {
  const { lang } = useLanguage()
  const t = content.work[lang]
  const [tab, setTab] = useState('client')

  const tabs = [
    { key: 'client', label: t.tabClient },
    { key: 'side', label: t.tabSide },
  ]

  const currentProjects = projects[tab]

  return (
    <section id="work" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading heading={t.heading} subheading={t.subheading} />

        {/* Tab switcher */}
        <div className="mb-16 flex justify-center">
          <div className="inline-flex rounded-full border border-[#2e5a3f] bg-[#1a3a2a] p-1">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  tab === key
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'text-[#6b7a64] hover:text-[#f0ebe3]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Project list */}
        <div className="space-y-24">
          {currentProjects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
