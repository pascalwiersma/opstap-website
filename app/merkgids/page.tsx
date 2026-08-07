import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Countdown from '@/components/Countdown'
import Footer from '@/components/Footer'
import { FiCheck, FiDownload, FiDroplet, FiImage, FiType, FiX } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Merkgids — OpStap',
  description: 'Kleuren, typografie en logogebruik van het OpStap-merk, voor pers en samenwerkingspartners.',
  alternates: { canonical: '/merkgids' },
}

const KLEUREN = [
  { naam: 'OpStap Oranje', hex: '#F1A74E', omschrijving: "Primaire merkkleur — CTA's, actieve staat, accenten." },
  { naam: 'Route Teal', hex: '#168786', omschrijving: 'Secundaire accentkleur, zoals de pin in het logo.' },
  { naam: 'Licht Teal', hex: '#4AA6A4', omschrijving: 'Subtiele teal-tint voor randen en iconen op lichte vlakken.' },
  { naam: 'Teal (tekst op donker)', hex: '#0D6666', omschrijving: 'Voor teal-gekleurde tekst op een donkere of gekleurde achtergrond.' },
]

const ACHTERGRONDEN = [
  { naam: 'Basis', hex: '#0D0D0D' },
  { naam: 'Sectievlak', hex: '#0A0A0A' },
  { naam: 'Kaartvlak', hex: '#141414' },
]

export default function MerkgidsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Countdown />
      <Nav />

      <main className="pt-32">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-opstap-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 text-center relative">
            <p className="text-opstap-orange font-semibold text-sm uppercase tracking-widest mb-3">Voor pers &amp; partners</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.05] tracking-tight mb-6">
              Merkgids
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Kleuren, typografie en logogebruik van OpStap, voor wie ergens over
              OpStap schrijft of ermee samenwerkt.
            </p>
          </div>
        </section>

        {/* ── Logo ── */}
        <section className="py-20 sm:py-24 bg-[#0A0A0A]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-opstap-orange/10 border border-opstap-orange/20 flex items-center justify-center text-opstap-orange shrink-0">
                <FiImage className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display tracking-tight">Logo</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 flex flex-col items-center gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-transparant.png" alt="OpStap-logo, transparante versie" className="w-40 h-40 object-contain" />
                <div className="text-center">
                  <p className="font-bold mb-1">Transparant</p>
                  <p className="text-gray-400 text-sm">Voor gebruik op gekleurde of donkere achtergronden.</p>
                </div>
                <a
                  href="/logo-transparant.png"
                  download
                  className="inline-flex items-center gap-2 text-sm font-semibold text-opstap-orange hover:text-white bg-opstap-orange/10 hover:bg-opstap-orange border border-opstap-orange/30 transition-colors px-4 py-2 rounded-full"
                >
                  <FiDownload className="w-4 h-4" />
                  Downloaden (PNG)
                </a>
              </div>

              <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 flex flex-col items-center gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="OpStap-logo, vierkante versie" className="w-40 h-40 object-contain rounded-2xl" />
                <div className="text-center">
                  <p className="font-bold mb-1">Vierkant</p>
                  <p className="text-gray-400 text-sm">Voor app-icoon en ronde/vierkante plekken, zoals social profielfoto&apos;s.</p>
                </div>
                <a
                  href="/logo.png"
                  download
                  className="inline-flex items-center gap-2 text-sm font-semibold text-opstap-orange hover:text-white bg-opstap-orange/10 hover:bg-opstap-orange border border-opstap-orange/30 transition-colors px-4 py-2 rounded-full"
                >
                  <FiDownload className="w-4 h-4" />
                  Downloaden (PNG)
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col gap-3">
                <p className="font-bold text-green-400 flex items-center gap-2">
                  <FiCheck className="w-4 h-4" /> Wel
                </p>
                <ul className="text-sm text-gray-400 leading-relaxed flex flex-col gap-1.5 list-disc list-inside">
                  <li>De transparante versie op gekleurde of donkere achtergronden</li>
                  <li>Het vierkante logo voor ronde/vierkante plekken</li>
                  <li>Het logo ademruimte geven om zich heen</li>
                </ul>
              </div>
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col gap-3">
                <p className="font-bold text-red-400 flex items-center gap-2">
                  <FiX className="w-4 h-4" /> Niet
                </p>
                <ul className="text-sm text-gray-400 leading-relaxed flex flex-col gap-1.5 list-disc list-inside">
                  <li>Uitrekken, verdraaien of anderszins vervormen</li>
                  <li>Herkleuren</li>
                  <li>Op een achtergrond zetten waar het contrast wegvalt</li>
                  <li>Eigen effecten toevoegen, zoals een schaduw of gloed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Kleuren ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-opstap-orange/10 border border-opstap-orange/20 flex items-center justify-center text-opstap-orange shrink-0">
                <FiDroplet className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display tracking-tight">Kleuren</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {KLEUREN.map(({ naam, hex, omschrijving }) => (
                <div key={hex} className="bg-[#141414] border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl shrink-0" style={{ backgroundColor: hex }} />
                  <div>
                    <p className="font-bold">{naam}</p>
                    <p className="text-gray-500 text-xs font-mono mb-1">{hex}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{omschrijving}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Achtergronden</p>
            <div className="grid grid-cols-3 gap-4">
              {ACHTERGRONDEN.map(({ naam, hex }) => (
                <div key={hex} className="bg-[#141414] border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-3">
                  <div className="w-full h-14 rounded-xl border border-white/10" style={{ backgroundColor: hex }} />
                  <div className="text-center">
                    <p className="font-medium text-sm">{naam}</p>
                    <p className="text-gray-500 text-xs font-mono">{hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Typografie ── */}
        <section className="py-20 sm:py-24 bg-[#0A0A0A]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-opstap-orange/10 border border-opstap-orange/20 flex items-center justify-center text-opstap-orange shrink-0">
                <FiType className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display tracking-tight">Typografie</h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-[#141414] border border-white/5 rounded-2xl p-8">
                <p className="font-display text-4xl sm:text-5xl mb-4">Bowlby One</p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                  Display-font, één gewicht (Regular). Alleen voor titels en hooks —
                  nooit voor lange alinea&apos;s of lopende tekst.
                </p>
              </div>

              <div className="bg-[#141414] border border-white/5 rounded-2xl p-8">
                <p className="font-sans font-black text-3xl sm:text-4xl mb-2">Montserrat</p>
                <p className="font-sans text-gray-300 mb-4">
                  Regular, Medium, SemiBold, Bold, ExtraBold, Black — voor alle lopende
                  tekst: paragrafen, labels en knoppen.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                  Body-font voor de hele site, app en het dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-opstap-orange font-semibold text-sm uppercase tracking-widest mb-3">Vragen</p>
            <h2 className="text-3xl sm:text-4xl font-display tracking-tight mb-4">Iets niet duidelijk?</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Neem contact op via het contactformulier, dan helpen we je verder.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-opstap-orange hover:bg-opstap-orange-hover text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base shadow-xl shadow-opstap-orange/20"
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
