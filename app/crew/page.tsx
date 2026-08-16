import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Countdown from '@/components/Countdown'
import Footer from '@/components/Footer'
import Aanmeldformulier from './Aanmeldformulier'
import { FiMapPin, FiEye, FiUsers } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Word OpStap Crew — OpStap',
  description: 'Help mee de app te vullen in Groningen: venues aanmelden, feedback geven en de eerste gebruikers vinden.',
  alternates: { canonical: '/crew' },
}

const TAKEN = [
  {
    icoon: FiMapPin,
    titel: 'Venues aanmelden en up-to-date houden',
    tekst: 'Openingstijden, foto\'s en beschrijvingen van bars, clubs en cafés in Groningen aanvullen en actueel houden.',
  },
  {
    icoon: FiEye,
    titel: 'Vinger aan de pols in de stad',
    tekst: 'Kijken hoe de app gebruikt wordt, wat gebruikers fijn vinden en wat beter kan.',
  },
  {
    icoon: FiUsers,
    titel: 'Meehelpen de eerste community op te bouwen',
    tekst: 'Jij helpt OpStap in Groningen van de grond te krijgen.',
  },
]

export default function CrewPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Countdown />
      <Nav />

      <main className="pt-32">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-opstap-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <div className="inline-flex items-center gap-2 bg-opstap-orange/15 border border-opstap-orange/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-opstap-orange animate-pulse" />
              <span className="text-opstap-orange text-sm font-semibold">We starten in Groningen</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight mb-6">
              Word OpStap<br className="hidden sm:block" />
              <span className="text-opstap-orange"> Crew</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Help mee de app te vullen in Groningen. Jij kent de stad, jij weet welke
              plekken erbij horen.
            </p>
            <a
              href="#aanmelden"
              className="inline-flex mt-8 items-center gap-2 bg-opstap-orange hover:bg-opstap-orange-hover text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base shadow-xl shadow-opstap-orange/20"
            >
              Meld je aan
            </a>
          </div>
        </section>

        {/* ── Wat doe je ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-opstap-orange font-semibold text-sm uppercase tracking-widest mb-3">De rol</p>
              <h2 className="text-3xl sm:text-4xl font-display tracking-tight">Wat doe je als Crew-lid?</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {TAKEN.map(({ icoon: Icon, titel, tekst }) => (
                <div key={titel} className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-opstap-orange/10 border border-opstap-orange/20 flex items-center justify-center text-opstap-orange">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">{titel}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wat krijg je ── */}
        <section className="py-20 sm:py-24 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-opstap-orange font-semibold text-sm uppercase tracking-widest mb-3">Wat je krijgt</p>
              <h2 className="text-3xl sm:text-4xl font-display tracking-tight">Wat krijg je ervoor?</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-opstap-orange bg-opstap-orange/10 px-2 py-1 rounded-md">Nu</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    'Vrijwilligerswerk',
                    'OpStap Crew-badge op je profiel',
                    'Vroege toegang tot nieuwe functies',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-opstap-orange shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-400/10 px-2 py-1 rounded-md">Later</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    'Vergoeding zodra OpStap inkomsten genereert',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Formulier ── */}
        <section id="aanmelden" className="py-20 sm:py-24">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-opstap-orange font-semibold text-sm uppercase tracking-widest mb-3">Aanmelden</p>
              <h2 className="text-3xl sm:text-4xl font-display tracking-tight">Doe mee</h2>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Interesse? Vul het formulier in en we nemen contact op.
              </p>
            </div>
            <Aanmeldformulier />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
