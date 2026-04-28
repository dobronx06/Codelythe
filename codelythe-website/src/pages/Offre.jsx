import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Plus, MessageCircle, FileText, Rocket, Instagram } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import ContactModal from '../components/ui/ContactModal'

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const plans = [
  {
    name: 'Essentiel',
    price: '500€',
    sub: 'one-shot',
    features: [
      'Site one-page sur-mesure',
      'Design mobile-first',
      'Formulaire de contact',
      'Optimisé SEO',
      'Livraison en 2 semaines',
    ],
  },
  {
    name: '+ Hébergement',
    price: '+60€',
    sub: '/mois',
    features: [
      'Nom de domaine inclus',
      'Hébergement rapide & sécurisé',
      'Maintenance & mises à jour',
      'Support prioritaire',
      'Certificat SSL inclus',
    ],
    accent: true,
  },
  {
    name: 'Sur-mesure',
    price: 'Sur devis',
    sub: '',
    features: [
      'Inscriptions & billetterie',
      'Espace membres',
      'Site multi-pages',
      'Multilingue',
      'Fonctionnalités avancées',
    ],
  },
]

const steps = [
  { icon: MessageCircle, title: 'On échange', desc: 'DM Instagram ou formulaire — on discute de votre projet.' },
  { icon: FileText, title: 'Brief & maquette', desc: 'Je vous propose une maquette fidèle à votre identité.' },
  { icon: Rocket, title: 'Livraison', desc: 'Votre site est en ligne, prêt à impressionner.' },
]

const benefits = [
  { text: 'Un site custom, pas un template', optional: false },
  { text: 'Design qui vous ressemble', optional: false },
  { text: 'Performance mobile optimale', optional: false },
  { text: 'Mises à jour faciles (CMS)', optional: false },
  { text: 'Hébergement & domaine en option', optional: true },
  { text: 'Maintenance incluse en option', optional: true },
]

export default function Offre() {
  const [contactOpen, setContactOpen] = useState(false)
  const [prefill, setPrefill] = useState(null)
  const openModal = (planName) => {
    setPrefill({
      message: planName
        ? `Bonjour, je suis intéressé(e) par l'offre ${planName}.\n\n`
        : '',
    })
    setContactOpen(true)
  }
  const closeModal = () => { setContactOpen(false); setPrefill(null) }

  return (
    <>
      <Navbar onContact={() => openModal()} minimal />

      <main>
        {/* ─── Hero ─── */}
        <section
          className="relative overflow-hidden flex items-center justify-center"
          style={{
            background: 'var(--bg-forest)',
            minHeight: '100svh',
          }}
        >
          {/* Radial glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '800px',
              height: '800px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="container text-center relative z-10 py-32">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-8"
              style={{ color: 'var(--accent)' }}
            >
              Offre associations & clubs
            </motion.p>

            <h1 className="font-display font-bold text-[clamp(36px,9vw,90px)] tracking-[-0.04em] leading-[0.95] mb-8" style={{ color: '#f5f1ea' }}>
              {['Votre', 'asso', 'mérite', 'mieux'].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.28em]"
              >
                qu'un
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative inline-block"
                style={{ color: 'var(--accent)' }}
              >
                linktree
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 right-0 top-1/2 h-[3px] md:h-[4px] rounded-full origin-left"
                  style={{ background: 'var(--accent)', transform: 'rotate(-2deg)' }}
                />
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="inline-block"
              >
                .
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[18px] md:text-[21px] max-w-[540px] mx-auto mb-12"
              style={{ color: 'rgba(245,241,234,0.6)' }}
            >
              Un site qui vous ressemble. Livré en 2 semaines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button onClick={() => openModal()} className="btn on-dark btn-primary">
                Discutons de votre projet
              </button>
              <a
                href="#pricing"
                className="btn on-dark btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Voir les offres
              </a>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="mt-16 md:mt-24"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-[1px] h-10 mx-auto rounded-full"
                style={{ background: 'linear-gradient(to bottom, rgba(16,185,129,0.5), transparent)' }}
              />
            </motion.div>
          </div>
        </section>

        {/* ─── Pricing ─── */}
        <section id="pricing" className="section-padding" style={{ background: 'var(--bg-creme)' }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="eyebrow mb-4">Tarifs</p>
              <h2 className="font-display font-bold text-[clamp(28px,5vw,48px)] tracking-[-0.03em] text-[var(--ink-strong)]">
                Simple et transparent
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3 max-w-[960px] mx-auto">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl border p-8 flex flex-col ${
                    plan.accent
                      ? 'bg-[var(--bg-forest)] text-[#f5f1ea] border-[var(--border-forest-2)]'
                      : 'bg-white border-[var(--border-warm)]'
                  }`}
                >
                  <p className={`text-sm font-medium mb-1 ${plan.accent ? 'text-[var(--accent-light)]' : 'text-[var(--ink-dim)]'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display font-bold text-[36px] tracking-[-0.02em]">
                      {plan.price}
                    </span>
                    {plan.sub && (
                      <span className={`text-sm ${plan.accent ? 'text-[rgba(245,241,234,0.5)]' : 'text-[var(--ink-dim)]'}`}>
                        {plan.sub}
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14px]">
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: plan.accent ? 'var(--accent-light)' : 'var(--accent-deep)' }}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openModal(`${plan.name} (${plan.price}${plan.sub ? ' ' + plan.sub : ''})`)}
                    className={`btn w-full justify-center ${
                      plan.accent ? 'on-dark btn-primary' : 'btn-ghost'
                    }`}
                  >
                    Choisir
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Benefits ─── */}
        <section className="section-padding" style={{ background: 'var(--bg-creme-deep)' }}>
          <div className="container-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="eyebrow mb-4">Avantages</p>
              <h2 className="font-display font-bold text-[clamp(28px,5vw,48px)] tracking-[-0.03em] text-[var(--ink-strong)]">
                Ce que vous obtenez
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 max-w-[640px] mx-auto">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-3 rounded-xl border px-5 py-4 ${
                    b.optional
                      ? 'bg-[var(--bg-creme)] border-dashed border-[var(--border-warm)]'
                      : 'bg-white border-[var(--border-warm)]'
                  }`}
                >
                  {b.optional ? (
                    <Plus size={18} style={{ color: 'var(--ink-dim)' }} className="shrink-0" />
                  ) : (
                    <Check size={18} style={{ color: 'var(--accent-deep)' }} className="shrink-0" />
                  )}
                  <span className={`text-[15px] font-medium ${b.optional ? 'text-[var(--ink-dim)]' : 'text-[var(--ink-strong)]'}`}>
                    {b.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Process ─── */}
        <section className="section-padding" style={{ background: 'var(--bg-creme)' }}>
          <div className="container-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="eyebrow mb-4">Process</p>
              <h2 className="font-display font-bold text-[clamp(28px,5vw,48px)] tracking-[-0.03em] text-[var(--ink-strong)]">
                3 étapes, c'est tout
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-[800px] mx-auto">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: 'rgba(16,185,129,0.1)' }}
                    >
                      <Icon size={22} style={{ color: 'var(--accent-deep)' }} />
                    </div>
                    <p className="font-display font-semibold text-[17px] tracking-[-0.01em] text-[var(--ink-strong)] mb-2">
                      {step.title}
                    </p>
                    <p className="text-[14px] text-[var(--ink-dim)] leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section
          className="text-center"
          style={{ padding: '120px 0', background: 'var(--bg-forest)' }}
        >
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="font-display font-bold text-[clamp(32px,7vw,72px)] tracking-[-0.03em] leading-[1.05] mb-6"
              style={{ color: '#f5f1ea' }}
            >
              Prêt à lancer
              <br />
              votre site ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-[17px] mb-10"
              style={{ color: 'rgba(245,241,234,0.6)' }}
            >
              Contactez-moi et recevez une maquette sous 48h.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button onClick={() => openModal()} className="btn on-dark btn-primary">
                Me contacter
              </button>
              <a
                href="https://instagram.com/codelythe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn on-dark btn-secondary"
              >
                <Instagram size={16} />
                @codelythe
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ─── Footer minimal ─── */}
      <footer
        className="py-8 text-center text-[13px]"
        style={{ background: 'var(--bg-forest)', color: 'rgba(245,241,234,0.4)', borderTop: '1px solid var(--border-forest)' }}
      >
        Tom &middot;{' '}
        <a
          href="https://instagram.com/codelythe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition-colors"
        >
          @codelythe
        </a>{' '}
        &middot;{' '}
        <a
          href="/"
          className="hover:text-[var(--accent)] transition-colors"
        >
          codelythe.com
        </a>
      </footer>

      {contactOpen && <ContactModal onClose={closeModal} prefill={prefill} />}
    </>
  )
}
