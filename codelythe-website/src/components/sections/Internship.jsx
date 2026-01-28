import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function Internship() {
  const { lang } = useLanguage()
  const t = content.internship[lang]

  return (
    <section id="internship" className="section-padding">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading heading={t.heading} subheading={t.subheading} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 sm:p-12"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-sm font-semibold text-amber-700">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-amber-500" />
            {t.badge}
          </div>

          <h3 className="font-display text-2xl font-bold text-[#0a1a12] sm:text-3xl">
            {t.title}
          </h3>

          <p className="mt-2 text-lg font-medium text-amber-700">
            {t.period}
          </p>

          <p className="mt-4 max-w-2xl leading-relaxed text-[#4a5d4f]">
            {t.description}
          </p>

          <ul className="mt-8 space-y-3">
            {t.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-[#4a5d4f]">
                <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-amber-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition-all hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/25"
            >
              {t.cta}
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
