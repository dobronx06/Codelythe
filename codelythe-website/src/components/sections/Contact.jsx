import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

const SOCIAL_LINKS = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:codelythe@gmail.com',
    label: 'codelythe@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/tom-bouchard-881b212b2',
    label: 'Tom Bouchard',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/TomBmusic',
    label: 'GitHub',
  },
]

export default function Contact() {
  const { lang } = useLanguage()
  const t = content.contact[lang]
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
      )
      setStatus('success')
      formRef.current?.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="dark-section section-padding bg-[#1a3a2a]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading heading={t.heading} subheading={t.subheading} dark />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-[#6b7a64]">
              {t.or}
            </p>

            <div className="space-y-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-[#2e5a3f] bg-[#224433] p-4 transition-all hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Icon size={20} className="text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#f0ebe3]">{link.name}</div>
                      <div className="text-xs text-[#6b7a64]">{link.label}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="user_name" className="mb-2 block text-sm font-medium text-[#a8b5a0]">
                {t.nameLabel}
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                placeholder={t.namePlaceholder}
                className="w-full rounded-xl border border-[#2e5a3f] bg-[#224433] px-4 py-3 text-[#f0ebe3] placeholder-[#6b7a64] outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="mb-2 block text-sm font-medium text-[#a8b5a0]">
                {t.emailLabel}
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                placeholder={t.emailPlaceholder}
                className="w-full rounded-xl border border-[#2e5a3f] bg-[#224433] px-4 py-3 text-[#f0ebe3] placeholder-[#6b7a64] outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#a8b5a0]">
                {t.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder={t.messagePlaceholder}
                className="w-full resize-none rounded-xl border border-[#2e5a3f] bg-[#224433] px-4 py-3 text-[#f0ebe3] placeholder-[#6b7a64] outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50"
            >
              {status === 'sending' ? t.sending : t.send}
              <Send size={16} />
            </button>

            {status === 'success' && (
              <p className="text-sm text-emerald-400">{t.success}</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">{t.error}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
