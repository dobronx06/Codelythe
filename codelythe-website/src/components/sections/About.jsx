import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  const { lang } = useLanguage()
  const t = content.about[lang]

  return (
    <section id="about" className="dark-section section-padding bg-[#1a3a2a]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading heading={t.heading} subheading={t.subheading} dark />

        <div className="grid gap-16 lg:grid-cols-5 lg:items-start">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="overflow-hidden rounded-2xl border border-[#2e5a3f] bg-[#224433]">
              <img
                src="/images/codelythe-logo.png"
                alt="Tom Bouchard"
                className="w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="hidden h-full w-full items-center justify-center text-6xl font-bold text-[#3a7050]"
                style={{ display: 'none' }}
              >
                TB
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-3"
          >
            {t.bio.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-[#a8b5a0]">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
