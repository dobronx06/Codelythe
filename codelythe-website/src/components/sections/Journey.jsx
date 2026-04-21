import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content, timeline } from '../../data/content'

const TYPE_COLORS = {
  education: 'bg-blue-500',
  work: 'bg-emerald-500',
  project: 'bg-violet-500',
  milestone: 'bg-amber-500',
}

const TYPE_RING = {
  education: 'ring-blue-500/20',
  work: 'ring-emerald-500/20',
  project: 'ring-violet-500/20',
  milestone: 'ring-amber-500/20',
}

function TimelineEvent({ event, lang, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8"
    >
      <div
        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full ${TYPE_COLORS[event.type]} ring-4 ${TYPE_RING[event.type]} ${
          event.pulse ? 'animate-pulse-soft' : ''
        }`}
      />

      <h4 className="font-display text-base font-semibold text-[#f5f1ea]">
        {event.title[lang]}
      </h4>
      <p className="mt-1 text-sm leading-relaxed text-[#a8b5a0]">
        {event.description[lang]}
      </p>
    </motion.div>
  )
}

export default function Journey() {
  const { lang } = useLanguage()
  const t = content.journey[lang]
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-100px' })

  return (
    <section id="journey" className="bg-[var(--bg-forest)] text-[#f5f1ea]" style={{ padding: '120px 0' }}>
      <div className="container-xs">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="eyebrow text-[#a8b5a0]">{t.heading}</span>
          <p className="text-[17px] text-[#a8b5a0] mt-3">{t.subheading}</p>
        </div>

        {/* Legend */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {[
            { type: 'education', label: lang === 'fr' ? 'Formation' : 'Education' },
            { type: 'work', label: lang === 'fr' ? 'Travail' : 'Work' },
            { type: 'project', label: lang === 'fr' ? 'Projet' : 'Project' },
            { type: 'milestone', label: lang === 'fr' ? 'Jalon' : 'Milestone' },
          ].map(({ type, label }) => (
            <div key={type} className="flex items-center gap-2 text-xs text-[#6b7a64]">
              <span className={`h-2 w-2 rounded-full ${TYPE_COLORS[type]}`} />
              {label}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div ref={lineRef} className="relative">
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-[var(--border-forest-2)]">
            <motion.div
              initial={{ height: '0%' }}
              animate={lineInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="w-full bg-gradient-to-b from-emerald-500/50 to-transparent"
            />
          </div>

          <div className="space-y-16">
            {timeline.map((yearGroup) => (
              <div key={yearGroup.year}>
                <div className="mb-6 pl-8">
                  <span className="font-display text-2xl font-bold text-[var(--accent-light)]">
                    {yearGroup.year}
                  </span>
                </div>
                <div className="space-y-6">
                  {yearGroup.events.map((event, i) => (
                    <TimelineEvent
                      key={`${yearGroup.year}-${i}`}
                      event={event}
                      lang={lang}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
