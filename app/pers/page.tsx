import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Countdown from '@/components/Countdown'
import Footer from '@/components/Footer'
import { FiDownload, FiImage, FiBookOpen, FiCamera, FiPackage, FiClock } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Pers — OpStap',
  description: 'Perspagina van OpStap: nieuws, feiten en downloadbare materialen zoals logo\'s, huisstijlgids en schermafbeeldingen.',
  alternates: { canonical: '/pers' },
}

const FEITEN = [
  { label: 'Lancering', waarde: '1 september 2026' },
  { label: 'Locatie', waarde: 'Groningen, Nederland' },
  { label: 'Bouwer', waarde: 'Pascal Services' },
  { label: 'Categorie', waarde: 'Social / Lifestyle' },
]

const DOWNLOADS = [
  {
    icoon: FiImage,
    titel: 'Logo\'s & iconen',
    tekst: 'PNG en SVG in verschillende varianten, op transparante achtergrond.',
  },
  {
    icoon: FiBookOpen,
    titel: 'Merkgids',
    tekst: 'Kleuren, typografie en gebruiksregels voor het OpStap-merk.',
  },
  {
    icoon: FiCamera,
    titel: 'Schermafbeeldingen',
    tekst: 'Productfoto\'s van de app op verschillende schermformaten.',
  },
  {
    icoon: FiPackage,
    titel: 'Volledige perskit',
    tekst: 'Alle materialen gebundeld in één download.',
  },
]

export default function PersPage() {
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
              <span className="text-[#E8611A] text-sm font-semibold">Pers</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Persmateriaal<br className="hidden sm:block" />
              <span className="text-[#E8611A]"> over OpStap</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Werk je aan een artikel of item over OpStap? Hieronder vind je de
              feiten, het verhaal en binnenkort ook logo&apos;s, huisstijlgids en
              schermafbeeldingen om te downloaden.
            </p>
          </div>
        </section>

        {/* ── Over OpStap ── */}
        <section className="py-20 sm:py-24 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Het verhaal</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Over OpStap</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg mb-12">
              OpStap koppelt je aan nieuwe mensen die ook vanavond de stad in willen.
              Check in, en OpStap maakt op basis van jouw interesses een groep waarmee
              je die avond op stap gaat. Elke avond om 20:00 uur ontstaan er nieuwe
              groepen, zodat niemand een avond hoeft over te slaan omdat er &apos;toch
              niemand mee kan&apos;.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {FEITEN.map(({ label, waarde }) => (
                <div key={label} className="bg-[#141414] border border-white/5 rounded-2xl p-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">{label}</p>
                  <p className="text-white font-bold">{waarde}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Downloads ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Materialen</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Perskit downloaden</h2>
              <p className="text-gray-400 mt-3 leading-relaxed max-w-xl mx-auto">
                De downloads worden binnenkort toegevoegd. Heb je nu al materiaal nodig?
                Neem <a href="/contact" className="text-[#E8611A] hover:underline">contact</a> met ons op.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {DOWNLOADS.map(({ icoon: Icon, titel, tekst }) => (
                <div key={titel} className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#E8611A]/10 border border-[#E8611A]/20 flex items-center justify-center text-[#E8611A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-white/5 px-2.5 py-1 rounded-full shrink-0">
                      <FiClock className="w-3 h-3" />
                      Binnenkort
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{titel}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{tekst}</p>
                  </div>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    title="Binnenkort beschikbaar"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-white/5 text-gray-500 font-semibold px-5 py-3 rounded-xl text-sm cursor-not-allowed"
                  >
                    <FiDownload className="w-4 h-4" />
                    Downloaden
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="py-20 sm:py-24 bg-[#0A0A0A]">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest mb-3">Persvragen</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Neem contact op</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Voor interviews, quotes of overige persvragen kun je het contactformulier
              gebruiken. We reageren binnen 2 werkdagen.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8611A] hover:bg-[#d4561a] text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base shadow-xl shadow-[#E8611A]/20"
            >
              Neem contact op
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
