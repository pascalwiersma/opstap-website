import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Countdown from '@/components/Countdown'
import Footer from '@/components/Footer'
import Aanmeldformulier from './Aanmeldformulier'
import { FiMapPin, FiEye, FiUsers } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Word vertegenwoordiger — OpStap',
  description: 'Als vertegenwoordiger van OpStap zorg jij ervoor dat de app lokaal klopt. Jij kent de stad, jij weet welke plekken erbij horen.',
  alternates: { canonical: '/vertegenwoordiger' },
}

const TAKEN = [
  {
    icoon: FiMapPin,
    titel: 'Venues up-to-date houden',
    tekst: 'Openingstijden, foto\'s en beschrijvingen van bars, clubs en cafés in jouw provincie actueel houden.',
  },
  {
    icoon: FiEye,
    titel: 'Lokaal vinger aan de pols',
    tekst: 'Kijken hoe de app gebruikt wordt, wat gebruikers fijn vinden en wat beter kan.',
  },
  {
    icoon: FiUsers,
    titel: 'Aanspreekpunt voor jouw regio',
    tekst: 'Jij vertegenwoordigt OpStap in jouw provincie.',
  },
]

const PROVINCIES: { naam: string; bezet: boolean }[] = [
  { naam: 'Groningen', bezet: true },
  { naam: 'Friesland', bezet: false },
  { naam: 'Drenthe', bezet: false },
  { naam: 'Overijssel', bezet: false },
  { naam: 'Flevoland', bezet: false },
  { naam: 'Gelderland', bezet: false },
  { naam: 'Utrecht', bezet: false },
  { naam: 'Noord-Holland', bezet: false },
  { naam: 'Zuid-Holland', bezet: false },
  { naam: 'Zeeland', bezet: false },
  { naam: 'Noord-Brabant', bezet: false },
  { naam: 'Limburg', bezet: false },
]

export default function VertegenwoordigerPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Countdown />
      <Nav />

      <main className="pt-32">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E8611A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <div className="inline-flex items-center gap-2 bg-[#E8611A]/15 border border-[#E8611A]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E8611A] animate-pulse" />
              <span className="text-[#E8611A] text-sm font-semibold">11 provincies beschikbaar</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Word vertegenwoordiger<br className="hidden sm:block" />
              <span className="text-[#E8611A]"> in jouw provincie</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Als vertegenwoordiger van OpStap zorg jij ervoor dat de app lokaal klopt.
              Jij kent de stad, jij weet welke plekken erbij horen.
            </p>
            <a
              href="#aanmelden"
              className="inline-flex mt-8 items-center gap-2 bg-[#E8611A] hover:bg-[#d4561a] text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base shadow-xl shadow-[#E8611A]/20"
            >
              Meld je aan
            </a>
          </div>
        </section>

        {/* ── Wat doe je ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">De rol</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Wat doe je als vertegenwoordiger?</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {TAKEN.map(({ icoon: Icon, titel, tekst }) => (
                <div key={titel} className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#E8611A]/10 border border-[#E8611A]/20 flex items-center justify-center text-[#E8611A]">
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
              <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Wat je krijgt</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Wat krijg je ervoor?</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E8611A] bg-[#E8611A]/10 px-2 py-1 rounded-md">Nu</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    'Vrijwilligerswerk',
                    'Provincie Vertegenwoordiger badge op je profiel',
                    'Vroege toegang tot nieuwe functies',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8611A] shrink-0" />
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

        {/* ── Provincies ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Beschikbaarheid</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Provincies</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {PROVINCIES.map(({ naam, bezet }) => (
                <div
                  key={naam}
                  className={`rounded-xl border p-4 flex items-center justify-between gap-2 ${
                    bezet
                      ? 'bg-[#E8611A]/5 border-[#E8611A]/20'
                      : 'bg-[#141414] border-white/5'
                  }`}
                >
                  <span className={`text-sm font-medium ${bezet ? 'text-gray-300' : 'text-white'}`}>
                    {naam}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                      bezet
                        ? 'bg-[#E8611A]/15 text-[#E8611A]'
                        : 'bg-green-400/10 text-green-400'
                    }`}
                  >
                    {bezet ? 'Bezet' : 'Vrij'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Formulier ── */}
        <section id="aanmelden" className="py-20 sm:py-24 bg-[#0A0A0A]">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Aanmelden</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Doe mee</h2>
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
