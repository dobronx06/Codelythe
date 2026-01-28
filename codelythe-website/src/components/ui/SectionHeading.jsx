import { motion } from 'framer-motion'

export default function SectionHeading({ heading, subheading, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${dark ? 'text-[#f0ebe3]' : 'text-[#0a1a12]'}`}>
        {heading}
      </h2>
      {subheading && (
        <p className={`mt-4 text-base ${dark ? 'text-[#6b7a64]' : 'text-[#7a8a74]'}`}>{subheading}</p>
      )}
    </motion.div>
  )
}
