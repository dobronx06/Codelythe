import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

function DicomVisual() {
  return (
    <div className="relative aspect-square rounded-3xl overflow-hidden border border-[var(--border-forest-2)]" style={{ background: 'radial-gradient(circle at 50% 50%, #0f2218 0%, #05110a 70%)' }}>
      {/* SVG organ illustration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-[85%] h-[85%]" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8">
          {/* Simplified organ/tumor outline */}
          <ellipse cx="100" cy="95" rx="55" ry="65" strokeWidth="1" />
          <ellipse cx="100" cy="95" rx="35" ry="42" strokeDasharray="4 3" />
          <circle cx="80" cy="80" r="12" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.6)" strokeWidth="1.2" />
          <circle cx="115" cy="105" r="9" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.4)" strokeWidth="1" />
          <circle cx="95" cy="120" r="7" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
          {/* Grid lines */}
          <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.3" strokeDasharray="2 4" />
          <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.3" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Scanline */}
      <div
        className="absolute left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.6), transparent)',
          animation: 'scan 4s ease-in-out infinite',
        }}
      />

      {/* Corner metadata */}
      <span className="absolute top-3.5 left-4 font-mono text-[10px] text-[rgba(52,211,153,0.7)] tracking-[0.05em]">
        PINKCC-2025
      </span>
      <span className="absolute top-3.5 right-4 font-mono text-[10px] text-[rgba(52,211,153,0.7)] tracking-[0.05em] text-right">
        CT-SCAN<br/>512×512
      </span>
      <span className="absolute bottom-3.5 left-4 font-mono text-[10px] text-[rgba(52,211,153,0.7)] tracking-[0.05em]">
        UNet 3D
      </span>
      <span className="absolute bottom-3.5 right-4 font-mono text-[10px] text-[rgba(52,211,153,0.7)] tracking-[0.05em] text-right">
        DICE 0.78
      </span>
    </div>
  )
}

export default function PinkccSpotlight() {
  const { lang } = useLanguage()
  const t = content.pinkcc[lang]

  return (
    <section className="relative overflow-hidden bg-[var(--bg-forest)] text-[#f5f1ea]" style={{ padding: '140px 0' }}>
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 20% 30%, rgba(16,185,129,0.08), transparent 50%), radial-gradient(circle at 80% 70%, rgba(245,158,11,0.05), transparent 50%)'
      }} />

      <div className="container relative">
        <div className="grid gap-20 items-center lg:grid-cols-[1.1fr_0.9fr]">
          {/* Body */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow text-[var(--accent-light)] mb-5 block">{t.eyebrow}</span>
            <p className="text-[13px] text-[#a8b5a0] mb-6 tracking-[0.02em]">{t.kicker}</p>
            <h2 className="font-display font-bold text-[clamp(40px,5vw,72px)] tracking-[-0.025em] leading-[1.02] text-[#f5f1ea] whitespace-pre-line mb-7">
              {t.head}
            </h2>
            <p className="text-[19px] text-[#d4cdc3] leading-[1.5] font-medium mb-6">{t.sub}</p>
            <p className="text-[15px] text-[#a8b5a0] leading-[1.7] mb-9 max-w-[54ch]">{t.body}</p>

            {/* Facts grid */}
            <div className="grid grid-cols-2 rounded-[20px] overflow-hidden border border-[var(--border-forest-2)] bg-white/[0.02] backdrop-blur-sm">
              {t.facts.map((fact, i) => (
                <div
                  key={i}
                  className={`px-6 py-5 ${i % 2 === 0 ? 'border-r border-[var(--border-forest)]' : ''} ${i < t.facts.length - 2 ? 'border-b border-[var(--border-forest)]' : ''}`}
                >
                  <div className="text-[11px] text-[#a8b5a0] tracking-[0.14em] uppercase mb-1.5">{fact.k}</div>
                  <div className="font-display font-semibold text-[18px] text-[#f5f1ea] tracking-[-0.01em]">{fact.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <DicomVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
