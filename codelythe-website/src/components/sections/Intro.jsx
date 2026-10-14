import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content, projects } from '../../data/content'

const ease = [0.16, 1, 0.3, 1]
const byId = Object.fromEntries(projects.map((p) => [p.id, p]))

// Real app screens shown in the hero, left to right.
const PHONES = [
  { id: 'jutrack', src: '/images/projects/jutrack-home.webp', rotate: -7, y: 36 },
  { id: 'chollo', src: '/images/projects/chollo-2.webp', rotate: 0, y: 0 },
  { id: 'spoily', src: '/images/projects/spoily-1.webp', rotate: 7, y: 36 },
]

// Turns "… {jutrack}, {spoily} …" into text with inline project links.
function LinkedLead({ text }) {
  return text.split(/(\{[a-z-]+\})/).map((part, i) => {
    const p = part.startsWith('{') && byId[part.slice(1, -1)]
    if (!p) return part
    return (
      <a
        key={i}
        href={p.url}
        target="_blank"
        rel="noopener"
        className="font-semibold text-[var(--ink-strong)] underline decoration-[var(--accent)] decoration-2 underline-offset-[5px] transition-colors hover:text-[var(--accent-deep)]"
      >
        {p.name}
      </a>
    )
  })
}

function Phone({ phone, index }) {
  const p = byId[phone.id]
  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noopener"
      aria-label={`${p.name} · ${p.domain}`}
      initial={{ opacity: 0, y: 60, rotate: 0 }}
      animate={{ opacity: 1, y: phone.y, rotate: phone.rotate }}
      transition={{ duration: 0.9, delay: 0.2 + index * 0.1, ease }}
      whileHover={{ y: phone.y - 14, rotate: phone.rotate * 0.6 }}
      className={`group relative block w-[31%] shrink-0 ${index === 1 ? 'z-[2] -mx-[3%]' : 'z-[1]'}`}
    >
      <div className="rounded-[22px] sm:rounded-[28px] overflow-hidden border-[5px] border-[#1c2b23] bg-[#1c2b23] ring-1 ring-white/10 shadow-[0_40px_70px_-30px_rgba(10,26,18,0.55)]">
        <img src={phone.src} alt={`${p.name} app`} className="block w-full h-auto" />
      </div>
      <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-medium text-[#d4cdc3] opacity-0 transition-opacity group-hover:opacity-100">
        {p.domain} ↗
      </span>
    </motion.a>
  )
}

export default function Intro() {
  const { lang } = useLanguage()
  const t = content.hero[lang]

  return (
    <section className="relative overflow-hidden bg-[var(--bg-creme)]" style={{ paddingTop: 140, paddingBottom: 120 }}>
      {/* Backdrop: soft emerald light + outlined wordmark watermark */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.16),transparent_65%)]" />
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-[-0.18em] font-display font-bold leading-none tracking-[-0.04em] whitespace-nowrap text-transparent select-none text-[22vw]"
          style={{ WebkitTextStroke: '1.5px rgba(10,26,18,0.07)' }}
        >
          CODELYTHE
        </div>
      </div>

      <div className="relative container grid gap-16 lg:gap-10 lg:grid-cols-[1.05fr_1fr] items-center">
        {/* Copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            {t.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold text-[clamp(40px,6vw,84px)] leading-[0.95] tracking-[-0.035em] text-[var(--ink-strong)]"
          >
            Tom
            <br />
            Bouchard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-8 max-w-[48ch] text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-[var(--ink)]"
          >
            <LinkedLead text={t.lead} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-4 max-w-[48ch] text-[15px] leading-[1.6] text-[var(--ink-dim)]"
          >
            {t.now}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              {t.workCta}
            </button>
            <a href={lang === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {t.cvCta}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[var(--ink-dim)]"
          >
            {content.socials.map((s) => (
              <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent-deep)]">
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* App screens on a forest-green stage */}
        <div className="relative max-w-[640px] mx-auto w-full">
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
            className="absolute inset-x-0 top-[12%] bottom-[2%] rounded-[36px] overflow-hidden bg-[var(--bg-forest)] shadow-[0_40px_90px_-40px_rgba(10,26,18,0.6)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_110%,rgba(16,185,129,0.45),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(110,231,183,0.18),transparent_40%)]" />
            <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          </motion.div>
          <div className="relative flex items-start justify-center pb-16 px-[4%]">
            {PHONES.map((phone, i) => (
              <Phone key={phone.id} phone={phone} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
