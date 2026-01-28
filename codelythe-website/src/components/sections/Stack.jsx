import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content, techStack } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function Stack() {
  const { lang } = useLanguage()
  const t = content.stack[lang]

  const categories = Object.entries(techStack)

  return (
    <section id="stack" className="section-padding">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading heading={t.heading} subheading={t.subheading} />

        <div className="space-y-10">
          {categories.map(([key, category], catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7a8a74]">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="tech-pill"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
