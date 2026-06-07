import Link from 'next/link'

const LINKS = [
  {
    kop: 'Product',
    items: [
      { label: 'Hoe het werkt', href: '/#hoe-het-werkt' },
      { label: 'Founding Member', href: '/#founding-member' },
      { label: 'Het verhaal', href: '/#verhaal' },
    ],
  },
  {
    kop: 'Juridisch',
    items: [
      { label: 'Privacybeleid', href: '/privacy' },
      { label: 'Gebruiksvoorwaarden', href: '/voorwaarden' },
      { label: 'Community Richtlijnen', href: '/richtlijnen' },
    ],
  },
  {
    kop: 'Contact',
    items: [
      { label: 'info@opstap.app', href: 'mailto:info@opstap.app' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Bovenste rij */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-16">
          {/* Logo + omschrijving */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-transparant.png" alt="OpStap" className="w-20 h-20 object-contain" />
            <p className="text-gray-600 text-xs">Een product van Pascal Services</p>
          </div>

          {/* Navigatie secties */}
          {LINKS.map(sectie => (
            <div key={sectie.kop} className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{sectie.kop}</p>
              <ul className="flex flex-col gap-2.5">
                {sectie.items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Onderkant */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Pascal Services. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8611A] animate-pulse" />
            <span className="text-xs text-gray-500">Lancering 1 juli 2026 · Groningen</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
