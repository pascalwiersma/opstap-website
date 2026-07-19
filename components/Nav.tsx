'use client'

import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import SocialIcons from './SocialIcons'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Provincie Vertegenwoordiger', href: '/vertegenwoordiger' },
]

const CONTACT_LINK = { label: 'Contact', href: '/contact' }
const BEDRIJVEN_LINK = { label: 'Bedrijven & organisaties', href: '/bedrijven' }

export default function Nav() {
  const [voorbijCountdown, setVoorbijCountdown] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Countdown balk is ~40px hoog
    const check = () => setVoorbijCountdown(window.scrollY > 40)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <div
        className={`fixed left-0 right-0 z-40 px-4 sm:px-6 pt-3 pointer-events-none transition-[top] duration-300 ${
          voorbijCountdown ? 'top-0' : 'top-10'
        }`}
      >
        <nav className="pointer-events-auto max-w-4xl mx-auto h-14 flex items-center justify-between px-5 rounded-2xl bg-[#1E1E1E]/95 backdrop-blur-xl shadow-2xl shadow-black/50">

          {/* Links (desktop) */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-6 flex-1">
            {LINKS.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors font-medium whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger (mobiel) */}
          <div className="flex sm:hidden items-center flex-1">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu openen"
              aria-expanded={menuOpen}
              className="text-gray-300 hover:text-white transition-colors text-xl p-1 -m-1"
            >
              <FaBars />
            </button>
          </div>

          {/* Midden: logo alleen */}
          <div className="absolute left-1/2 -translate-x-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-transparant.png"
              alt="OpStap"
              className="w-11 h-11 object-contain drop-shadow-lg"
            />
          </div>

          {/* Rechts */}
          <div className="flex items-center gap-4 sm:gap-5 flex-1 justify-end">
            <a
              href={BEDRIJVEN_LINK.href}
              className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors font-medium whitespace-nowrap"
            >
              {BEDRIJVEN_LINK.label}
            </a>
            <a
              href={CONTACT_LINK.href}
              className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors font-medium whitespace-nowrap"
            >
              {CONTACT_LINK.label}
            </a>
            <SocialIcons size="sm" />
          </div>
        </nav>
      </div>

      {/* Mobiel menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#141414] flex flex-col sm:hidden">
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <a href="/" onClick={() => setMenuOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-transparant.png"
                alt="OpStap"
                className="w-11 h-11 object-contain"
              />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Menu sluiten"
              className="text-gray-300 hover:text-white transition-colors text-2xl p-1 -m-1"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col px-6 pt-6 gap-1">
            {[...LINKS, BEDRIJVEN_LINK, CONTACT_LINK].map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg font-semibold py-4 border-b border-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-auto px-6 pb-10 flex justify-center">
            <SocialIcons />
          </div>
        </div>
      )}
    </>
  )
}
