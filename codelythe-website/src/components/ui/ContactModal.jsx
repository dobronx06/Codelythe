import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

export default function ContactModal({ onClose }) {
  const { lang } = useLanguage()
  const t = content.contact[lang]
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

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
      setStatus('sent')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-8"
      style={{
        background: 'rgba(10,26,18,0.55)',
        backdropFilter: 'blur(6px)',
        animation: 'backdropIn 0.25s ease-out',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <style>{`@keyframes backdropIn { from { opacity:0; } to { opacity:1; } }
@keyframes modalIn { from { opacity:0; transform: translateY(12px) scale(0.98); } to { opacity:1; transform: translateY(0) scale(1); } }`}</style>

      <div
        className="relative w-full max-w-[560px] max-h-[90vh] overflow-auto bg-[#f5f1ea] rounded-3xl border border-[var(--border-warm)] shadow-[0_60px_120px_-40px_rgba(10,26,18,0.5)] p-10"
        style={{ animation: 'modalIn 0.3s cubic-bezier(0.16,1,0.3,1)' }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[var(--border-warm)] flex items-center justify-center text-[var(--ink-dim)] hover:bg-white hover:text-[var(--ink-strong)] transition-all"
        >
          <X size={16} />
        </button>

        <h3 className="font-display font-bold text-[32px] tracking-[-0.02em] text-[var(--ink-strong)] mb-2">
          {t.head}
        </h3>
        <p className="text-sm text-[var(--ink-dim)] mb-6">{t.sub}</p>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-3.5">
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--ink-dim)] mb-1.5">
              {t.nameL}
            </label>
            <input
              type="text"
              name="user_name"
              placeholder={t.nameP}
              required
              className="w-full px-3.5 py-3 rounded-[10px] border border-[var(--border-warm)] bg-white text-sm text-[var(--ink-strong)] focus:outline-none focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(16,185,129,0.15)] transition-all"
            />
          </div>

          <div className="mb-3.5">
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--ink-dim)] mb-1.5">
              {t.emailL}
            </label>
            <input
              type="email"
              name="user_email"
              placeholder={t.emailP}
              required
              className="w-full px-3.5 py-3 rounded-[10px] border border-[var(--border-warm)] bg-white text-sm text-[var(--ink-strong)] focus:outline-none focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(16,185,129,0.15)] transition-all"
            />
          </div>

          <div className="mb-3.5">
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--ink-dim)] mb-1.5">
              {t.msgL}
            </label>
            <textarea
              name="message"
              placeholder={t.msgP}
              required
              rows={5}
              className="w-full px-3.5 py-3 rounded-[10px] border border-[var(--border-warm)] bg-white text-sm text-[var(--ink-strong)] resize-none focus:outline-none focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[rgba(16,185,129,0.15)] transition-all"
            />
          </div>

          <div className="flex items-center gap-3 mt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-primary"
            >
              {status === 'sending' ? t.sending : status === 'sent' ? t.sent : t.send}
            </button>
            {status === 'error' && (
              <span className="text-xs text-red-600">Error</span>
            )}
          </div>
        </form>

        {/* Or find me here */}
        <div className="mt-7 pt-6 border-t border-[var(--border-warm)]">
          <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--ink-dim)] mb-2.5">
            {t.or}
          </div>
          <div className="flex flex-col gap-2">
            {content.socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--ink-strong)] hover:text-[var(--accent-deep)] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
