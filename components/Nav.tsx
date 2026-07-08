'use client'

import { useEffect, useState } from 'react'
import SocialIcons from './SocialIcons'

export default function Nav() {
  const [voorbijCountdown, setVoorbijCountdown] = useState(false)

  useEffect(() => {
    // Countdown balk is ~40px hoog
    const check = () => setVoorbijCountdown(window.scrollY > 40)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  return (
    <div
      className={`fixed left-0 right-0 z-40 px-4 sm:px-6 pt-3 pointer-events-none transition-[top] duration-300 ${
        voorbijCountdown ? 'top-0' : 'top-10'
      }`}
    >
      <nav className="pointer-events-auto max-w-4xl mx-auto h-14 flex items-center justify-between px-5 rounded-2xl bg-[#1E1E1E]/95 backdrop-blur-xl shadow-2xl shadow-black/50">

        {/* Links */}
        <div className="flex items-center gap-4 sm:gap-6 flex-1">
          <a href="/" className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors font-medium">
            Home
          </a>
          <a href="/#founding-member" className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors font-medium">
            Founding Member
          </a>
          <a href="/vertegenwoordiger" className="text-sm text-gray-400 hover:text-white transition-colors font-medium whitespace-nowrap">
            Vertegenwoordiger worden
          </a>
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
        <div className="flex items-center gap-3 flex-1 justify-end">
          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8611A] animate-pulse" />
            <span className="text-xs text-gray-400 font-medium">1 augustus 2026</span>
          </div>
          <SocialIcons size="sm" />
        </div>
      </nav>
    </div>
  )
}
