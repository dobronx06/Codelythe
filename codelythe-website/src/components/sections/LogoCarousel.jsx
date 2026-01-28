import { useLanguage } from '../../hooks/useLanguage'

const COMPANIES = [
  { name: 'Elloha', logo: '/images/logos/elloha.png' },
  { name: 'Hitopic', logo: '/images/logos/hitopic.png' },
  { name: 'Devify', logo: '/images/logos/devify.png' },
  { name: 'Told', logo: '/images/logos/told.png' },
  { name: 'EdgeNiche', logo: null },
]

function LogoGroup({ companies }) {
  return (
    <div className="logo-group">
      {companies.map((company) => (
        <div key={company.name} className="logo-item">
          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-full max-w-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
          ) : null}
          <span className="logo-fallback" style={company.logo ? { display: 'none' } : { display: 'block' }}>
            {company.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function LogoCarousel() {
  const { lang } = useLanguage()
  const label = lang === 'fr' ? 'Ils m\'ont fait confiance' : 'Trusted by'

  return (
    <section className="border-y border-[#2e5a3f] bg-[#1a3a2a] py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-[#6b7a64]">
        {label}
      </p>
      <div className="logo-carousel">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#1a3a2a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#1a3a2a] to-transparent" />
        <LogoGroup companies={COMPANIES} />
        <LogoGroup companies={COMPANIES} />
      </div>
    </section>
  )
}
