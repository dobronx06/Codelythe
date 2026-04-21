const STACK_ICONS = {
  react: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="2.2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>`,
  nextjs: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 7.5v9M8.5 7.5l7.2 9" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/><rect x="14.5" y="7.5" width="1.2" height="5.5" fill="currentColor"/></svg>`,
  vue: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 4h4l5 8 5-8h4L12 20 3 4Z"/><path d="M8 4h3l1 1.6 1-1.6h3"/></svg>`,
  ts: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="12" y="16" text-anchor="middle" font-family="ui-monospace,monospace" font-size="9" font-weight="700" fill="currentColor">TS</text></svg>`,
  tailwind: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11c1.5-4 4-5 7-3 2 1.3 2.5 2 4 2 2 0 3-1 4-2-1.5 4-4 5-7 3-2-1.3-2.5-2-4-2-2 0-3 1-4 2Z"/><path d="M3 17c1.5-4 4-5 7-3 2 1.3 2.5 2 4 2 2 0 3-1 4-2-1.5 4-4 5-7 3-2-1.3-2.5-2-4-2-2 0-3 1-4 2Z"/></svg>`,
  shadcn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="14" y1="4" x2="4" y2="14"/></svg>`,
  framer: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12v6h-6v6h6v6H6V9h6V3H6Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  node: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z"/><path d="M9 15c0 1.5 1 2 2.5 2s2.5-.6 2.5-2c0-1.2-.7-1.7-2.5-2.2-1.5-.4-2-.8-2-1.8 0-1.2.8-1.8 2-1.8 1.2 0 2 .5 2.2 1.5" stroke-width="1.4"/></svg>`,
  fastify: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 3 4 14 11 14 10 21 20 10 13 10 13 3"/></svg>`,
  express: `<svg viewBox="0 0 24 24" fill="currentColor"><text x="12" y="16" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" font-weight="700" fill="currentColor">e</text><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>`,
  rest: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4M16 12h4M12 4v4M12 16v4"/><circle cx="12" cy="12" r="3"/></svg>`,
  postgres: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5" rx="8" ry="2.5"/><path d="M4 5v8c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5"/><path d="M4 13v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6"/></svg>`,
  prisma: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M11 2 3 18l9 4 9-13L11 2Z"/><path d="M11 2v20"/></svg>`,
  supabase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M13 2 3 14h8v8l10-12h-8V2Z"/></svg>`,
  expo: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v10M7 12h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  rn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="18" r="0.8" fill="currentColor"/></svg>`,
  openai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3a4 4 0 0 0-3.5 6 4 4 0 0 0 0 6 4 4 0 0 0 7 0 4 4 0 0 0 0-6A4 4 0 0 0 12 3Z"/><path d="M8.5 9 12 11l3.5-2M12 11v4" stroke-width="1.4"/></svg>`,
  anthropic: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 4 3 20h3l1.3-4h4.4L13 20h3L11 4H8Zm.2 9 1.6-5.3L11.3 13H8.2Z"/><path d="M17 4h3l-4 16h-3L17 4Z" opacity="0.85"/></svg>`,
  claudecode: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 17 3 12 8 7"/><polyline points="16 7 21 12 16 17"/><line x1="13.5" y1="5" x2="10.5" y2="19"/></svg>`,
  agent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="7" width="14" height="11" rx="2"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><path d="M12 3v4M9 18v3M15 18v3"/></svg>`,
  rag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h10M4 12h10M4 18h7"/><circle cx="18" cy="16" r="3"/><line x1="20" y1="18" x2="22" y2="20"/></svg>`,
  perplexity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18" stroke-width="1.2"/></svg>`,
  pytorch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3 6 9a8.5 8.5 0 1 0 12 0L12 3Z"/><circle cx="15" cy="8" r="1.2" fill="currentColor"/></svg>`,
  git: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M21.6 11.4 12.6 2.4a1.4 1.4 0 0 0-2 0L9 4l2.6 2.6a1.6 1.6 0 0 1 2 2l2.5 2.5a1.6 1.6 0 1 1-1 1l-2.4-2.4v6.3a1.6 1.6 0 1 1-1.4 0V9.7a1.6 1.6 0 0 1-.8-2.1L8 5 2.4 10.6a1.4 1.4 0 0 0 0 2l9 9a1.4 1.4 0 0 0 2 0l8.2-8.2a1.4 1.4 0 0 0 0-2Z"/></svg>`,
  docker: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="12" width="3" height="3"/><rect x="7" y="12" width="3" height="3"/><rect x="11" y="12" width="3" height="3"/><rect x="7" y="8" width="3" height="3"/><rect x="11" y="8" width="3" height="3"/><rect x="11" y="4" width="3" height="3"/><path d="M3 16c0 3 3 4 8 4s7-1 9-4c1-2 1-3 1-3h-3c-.5-.8-1.5-1-2.5-.5"/></svg>`,
  vite: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M2 5h20L12 22 2 5Z"/><circle cx="12" cy="10" r="1.4" fill="currentColor"/></svg>`,
  vercel: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 2 20h20L12 3Z"/></svg>`,
  railway: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 6h18M3 10h18M3 14h18"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></svg>`,
  figma: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><circle cx="15.5" cy="12" r="3"/><path d="M8.5 3h3a3 3 0 0 1 0 6h-3a3 3 0 0 1 0-6Z"/><path d="M8.5 9h3a3 3 0 0 1 0 6h-3a3 3 0 0 1 0-6Z"/><path d="M8.5 15h3a3 3 0 1 1-3 3v-3Z"/></svg>`,
}

export function StackIcon({ name, className = '' }) {
  const svg = STACK_ICONS[name]
  if (!svg) return null
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ width: 14, height: 14 }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export default STACK_ICONS
